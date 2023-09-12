import React, { useState } from 'react';
import Header from '../Header/Header';
import CustomerDetail from '../Header/CustomerDetail';
import './feedback.css';
import smile from './smile.png';
import neutral from './neutral.png';
import angry from './angry.png';

export default function Feedback() {
  const [selectcircle, setSelectCircle] = useState(null);

  function circleSelect(imageName) {
    setSelectCircle(imageName);
  }

  return (
    <>
      <Header />
      <CustomerDetail />
      <div className='feedback-container'>
        <div className='feedback-row1'>
          <p>Rate Your Experience</p>
        </div>
        <div className='feedback-row2'>
          <div className='row'>
            <img
              src={smile}
              className={selectcircle === 'smile' ? 'selected' : ''}
              onClick={() => circleSelect('smile')}
            />
          </div>
          <div className='row'>
            <img
              src={neutral}
              className={selectcircle === 'neutral' ? 'selected' : ''}
              onClick={() => circleSelect('neutral')}
            />
          </div>
          <div className='row'>
            <img
              src={angry}
              className={selectcircle === 'angry' ? 'selected' : ''}
              onClick={() => circleSelect('angry')}
            />
          </div>
        </div>
        <div className='feedback-row2'>
          <div>
            <a href='#'>Skip</a>
          </div>
        </div>
        <div className='feedback-row3'>
          <div>
            <p>
              <span style={{ fontVariant: 'small-caps' }}>
                We Would Like To Hear From You<br />
                For Additional Feedback Visit
              </span>
              <span style={{ color: '#003080', fontWeight: 'bold' }}>
                selfcheckout.retail.kpmg.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
