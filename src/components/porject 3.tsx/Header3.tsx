import { useEffect, useRef, useState } from 'react';
import Cart3 from './CartShop.tsx';
import { useCartSelector } from '../../store 2/hook.ts';
import toast from 'react-hot-toast';

export default function Header3() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const itemQuantity=useCartSelector((state)=>state.cart.items.reduce((val,item)=>val+item.quantity,0))
  const prevQuantity = useRef(itemQuantity);
  const lastSelected=useCartSelector((state)=>state.cart.lastAddedItem)

  useEffect(() => {
    if (!lastSelected) return;
     if (itemQuantity === 0) {
    prevQuantity.current = 0;
    return;
  }
  if(itemQuantity>prevQuantity.current){
    toast.success(`${lastSelected?.title} added to cart! 🛒`);
  }
  prevQuantity.current = itemQuantity;
  }, [itemQuantity,lastSelected]);

  function handleOpenCartClick() {
    setCartIsVisible(true);

  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart3 onClose={handleCloseCartClick} />}
      <nav className="header3">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Redux Task</h1>
        </div>
        
          <button onClick={handleOpenCartClick}>Cart ({itemQuantity})</button>
        
      </nav>
    </>
  );
}