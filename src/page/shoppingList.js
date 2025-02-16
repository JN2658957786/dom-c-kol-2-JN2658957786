import React, { useEffect, useState } from 'react'
import {mdiChevronDown, mdiDelete, mdiFilter, mdiPlusThick, mdiTableRowPlusAfter, mdiTableRowPlusBefore } from '@mdi/js';

import StateButton from '../commponents/stateButton';
import TextDisplay from '../commponents/textDisplay';
import ItemListButton from '../commponents/itemListButton';

import { useDispatch, useSelector } from 'react-redux'
import Icon from '@mdi/react';
import { color, costTypes, stateTypes } from '../config';
import { changeAddItem, changeAddItemIsAfter, changeItem, changeItemRemove, changeSelectedItemById, changeSelectedItemToDefault } from '../store/entities/reducer_shoppingList';
import { changeModalActiveId } from '../store/entities/reducer_modal';

const ShoppingList = () => {

  const dispatch = useDispatch() // eslint-disable-line

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1280
  useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  const itemList = useSelector(store => store.entities.shoppingListReducer.items) // eslint-disable-line
  const currentItem = useSelector(store => store.entities.shoppingListReducer.selectedItem) // eslint-disable-line
  const settings = useSelector(store => store.entities.shoppingListReducer.settings) // eslint-disable-line
  const currentAcc = useSelector(store => store.entities.accountReducer.selectedAcc) // eslint-disable-line

  const isOwner = useSelector(store => {
    const members = store.entities.shoppingListReducer.members
    const currentAccID = store.entities.accountReducer.selectedAcc.id
    const user = members.find((e) => e.id === currentAccID)

    if(user === undefined) return false
    return user.isOwner
  }) // eslint-disable-line

  const [showCostTypeModal, setShowCostTypeModal] = useState(false)


function changeItemName(newName) {
  dispatch(changeItem({ id: currentItem.id, item: {...currentItem, name: newName} }))
}
function changeItemCost(newCost) {
  if(currentItem.cost === newCost ) return;
  dispatch(changeItem({ id: currentItem.id, item: {...currentItem, cost: parseFloat(newCost)} }))
}
function changeItemCount(newCount) {
  if(newCount === currentItem.count ) return;
    dispatch(changeItem({ id: currentItem.id, item: {...currentItem, count: parseFloat(newCount)} }))
}
function changeItemDsc(newDsc) {
  dispatch(changeItem({ id: currentItem.id, item: {...currentItem, dsc: newDsc} }))
}
function changeItemState(newState) {
  dispatch(changeItem({ id: currentItem.id, item: {...currentItem, state: Number(newState)} }))
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

        {/* 3. Cards */}
        <div className={`
          w-full h-full
          xl:grid
          xl:grid-cols-2
          xl:gap-16
        `}>
          {/* A. Item list */}
          <div className={`
            w-full xl:h-full h-[calc((100vh-364px)/2-96px)] p-4 xl:mb-0 mb-8
            bg-neutral-700 rounded-3xl
            shadow-xl shadow-neutral-950/25
            flex flex-col
          `}>
            {/* Topbar */}
            <div className={`
              w-full h-10 mb-3
              flex items-center
            `}>
              {/* 1. Add item */}
              {isOwner === true && currentItem.id === "" && <div className='w-20 h-10'>
                <ItemListButton
                  action={ changeAddItem() }
                  iconPath={mdiPlusThick}
                />
              </div>}
              {isOwner === true && currentItem.id !== "" && <>
                <div className='w-20 h-10'>
                  <ItemListButton
                    action={ changeAddItemIsAfter({id: currentItem.id, isAfter: false}) }
                    iconPath={mdiTableRowPlusBefore}
                    rounded='rounded-l-md'
                  />
                </div>
                <div className='w-1'/>
                <div className='w-20 h-10'>
                  <ItemListButton
                    action={ changeAddItemIsAfter({id: currentItem.id, isAfter: true}) }
                    iconPath={mdiTableRowPlusAfter}
                    rounded='rounded-r-md'
                  />
                </div>
              </>}

              <div className='grow' />

              {/* 2. Delete */}
              {isOwner === true && currentItem.id !== "" && <div className='w-20 h-10'>
                <ItemListButton
                  action={changeItemRemove({id: currentItem.id})}
                  iconPath={mdiDelete}
                />
              </div>}

              <div className='w-1' />

              {/* 3. Filter */}
              <div className='w-20 h-10'>
                <ItemListButton
                  action={ changeModalActiveId({id: 0}) }
                  iconPath={ mdiFilter }
                />
              </div>
            </div>

            {/* Table categories */}
            <div className={`
              w-full py-3
              border-y-2 border-neutral-600
              text-neutral-500 font-semibold
              flex
            `}>
              <div className='grow pl-2'>
                Name
              </div>
              <div className='xl:w-20 w-24'>
                State
              </div>
            </div>

            {/* Items */}
            <div className={`
                xl:no-scrollbar
                w-full h-[calc(800px-48px)]
                rounded-b-lg
                overflow-y-scroll
            `}>
              {itemList.map((e) => {

                if(settings.filter[e.state] === false) return null;

                return <>
                  <button
                  onClick={() => {
                    if(e.id === currentItem.id) {
                      dispatch(changeSelectedItemToDefault())
                    } else {
                      dispatch(changeSelectedItemById({id: e.id}))
                    }
                    setShowCostTypeModal(false)
                  }}
                  className={`
                    w-full py-2 pl-2 h-12
                    rounded-lg
                    ${(e.id === currentItem.id) ? "bg-violet-500" : "" }
                    ${(currentItem.id === null || e.id === currentItem.id) ? 
                      "hover:bg-violet-500" : 
                      "hover:bg-violet-500/50"
                    }
                    text-neutral-200 font-semibold
                    flex flex-row items-center
                  `}>
                    <div className='grow text-nowrap overflow-hidden'>
                      <TextDisplay>
                        {e.name}
                      </TextDisplay>
                    </div>
                    <div className='w-20 ml-4 pr-2 h-full'>
                      <StateButton id={e.state}/>
                    </div>
                  </button>
                  <div className={`
                    w-full h-[1px]
                    bg-neutral-600
                  `} />
                </>
              })
              }
            </div>

          </div>

          {/* B. Selected item */}
          <div className={`
            w-full xl:h-full h-[calc((100vh-364px)/2)] p-4
            bg-neutral-700 rounded-3xl
            shadow-xl shadow-neutral-950/25
            flex flex-col
          `}>
              {/* 1. Name */}
              <div className={`
                w-full h-16
                 bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl
                 relative 
              `}>

                <div className={`
                  absolute z-0
                  w-full h-16 pl-6
                  bg-gradient-to-br from-violet-200/20 to-violet-200/0 to-50% rounded-2xl
                  text-xl font-bold text-white
                  flex items-center
                `}>
                  <input
                      className={`
                        w-11/12 -translate-y-[2px]
                        bg-[#ffffff00]
                        outline-none`}
                      value={ (currentItem.id.length !== 0) ? currentItem.name : "" }
                      onChange={e => {
                        let newValue = e.target.value
                        changeItemName(newValue)
                      }}
                      disabled={currentItem.id.length === 0 || isOwner === false}
                    />
                </div>
                {currentItem.id !== "" && isOwner !== false && <div className={`
                  absolute z-10 top-0 right-0
                  mt-1 mr-[7px]
                  bg-gradient-to-r from-violet-400/80 to-violet-400/90
                    bg-clip-text text-transparent 
                `} >
                  ✏️ 
                </div>}
              </div>

              <div className={`
                w-full xl:mt-0 mt-4
                flex xl:flex-col flex-row
              `}>
                {/* 2. Cost per item */}
                <div className={`w-full xl:mt-8`}>
                  <div className=' mb-1 font-semibold text-neutral-500'>
                    Cost per item
                  </div>

                  <div className={`
                    w-full h-12 p-1
                    bg-gradient-to-b from-neutral-800/75 to-neutral-800/50 to-50% rounded-xl
                    flex
                  `}>
                    <div className='grow h-full pl-2 flex items-center font-semibold text-neutral-200'>
                        <input
                          className='w-11/12 bg-[#ffffff00] outline-none '
                          value={currentItem.cost}
                          onChange={e => {
                            let newValue = parseFloat(e.target.value)
                            if(newValue < 0) return;
                            changeItemCost(newValue)
                          }}
                          type="number"
                          disabled={currentItem.id.length === 0 || isOwner === false}
                        />
                    </div>
                    <button
                    onClick={() => setShowCostTypeModal((showCostTypeModal) ? false : true )}
                    disabled={currentItem.id.length === 0 || isOwner === false}
                    className='w-24 h-full p-2 border-l-2 border-neutral-700 flex items-center realtive'>
                      <div className='grow flex justify-start text-neutral-200'>
                        {currentItem && currentItem.id.length !== 0 && <>
                          {(currentItem.costType === "None") ? "..." : currentItem.costType}
                        </>}
                      </div>
                      <Icon path={mdiChevronDown} size={1} color={color.iconLightHEX}/>

                      {showCostTypeModal === true && <div className={`
                        absolute translate-y-24 -translate-x-2
                        w-24
                        flex flex-col items-center
                      `}>
                        {costTypes.map((e, i) => {return <>
                          <button
                          onClick={() => {
                            dispatch(changeItem({ id: currentItem.id, item: {...currentItem, costType: e} }))
                          }}
                          className={`
                            w-full h-10 pl-2 
                            ${(i === 0) ? "rounded-t-lg" : ""}
                            ${(i === costTypes.length - 1) ? "rounded-b-lg" : ""}
                            ${(currentItem.costType === e) ? `${color.bgPrimaryTW}` : "bg-[#333333]"}
                            
                            flex items-center
                            text-neutral-200
                          `}>
                            {(e === "None") ? "..." : e}
                          </button>
                          {i < costTypes.length - 1 && <div className='w-full h-[2px] bg-[#333333] flex items-center'>
                            <div className='mx-2 w-full h-full bg-neutral-700'/>
                          </div>}
                        </>})}
                      </div>}
                    </button>
                  </div>
                </div>

                <div className='xl:w-0 w-8'/>

                {/* 3. Item count */}
                <div className={`w-full xl:mt-4`}>
                  <div className=' mb-1 font-semibold text-neutral-500'>
                    Item count
                  </div>

                  <div className={`
                    w-full h-12 p-1 pl-3
                    bg-gradient-to-b from-neutral-800/75 to-neutral-800/50 to-50% rounded-xl
                    flex items-center font-semibold text-neutral-200
                  `}>
                      <input
                        className='w-11/12 bg-[#ffffff00] outline-none '
                        value={currentItem.count}
                        onChange={e => {
                          let newValue = parseFloat(e.target.value)
                          if(newValue < 0) return;
                          changeItemCount(newValue)
                        }}
                        type="number"
                        disabled={currentItem.id.length === 0 || isOwner === false}
                      />
                  </div>
                </div>
              </div>

              {/* 4. Dsc */}
              <div className={`w-full mt-4`}>
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
                      disabled={currentItem.id.length === 0 || isOwner === false}
                      value={currentItem.dsc}
                      onChange={e => {
                        const newDsc = e.target.value
                        changeItemDsc(newDsc)
                      }}
                    />
                </div>
              </div>

              <div className=' xl:mt-5 mt-4 font-semibold text-neutral-500'>
                State
              </div>

              {/* 5 A. state PC */}
              {width >= breakpoint && <div className={`
                w-full grow
                flex flex-col
              `}>
                {Object.entries(stateTypes).map((e, i) => <>
                <button
                disabled={currentItem.id.length === 0}
                onClick={() => changeItemState(e[0])}
                className={`
                  w-full h-full max-h-12 px-2
                  flex items-center
                `}>
                  {/* 1. Selection dot */}
                  <div className={`
                    w-4 h-4
                    ${(currentItem.state === Number(e[0]) && currentItem.id.length !== 0) ? 
                      "ring-2 ring-violet-950" : ""}
                    mr-2 p-[2px]
                    bg-neutral-800 rounded-full
                    relative flex justify-center items-center
                  `}>
                    {/* active state */}
                    {currentItem.state === Number(e[0]) &&
                    currentItem.id.length !== 0 &&
                    <div className={`
                      absolute z-40
                      ${(currentItem.state === Number(e[0]) && currentItem.id.length !== 0) ? 
                        "w-4 h-4" : "w-3 h-3"}
                      bg-gradient-to-r from-violet-500 to-violet-600
                      rounded-full
                    `}>
                        <div className={`
                        w-full h-full
                        bg-gradient-to-br from-violet-100/35 to-violet-100/0 to-50%
                        rounded-full
                      `}/>
                    </div>}
                    {currentItem.state === Number(e[0]) && 
                    currentItem.id.length !== 0 &&
                    <div className={`
                      absolute z-20
                      ${(currentItem.state === Number(e[0]) && currentItem.id.length !== 0) ? 
                        "w-4 h-4" : "w-3 h-3"}
                      bg-gradient-to-r from-violet-500 to-violet-600
                      blur-[8px]
                      rounded-full
                    `}/>}

                    {/* inactive state */}
                    <div className={`
                      absolute z-10
                      ${(currentItem.state === Number(e[0]) && currentItem.id.length !== 0) ? 
                        "w-4 h-4" : "w-3 h-3"}
                      bg-gradient-to-b from-[#2d2d2d] to-[#333333]
                      rounded-full
                    `}>
                      <div className={`
                        w-full h-full
                        bg-gradient-to-br from-neutral-500/0 from-60% to-neutral-500/35
                        rounded-full
                      `}/>
                    </div>

                    {(currentItem.state !== Number(e[0]) ||
                    currentItem.id.length === 0
                    ) && <div className={`
                      absolute z-0 
                      ${(currentItem.state === Number(e[0]) && currentItem.id.length !== 0) ? 
                        "w-4 h-4" : "w-3 h-3"} bg-[#000000aa] rounded-full blur-[6px]
                    `}/>}

                  </div>
                  
                  {/* 2. State icons */}
                  <div className={`
                    w-20 h-8 ml-4
                    realtive flex
                  `}>
                    {(
                      currentItem.state !== Number(e[0]) ||
                      currentItem.id.length === 0
                    ) &&
                    <div className='absolute z-20 w-20 h-8 bg-neutral-700/35'/>}
                    <div className='absolute z-10 w-20 h-8'>
                      <StateButton id={Number(e[0])}/>
                    </div>
                    {currentItem.state === Number(e[0]) &&
                    currentItem.id.length !== 0 &&
                    <div className='absolute z-0 w-20 h-8 blur-md'>
                      <StateButton id={Number(e[0])}/>
                    </div>}
                  </div>
                      
                  {/* 3. State name */}
                  <div className={`
                    ml-5
                    font-semibold
                    ${(currentItem.state === Number(e[0]) &&
                      currentItem.id.length !== 0) ?
                      "text-neutral-200" :
                      "text-neutral-500"}
                  `}>
                    {e[1]}
                  </div>

                  </button>
                  <div className={`
                      w-full h-[1px]
                      bg-neutral-600
                  `} />
                </>)}
              </div>}

              {/* 5 B. state Mobile */}
              {width < breakpoint && <div className={`
                w-full grow mt-1
                grid grid-cols-6
              `}>
                {Object.entries(stateTypes).map((e, i) => <>
                <button
                disabled={currentItem.id.length === 0}
                onClick={() => changeItemState(e[0])}
                className={`
                  w-full h-full px-2
                  flex flex-col items-center
                `}>

                  {/* 1. State icons */}
                  <div className={`
                    w-20 h-8
                    realtive flex
                  `}>
                    {(
                      currentItem.state !== Number(e[0]) ||
                      currentItem.id.length === 0
                    ) &&
                    <div className='absolute z-20 w-20 h-8 bg-neutral-700/35'/>}
                    <div className='absolute z-10 w-20 h-8'>
                      <StateButton id={Number(e[0])}/>
                    </div>
                    {currentItem.state === Number(e[0]) &&
                    currentItem.id.length !== 0 &&
                    <div className='absolute z-0 w-20 h-8 blur-md'>
                      <StateButton id={Number(e[0])}/>
                    </div>}
                  </div>
                      
                  {/* 2. State name */}
                  <div className={`
                    font-semibold
                    ${(currentItem.state === Number(e[0]) &&
                      currentItem.id.length !== 0) ?
                      "text-neutral-200" :
                      "text-neutral-500"}
                  `}>
                    {e[1]}
                  </div>

                  {/* 3. Selection indicator */}
                  <div className={`
                    w-full h-8 mt-1
                    rounded-b-xl
                    ${(currentItem.state === Number(e[0]) &&
                      currentItem.id.length !== 0) ?
                      `bg-gradient-to-t from-violet-500 via-violet-500/45 to-violet-500/0
                       drop-shadow-md   
                      ` : ""}
                  `}>

                  </div>

                  </button>
                </>)}
              </div>}

          </div>
        </div>

      </div>
    </div>
  )
}

export default ShoppingList