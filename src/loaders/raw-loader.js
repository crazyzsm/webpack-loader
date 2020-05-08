const loaderUtlis=require('loader-utils')
const fs=require('fs');
const path=require('path');
/**
 * 实现功能，根据配置项，将目标字段，替换成所需字段
 * 例如：你好我是列侬---- targetName=列侬  demandName=甲壳虫
 * 输出：你好我是甲壳虫
 */
module.exports=function(source){
    const json=JSON.stringify(source);   //使用JSON去解析
    const {targetName}=loaderUtlis.getOptions(this);
    const {demandName}=loaderUtlis.getOptions(this);
    // this.callback(null,targetName,demandName);
   return  json.replace(targetName,demandName);
    // const callback=this.async();   //异步调用loader
    // const {name}=loaderUtlis.getOptions(this);
    // fs.readFile(path.join(__dirname,'./async.txt'),'utf-8',(err,data)=>{   //读取文件---异步操作
    //     callback(null,data);
    // })
    // this.callback(null,json,name);    //通过this.callback  去输出结果
}