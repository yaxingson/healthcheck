# fe-monitor-sdk

## 异常监控

> TS编译时内联

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
  const isResourceElementTag = tagName.match(/^(img|link|script)$/i) 


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
try {

} catch(e) {

}

window.onerror = (message, source, lineno, colno, error)=>{}

new Promise((resolve, reject)=>{})
  .then(result=>{})
  .catch(reason=>{})

window.addEventListener('unhandlerejection', ()=>{})
window.addEventListener('rejectionhandled', ()=>{})

// 解决跨域脚本错误
const originAddEventListener = EventTarget.prototype.addEventListener

EventTarget.prototype.addEventListener = function(type, listener, options) {
  
}

```
  
- 环境异常

- 业务指标异常

> PV/UV数据统计

```js
function createHistoryEvent(name) {
  const origin = window.history[name]

  return function() {
  
  }
}

window.history.pushState = createHistoryEvent('pushState')
window.history.replaceState = createHistoryEvent('replaceState')


```

埋点:

- 手动埋点(利用元素自定义属性)
- 无痕埋点

### 日志和上报

上报方法:

- `XMLHttpRequest`
- `navigator.sendBeacon`
- `IndexedDB`
- 图片url请求
- 截图

### 数据存储、清洗和回流

### 可视化分析

### 预警

> 阈值和心跳检测


## 性能监控

[Navigation Timing API](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance_API/Navigation_timing)

<img src="https://imgos.cn/2024/08/14/66bc1eb163be7.png" width="80%" alt="" />

采集:

- `window.performance.timing`
- `window.performance.getEntries`
- `window.performance.getEntriesByType`
- `window.performance.mark`
- `PerformanceObserver`

```js
const entries = window.performance.getEntries()

const paint = window.performance.getEntriesByType('paint')
const fp = paint.find(e=>e.name === 'first-paint').startTime

```

性能指标:

- FP（First Paint）
- FCP（First Contentful Paint）
- LCP（Largest Contentful Paint）
- FMP（First Meaning Paint）
- DCL（DOM Content Loaded）

### 加载性能

### 渲染性能



