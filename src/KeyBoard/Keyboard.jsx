import React from 'react';
import '../KeyBoard/keyboard.css';

export default function Keyboard(){
    const handleDivClick=()=>{

    }
    return(
        <>
      <div style={{border:'1px solid black',width:'260px',borderRadius:'4%'}}>
        <div className="flex-container" >
         <div onClick={()=>{handleDivClick('1')}}  className="Keytext-color" id='one'>1</div>
         <div  onClick={() => handleDivClick('2')} className="Keytext-color" id='two'>2</div>
         <div  onClick={() => handleDivClick('3')} className="Keytext-color" id='three'>3</div>
         </div>
         <div className="flex-container" >
         <div onClick={() => handleDivClick('4')} className="Keytext-color" id='four'>4</div>
         <div onClick={() => handleDivClick('5')} className="Keytext-color" id='five'>5</div>
         <div onClick={() => handleDivClick('6')} className="Keytext-color" id='six'>6</div>
         </div>
         <div className="flex-container" >
         <div onClick={() => handleDivClick('7')} className="Keytext-color" id="seven">7</div>
         <div onClick={() => handleDivClick('8')} className="Keytext-color" id="eight">8</div>
         <div onClick={() => handleDivClick('9')} className="Keytext-color" id="nine">9</div>
         </div>
         <div className="flex-container" >
         <div
            onClick={() => handleDivClick('bksp')}
            className="Keytext-color"
            style={{color:'black',borderRadius:'30%'}}
            id="bksp"
          >
            bksp
          </div>
          <div onClick={() => handleDivClick('0')}  className="Keytext-color" id="zero">0</div>
         <div onClick={() => handleDivClick('clr')} className="Keytext-color" 
            style={{color:'black',borderRadius:'30%'}}         
            id="clr">
            clr
          </div>
       </div>
      </div>
        
        </>
    );

};