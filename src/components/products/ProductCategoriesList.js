import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";

const ProductCategoriesList = () => {
  const [productcategories, setProductCategories] = useState([]);

  useEffect(() => {
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  }, []);

  console.log(productcategories);

  return (
    <div className={styles.catcontainer}>
      <h2>Product Categories</h2>
      <table>
        <tbody>
          {productcategories.map((item) => (
            <tr>
              <td>{item}</td>
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

export default ProductCategoriesList;
