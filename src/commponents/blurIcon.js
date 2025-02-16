import React from 'react'
import Icon from '@mdi/react'
import { color } from '../config'

const BlurIcon = ({
    icon,
    size = 1,
    primaryColor = color.primaryHEX,
    shadowColor = color.iconShadowHEX,
    blur = "blur-md"
}) => {
    return (
        <>
            <div className={`
                relative flex
            `}>
                <div className='z-10'>
                    <Icon path={icon} size={size} color={primaryColor} />
                </div>
                <div className={`absolute z-0 ${blur}`}>
                    <Icon path={icon} size={size} color={shadowColor} />
                </div>
            </div>
        </>
    )
}

export default BlurIcon