#!/usr/bin/env node
/**
 * build-skill.js — packages the distributable Claude Skill (.skill file)
 * for TidyFactor from the repo's single source of truth.
 */

const fs = require("fs");
const path = require("path");
const { spawnSync, execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const SKILL_NAME = "tidyfactor-js";
const SRC_WRAPPER = path.join(ROOT, ".claude-skill");
const DIST_DIR = path.join(ROOT, "dist");
const STAGE_DIR = path.join(DIST_DIR, SKILL_NAME);
const OUT_FILE = path.join(DIST_DIR, `${SKILL_NAME}.skill`);

const ROOT_COPIES = [
  "memory",
  "templates",
  "references",
  "brand.json",
  "LICENSE"
];

function log(msg) {
  console.log(`[build-skill] ${msg}`);
}

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, dest, { recursive: true });
}

function zipArchive(stagePath, outFile) {
  log("zipping Claude skill archive...");
  if (fs.existsSync(outFile)) fs.rmSync(outFile);

  const pyScript = `import zipfile, os
stage = r"${stagePath}"
out = r"${outFile}"
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk(stage):
        for f in files:
            full = os.path.join(root, f)
            rel = os.path.relpath(full, stage)
            z.write(full, rel)
`;
  execFileSync("python", ["-c", pyScript]);
  const stats = fs.statSync(outFile);
  const kb = (stats.size / 1024).toFixed(1);
  log(`done -> ${path.relative(ROOT, outFile)} (${kb} KB)`);
}

function main() {
  log("running skill validation before build...");
  execFileSync("node", [path.join(__dirname, "validate-skill.js"), "--sync"], { stdio: "inherit" });

  log(`repo root: ${ROOT}`);
  rmrf(STAGE_DIR);
  fs.mkdirSync(STAGE_DIR, { recursive: true });

  copyRecursive(SRC_WRAPPER, STAGE_DIR);

  for (const name of ROOT_COPIES) {
    const src = path.join(ROOT, name);
    if (fs.existsSync(src)) {
      copyRecursive(src, path.join(STAGE_DIR, name));
    }
  }

  fs.mkdirSync(DIST_DIR, { recursive: true });
  zipArchive(STAGE_DIR, OUT_FILE);

  const ssotDistFile = path.join(ROOT, "..", `${SKILL_NAME}.skill`);
  fs.copyFileSync(OUT_FILE, ssotDistFile);
  log(`✓ Updated Skills-LAB root archive -> ${path.relative(ROOT, ssotDistFile)}`);
}

main();
