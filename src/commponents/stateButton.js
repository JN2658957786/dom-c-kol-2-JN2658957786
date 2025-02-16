import React from 'react'
import Icon from '@mdi/react';
import {
    mdiDotsHorizontal,
    mdiCheck,
    mdiChevronDoubleRight,
    mdiClockTimeFourOutline,
    mdiClockAlertOutline,
    mdiClose

} from '@mdi/js';

const StateButton = ({
    id = 0,
    bg = "bg-neutral-700",
    rounded = "rounded-lg"
}) => {
    return (
        <>
            {(id >= 0 && id < 6) ? <div className={`
                w-full h-full
                ${bg} ${rounded}
            `}>

                {id === 0 && <div className={`
                    w-full h-full
                    border-2 border-neutral-400 ${rounded}
                    flex justify-center items-center
                    text-neutral-400
                `}>
                    <Icon path={mdiDotsHorizontal} size={1} />
                </div>}

                {id === 1 && <div className={`
                    w-full h-full
                    border-2 border-green-500 ${rounded}
                    flex justify-center items-center
                    text-green-500
                `}>
                    <Icon path={mdiCheck} size={1} />
                </div>}

                {id === 2 && <div className={`
                    w-full h-full
                    border-2 border-sky-500 ${rounded}
                    flex justify-center items-center
                    text-sky-500
                `}>
                    <Icon path={mdiChevronDoubleRight} size={1} />
                </div>}

                {id === 3 && <div className={`
                    w-full h-full
                    border-2 border-amber-400 ${rounded}
                    flex justify-center items-center
                    text-amber-400
                `}>
                    <Icon path={mdiClockTimeFourOutline} size={1} />
                </div>}

                {id === 4 && <div className={`
                    w-full h-full
                    border-2 border-orange-600 ${rounded}
                    flex justify-center items-center
                    text-orange-600
                `}>
                    <Icon path={mdiClockAlertOutline} size={1} />
                </div>}

                {id === 5 && <div className={`
                    w-full h-full
                    border-2 border-red-600 ${rounded}
                    flex justify-center items-center
                    text-red-600
                `}>
                    <Icon path={mdiClose} size={1} />
                </div>}
                
            </div> : 
            <div className={`
                w-full h-full
            `}>
                err
            </div>}
        </>
    )
}

export default StateButton