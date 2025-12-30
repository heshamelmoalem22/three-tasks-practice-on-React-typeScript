import toast from "react-hot-toast";
import { type CartItem, addItemToCart,removeItemFromCart } from "../../store 2/cartSlice";
import { useCartDispatch, useCartSelector } from "../../store 2/hook";

export default function CartItems() {
  const dispatchCartModal=useCartDispatch();
  const cartItems=useCartSelector((state)=>state.cart.items);
  const totalPrice=cartItems.reduce((val,item)=>val+item.price*item.quantity,0);
  const formattedTotalPrice=totalPrice.toFixed(2);
  function handleAddToCart(item : CartItem){
    dispatchCartModal(addItemToCart(item))
  }
  function handleRemoveFromCart(id:string,title: string){
    dispatchCartModal(removeItemFromCart({id,title}))
  toast.error(
  <span>
    One {title} has been <span style={{ color: "red", fontWeight: "bold" }}>deleted</span>
  </span>,
  {
    style: {
      background: "linear-gradient(rgb(5 45 72 / 72%) , rgb(0 0 0))",
      color: "#fff",
      padding: "16px",
      borderRadius: "12px",
      fontSize: "14px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    icon: <span style={{ fontSize: "24px", backgroundColor:"red" ,borderRadius:"50%",padding:".5rem" }}>🗑️</span>,
  }
);

  }

  return (
    <div id="cart">
      {cartItems.length===0 && <p style={{fontFamily:"cursive"}}>No items in cart!</p>}

      <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                </div>
                  <span style={{color:"green"}}> ({formattedPrice})</span>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id,item.title)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>

       <p id="cart-total-price">
        Cart Total: <strong> $ {formattedTotalPrice}</strong>
      </p> 
    </div>
  );
}