import React from 'react'
import { Tasks } from './features/listTask/Tasks'
import './App.css'
import AddTask from './features/AddTask'
import FilterInput from './features/filterInput/FilterInput'

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__container__af">
          <AddTask /> 
          <FilterInput />         
        </div> 
        <div className="app__container__tasks">       
          <Tasks/>
        </div>
      </div>
    </div>
  )
}

export default App
