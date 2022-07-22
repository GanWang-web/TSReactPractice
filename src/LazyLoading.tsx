import DatePick from "./components/DatePicker"
import List from "./components/List"
import Header from './components/Header'
import { ArrowLeftOutlined,ArrowUpOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import './components/test.css'

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


const StoreScore:StoreArr[]=[
  {Store: '100-Melbourne Central', Score: '90%', positive: true, Change:'2%', ScoredResponse: '123'},
  {Store: '222-Kotara', Score: '88%', positive: true, Change:'8%', ScoredResponse: '321'},
  {Store: '113-Malven', Score: '88%', positive: false, Change:'1%', ScoredResponse: '123'},
  {Store: '108-Cheltenham', Score: '84%', positive: true, Change:'2%', ScoredResponse: '321'},
  {Store: '105-Chadstone', Score: '82%', positive: false, Change:'2%', ScoredResponse: '123'}
]


const App:React.FC=()=>{
  const infoCard = (
    <div className="bg-white w-full p-3">
      <div className="flex flex-row justify-between">
        <span className="font-light text-xs">
          400 stores
        </span>
        <span className="inline-flex sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="black" className="bi bi-filter" viewBox="0 0 16 16">
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <span className="font-semibold text-xs mr-2">
            &nbsp;Filter
          </span>
        </span>
      </div>
      <div  className={`flex sm:flex-col sm:items-start rounded-md bg-gray-100 sm:w-44 w-full justify-between flex-row p-2 mt-4`}>
        <div className="text-xs">
          Avg. score
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-md sm:text-xl md:text-2xl">
            75%
          </span>
          <span className="flex items-center justify-center w-14 h-6 font-light rounded-xl text-xs ml-4 bg-green-200 text-green-900">
            <ArrowUpOutlined/>
            12%
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="py-1 bg-gray-400">
      <div className="ml-72 mt-36 mr-10 bg-gray-100">
        <div className="flex flex-col bg-white h-auto pl-4 pt-4">
          <div className="flex font-semibold items-center">
            <ArrowLeftOutlined />&nbsp;<span>Back to dashboards</span> 
          </div>
          <Divider />
        </div>
        <Header/>
        {
          infoCard
        }
        <List StoreScore={StoreScore} />
      </div>
    </div>
  );
}
export default App;
