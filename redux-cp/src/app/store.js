import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/listTask/tasksSlice'
import filterInputReducer from '../features/filterInput/filterInputSlice'

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    filterInput: filterInputReducer,
  },
})
