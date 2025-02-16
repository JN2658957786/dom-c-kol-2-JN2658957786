import React from 'react'

const TextDisplay = ({ children, other }) => {

    return (
        <div className={`
            w-full h-full
        `}>
            <div className={`w-1 h-full ${other}`}>
                {children}
            </div>
        </div>
    )
}

export default TextDisplay