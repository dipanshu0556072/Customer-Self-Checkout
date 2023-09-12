import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import CustomerDetail from './Header/CustomerDetail';
import { BrowserRouter,Router, Routes, Route } from "react-router-dom";
import Footer from './Footer/Footer';
import Welcome from './Welcome/Welcome';
import MobileSign from './Mobile/MobileSign';
import PaymentTile from './PaymentTiles/PayementTile';
import Upi from './UPI/Upi';
import Feedback from './Feedback/Feedback';
import DebitPay from './DebitPay/DebitPay';
import Cart from './Cart/Cart';
export default function App() {
  return (
   <>
    
       <Cart/>

    </> 
  );
}
