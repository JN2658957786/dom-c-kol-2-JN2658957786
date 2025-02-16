import React from 'react'
import { mdiViewList } from '@mdi/js';

import BlurIcon from '../blurIcon.js';
import BlurText from "../blurText.js"

const logo = () => {
    return (
    <button
    onClick={() => window.location.replace(`http://localhost:3000/`)}
    className={`
        w-full h-full px-3 py-1
        flex
        border-2 border-neutral-600/0 hover:border-neutral-600 rounded-lg
    `}>
        <BlurIcon icon={mdiViewList} size={1.925} />

        <div
            className={`
            h-full pl-3 
            flex items-center
        `}>
            <BlurText
                text="Shopping list"
                font='font-bold text-lg'
                blur='blur-md'
            />
        </div> 
    </button>
    )
}

export default logo