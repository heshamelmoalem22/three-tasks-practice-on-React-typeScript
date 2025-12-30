import { createPortal } from 'react-dom';

import CartItems from './CartItems';

export type CartProps = {
  onClose: () => void;
};

export default function Cart3({ onClose }: CartProps) {
  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Your Cart</h2>
        <CartItems />
        <p id="cart-actions">
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}