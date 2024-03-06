import axios from "axios";
import React, { useEffect, useState } from "react";
import "./productHome.scss";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  price_before_discount: number;
}
const ProductHome: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("http://localhost:3000/producthome");
      console.log(res.data);
      setProduct(res.data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <h3 className="myContainer-h3">Gợi Ý Hôm Nay</h3>
      <div className="myContainer">
        {product.map((product) => (
          <div key={product.id} className="myItem">
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.price.toLocaleString()}</p>
            <p>{product.price_before_discount.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductHome;
