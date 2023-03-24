const path = require('path')

module.exports={
    entry:path.resolve(__dirname, "src", "index.jsx"), // caminho para o arquivo principal = index.jsx
    output:{
        path: path.resolve(__dirname, "dist"), // caminho até a pasta que vai ficar o arquivo
        filename: "bundle.js" //nome do arquivo final
    },
    resolve:{
        extensions: [".js", ".jsx"], // diz que ele pode ler arquivos com essas extensões
    },
    module:{// module vai ser como a nossa aplicação vai se comportar quando tiver importando diferentes tipos de arquivos
        rules:[
            {
                test:/\.jsx$/, // todos arquivos jsx | $ = arquivos com final assim
                exclude:/node_modules/, // menos os da pasta node_modules
                use:'babel-loader',
            }
        ],
    }
}