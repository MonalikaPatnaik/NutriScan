import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Html5QrcodePlugin from "./html";

import "./home.css";
const Home = () => {
  const [barcode, setBarcode] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {

    if (barcode) {
      fetch(`https://world.openfoodfacts.net/api/v2/product/${barcode}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status === 0) {
            // Display error toast message
            toast.error("No code or invalid code", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            return;
          }
          navigate(`/product/${barcode}`, {
            state: { productData: data.product },
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };
  const [uploadedImage, setUploadedImage] = useState(null);
  // const handleSearch = () => {
  //   // Implement your search logic based on the 'searchTerm'
  //   console.log(`Searching for: ${searchTerm}`);
  // };
  const handleInputChange = (event) => {
    // Update the barcode state when the input value changes
    setBarcode(event.target.value);
  };

  const handleKeyPress = (event) => {
    // Check if Enter key is pressed (key code 13) and trigger the search
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const onNewScanResult = (decodedText, decodedResult) => {
   
    fetch(`https://world.openfoodfacts.net/api/v2/product/${decodedText}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === 0) {
        // Display error toast message
        toast.error("No code or invalid code", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      navigate(`/product/${decodedText}`, {
        state: { productData: data.product },
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

};
  return (
    <>
      <div className="container">
        {/* <img src={bg}/> */}
        {/* <div className='search'> */}
        <h2 color="white">
          Enter the barcode of the product to see its Nutritional Value👇
        </h2>
        <input
          type="text"
          placeholder="Enter barcode..."
          value={barcode}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </button>
        <h2>OR</h2>
        {/* </div> */}

        {/* Image Upload Button */}
        <div className="App">
        <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
        />
    </div>
      </div>
    </>
  );
};

export default Home;