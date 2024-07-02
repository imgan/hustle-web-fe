require("babel-register")({
    presets: ["es2015", "react"]
  });
  const router = require("./App");
  const Sitemap = require("react-router-sitemap").default;
  function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://hustle.co.id/")
          .save("./public/sitemap.xml")
    );
  }
  generateSitemap();