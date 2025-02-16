import './App.css';
import { useSelector } from 'react-redux';

import Canvas from './page/canvas.js';
import Sidebar from "./commponents/sidebar/index.js"

import Main from "./page/main.js"
import AllLists from './page/allLists.js';
import ShoppingList from './page/shoppingList.js';
import Members from './page/members.js';
import Detail from "./page/detail.js"
import ItemListButton from './commponents/itemListButton.js';
import BlankWorkspace from './page/blankWorkspace.js';

import { mdiContentSave, mdiContentSaveOff } from '@mdi/js';
import { changeSaveList } from './store/entities/reducer_database.js';
import BlankAllShoppingLists from './page/blankAllShoppingLists.js';

function App() {

  const currentAcc = useSelector(store => store.entities.accountReducer.selectedAcc)

  const pageId = useSelector(state => state.entities.pageReducer.pageId)
  const currentListID = useSelector(state => state.entities.shoppingListReducer.settings.id)
  const currentListItems = useSelector(state => state.entities.shoppingListReducer.items)
  const currentListMembers = useSelector(state => state.entities.shoppingListReducer.members)
  const currentListSettings = useSelector(state => state.entities.shoppingListReducer.settings)

  const pageMap = {
    0: <AllLists/>,
    1: <ShoppingList/>,
    2: <Members/>,
    3: <Detail/>
  }

  return (
    <Canvas>
      <div className='w-full h-full flex'>

        {/* Sidebar */}
        <div className='w-64 h-full border-e-2 border-neutral-600'>
          <Sidebar/>
        </div>

        {/* Page */}
        <div className='grow h-full flex flex-col'>
          {pageId === -1 && <Main/>}

          {pageId === 0 && currentAcc.id !== "" && pageMap[0]}
          {pageId > 0 && currentAcc.id !== "" && currentListID !== "" && pageMap[pageId]}

          {pageId === 0 && currentAcc.id === "" && <BlankAllShoppingLists/>}
          {pageId > 0 && (currentAcc.id === "" || currentListID === "") && <BlankWorkspace/>}


          {/* Save button */}
          {(pageId === 1 || pageId === 2 || pageId === 3) && currentListID !== "" &&
          <div className={`
            absolute z-10 top-0 right-0
            w-20 h-10 mr-2
          `}>
            <ItemListButton
              action={changeSaveList({
                id: currentListID,
                items: currentListItems,
                members: currentListMembers,
                settings: currentListSettings
              })}
              iconPath={(currentListID !== "") ? mdiContentSave : mdiContentSaveOff}
              iconDefaultBgColorTW="bg-neutral-800"
              rounded='rounded-md rounded-t-none'
              isButtonDisabled={currentListID === ""}
              isHoverDisabled={currentListID === ""}
            />
          </div>}
        </div>

      </div>
    </Canvas>
  );
}

export default App;