import React,{useState} from "react";
import "./payment.css";
import discount from './discount.png';
import Header from '../Header/Header';
import Customer from '../Header/CustomerDetail';
import Footer from '../Footer/Footer';
import ProducTile from './ProductTile';
import bag from '../Footer/Bag.png';
import minus from '../Footer/minus.png';
import plus from '../Footer/plus.png';
import { motion, AnimatePresence } from "framer-motion";

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

  const[changerightSection,setChangeRightSection]=useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
        setIsOpen(!isOpen);
  }

    //Animation for Small Bag
    const [isSmallBagClicked, setIsSmallBagClicked] = useState(false);
    const handleSmallBagClick = () => {
      setIsSmallBagClicked(!isSmallBagClicked);
      setIsMediumBagClicked(false);
      setIsLargeBagClicked(false);
    }
  
    let[Smallbagcount,setSmallBagCount]=useState(0);
    const SmallBagPlusBtn=()=>{
      setSmallBagCount((prevCount) => prevCount + 1);
    }
    const SmallBagMinusBtn=()=>{
      if(Smallbagcount>0){
      setSmallBagCount((prevCount) => prevCount - 1);
      }
   }
  

  //Animation for Medium Bag
  const [isMediumBagClicked, setIsMediumBagClicked] = useState(false);
  const handleMediumBagClick = () => {
    setIsSmallBagClicked(false);
    setIsMediumBagClicked(!isMediumBagClicked);
    setIsLargeBagClicked(false);
}

  let[mediumbagcount,setMediumBagCount]=useState(0);
  const MediumBagPlusBtn=()=>{
    setMediumBagCount((prevCount) => prevCount + 1);
  }
  const MediumBagMinusBtn=()=>{
    if(mediumbagcount>0){
    setMediumBagCount((prevCount) => prevCount - 1);
    }
 }


     //Animation for Large Bag
     const [isLargeBagClicked, setIsLargeBagClicked] = useState(false);
     const handleLargeBagClick = () => {
      setIsSmallBagClicked(false);
      setIsMediumBagClicked(false);
      setIsLargeBagClicked(!isSmallBagClicked);
     }
   
     let[Largebagcount,setLargeBagCount]=useState(0);
     const LargeBagPlusBtn=()=>{
       setLargeBagCount((prevCount) => prevCount + 1);
     }
     const LargeBagMinusBtn=()=>{
       if(Largebagcount>0){
       setLargeBagCount((prevCount) => prevCount - 1);
       }
    }
 
  return (
    <>
      <Header/>
      <Customer/>
      <div className="payTile-container">
          <div className="payTile-col1">
              <ProducTile/>
              <button type='button' 
               onClick={togglePopup} 
              style={{float:'right'}}>Add Bag</button>
{isOpen && <Popup
     content={
      <>
        <div className="bag-col1">
           {isSmallBagClicked||isMediumBagClicked||isLargeBagClicked?
              <p id="bag-mainhead">Need a carry bag?<br/>
                 <span id="bag-subhead" style={{visibility:'hidden'}}>
                     Tap A Bag To Get Started
                 </span>
              </p>:
              <p id="bag-mainhead">Need a carry bag?<br/>
                 <span id="bag-subhead">Tap A Bag To Get Started</span>
              </p>
           }
        </div> 

        <div className="bag-col2">
          
          <AnimatePresence>
            {
              isSmallBagClicked?
              <motion.div className="bag-item"
              
              initial={{ opacity: 0, y: '10%' }} // Start position: hidden below
              animate={{ opacity: 1, y: '-30%' }}      // End position: visible
              exit={{ opacity: 0 ,y:'20%'}}
              transition={{ duration: 0.8 }}
              style={{transition: 'top 0.5s ease' ,}}>
              
               <img src={bag} id="small-bag" onClick={handleSmallBagClick} />
               <div className="bag-label">Small</div>
               <div className='plusBtn-container'>
                 <img src={minus} onClick={SmallBagMinusBtn}/>
                 <img src={plus} onClick={SmallBagPlusBtn}/>
               </div>
            </motion.div>
              :
              <div className="bag-item">
               <img src={bag} id="small-bag" onClick={handleSmallBagClick} />
               <div className="bag-label">Small</div>
            </div>
            }
          </AnimatePresence>
          
          
           <AnimatePresence>
           {
        isMediumBagClicked ? (
          <motion.div className="bag-item"
          initial={{ opacity: 0, y: '10%' }} // Start position: hidden below
          animate={{ opacity: 1, y: '-30%' }}      // End position: visible
          exit={{ opacity: 0 ,y:'20%'}}
          transition={{ duration: 0.8 }}
              
             style={{transition: 'top 0.5s ease' ,}}>
            <img src={bag} id="medium-bag" onClick={handleMediumBagClick} />
            <div className="bag-label">Medium</div>
            <div className='plusBtn-container'>
              <img src={minus} onClick={MediumBagMinusBtn}/>
              <img src={plus} onClick={MediumBagPlusBtn}/>
            </div>
            <div>
              
            </div>

           </motion.div>
        ) : (
          <div className="bag-item">
            <img src={bag} id="medium-bag" onClick={handleMediumBagClick} />
            <div className="bag-label">Medium</div>
          </div>
        )
      }
      </AnimatePresence> 
      
       <AnimatePresence>
          {isLargeBagClicked?
                     <motion.div className="bag-item"
                     initial={{ opacity: 0, y: '10%' }} // Start position: hidden below
                     animate={{ opacity: 1, y: '-5%' }}      // End position: visible
                     exit={{ opacity: 0 ,y:'20%'}}
                     transition={{ duration: 0.8 }}
                     style={{transition: 'top 0.5s ease' ,}}                                
                     >

                      <img src={bag} id="large-bag" onClick={handleLargeBagClick} />
                     <div className="bag-label">Large</div>
                      <div className='plusBtn-container'>
                        <img src={minus} onClick={LargeBagMinusBtn}/>
                        <img src={plus} onClick={LargeBagPlusBtn}/>
                     </div>
                    </motion.div>
                         :
                       <div className="bag-item">
                       <img src={bag} id="large-bag" onClick={handleLargeBagClick} />
                       <div className="bag-label">Large</div>
                      </div>          
          }        
       </AnimatePresence>
          </div> 
        <div className="bag-col3">
            {isSmallBagClicked||isMediumBagClicked||isLargeBagClicked?
              <motion.div
              initial={{ opacity: 0, y: '4%' }} // Start position: hidden below
              animate={{ opacity: 1, y: '25%' }}      // End position: visible
              exit={{ opacity: 0 ,y:'4%'}}
              transition={{ duration: 0.9 }}                  
              >
              <button style={{backgroundColor:'#003080'}}>ADD {mediumbagcount} CARRY BAGS</button>      
              </motion.div>:
              <button>ADD {Smallbagcount+mediumbagcount+Largebagcount} CARRY BAGS</button>
            }
       </div>
        <div className="bag-col4">
            <p>DON'T WANT CARRY BAGS?<span onClick={togglePopup}>SKIP</span></p>
        </div>
      </>   
     }
     handleClose={togglePopup}
   />
     }

          </div>
          
          <div className="payTile-col2">
            {changerightSection?
              <div className="payTile-row1">
                     
              </div>
              :
              <>
               <div className="payTile-row2">
                   <img src={discount}/>
                   <span>Select A Payment Method</span>
               </div>  
               {payCard.map((productData,ProductKey)=>{
                   return <PayOffer key={ProductKey} data={productData}/>;
               })} 
             </>
             }
          </div>
       </div>
       <Footer/>
    </> 
  );
}





function PayOffer({data}){
  return(
   <>
           <div className="payTile-row3">
                <p id="payHead">{data.payHeading}</p>
                <p id="paySubHead" className="subhead">{data.subHeading}</p>
           </div>                
   </>
  );
}



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
  