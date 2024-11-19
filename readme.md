# ap-assets-extractor

A Node.js utility to extract asset paths (like images, stylesheets, and scripts) from HTML files. This tool is
particularly useful for Progressive Web Apps (PWA), allowing you to identify assets that need to be cached in your
Service Worker.

## Features

- Extracts asset paths from HTML files.
- Supports images, CSS files, JavaScript files, and more.
- Automatically normalizes asset paths to begin with a `/` (ideal for PWA caching).
- Removes duplicate assets.
- Easily configurable with a base directory and custom HTML file list.

## Installation

```bash
npm install ap-assets-extractor
```

# Usage

```javascript
const AssetExtractor = require("ap-assets-extractor");

const files = ["/index.html", "/about.html", "/blog/mongodb-cheatsheet.html"];
new AssetExtractor("build")
.runExtractor(files)
.then(console.log);
```
