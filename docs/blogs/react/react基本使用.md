---
title: react基本使用
date: 2023-02-14 12:23:24
author: 秋谨
categories:
  - react
tags:
  - react
  - typescript
---

## 函数组件与 class 组件

定义组件最简单的方式就是编写 `JavaScript` 函数：

该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Props 的只读性

组件无论是使用[函数声明还是通过 class 声明](https://react.docschina.org/docs/components-and-props.html#function-and-class-components)，都决不能修改自身的 props。

## State & 生命周期

```react
export class Clock extends React.Component<> {
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```



在`eslint`中使用解决`TS2339: Property 'date' does not exist on type 'Readonly{}>'.`

```react
import React from 'react';

// 定义类型接口
interface IState {
  date: Date
}

/**
 * 第一个参数类型，是为了让父组件在传参得时候能够具备类型提示
 * 第二个类型参数，是为了让state具备类型提示
 */
export class Clock extends React.Component<IState, IState> {
  constructor(props: IState) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

![image-20230214123733781](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230214123733781.png)

## 将函数组件转换成 class 组件

通过以下五步将 `Clock` 的函数组件转成 class 组件：

1. 创建一个同名的 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)，并且继承于 `React.Component`。
2. 添加一个空的 `render()` 方法。
3. 将函数体移动到 `render()` 方法之中。
4. 在 `render()` 方法中使用 `this.props` 替换 `props`。
5. 删除剩余的空函数声明。

## `class`添加全局`state`

我们通过以下三步将 `date` 从 props 移动到 state 中：

- 把 `render()` 方法中的 `this.props.date` 替换成 `this.state.date` ：

```react
export class Clock extends React.Component<any, IState> {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

- 添加一个 [class 构造函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor)，然后在该函数中为 `this.state` 赋初值：

```react
export class Clock extends React.Component<IState, IState> {
  constructor(props: IState) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## Class 中添加生命周期方法

- 在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。

- 当 `Clock` 组件第一次被渲染到 DOM 中的时候，就为其[设置一个计时器](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)。这在 React 中被称为“挂载（mount）”。

- 同时，当 DOM 中 `Clock` 组件被删除的时候，应该[清除计时器](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval)。这在 React 中被称为“卸载（unmount）”。

- 我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：

```react
import React from 'react';

// 定义类型接口
interface IState {
  date: Date
}

/**
 * 第一个参数类型，是为了让父组件在传参得时候能够具备类型提示
 * 第二个类型参数，是为了让state具备类型提示
 */
export class Clock extends React.Component<IState, IState> {
  constructor(props: IState) {
    super(props);
    this.state = { date: new Date() };
  }

  // 组件已经被渲染到 DOM 中后运行
  componentDidMount() {
    console.log('组件已经被渲染到 DOM 中后运行');
  }

  //  组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法
  componentWillUnmount() {
    console.log('组件从 DOM 中被移除');
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## `class`中事件处理`this`问题

```react
import React from 'react';

// 定义类型接口
interface IState {
  count: number
}

/**
 * 第一个参数类型，是为了让父组件在传参得时候能够具备类型提示
 * 第二个类型参数，是为了让state具备类型提示
 */
export class Clock extends React.Component<IState, IState> {
  constructor(props: IState) {
    super(props);
    // 需要初始化state,否则会出现报错
    this.state = { ...this.props };
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.addNo = this.addNo.bind(this);
  }

  // 注意需要使用箭头函数，否则会出现提示setState报错
  // 此语法确保 `add` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  add = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };
// 或者在构造函数中进行this绑定
// 或者在事件监听中进行this传递
  addNo() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state?.count}</h1>
        <button onClick={this.addNo.bind(this)}>点我</button>
            <-- 两者等价></-->
        <button onClick={this.addNo}>点我</button>
        <button onClick={this.add}>点我改变</button>
      </div>
    );
  }
}

```

## 受控组件

在 HTML 中，表单元素（如`<input>`、 `<textarea>` 和 `<select>`）之类的表单元素通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 [`setState()`](https://react.docschina.org/docs/react-component.html#setstate)来更新。

我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。**被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。**

## hooks使用

**Hook 不能在 class 组件中使用**

### useState

`useState` 会返回一对值：**当前**状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 `this.setState`，但是它不会把新的 state 和旧的 state 进行合并。

```react
// 注意首字母必须大写
export const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState({
    color: 'red'
  });
  const add = () => {
    setCount(count + 1);
  };
  const handleChangeColor = () => {
    setColors({
      color: 'green'
    });
  };
  return (
    <div>
      <h1>{count}</h1>
      <h1>{colors.color}</h1>
      <button onClick={add}>测试</button>
      <button onClick={handleChangeColor}>颜色切换</button>
    </div>
  );
};

```

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230214155124297.png)

### useEffect

`useEffect` 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。

当你调用 `useEffect` 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— **包括**第一次渲染的时候。

跟 `useState` 一样，你可以在组件中多次使用 `useEffect`

下面这个组件在 React 更新 DOM 后会设置一个页面标题：

```react
export const UseEffectHook = () => {
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = 'react 啊~';
  });
  return (
    <div />
  );
};
```

![image-20230214155719770](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230214155719770.png)

### useContext

- 接收一个 context 对象（`React.createContext` 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value` prop 决定。

- 当组件上层最近的 `<MyContext.Provider>` 更新时，该 Hook 会触发重渲染，并使用最新传递给 `MyContext` provider 的 context `value` 值。即使祖先使用 [`React.memo`](https://react.docschina.org/docs/react-api.html#reactmemo) 或 [`shouldComponentUpdate`](https://react.docschina.org/docs/react-component.html#shouldcomponentupdate)，也会在组件本身使用 `useContext` 时重新渲染。

- `useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`。
- `useContext(MyContext)` 只是让你能够*读取* context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件*提供* context。

## Hook 使用规则

`Hook` 就是 `JavaScript` 函数，但是使用它们会有两个额外的规则：

- 只能在**函数最外层**调用 `Hook`。不要在循环、条件判断或者子函数中调用。
- 只能在 **React 的函数组件**中调用 `Hook`。不要在其他 `JavaScript `函数中调用。
- 或者在自定义`Hook`时可以调用
