import React from 'react'

import ItemListButton from '../commponents/itemListButton.js'
import { mdiArrowRightThick } from '@mdi/js'
import BlurText from '../commponents/blurText.js'
import Icon from '@mdi/react'
import { changePageID } from '../store/entities/reducer_page.js'

const BlankWorkspace = () => {

  return (
    <div className='w-full h-full flex justify-center items-center'>

      <div className={`
        flex flex-col items-center
      `}>
        <BlurText
          text='No shopping list selected'
          font='text-4xl font-bold'
          primaryColor='text-neutral-300'
          shadowColor='text-black'
          blur='blur-xl'
        />


        <div className='h-8' />
          
        <div className={`
          font-semibold text-neutral-500
        `}>
          Please select a shopping list in My Lists tab
        </div>


        <div className='h-8' />

        <div className='w-40 h-10 relative'>
          <ItemListButton
            action={changePageID({id: 0})}
            text="My Lists"
            iconDefaultColorTW='text-neutral-200 font-semibold'
            iconDefaultBgColorTW='bg-neutral-800'
            rounded='rounded-full'
            textPadding='pr-4'
          />
          <div className={`
            absolute z-40 top-2 right-8 text-neutral-200
          `}>
            <Icon path={mdiArrowRightThick} size={1} />
          </div>
        </div>

      </div>

    </div>
  )
}

export default BlankWorkspace