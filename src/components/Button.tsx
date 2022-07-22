interface Iprops{
  label:string
  backgroundColor:string
  size:string
  onClick:Function
}

const Button:React.FC<Iprops>=({label,backgroundColor='red',size='md',onClick})=>{
  let scale = 1
  if(size === 'sm') scale=0.5
  if(size==='lg') scale=1.5
  const style={
    backgroundColor,
    padding:`${scale*0.5}rem ${scale*1}rem`,
    border:'none'
  }
  return (
    <button onClick={()=>onClick} style={style}>
      {label}
    </button>
  )
}
export default Button