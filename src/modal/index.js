import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeModalActiveId } from '../store/entities/reducer_modal'

import StateFilter from './stateFilter.js'
import LeaveList from './leaveList.js'
import DeleteList from "./deleteList.js"
import Account from './account.js'

const Index = () => {

    const dispatch = useDispatch() // eslint-disable-line
    const modalId = useSelector(store => store.entities.modalReducer.modalId) // eslint-disable-line

    const modalMap = {
        0: <StateFilter/>,
        1: <LeaveList/>,
        2: <DeleteList/>,
        3: <Account/>
    }

    return (
        <div className='w-full h-full relative'>
            <div className='absolute z-10'>
                { modalId !== -1 && modalMap[modalId] }
            </div>
            <button
                onClick={() => {dispatch(changeModalActiveId({id: -1}) )}}
                className={`
                    absolute z-0
                    w-full h-full
                    bg-neutral-900/50
                    cursor-default
                `}
            />
        </div>
    )
}

export default Index