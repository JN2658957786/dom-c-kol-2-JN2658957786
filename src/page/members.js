import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import ItemListButton from '../commponents/itemListButton.js'
import IconBlur from "../commponents/blurIcon.js"
import { mdiAccount, mdiAccountTie, mdiDelete, mdiPlusThick, mdiTableRowPlusAfter, mdiTableRowPlusBefore } from '@mdi/js'
import TextDisplay from '../commponents/textDisplay'
import { changeAddMember, changeAddMemberIsAfter, changeMemberRemove, changeSelectedMemberById, changeSelectedMemberToDefault } from '../store/entities/reducer_shoppingList.js'

const Members = () => {

  const dispatch = useDispatch()

  const currentAcc = useSelector(store => store.entities.accountReducer.selectedAcc)
  const currentMember = useSelector(store => store.entities.shoppingListReducer.selectedMember)
  const members = useSelector(store => store.entities.shoppingListReducer.members)
  const settings = useSelector(store => store.entities.shoppingListReducer.settings)

  const isOwner = useSelector(store => {
    const members = store.entities.shoppingListReducer.members
    const currentAccID = store.entities.accountReducer.selectedAcc.id
    const user = members.find((e) => e.id === currentAccID)

    if(user === undefined) return false
    return user.isOwner
  })

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

        {/* 3. Member list card */}
        <div className={`
          w-full h-full grid grid-cols-1 gap-16
        `}>

          {/* C. Item list */}
          <div className={`
            w-full h-full p-4
            bg-neutral-700 rounded-3xl
            shadow-xl shadow-neutral-950/25
            flex flex-col
          `}>
            {/* Topbar */}
            {isOwner === true && <div className={`
              w-full h-10 mb-3
              flex items-center
            `}>
              {/* 1. Add item */}
              {currentMember.id === "" && <div className='w-20 h-10'>
                <ItemListButton
                  action={changeAddMember()}
                  iconPath={mdiPlusThick}
                />
              </div>}
              {currentMember.id !== "" && <>
                <div className='w-20 h-10'>
                  <ItemListButton
                    action={changeAddMemberIsAfter({id: currentMember.id, isAfter: false})}
                    iconPath={mdiTableRowPlusBefore}
                    rounded='rounded-l-md'
                  />
                </div>
                <div className='w-1'/>
                <div className='w-20 h-10'>
                  <ItemListButton
                    action={changeAddMemberIsAfter({id: currentMember.id, isAfter: true})}
                    iconPath={mdiTableRowPlusAfter}
                    rounded='rounded-r-md'
                  />
                </div>
              </>}

              <div className='grow' />

              {/* 2. Delete */}
              {currentMember.id !== "" && <div className='w-20 h-10'>
                <ItemListButton
                  action={changeMemberRemove({id: currentMember.id})}
                  iconPath={mdiDelete}
                />
              </div>}
            </div>}

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
              <div className='xl:w-[calc(122px)] w-[calc(140px)]'>
                Type
              </div>
            </div>

            {/* Member list */}
            <div className={`
              xl:no-scrollbar
              w-full
              ${(currentAcc.isOwner === true) ? 
                "h-[calc(100vh-560px)]" :
                "h-[calc(100vh-490px)]"}
              overflow-y-scroll
            `}>
              {members.map((e) => { return<>
              <button
              onClick={() => {
                if(e.id === currentMember.id) {
                  dispatch(changeSelectedMemberToDefault())
                } else {
                  dispatch(changeSelectedMemberById({id: e.id}))
                }
              }}
              className={`
                w-full h-12 pl-2
                rounded-lg
                ${(e.id === currentMember.id) ? "bg-violet-500" : "" }
                ${(currentMember.id === null || e.id === currentMember.id) ? 
                  "hover:bg-violet-500" : 
                  "hover:bg-violet-500/50"
                }
                flex
              `}>
                <div className={`
                  grow
                  flex items-center
                  font-semibold text-neutral-200 text-nowrap
                `}>
                  <TextDisplay other="flex items-center">
                    {e.name}
                  </TextDisplay>
                </div>

                <div className={`
                  w-12 h-12
                  flex justify-center items-center
                `}>
                  {e.isOwner === true &&<IconBlur
                    icon={mdiAccountTie}
                    size={1.25}
                    primaryColor='#e11d48'/>}
                  {e.isOwner === false &&<IconBlur
                    icon={mdiAccount}
                    size={1.25}
                    primaryColor='#3b82f6'/>}
                </div>

                <div className={`
                  w-20 mr-2
                  font-semibold text-neutral-200
                `}>
                  <TextDisplay other="flex items-center">
                    {(e.isOwner === true) ? "Owner" : "Member"}
                  </TextDisplay>
                </div>

              </button>

              <div className={`
                w-full h-[1px]
                bg-neutral-600
              `} />
              </>})}
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Members