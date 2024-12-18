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
    - `video`
  - HTTP请求异常
  - API异常

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
  - `script`跨源错误
  - 自定义异常

  采集:
    - `onerror`
    - `console.error`
    - `unhandlerejection`

  定位: [SourceMap](https://ruanyifeng.com/blog/2013/01/javascript_source_map.html) JS代码反解

  [错误堆栈解析](https://github.com/stacktracejs/error-stack-parser)
  
```html
<script src="" crossorigin=""></script>

```

```js
try {

} catch(e) {

}

window.onerror = (message, url, lineno, colno, error)=>{}

new Promise((resolve, reject)=>{})
  .then(result=>{})
  .catch(reason=>{})

window.addEventListener('unhandlerejection', (e)=>{
  const { reason } = e
  e.preventDefault()
})

window.addEventListener('rejectionhandled', (e)=>{
  e.preventDefault()
}, {
  capture:true,
  passive:true
})

// 解决跨域脚本错误
const originAddEventListener = EventTarget.prototype.addEventListener

EventTarget.prototype.addEventListener = function(type, listener, options) { }

Vue.config.errorHandler = (e, vm, info)=>{}


```
  
- 环境异常

- 业务指标异常

> PV/UV、页面停留时间数据统计

```js
function createHistoryEvent(name) {
  const origin = window.history[name]

  return function() {
  
  }
}

window.history.pushState = createHistoryEvent('pushState')
window.history.replaceState = createHistoryEvent('replaceState')


```

> `Base64 VLQ`编码

埋点:

- 手动埋点(利用元素自定义属性`elementtiming`)
- 可视化埋点
- 无痕埋点

### 日志和上报

上报策略: 实时上报、批量上报和手动上报

上报方案:

- `XMLHttpRequest`
- `fetch`
- `navigator.sendBeacon`
- `IndexedDB`缓存，异步上传
- 图片src请求
- `jsonp`
- 截图
- 场景回溯

```js
window.requestIdleCallback

```

跨域问题的解决方案:

- 配置本地HOST文件
- cors
- proxy

### 数据存储、清洗和回流

> 建模

### 可视化分析

### 预警

> 阈值和心跳检测

邮件、短信报警

```sh
# 定时任务
crontab

npm i cron

npm i nodemailer

```

## 性能监控

[Navigation Timing API](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance_API/Navigation_timing)

<img src="https://imgos.cn/2024/08/14/66bc1eb163be7.png" width="80%" alt="" />

采集:

- `window.performance.timing`
- `window.performance.getEntries`
- `window.performance.getEntriesByType`
- `window.performance.getEntriesByName`
- `window.performance.mark`
- `PerformanceObserver`

```js
const entries = window.performance.getEntries()

const paint = window.performance.getEntriesByType('paint')
const fp = paint.find(e=>e.name === 'first-paint').startTime

new PerformanceObserver((entryList, observer)=>{
  
  observer.disconnect()
}).observe({})


```

性能指标:

- FP（First Paint）
- FCP（First Contentful Paint）
- LCP（Largest Contentful Paint）
- FMP（First Meaning Paint）
- DCL（DOM Content Loaded）
- TTI（Time To Interactive）
- TTFB（Time To First Byte）
- FID（First Input Delay）

> 白屏和卡顿

```js
document.elementFromPoint(300, 300)

window.addEventListener('DOMContentLoaded', ev=>{})
window.addEventListener('load', ev=>{})


```

### 加载性能

### 渲染性能

## 行为监控


## 第三方平台

<https://sentry.io/>

<https://www.rrweb.io/>



