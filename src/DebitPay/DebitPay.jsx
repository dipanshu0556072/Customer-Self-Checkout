import React from 'react';
import styles from './DebitPay.module.css';
import Header from '../Header/Header';
import Customer from '../Header/CustomerDetail';
import image from './image.png';
import timer from './timer.gif';
export default function DebitPay()
{
  return(
    <>
      <Header/>
      <Customer/>
      <div className={styles.container}>
          <div className={styles.heading}>
            <p>Insert<span>/</span>swipe<span>/</span>tap <span>your card on the </span>card machine</p>
          </div>

          <div className={styles.row}>
               <div>
                   <img src={image}/>
               </div>
               <div>
                  <img src={timer}/>
               </div>
          </div>
      </div>
    </>
  );
};