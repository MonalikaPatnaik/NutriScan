# NutriScan

NutriScan is a web application that provides nutritional information ( such as Product name, categories, ingredients ) for food products by utilizing the Open Food Facts API. Users can retrieve nutritional data either by entering the barcode into the search bar or by uploading an image of the barcode.


## Getting Started

To run the NutriScan web application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/MonalikaPatnaik/NutriScan.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access NutriScan.

## Usage

1. **Barcode Search:**
   - Enter the barcode of the food product(EAN_13 format) in the search bar.
   - Click the search icon or press Enter to retrieve nutritional information.
  
     The Home page looks like this-
     ![image](https://github.com/MonalikaPatnaik/NutriScan/assets/99353300/0d35c6f6-8d52-4f84-b755-b13f89430621)


2. **Image Upload:**
   - Click the "Upload Image" button.
   - Choose an image file containing the barcode(EAN_13 format).
   - The application will automatically scan the barcode and fetch nutritional details.

  The fetched information from the api is shown like this
     ![image](https://github.com/MonalikaPatnaik/NutriScan/assets/99353300/5a7d964c-07c7-4f9b-9569-ee9e8dacb402)



## Technologies Used

- React.js
- Open Food Facts API
- HTML5 and CSS3

## Acknowledgments

- NutriScan uses the [Open Food Facts API](https://openfoodfacts.github.io/openfoodfacts-server/api/) for fetching the nutritional information of the food product
- The web based barcode scanner is made using [html5-qrcode](https://github.com/mebjas/html5-qrcode#for-using-inline-qr-code-scanning-with-webcam-or-smartphone-camera), a lightweight & cross platform QR Code and Bar code scanning library for the web
