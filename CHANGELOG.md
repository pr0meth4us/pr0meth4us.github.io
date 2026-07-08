# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Added local profile image `assets/images/profile.png` and updated references in `index.html` and `about/index.html`.
- Added `.github/workflows/deploy.yaml` to deploy the static employed status page to GitHub Pages.

### Fixed
- Fixed missing `config.js` script tag in all subpage HTML headers, enabling the `isEmployed` mode redirect and CRT terminal style on direct subpage navigation.
- Removed "The 404 Project" from the coding projects view and adjusted the Savvify panel grid layout.

### Changed
- Activated `isEmployed` mode in `assets/js/config.js` to enable the CRT terminal status screen on the main landing page.
- Implemented the CRT terminal employed mode directly on all subpages (About, Projects, Papers, Archive, CV, Contact) and kept the top navigation bar fully visible and functional in employed mode (styled with a green retro-terminal theme).

### Removed
- Removed "Rachana WordPress", "Form Generator", "Grouper", "Mnemosyne", and "Chat Message Analyzer" from the coding projects list in `projects.html` and `projects/index.html`.
