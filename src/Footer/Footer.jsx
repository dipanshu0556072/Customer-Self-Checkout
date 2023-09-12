import "./Footer.css";
import { useState } from 'react';
import bag from './Bag.png';
import minus from './minus.png';
import plus from './plus.png';
import { motion, AnimatePresence } from "framer-motion";

const footerData = [
  {
    text: "item",
    val: 12,
  },
  {
    text: "quantity",
    val: 34,
  },
  {
    text: "discount",
    val: 1234.01,
  },
  {
    text: "total",
    val: 4321.02,
  },
];

export default function Footer() {
 
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
    <div className="footer">
      {footerData.map((footerItem, index) => {
        return (
          <li className="footer-item" key={index}>
            <div className="val">{footerItem.val}</div>
            <div className="label">{footerItem.text}</div>
          </li>
        );
      })}
      <button
     type="button"
     value="Click to Open Popup"
     
      > 
      continue </button>
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
  