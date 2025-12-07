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

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith(".html")) {
        if (entry.name === "index.html" || entry.name === "404.html") {
          continue;
        }

        const slug = entry.name.slice(0, -5);
        const destination = path.join(outputDir, slug, "index.html");

        await fs.promises.mkdir(path.dirname(destination), { recursive: true });
        await fs.promises.copyFile(path.join(outputDir, entry.name), destination);
      }

      if (entry.isDirectory()) {
        const indexPath = path.join(outputDir, entry.name, "index.html");
        const htmlPath = path.join(outputDir, `${entry.name}.html`);

        try {
          await fs.promises.access(indexPath, fs.constants.F_OK);
        } catch {
          continue;
        }

        try {
          await fs.promises.access(htmlPath, fs.constants.F_OK);
        } catch {
          await fs.promises.copyFile(indexPath, htmlPath);
        }
      }
    }
  });

  return {
    dir: { input: "src", output: "_site" }
  };
};
