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
const widthOfXSM = '6'
const widthOfMDAndSM = '3'

const App:React.FC=()=>{
  const [move,setMove]=useState('')
  const [rightVisible,setrightVisible]=useState(false)
  const [leftVisible,setleftVisible]=useState(false)
  const [startPos,setStartPos] = useState(0)
  const [endPos,setEndPos] = useState(0)
  let [times,setTimes] = useState(0)
  let container = useRef<HTMLDivElement>(null)
  const containerWrapper = useRef<HTMLDivElement>(null)
  const [containerSize,setContainerSize] = useState(0)
  const [screens,setScreens] = useState(0)
  const [screenSize,setScreenSize] = useState('')
  const [cols,setCols] = useState(0)

  const windowWidth = useWindowWidth()

  const handleDebounce = useCallback(
    throttle((newTimes)=>{setTimes(newTimes)},1000)
  ,[])

  function determineSwipeDirection(direction:string){
    
    times<=0?setleftVisible(false):setleftVisible(true)
    if(rightVisible && direction === 'right'){
      handleDebounce(times+1)
    } else if(leftVisible===true && direction === 'left'){
      handleDebounce(times-1)
    }
  }

  useEffect(()=>{
    const num = Number((screenSize==='XSM'?widthOfXSM:widthOfMDAndSM).split("/")[0])*times+'/12'
    setMove(`transform -translate-x-${num}`)
    // eslint-disable-next-line
  },[times])

  const calSlides=()=>{
      let cols = 0, slides = 0
      switch (screenSize) {
        case 'MD':
          cols = Math.ceil((objlist.length-5)/2)
          cols<=3?slides = 0:slides = Math.ceil(cols/3)
          break
        case 'SM':
          cols = Math.ceil((objlist.length-6)/3)
          cols<=2?slides = 0:slides = Math.ceil(cols/2)
          break
        case 'XSM':
          cols = Math.ceil((objlist.length-2)/3)
          cols<=2?slides = 0:slides = cols
      }
    console.log('slides数量',slides)
    setScreens(slides)
    setCols(cols)
  }

  useEffect(()=>{
    // // window.addEventListener does not fetch size at the start.
    // window.addEventListener('resize',()=>{
    //   // setWidth(container.current.offsetWidth)
    //   console.log(container.scrollWidth < container.clientWidth)
    // })
    // ResizeObserver监视单个元素的resize，并且不会像useWindowWidth hooke一样不停的监视
    // const myObserver = new ResizeObserver(entries=>{
    //   entries.forEach(entry=>{
    //     setContainerSize(entry.contentRect.width)
    //     // console.log(entry.contentRect.width)
    //   })
    // })
    // myObserver.observe(container)
    // return ()=>{
    //   myObserver.disconnect();
    // }
    // console.log("________________")
    // console.log(container.clientWidth)
    // // console.log(container.clientLeft)
    // console.log(container.scrollWidth)
    // console.log(container.scrollLeft)
    // console.log(container.offsetWidth)
    // console.log(container.offsetLeft)
    // console.log(container.getBoundingClientRect().left)
    // console.log("________________")
    windowWidth>750?setScreenSize('MD'):(windowWidth>622?setScreenSize('SM'):setScreenSize('XSM'))
    calSlides()
    let container = document.querySelector("#container") as HTMLElement
    setContainerSize(container.offsetWidth)


    times <= 0?setleftVisible(false):setleftVisible(true)
    screens > times?setrightVisible(true):setrightVisible(false)

    // eslint-disable-next-line
  },[times,windowWidth,containerSize,screens])

  const displayColums = 3
// calculate the column width
// useEffect(()=>{
//   if(windowWidth>768){
//     const containerWrapperWidth = containerWrapper.current?.clientWidth;
//     const columns

//   }
// },[windowWidth])



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

          {/* <Example2/> */}



          <div className="w-full p-5 overflow-hidden" ref={containerWrapper}>
            <div className={`flex ${leftVisible?'visible':'invisible'} z-40 justify-start absolute left-72`} onClick={()=>determineSwipeDirection('left')}>
              <LeftOutlined />
            </div>
            <div className={`grid grid-flow-col grid-cols-${cols}`}
            id="container"
            ref={container}
            onTouchStart={(e)=>{setStartPos(e.touches[0].clientX)}}
            onTouchMove={(e)=>{setEndPos(e.touches[0].clientX)}}
              onTouchEnd={()=>{
                const dis = startPos-endPos
                if(dis===0){return} else {dis>0?determineSwipeDirection('right'):determineSwipeDirection('left')}
              }}>
              {
                objlist.map(({name, value, positive, growth, response},index)=><FiveCards index={index} key={index} name={name} positive={positive} value={value} growth={growth} response={response} />)
              }
            </div>
            <div className={`flex ${rightVisible?'visible':'invisible'} z-40 justify-end absolute right-10`} onClick={()=>determineSwipeDirection('right')}>
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
