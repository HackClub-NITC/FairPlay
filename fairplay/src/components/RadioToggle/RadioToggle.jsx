import React, { useState } from 'react';
import RadioEncrypt from '../RadioEncrypt/RadioEncrypt';
import RadioDecrypt from '../RadioDecrypt/RadioDecrypt';
import './style.css';


function RadioToggle() {
  // State to manage the checked radio button
  const [selectedOption, setSelectedOption] = useState('Encrypt');

  // Function to handle radio button change
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to render the selected page component
  const renderSelectedPage = () => {
    switch (selectedOption) {
      case 'Encrypt':
        return <RadioEncrypt />;
      case 'Decrypt':
        return <RadioDecrypt />;
      default:
        return null;
    }
  };

  return (
    <div className="radio-inputs">
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="Encrypt"
          checked={selectedOption === 'Encrypt'}
          onChange={handleRadioChange}
        />
        <span className="name">Encrypt</span>
      </label>
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="Decrypt"
          checked={selectedOption === 'Decrypt'}
          onChange={handleRadioChange}
        />
        <span className="name">Decrypt</span>
      </label>

      {/* Render the selected page */}
      {renderSelectedPage()}
    </div>
  );
}

export default RadioToggle;
