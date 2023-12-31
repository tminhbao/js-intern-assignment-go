import CardCart from "./components/Card/CardCart/CardCart";
import CardProduct from "./components/Card/CardProduct/CardProduct";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-5 col-xl-4 col-xxl-4 col-md-6 col-12 pt-3 card-product-wrapper">
          <CardProduct />
        </div>
        <div className="col-lg-5 col-xl-4 col-xxl-4 col-md-6 col-12 pt-3 cart-wrapper">
          <CardCart />
        </div>
      </div>
    </div >
  );
}

export default App;
