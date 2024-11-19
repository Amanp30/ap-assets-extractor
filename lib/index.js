const fs = require('fs/promises');
const path = require('path');
const htmlAssetExtractor = require("./utils/htmlAssetExtractor");

/**
 * Class to extract assets used in HTML files.
 * @class
 */
class AssetExtractor {
    /**
     * Creates an instance of AssetExtractor.
     * @param {string} baseDir The directory to look for HTML files (default is `build`).
     */
    constructor(baseDir = "build") {
        this.baseDir = baseDir;
    }

    /**
     * Extracts assets from HTML files.
     * @param {string[]} files Array of file paths relative to the baseDir.
     * @param {boolean} logMessage Whether to log the extracted assets (default is false).
     * @returns {Promise<string[]>} A promise that resolves to an array of unique asset paths.
     */
    async runExtractor(files = [], logMessage = false) {
        const extractedAssets = new Set();

        for (const file of files) {
            try {
                const filePath = path.join(process.cwd(), this.baseDir, file);
                const fileData = await fs.readFile(filePath, 'utf8');
                const assets = htmlAssetExtractor(fileData);

                extractedAssets.add(file.startsWith("/") ? file : "/" + file);

                assets.forEach(asset => extractedAssets.add(asset));

                if (logMessage) {
                    console.log(`Assets extracted from ${file}:`, assets);
                }
            } catch (err) {
                console.error(`Error reading file ${file}:`, err.message);
            }
        }

        return [...extractedAssets];
    }
}

module.exports = AssetExtractor;
