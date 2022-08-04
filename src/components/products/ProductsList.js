import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";

const ProductsList = () => {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, []);

  const deleteHandler = (e) => {
    console.log(e.target.id);
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    let productsData = obj["products"];

    let productsAfterDelete = productsData.filter(
      (item) => item.name !== e.target.id
    );
    obj = {
      ...obj,
      products: productsAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  };

  return (
    <div>
      <div className={styles.tablebody}>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Product Name</th>
              <th>Unit Sold</th>
              <th>In Stock</th>
              <th colSpan="2">Expire Date</th>
            </tr>
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
                  <i
                    className="fa fa-trash-o"
                    id={item.name}
                    onClick={deleteHandler}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn">Add New Product</button>
      <button className="btn">Delete Selected Products</button>
    </div>
  );
};

export default ProductsList;
