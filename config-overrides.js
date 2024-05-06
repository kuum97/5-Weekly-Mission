module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "static/media/[name].[hash:8].[ext]",
          publicPath: "auto",
          esModule: false,
        },
      },
    ],
  });

  return config;
};
