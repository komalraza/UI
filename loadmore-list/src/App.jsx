import { useEffect, useState } from "react";
import "./App.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={product?.image} alt="" />
      </div>
      <div className="product-content">
        <h4>{product.title}</h4>
        <p>${product?.price}</p>
      </div>
    </div>
  );
};

function App() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((json) => setProducts(json.reverse()));
    };

    fetchProducts();
    return () => {};
  }, []);

  const handleMoreImage = () => {
    setLimit(limit + 5);
  };

  console.log(products);
  return (
    <>
      <div className="container">
        {products?.slice(0, limit)?.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
      <div className="loadButton">
      {limit < products?.length && (
        <button onClick={handleMoreImage}>Load more</button>
      )}
      </div>
    </>
  );
}

export default App;
