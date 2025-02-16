import React from 'react'
import { mdiAccountCircle } from '@mdi/js';

import BlurIcon from '../blurIcon.js';
import BlurText from "../blurText.js"
import { useDispatch, useSelector } from 'react-redux';
import { changeModalActiveId } from '../../store/entities/reducer_modal.js';

const Account = () => {

  const dispatch = useDispatch()

  const currentAcc = useSelector(store => store.entities.accountReducer.selectedAcc)

return (
  <button
  onClick={() => dispatch(changeModalActiveId({id: 3}))}
  className={`
    w-full h-full px-3 py-1
    flex items-center
  `}>
    <BlurIcon icon={mdiAccountCircle} size={1.45} />

    <BlurText
      text={(currentAcc.id !== "") ? currentAcc.name : "Account"}
      font='font-semibold'
      other='pl-2'
    />

  </button>
  )
}

export default Account