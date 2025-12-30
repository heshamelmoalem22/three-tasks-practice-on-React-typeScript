import { Provider } from "react-redux";
import { DUMMY_PRODUCTS } from "../dummyProudcts";
import Header3 from "./porject 3.tsx/Header3";
import Product from "./porject 3.tsx/Proudcts";
import Shop from "./porject 3.tsx/Shop";
import { store } from "../store 2/store";


export default function Cart() {
  return (
    <Provider store={store}>
      <div className="smallestBG" style={{backgroundColor:"black"}} >
      <Header3 />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li style={{background: "linear-gradient(rgb(0 0 0), rgb(0 0 0))", padding: "1rem", borderRadius: "4px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)"}} key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </div>
    </Provider>
  )
}
