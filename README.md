# fe-monitor-sdk

## 异常监控

### 定位和采集

异常类型:

- 请求异常
  - 网络资源加载异常
    - `link`
    - `script`
    - `img`
  - HTTP请求异常

  采集:
    - `XMLHttpRequest`
    - `fetch`
    - `PerformanceEntries`
    - `MTraceId`

> AOP编程

```js
window.addEventListener('error', ev=>{
  const { tagName } = ev.target

})

```

- JS运行时异常
  - JS错误：
    - `EvalError`
    - `RangeError`
    - `SyntaxError`
    - `TypeError`
    - `URIError`
  - 异步异常:
    - `setTimeout`
    - `setInterval`
    - `Promise`
    - `requestAnimationFrame`
  - 自定义异常

  采集:
    - `onerror`
    - `console.error`
    - `unhandlerejection`

  定位: [SourceMap](https://ruanyifeng.com/blog/2013/01/javascript_source_map.html) JS代码反解

  [错误堆栈解析](https://github.com/stacktracejs/error-stack-parser)
  

```js
window.onerror = (message, source, lineno, colno, error)=>{}

window.addEventListener('unhandlerejection', ()=>{})
window.addEventListener('rejectionhandled', ()=>{})

// 解决跨域脚本错误
const originAddEventListener = EventTarget.prototype.addEventListener

EventTarget.prototype.addEventListener = function(type, listener, options) {
  
}

```
  
- 环境异常

- 业务指标异常

### 日志

### 数据清洗和上报

上报方法:

- `XMLHttpRequest`
- `navigator.sendBeacon`
- `IndexedDB`
- 截图


### 可视分析

### 告警

> 阈值

## 性能监控

### 加载性能

### 渲染性能



