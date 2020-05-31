const merge = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true,
    open: true,
    compress: true,
    lazy: true,
    noInfo: true,
    historyApiFallback: true,
    proxy: 5000,
    onListening: (server) => {
      const port = server.listeningApp.address().port;
      console.log(`Listening on port: ${port}`);
    },
  },
});
