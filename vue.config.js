// eslint-disable-next-line no-undef
const { defineConfig } = require("@vue/cli-service");
// eslint-disable-next-line no-undef
module.exports = defineConfig({
  transpileDependencies: true,
});

const path = require(`path`);

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve(`./node_modules/vue`),
      },
    },
  },
};

module.exports = {
  devServer: {
    proxy: "http://localhost:8080",
  },
};
