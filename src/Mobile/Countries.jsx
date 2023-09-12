import React, { useState, createContext, useContext} from 'react';
import Select from 'react-select';
import indiaFlag from '../Images/indiaFlag.jpeg'; // Import the flag image
import afg from '../Images/afg.jpeg';
import aus from '../Images/aus.jpeg';
import bel from '../Images/bel.png';
import can from '../Images/canada.jpeg';
import chn from '../Images/chn.png';
import itl from '../Images/itl.jpeg';
import jor from '../Images/jordan.png';
import jpn from '../Images/jpn.png';
import usa from '../Images/usa.jpeg'; 
import pak from '../Images/pak.jpeg';
import isl from '../Images/isl.png';

import { Button, TextField } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';  
import '../Mobile/countries.css'; // Import the countryselector.css file

const countries = [
  { value: 'IND', label: 'IND', flag: indiaFlag },
  { value: 'USA', label: 'USA', flag: usa },
  { value: 'JPN', label: 'JPN', flag: jpn },
  { value: 'ITA', label: 'ITA', flag: itl },
  { value: 'JOR', label: 'JOR', flag: jor },
  { value: 'CAN', label: 'CAN', flag: can },
  { value: 'AFG', label: 'AFG', flag: afg },
  { value: 'BEL', label: 'BEL', flag: bel },
  { value: 'AUS', label: 'AUS', flag: aus },
  { value: 'CHN', label: 'CHN', flag: chn },
  { value: 'PAK', label: 'PAK', flag: pak },
  { value: 'ISL', label: 'ISL', flag: isl },
  // Add more countries here
]; 




export default function CountrySelector(){
  const [selectedCountry, setSelectedCountry] = useState(null);

  

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

 
  
   const [inputValue, setInputValue] = useState('');
 
  return (
    <>
    
    <div className="row" style={{paddingTop:'30%',}}>
        <p>Please Enter Mobile Number</p>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',paddingTop:'5%'}}>
       
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <Select
            styles={{
              control: (provided) => ({ ...provided, height: '55px',width:'170px'}),
              dropdownIndicator: (provided) => ({
                ...provided,
                marginRight: '10px', 
               // Add margin to the right side
              }),
            }}
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countries}
            isClearable={true}
            getOptionLabel={(option) => (
              <div>
                <img
                  src={option.flag}
                  alt={`${option.value} Flag`}
                  style={{ width: '20px', height: '15px', marginRight: '5px' }}
                />
                {option.label}
              </div>
            )}
            getOptionValue={(option) => option.value}
          />
          <TextField
            id="MobileNo"
            label="MobileNo"
            variant="outlined"
            style={{ marginLeft: '10px' }}
            inputProps={{
              maxLength: 10,
              inputMode: 'numeric',
              pattern: '[0-9]*',
            }}
            value={inputValue}
            
          />
        </div>
        {/* Added Continue button */}
        
        <Button 
        id="continue-btn"  value={inputValue} ><span>CONTINUE</span></Button>
        
        </div>
      </div>
    </>
  );
};

