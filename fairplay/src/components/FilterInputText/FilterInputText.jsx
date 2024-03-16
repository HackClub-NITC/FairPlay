// FilterInputText.js
import React from 'react';
import styles from './FilterInputText.module.css'; // Import CSS Module

function FilterInputText({ inputString }) {
  // Function to filter the string according to the rules
  const filterString = (str) => {
    // Remove spaces from the string
    str = str.replace(/\s/g, '');

    let filteredStr = '';
    for (let i = 0; i < str.length; i++) {
      // If two adjacent characters are the same, insert an 'x' in between
      filteredStr += str[i];
      if (i < str.length - 1 && str[i] === str[i + 1]) {
        filteredStr += 'x';
      }
    }
    // If the length of the string is odd, add 'x' at the end
    if (filteredStr.length % 2 !== 0) {
      filteredStr += 'x';
    }
    return filteredStr;
  };

  // Function to split the string into substrings of two characters
  const splitString = (str) => {
    const substrings = [];
    for (let i = 0; i < str.length; i += 2) {
      substrings.push(str.slice(i, i + 2));
    }
    return substrings;
  };

  // Apply filtering rules to input string
  const filteredString = filterString(inputString);
  // Split filtered string into substrings of two characters
  const substrings = splitString(filteredString);

  return (
    <div className={styles.grid_input_text}>

      {substrings.map((substring, index) => (
        <div key={index} className={styles.substring}>
          {substring.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className={char === 'x' ? styles.green : styles.black} // Use generated class names
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FilterInputText;
