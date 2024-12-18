interface OSThread {
  name:string
  threadID:number
}

interface OSProcess {
  name:string
  processID:number
  state:'RUNNING'|'SLEEPING'|'WAITING'
  threadCount:number
  startTime:number
  upTime:number
  threadDetails:OSThread[]
}

interface OSMemory {
  available:number
  total:number
  pageSize:number
}

interface OSProcessor {
  maxFreq:number
  currentFreq:number[]
  cpuLoad:number[]
}

interface ReportData {
  os:{
    processes: OSProcess[]
  }
  hardware:{
    memory:OSMemory
    processor:OSProcessor
  }
}

