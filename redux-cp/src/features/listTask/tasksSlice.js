import { createSlice } from '@reduxjs/toolkit'

let id = 0

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
      addTask: (state, action) => {
        state.push({task: action.payload,
        isDone: false,
        id:id})
        id++
      },
      toggle: (state, action) => {
        return state.map(el=>el.id===action.payload?{...el, isDone:!el.isDone}: el)
      },
      deleteTask: (state, action) => {
        return state.filter(el=> el.id !== action.payload)
      },
      modifyTask: (state, action) => {
        let [e, id] = action.payload
        state.filter(el=>el.id===id).map(el=>el.task= e)
      }
    },
  })
  
  export const { addTask, toggle, deleteTask, modifyTask } = tasksSlice.actions
  
  export const selectTasks = state => state.tasks
  
  export default tasksSlice.reducer
