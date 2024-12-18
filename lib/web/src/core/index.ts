class Reporter {
  send() {
    // document.elementsFromPoint()

    const body = JSON.stringify({})

    if(navigator.sendBeacon) {
      navigator.sendBeacon('', body)
    } else if(globalThis.fetch) {
      fetch('', { method:'post', body })
    } else {
      const img = new Image(1, 1)
      img.src = `?reportData=${encodeURIComponent(body)}`
    }
  }
}
