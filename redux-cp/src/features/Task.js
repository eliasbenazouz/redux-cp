import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {
    toggle,
    deleteTask,
    modifyTask
  } from './listTask/tasksSlice'
import './Task.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Task(props) {

    const dispatch = useDispatch()
    const [showModifier,setShowModifier] = useState(false)

    return (
        <div className="task">
            <div className="task__text">
                <button onClick={()=>{dispatch(toggle(props.id))}}>{props.description}</button>
            </div>
            <div className="task__buttons">
                <EditIcon className="task__buttons__icon" onClick={()=>!showModifier ? setShowModifier(true): setShowModifier(false)}>{showModifier === false ? 'Edit task' : 'Save'}</EditIcon>
                <DeleteIcon className="task__buttons__icon" onClick={()=>{dispatch(deleteTask(props.id))}}>Remove</DeleteIcon>
                {(showModifier === true) &&
                    <form>
                        <input className="task__buttons__icon__input" onChange={(e)=>{dispatch(modifyTask([e.target.value,props.id]))}}></input>
                    </form>
                }
            </div>
        </div>
    )
}

export default Task
