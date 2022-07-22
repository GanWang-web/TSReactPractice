import "./app3.css"
import {Routes, Route, Link} from 'react-router-dom'
import {useLocation,useNavigate} from 'react-router'
import { useState } from "react"
import {Red} from "../stories/Button.stories"


const Header =()=> {
  const [dropListShow, setDropListShow] = useState('hidden')
  const showDropList=()=>{
    setDropListShow((dropListShow==='hidden'?'block':'hidden'))
  }
  return (
    <div>
      <Red
  backgroundColor="green"
  label="Press Me"
  onClick={function noRefCheck() {console.log(123)}}
  size="md"
/>
      <header className="flex justify-between items-center w-full h-10 bg-gray-400 text-white pl-4" style={{background:'#2E3547'}}>
        <span className="flex  text-base">
        <div className="lg:hidden block" onClick={showDropList}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
          <span className="pl-2">Re</span> 
          <b>Store</b> 
        </span>
        <ul className="lg:inline-flex w-7/12 list-none justify-evenly hidden">
          <li className="text-gray-400">(local dev environment)</li>
          <li className="">Projects</li>
          <li className="">Admin</li>
          <li className="flex">edwald&nbsp;(Restore dev team)&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </li>
        </ul>
      </header>
      <div className={`${dropListShow} absolute top-10 z-10 w-full h-1/2 pl-4`} style={{background:'#2E3547'}}>
        <ul className="flex flex-col h-3/5 list-none place-content-around text-white ">
          <li className="text-gray-400">(local dev environment)</li>
          <li className="pb-4" id='dropList'>Projects</li>
          <li className="pb-4" id='dropList'>Admin</li>
          <li className="flex pb-4" id='dropList'>edwald&nbsp;(Restore dev team)&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  )
}

const DashBoard=()=>(
  <main className="inline-block lg:w-10/12 w-full h-full " >
        <div  style={{borderBottom:'1px solid #D9D3D3'}}>
          <div className="p-5">
            <p className="text-gray-400">bed&nbsp;test&nbsp;-&nbsp;Bed&nbsp;Test</p>
            <p className="font-semibold text-2xl">Dashboards</p>
          </div>
          <div className="flex flex-row sm:w-4/12 w-full place-content-between pl-5" >
            <button id='sectionHeader'>Overview</button>
            <button id='sectionHeader'>Pillar scores</button>
            <button id='sectionHeader'>Report scores</button>
          </div>
        </div>
        <div className="w-full h-full px-5 py-3">
          <div className="bg-white border-2 h-2/5 w-full mb-4">
            grgrgrg
          </div>
        <div className="bg-white border-2 h-2/5 w-full">
        </div>
        </div>
      </main>
)
const Reports=()=>(
  <div className="inline-block">Reports</div>
)
const Gallery=()=>(
  <div className="inline-block">Gallery</div>
)
const Tasks=()=>(
  <div className="inline-block">Tasks</div>
)
const Documents=()=>(
  <div className="inline-block">Documents</div>
)

const App3:React.FC = ()=>{
  const location = useLocation()
  const navigate = useNavigate()


  return (
    <div className="w-full h-screen ">
      {
        <Header/>
      }
      <nav className="flex lg:hidden w-full h-12  bg-white pl-2" style={{borderBottomWidth:'2px',minWidth:'600px'}}>
        <ul className="flex sm:flex-nowrap flex-wrap w-7/12 h-full place-content-between">
          <li className="flex w-3/12 h-full place-content-evenly "><button ><Link style={{ color:'black'}} to='/'>Dashboard</Link></button></li>
          <li className="flex w-3/12 h-full place-content-evenly"><button ><Link style={{ color:'black'}} to='/reports'>Reports</Link></button></li>
          <li className="flex w-3/12 h-full place-content-evenly"><button ><Link style={{ color:'black'}} to='/gallery'>Gallery</Link></button></li>
          <li className="flex w-3/12 h-full place-content-evenly"><button ><Link style={{ color:'black'}} to='/tasks'>Tasks</Link></button></li>
          <li className="sm:flex hidden w-3/12 h-full place-content-evenly"><button ><Link style={{ color:'black'}} to='/documents'>Documents</Link></button></li>
          <li className="sm:flex hidden w-3/12 h-full place-content-evenly"><button ><Link style={{ color:'black'}} to='/documents'>Documents</Link></button></li>
          
        </ul>
        
      </nav>
      <nav className="flex sm:hidden w-full h-12 pl-4 bg-white" style={{borderBottomWidth:'2px',minWidth:'600px'}}>
        <ul className="flex sm:flex-nowrap w-full h-full ">
          <li className="flex w-3/12 h-full "><button ><Link style={{ color:'black'}} to='/documents'>Documents</Link></button></li>
        </ul>
      </nav>
      <nav className="lg:inline-block hidden bg-white h-full w-2/12 pl-4 pt-4" style={{verticalAlign:'top'}}>
        <span className="lg:block hidden">
          <p>bed test</p>
          <b>Bed test</b>
        </span>
        <ul className="lg:flex hidden flex-col pl-2 pt-6 h-2/5 ">
          <li className="flex w-full h-full pl-2"><button ><Link style={{ color:'black'}} to='/'>Dashboard</Link></button></li>
          <li className="flex w-full h-full pl-2"><button ><Link style={{ color:'black'}} to='/reports'>Reports</Link></button></li>
          <li className="flex w-full h-full pl-2"><button ><Link style={{ color:'black'}} to='/gallery'>Gallery</Link></button></li>
          <li className="flex w-full h-full pl-2"><button ><Link style={{ color:'black'}} to='/tasks'>Tasks</Link></button></li>
          <li className="flex w-full h-full pl-2"><button ><Link style={{ color:'black'}} to='/documents'>Documents</Link></button></li>
        </ul>
      </nav>
      {
          <Routes>
            <Route path="/" element={<DashBoard/>} />
            <Route path="reports" element={<Reports/>} />
            <Route path="gallery" element={<Gallery/>} />
            <Route path="tasks" element={<Tasks/>} />
            <Route path="documents" element={<Documents/>} />
          </Routes>
      }
    </div>
  )
}

export default App3