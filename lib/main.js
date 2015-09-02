define(function(require,exports,module){
   //前面两个参数，一个是当前模块唯一标志，一个是当前模块依赖的模块。正常情况下不必指定这两个参数，seajs会帮我们自动获取，第三个factory函数是模块的工厂函数
   //require用于获取其他模块，如：

//var j = require("jquery");
//alert(j);

   var a = require("moduleA");  //此处require内写的名称可以是具体路径，也可以是alias里定义的别名，一般写的是别名  
   //通过require语句执行了对应的模块函数，并返回该模块的module.exports对象
   //注意，除了返回对象外，也执行了该函数，比如，该模块里如果有一句alert(1)不在exports暴露的方法里，会在require调用的同时直接执行。
   a.fn();//获取到a模块后，即可调用a模块暴露出来的方法
})