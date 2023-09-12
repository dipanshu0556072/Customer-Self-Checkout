import React,{useState} from 'react';
import './welcome.css';
import welcome from './welcome.png';
import hand from './hand.png';
import Header from '../Header/Header';
import continueBtn from './ButtonContinue.png';
import { Link } from 'react-router-dom';
export default function Welcome()
{
    const [isToggleOn, setIsToggleOn] = useState(false);

    // Function to toggle the boolean state
    const toggleState = () => {
      setIsToggleOn(!isToggleOn); // Toggle the value between true and false
      console.log(isToggleOn);
    };
    
    return (
        <>
          <Header/>
          <div className='welcome-container'>
              
               <div className='welcome-row1'>
                  <img src={welcome}/>
               </div>

               <div className='welcome-row1' style={{paddingTop:'1%'}}> 
                  <p>
                    <span id="welcome-head1">KPMG Self-Checkout</span> <br/>
                    <span id="welcome-head2">For a hassle-free purchasing experience</span>
                  </p>
               </div>

               <div className='welcome-row2'>
                    <div>
                        <img src={hand}/>
                    </div>
                    <div>
                        <p>Click here to <b>get started</b></p>
                    </div>
                    <div>
                       <img src={continueBtn} />
                    </div>
               </div>
         
         </div>
        </>
    );
}   