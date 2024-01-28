import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import translate from 'google-translate-api';

const Product = () => {
  const { state } = useLocation();
  const { productData } = state;
  const [translatedCategories, setTranslatedCategories] = useState('');

  // useEffect(() => {
  //   const translateCategories = async () => {
  //     if (productData && productData.categories) {
  //       try {
  //         const result = await translate(productData.categories, { from: 'fr', to: 'en' });
  //         setTranslatedCategories(result.text);
  //       } catch (error) {
  //         console.error('Error translating categories:', error);
  //         setTranslatedCategories(productData.categories); // fallback to original if translation fails
  //       }
  //     }
  //   };

  //   translateCategories();
  // }, [productData]);

  if (!productData) {
    // Handle case where productData is not available
    return <div>No product data available</div>;
  }

  const { image_front_url, categories, productName, _id, ingredients } = productData;

  return (
    <div style={containerStyle}>
      {/* Product Image */}
      <div style={imageContainerStyle}>
        <img src={image_front_url} alt="Product" style={imageStyle} />
      </div>

      {/* Product Details */}
      <div style={detailsContainerStyle}>
        <h2>{productName}</h2>
        <p style={infoStyle}>Categories: {categories}</p>
        <p style={infoStyle}>Barcode: {_id}</p>
        <p style={infoStyle}>Ingredients: {ingredients.map(ingredient => ingredient.text).join(', ')}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
};

const imageContainerStyle = {
  marginRight: '20px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

const detailsContainerStyle = {
  flex: 1,
};

const infoStyle = {
  margin: '8px 0',
};

export default Product;
