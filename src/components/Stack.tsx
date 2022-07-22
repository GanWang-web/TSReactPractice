interface Iprops{
  children:JSX.Element
  spacing:number
  wrap:boolean
  direction: 'wrap'|'nowrap'
}

const Stack:React.FC<Iprops>=({children,spacing=2,direction='row',wrap=false})=>{
  const style={
    display:'flex',
    gap:`${spacing*0.25}rem`,
    flexwrap:wrap?'wrap':"nowrap",
    flexDirection:direction,
  }
  return (
    <div >
      {children}
    </div>
  )
}
export default Stack