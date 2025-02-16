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

import { mdiChevronLeft, mdiChevronRight, mdiContentSave, mdiContentSaveOff } from '@mdi/js';
import { changeSaveList } from './store/entities/reducer_database.js';
import BlankAllShoppingLists from './page/blankAllShoppingLists.js';
import { changeSidebarIsVisible } from './store/entities/reducer_page.js';
import { changeListToSaved } from './store/entities/reducer_shoppingList.js';

function App() {

  const currentAcc = useSelector(store => store.entities.accountReducer.selectedAcc) // eslint-disable-line

  const pageId = useSelector(state => state.entities.pageReducer.pageId) // eslint-disable-line
  const sidebarIsVisible = useSelector(state => state.entities.pageReducer.sidebarIsVisible) // eslint-disable-line

  const currentListID = useSelector(state => state.entities.shoppingListReducer.settings.id) // eslint-disable-line
  const currentListItems = useSelector(state => state.entities.shoppingListReducer.items) // eslint-disable-line
  const currentListMembers = useSelector(state => state.entities.shoppingListReducer.members) // eslint-disable-line
  const currentListSettings = useSelector(state => state.entities.shoppingListReducer.settings) // eslint-disable-line

  const isSaved = useSelector(state => state.entities.shoppingListReducer.isSaved) // eslint-disable-line

  const pageMap = {
    0: <AllLists/>,
    1: <ShoppingList/>,
    2: <Members/>,
    3: <Detail/>
  }

  return (
    <Canvas>
      <div className='w-full h-full flex relative'>

        {/* Sidebar */}
        {sidebarIsVisible === true &&<div className={`
          xl:static absolute xl:z-0 z-30 w-64 h-full
          border-e-2 border-neutral-600
          bg-neutral-800
        `}>
           <Sidebar/>
        </div>}


        {/* Page */}
        <div className='grow h-full flex flex-col relative'>
          {pageId === -1 && <Main/>}

          {pageId === 0 && currentAcc.id !== "" && pageMap[0]}
          {pageId > 0 && currentAcc.id !== "" && currentListID !== "" && pageMap[pageId]}

          {pageId === 0 && currentAcc.id === "" && <BlankAllShoppingLists/>}
          {pageId > 0 && (currentAcc.id === "" || currentListID === "") && <BlankWorkspace/>}



          {/* show/hide Sidebar (Button) */}
          <div className={`
            absolute z-10 top-0 xl:left-0
            ${(sidebarIsVisible === true) ? "left-64" : "left-0"}
            w-10 h-10 mt-2
          `}>
            <ItemListButton
              action={changeSidebarIsVisible({isVisible: (sidebarIsVisible === true) ? false : true})}
              className="absolute z-0"
              iconPath={(sidebarIsVisible === true) ? mdiChevronLeft : mdiChevronRight}
              iconDefaultBgColorTW="bg-neutral-800"
              rounded='rounded-e-md rounded-t-none'
            />
          </div>

          {/* Save button */}
          {(pageId === 1 || pageId === 2 || pageId === 3) && currentListID !== "" &&
          <div className={`
            absolute z-10 top-0 right-0
            w-20 h-[calc(4*10px+6px)] mr-2
            flex flex-col items-center
          `}>
            <ItemListButton
              action={[
                changeSaveList({
                  id: currentListID,
                  items: currentListItems,
                  members: currentListMembers,
                  settings: currentListSettings
                }),
                changeListToSaved()
              ]}
              iconPath={(currentListID !== "") ? mdiContentSave : mdiContentSaveOff}
              iconDefaultBgColorTW="bg-neutral-800"
              iconDefaultColorTW={(isSaved === true) ? "text-green-600" : "text-neutral-500"}
              rounded='rounded-b-md'
              isButtonDisabled={currentListID === ""}
              isHoverDisabled={currentListID === ""}
            />
            <div className={`
              w-16 h-[2px] mt-1
              ${(isSaved === true) ? "bg-green-600" : ""}
            `} />
          </div>}
        </div>

      </div>
    </Canvas>
  );
}

export default App;