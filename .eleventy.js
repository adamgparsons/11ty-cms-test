module.exports = function(config) {
  config.addCollection("posts", collection => {
    return collection.getFilteredByGlob("src/site/posts/*.md");
  });
  return {
    dir: {
      input: "src/site",
      includes: "templates"
    },
    templateFormats: ["html", "md"],
    htmlTemplatesEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
