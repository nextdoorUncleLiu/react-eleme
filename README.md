# react-eleme
这是一个利用react+react-router+react-redux+redux制作的饿了么商品列表页  

##  项目职责

  负责整个项目的前期项目规划和项目制作  

##  项目背景

  饿了吗手机端页面  

##  开发周期

  一周  

##  开发环境

  window  

##  开发工具

  sublime text3  

##  使用插件

  1、react（组件编写）  

  2、react-router（控制路由3.x）  

  3、react-dom（渲染dom）  

  4、redux（控制状态）  

  5、react-redux（更新组件状态）  

  6、react-thunk（中间件异步处理）  

  7、react-promise（异步处理）  

  8、redux-logger（获取动作发生之前的状态和发生之后的状态）  

  9、react-tap-event-plugin（手机tap事件）  

  10、ant-design-mobile（移动端ui组件）  

  11、better-scroll（页面滚动）  

##  es版本

  es6（let、const、class.extends、export、import、fetch、Object.assign、数组和对象的扩展、箭头函数、...操作符、``模版字符串、）  

##  打包工具

  webpack  

##  组件语法

  jsx  

##  插件使用

  1、在项目的最底层使用了provider去可以让组件拿到state，在provider的里面使用react-router指向不同的组件；  

  2、每个页面都有一个独立的reducer，最后用combineReducers整合了所有的reducer；  

  3、不同的板块和功能都拆分了不同的组件，每个组件都有自己的单独的样式，每个组件只负责通过prop获取数据并进行对应的渲染；  

  4、如果有动作则用mapDispatchToProps发送dispatch到reducer去改变对应的状态，然后返回最新的状态通过mapStateToProps映射到state；  

  5、使用componentDidMount函数在真实dom渲染出来后去new better-scroll对象；  

  6、在state更新后通过componentWillUpdate函数或者componentDidUpdate函数去更新当前组件需要setState的属性。  
