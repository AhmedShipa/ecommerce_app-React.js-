import React, { useEffect, useState } from "react";
import style from "./RecentProducts.module.css";
import axios from "axios";

export default function RecentProducts() {
  const [products, setproducts] = useState([]);
  function getProducts() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then((res) => {
        setproducts(res.data.data);
      })
      .catch((res) => {});
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div key={product.id} className="w-1/6">
                <div className="product p-2 my-2">
                  <img src={product.imageCover} className="w-full" alt="" />
                  <h3 className="text-emerald-600">{product.category.name}</h3>
                  <h3 className="mb-1 font-semibold">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <div className="flex justify-between p-3">
                    <span>{product.price} EGP</span>
                    <span>
                      <i className="fas fa-star text-yellow-400"></i>{" "}
                      {product.ratingAverage}
                    </span>
                  </div>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="spinner"></div>
        )}
      </div>
    </>
  );
}
