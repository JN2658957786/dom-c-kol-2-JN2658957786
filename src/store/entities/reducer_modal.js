import { createSlice } from "@reduxjs/toolkit"

const initalStateObject = {
    modalId: -1,
    filter_arr: []
}

const slice = createSlice({
    name: "Modal",
    initialState: initalStateObject,
    reducers: {

        changeModalActiveId: (state, action) => {
            state.modalId = action.payload.id
        },

        changeModaFilterArr: (state, action) => {
            state.filter_arr = action.payload.arr
        },
    }
})

export const {
    changeModalActiveId,
    
    changeModaFilterArr
} = slice.actions;

export default slice.reducer