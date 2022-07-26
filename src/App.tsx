import DatePick from "./components/DatePicker"
import FiveCards from "./components/FiveCards";
import Chart from './components/Chart'
import List from "./components/List"
import { RightOutlined,LeftOutlined } from '@ant-design/icons';
import { useEffect, useState, useRef, useCallback} from "react";
import {throttle} from 'lodash';
import { useWindowWidth } from '@react-hook/window-size'
import Header from './components/Header'

export interface ObjectArr {
    name:string,
    value:string,
    positive:boolean,
    growth:string,
    response:string
}

export interface StoreArr {
  Store:string,
  Score:string,
  positive:boolean,
  Change:string,
  ScoredResponse:string
}

const objlist:ObjectArr[] = [
  {name: 'Overall score', value: '60%', positive: true, growth:'12%', response: '2,135'},
  {name: 'People', value: '75%', positive: true, growth:'2%', response: '102'},
  {name: 'Product', value: '58%', positive: false, growth:'12%', response: '486'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'VM', value: '70%', positive: true, growth:'No change', response: '996'},
  {name: 'Standards', value: '63%', positive: true, growth:'12%', response: '551'}
]
const StoreScore:StoreArr[]=[
  {Store: '100-Melbourne Central', Score: '90%', positive: true, Change:'2%', ScoredResponse: '123'},
  {Store: '222-Kotara', Score: '88%', positive: true, Change:'8%', ScoredResponse: '321'},
  {Store: '113-Malven', Score: '88%', positive: false, Change:'1%', ScoredResponse: '123'},
  {Store: '108-Cheltenham', Score: '84%', positive: true, Change:'2%', ScoredResponse: '321'},
  {Store: '105-Chadstone', Score: '82%', positive: false, Change:'2%', ScoredResponse: '123'},
  {Store: '210-Store', Score: '72%', positive: true, Change:'No change', ScoredResponse: '321'},
  {Store: 'Overall score', Score: '60%', positive: true, Change:'12%', ScoredResponse: '123'},
  {Store: 'Overall score', Score: '60%', positive: true, Change:'12%', ScoredResponse: '321'},
  {Store: 'Overall score', Score: '60%', positive: true, Change:'12%', ScoredResponse: '123'},
  {Store: 'Overall score', Score: '60%', positive: true, Change:'12%', ScoredResponse: '2,135'},
]


const App:React.FC=()=>{
  let container = useRef<HTMLDivElement>(null)
  let containerWrapper = useRef<HTMLDivElement>(null)

  const [startPos,setStartPos] = useState(0)
  const [endPos,setEndPos] = useState(0)
  const [cols,setCols] = useState(0)
  const [rows,setRows] = useState(0)
  const [singleColWidth,setSingleColWidth] = useState(0)
  const [currentLeft,setCurrentLeft] = useState(0)
  const [rightSlidable,setRightSlidable] = useState(true)
  const [leftSlidable,setLeftSlidable] = useState(false)

  const windowWidth = useWindowWidth()


  const determineSwipeDirection=(direction:string)=>{
    if(direction === 'right' && (singleColWidth *cols-singleColWidth)!==currentLeft &&containerWrapper.current ){
        setCurrentLeft(currentLeft+singleColWidth)
        console.log('single',singleColWidth)
        console.log('currentLeft',currentLeft)
    } else if( direction === 'left'&&currentLeft!==0 &&containerWrapper.current){
        setCurrentLeft(currentLeft-singleColWidth)
    }
  }

  useEffect(()=>{
    if(containerWrapper.current){
      containerWrapper.current.style.right = `${currentLeft}px`
      containerWrapper.current.style.transition = `all 1s linear`
      console.log('需要移动：',currentLeft)

    }
  },[currentLeft])

  // useEffect(()=>{
  //   let totalWidth=0
  //   if(containerWrapper.current){
  //     // const singleWidth = Math.ceil(containerWrapper.current.clientWidth/(screenSize==='MD'?3:(screenSize==='SM'?2:1)))
  //     // totalWidth = (singleWidth *cols)
  //     // setSingleColWidth(Math.ceil(singleWidth))
  //     // console.log('单个col的宽度',singleWidth)

  //     if(container.current){
  //       console.log(container.current.style.width)
  //       container.current.style.width = `${totalWidth}px`
  //       console.log(container.current.style.width)
  //     }
  //   }
  // // eslint-disable-next-line
  // },[windowWidth,cols])


  useEffect(()=>{
    
    const width = windowWidth>768?'MD':(windowWidth>640?'SM':'XSM')
    let cols = 0
      switch (width) {
        case 'MD':
          cols = Math.ceil((objlist.length-1)/2)+1
          setRows(2)
          break
        case 'SM':
          cols = Math.ceil((objlist.length)/3)
          setRows(3)
          break
        case 'XSM':
          cols = Math.ceil((objlist.length-2)/3)+1
          setRows(3)
      }
    console.log('cols数量',cols)
    setCols(cols)
    if(containerWrapper.current){
      containerWrapper.current.style.right='0px'
      const singleWidth = Math.ceil(containerWrapper.current.clientWidth/(width==='MD'?3:(width==='SM'?2:1.5)))
      const totalWidth = (singleWidth *cols)
      setSingleColWidth(Math.ceil(singleWidth))
      if(container.current){
        console.log(container.current.style.width)
        container.current.style.width = `${totalWidth}px`
        console.log(container.current.style.width)
        setCurrentLeft(0)
      }
    }
  // eslint-disable-next-line
  },[windowWidth])


  const infoIcon=()=>{
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey" className="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    )
  }
  const lines = ()=>{
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="black" className="bi bi-filter" viewBox="0 0 16 16">
        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg>
    )
  }

  return (
    <div className="py-1 bg-gray-400">
      <div className="ml-72 mt-36 mr-10 pb-2 bg-gray-100">
        <div className="flex flex-col bg-white h-auto">







        <div className="relative w-full overflow-hidden">
          <div className={`${currentLeft===0?'invisible':'visible'} z-40 relative float-left top-48 `} onClick={()=>determineSwipeDirection('left')}>
            <LeftOutlined />
          </div>
          <div className={`relative w-full`} ref={containerWrapper}>
            <div className={`grid grid-flow-col grid-cols-${cols} grid-rows-${rows} h-96`}
            id="container"
            ref={container}
            onTouchStart={(e)=>{setStartPos(e.touches[0].clientX)}}
            onTouchMove={(e)=>{setEndPos(e.touches[0].clientX)}}
              onTouchEnd={()=>{
                const dis = startPos-endPos
                if(dis===0){return} else {dis>0?determineSwipeDirection('right'):determineSwipeDirection('left')}
              }}>
              {
                objlist.map(({name, value, positive, growth, response},index)=><FiveCards 
                  index={index} key={index} name={name} positive={positive} value={value} growth={growth} response={response} 
                />)
              }
            </div>
          </div>
          <div className={`${(singleColWidth *cols-singleColWidth)===currentLeft?'invisible':'visible'} z-40 relative float-right bottom-52`}
              onClick={()=>determineSwipeDirection('right')}>
            <RightOutlined />
          </div>
        </div>
        




          
        </div>
        <div className="m-4">
          <Chart objlist={objlist} />
        </div>
        <div className="bg-white rounded-3xl m-4">

          <List StoreScore={StoreScore} />
        </div>
      </div>
    </div>
  );
}
export default App;
