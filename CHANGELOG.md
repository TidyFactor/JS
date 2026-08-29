# Changelog - TidyFactor JS

All notable changes to the **[@tidyfactor/js](https://www.npmjs.com/package/@tidyfactor/js)** package will be documented in this file.

## [1.2.0] - 2026-08-29

### Added - Global Multi-Tier & Multi-Language Documentation Architecture
- **Rule 13 Implementation**: Two-tier documentation separation between Canonical Technical Documentation (`README.md` SSOT) and First-Class Market Localizations.
- **Universal Multi-Language Switcher**: Standardized 8-language switcher navigation bar across all documentation files (`EN`, `AR`, `FA`, `ES`, `PT`, `ZH`, `DE`, `FR`).
- **First-Class Localized Developer Adoption Guides**: `README.es.md`, `README.pt.md`, `README.fa.md`, `README.zh.md`, `README.de.md`, `README.fr.md`.
- **Automated Validation & Packaging**: Updated `tools/build-skill.js` and `tools/validate_skill.py`.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-08-25

### Added
- **Contextual Decision Layer (CDL v1.0)**: Added `references/memory/decision-points.md` with thin arbitration protocol (J1–J5: Client Routing Strategy, Build Tooling, State Management Model, Component Pattern, Output Scope).
- **Brief Command (`/brief`)**: Added `references/commands/brief.md` and `references/workflows/brief.md` for pre-flight Vanilla JS SPA discovery.
- **7-Axis SPA Quality Gate (`P/H/E/S/R/V/D`)**: Added `references/memory/quality-bar.md` enforcing zero framework dependencies, reactive proxy state, and memory leak cleanup.
- **Structured References & Workflows Architecture**: Created `references/memory/` and `references/workflows/` (init, route, store, compo, brief).
- **Validation & CLI Suite**: Added `bin/add-skill.js`, updated `package.json` `"bin"` map, created `tools/validate_skill.py`, and updated `brand.json` version.

---

## [1.0.0] - 2026-07-28
- Initial Release of `@tidyfactor/js`
