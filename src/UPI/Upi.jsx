import React,{useState} from 'react';
import './Upi.css';
import Header from '../Header/Header';
import timer from './timer.gif';
import scan from './scan.png';
import CustomerDetail from '../Header/CustomerDetail';
import { motion, AnimatePresence } from "framer-motion";
import right from './right.gif';
export default function Upi()
{
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
        setIsOpen(!isOpen);
  }

  return (
  <>
    <Header/>
    <CustomerDetail/>
    <div className='Upi-container'>
         <div>
            <img src={scan} onClick={togglePopup} />
         </div> 
         {isOpen && <Popup
     content={
      <>
        <div className="Upibag-row1">
            <div className="Upibag-col1">
                <img src={right}/>
            </div>
            <div className='Upibag-row2'>
                <p id='pay-success-heading'>Payment Successful<br/>
                <span id='pay-success-subHeading'>Transcation ID:22D</span></p>
            </div>
            <div className='Upibag-row2' style={{paddingTop:'10%'}}>
                <p id="pay-success-note">We have sent your invoice on <b>Whatsapp</b></p>
            </div>
            <div className='Upibag-row2' style={{paddingTop:'10%'}}>
                <p id="pay-success-redirect">redirecting to feedback in 5 seconds</p>
            </div>
        </div> 
      </>   
     }
     handleClose={togglePopup}
   />
     }         
         <div>
            <img src={timer} style={{paddingTop:'60%'}} />
         </div>
    </div>
  </>);
};

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box" style={{display:'flex',flexDirection:'column',alignItems:'center',}}>
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
  