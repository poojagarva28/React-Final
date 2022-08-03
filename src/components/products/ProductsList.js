import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";

const ProductsList = () => {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, []);

  return (
    <div>
      <table>
        <thead>
          <th colspan="2">Product Name</th>
          <th>Unit Sold</th>
          <th>In Stock</th>
          <th colspan="2">Expire Date</th>
        </thead>
        <tbody>
          {productlist.map((item, i) => (
            <tr key={i}>
              <td id={i}>
                <input type="checkbox"></input>
              </td>
              <td>{item.name}</td>
              <td>{item.unitSold}</td>
              <td>{item.stock}</td>
              <td>{item.expireDate}</td>
              <td>
                <i className="fa fa-trash-o"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
