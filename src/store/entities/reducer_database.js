import { createSlice } from "@reduxjs/toolkit"

const initalStateObject = {
    shoppingLists: [
        {"6624568577420331": {
            items: [
                {
                    id: "7731418371584164",
                    name: 'banány',
                    cost: 38,
                    costType: 'CZK',
                    count: 3,
                    dsc: '1Kg',
                    state: 2
                },
                {
                    id: "1821274833348776",
                    name: 'čokoláda',
                    cost: 0,
                    costType: 'CZK',
                    count: 10,
                    dsc: 'neznám cenu',
                    state: 0
                },
                {
                    id: "7884625049618375",
                    name: 'Mandarinky',
                    cost: 57,
                    costType: 'CZK',
                    count: 2,
                    dsc: '1Kg',
                    state: 3
                },
                {
                    id: "8805218657292235",
                    name: 'jablka',
                    cost: 33,
                    costType: 'CZK',
                    count: 5,
                    dsc: '1Kg',
                    state: 1
                },
                {
                    id: "5687226121026338",
                    name: 'máslo',
                    cost: 65,
                    costType: 'CZK',
                    count: 2,
                    dsc: '1sk',
                    state: 5
                },
                {
                    id: "7251761717454611",
                    name: 'olej',
                    cost: 39,
                    costType: 'CZK',
                    count: 1,
                    dsc: '1ks',
                    state: 4
                }
            ],
            members: [
                { id: "9809889725213598", name: "owner1", isOwner: true },
                { id: "2876114036701286", name: "member1", isOwner: false },
                { id: "3029846138010644", name: "member2", isOwner: false },
                { id: "7669290044133612", name: "member3", isOwner: false },
                { id: '2350782271550000', name: "member4", isOwner: false },
                { id: "8954628980493026", name: "member5", isOwner: false }
            ],
            settings: {
                id: "6624568577420331",
                name: "New shopping list 1",
                dsc: "This is a new shopping list",
                owner: "9809889725213598",
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
        }},
        {"6298432779858397": {
            items: [
                {
                    id: "7731418371584164",
                    name: 'banány',
                    cost: 38,
                    costType: 'CZK',
                    count: 3,
                    dsc: '1Kg',
                    state: 2
                },
                {
                    id: "1821274833348776",
                    name: 'čokoláda',
                    cost: 0,
                    costType: 'CZK',
                    count: 10,
                    dsc: 'neznám cenu',
                    state: 0
                },
                {
                    id: "7884625049618375",
                    name: 'Mandarinky',
                    cost: 57,
                    costType: 'CZK',
                    count: 2,
                    dsc: '1Kg',
                    state: 3
                },
                {
                    id: "8805218657292235",
                    name: 'jablka',
                    cost: 33,
                    costType: 'CZK',
                    count: 5,
                    dsc: '1Kg',
                    state: 1
                },
                {
                    id: "5687226121026338",
                    name: 'máslo',
                    cost: 65,
                    costType: 'CZK',
                    count: 2,
                    dsc: '1sk',
                    state: 5
                },
                {
                    id: "7251761717454611",
                    name: 'olej',
                    cost: 39,
                    costType: 'CZK',
                    count: 1,
                    dsc: '1ks',
                    state: 4
                }
            ],
            members: [
                { id: "9809889725213598", name: "owner1", isOwner: true },
                { id: "2876114036701286", name: "member1", isOwner: false },
                { id: "3029846138010644", name: "member2", isOwner: false },
                { id: "7669290044133612", name: "member3", isOwner: false },
                { id: '2350782271550000', name: "member4", isOwner: false },
                { id: "8954628980493026", name: "member5", isOwner: false }
            ],
            settings: {
                id: "6298432779858397",
                name: "New shopping list 2",
                dsc: "This is a new shopping list",
                owner: "9809889725213598",
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
        }},
        {"0645573409612077": {
            items: [
                {
                    id: "7731418371584164",
                    name: 'banány',
                    cost: 38,
                    costType: 'CZK',
                    count: 3,
                    dsc: '1Kg',
                    state: 2
                },
                {
                    id: "1821274833348776",
                    name: 'čokoláda',
                    cost: 0,
                    costType: 'CZK',
                    count: 10,
                    dsc: 'neznám cenu',
                    state: 0
                },
                {
                    id: "7884625049618375",
                    name: 'Mandarinky',
                    cost: 57,
                    costType: 'CZK',
                    count: 2,
                    dsc: '1Kg',
                    state: 3
                },
                {
                    id: "8805218657292235",
                    name: 'jablka',
                    cost: 33,
                    costType: 'CZK',
                    count: 5,
                    dsc: '1Kg',
                    state: 1
                },
                {
                    id: "5687226121026338",
                    name: 'máslo',
                    cost: 65,
                    costType: 'CZK',
                    count: 2,
                    dsc: '1sk',
                    state: 5
                },
                {
                    id: "7251761717454611",
                    name: 'olej',
                    cost: 39,
                    costType: 'CZK',
                    count: 1,
                    dsc: '1ks',
                    state: 4
                }
            ],
            members: [
                { id: "9809889725213598", name: "owner1", isOwner: true },
                { id: "2876114036701286", name: "member1", isOwner: false },
                { id: "3029846138010644", name: "member2", isOwner: false },
                { id: "7669290044133612", name: "member3", isOwner: false },
                { id: '2350782271550000', name: "member4", isOwner: false },
                { id: "8954628980493026", name: "member5", isOwner: false }
            ],
            settings: {
                id: "0645573409612077",
                name: "New shopping list 3",
                dsc: "This is a new shopping list",
                owner: "9809889725213598",
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
        }},
        {"3252513515462078": {
            items: [
                {
                    id: "7731418371584164",
                    name: 'banány',
                    cost: 38,
                    costType: 'CZK',
                    count: 3,
                    dsc: '1Kg',
                    state: 2
                },
                {
                    id: "1821274833348776",
                    name: 'čokoláda',
                    cost: 0,
                    costType: 'CZK',
                    count: 10,
                    dsc: 'neznám cenu',
                    state: 0
                },
                {
                    id: "7884625049618375",
                    name: 'Mandarinky',
                    cost: 57,
                    costType: 'CZK',
                    count: 2,
                    dsc: '1Kg',
                    state: 3
                },
                {
                    id: "8805218657292235",
                    name: 'jablka',
                    cost: 33,
                    costType: 'CZK',
                    count: 5,
                    dsc: '1Kg',
                    state: 1
                },
                {
                    id: "5687226121026338",
                    name: 'máslo',
                    cost: 65,
                    costType: 'CZK',
                    count: 2,
                    dsc: '1sk',
                    state: 5
                },
                {
                    id: "7251761717454611",
                    name: 'olej',
                    cost: 39,
                    costType: 'CZK',
                    count: 1,
                    dsc: '1ks',
                    state: 4
                }
            ],
            members: [
                { id: "9809889725213598", name: "owner1", isOwner: true },
                { id: "2876114036701286", name: "member1", isOwner: false },
                { id: "3029846138010644", name: "member2", isOwner: false },
                { id: "7669290044133612", name: "member3", isOwner: false },
                { id: '2350782271550000', name: "member4", isOwner: false },
                { id: "8954628980493026", name: "member5", isOwner: false }
            ],
            settings: {
                id: "3252513515462078",
                name: "New shopping list 4",
                dsc: "This is a new shopping list",
                owner: "9809889725213598",
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
        }},
    ]
}

const slice = createSlice({
    name: "ShoppingList",
    initialState: initalStateObject,
    reducers: {

        changeSaveList: (state, action) => {
            const index = state.shoppingLists.findIndex((e) => Object.keys(e)[0] === action.payload.id )
            
            state.shoppingLists[index] = {
                [action.payload.id]: {
                    items: action.payload.items,
                    members: action.payload.members,
                    settings: action.payload.settings
                }
            }
        },

        changeDeleteList: (state, action) => {
            const index = state.shoppingLists.findIndex((e) => Object.keys(e)[0] === action.payload.id )
            state.shoppingLists.splice(index, 1)
        }

    }
})

export const {
    changeSaveList,
    changeDeleteList
} = slice.actions;

export default slice.reducer