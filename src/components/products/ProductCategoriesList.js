import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";

const ProductCategoriesList = () => {
  const [productcategories, setProductCategories] = useState([]);
  let obj = JSON.parse(localStorage.getItem("productsPage"));

  const deleteHandler = (e) => {
    let categoriesData = JSON.parse(localStorage.getItem("productsPage"))[
      "categories"
    ];
    categoriesData.splice(categoriesData.indexOf(e.target.id), 1);
    obj = {
      ...obj,
      categories: categoriesData,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));
  };
  useEffect(() => {
    console.log("useeffect called ");
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  }, []);

  return (
    <div className={styles.catcontainer}>
      <h2>Product Categories</h2>
      <table>
        <tbody>
          {productcategories.map((item, i) => (
            <tr key={i}>
              <td>{item}</td>
              <td>
                <i
                  className="fa fa-trash-o"
                  id={item}
                  onClick={deleteHandler}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCategoriesList;
