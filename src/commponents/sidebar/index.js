import React from 'react'
import { useDispatch } from 'react-redux'
import { color } from "../../config.js"

import Logo from "./logo.js"
import Account from "./account.js"
import Icon from '@mdi/react'
import { mdiAccountMultiple, mdiDetails, mdiFormatListText, mdiViewList } from '@mdi/js'
import { changePageID } from '../../store/entities/reducer_page.js'

//text-[${color.textHEX}]

const index = () => {

    const dispatch = useDispatch() // eslint-disable-line

  return (
    <div className={`
        w-full h-full p-2
        flex flex-col
    `}>

        {/* Logo */}
        <div className='w-full h-fit pb-2'>
            <Logo/>
        </div>

        <div className='w-full h-[2px] bg-gradient-to-r from-neutral-600/0 via-neutral-600/50 to-neutral-600/0'/>

        {/* Body */}
        <div className='w-full grow'>

            <div className='h-12'/>

            {/* 1. All shopping lists */}
            <div className='pl-6 pb-2 text-[#737373] text-sm font-semibold'>
                All shopping lists
            </div>
            <button
            onClick={() => dispatch(changePageID({id: 0}))}
            className={`
                w-full h-12 pl-[20px]
                flex items-center
                ${color.bgPrimaryHoverTW} rounded-lg
                text-neutral-500 hover:text-neutral-200 font-semibold 
            `} >
                <Icon path={mdiViewList} size={1}/>
                <div className='pl-2'>
                    My Lists
                </div>
            </button>
            

            <div className='h-8'/>
            <div className='w-full h-[2px] bg-gradient-to-r from-neutral-600/0 via-neutral-600/50 to-neutral-600/0'/>
            <div className='h-10'/>

            {/* 2. Current shopping list */}
            <div className='pl-6 pb-2 pt-[2px] text-[#737373] text-sm font-semibold'>
                Workspace
            </div>
            <button
            onClick={() => dispatch(changePageID({id: 1}))}
            className={`
                w-full h-12 pl-[23px]
                flex items-center
                ${color.bgPrimaryHoverTW} rounded-lg
                text-neutral-500 hover:text-neutral-200 font-semibold 
            `} >
                <Icon path={mdiFormatListText} size={1}/>
                <div className='pl-2'>
                    Shopping list
                </div>
            </button>
            <button
            onClick={() => dispatch(changePageID({id: 2}))}
            className={`
                w-full h-12 pl-[22px]
                flex items-center
                ${color.bgPrimaryHoverTW} rounded-lg
                text-neutral-500 hover:text-neutral-200 font-semibold 
            `} >
                <Icon path={mdiAccountMultiple} size={1}/>
                <div className='pl-2'>
                    Members
                </div>
            </button>
            <button
            onClick={() => dispatch(changePageID({id: 3}))}
            className={`
                w-full h-12 pl-[22px]
                flex items-center
                ${color.bgPrimaryHoverTW} rounded-lg
                text-neutral-500 hover:text-neutral-200 font-semibold 
            `} >
                <Icon path={mdiDetails} size={1}/>
                <div className='pl-2'>
                    Detail
                </div>
            </button>

        </div>

        <div className='w-full h-[2px] bg-gradient-to-r from-neutral-600/0 via-neutral-600/50 to-neutral-600/0'/>

        {/* Account */}
        <div className={`
            w-full h-fit mt-2
            ${color.bgPrimaryHoverTW} rounded-lg
        `}>
            <Account/>
        </div>
    </div>
  )
}

export default index