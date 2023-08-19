import React, { useEffect, useState } from "react";
import axios from "axios";
import './Shoping.css'

function Shoping() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function PetProduct() {
      const ProductData = await axios.get("http://localhost:8000/product");
      setProduct(ProductData.data);
    }
    PetProduct();
  });

  return (
    <div className="container-fluid pt-5 bg-warning-subtle">
      <div class="row">
        {product.map((item) => (
          <div className="col-md-3">
            <div class="card d-flex justify-center shadow-sm mb-4 " >
              <div class="card-body mt-3 mb-3  p-2 ">
                <div className="bg-body pt-1">
                <img src={item.image} className="card-img-top " style={{"width":"30%"}}></img>
                </div>
                <h6 class="card-title">{item.title}</h6>
                <p class="card-title">{item.price}</p>
                <p class="card-title">{item.rating.rate}</p>
                <p class="card-text">{item.description}</p>
                <a href="#" class="btn btn-warning m-2">
                  Add to Cart
                </a>
                <a href="#" class="btn btn-success">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoping;
