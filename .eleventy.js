const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("frames");
  eleventyConfig.addPassthroughCopy("pdf");
  eleventyConfig.addPassthroughCopy("kml");
  eleventyConfig.addPassthroughCopy("icon");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.on("afterBuild", async () => {
    const outputDir = "_site";
    const entries = await fs.promises.readdir(outputDir, { withFileTypes: true });
    const directoryNames = new Set(entries.filter((entry) => entry.isDirectory()).map((dir) => dir.name));

    // Keep /slug.html aliases in sync with the latest /slug/index.html content.
    for (const dirName of directoryNames) {
      const indexPath = path.join(outputDir, dirName, "index.html");
      const htmlAlias = path.join(outputDir, `${dirName}.html`);

      try {
        await fs.promises.access(indexPath, fs.constants.F_OK);
      } catch {
        continue;
      }

      await fs.promises.copyFile(indexPath, htmlAlias);
    }

    // If Eleventy ever outputs a standalone HTML file, create a folder version only when
    // the folder does not already exist (so we don't overwrite freshly built pages).
    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".html")) {
        continue;
      }

      if (entry.name === "index.html" || entry.name === "404.html") {
        continue;
      }

      const slug = entry.name.slice(0, -5);
      if (directoryNames.has(slug)) {
        continue;
      }

      const destination = path.join(outputDir, slug, "index.html");
      await fs.promises.mkdir(path.dirname(destination), { recursive: true });
      await fs.promises.copyFile(path.join(outputDir, entry.name), destination);
    }
  });

  return {
    dir: { input: "src", output: "_site" }
  };
};
