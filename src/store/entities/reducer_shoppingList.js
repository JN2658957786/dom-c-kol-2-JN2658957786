import { createSlice } from "@reduxjs/toolkit"

const initalStateObject = {
    selectedItem: {
        id: "",
        name: '',
        cost: 0,
        costType: 'None',
        count: 0,
        dsc: '',
        state: 0
    },
    selectedMember: {
        id: "",
        name: "",
        isOwner: false
    },
    items: [],
    members: [],
    settings: {
        id: "",
        name: "",
        dsc: "",
        owner: "",
        filterState: 0,
        filter: {
            0: true,
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
        }
    }
}

const slice = createSlice({
    name: "ShoppingList",
    initialState: initalStateObject,
    reducers: {

        // Items
        changeItem: (state, action) => {
            const index = state.items.findIndex((e) => {return e.id === action.payload.id})
            const item = action.payload.item

            // if item changes state to inactive filter => activate this filter
            if(state.settings.filter[item.state] === false) {
                state.settings.filter = {...state.settings.filter, [item.state]: true}
            }

            // if item cost or count == null => store as 0
            let tempItem = {...item}
            if(JSON.stringify(item.cost) === "null") tempItem = {...tempItem, cost: 0}
            if(JSON.stringify(item.count) === "null") tempItem = {...tempItem, count: 0}

            // store updated item
            state.selectedItem = item
            state.items[index] = tempItem
        },
        changeItems: (state, action) => {
            state.items = action.payload.items
        },

        changeSelectedItemById: (state, action) => {
            state.selectedItem = state.items.find((e) => {return e.id === action.payload.id})
        },
        changeSelectedItemToDefault: (state, action) => {
            state.selectedItem = {
                id: "",
                name: '',
                cost: 0,
                costType: 'None',
                count: 0,
                dsc: '',
                state: 0
            }
        },

        changeAddItem: (state, action) => {
            // generate a new ID
            let newID = Math.round(Math.random() * 9)
            for (let i = 0; i < 15; i++) {
                newID = 10 * newID + Math.round(Math.random() * 9)
            }
            newID = JSON.stringify(newID)

            // object of new item
            const newItemObj = {
                id: newID,
                name: "new Item",
                cost: 0,
                costType: 'None',
                count: 0,
                dsc: '',
                state: 0
            }

            // store new item as last
            state.settings.filter = {...state.settings.filter, "0": true}
            state.items.push({...newItemObj})
            state.selectedItem = {...newItemObj}
        },
        changeAddItemIsAfter: (state, action) => {
            // get update index with id of selected item
            const index = state.items.findIndex((e) => {return e.id === action.payload.id})
            let tempIndex = index
            if(action.payload.isAfter === true) tempIndex = index + 1

            // generate a new ID
            let newID = Math.round(Math.random() * 9)
            for (let i = 0; i < 15; i++) {
                newID = 10 * newID + Math.round(Math.random() * 9)
            }
            newID = JSON.stringify(newID)

            // object of new item
            const newItemObj = {
                id: newID,
                name: "new Item",
                cost: 0,
                costType: 'None',
                count: 0,
                dsc: '',
                state: 0
            }

            // update item list
            const newItemList = [
                ...state.items.slice(0, tempIndex),
                {...newItemObj},
                ...state.items.slice(tempIndex)
            ]

            // store new item list
            state.settings.filter = {...state.settings.filter, "0": true}
            state.items = [...newItemList]
            state.selectedItem = {...newItemObj}
        },
        changeItemRemove: (state, action) => {
            const index = state.items.findIndex((e) => {return e.id === action.payload.id})
            if (index > -1) {
                state.items.splice(index, 1)

                state.selectedItem = {
                    id: "",
                    name: "",
                    isOwner: false
                }
            }
        },


        // Members
        changeMember: (state, action) => {
            const index = state.items.findIndex((e) => {return e.id === action.payload.id})
            state.members[index] = action.payload.member
        },
        changeMembers: (state, action) => {
            state.members = action.payload.members
        },

        changeSelectedMemberById: (state, action) => {
            state.selectedMember = state.members.find((e) => {return e.id === action.payload.id})
        },
        changeSelectedMemberToDefault: (state, action) => {
            state.selectedMember = {
                id: "",
                name: "",
                isOwner: false
            }
        },

        changeAddMember: (state, action) => {
            // generate a new ID
            let newID = Math.round(Math.random() * 9)
            for (let i = 0; i < 15; i++) {
                newID = 10 * newID + Math.round(Math.random() * 9)
            }
            newID = JSON.stringify(newID)

            // object of new member
            const newMemberObj = {
                id: newID,
                name: 'new Member',
                isOwner: false
            }

            state.members.push({...newMemberObj})
            state.selectedMember = {...newMemberObj}
        },
        changeAddMemberIsAfter: (state, action) => {
            // get update index with id of selected item
            const index = state.members.findIndex((e) => {return e.id === action.payload.id})
            let tempIndex = index
            if(action.payload.isAfter === true) tempIndex = index + 1

            // generate a new ID
            let newID = Math.round(Math.random() * 9)
            for (let i = 0; i < 15; i++) {
                newID = 10 * newID + Math.round(Math.random() * 9)
            }
            newID = JSON.stringify(newID)

            // object of new item
            const newMemberObj = {
                id: newID,
                name: 'new Member',
                isOwner: false
            }

            // update item list
            const newMemberList = [
                ...state.members.slice(0, tempIndex),
                {...newMemberObj},
                ...state.members.slice(tempIndex)
            ]

            // store new item list
            state.members = [...newMemberList]
            state.selectedMember = {...newMemberObj}
        },
        changeMemberRemove: (state, action) => {

            const index = state.members.findIndex((e) => {return e.id === action.payload.id})
            if (index > -1) {
                state.members.splice(index, 1)

                state.selectedMember = {
                    id: "",
                    name: "",
                    isOwner: false
                }
            }
        },


        // Settings
        changeFilter: (state, action) => {
            // set new filter
            const newFilter = action.payload.filter
            state.settings.filter = {...newFilter}


            // get array of filter values
            const stateArr = Object.values(state.settings.filter)

            // are filters all true or all false?
            let isAllTrue = !stateArr.some((e) => e !== true)
            let isAllFalse = !stateArr.some((e) => e !== false)

            // set filter state based on all values of filters
            if(isAllTrue && !isAllFalse) state.settings.filterState = 1
            if(isAllFalse && !isAllTrue) state.settings.filterState = -1
            if(!isAllFalse && !isAllTrue) state.settings.filterState = 0


            // if state of current item is not visible by new filter => current item to default
            if(newFilter[state.selectedItem.state] === false){
                state.selectedItem = {
                    id: "",
                    name: '',
                    cost: NaN,
                    costType: 'None',
                    count: NaN,
                    dsc: '',
                    state: 0
                }
            }
        },
        changeAllFilter: (state, action) => {
            // get current filter
            const currentFilter = state.settings.filterState

            // if are all filters active => set all filters to inactive
            if(currentFilter === 1) {
                state.settings.filter = {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                }
                state.settings.filterState = -1
            }

            // if some filters are inactive => set all filters to active
            if(currentFilter === -1 || currentFilter === 0) {
                state.settings.filter = {
                    0: true,
                    1: true,
                    2: true,
                    3: true,
                    4: true,
                    5: true,
                }
                state.settings.filterState = 1
            }
        },

        changeListName: (state, action) => {
            state.settings.name = action.payload.name
        },
        changeListDsc: (state, action) => {
            state.settings.dsc = action.payload.dsc
        },


        // Other
        changeListToDefault: (state, action) => {
            state.selectedItem = {
                id: "",
                name: '',
                cost: 0,
                costType: 'None',
                count: 0,
                dsc: '',
                state: 0
            }
            state.selectedMember = {
                id: "",
                name: "",
                isOwner: false
            }

            state.items = []
            state.members = []

            state.settings = {
                id: "",
                name: "",
                dsc: "",
                owner: "",
                filterState: 0,
                filter: {
                    0: true,
                    1: true,
                    2: true,
                    3: true,
                    4: true,
                    5: true,
                }
            }
        },
        changeListSettingsToDefault: (state, action) => {
            state.settings = {
                id: "",
                name: "",
                dsc: "",
                owner: "",
                filterState: 0,
                filter: {
                    0: true,
                    1: true,
                    2: true,
                    3: true,
                    4: true,
                    5: true,
                }
            }
        },
        changeListLoad: (state, action) => {
            state.items = action.payload.items
            state.members = action.payload.members
            state.settings = action.payload.settings
        }
        

    }
})

export const {
    // Items
    changeItem,
    changeItems,
    
    changeSelectedItemById,
    changeSelectedItemToDefault,

    changeAddItem,
    changeAddItemIsAfter,
    changeItemRemove,


    // Members
    changeMember,
    changeMembers,

    changeSelectedMemberById,
    changeSelectedMemberToDefault,

    changeMemberRemove,
    changeAddMember,
    changeAddMemberIsAfter,


    // Settings
    changeFilter,
    changeAllFilter,
    
    changeListName,
    changeListDsc,


    // Other
    changeListToDefault,
    changeListSettingsToDefault,
    changeListLoad

} = slice.actions;

export default slice.reducer