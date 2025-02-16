import { mdiDotsVertical } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ItemListButton = ({
    action = undefined,
    iconPath = mdiDotsVertical,
    text="",
    iconSize = 1,
    iconDefaultColorTW = "text-neutral-500",
    iconDefaultBgColorTW = "bg-neutral-700",
    iconHoverColorTW = "hover:text-neutral-200",
    gradient = "bg-gradient-to-r from-violet-500 to-violet-600",
    gradientHover = "hover:bg-gradient-to-r from-violet-500 to-violet-600",
    rounded = "rounded-md",
    isHoverDisabled = false,
    isButtonDisabled = false,
    textPadding = "",
    font=""
}) => {

    const dispatch = useDispatch() // eslint-disable-lines
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
        className={`
        w-full h-full
        relative flex
    `}>
        <div className={`
            absolute z-20
            w-full h-full
            flex justify-center items-center
        `}>
            <button
                disabled={isButtonDisabled}
                onClick={() => { 
                    if(action === undefined) return null;
                    if(Array.isArray(action) === true) {
                        action.forEach(a => {
                            dispatch(a)
                        });
                        return null
                    }
                    dispatch(action)
                }}
                onMouseEnter={() => {
                    if(isHoverDisabled === true) return null
                    setIsHovered(true)
                }}
                onMouseLeave={() => setIsHovered(false)}
                className={`
                    w-full h-full
                    bg-neutral-700/0
                    ${(isHoverDisabled === true) ? "": 
                        gradientHover}
                    ${rounded}
                    `}
            >
                <div className={`
                    w-full h-full ${textPadding}
                    ${(isHoverDisabled === true) ? "" :
                        "hover:bg-gradient-to-br from-violet-200/25 to-violet-200/0 to-60%"}
                    ${rounded}
                    flex justify-center items-center
                    ${iconDefaultColorTW}
                    ${(isHoverDisabled === true) ? "": 
                        iconHoverColorTW}
                    ${font}
                `}>
                    {text === "" && <Icon path={iconPath} size={iconSize} />}
                    {text !== "" && text}
                </div>
            </button>
        </div>

        {isHovered === false && <div className={`
            absolute z-10 w-full h-full p-[2px]
        `}>
            <div className={`w-full h-full ${iconDefaultBgColorTW} ${rounded}`} />
        </div>}
        {isHovered === false && <div className={`
            absolute z-0 w-full h-full 
            ${gradient} ${rounded}
        `} />}

    </div>
    )
}

export default ItemListButton