import { ArrowDownOutlined,ArrowUpOutlined } from '@ant-design/icons';
import { useRef } from 'react';

interface props {
  name:string,
  value:string,
  positive:boolean,
  growth:string,
  response:string,
  index:number
}

const FiveCards:React.FC<props>=({name,value,positive, growth,response,index})=>{

  const createIcon =()=>{
    if (growth==='No change') {
      return <div className={`font-light p-1 rounded-xl text-xs bg-gray-200`}>{growth}</div>
    } else if (positive) {
      return <div className="flex items-center justify-center font-light rounded-xl text-xs bg-green-200 text-green-900">
              <ArrowDownOutlined/>
              {growth}
              </div>
    } else {
      return <div className="flex items-center justify-center font-light rounded-xl text-xs bg-red-200 text-red-900">
              <ArrowUpOutlined/>
              {growth}
            </div>
    }
  }
  if (index===0) {
    return (
      <div  className={`grid md:row-span-2 sm:row-span-1 row-span-2 items-center justify-around rounded-md bg-gray-100 border-white border-4`}>
        <div className="font-semibold text-xs">{name}</div>
        <div className="font-semibold text-xl sm:text-3xl md:text-5xl">{value}</div>
        <div className="font-light text-gray-400 text-xs">{response}</div>
        {
          createIcon()
        }
      </div>)
  } else {
    return (
      <div  className={`grid items-center justify-around rounded-md bg-gray-100 border-white border-4 `}>
          <div className="font-semibold text-xs ">{name}</div>
          <div className="font-semibold text-base sm:text-1xl md:text-3xl">{value}
          </div>
          <div className="font-light text-gray-400 text-xs">{response}</div>
          {
            createIcon()
          }
      </div>)
  }
}

export default FiveCards