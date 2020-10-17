import { createSlice } from '@reduxjs/toolkit'

export const filterInputSlice = createSlice({
    name: 'filterInput',
    initialState: [""],
    reducers: {
      inputter: (state, action) => {
          state[0] = (action.payload)
      }
    },
  })
  
  export const { inputter } = filterInputSlice.actions
  
  export const selectInput = state => state.filterInput[0]
  
  export default filterInputSlice.reducer
