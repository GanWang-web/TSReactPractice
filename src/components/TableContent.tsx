import {Divider} from "antd"
import { ArrowDownOutlined,ArrowUpOutlined } from '@ant-design/icons';

export interface StoreArr {
  Store:string,
  Score:string,
  positive:boolean,
  Change:string,
  ScoredResponse:string,
  index:number
}

const TableContent:React.FC<StoreArr>=({Store, Score, positive, Change, ScoredResponse,index})=>{
  return (
    <div>

      
      <div className="grid grid-cols-2 min-w-full  w-11/12"  style={{minWidth:"500px"}}>
        <div className="flex" >
          <span className="mx-4 text-gray-400">{index+1}</span>
          <div>{Store}</div>
        </div>
        <div className="grid grid-cols-3">
          <div>{Score}</div>
          <div  className='sm:flex'>
            {
              (Change === "No change")?'':(positive?<ArrowDownOutlined style={{color:"#00ff00",fontSize:"18px"}}/>:<ArrowUpOutlined style={{color:"	#b22222",fontSize:"18px"}}/>)
             }
            &nbsp;{Change}
          </div>
          <div  className='sm:block'>{ScoredResponse}</div>
        </div>
      </div>




      <Divider/>
    </div>
  )
}
export default TableContent