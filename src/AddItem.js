import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ( {newItem, setnewItem, handlesubmit} ) => {
  return (
    <form className='addForm' onSubmit={handlesubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
           autoFocus
           id='addItem'
           type='text'
           placeholder='add item'
           required
           value={newItem}
           onChange = {(e) => setnewItem(e.target.value)}
           /> 

        <button 
           type='submit'
           aria-label='add item'
           >
               <FaPlus />
        </button>       

        </form>

  )
}

export default AddItem