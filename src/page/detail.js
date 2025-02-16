import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeListDsc, changeListName } from '../store/entities/reducer_shoppingList'

import TextDisplay from '../commponents/textDisplay'
import ItemListButton from '../commponents/itemListButton.js'
import { changeModalActiveId } from '../store/entities/reducer_modal.js'

const Detail = () => {

  const dispatch = useDispatch()

  const currentAcc = useSelector(store => store.entities.accountReducer.selectedAcc)
  const settings = useSelector(store => store.entities.shoppingListReducer.settings)

  const isOwner = useSelector(store => {
    const members = store.entities.shoppingListReducer.members
    const currentAccID = store.entities.accountReducer.selectedAcc.id
    const user = members.find((e) => e.id === currentAccID)

    if(user === undefined) return false
    return user.isOwner
  })

  function setListName(newName) {
    dispatch(changeListName({name: newName}))
  }
  function setListDsc(newDsc) {
    dispatch(changeListDsc({dsc: newDsc}))
  }

  return (
    <div className='w-full h-full p-12 flex justify-center'>


      <div className='w-full max-w-7xl h-full flex flex-col'>

        {/* 1. Greeting */}
        <div className={`
          w-full mb-8 flex flex-col
        `}>
          <div className={`text-lg font-semibold text-neutral-400 text-nowrap overflow-hidden  `}>
              Hi {currentAcc.name},
          </div>
          <div className='h-2' />
          <div className={`text-3xl font-bold text-white text-nowrap overflow-hidden flex `}>
              <div>
                Welcome back! 
              </div>
              <div className='w-3'/>

              <div className='realtive flex'>
                <div className={`
                  z-10 -translate-y-[6px]
                  bg-gradient-to-r from-violet-500 to-[#7537e0]
                  bg-clip-text text-transparent text-5xl 
                `}>
                    <div className={`
                    bg-gradient-to-br from-[#e0b5ff70] to-neutral-100/0 to-40%
                    bg-clip-text text-transparent text-5xl 
                  `}> ❤ </div>
                </div>

                <div className={`
                absolute z-0 -translate-y-[6px]
                bg-black/50 blur-md
                bg-clip-text text-transparent text-5xl
              `}>
                ❤
              </div>
              </div>
              
          </div>
        </div>

        {/* 2. Top element */}
        <div className={`
          w-full h-40
          bg-gradient-to-r from-violet-500 to-violet-600 rounded-3xl
          shadow-xl shadow-neutral-950/25
          relative flex items-center
        `}>          
          <div className={`
            z-10 w-11/12 h-full p-8
            bg-gradient-to-br from-violet-200/20 to-violet-200/0 to-50% rounded-3xl
            overflow-hidden
            flex flex-col
          `}>
            {/* name */}
            <div className={`text-3xl font-bold text-white text-nowrap overflow-hidden  `}>
              <TextDisplay>
                {settings.name}
              </TextDisplay>
            </div>

            <div className='h-6' />

            {/* dsc */}
            <div className={`text-lg font-semibold text-neutral-100 text-nowrap overflow-hidden  `}>
              <TextDisplay>
                {settings.dsc}
              </TextDisplay>
            </div>
          </div>

          <div className='grow'/>

          {/* decoration */}
          <div className={`w-24 h-24 p-1 pl-2 pb-[6px] bg-neutral-900 skew-x-[45deg] -skew-y-[15deg] -translate-x-20 rounded-xl`}>
            <div className={`w-full h-full p-1 pt-0 px-2 bg-neutral-800 rounded-lg flex flex-col`}>

              <div className='w-full flex justify-center'><div className='w-6 h-[3px] bg-neutral-900 rounded-b-[8px]' /></div>
              <div className='w-8 h-[2px] my-1 ml-[2px] bg-neutral-200' />
              <div className='w-full h-5 pl-2 bg-gradient-to-r from-sky-400 to-violet-400 rounded-md flex items-center'>
                <div className='w-[14px] h-[8px] bg-neutral-200' />
                <div className='grow h-full pl-2 pt-[5px] flex flex-col '>
                  <div className='w-6 h-[3px] mb-[2px] mt-[1px] bg-neutral-200' />
                  <div className='w-4 h-[2px] bg-neutral-200' />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='h-20' />

        {/* 3. Detail */}
        <div className={`
          w-full h-full
          flex flex-col
        `}>

          {/* A. Name + Dsc */}
          <div className={`
            w-full pb-4 mb-8 p-2 px-4
            bg-neutral-700 rounded-3xl
            shadow-xl shadow-neutral-950/25
          `} >

            {/* Name */}
            <div className={`w-full mt-1`}>
              <div className=' mb-1 font-semibold text-neutral-500'>
                Name
              </div>

              <div className={`
                w-full h-12 p-1
                bg-gradient-to-b from-neutral-800/75 to-neutral-800/50 to-50% rounded-xl
                flex
              `}>
                <div className={`
                  grow h-full pl-2
                  flex items-center
                  font-semibold text-neutral-200
                `}>
                    <input
                      className='w-11/12 bg-[#ffffff00] outline-none '
                      disabled={isOwner === false}
                      value={settings.name}
                      onChange={e => {
                        const newValue = e.target.value
                        if(newValue.length > 32) return null
                        setListName(newValue)
                      }}
                    />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className={`w-full mt-2`}>
              <div className=' mb-1 font-semibold text-neutral-500'>
                Description
              </div>

              <div className={`
                  w-full xl:h-36 h-20 p-1 px-3
                  bg-gradient-to-b from-neutral-800/75 to-neutral-800/50 to-50% rounded-xl
                  flex items-center font-semibold text-neutral-200
                `}>
                    <textarea
                      className='w-full h-full bg-[#ffffff00] outline-none '
                      disabled={isOwner === false}
                      value={settings.dsc}
                      onChange={e => {
                        const newDsc = e.target.value
                        setListDsc(newDsc)
                      }}
                    />
                </div>
            </div>

          </div>

          {/* B. Leave list, Delete list */}
          <div className={`
            w-full p-4
            bg-neutral-700 rounded-3xl
            shadow-xl shadow-neutral-950/25
            flex
          `} >

            {isOwner === false && <div className='w-44 h-10'>
              <ItemListButton
                action={changeModalActiveId({id: 1})}
                text='Leave shopping list'
                font='font-semibold'
              />
            </div>}

            {isOwner === true && <div className='w-44 h-10'>
              <ItemListButton
                action={changeModalActiveId({id: 2})}
                text='Delete shopping list'
                font='font-semibold'
              />
            </div>}
          </div>
        
        </div>

      </div>

    </div>
  )
}

export default Detail