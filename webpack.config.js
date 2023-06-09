const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV != "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map", // permite visualizar erros com o código não compilado
  entry: path.resolve(__dirname, "src", "index.tsx"), // caminho para o arquivo principal = index.jsx
  output: {
    path: path.resolve(__dirname, "dist"), // caminho até a pasta que vai ficar o arquivo
    filename: "bundle.js", //nome do arquivo final
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // diz que ele pode ler arquivos com essas extensões
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
  module: {
    // module vai ser como a nossa aplicação vai se comportar quando tiver importando diferentes tipos de arquivos
    rules: [
      {
        test: /\.(j|t)sx$/, // todos arquivos jsx | $ = arquivos com final assim
        exclude: /node_modules/, // menos os da pasta node_modules
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/, // todos arquivos css | $ = arquivos com final assim
        exclude: /node_modules/, // menos os da pasta node_modules
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
