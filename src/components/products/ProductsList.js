import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";

const ProductsList = () => {
  const [productlist, setProductlist] = useState([]);
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, [selected]);

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

  const checkboxHandler = (e) => {
    if (e.target.checked) {
      setChecked(true);
      setSelected([...selected, e.target.id]);
    }
    if (!e.target.checked) {
      setChecked(false);
      selected.splice(selected.indexOf(e.target.id), 1);
      setSelected(selected);
    }
  };

  const selectedDeleteHandler = () => {
    let checkboxAfterDelete = productlist.filter(
      (item) => !selected.includes(item.name)
    );
    // console.log(checkboxToDelete);

    let obj = JSON.parse(localStorage.getItem("productsPage"));
    obj = {
      ...obj,
      products: checkboxAfterDelete,
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
                  <input
                    type="checkbox"
                    id={item.name}
                    value={checked}
                    onChange={checkboxHandler}
                  ></input>
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
      <button className="btn" onClick={selectedDeleteHandler}>
        Delete Selected Products
      </button>
    </div>
  );
};

export default ProductsList;
