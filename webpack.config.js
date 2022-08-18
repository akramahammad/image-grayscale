const path = require('path')
const HTMLWebPackPlugin=require('html-webpack-plugin')
const WasmPlugin=require('@wasm-tool/wasm-pack-plugin')

module.exports={
    entry:'./public/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },
    plugins:[
        new HTMLWebPackPlugin({
            template:'./public/index.html'
        }),
        new WasmPlugin({
            crateDirectory:path.resolve(__dirname,'.')
        })
    ],
    experiments:{
        asyncWebAssembly:true
    }
}