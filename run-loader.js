const { runLoaders } = require('loader-runner');   //引用runloader对象
const fs = require('fs');
const path = require('path');

runLoaders({
    resource: path.join(__dirname, './src/demo.txt'),   //绝对路径   需要loader解析的文件
    loaders: [            //编写的loader--要使用的loader
        {
            loader: path.join(__dirname, './src/loaders/raw-loader.js'),     //loader文件位置
            options:{
                targetName:'列侬',
                demandName:'甲壳虫乐队'
            }
        }
           
           
        
    ],
    context: {     //上下对象
        misimize:true,           //压缩参数
        
    },
    readResource: fs.readFile.bind(fs)        //使用fs模块去读取它的内容
}, (err, result) => {    //回调  error--失败  result---成功
    err ? console.log(err) : console.log(result);
    /**
     * result参数：
     *      result:[...]----loader加载的结果
     *      resourceBuffer：----结果的Buffer数据
     *      cacaheble:true   ----将结果缓存起来
     *      fileDependencies:['D:\\vueProject\\webpack-loader\\src\\demo.txt']   --loader解析文件的位置，绝对路径
     *      contextDependecies:[]----上下文
     */
});