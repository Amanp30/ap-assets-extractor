function htmlAssetExtractor(html) {
    const stylesheets = html
        .matchAll(/<link\s+rel=["']stylesheet["']\s+href=["']([^"']+)["']/g)
        .map(match => match[1]);

    const images = html
        .matchAll(/<img[^>]*\s+src=["']([^"']+)["']/g)
        .map(match => match[1]);

    const scripts = html
        .matchAll(/<script[^>]*\s+src=["']([^"']+)["']/g)
        .map(match => match[1]);

    const links = html
        .matchAll(/<link[^>]*\s+rel=["'](?!manifest)[^"']*["']\s+href=["']([^"']+)["']/g)
        .map(match => match[2]);

    return [...stylesheets, ...images, ...scripts];
}

module.exports = htmlAssetExtractor;
