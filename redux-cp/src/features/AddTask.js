import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    addTask
  } from './listTask/tasksSlice'
import './AddTask.css'
import AddIcon from '@material-ui/icons/Add';

function AddTask() {

    const dispatch = useDispatch()
    const [input,setInput] = useState('')

    return (
        <div className="addtask">
            <form className="addtask__form">
                <input value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
                <AddIcon className="addtask__form__icon" onClick={(e)=>{                    
                    e.preventDefault()
                    if(input !== ""){dispatch(addTask(input))}
                    setInput('')
                }} />
            </form>            
        </div>
    )
}

export default AddTask
