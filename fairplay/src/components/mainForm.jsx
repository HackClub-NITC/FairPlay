import React, { useState } from 'react';

function PlayfairCipher() {
  const [section, setSection] = useState('encrypt'); // Default section is 'encrypt'
  const [keyword, setKeyword] = useState('');
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handlePlainTextChange = (e) => {
    setPlainText(e.target.value);
  };

  const handleEncrypt = () => {
    // Implement Playfair Cipher encryption logic here
    setCipherText('Encrypted text'); // Replace 'Encrypted text' with the actual encrypted text
  };

  const handleDecrypt = () => {
    // Implement Playfair Cipher decryption logic here
    setPlainText('Decrypted text'); // Replace 'Decrypted text' with the actual decrypted text
  };

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };

  return (
    <>
      <header>
        <h1>Playfair Cipher</h1>
      </header>
      <main>
        <div style={{ marginBottom: '3rem' }}>
          <nav className="container-btn">
            <button onClick={() => handleSectionChange('encrypt')}>Encrypt</button>
            <button onClick={() => handleSectionChange('decrypt')}>Decrypt</button>
          </nav>
        </div>
        {section === 'encrypt' && (
          <section id="encryptSection" className="">
            <div className="container-chave">
              <label>Keyword:</label>
              <input
                type="text"
                placeholder="Keyword"
                value={keyword}
                onChange={handleKeywordChange}
              />
              <label style={{ marginLeft: '20px' }}>Plain text:</label>
              <input
                type="text"
                placeholder="Plain text"
                value={plainText}
                onChange={handlePlainTextChange}
              />
            </div>
            <div style={{ marginTop: '2rem' }}>
                <button onClick={handleEncrypt}>Encrypt</button>
            </div>
            <div className="result">
              <h4>Cipher Text</h4>
              <p>{cipherText}</p>
            </div>
          </section>
        )}
        {section === 'decrypt' && (
          <section id="decryptSection" className="">
            <div className="container-chave">
              <label>Keyword:</label>
              <input
                type="text"
                placeholder="Keyword"
                value={keyword}
                onChange={handleKeywordChange}
              />
              <label style={{ marginLeft: '20px' }}>Cipher text:</label>
              <input
                type="text"
                placeholder="Cipher text"
                value={cipherText}
                onChange={(e) => setCipherText(e.target.value)}
              />
            </div>
            <div style={{ marginTop: '2rem' }}>
                <button onClick={handleDecrypt}>Decrypt</button>
            </div>
            <div className="result">
              <h4>Plain Text</h4>
              <p>{plainText}</p>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default PlayfairCipher;
