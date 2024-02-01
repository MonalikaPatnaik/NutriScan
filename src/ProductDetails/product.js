import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./product.css";

const Product = () => {
  const { state } = useLocation();
  const { productData } = state;
  const {
    image_front_url,
    categories_hierarchy,
    generic_name,
    _id,
    ingredients_hierarchy,
    ecoscore_tags,
    nutriscore_data,
  } = productData;
  return (
    <>
      <Link
        style={{
          textAlign: "left",
          fontSize: "2rem",
          margin: "7px",
        }}
        to="/"
      >
        <i class="fa-solid fa-angle-left"></i>
        Back
      </Link>
      <div className="container">
        <div
          className="heading"
          style={{
            fontSize: "50px",
          }}
        >
          Nutritional Information
        </div>
        <div className="newContainer">
          <div className="first-container">
            <div className="first-right ImgWrap">
              <img src={image_front_url} alt="front_photo" />
            </div>
            <div className="first-left">
              <h1 className="para-heading">{generic_name}</h1>
              <ul>
                <li>
                  <b> Barcode:</b> {_id} (EAN_13 format)
                </li>
                {ingredients_hierarchy && ingredients_hierarchy.length > 0 &&
                (<li>
                  
                  <b>Categories:</b>
                  {categories_hierarchy
                    .map((category) =>
                      category.replace(/^en:/, "").replace(/-/g, " ")
                    )
                    .join(", ")}
                </li>)
}
                {ingredients_hierarchy && ingredients_hierarchy.length > 0 && (
                  <li>
                    <b>Ingredients: </b>
                    {ingredients_hierarchy
                    .map((ingredient) =>
                      ingredient.replace(/^en:/, "").replace(/-/g, " ")
                    )
                    .join(", ")}
                  </li>
                )}

                {ecoscore_tags && (
                  <li>
                    <b>Ecoscore:</b> {ecoscore_tags}
                  </li>
                )}

                {nutriscore_data && nutriscore_data.grade && (
                  <li>
                    <b>Nutriscore:</b> {nutriscore_data.grade}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
