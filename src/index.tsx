import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './LazyLoading';
import reportWebVitals from './reportWebVitals';
import "overlayscrollbars/css/OverlayScrollbars.css";
import App3 from './components/App3'
import {HashRouter }from 'react-router-dom' 
// import TodoComponent from './components/Todolist'
import DebounceAbtn from './components/Debounce/Abtn'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const Exercism = ()=>{
  class Matrix {
    str:string
    col:number[]
    row:number[]

    constructor(str:string) {
      this.str=str
      const [row,col] = this.manipulate(str)
      this.col=row
      this.row=col
    }

    manipulate(str:string):[number[],number[]]{
      const arr=str.split('\n')

      var temp:any[]=[]
      var temp2:any[]=[]
      let lis:number[]=[]
      console.log(arr)
      
      for(let i=0;i<arr.length;i++){
        lis = arr[i].split(' ').map(Number)
        temp2 = [...temp2,lis]
        lis=[]
      }

      for(let a=0; a<temp2.length;a++){
        for(let b=0;b<temp2[a].length;b++){
        if(a===b){
          console.log(a)
          if(Array.isArray(temp[a])){
              temp[a].push(temp2[a][b])
            } else {
              temp[a] = []
              temp[a].push(temp2[a][b])
            }
          }
          else{
            if(a>b){
              if(Array.isArray(temp[b])){
                temp[b].push(temp2[a][b])
              } else {
                temp[b] = []
                temp[b].push(temp2[a][b])
              }
            } else {
              if(Array.isArray(temp[b])){
                temp[b].push(temp2[a][b])
              } else {
                temp[b] = []
                temp[b].push(temp2[a][b])
              }
            }
          }
        }
      }
      console.log(temp)
      console.log('------------')
      return [temp,temp2]
    }

    get rows(): number[] {
      return this.row
    }
  
    get columns(): number[] {
      return this.col
    }
  }
// const ins = new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1]

// console.log(ins.columns[0])


class Stack{
  
}





  return <div>for TS practice</div>
}


root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoComponent/> */}
    <Exercism/>
        {/* <HashRouter> */}
    {/* <App3/> */}
    {/* </HashRouter> */}
    {/* <DebounceAbtn/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
