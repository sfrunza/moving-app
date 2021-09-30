const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin"); //brotli

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  // config.plugins.push(
  //   process.env.NODE_ENV === "production"
  //     ? new CopyWebpackPlugin({
  //         patterns: [{ from: "src/lib/legacyLib.js" }],
  //       })
  //     : new CopyWebpackPlugin({
  //         patterns: [{ from: "src/lib/legacyLib.js", to: "dist" }],
  //       })
  // );

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [{ from: "src/lib/legacyLib.js" }],
    })
  );

  config.plugins.push(
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      //brotli plugin
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    })
  );
  return config;
};
