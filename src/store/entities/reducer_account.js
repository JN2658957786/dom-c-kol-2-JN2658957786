import { createSlice } from "@reduxjs/toolkit"

const initalStateObject = {
    selectedAcc: {
        id: "",
        name: ""
    },
    accounts: [
        { id: "9809889725213598", name: "owner1"},
        { id: "2876114036701286", name: "member1"},
        { id: "3029846138010644", name: "member2"}
    ]
}

const slice = createSlice({
    name: "ShoppingList",
    initialState: initalStateObject,
    reducers: {

        changeAccAdd: (state, action) => {
            state.accounts.push(action.payload.acc)
        },
        changeAccRemove: (state, action) => {
            const index = state.accounts.findIndex((e) => {return e.id === action.payload.id})
            if (index > -1) {
                state.accounts.splice(index, 1)
              }
        },

        changeAccSelect: (state, action) => {
            const newAcc = state.accounts.find((e) => {return e.id === action.payload.id})
            state.selectedAcc = {...newAcc}
        },
        changeAccSelectToDefault: (state, action) => {
            state.selectedAcc = {
                id: "",
                name: "",
                isOwner: false
            }
        }
    }
})

export const {
    changeAccAdd,
    changeAccRemove,

    changeAccSelect,
    changeAccSelectToDefault
} = slice.actions;

export default slice.reducer