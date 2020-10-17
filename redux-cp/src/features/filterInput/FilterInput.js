import React from 'react'
import { inputter } from './filterInputSlice'
import { useDispatch } from 'react-redux'
import './FilterInput.css'
import SearchIcon from '@material-ui/icons/Search';

function FilterInput() {

    const dispatch = useDispatch()

    return (
        <div className="filterinput">
            <form className="filterinput__form">
                <input onChange={(e)=>{dispatch(inputter(e.target.value))}}></input>
                <SearchIcon className={"filterinput__form__icon"}/>
            </form>
        </div>
    )
}

export default FilterInput


