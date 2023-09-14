import React, { useState } from 'react';
import styles from './popup.module.css';

export default function Popup() 
{
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
   }
 
  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />

    {isOpen && <Pop
      content={<>
        <div className={styles.container}>
                <h1>Popup Div</h1>
        </div>
      </>}
      handleClose={togglePopup}
    />}
    
  </div>
} 
const Pop = props => {
  return (
    <div className={styles.popupBox}>
      <div className={styles.box}>
             <span className={styles.closeIcon} onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};