import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'


interface Istate{
  count:number,
  data:any
}
const initialState:Istate={
  count:0,
  data:[]
}

export const fetchUserById = createAsyncThunk(
  '',
  async () => {
    const response = await fetch('https://api.covid19api.com/summary')
    console.log(response)
    const data = await response.json();
    return data
  }
)
export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    ADD: (state:Istate) => {
      state.count += 1
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state:Istate, action: PayloadAction<number>) => {
      state.count += action.payload
    },
  },
})
export const { ADD,incrementByAmount } = counterSlice.actions
export const selectCount = (state: Istate) => state.count

export default counterSlice.reducer