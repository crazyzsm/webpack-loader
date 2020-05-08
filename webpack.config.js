const path =require('path');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
module.exports={
  entry:'./src/index.js',
  output:{
     filename:'[name].js',
     path:path.join(__dirname,'./dist')
  },
  module:{
    rules:[
      {
        test:/.txt$/,
        use:[
          {
            loader:'file-loader',
            options:{

              name:'[name]-[hash:2].[ext]'
            }
          },
          {
            loader:path.join(__dirname,'./src/loaders/raw-loader'),
            options:{
                  targetName:'列侬',
                  demandName:'甲壳虫乐队'
                }
          }
        ]
     
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin()
  ],
  mode:'development'
}