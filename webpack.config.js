const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const isDevelopment = process.env.NODE_ENV != "production"

module.exports={
    mode: isDevelopment ? "development": "production",
    devtool:isDevelopment? 'eval-source-map': 'source-map', // permite visualizar erros com o código não compilado
    entry:path.resolve(__dirname, "src", "index.jsx"), // caminho para o arquivo principal = index.jsx
    output:{
        path: path.resolve(__dirname, "dist"), // caminho até a pasta que vai ficar o arquivo
        filename: "bundle.js" //nome do arquivo final
    },
    resolve:{
        extensions: [".js", ".jsx"], // diz que ele pode ler arquivos com essas extensões
    },
    devServer:{
        static: path.resolve(__dirname,"public")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, "public", "index.html")
        })
    ],
    module:{// module vai ser como a nossa aplicação vai se comportar quando tiver importando diferentes tipos de arquivos
        rules:[
            {
                test:/\.jsx$/, // todos arquivos jsx | $ = arquivos com final assim
                exclude:/node_modules/, // menos os da pasta node_modules
                use:'babel-loader',
            },
            {
                test:/\.scss$/, // todos arquivos css | $ = arquivos com final assim
                exclude:/node_modules/, // menos os da pasta node_modules
                use:['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
}