(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{458:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"函数组件与-class-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数组件与-class-组件"}},[s._v("#")]),s._v(" 函数组件与 class 组件")]),s._v(" "),n("p",[s._v("定义组件最简单的方式就是编写 "),n("code",[s._v("JavaScript")]),s._v(" 函数：")]),s._v(" "),n("p",[s._v("该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。")]),s._v(" "),n("div",{staticClass:"language-react line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"props-的只读性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#props-的只读性"}},[s._v("#")]),s._v(" Props 的只读性")]),s._v(" "),n("p",[s._v("组件无论是使用"),n("a",{attrs:{href:"https://react.docschina.org/docs/components-and-props.html#function-and-class-components",target:"_blank",rel:"noopener noreferrer"}},[s._v("函数声明还是通过 class 声明"),n("OutboundLink")],1),s._v("，都决不能修改自身的 props。")]),s._v(" "),n("h2",{attrs:{id:"state-生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state-生命周期"}},[s._v("#")]),s._v(" State & 生命周期")]),s._v(" "),n("div",{staticClass:"language-react line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export class Clock extends React.Component<> {\n  constructor(props: any) {\n    super(props);\n    this.state = { date: new Date() };\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Hello, world!</h1>\n        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>\n      </div>\n    );\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("在"),n("code",[s._v("eslint")]),s._v("中使用解决"),n("code",[s._v("TS2339: Property 'date' does not exist on type 'Readonly{}>'.")])]),s._v(" "),n("div",{staticClass:"language-react line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React from 'react';\n\n// 定义类型接口\ninterface IState {\n  date: Date\n}\n\n/**\n * 第一个参数类型，是为了让父组件在传参得时候能够具备类型提示\n * 第二个类型参数，是为了让state具备类型提示\n */\nexport class Clock extends React.Component<IState, IState> {\n  constructor(props: IState) {\n    super(props);\n    this.state = { date: new Date() };\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Hello, world!</h1>\n        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>\n      </div>\n    );\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230214123733781.png",alt:"image-20230214123733781"}})]),s._v(" "),n("h2",{attrs:{id:"将函数组件转换成-class-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将函数组件转换成-class-组件"}},[s._v("#")]),s._v(" 将函数组件转换成 class 组件")]),s._v(" "),n("p",[s._v("通过以下五步将 "),n("code",[s._v("Clock")]),s._v(" 的函数组件转成 class 组件：")]),s._v(" "),n("ol",[n("li",[s._v("创建一个同名的 "),n("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes",target:"_blank",rel:"noopener noreferrer"}},[s._v("ES6 class"),n("OutboundLink")],1),s._v("，并且继承于 "),n("code",[s._v("React.Component")]),s._v("。")]),s._v(" "),n("li",[s._v("添加一个空的 "),n("code",[s._v("render()")]),s._v(" 方法。")]),s._v(" "),n("li",[s._v("将函数体移动到 "),n("code",[s._v("render()")]),s._v(" 方法之中。")]),s._v(" "),n("li",[s._v("在 "),n("code",[s._v("render()")]),s._v(" 方法中使用 "),n("code",[s._v("this.props")]),s._v(" 替换 "),n("code",[s._v("props")]),s._v("。")]),s._v(" "),n("li",[s._v("删除剩余的空函数声明。")])]),s._v(" "),n("h2",{attrs:{id:"class添加全局state"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#class添加全局state"}},[s._v("#")]),s._v(" "),n("code",[s._v("class")]),s._v("添加全局"),n("code",[s._v("state")])]),s._v(" "),n("p",[s._v("我们通过以下三步将 "),n("code",[s._v("date")]),s._v(" 从 props 移动到 state 中：")]),s._v(" "),n("ul",[n("li",[s._v("把 "),n("code",[s._v("render()")]),s._v(" 方法中的 "),n("code",[s._v("this.props.date")]),s._v(" 替换成 "),n("code",[s._v("this.state.date")]),s._v(" ：")])]),s._v(" "),n("div",{staticClass:"language-react line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export class Clock extends React.Component<any, IState> {\n  render() {\n    return (\n      <div>\n        <h1>Hello, world!</h1>\n        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>\n      </div>\n    );\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ul",[n("li",[s._v("添加一个 "),n("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor",target:"_blank",rel:"noopener noreferrer"}},[s._v("class 构造函数"),n("OutboundLink")],1),s._v("，然后在该函数中为 "),n("code",[s._v("this.state")]),s._v(" 赋初值：")])]),s._v(" "),n("div",{staticClass:"language-react line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export class Clock extends React.Component<IState, IState> {\n  constructor(props: IState) {\n    super(props);\n    this.state = { date: new Date() };\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Hello, world!</h1>\n        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>\n      </div>\n    );\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"class-中添加生命周期方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#class-中添加生命周期方法"}},[s._v("#")]),s._v(" Class 中添加生命周期方法")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。")])]),s._v(" "),n("li",[n("p",[s._v("当 "),n("code",[s._v("Clock")]),s._v(" 组件第一次被渲染到 DOM 中的时候，就为其"),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval",target:"_blank",rel:"noopener noreferrer"}},[s._v("设置一个计时器"),n("OutboundLink")],1),s._v("。这在 React 中被称为“挂载（mount）”。")])]),s._v(" "),n("li",[n("p",[s._v("同时，当 DOM 中 "),n("code",[s._v("Clock")]),s._v(" 组件被删除的时候，应该"),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval",target:"_blank",rel:"noopener noreferrer"}},[s._v("清除计时器"),n("OutboundLink")],1),s._v("。这在 React 中被称为“卸载（unmount）”。")])]),s._v(" "),n("li",[n("p",[s._v("我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：")])])]),s._v(" "),n("div",{staticClass:"language-react line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React from 'react';\n\n// 定义类型接口\ninterface IState {\n  date: Date\n}\n\n/**\n * 第一个参数类型，是为了让父组件在传参得时候能够具备类型提示\n * 第二个类型参数，是为了让state具备类型提示\n */\nexport class Clock extends React.Component<IState, IState> {\n  constructor(props: IState) {\n    super(props);\n    this.state = { date: new Date() };\n  }\n\n  // 组件已经被渲染到 DOM 中后运行\n  componentDidMount() {\n    console.log('组件已经被渲染到 DOM 中后运行');\n  }\n\n  //  组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法\n  componentWillUnmount() {\n    console.log('组件从 DOM 中被移除');\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Hello, world!</h1>\n        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>\n      </div>\n    );\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("h2",{attrs:{id:"class中事件处理this问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#class中事件处理this问题"}},[s._v("#")]),s._v(" "),n("code",[s._v("class")]),s._v("中事件处理"),n("code",[s._v("this")]),s._v("问题")]),s._v(" "),n("div",{staticClass:"language-react line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React from 'react';\n\n// 定义类型接口\ninterface IState {\n  count: number\n}\n\n/**\n * 第一个参数类型，是为了让父组件在传参得时候能够具备类型提示\n * 第二个类型参数，是为了让state具备类型提示\n */\nexport class Clock extends React.Component<IState, IState> {\n  constructor(props: IState) {\n    super(props);\n    // 需要初始化state,否则会出现报错\n    this.state = { ...this.props };\n    // 为了在回调中使用 `this`，这个绑定是必不可少的\n    // this.addNo = this.addNo.bind(this);\n  }\n\n  // 注意需要使用箭头函数，否则会出现提示setState报错\n  // 此语法确保 `add` 内的 `this` 已被绑定。\n  // 注意: 这是 *实验性* 语法。\n  add = () => {\n    this.setState(state => ({\n      count: state.count + 1\n    }));\n  };\n// 或者在构造函数中进行this绑定\n// 或者在事件监听中进行this传递\n  addNo() {\n    this.setState({\n      count: this.state.count + 1\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>{this.state?.count}</h1>\n        <button onClick={this.addNo.bind(this)}>点我</button>\n            <-- 两者等价></--\x3e\n        <button onClick={this.addNo}>点我</button>\n        <button onClick={this.add}>点我改变</button>\n      </div>\n    );\n  }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])]),n("h2",{attrs:{id:"受控组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#受控组件"}},[s._v("#")]),s._v(" 受控组件")]),s._v(" "),n("p",[s._v("在 HTML 中，表单元素（如"),n("code",[s._v("<input>")]),s._v("、 "),n("code",[s._v("<textarea>")]),s._v(" 和 "),n("code",[s._v("<select>")]),s._v("）之类的表单元素通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 "),n("a",{attrs:{href:"https://react.docschina.org/docs/react-component.html#setstate",target:"_blank",rel:"noopener noreferrer"}},[n("code",[s._v("setState()")]),n("OutboundLink")],1),s._v("来更新。")]),s._v(" "),n("p",[s._v("我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。"),n("strong",[s._v("被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。")])]),s._v(" "),n("h2",{attrs:{id:"hooks使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hooks使用"}},[s._v("#")]),s._v(" hooks使用")]),s._v(" "),n("p",[n("strong",[s._v("Hook 不能在 class 组件中使用")])]),s._v(" "),n("h3",{attrs:{id:"usestate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[s._v("#")]),s._v(" useState")]),s._v(" "),n("p",[n("code",[s._v("useState")]),s._v(" 会返回一对值："),n("strong",[s._v("当前")]),s._v("状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 "),n("code",[s._v("this.setState")]),s._v("，但是它不会把新的 state 和旧的 state 进行合并。")]),s._v(" "),n("div",{staticClass:"language-react line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 注意首字母必须大写\nexport const UseStateHook = () => {\n  const [count, setCount] = useState(0);\n  const [colors, setColors] = useState({\n    color: 'red'\n  });\n  const add = () => {\n    setCount(count + 1);\n  };\n  const handleChangeColor = () => {\n    setColors({\n      color: 'green'\n    });\n  };\n  return (\n    <div>\n      <h1>{count}</h1>\n      <h1>{colors.color}</h1>\n      <button onClick={add}>测试</button>\n      <button onClick={handleChangeColor}>颜色切换</button>\n    </div>\n  );\n};\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230214155124297.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"useeffect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[s._v("#")]),s._v(" useEffect")]),s._v(" "),n("p",[n("code",[s._v("useEffect")]),s._v(" 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 "),n("code",[s._v("componentDidMount")]),s._v("、"),n("code",[s._v("componentDidUpdate")]),s._v(" 和 "),n("code",[s._v("componentWillUnmount")]),s._v(" 具有相同的用途，只不过被合并成了一个 API。")]),s._v(" "),n("p",[s._v("当你调用 "),n("code",[s._v("useEffect")]),s._v(" 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— "),n("strong",[s._v("包括")]),s._v("第一次渲染的时候。")]),s._v(" "),n("p",[s._v("跟 "),n("code",[s._v("useState")]),s._v(" 一样，你可以在组件中多次使用 "),n("code",[s._v("useEffect")])]),s._v(" "),n("p",[s._v("下面这个组件在 React 更新 DOM 后会设置一个页面标题：")]),s._v(" "),n("div",{staticClass:"language-react line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const UseEffectHook = () => {\n  // 相当于 componentDidMount 和 componentDidUpdate:\n  useEffect(() => {\n    document.title = 'react 啊~';\n  });\n  return (\n    <div />\n  );\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230214155719770.png",alt:"image-20230214155719770"}})]),s._v(" "),n("h3",{attrs:{id:"usecontext"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usecontext"}},[s._v("#")]),s._v(" useContext")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("接收一个 context 对象（"),n("code",[s._v("React.createContext")]),s._v(" 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 "),n("code",[s._v("<MyContext.Provider>")]),s._v(" 的 "),n("code",[s._v("value")]),s._v(" prop 决定。")])]),s._v(" "),n("li",[n("p",[s._v("当组件上层最近的 "),n("code",[s._v("<MyContext.Provider>")]),s._v(" 更新时，该 Hook 会触发重渲染，并使用最新传递给 "),n("code",[s._v("MyContext")]),s._v(" provider 的 context "),n("code",[s._v("value")]),s._v(" 值。即使祖先使用 "),n("a",{attrs:{href:"https://react.docschina.org/docs/react-api.html#reactmemo",target:"_blank",rel:"noopener noreferrer"}},[n("code",[s._v("React.memo")]),n("OutboundLink")],1),s._v(" 或 "),n("a",{attrs:{href:"https://react.docschina.org/docs/react-component.html#shouldcomponentupdate",target:"_blank",rel:"noopener noreferrer"}},[n("code",[s._v("shouldComponentUpdate")]),n("OutboundLink")],1),s._v("，也会在组件本身使用 "),n("code",[s._v("useContext")]),s._v(" 时重新渲染。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("useContext(MyContext)")]),s._v(" 相当于 class 组件中的 "),n("code",[s._v("static contextType = MyContext")]),s._v(" 或者 "),n("code",[s._v("<MyContext.Consumer>")]),s._v("。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("useContext(MyContext)")]),s._v(" 只是让你能够"),n("em",[s._v("读取")]),s._v(" context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 "),n("code",[s._v("<MyContext.Provider>")]),s._v(" 来为下层组件"),n("em",[s._v("提供")]),s._v(" context。")])])]),s._v(" "),n("h2",{attrs:{id:"hook-使用规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hook-使用规则"}},[s._v("#")]),s._v(" Hook 使用规则")]),s._v(" "),n("p",[n("code",[s._v("Hook")]),s._v(" 就是 "),n("code",[s._v("JavaScript")]),s._v(" 函数，但是使用它们会有两个额外的规则：")]),s._v(" "),n("ul",[n("li",[s._v("只能在"),n("strong",[s._v("函数最外层")]),s._v("调用 "),n("code",[s._v("Hook")]),s._v("。不要在循环、条件判断或者子函数中调用。")]),s._v(" "),n("li",[s._v("只能在 "),n("strong",[s._v("React 的函数组件")]),s._v("中调用 "),n("code",[s._v("Hook")]),s._v("。不要在其他 "),n("code",[s._v("JavaScript")]),s._v("函数中调用。")]),s._v(" "),n("li",[s._v("或者在自定义"),n("code",[s._v("Hook")]),s._v("时可以调用")])])])}),[],!1,null,null,null);n.default=e.exports}}]);