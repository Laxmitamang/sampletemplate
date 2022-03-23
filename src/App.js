
import './App.css';
import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react';

function App() {
  const[items, setItems] = useState(JSON.parse(localStorage.getItem('shopping')));
 
const [newItem, setnewItem] = useState('')

const [search, setSearch] = useState('')

const setAndSaveItems = (newItems) => {
  setItems(newItems);
  localStorage.setItem('shopping', JSON.stringify(newItems))
}

const addItem = (item) => {
   const id = items.length ? items[items.length - 1 ].id + 1 : 1;
   const myNewItem = {id, checked:false, item}
   const listItems = [...items, myNewItem ]
   setAndSaveItems(listItems)
}

const handlecheck =  (id) => {
  const itemlist = items.map((item) => item.id === id ? { ...item, 
      checked: !item.checked } : item);
  setAndSaveItems(itemlist);
}
const handledelete = (id) => {
   const itemlist = items.filter((item) => item.id !== id );
   setAndSaveItems(itemlist);
}

const handlesubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem); 
  
}
  
  return (
    <div className="App">
      <Header />
      
      <AddItem 
        newItem = {newItem}
        setnewItem = {setnewItem}
        handlesubmit = {handlesubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />

       <Content 
       items = {items.filter(item => ((item.item).toLowerCase()).includes
        (search.toLowerCase()))}
       handlecheck = {handlecheck}
       handledelete = {handledelete}
       />
       <Footer 
       length = {items.length}
       />
    </div>
  );
}

export default App;
