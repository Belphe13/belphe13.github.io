module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("frames");
  eleventyConfig.addPassthroughCopy("pdf");
  eleventyConfig.addPassthroughCopy("kml");
  eleventyConfig.addPassthroughCopy("icon");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  return {
    dir: { input: "src", output: "_site" }
  };
};
