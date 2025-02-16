import { createSlice } from "@reduxjs/toolkit"

const initalStateObject = {
    pageId: -1,
    sidebarIsVisible: true,
}

const slice = createSlice({
    name: "Page",
    initialState: initalStateObject,
    reducers: {

        changePageID: (state, action) => {
            state.pageId = action.payload.id
        },
        changeSidebarIsVisible: (state, action) => {
            state.sidebarIsVisible = action.payload.isVisible
        },
    }
})

export const {
    changePageID,

    changeSidebarIsVisible,
} = slice.actions;

export default slice.reducer