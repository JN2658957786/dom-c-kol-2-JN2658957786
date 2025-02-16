import React, { useEffect } from 'react'
import StateButton from '../commponents/stateButton'
import Icon from '@mdi/react'
import { mdiCheckBold, mdiCloseThick, mdiDotsHorizontal } from '@mdi/js'
import { stateTypes } from '../config'
import { useDispatch, useSelector } from 'react-redux'
import { changeAllFilter, changeFilter } from '../store/entities/reducer_shoppingList'
import { changeModaFilterArr } from '../store/entities/reducer_modal'

const StateFilter = () => {

    const dispatch = useDispatch() // eslint-disable-line
    const filter = useSelector(store => store.entities.shoppingListReducer.settings.filter) // eslint-disable-line
    const filterState = useSelector(store => store.entities.shoppingListReducer.settings.filterState) // eslint-disable-line
    const filter_arr = useSelector(store => store.entities.modalReducer.filter_arr) // eslint-disable-line

    useEffect(() => {
        let tempArr = []
        Array.from({length: 40}, (e, i) => {
            const randomState = Math.floor(Math.random()*6)
            const randomLength =  Math.floor(Math.random()*50) + 25
            const tempOgj = {randomState, randomLength}
            tempArr.push(tempOgj)
            return null;
        })
        dispatch(changeModaFilterArr({arr: tempArr}))
        return () => {
            dispatch(changeModaFilterArr({arr: []}))
        }
    }, [dispatch])

  return (
    <div
    className={`
        translate-x-[50vw] translate-y-[50vh]
        flex justify-center items-center
        relative
    `}>
        <div className={`
            absolute z-20 p-4
            max-w-[75vw] w-[600px] max-h-[75hw] h-[800px]
            bg-neutral-800 rounded-3xl
            flex flex-col items-center
        `}>
            {/* 1. Name */}
            <div className={`
                mb-6 mt-2
                text-2xl font-bold text-neutral-200
            `}>
                Item filter
            </div>

            {/* 2. Selection */}
            <div className={`
                w-full
                grid sm:grid-cols-6 grid-cols-3
            `}>
                {Object.entries(stateTypes).map((e) => {return<>
                    <button
                    onClick={() => dispatch(changeFilter({filter: {...filter, [e[0]]: !filter[e[0]] }}))}
                    className='w-full h-full flex justify-center'>
                        <div className={`
                        w-16 h-20
                        ${(filter[e[0]] === true) ?
                            "bg-gradient-to-t from-green-600 to-green-600/0 to-75%" : 
                            "bg-gradient-to-t from-red-600 to-red-600/0 to-75%"
                        }
                        rounded-xl
                        flex flex-col items-center
                        `}>
                            <div className='w-12 h-12'>
                                <StateButton
                                    id={Number(e[0])}
                                    bg={"bg-neutral-800"}
                                    rounded={"rounded-xl"}
                                />
                            </div>
                            <div className='w-full grow pb-1 flex justify-center items-end text-neutral-200'>
                                {(filter[e[0]] === true) ? 
                                <Icon path={mdiCheckBold} size={1} /> :
                                <Icon path={mdiCloseThick} size={1} />}
                            </div>
                        </div>
                    </button>
                </>})}

            </div>

            <div className='h-2' />

            {/* 3. All selection */}
            <div className={`
                w-full h-14 px-4
            `}>
                <button
                onClick={() => dispatch(changeAllFilter())}
                className='w-full h-full relative flex'>
                    <div className={`
                        absolute z-10
                        w-full h-full pt-4
                        flex justify-center items-center
                        text-neutral-200
                    `}>
                        {filterState === 1 && <Icon path={mdiCheckBold} size={1} />}
                        {filterState === 0 && <Icon path={mdiDotsHorizontal} size={1.425} />}
                        {filterState === -1 && <Icon path={mdiCloseThick} size={1} />}
                    </div>
                    <div className={`
                        absolute z-0
                        w-full h-full
                        ${(filterState === 1) ? "bg-gradient-to-t from-green-600 to-green-600/0 to-75%" : ""}
                        ${(filterState === 0) ? `bg-gradient-to-t from-violet-500/75 to-violet-500/0 to-75%
                            saturate-150` : ""}
                        ${(filterState === -1) ? "bg-gradient-to-t from-red-600 to-red-600/0 to-75%" : ""}
                        rounded-b-lg
                    `} />
                </button>
            </div>

            <div className='h-8' />

            {/* 3. Display */}
            <div className={`
                w-full grow px-4
                grid grid-cols-4 gap-1 gap-x-2
            `}>
                {filter_arr.map((e) => {
                return(<div className={`
                    w-full h-full
                    bg-gradient-to-b from-neutral-900/50 to-neutral-900/25 rounded-lg
                    ring-2 ring-neutral-700/15
                    relative flex
                `} >
                    <div className={`
                        absolute z-10
                        w-full h-full
                        ${(filter[e.randomState] === true) ?
                            "" :
                            "bg-neutral-800/65" }
                        rounded-lg
                    `}/>
                    <div className='absolute z-0 w-full h-full rounded-lg flex p-2'>
                        <div className='grow flex items-center'>
                            <div className={`
                                h-1
                                ${(filter[e.randomState] === true) ? 
                                    "bg-slate-200/35" : "bg-slate-200/25"
                                }
                            `} style={{width: `${e.randomLength}%`}}/>
                        </div>
                        <div className='w-1/2 h-full relative flex'>
                            <div className=' absolute z-10 w-full h-full'>
                                <StateButton id={e.randomState} />
                            </div>
                            <div className=' absolute z-0 w-full h-full blur-sm'>
                                <StateButton id={e.randomState} />
                            </div>
                        </div>
                    </div>
                </div>)})}
            </div>
            
        </div>
        <div className={`
            absolute z-10
            max-w-[75vw] w-[600px] max-h-[75hw] h-[800px]
            bg-gradient-to-r from-violet-500 to-fuchsia-600
            rounded-3xl blur-md
        `}>
            
        </div>
    </div>
  )
}

export default StateFilter