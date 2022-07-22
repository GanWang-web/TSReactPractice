import {useEffect, useRef, useState} from 'react';
import { Divider } from 'antd';
import TableContent from "./TableContent"
import { ArrowDownOutlined } from '@ant-design/icons';
import './test.css'

interface Props{
  StoreScore:any
}
const List: React.FC<Props> = ({StoreScore}:Props) => {
  const clientRef = useRef(null)
  const [stores,setStores] = useState([])
  const [noData,setNoData] = useState(false)

  const [rightHidden,setRightHidden] = useState('block')
  const [leftHidden,setLeftHidden] = useState('hidden')

  const handleScroll = ()=>{
    const {scrollHeight, scrollTop,clientHeight, scrollLeft, scrollWidth, clientWidth} = clientRef.current
    if(scrollHeight-scrollTop <= clientHeight){
      setTimeout(()=>{
        setNoData(!noData)
      },1000)
    }
    scrollLeft<=0?setLeftHidden('hidden'):setLeftHidden('block')
    scrollWidth-scrollLeft <= clientWidth?setRightHidden('hidden'):setRightHidden('block')
  }

  const getData=()=>{
    return [...StoreScore]
  }

  useEffect(()=>{
    const newData = getData()
    setStores(stores=>[...stores,...newData])
  // eslint-disable-next-line
  },[noData])


  return (
  <div className="bg-white">
    <div className='relative w-full overflow-hidden'>
      <div className={`sm:hidden ${rightHidden} absolute top-0 right-0 h-full `}
        style={{background: "-webkit-linear-gradient(270deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)",width:'8px'}}>&nbsp;
      </div>
      <div className={`sm:hidden ${leftHidden} absolute top-0 left-0 h-full`} 
        style={{background: "-webkit-linear-gradient(270deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)",width:'8px'}}>&nbsp;
      </div>
      <div id='scrollEle' ref={clientRef} onScroll={handleScroll} className='w-13/12'>
        <Divider />
        <div className={`grid grid-cols-2 w-11/12`} style={{minWidth:"500px"}}>
          <div className="flex">
            <span className="mx-5">&nbsp;</span>
            <div className="">Store</div>
          </div>
          <div className={`grid grid-cols-3 min-w-min`}>
            <div className='flex '>Score&nbsp;<ArrowDownOutlined/></div>
            <div>Change&nbsp;%</div>
            <div>Scored responses</div>
          </div>
        </div>
        <Divider/>
        <ul className='h-screen'>
          {
            stores.map(({Store, Score, positive, Change,ScoredResponse},index)=>(
              <li key={index}>
                <TableContent index={index} Store={Store} Score={Score} positive={positive} Change={Change} ScoredResponse={ScoredResponse} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    <div className='flex text-blue-700 justify-center items-center h-12 bg-gray-100 text-xs font-bold'>
      <span>View all stores&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></span>
      <span>View reports</span>
    </div>
  </div>)
};

export default List;