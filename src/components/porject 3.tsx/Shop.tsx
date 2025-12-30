import { type ReactNode } from 'react';

type ShopProps = {
  children: ReactNode;
};

export default function Shop({ children }: ShopProps) {
  return (
    <section id="shop">
      <h2 style={{color:"white"}}>Suits For Everyone 🤵 🧥</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}