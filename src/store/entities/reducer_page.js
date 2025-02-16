import { createSlice } from "@reduxjs/toolkit"

const initalStateObject = {
    pageId: -1
}

const slice = createSlice({
    name: "ShoppingList",
    initialState: initalStateObject,
    reducers: {

        changePageID: (state, action) => {
            state.pageId = action.payload.id
        }

    }
})

export const {
    changePageID
} = slice.actions;

export default slice.reducer