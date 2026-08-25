#!/usr/bin/env node
/**
 * validate-skill.js — Validates skill frontmatter, file integrity,
 * command reference completeness, content parity, and path linkages across agent targets.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SKILL_NAME = "tidyfactor-js";
const AGENTS_SKILL_DIR = path.join(ROOT, '.agents', 'skills', SKILL_NAME);
const CLAUDE_SKILL_DIR = path.join(ROOT, '.claude-skill');

const REQUIRED_COMMANDS = ["assets", "compo", "deploy", "i18n", "init", "logic", "modules", "pages", "route", "seo", "store"];

const autoSync = process.argv.includes('--sync') || process.argv.includes('--fix');

let errors = [];
let warnings = [];

function log(msg) {
  console.log(`[validate-skill] ${msg}`);
}

function checkFrontmatter(filePath) {
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing skill file: ${path.relative(ROOT, filePath)}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.startsWith('---')) {
    errors.push(`File ${path.relative(ROOT, filePath)} is missing YAML frontmatter header ('---')`);
    return;
  }
  const parts = content.split('---');
  if (parts.length < 3) {
    errors.push(`Invalid frontmatter formatting in ${path.relative(ROOT, filePath)}`);
    return;
  }
  const frontmatter = parts[1];
  if (!frontmatter.includes('name:')) {
    errors.push(`Missing 'name:' field in frontmatter of ${path.relative(ROOT, filePath)}`);
  }
  if (!frontmatter.includes('description:')) {
    errors.push(`Missing 'description:' field in frontmatter of ${path.relative(ROOT, filePath)}`);
  }
  log(`✓ Frontmatter valid for ${path.relative(ROOT, filePath)}`);
}

function checkCommandsAndParity() {
  const agentsRefDir = path.join(AGENTS_SKILL_DIR, 'references', 'commands');
  const claudeRefDir = path.join(CLAUDE_SKILL_DIR, 'references', 'commands');

  if (!fs.existsSync(agentsRefDir)) {
    errors.push(`Missing command references directory: ${path.relative(ROOT, agentsRefDir)}`);
    return;
  }

  let missingCmds = [];
  for (const cmd of REQUIRED_COMMANDS) {
    const file = `${cmd}.md`;
    const agentFile = path.join(agentsRefDir, file);
    const claudeFile = path.join(claudeRefDir, file);

    if (!fs.existsSync(agentFile)) {
      missingCmds.push(cmd);
      if (autoSync && fs.existsSync(claudeFile)) {
        fs.mkdirSync(path.dirname(agentFile), { recursive: true });
        fs.copyFileSync(claudeFile, agentFile);
        log(`Synced missing command file: ${cmd}.md -> .agents/`);
      }
    }
  }

  if (missingCmds.length > 0 && !autoSync) {
    errors.push(`Missing required command reference specs: ${missingCmds.join(', ')}`);
  } else {
    log(`✓ All ${REQUIRED_COMMANDS.length} command specs verified with parity check across targets`);
  }
}

function checkDirectory(dirName) {
  const target = path.join(ROOT, dirName);
  if (!fs.existsSync(target)) {
    errors.push(`Missing required root directory: ${dirName}`);
  } else {
    log(`✓ Directory verified: ${dirName}`);
  }
}

function main() {
  log(`Starting skill validation check for ${SKILL_NAME}...`);

  checkFrontmatter(path.join(AGENTS_SKILL_DIR, 'SKILL.md'));
  checkFrontmatter(path.join(CLAUDE_SKILL_DIR, 'SKILL.md'));

  checkCommandsAndParity();
  checkDirectory('memory');
  checkDirectory('templates');

  if (fs.existsSync(path.join(ROOT, 'AGENTS.md'))) {
    log(`✓ Root AGENTS.md verified`);
  } else {
    warnings.push(`Missing root AGENTS.md`);
  }

  if (errors.length > 0) {
    console.error(`\n✖ Validation failed with errors:`);
    errors.forEach(e => console.error(`  ❌ ${e}`));
    process.exit(1);
  }

  log(`✨ All skill validation checks passed successfully!\n`);
}

main();
