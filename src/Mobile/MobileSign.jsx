import React, { useState,createContext } from 'react';
import './MobileSign.css';
import Check from '../Mobile/Check';
import Countries from './Countries';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Keyboard from '../KeyBoard/Keyboard';
import back from './back.webp';
import Header from '../Header/Header'; 


export default function MobileSign() {
  
  const [showComponentA, setShowComponentA] = useState(true);

  const toggleComponents = () => {
    setShowComponentA(false);
  };

  return (
    <>
    <Header/>
     <motion.div
    initial={{ opacity: 0, y: '500%' }}
    animate={{ opacity: 1, y: '55%' }}
    exit={{ opacity: 0, y: '0' }}
    transition={{ duration: 0.6 }}>
     <Check />
     <>
     <hr style={{width:'100%',marginTop:'10%',border:'1px dashed black'}}/></>
    </motion.div>
                <div className='row' onClick={toggleComponents}>
                  
          <div style={{display:'flex',justifyContent:'center',alignContent:'center',flexDirection:'row'}}>  
                  <AnimatePresence>
                    {showComponentA ? (
                      <Countries />
                    ) : (
                        
                      <motion.div
                        initial={{ opacity: 0, x: '1%' }}
                        animate={{ opacity: 1, x: '-20%' }}
                        exit={{ opacity: 0, x: '120%' }}
                        transition={{ duration: 0.5 }}
                      >
                            <Countries />
                      </motion.div>
                    )}
                    {!showComponentA && 
                    <div style={{paddingTop:'18%',}}>
                        <Keyboard/>
                    </div>
                    }
                  </AnimatePresence>
                </div>
              </div>
              
        </>
  );
}
