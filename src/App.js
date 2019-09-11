import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {
      "productSize": "small",
      "item": "DELUXE COOKED HAM",
      "plu_upc": "1000",
      "price": " $5.15 ",
      "productId": "102",
      "catId": "1",
      "uom": "LB"
    },
    {
      "productSize": "large",
      "item": "DELUXE LOW-SODIUM COOKED HAM ",
      "plu_upc": "2000",
      "price": " $5.15 ",
      "productId": "159",
      "catId": "1",
      "uom": "LB"
    },
    {
      "productSize": "medium",
      "item": "DELUXE LOW-SODIUM WHOLE HAM",
      "plu_upc": "3000",
      "price": " $5.15 ",
      "productId": "105",
      "catId": "1",
      "uom": "LB"
    },
    {
      "productSize": "medium",
      "item": "SMOKED VIRGINA HAM",
      "plu_upc": "4000",
      "price": " $5.15 ",
      "productId": "156",
      "catId": "1",
      "uom": "LB"
    },
    {
      "productSize": "small",
      "item": "HONEY MAPLE HAM",
      "plu_upc": "5000",
      "price": " $5.15 ",
      "productId": "150",
      "catId": "1",
      "uom": "LB"
    }

  ]

  const image = <img height="150" width="100%" border-radius="5px" src="https://previews.123rf.com/images/teguhjatipras/teguhjatipras1606/teguhjatipras160600005/57802665-recommendation-people-give-on-top-of-the-plate-with-hand-blue-background-graphic-illustration.jpg"/>

  return (
    <div className="App">

      <h1>PRODUCTS LIST</h1>




      {products.map(product => {
        return <div className="card">
          {image}
          <p className="font" style={{ listStyle: "none" }}>{product.item}</p>
          <div style={{ listStyle: "none" }}>Price: {product.price}</div> 
        <div style={{ listStyle: "none" }}>Size: {product.productSize}</div>
          <div style={{ listStyle: "none" }}>Upc: {product.plu_upc}</div>
          <div style={{ listStyle: "none" }}>Id: {product.productId}</div>
          <div style={{ listStyle: "none" }}>Catalog: {product.catId}</div>
          <div style={{ listStyle: "none" }}>Uom: {product.uom}</div></div>
      })}














    </div>

  );
}

export default App;
