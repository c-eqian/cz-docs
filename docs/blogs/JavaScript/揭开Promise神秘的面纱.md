---
date: 2024-08-28 11:52:36
title: 揭开Promise神秘的面纱
author: 秋谨
categories:
  - JavaScript
tags:
  - JavaScript
---

> 山有木兮木有枝，心悦君兮君不知

一个让人疯狂的 `Promise` 就像是在玩一场心跳加速的俄罗斯轮盘赌——你永远不知道它下一秒是会优雅地 `resolve` 还是突然 `reject`。这不，刚写的那个 `Promise`，不仅自己玩起了捉迷藏，还顺便把我的耐心也给藏起来了。每次我满怀期待地用 `.then` 去迎接它的成功，结果它却总是在最后一刻跳转到 `.catch`，留下一句：“哈哈，你又上当了！”仿佛在说：“程序员，来追我呀！”搞得我每次调试都得先深呼吸三次，才能鼓起勇气去面对那行熟悉的 `console.error`。

开玩笑、开玩笑、开玩笑，还是回归正题吧

接下来让我们一起去探索`Promise`那神秘的面纱，激动的心，颤抖的手，就像是在解开新娘的红盖头。哈哈哈哈哈哈哈哈![img](https://dl4.weshineapp.com/gif/20221201/efacec6a1813b487e11d813df014ae19.gif?f=micro_)

**以下关于promise/A+规范的译文[翻译来自](https://www.ituring.com.cn/article/66566#note-1)**

# 术语

------

## Promise

promise 是一个拥有 `then` 方法的对象或函数，其行为符合本规范；

## thenable

是一个定义了 `then` 方法的对象或函数，文中译作“拥有 `then` 方法”；

## 值（value）

指任何 JavaScript 的合法值（包括 `undefined` , thenable 和 promise）；

## 异常（exception）

是使用 `throw` 语句抛出的一个值。

## 拒因（reason）

表示一个 promise 的拒绝原因。

# 要求

------

## Promise 的状态

一个 Promise 的当前状态必须为以下三种状态中的一种：**等待态（Pending）**、**执行态（Fulfilled）和拒绝态（Rejected）**。

### 等待态（Pending）

处于等待态时，promise 需满足以下条件：

- 可以迁移至执行态或拒绝态

### 执行态（Fulfilled）

处于执行态时，promise 需满足以下条件：

- 不能迁移至其他任何状态
- 必须拥有一个**不可变**的终值

### 拒绝态（Rejected）

处于拒绝态时，promise 需满足以下条件：

- 不能迁移至其他任何状态
- 必须拥有一个**不可变**的据因

这里的不可变指的是恒等（即可用 `===` 判断相等），而不是意味着更深层次的不可变（指当 value 或 reason 不是基本值时，只要求其引用地址相等，但属性值可被更改）。

## **Then 方法**

一个 promise 必须提供一个 `then` 方法以访问其当前值、终值和拒因。

promise 的 `then` 方法接受两个参数：

```
promise.then(onFulfilled, onRejected)
```

### 参数可选

`onFulfilled` 和 `onRejected` 都是可选参数。

- 如果 `onFulfilled` 不是函数，其必须被忽略
- 如果 `onRejected` 不是函数，其必须被忽略

### `onFulfilled` 特性

如果 `onFulfilled` 是函数：

- 当 `promise` 执行结束后其必须被调用，其第一个参数为 `promise` 的终值
- 在 `promise` 执行结束前其不可被调用
- 其调用次数不可超过一次

### `onRejected` 特性

如果 `onRejected` 是函数：

- 当 `promise` 被拒绝执行后其必须被调用，其第一个参数为 `promise` 的据因
- 在 `promise` 被拒绝执行前其不可被调用
- 其调用次数不可超过一次

### 调用时机

`onFulfilled` 和 `onRejected` 只有在[执行环境](http://es5.github.io/#x10.3)堆栈仅包含**平台代码**时才可被调用 [注1](https://www.ituring.com.cn/article/66566#note-1)

### 调用要求

`onFulfilled` 和 `onRejected` 必须被作为函数调用（即没有 `this` 值）[注2][2]

### 多次调用

`then` 方法可以被同一个 `promise` 调用多次

- 当 `promise` 成功执行时，所有 `onFulfilled` 需按照其注册顺序依次回调
- 当 `promise` 被拒绝执行时，所有的 `onRejected` 需按照其注册顺序依次回调

### 返回

`then` 方法必须返回一个 `promise` 对象 [注3][3]

```
promise2 = promise1.then(onFulfilled, onRejected);   
```

- 如果 `onFulfilled` 或者 `onRejected` 返回一个值 `x` ，则运行下面的 **Promise 解决过程**：`[[Resolve]](promise2, x)`
- 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`
- 如果 `onFulfilled` 不是函数且 `promise1` 成功执行， `promise2` 必须成功执行并返回相同的值
- 如果 `onRejected` 不是函数且 `promise1` 拒绝执行， `promise2` 必须拒绝执行并返回相同的据因

**译者注：**理解上面的“返回”部分非常重要，即：**不论 `promise1` 被 reject 还是被 resolve 时 `promise2` 都会被 resolve，只有出现异常时才会被 rejected**。

## **Promise 解决过程**

**Promise 解决过程**是一个抽象的操作，其需输入一个 `promise` 和一个值，我们表示为 `[[Resolve]](promise, x)`，如果 `x` 有 `then` 方法且看上去像一个 Promise ，解决程序即尝试使 `promise` 接受 `x` 的状态；否则其用 `x` 的值来执行 `promise` 。

这种 *thenable* 的特性使得 Promise 的实现更具有通用性：只要其暴露出一个遵循 Promise/A+ 协议的 `then` 方法即可；这同时也使遵循 Promise/A+ 规范的实现可以与那些不太规范但可用的实现能良好共存。

运行 `[[Resolve]](promise, x)` 需遵循以下步骤：

### `x` 与 `promise` 相等

如果 `promise` 和 `x` 指向同一对象，以 `TypeError` 为据因拒绝执行 `promise`

### `x` 为 Promise

如果 `x` 为 Promise ，则使 `promise` 接受 `x` 的状态 [注4][4]：

- 如果 `x` 处于等待态， `promise` 需保持为等待态直至 `x` 被执行或拒绝
- 如果 `x` 处于执行态，用相同的值执行 `promise`
- 如果 `x` 处于拒绝态，用相同的据因拒绝 `promise`

### `x` 为对象或函数

如果 `x` 为对象或者函数：

- 把 `x.then` 赋值给 `then` [注5][5]
- 如果取 `x.then` 的值时抛出错误 `e` ，则以 `e` 为据因拒绝 `promise`
- 如果`then`是函数，将`x`作为函数的作用域this调用之。传递两个回调函数作为参数，第一个参数叫做`resolvePromise`，第二个参数叫做`rejectPromise`:
  - 如果 `resolvePromise` 以值 `y` 为参数被调用，则运行 `[[Resolve]](promise, y)`
  - 如果 `rejectPromise` 以据因 `r` 为参数被调用，则以据因 `r` 拒绝 `promise`
  - 如果 `resolvePromise` 和 `rejectPromise` 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
  - 如果调用`then`方法抛出了异常`e`：
    - 如果 `resolvePromise` 或 `rejectPromise` 已经被调用，则忽略之
    - 否则以 `e` 为据因拒绝 `promise`
  - 如果 `then` 不是函数，以 `x` 为参数执行 `promise`
- 如果 `x` 不为对象或者函数，以 `x` 为参数执行 `promise`

如果一个 promise 被一个循环的 *thenable* 链中的对象解决，而 `[[Resolve]](promise, thenable)` 的递归性质又使得其被再次调用，根据上述的算法将会陷入无限递归之中。算法虽不强制要求，但也鼓励施者检测这样的递归是否存在，若检测到存在则以一个可识别的 `TypeError` 为据因来拒绝 `promise` [注6][6]。

# 注释

------

- **注1** 这里的**平台代码**指的是引擎、环境以及 promise 的实施代码。实践中要确保 `onFulfilled` 和 `onRejected` 方法异步执行，且应该在 `then` 方法被调用的那一轮事件循环之后的新执行栈中执行。这个事件队列可以采用“宏任务（macro-task）”机制或者“微任务（micro-task）”机制来实现。由于 promise 的实施代码本身就是平台代码（**译者注：**即都是 JavaScript），故代码自身在处理在处理程序时可能已经包含一个任务调度队列。

  **译者注：**这里提及了 macrotask 和 microtask 两个概念，这表示异步任务的两种分类。在挂起任务时，JS 引擎会将所有任务按照类别分到这两个队列中，首先在 macrotask 的队列（这个队列也被叫做 task queue）中取出第一个任务，执行完毕后取出 microtask 队列中的所有任务顺序执行；之后再取 macrotask 任务，周而复始，直至两个队列的任务都取完。

  两个类别的具体分类如下：

  - **macro-task:** script（整体代码）, `setTimeout`, `setInterval`, `setImmediate`, I/O, UI rendering
  - **micro-task:** `process.nextTick`, `Promises`（这里指浏览器实现的原生 Promise）, `Object.observe`, `MutationObserver`

  详见 [stackoverflow 解答](http://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context) 或 [这篇博客](http://wengeezhang.com/?p=11)

- **注2** 也就是说在**严格模式（strict）**中，函数 `this` 的值为 `undefined` ；在非严格模式中其为全局对象。

- **注3** 代码实现在满足所有要求的情况下可以允许 `promise2 === promise1` 。每个实现都要文档说明其是否允许以及在何种条件下允许 `promise2 === promise1` 。

- **注4** 总体来说，如果 `x` 符合当前实现，我们才认为它是真正的 *promise* 。这一规则允许那些特例实现接受符合已知要求的 Promises 状态。

- **注5** 这步我们先是存储了一个指向 `x.then` 的引用，然后测试并调用该引用，以避免多次访问 `x.then` 属性。这种预防措施确保了该属性的一致性，因为其值可能在检索调用时被改变。

- **注6** 实现不应该对 *thenable* 链的深度设限，并假定超出本限制的递归就是无限循环。只有真正的循环递归才应能导致 `TypeError` 异常；如果一条无限长的链上 *thenable* 均不相同，那么递归下去永远是正确的行为。

# 代码过程

## 创建`promise`实例

根据原生的`Promise`使用方法我们都知道，`Promise`接收一个参数函数`executor`,包含了两个方法`resolve`、`reject`

```javascript
Promise((resolve, reject)=>{

})
```

因此我们为了简化代码可以使用ES6语法，创建一个`CrazyPromise`类，根据以上译文，一个promise具有三种状态，待定（`pending`）、已成功（`fulfilled`）、已拒绝（`reject`），在初始时，设定为一个待定状态

```javascript
class CrazyPromise{
    // 定义三种状态
    static PENDING = 'pending'; // 待定状态
    static REJECTED = 'rejected'; // 已拒绝
    static FULFILLED = 'fulfilled'; // 已成功
    /**
     * 接收一个执行器，具有两个参数，已成功（resolve）、已拒绝（reject）
     * @param executor
     */
    constructor(executor){
        /**
         * 定义初始状态的结果，因为在实例创建的时候，由于必须有一个执行状态的返回结果，要么成功要么拒绝
         * 成功（resolve）时将结果保存到value中，已拒绝时（reject）将原因保存到value中
         * @type {null}
         */
        this.value = null
        this.state = CrazyPromise.PENDING // 初始为待定（pending）
        try {
            /**
             * 将已成功执行的方法（resolve）和已拒绝的方法（reject）作为参数传入executor方法
             * 注意这里this指向问题，因为在resolve和reject中会使用当前实例的this，如果不将当前实例的this，绑定到resolve或者reject中
             * 在使用者使用resolve或者reject时，由于是在当前实例外部使用
             * 所以this指向将会丢失，会指向window环境
             * 注意： 这里可能会在执行方法里边有异常出现，应该要捕获异常并看做已拒绝（reject）
             */
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject(e)
        }
    }
    /**
     * 定义一个resolve方法
     */
    resolve(){

    }
    /**
     * 定义一个reject方法
     */
    reject(){

    }
}

```

以上代码有两点需要注意的地方：

- 暴露出去resolve和reject中会使用当前实例的this（后面会讲到），如果不将this指向它们，那么在外部使用的时候，将会丢失
- 使用异常捕获，因为由于在执行代码里面可能会出现异常，因此需要将其捕获并作为reject返回

## resolve方法

接下来就是实现resolve的相关逻辑。一个promise的结果要么是成功的（resolve）、要么是拒绝的，也就是失败的结果（reject），而且根据状态，只有在待定（pending）的状态，才能变更状态值，因此，实现的代码如下：

```javascript
    /**
     * 定义一个resolve方法
     * 接收一个结果值参数
     */
    resolve(value){
        // 只有待定的（pending）状态下，才可以变更
        if (this.state === CrazyPromise.PENDING) {
            // 修改状态为成功的（fulfilled）
            this.state = CrazyPromise.FULFILLED;
            // 保存结果
            this.value = value;
        }
    }
```



## reject方法

reject的方法实现过程与resolve几乎一致，代码如下：

```javascript
    /**
     * 定义一个reject方法
     * 接收一个拒因的结果
     */
    reject(reason){
        // 只有待定的（pending）状态下，才可以变更
        if (this.state === CrazyPromise.PENDING) {
            // 修改状态为拒绝的（rejected）
            this.state = CrazyPromise.REJECTED;
            // 保存结果
            this.value = reason;
        }
    }
```



## then方法

- `then`是执行结果的回调，接受两个参数，参数状态只能够执行一个，要么成功（`onFulfilled`）的要么失败的(`onRejected`)
- 因为then方法必须返回一个promise，因此需要在基础上创建一个promise对象
- **then方法是整个promise的核心，会稍微比较复杂，逻辑也比较不易上手，建议根据规范上手**

```javascript
    /**
     * 接受两个参数，参数状态只能够执行一个，要么成功的要么失败的
     * @param onFulfilled resolve时返回的结果回调
     * @param onRejected reject时返回的结果回调
     */
    then(onFulfilled, onRejected){
        /**
         * 因为then方法必须返回一个promise，因此需要在基础上创建一个promise对象
         */
        const promise =  new CrazyPromise((resolve, reject) => {
            // ...
        })
        return promise // 返回一个promise
    }
```

- 在then方法执行的时候，因为是异步的，所以需要添加一个具有异步执行的任务，可以使用`setTimeout`（宏任务），或者`queueMicrotask`(微任务)，这里使用后者

- then方法执行的回调，必须是状态为已成功的（resolve）或者已拒绝的（reject）二选其一，因此需要做一下判断处理

  ```javascript
          /**
           * 因为then方法必须返回一个promise，因此需要在基础上创建一个promise对象
           */
          const promise =  new CrazyPromise((resolve, reject) => {
              // 判断当前的状态是不是成功的（fulfilled）
              if (this.state === CrazyPromise.FULFILLED) {
                  // 将每个执行回调使用微任务包裹起来
                  queueMicrotask(()=>{
                      // 因为then的执行回调可能是onFulfilled或者onRejected的，所以我们需要判断需要处理的回调是什么
                      // 判断 onFulfilled回调是不是一个函数，如果不是，那么默认处理状态为resolve
                      if (typeof onFulfilled === 'function') {
                          // 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`
                          try {
                              //     执行onFulfilled获取结果x,根据规范，该值可能是promise或者对象或者函数
                              const x = onFulfilled(this.value);
                              /**
                               * 解析promise过程
                               * 这里需要一个解析resolve或者reject的结果值
                               */
                              resolvePromise(promise, x, resolve, reject)
                          } catch (e) {
                              reject(e)
                          }
  
                      } else {
                          resolve(this.value) // 当前的执行结果
                      }
                  })
              }
          })
  /**
   * 处理拿到的结果值，然后递归去解析，直到拿到最外层的值，可以理解为基础数据类型
   * @param promise 由then 返回的promise
   * @param x 执行成功或者失败回调函数得到的值，根据规范，该值可能是promise或者对象或者函数
   * @param resolve
   * @param reject
   */
  function resolvePromise(promise, x, resolve, reject){
              
  }
  ```

  - 不管是resolve或者是reject的状态，它们的逻辑效果几乎一致的，因此在需要判断reject状态下的执行回调

    ```javascript
          // 又或者是不是失败的（reject）
                else if (this.state === CrazyPromise.REJECTED) {
                    // 将每个执行回调使用微任务包裹起来
                    queueMicrotask(()=>{
                        // 因为then的执行回调可能是onFulfilled或者onRejected的，所以我们需要判断需要处理的回调是什么
                        // 这里返回一个对象的形式，一个键是onFulfilled，表示需要执行成功的回调，一个是onRejected表示执行失败的回调
                        // 判断 onRejected回调是不是一个函数，如果不是，那么默认处理状态为reject
                        if (typeof onRejected === 'function') {
                            // 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`
                            try {
                                //     执行onFulfilled获取结果x,根据规范，该值可能是promise或者对象或者函数
                                const x = onRejected(this.value);
                                /**
                                 * 解析promise过程
                                 * 这里需要一个解析resolve或者reject的结果值
                                 */
                                resolvePromise(promise, x, resolve, reject)
                            } catch (e) {
                                reject(e)
                            }
    
                        } else {
                            reject(this.value) // 当前的执行结果
                        }
                    })
                }
    ```

  **这里需要特别注意**

  - 因为可能是待定的（pending）， 这里为什么会是待定的呢，因为在没有resolve时，可能已经执行到这里来了，而且，then方法是异步的，需要等待resolve或者reject完成，才能执行then的后续代码；而且，如果是执行了多个then（比如链式）的方法是依次执行的，同时，根据队列的关系先进先出原则，我们可以使用数组将其保存起来，待resolve完成后，我们再去执行。所以这里我们需要创建一个数组``tasks`。最终完整的`constructor`初始化代码如下：

    ```javascript
        /**
         * 接收一个执行器，具有两个参数，已成功（resolve）、已拒绝（reject）
         * @param executor
         */
        constructor(executor){
            /**
             * 定义初始状态的结果，因为在实例创建的时候，由于必须有一个执行状态的返回结果，要么成功要么拒绝
             * 成功（resolve）时将结果保存到value中，已拒绝时（reject）将原因保存到value中
             * @type {null}
             */
            this.value = null
            this.state = CrazyPromise.PENDING
            this.tasks = [] // 创建一个任务队列，保存在then方法中回调的代码
            try {
                /**
                 * 将已成功执行的方法（resolve）和已拒绝的方法（reject）作为参数传入executor方法
                 * 注意这里this指向问题，因为在resolve和reject中会使用当前实例的this，如果不将当前实例的this，绑定到resolve或者reject中
                 * 在使用者使用resolve或者reject时，由于是在当前实例外部使用
                 * 所以this指向将会丢失，会指向window环境
                 * 注意： 这里可能会在执行方法里边有异常出现，应该要捕获异常并看做已拒绝（reject）
                 */
                executor(this.resolve.bind(this), this.reject.bind(this));
            } catch (e) {
                this.reject(e)
            }
        }
    ```

  - 处理待定（pending）状态

    ```javascript
    /**
     * 但是，又因为可能是待定的（pending）， 这里为什么会是待定的呢，因为在没有resolve时，
     * 可能已经执行到这里来了，而且，then方法是异步的，需要等待resolve或者reject完成，才能执行then的后续代码
     * 而且，如果是执行了多个then（比如链式）的方法是依次执行的
     * 同时，根据队列的关系先进先出原则，我们可以使用数组将其保存起来，待resolve完成后，我们再去执行
     * 既然知道then方法是异步的，那么怎么去实现异步的方式呢，可以使用setTimeout（宏任务），或者queueMicrotask(微任务)，这里使用后者
     */
    else if (this.state === CrazyPromise.PENDING) {
        this.tasks.push({
            onFulfilled:()=> {
                // 将每个执行回调使用微任务包裹起来
                queueMicrotask(()=>{
                    // 因为then的执行回调可能是onFulfilled或者onRejected的，所以我们需要判断需要处理的回调是什么
                    // 这里返回一个对象的形式，一个键是onFulfilled，表示需要执行成功的回调，一个是onRejected表示执行失败的回调
                    // 判断 onFulfilled回调是不是一个函数，如果不是，那么默认处理状态为resolve
                    if (typeof onFulfilled === 'function') {
                        // 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`
                        try {
                            //     执行onFulfilled获取结果x,根据规范，该值可能是promise或者对象或者函数
                            const x = onFulfilled(this.value);
                            /**
                             * 解析promise过程
                             * 这里需要一个解析resolve或者reject的结果值
                             */
                            resolvePromise(promise, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
    
                    } else {
                        resolve(this.value) // 当前的执行结果
                    }
                })
            },
          //   同onFulfilled
          onRejected:()=> {
              // 将每个执行回调使用微任务包裹起来
              queueMicrotask(()=>{
                  // 因为then的执行回调可能是onFulfilled或者onRejected的，所以我们需要判断需要处理的回调是什么
                  // 这里返回一个对象的形式，一个键是onFulfilled，表示需要执行成功的回调，一个是onRejected表示执行失败的回调
                  // 判断 onFulfilled回调是不是一个函数，如果不是，那么默认处理状态为resolve
                  if (typeof onRejected === 'function') {
                      // 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`
                      try {
                          //     执行onFulfilled获取结果x,根据规范，该值可能是promise或者对象或者函数
                          const x = onRejected(this.value);
                          /**
                           * 解析promise过程
                           */
                          resolvePromise(promise, x, resolve, reject)
                      } catch (e) {
                          reject(e)
                      }
    
                  } else {
                      reject(this.value) // 当前的执行结果
                  }
              })
        }
        })
    }
    ```

- 实现`resolvePromise`的过程解析：

  - 判断`x`是否与`promise`为同一个引用,如果是，抛出异常
  - 判断`x`是否为一个`promise`，如果是，那么再去执行x的then方法，并将成功的结果`y`,再次尝试去递归解析
  - 如果是一个对象或者函数，尝试去取其then方法
    - 如果可以取到then，再判断是不是一个函数，如果是一个函数，那么将`x`作为then的this指向，去调用，同时需要同上一步一样，去递归解析
    - 如果不是一个函数，那么执行resolve结果
  - 如果在取的过程中抛出异常，那么要以`e`为拒因reject出去
  - 最后，如果x既不是对象也不是函数也不是promise，那么resolve结果

- **最后`resolvePromise`完整代码如下：**

  ```javascript
  /**
   * 处理拿到的结果值，然后递归去解析，直到拿到最外层的值，可以理解为基础数据类型
   * @param promise 由then 返回的promise
   * @param x 执行成功或者失败回调函数得到的值，根据规范，该值可能是promise或者对象或者函数
   * @param resolve
   * @param reject
   */
  function resolvePromise(promise, x, resolve, reject){
      // 如果x与当前实例promise一致，抛出异常
      if (promise === x) {
          throw new TypeError("Chaining cycle detected for promise");
      }
      // 如果x为一个CrazyPromise，
      if (x instanceof CrazyPromise){
          /**
           * 如果x为一个CrazyPromise 那么可以使用递归去解析得到的新值，直到既不是对象或者函数
           */
          x.then(y=> {
              resolvePromise(promise, y, resolve, reject)
          }, reject)
      }
      // 如果是一个对象或者函数，尝试去取其then方法
      if (x !==null && (typeof x === "object" || typeof x === "function")){
          let then
          try {
              /**
               * 尝试获取一个对象或者函数的then方法，如果获取不到，那么可以以`e`为拒因
               * @type {function(*, *): CrazyPromise}
               */
              then = x.then;
          } catch (e) {
              reject(e)
          }
          /**
           * 如果then是一个函数，那么应该以x为then的this，尝试再去执行解析
           */
          if (typeof then === "function") {
              /**
               * 做一个标记，因为不管是resolve还是reject，只有一次
               * @type {boolean}
               */
              let isCalled = false;
              try {
                  then.call(x, y=>{
                      if (isCalled) return;
                      isCalled = true;
                      resolvePromise(promise, y, resolve, reject)
                  }, r=> {
                      if (isCalled) return
                      isCalled = true
                      reject(r)
                  })
              } catch (e) {
                  /**
                   * 如果执行then方法时抛出异常，那么以`e`为拒因reject
                   */
                  if (isCalled) return
                  isCalled = true
                  reject(e)
              }
  
          }
          /**
           * 如果then一个函数，那么resolve结果
           */
          else {
              resolve(x)
          }
      }
      /**
       * 如果x既不是对象也不是函数也不是promise，那么resolve结果
       */
      else {
          resolve(x)
      }
  }
  ```

## 验证

好了，”新娘“的红盖头已经揭秘了，但是，别着急哦，现在还不知道是不是你的新娘呢，万一。。。。

所以还是检验一下是不是自己的“新娘”吧，怎么检验呢？？？

答案那肯定是”娘家“呀，”娘家“是最了解的

我们使用Promises/A+官方的测试工具 [promises-aplus-tests](https://link.segmentfault.com/?enc=Dy4XykGSpZtm6%2Fy2duYmow%3D%3D.NeVIzh0rYaKoqnCjq%2FLE0AGBgip6vw5izlkUTIwFOvVrCvkAF%2BDmaL43uwzImcOIKU3qr%2F%2ByFm2yk3gerr3m0Q%3D%3D) 来对我们的`myPromise`进行测试

**安装 `promises-aplus-tests`:**

```shell
npm install promises-aplus-tests -D
// 或者
npm install promises-aplus-tests -g
```

然后，好需要在当前文件中添加以下代码：

```javascript
CrazyPromise.deferred = function () {
    let result = {};
    result.promise = new CrazyPromise((resolve, reject) => {
        result.resolve = resolve;
        result.reject = reject;
    });
    return result;
};

module.exports = CrazyPromise;
```

最后运行命令：`promises-aplus-tests test`,这里``test`是文件名称，不需要.js后缀

可以看到，**872个用例**已经全部通过啦，呵呵哈哈哈![img](https://dl4.weshineapp.com/gif/20211028/50b7d0a7a983bbac2e35a7b0e2b9080c.gif?f=micro_)

![image-20240828111028023](https://oss.eqian.site/typora/image-20240828111028023.png)

![image-20240828111012385](https://oss.eqian.site/typora/image-20240828111012385.png)

现在，已经证明了“新娘”是自己的“新娘”了，那么接下来。。。（此处省略99999999个字）

那接下来就搞点其他的呗

## catch方法

catch方法不过是reject时的封装，并不属于其规范，但是，为了能够与原生的保持一致，可以实现一下吧。

根据原生的写发，我们都知道，catch参数是一个回调方法，同时，因为是执行的失败的结果，所以，第一个参数可以设置为null,只执行失败的回调

```javascript
    /**
     * 失败的捕获方法
     * @param onRejected
     */
    catch(onRejected){
        /**
         * 因为是执行的失败的结果，所以，第一个参数可以设置为null,只执行失败的回调
         */
        this.then(null, onRejected)
    }
```

## 静态resolve方法

在原生的写法中，我们是可以这样`Promise.resolve().then()`使用的，所以我们可以实现一个静态的方法，可以通过`CrazyPromise`直接调用，而不需要一个实例

```javascript
    static resolve(value){
        /**
         * 创建一个实例，并返回一个promise
         */
        return new CrazyPromise((resolve, reject) => {
            /**
             * 判断resolve的结果是不是一个promise
             * 如果是，那么再去执行value 的then方法
             */
            if (value instanceof CrazyPromise){
                value.then(resolve, reject)
                return
            }
            /**
             * 判断resolve的结果不是一个promise，直接resolve结果 
             */
            resolve(value)
        })
    }
```

## 静态reject方法

原生的写法中，我们是可以这样`Promise.reject().then()`使用的，所以我们可以实现一个静态的方法，可以通过`CrazyPromise`直接调用，而不需要一个实例

```javascript
    static reject(value) {
        /**
         * 与静态的resolve一致，需要创建一个promise实例，并返回
         */
        return new CrazyPromise((resolve, reject) => {
            /**
             * 这里因为是失败的结果，所以不需要再去处理，value值为promise情况
             */
            reject(value)
        })
    }
```



## 静态all方法

这里的al方法处理起来可能会有一丢丢的麻烦

- 创建一个数组，保存执行的结果值
- 遍历`promises`,并拿到每个promise的状态
- 判断每个promise的状态是不是已成功的，如果是将promise的结果保存到数组中
- 如果promise的状态是已拒绝的，那么执行reject出去
- 如果没有reject的，并且拿到的结果值长度与`promises`的长度一致，说明是全部执行成功的，然后直接执行resolve，将结果的数组作为参数返回

**就是为什么我们在执行原生的all方法时，会得到一个数组的结果值**

```javascript
    /**
     * promise 的all方法
     * @param promises
     * @return {CrazyPromise}
     */
    all(promises){
        /**
         * 创建一个数组保存执行结果
         * @type {*[]}
         */
        let values = []
        /**
         * 创建一个实例并返回
         */
        return new CrazyPromise((resolve, reject) => {
            /**
             * 遍历promises数组，拿到每一个promise对象
             */
            promises.forEach(promise => {
                /**
                 * 判断当前状态的值是不是已成功的，如果是，将结果保存起来
                 */
                if (promise.state === CrazyPromise.FULFILLED){
                    values.push(promise.result)
                } else if (promise.state === CrazyPromise.REJECTED){
                    /**
                     * 再判断当前状态的值是不是已失败的，如果是，直接reject，不处理结果
                     */
                    reject(promise.result)
                }
                /**
                 * 如果拿到的结果长度与promises的长度一致，说明执行成功的
                 * 将结果resolve出去，这就是为什么我们在执行原生的all方法时，会得到一个数组的结果值
                 */
                if (values.length === promises.length) {
                    resolve(values)
                }
            })
        })
    }
```

# 结语

好了，以上就是实现一个promise的过程，散会！！！

# 参考

[javascript - 手把手一行一行代码教你 "手写 Promise"，完美通过 Promises/A+ 官方872个测试用例 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000041150227)

[个人网站](https://eqian.site)
