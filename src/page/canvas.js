import React from "react";
import { color } from "../config.js";
import Modals from "../modal/index.js"
import { useSelector } from "react-redux";

const Canvas = ({ children }) => {

    const modalId = useSelector(store => store.entities.modalReducer.modalId)

    return <>
        <div className={`
            w-screen h-screen
            ${color.bgColorTW}
            relative
        `}>
            {/* Modals */}
            {modalId !== -1 && 
            <div className="absolute z-10 w-full h-full overflow-hidden">
                <Modals />
            </div>}

            {/* App */}
            <div className="absolute z-0 w-screen h-screen">
                {children}
            </div>

        </div>
    </>
}

export default Canvas