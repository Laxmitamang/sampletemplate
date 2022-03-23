import React from 'react';
import ListItem from './ListItem';

const Content = ({items,handlecheck,handledelete}) => {
    

   
  /*  const randomname = () => {
        const name = ['lazmi', 'ram', 'prabu'];
        const int = Math.floor(Math.random() * 3);
        setName(name[int]);
      }  
      const handle1 = () => {
          setCount(count + 1)
          setCount(count + 1)
          console.log(count)
      }   

      const handle2 = (name1) => {
          console.log(count)
      } 
          const handle3 = (e) => {
          console.log(e.target.innerText)
      }      */       
  return ( 
  <main>
      {items.length ? (
          <ListItem
          items={items}
          handlecheck={handlecheck}
          handledelete={handledelete}
           />
         ):(
             <p>it is empty</p>
         )
         }   
  </main>
  )
};

export default Content;
