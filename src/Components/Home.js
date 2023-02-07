import React, {useState} from 'react'
// import {useRef} from 'react'
import Menu from "./Menu";


export default function Home() {
 const [items, setItems] = useState(Menu);
 const filterItem = (cateItem) => {
    const updatedItems = Menu.filter((curElem) =>{
            return curElem.category === cateItem;
    });
    setItems(updatedItems);
 }
 
  return (
    <div className="container">
      <article className='heading'>MENU <p className='quote'>"Come on...Let's wake up the Bhukkad in you."</p> </article>
      
      
      <div className="menu-tabs-container">
      <button className="menu-button" onClick={() => setItems(Menu)}>All</button>
        <button className="menu-button" onClick={() => filterItem('breakfast')}>Breakfast</button>
        <button className="menu-button" onClick={() => filterItem('Lunch')}>Lunch</button>
        <button className="menu-button" onClick={() => filterItem('Dinner')}>Dinner</button>
      </div>
      <div className="daddy-flexbox">
      
      {
      items.map((elem) => {
        const {image, name, category, price, description } = elem;
        return(
          <div className="menu-container" id='menu-container'>
          <div className="img"><img src={image} alt={name} /></div>
          <div className="info">
            <article className='name'>{name}</article>
            <article className='category'>{category}</article>
            <p className='description'>{description}</p>
            <div className="order-container">
            <article className='price'>{price}</article>
            <button className='order-btn'>ORDER</button>
            </div>
            

          </div>
        </div>

        )
      })
      }
        
      </div>
      <div className="message" id='message'> Sorry! Currently Our services are unavailable.</div>
    </div>
  )
}
