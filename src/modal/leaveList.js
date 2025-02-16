import React from 'react'
import TextDisplay from '../commponents/textDisplay'
import { useSelector } from 'react-redux'
import ItemListButton from '../commponents/itemListButton'
import { changeModalActiveId } from '../store/entities/reducer_modal'
import { changeListToDefault, changeMemberRemove } from '../store/entities/reducer_shoppingList'
import { changePageID } from '../store/entities/reducer_page'
import { changeSaveList } from '../store/entities/reducer_database'

const LeaveList = () => { 
  
    const settings = useSelector(store => store.entities.shoppingListReducer.settings) // eslint-disable-line
    const currentAcc = useSelector(store => store.entities.accountReducer.selectedAcc) // eslint-disable-line
    const onwerName = useSelector(store => {
        const shoppingList = store.entities.shoppingListReducer
        const ownerID = shoppingList.settings.owner
        const members = shoppingList.members
    
        const owner = members.find((e) => e.id === ownerID)
        if(owner === -1 || owner === undefined) return null 
    
        return owner.name
    }) // eslint-disable-line

    const currentListID = useSelector(state => state.entities.shoppingListReducer.settings.id) // eslint-disable-line
    const currentListItems = useSelector(state => state.entities.shoppingListReducer.items) // eslint-disable-line
    const newMembers = useSelector(state => {
        let members = state.entities.shoppingListReducer.members
        const index = members.findIndex((e) => {return e.id === currentAcc.id}) 
        let tempMembers = []
        if (index > -1) {
            for (let i = 0; i < members.length; i++) {
                if(i !== index) tempMembers.push(members[i])
            }
        }
        return tempMembers
    }) // eslint-disable-line
    const currentListSettings = useSelector(state => state.entities.shoppingListReducer.settings) // eslint-disable-line



return (<div className={`
    translate-x-[50vw] translate-y-[50vh]
    flex justify-center items-center
    relative
`}>
    <div className={`
        absolute z-20 p-8
        max-w-[75vw] w-[600px] max-h-[75hw] h-[800px]
        bg-neutral-800 rounded-3xl
        flex flex-col items-center
    `}>

        {/* A. */}
        <div className={`
            text-lg font-semibold text-neutral-200
        `}>
            Are you sure you want to leave this shopping list?
        </div>

        <div className='h-8' />

        {/* B. Shopping list name  */}
        <div className={`
            w-full pl-4 pb-1
            font-semibold text-neutral-600
        `}>
            Name
        </div>
        <div className={`
            w-full h-20 py-6 px-4
            bg-gradient-to-r from-violet-500 to-violet-600 rounded-3xl
            shadow-xl shadow-neutral-950/25
        `}>
            <TextDisplay other={"text-nowrap text-xl text-neutral-100 font-bold"}>
                {settings.name}
            </TextDisplay>
        </div>

        <div className='h-4' />

        {/* C. Shopping list dsc */}
        <div className={`
            w-full pl-4 pb-1
            font-semibold text-neutral-600
        `}>
            Description
        </div>
        <div className={`
            w-full h-60 p-4
            bg-neutral-700 rounded-3xl
            shadow-xl shadow-neutral-950/25
        `}>
            <TextDisplay other={"text-nowrap text-neutral-300 font-semibold"}>
                {settings.dsc}
            </TextDisplay>
        </div>

        <div className='h-4' />

        {/* D. Shopping list owner */}
        <div className={`
            w-full pl-4 pb-1
            font-semibold text-neutral-600
        `}>
            Owner
        </div>
        <div className={`
            w-full h-12 py-[11px] pl-4
            bg-neutral-700 rounded-3xl
            shadow-xl shadow-neutral-950/25
        `}>
            <TextDisplay other={"text-nowrap text-neutral-300 font-semibold"}>
                {onwerName !== null && onwerName}
            </TextDisplay>
        </div>

        <div className='grow' />

        {/* E. Confirm, Cancel */}
        <div className={`
            w-full h-12
            flex
        `}>
            <div className='w-40 h-full font-semibold'>
                <ItemListButton
                    action={
                        changeModalActiveId({id: -1})
                    }
                    text="Cancel"
                    gradient='bg-gradient-to-r from-neutral-500 to-neutral-600'
                    gradientHover='hover:bg-gradient-to-r from-neutral-500 to-neutral-600'
                    iconDefaultBgColorTW='bg-neutral-800'
                    rounded='rounded-3xl'
                />
            </div>

            <div className='grow' />

            <div className='w-40 h-full font-semibold'>
                <ItemListButton
                    action={[
                        changeMemberRemove({id: currentAcc.id}),
                        changeSaveList({
                            id: currentListID,
                            items: currentListItems,
                            members: newMembers,
                            settings: currentListSettings
                        }),
                        changeListToDefault(),
                        changeModalActiveId({id: -1}),
                        changePageID({id: 0}),
                    ]}
                    text="Leave"
                    gradient='bg-gradient-to-r from-red-500 to-red-600'
                    gradientHover='hover:bg-gradient-to-r from-red-500 to-red-600'
                    iconDefaultBgColorTW='bg-neutral-800'
                    rounded='rounded-3xl'
                />
            </div>
        </div>

    </div>
  </div>)
}

export default LeaveList