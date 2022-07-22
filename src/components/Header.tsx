interface Props {
  title: string,
  selection: any[],
  datepickStr?:String[]
}

const Header:React.FC=()=>{
  return (
    <div className="flex flex-col justify-between px-3 w-full bg-white">
      <div className="flex items-center">
        <div className="font-semibold mr-2 text-xl">Score by pillar by store</div>
      </div>
      <form className="grid sm:grid-flow-col grid-flow-row sm:grid-cols-3 grid-row-2 gap-3 mt-4">
        <div className="flex flex-row items-center" style={{border:'1px #ddd solid',borderRadius:"2px", fontSize:'10px',backgroundColor:'#FFFFFF', color:'gray'}}>
          <label className="flex items-center" style={{fontSize:'10px',height:'30px',paddingLeft:'10px', color:'#C1BEBD'}}>Show </label>
          <select className="w-full" style={{ height:'30px', fontSize:'10px', color:'#5E5C5C'}}>
            <option value='all' >
                Overall score
            </option>
            <option>Dog</option>
            <option>Cat</option>
          </select>
        </div>
        <div>
            <select className="w-full" style={{ height:'30px', fontSize:'10px', color:'#5E5C5C',border:'1px #ddd solid',borderRadius:"2px",backgroundColor:'#FFFFFF', }}>
              <option value='all'>
                  Last 30 days
              </option>
              <option>Dog</option>
              <option>Cat</option>
            </select>
        </div>
        <div>
          <select className="hidden sm:block w-full" style={{ height:'30px', fontSize:'10px', color:'#5E5C5C',border:'1px #ddd solid',borderRadius:"2px",backgroundColor:'#FFFFFF', }}>
            <option value='all'>
                Store group
            </option>
            <option>Dog</option>
            <option>Cat</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Header