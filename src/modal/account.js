import React from 'react'
import TextDisplay from '../commponents/textDisplay'
import { useDispatch, useSelector } from 'react-redux'
import { color } from '../config'
import { changeAccSelect, changeAccSelectToDefault } from '../store/entities/reducer_account'
import { changeListToDefault } from '../store/entities/reducer_shoppingList'

const Account = () => { 
  
    const dispatch = useDispatch() // eslint-disable-line

    const accountR = useSelector(store => store.entities.accountReducer) // eslint-disable-line

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
            text-xl font-semibold text-neutral-200
        `}>
            My accounts
        </div>

        <div className='h-8' />

        {/* B. current Account */}
        <div className={`
            w-full pl-4 pb-1
            font-semibold text-neutral-600
        `}>
            Current account
        </div>
        <div className={`
            w-full h-14 pb-1 px-4
            bg-gradient-to-r from-violet-500 to-violet-600 rounded-3xl
            shadow-xl shadow-neutral-950/25
        `}>
            <TextDisplay other={"text-nowrap text-lg text-neutral-100 font-bold flex items-center"}>
                {accountR.selectedAcc.name}
            </TextDisplay>
        </div>

        <div className='h-8' />

        {/* C. Accounts */}
        <div className={`
            w-full pl-4 pb-1
            font-semibold text-neutral-600
        `}>
            Accounts
        </div>
        <div className={`
            w-full h-full
            bg-neutral-700 rounded-xl
            shadow-xl shadow-neutral-950/25
        `}>
            {accountR.accounts.map((e) => <>
            
                <button
                onClick={() => {
                    if(accountR.selectedAcc.id === "" || accountR.selectedAcc.id !== e.id){
                        dispatch(changeAccSelect({id: e.id}))
                    } else {
                        dispatch(changeAccSelectToDefault())
                        dispatch(changeListToDefault())
                    }
                }}
                className={`
                    w-full h-12 pl-4
                    ${color.bgPrimaryHoverTW} rounded-xl
                    font-semibold text-neutral-200
                `}>
                    <TextDisplay other={"flex items-center"}>
                        {e.name}
                    </TextDisplay>
                </button>
                <div className='w-full h-[1px] bg-neutral-600' />
            </>)}
        </div>

    </div>
</div>)
}

export default Account