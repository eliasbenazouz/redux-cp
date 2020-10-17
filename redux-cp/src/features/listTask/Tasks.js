import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    selectTasks,
  } from './tasksSlice'
import './Tasks.css'
import Task from '../Task'
import { selectInput } from '../filterInput/filterInputSlice'

export function Tasks() {

    const tasks = useSelector(selectTasks)    
    const input = useSelector(selectInput) 
    const [checked,setChecked] = useState(false)

    return (
        <div className="tasks">
            <div className="tasks__infos">
                <button className="tasks__infos__button" onClick={()=>{!checked ? setChecked(true):setChecked(false)}}>{!checked ? "Check completed tasks" : "Check incompleted tasks"}</button>
                {tasks.filter(task=>task.isDone === false).length>0?<p className="tasks__infos__info">(Click on a task to mark it as completed/incompleted)</p>: ''}
            </div>
            {tasks.filter(el=>el.task.toLowerCase().trim().includes(input.toLowerCase().trim()) && el.isDone === checked).map((el,i)=>{ return <Task key={i} id={el.id} description={el.task}/>})}
            </div>
    )
}

