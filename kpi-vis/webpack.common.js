const path = require("path");

module.exports = {
  entry: "./src/customVis.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
        }
      ],
      exclude: /node_modules/,
    },
    {
      test: /\.(sass|less|css)$/,
      use: ["style-loader", "css-loader", 'sass-loader'],
    },
    {
      test: /\.(woff|woff2|eot|otf|ttf)$/,
      type: "asset/inline",
    },
  ],
},
resolve: {
  extensions: [".tsx", ".ts", ".js"],
},
};
