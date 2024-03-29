const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:  '/ymko/',
  transpileDependencies: true,
    configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg)$/,
          use: [
            {
              loader: "image-webpack-loader",
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 70,
                },
              },
            },
          ],
        },
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/_variables.scss";
        @import "@/assets/styles/style.scss";
        `,
      },
    },
  },
});
