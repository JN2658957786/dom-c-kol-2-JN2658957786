import React from 'react'

import {  useSelector } from 'react-redux'
import { changeListLoad, changeListToDefault } from '../store/entities/reducer_shoppingList'

import TextDisplay from '../commponents/textDisplay'
import ItemListButton from '../commponents/itemListButton.js'
import { mdiCheck } from '@mdi/js'

const AllLists = () => {

  const shoppingLists = useSelector(store => store.entities.databaseReducer.shoppingLists)
  const currentListID = useSelector(store => store.entities.shoppingListReducer.settings.id)
  const currentAcc = useSelector(store => store.entities.accountReducer.selectedAcc)

  return (
    <div className='w-full h-full p-12 flex justify-center'>

      <div className={`
        w-full max-w-7xl h-full
        no-scrollbar overflow-scroll
      `}>
        <div className={`
          w-full h-fit
          grid grid-rows-3
          2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1
          gap-8 
        `}>
          {shoppingLists.map((e) => {
            const data = Object.values(e)[0]
            const items = data.items
            const members = data.members
            const settings = data.settings
            const owner = data.members.find((e) => e.id === settings.owner)

            let isMember = false
            if(members.some((e) => e.id === currentAcc.id)) isMember = true
            if(isMember === false) return null

            return(<>
            <div className={`
              w-full h-96 px-2 py-4
              bg-neutral-700 rounded-3xl
              drop-shadow-lg
              flex flex-col
            `}>

              {/* Name */}
              <div className={`
                w-full h-16
                bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl
              `}>
                <div className={`
                  w-full h-16 pl-4
                  bg-gradient-to-br from-violet-300/25 to-violet-300/0 to-40% rounded-2xl
                `}>
                  <TextDisplay other={"pt-4 text-nowrap text-lg font-bold text-neutral-100"}>
                    {settings.name}
                  </TextDisplay>
                </div>
              </div>

              <div className='h-4' />

              {/* Description */}
              <div className='pl-4 mb-1 text-sm font-semibold text-neutral-500/75'>
                Description
              </div>
              <div className={`
                w-full h-24 py-2 px-4
                bg-neutral-600 rounded-xl
                shadow-inner
              `}>
                <TextDisplay other={"w-full h-full text-sm font-semibold text-neutral-200"}>
                  {settings.dsc}
                </TextDisplay>
              </div>

              <div className='h-4' />

              {/* Owner name */}
              <div className='pl-4 mb-1 text-sm font-semibold text-neutral-500/75'>
                Made by
              </div>
              <div className={`
                w-full h-10 py-2 px-4
                bg-neutral-600 rounded-xl
                shadow-inner
              `}>
                <TextDisplay other={"w-full h-full text-sm font-semibold text-neutral-200"}>
                  {owner.name}
                </TextDisplay>
              </div>

              <div className='grow' />

              {/* Select button */}
              <div className="w-full h-10 flex">

                <div className='w-16 h-full'>
                  <ItemListButton
                    action={ (currentListID === "" || currentListID !== settings.id) ?
                      changeListLoad({
                        items,
                        members,
                        settings
                      }) : 
                      changeListToDefault()
                    }
                    iconPath={(
                      currentListID !== "" &&
                      currentListID === settings.id
                    ) ? mdiCheck : ""}
                    iconSize={1.15}
                    iconDefaultColorTW='text-green-600'
                    rounded='rounded-xl'
                  />
                </div>

                <div className='grow' />

                <div className='w-44 h-full'>
                  <ItemListButton
                    action={ (currentListID === "" || currentListID !== settings.id) ?
                      changeListLoad({
                        items,
                        members,
                        settings
                      }) : 
                      changeListToDefault()
                    }
                    text="Select shopping list"
                    rounded='rounded-xl'
                  />
                </div>
              </div>

            </div>
          </>)})}
        </div>

      </div>


    </div>
  )
}

export default AllLists