import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart]=useState(false)
  function handleClick(){
    setIsInCart((isInCart)=>!isInCart)
  }

  const className = isInCart ? "in-cart" : ''
  const classNameButton = isInCart ? 'remove' : 'add'

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick ={handleClick} className={classNameButton}>{isInCart? 'Add to Cart': "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
