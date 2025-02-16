import React from 'react'
import { color } from '../config'

const BlurText = ({
    text = "",
    font = "",
    other = "",
    primaryColor = color.highlightTextTW,
    shadowColor = color.shadowTextTW,
    blur = "blur-md"
}) => {
    return (
        <>
            <div className={`
                relative flex flex-col ${other}
            `}>
                <div className={`
                    absolute z-10
                    ${font} ${primaryColor}
                `}>
                    {text}
                </div>
                <div className={`
                    blur-md
                    ${font} ${shadowColor}
                `}>
                    {text}
                </div>
            </div>
        </>
    )
}

export default BlurText