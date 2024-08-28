---
date: 2024-04-25 14:20:51
title: 基于websocket封装
author: 秋谨
categories:
  - vue
tags:
  - JavaScript
  - websocket
  - vue
---

# 前言

最近在公司搞一个大模型的AI对话项目，经过内部讨论，并决定使用websocket进行长连接，并支持服务端主动推送信息。WebSocket作为一种新的通信协议，在Web应用中具有广泛的应用前景。通过实现全双工通信和长连接机制，WebSocket可以极大地提高Web应用的实时性和并发性能。同时，结合心跳机制，可以确保连接的稳定性和可靠性。在Vue等前端框架中，我们可以方便地集成WebSocket和心跳机制，为Web应用提供更加高效和稳定的通信解决方案。

WebSocket的优点主要体现在以下几个方面：

1. **实时双向通信**：WebSocket协议支持服务器和客户端之间的实时双向通信。一旦连接建立，服务器可以主动推送数据到客户端，而不需要客户端频繁地发送请求。这种通信方式使得数据更新更为及时，用户体验更加流畅。
2. **减少网络流量和延迟**：相比于传统的HTTP请求响应模式，WebSocket连接只需要进行一次握手，之后就可以保持长连接。这种长连接机制减少了请求和响应过程中的网络流量和延迟，提高了数据传输的效率。
3. **较少的通信开销**：WebSocket使用较少的开销来维持连接。在连接建立后，客户端和服务器之间的通信只需要少量的头信息，这降低了数据传输的成本。
4. **跨平台支持**：WebSocket协议可以在多种平台上使用，包括桌面应用、移动应用和Web应用。这使得WebSocket成为一种具有广泛适用性的通信协议。
5. **更好的二进制支持**：WebSocket支持二进制数据的传输，这使得它可以处理各种类型的数据，包括图片、音频和视频等。

需要注意的是，虽然WebSocket具有诸多优点，但也存在一些挑战和限制，如安全性问题、兼容性问题以及数据包大小的限制等。因此，在选择使用WebSocket时，需要根据具体的需求和场景来评估其优缺点。

# `WebSocket `机制


以下简要介绍一下 `WebSocket `的原理及运行机制。

`WebSocket `是 `HTML5 `一种新的协议。它实现了浏览器与服务器全双工通信，能更好的节省服务器资源和带宽并达到实时通讯，它建立在 `TCP `之上，同 HTTP 一样通过 `TCP `来传输数据，但是它和 HTTP 最大不同是：

- `WebSocket `是一种双向通信协议，在建立连接后，`WebSocket `服务器和 Browser/Client Agent 都能主动的向对方发送或接收数据，就像 Socket 一样；
- `WebSocket `需要类似 TCP 的客户端和服务器端通过握手连接，连接成功后才能相互通信。

相对于传统 HTTP 每次请求-应答都需要客户端与服务端建立连接的模式，`WebSocket `是类似 Socket 的 TCP 长连接的通讯模式，一旦 `WebSocket `连接建立后，后续数据都以帧序列的形式传输。在客户端断开 `WebSocket `连接或 Server 端断掉连接前，不需要客户端和服务端重新发起连接请求。在海量并发及客户端与服务器交互负载流量大的情况下，极大的节省了网络带宽资源的消耗，有明显的性能优势，且客户端发送和接受消息是在同一个持久连接上发起，实时性优势明显。

# 心跳机制

通过每隔一段时间，定时发送一个消息，如果发送成功说明连接是正常的，重置心跳信息，清空定时任务；反之，将尝试重新创建一个新的请求连接，如果连接成功，则重置心跳信息，反之，反复这一步骤。如果设置了重连次数，每次失败进行累加，达到最大阈值时，清空任务，重连机制不再执行，成功后置为0。

![image-20240425153756713](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20240425153756713.png)



定义了一个名为`useWebSocket`的泛型函数，它接收一个`WebSocket`的URL地址和一些选项作为参数，返回一个包含多个属性和方法的对象。这个对象允许开发者进行`WebSocket`连接的建立、关闭、发送消息、接收消息等操作，并提供了一系列的事件回调机制来处理连接状态变化、消息接收等事件。

具体来说，`useWebSocket`函数的主要功能如下：

1. **建立`WebSocket`连接**：函数内部创建了一个新的`WebSocket`实例，并通过监听`WebSocket`的`onopen`事件来确认连接是否成功建立。当连接建立成功后，会触发`onOpen`回调函数，并启动心跳检测机制（如果`isReconnect`默认选项为`true`）。
2. **发送消息**：模块提供了一个`send`方法，用于向`WebSocket`服务器发送消息。这个方法接收一个消息体（可以是字符串、ArrayBuffer或Blob类型），并可以选择是否缓存消息。如果`WebSocket`连接当前未建立，消息将被缓存，并在连接建立后发送。
3. **接收消息**：通过监听`WebSocket`的`onmessage`事件，模块可以接收来自服务器的消息。当收到消息时，会触发`onMessage`回调函数，并将消息体传递给开发者。
4. **处理连接关闭和错误**：模块还监听了`WebSocket`的`onclose`和`onerror`事件，用于处理连接关闭和错误情况。当连接关闭时，会触发`onClose`回调函数，并传递关闭事件对象；当发生错误时，会触发`onError`回调函数，并传递错误事件对象。
5. **心跳检测与重连**：模块实现了心跳检测机制，通过定期发送心跳消息来检测连接是否存活。如果连接断开，并且`isReconnect`选项为`true`，模块会尝试重新连接，直到达到设定的重连次数`reconnectCount`或者重连失败回调`onFailed`被触发。
6. **提供数据引用和操作方法**：模块返回一个对象，其中包含了对WebSocket实例的引用（响应式`ws`）、接收到的数据引用（响应式`data`）、关闭连接的方法（`close`）以及打开`WebSocket`连接的方法（``websocketOpen``），在某些场景下并不需要立即创建连接，因此提供一个`websocketOpen`方法手动去开启连接。这使得开发者可以方便地访问和操作WebSocket连接和接收到的数据。

# 类型定义

```typescript
export interface ISocketOptions {
  /**
   * 通信协议
   */
  protocols?: string | string[];
  /**
   * 心跳时间间隔
   * @default 5000
   */
  heartTime?: number;
  /**
   * 心跳信息
   * @default ping
   */
  heartMessage?: string;
  /**
   * 自动关闭
   * @default true
   */
  autoClose?: boolean;
  /**
   * 是否自动重连
   * @default true
   */
  isReconnect?: boolean;
  /**
   * 重连时间间隔
   * @default 5000
   */
  reconnectTime?: number;
  /**
   *  重连次数
   *  可以是数值或者返回一个boolean
   *  @default -1
   */
  reconnectCount?: number | (() => boolean);
  /**
   * 连接成功地回调
   * @param ws
   */
  onOpen?: (ws: WebSocket) => void;
  /**
   * 关闭的回调
   * @param ws
   * @param e
   */
  onClose?: (ws: WebSocket, e: CloseEvent) => void;
  /**
   * 消息的回调
   * @param ws
   * @param e
   */
  onMessage?: (ws: WebSocket, e: MessageEvent) => void;
  /**
   * 数据接收前处理 只处理data
   * @param e
   */
  beforeMessage?: (e: MessageEvent) => any;
  /**
   * 错误的回调
   * @param ws
   * @param e
   */
  onError?: (ws: WebSocket, e: Event) => void;
  /**
   * 重连失败回调
   */
  onFailed?: () => void;
}
```

# 返回值

```typescript
  return {
    data,// 响应式数据
    send, // 数据发送方法
    close,// 关闭连接方法
    websocketOpen,// 手动连接方法
    ws: wsRef // 响应式ws
  };
```

# init初始化

```typescript
  const _init = () => {
    if (wsRef.value) return;
    const ws = new WebSocket(url, protocols);
    wsRef.value = ws;
    ws.onopen = () => {
      isFunction(onOpen) && onOpen?.(ws!);
      _heartbeatDetection();
      _sendBufferData();
    };
    ws.onclose = ev => {
      wsRef.value = undefined;
      isFunction(onClose) && onClose?.(ws, ev);
      // 非主动关闭，且配置自动重连
      if (!explicitlyClose && isReconnect) {
        retriedCount += 1;
        if (
          (isNumeric(reconnectCount) && (+reconnectCount < 0 || retriedCount < +reconnectCount)) ||
          (typeof reconnectCount === 'function' && reconnectCount())
        ) {
          setTimeout(_init, reconnectTime);
        } else {
          _reset();
          isFunction(onFailed) && onFailed?.();
        }
      }
    };
```

这段代码定义了一个名为 `_init` 的函数，它主要用于初始化一个 WebSocket 连接，处理连接的打开、关闭以及心跳检测等逻辑：

1. 定义一个箭头函数 `_init`。
2. 如果 `wsRef.value` 已经有值（即 WebSocket 连接已经存在），则直接返回，不执行后续代码，避免重复连接。
3. 创建一个新的 WebSocket 实例，并指定连接的 URL 和协议。
4. 将新创建的 WebSocket 实例赋值给 `wsRef.value`，这样可以在其他地方引用这个 WebSocket 连接。
5. 当 WebSocket 连接打开时，执行以下操作：
   - 如果 用户传入`onOpen` 是一个函数，则调用它，并传入 WebSocket 实例 `ws`，方便有其他需求的操作。
   - 调用 `_heartbeatDetection` 函数，是用于启动或管理心跳检测。
   - 调用 `_sendBufferData` 函数，用于处理发送缓冲区的数据。
6. 当 WebSocket 连接关闭时，执行以下操作：
   - 将 `wsRef.value` 设为 `undefined`，表示当前没有有效的 WebSocket 连接。
   - 如果 用户传入`onClose` 是一个函数，则调用它，并传入 WebSocket 实例 `ws` 和关闭事件 `ev`。
   - 接下来是处理自动重连的逻辑：
     - 如果不是主动关闭连接，并且配置了自动重连 (`isReconnect`为`true`)：
       - 增加重试次数 `retriedCount`。
       - 判断是否满足重连的条件：
         - 如果 `reconnectCount` 是数值类型且为正值，且 `retriedCount` 小于 `reconnectCount`。
         - 或者 `reconnectCount` 是一个函数，并且它返回真值。
       - 如果满足重连条件，则在 `reconnectTime` 毫秒后重新调用 `_init` 函数，尝试重新建立连接。
       - 如果不满足重连条件，则执行 `_reset` 函数（重置状态），并调用 `onFailed` 函数（如果达到了重连次数的阈值）。

# 心跳检测

```typescript
  const _heartbeatDetection = () => {
    _reset();
    if (isReconnect) {
      intervalTime = setInterval(() => {
        // 发送心跳包
        send(heartMessage, false);
      }, heartTime);
    }
  };
```

启动或管理 WebSocket 的心跳检测机制。心跳检测通常用于确保 WebSocket 连接仍然活跃，以及在连接中断时及时发现。`_heartbeatDetection` 函数的主要作用是，在配置了自动重连或需要心跳检测的情况下，启动一个计时器来定期发送心跳包，从而保持 WebSocket 连接的活跃性。如果在某个时间点不再需要心跳检测，`_reset` 函数会被调用以清除这个计时器。这有助于避免在连接已经关闭或不再需要时继续发送不必要的心跳包。

# 发送数据

```typescript
  const send = (_data: string | ArrayBuffer | Blob, buffer = true) => {
    /**
     * 未连接状态，缓存数据，下次连接成功重新发送
     */
    if (!wsRef.value || wsRef.value?.readyState !== wsRef.value?.OPEN) {
      if (buffer) bufferedData.push(_data);
      return false;
    }
    _sendBufferData();
    wsRef.value?.send(_data);
    return true;
  };
```

`send` 函数的主要作用是尝试通过 WebSocket 发送数据。如果 WebSocket 连接未打开，它会将数据缓存起来，并在连接恢复时（通过调用 `_sendBufferData`）尝试重新发送。如果连接已打开，它会直接发送数据。

# 接收数据

```typescript
    ws.onmessage = e => {
      if (isReconnect) {
        // 正常收到数据，说明连接正确，重置心跳
        _heartbeatDetection();
        if (e.data === heartMessage) return;
      }
      data.value = isFunction(beforeMessage) ? beforeMessage?.(e.data) : e.data;
      isFunction(onMessage) && onMessage?.(ws!, e);
    };
  };
```

这段代码的作用是监听 WebSocket 的消息，并根据用户定义的不同回调函数对接收到的消息进行处理。如果当前配置了重连，判断收到的信息是否与心跳信息一样，如果一样的数据忽略心跳消息。

# 手动连接

```typescript
  const websocketOpen = () => {
    close();
    explicitlyClose = false;
    retriedCount = 0;
    _init();
  };
```

# 关闭连接

```typescript
  const close: WebSocket['close'] = (code?: number, reason?: string) => {
    if (!wsRef.value) return;
    explicitlyClose = true;
    _reset();
    wsRef.value && wsRef.value?.close(code || 1000, reason);
  };
```

# 完整代码

```typescript
import { ref, Ref, getCurrentScope, onScopeDispose } from 'vue';
import { isFunction } from 'co-utils-vue';
import { isNumeric } from 'co-utils-vue';
const DEFAULT_PING_MESSAGE = 'ping';

export interface ISocketOptions {
  /**
   * 通信协议
   */
  protocols?: string | string[];
  /**
   * 心跳时间间隔
   * @default 5000
   */
  heartTime?: number;
  /**
   * 心跳信息
   * @default ping
   */
  heartMessage?: string;
  /**
   * 自动关闭
   * @default true
   */
  autoClose?: boolean;
  /**
   * 是否自动重连
   * @default true
   */
  isReconnect?: boolean;
  /**
   * 重连时间间隔
   * @default 5000
   */
  reconnectTime?: number;
  /**
   *  重连次数
   *  可以是数值或者返回一个boolean
   *  @default -1
   */
  reconnectCount?: number | (() => boolean);
  /**
   * 连接成功地回调
   * @param ws
   */
  onOpen?: (ws: WebSocket) => void;
  /**
   * 关闭的回调
   * @param ws
   * @param e
   */
  onClose?: (ws: WebSocket, e: CloseEvent) => void;
  /**
   * 消息的回调
   * @param ws
   * @param e
   */
  onMessage?: (ws: WebSocket, e: MessageEvent) => void;
  /**
   * 数据接收前处理 只处理data
   * @param e
   */
  beforeMessage?: (e: MessageEvent) => any;
  /**
   * 错误的回调
   * @param ws
   * @param e
   */
  onError?: (ws: WebSocket, e: Event) => void;
  /**
   * 重连失败回调
   */
  onFailed?: () => void;
}
export interface ISocketReturn<T> {
  data?: Ref<T | null>;
  close: WebSocket['close'];
  websocketOpen: () => void;
  send: (data: string | ArrayBuffer | Blob, useBuffer?: boolean) => boolean;
  ws: Ref<WebSocket | undefined>;
}
export const useWebSocket = <Data = any>(
  url: string,
  options: ISocketOptions = {}
): ISocketReturn<Data> => {
  const {
    onOpen,
    onClose,
    onFailed,
    onError,
    onMessage,
    beforeMessage,
    heartMessage = DEFAULT_PING_MESSAGE,
    heartTime = 5000,
    reconnectCount = -1,
    reconnectTime = 5000,
    isReconnect = true,
    autoClose = true,
    protocols = []
  } = options;
  const wsRef = ref<WebSocket | undefined>();
  const data: Ref<Data | null> = ref(null);
  let bufferedData: (string | ArrayBuffer | Blob)[] = [];
  let intervalTime: ReturnType<typeof setInterval> | undefined;
  // 进行重连次数
  let retriedCount = 0;
  // 是否主动关闭，如果主动关闭，则不会进行重连
  let explicitlyClose = false;
  // 重置
  const _reset = () => {
    intervalTime && clearInterval(intervalTime);
    intervalTime = undefined;
  };
  /**
   * 发送缓存数据
   */
  const _sendBufferData = () => {
    bufferedData.forEach(_data => {
      wsRef.value?.send(_data);
    });
    bufferedData = [];
  };
  const send = (_data: string | ArrayBuffer | Blob, buffer = true) => {
    /**
     * 未连接状态，缓存数据，下次连接成功重新发送
     */
    if (!wsRef.value || wsRef.value?.readyState !== wsRef.value?.OPEN) {
      if (buffer) bufferedData.push(_data);
      return false;
    }
    _sendBufferData();
    wsRef.value?.send(_data);
    return true;
  };
  const _heartbeatDetection = () => {
    _reset();
    if (isReconnect) {
      intervalTime = setInterval(() => {
        // 发送心跳包
        send(heartMessage, false);
      }, heartTime);
    }
  };
  const _init = () => {
    if (wsRef.value) return;
    const ws = new WebSocket(url, protocols);
    wsRef.value = ws;
    ws.onopen = () => {
      isFunction(onOpen) && onOpen?.(ws!);
      _heartbeatDetection();
      _sendBufferData();
    };
    ws.onclose = ev => {
      wsRef.value = undefined;
      isFunction(onClose) && onClose?.(ws, ev);
      // 非主动关闭，且配置自动重连
      if (!explicitlyClose && isReconnect) {
        retriedCount += 1;
        if (
          (isNumeric(reconnectCount) && (+reconnectCount < 0 || retriedCount < +reconnectCount)) ||
          (typeof reconnectCount === 'function' && reconnectCount())
        ) {
          setTimeout(_init, reconnectTime);
        } else {
          _reset();
          isFunction(onFailed) && onFailed?.();
        }
      }
    };
    ws.onerror = ev => {
      isFunction(onError) && onError?.(ws!, ev);
    };
    ws.onmessage = e => {
      if (isReconnect) {
        // 正常收到数据，说明连接正确，重置心跳
        _heartbeatDetection();
        if (e.data === heartMessage) return;
      }
      data.value = isFunction(beforeMessage) ? beforeMessage?.(e.data) : e.data;
      isFunction(onMessage) && onMessage?.(ws!, e);
    };
  };
  const close: WebSocket['close'] = (code?: number, reason?: string) => {
    if (!wsRef.value) return;
    explicitlyClose = true;
    _reset();
    wsRef.value && wsRef.value?.close(code || 1000, reason);
  };
  const websocketOpen = () => {
    close();
    explicitlyClose = false;
    retriedCount = 0;
    _init();
  };
  if (autoClose) {
    window.addEventListener('beforeunload', () => close());
    if (getCurrentScope()) {
      onScopeDispose(close);
    }
  }
  return {
    data,// 响应式数据
    send, // 数据发送方法
    close,// 关闭连接方法
    websocketOpen,// 手动连接方法
    ws: wsRef // 响应式ws
  };
};

```

