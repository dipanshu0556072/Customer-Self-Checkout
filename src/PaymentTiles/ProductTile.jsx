import React from "react";
import productImg from "./purse.png";
import cross from "./cross.png";
import "./ProductTile.css";
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import discount from './discount.png';
import { useState } from "react";


const productData = [
  {
    id:1,
    productImg: productImg,
    brandName: "Lious Button",
    productName: "Greca Shoulder Bag",
    offerDesc: "20% off on your first purchase.",
    qty: 2,
    total1: 99,
    total2: 90,
    mrp: 9990,
  },
  {
    id:2,
    productImg: img1,
    brandName: "MONTECARLOS",
    productName: "Single Black Coat",
    offerDesc: "Buy one, get one 50% off.",
    qty: 1,
    total1: 18,
    total2: 550,
    mrp: 18550,
  },
  {
    id:3,
    productImg: img2,
    brandName: "#GG",
    productName: "Half-sleeve T-Shirt",
    offerDesc: "Free shipping on orders over $50.",
    qty: 2,
    total1: 25,
    total2: 50,
    mrp: 2550,
  },
  {
    id:4,
    productImg: img3,
    brandName: "NEWYORK G",
    productName: "Greca Shoulder Bag",
    offerDesc: "20% off on orders over $100.",
    qty: 1,
    total1: 25,
    total2: 99,
    mrp: 2599,
  },
  {
    id:5,
    productImg: img4,
    brandName: "Carry Bag",
    productName: "Medium Carry Bag",
    offerDesc: "10% student discount available.",
    qty: 3,
    total1: 12,
    total2: 99,
    mrp: 1299,
  },
  
];
const payCard=[
  {
    payHeading:'DEBIT CARD/CREDIT CARD',
    subHeading:'Additional 7% discount on HDGC debit/credit card',
  },
  {
    payHeading:'UPI',
    subHeading:'Get Flat 5% discount upto ₹150',
  },
  {
    payHeading:'WALLET',
    subHeading:'Get flat ₹200 cashback from your KPMG Wallet',
  },
  {
    payHeading:'REWARD POINT',
    subHeading:'Earn upto 200 cashback by paying from your reward point',
  },
]

export default function ProductTileList() {
  const [items, setItems] = useState([
    {
      id:1,
      productImg: productImg,
      brandName: "Lious Button",
      productName: "Greca Shoulder Bag",
      offerDesc: "20% off on your first purchase.",
      qty: 2,
      total1: 99,
      total2: 90,
      mrp: 9990,
    },
    {
      id:2,
      productImg: img1,
      brandName: "MONTECARLOS",
      productName: "Single Black Coat",
      offerDesc: "Buy one, get one 50% off.",
      qty: 1,
      total1: 18,
      total2: 550,
      mrp: 18550,
    },
    {
      id:3,
      productImg: img2,
      brandName: "#GG",
      productName: "Half-sleeve T-Shirt",
      offerDesc: "Free shipping on orders over $50.",
      qty: 2,
      total1: 25,
      total2: 50,
      mrp: 2550,
    },
    {
      id:4,
      productImg: img3,
      brandName: "NEWYORK G",
      productName: "Greca Shoulder Bag",
      offerDesc: "20% off on orders over $100.",
      qty: 1,
      total1: 25,
      total2: 99,
      mrp: 2599,
    },
    {
      id:5,
      productImg: img4,
      brandName: "Carry Bag",
      productName: "Medium Carry Bag",
      offerDesc: "10% student discount available.",
      qty: 3,
      total1: 12,
      total2: 99,
      mrp: 1299,
    },
    
  ]);

 
    const removeItem = (id) => {
      const updatedList = items.filter((item) => item.id !== id);
      setItems(updatedList);
    };
  

    


  return (
    <>
       <div className="scrollable">
          {items.map((product, index) => {
            return <ProductTile key={index} productObj={product} removeItem={removeItem}/>;
          })}
       </div>

    </> 
  );
}
function PayOffer({data}){
  return(
   <>
             <div className="col2-row2">
                <p id="payHead">{data.payHeading}</p>
                <p id="paySubHead">{data.subHeading}</p>
           </div>                
   </>
  );
}
function ProductTile({ productObj, removeItem }) {

  return (
    
    <div className="product-tile">
      <div className="image-div">
        <img className="tile-img" alt="product" src={productObj.productImg} />
      </div>
      <div className="names">
        <span className="brandName">{productObj.brandName}</span>
        <span className="productName">{productObj.productName}</span>
        <div className="offer-div">
          <span className="offer">
            <span className="offer-tag">Offer: </span>
            {productObj.offerDesc}
          </span>
        </div>
      </div>
      <div className="qty">
        <span>
          qty
          <span className="qty-count">{productObj.qty}</span>
        </span>
      </div>
      <div className="price-details">
        <span className="total-price">
          <span className="total1">₹ {productObj.total1},</span>
          <span className="total2">{productObj.total2} </span>
        </span>
        <span className="mrp">MRP:  
          <span className="mrp-tag">₹{productObj.mrp}</span>          
        </span>
      </div>
      <div className="cross-div">
          <img alt="cross" src={cross} className="cross-img"   onClick={() => removeItem(productObj.id)} />
      </div>  
    </div>
  );
}


