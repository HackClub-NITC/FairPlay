


# FairPlay: 
## A Revolutionary New Way To Learn About The PlayFair Cipher

Welcome to FairPlay, 

This Vite app was built for CodeInit 2024, conducted by the CSEA of NIT Calicut

Welcome to FairPlay, your gateway to exploring the fascinating world of the Playfair Cipher! Invented by Charles Wheatstone in 1854 and later popularized by Lord Playfair, this cryptographic technique is known for its simplicity and effectiveness in encrypting and decrypting secret messages.

FairPlay allows you to encrypt and decrypt based on an input string and key. It also allows the user to visualize how the cipher works. An AI powered chatbot allows the user to take to Charles Wheatstone himself allowing making it a very interactive and hands on learning experience. We also provide in depth theory and history on the cipher.


## Description
### Encrption and Decryption function
FairPlay allows users to encrypt and decrypt messages using the Playfair Cipher. Users can input their desired plaintext and key, and the app will generate the corresponding ciphertext or decrypted text. The encryption and decryption algorithms are implemented based on the principles of the Playfair Cipher, ensuring accurate and secure communication.

### Hands on visualization
FairPlay provides a visual representation of how the Playfair Cipher operates. Users can observe the transformation of plaintext into ciphertext and vice versa, gaining insight into the substitution and transposition techniques employed by the cipher. The visualization enhances understanding and facilitates hands-on learning.

### GPT AI chatbot
FairPlay features an AI-powered chatbot powered by GPT (Generative Pre-trained Transformer) technology. Users can interact with Charles Wheatstone, the inventor of the Playfair Cipher, through natural language conversation. The chatbot provides educational insights, answers questions, and offers guidance on using the cipher effectively. This interactive feature adds depth to the learning experience and encourages engagement with the historical context of cryptography.

## Features

- Extensive movie database spanning various genres, languages and OTTs
- AI recommendation engine powered by OpenAI's GPT-4-turbo
- Daily updates to the movie database to reflect the latest information
- Light/dark mode toggle for personalized viewing preferences
- Preview for a quick glimpse of movie details
- In depth list of all movie details for a particular movie
- IMDB and Rotten Tomatoes ratings
- Sorting based on OTT and filtering family friendly content
- Sorted and randomized movies based on genre and streaming service, which are sorted by a - weighted average of RT and IMDB scores
## Installation and Usage

### Deployment

- Install Nodemon/Node

- Clone the repository
```bash
  git clone https://github.com/arunnats/movie-match
```

- Install NodeJs packages
```bash
  npm i mongodb openai crypto express express--session fuse.js 
```

- Navigate to the Web App location
```bash
cd web-app
```

- Create a config.json with your OpenAI key and MongoDB collection information
```bash
  {
	"mongo_connection_string": <Your MongoDB connection string>,
	"mongo_database_name": "Your MongoDB database name",
	"mongo_collection_name": "Your MongoDB collection name",
	"openai_key": "Your OpenAi key"
}
```
(We have not provided the database key due to security risks, please contact for acces)

- Run app
```bash
node app.js
```

### Database functions

- Navigate to the Database Scripts location
```bash
cd database-updation
```

- Create a dbConfig.json with your TMDB, OMDB keys and MongoDB collection information
```bash
  {
	"mongo_connection_string": <Your MongoDB connection string>,
	"mongo_database_name": "Your MongoDB database name",
	"mongo_collection_name": "Your MongoDB collection name",
	"omdb_api_key": "Your OMDB key",
	"tmdb_api_key": "Your TMDB key"
}
```

- You can now run the various python scripts after installing the dependencies 

```bash
    pip3 i pymongo
    py <nameofscript>.py
```
## Tech Stack

- Database: MongoDB
- Backend: Javascript, Python
- Framworks: NodeJS, FuseJS
- AI Engine: OpenAI's GPT-4-turbo
- API Integration: IMDB, OMDB, TMDB


## Authors

- [@arunnats](https://www.arunnats.com/)
- [@Hafeez-hm](https://github.com/Hafeez-hm)



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Appendix

Any additional information goes here


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
