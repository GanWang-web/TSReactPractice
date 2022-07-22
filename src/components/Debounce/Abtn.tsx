import {ChangeEvent, useState} from 'react'
import useClickAnyWhere from "./useClickAnywhere"
import useBoolean from "./useBoolean"
import useDebounce from './useDebounce'
import useBtn from './useBtnDebounce'
import store from '../../store/store'
import { Provider } from 'react-redux'
import {useAppDispatch,useAppSelector} from '../../store/store'
import {ADD,incrementByAmount,fetchUserById} from '../../store/addReducer'

const ReduxExample:React.FC=()=>{
  const dispatch = useAppDispatch()
  const count = useAppSelector((state)=>
    state.addReducer.count
  )
  const [covidData,setCovidData] = useState('')
  const toAdd=()=>{
    dispatch({type:incrementByAmount,payload:3})
  }
  const toGetCovidData=()=>{
    const Data = dispatch(fetchUserById())
    Data.then(resolve=>{
      setCovidData(JSON.stringify(resolve.payload))
    })
  }
  return (
    <div onClick={toAdd}>
      click to add{count}
      <div onClick={toGetCovidData}>
        click to get COVID data{covidData}
      </div>
    </div>
  )
}

const Abtn:React.FC = ()=>{
  const [count, setCount] = useState(0)

  useClickAnyWhere(() => {
    setCount(prev => prev + 1)
  })

  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false)
  const customToggle = () => setValue(x => !x)

  const [val, setVal] = useState<string>('')
  const debouncedValue = useDebounce<string>(val, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value)
  }

  const btnDebounceWrapper = useBtn(()=>{console.log('clicked')},1000,true)


  return (
    <div>
      <div style={{display:'flex', flexDirection:"column"}}>
        <p>
          Value is <code>{value.toString()}</code>
        </p>
        <button onClick={setTrue}>set true</button>
        <button onClick={setFalse}>set false</button>
        <button onClick={toggle}>toggle</button>
        <button onClick={customToggle}>custom toggle</button>
      </div>
      
      <div>
        <button>{count}</button>
      </div>
      <div>
        <p>Value real-time: {val}</p>
        <p>Debounced value: {debouncedValue}</p>
        <input type="text" value={val} onChange={handleChange} />
      </div>
      <button onClick={btnDebounceWrapper()}>click</button>
      <Provider store={store}>
        <ReduxExample />

      </Provider>
    </div>
  )
}
export default Abtn