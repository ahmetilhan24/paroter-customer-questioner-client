const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const vueSrc = "./src";
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/sass/_variables.scss";`,
      },
    },
  },
});
