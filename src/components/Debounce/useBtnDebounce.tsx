import { useEffect, useState, useRef } from 'react'

interface Icurrent{
  fn:Function
  timer:NodeJS.Timeout|number
}

const useBtn = (fn: Function, delay?:number, immediate?:boolean):Function=> {
  var {current} = useRef<Icurrent>({fn,timer:0})
  return function(...args:any[]){
    // @ts-ignore
    const that = this
    if(immediate && current.timer ===0){
      current.fn.apply(that,args)
      current.timer = setTimeout(()=>{
        clearTimeout(current.timer)
        current.timer = 0
      },delay)
    } else if(immediate===false){
      if(current.timer!==0){
        clearTimeout(current.timer)
        current.timer = 0
      }
      current.timer=setTimeout(()=>{
        current.fn.apply(that, args)
        clearTimeout(current.timer)
        current.timer = 0
      },delay)
    }
  }
}

export default useBtn