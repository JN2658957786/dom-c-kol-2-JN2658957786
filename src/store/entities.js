import { combineReducers } from "@reduxjs/toolkit";

import shoppingListReducer from "./entities/reducer_shoppingList.js"
import modalReducer from "./entities/reducer_modal.js"
import accountReducer from "./entities/reducer_account.js"
import databaseReducer from "./entities/reducer_database.js"
import pageReducer from "./entities/reducer_page.js"

export default combineReducers({
    pageReducer,
    modalReducer,
    shoppingListReducer,
    accountReducer,
    databaseReducer
})