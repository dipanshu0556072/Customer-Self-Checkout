import React from 'react';
import './customerdetail.css';
import coins from '../Header/coins.png';
import king from '../Header/king.png';
export default function CustomerDetail()
{
  return (
    <>
      <div className='customer-detail'>
            <div>
                +91 XXX-XXX-9071
            </div>
            <div>
                MITTAL,DEEPANSHU
            </div>
            <div>
            
                Gold Member
                <img src={king}/>/ 
                <img src={coins}/>
            </div>
      </div>
    </>
  );
};