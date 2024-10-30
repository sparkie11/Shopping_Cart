import { useState } from 'react';
import './App.css';
import words from './wordList.json';

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState([]);

  console.log(wordToGuess);

  return (
    <div className="App">

    </div>
  );
}

export default App;
