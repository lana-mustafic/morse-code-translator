// Morse code dictionary
const morseCode = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
  'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
  'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
  'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
  'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '0': '-----', ' ': '/'
};

// Reverse dictionary for Morse → Text
const reverseMorse = {};
Object.keys(morseCode).forEach(key => {
  reverseMorse[morseCode[key]] = key;
});

// DOM elements
const inputText = document.getElementById('inputText');
const toMorseBtn = document.getElementById('toMorse');
const toTextBtn = document.getElementById('toText');
const outputDiv = document.getElementById('output');

// Text → Morse
toMorseBtn.addEventListener('click', () => {
  const text = inputText.value.toUpperCase();
  let morse = '';
  for (let char of text) {
    morse += morseCode[char] ? morseCode[char] + ' ' : '';
  }
  outputDiv.textContent = morse.trim();
});

// Morse → Text
toTextBtn.addEventListener('click', () => {
  const morse = inputText.value.trim().split(' ');
  let text = '';
  for (let code of morse) {
    text += reverseMorse[code] || '';
  }
  outputDiv.textContent = text;
});