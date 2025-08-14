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

// Reverse dictionary
const reverseMorse = {};
Object.keys(morseCode).forEach(key => {
  reverseMorse[morseCode[key]] = key;
});

// DOM elements
const inputText = document.getElementById('inputText');
const toMorseBtn = document.getElementById('toMorse');
const toTextBtn = document.getElementById('toText');
const playSoundBtn = document.getElementById('playSound');
const copyBtn = document.getElementById('copyBtn');
const outputDiv = document.getElementById('output');
const themeToggle = document.getElementById('checkbox');

// Translation functions
toMorseBtn.addEventListener('click', () => {
  const text = inputText.value.toUpperCase();
  let morse = '';
  for (let char of text) {
    morse += morseCode[char] ? morseCode[char] + ' ' : '';
  }
  outputDiv.textContent = morse.trim();
});

toTextBtn.addEventListener('click', () => {
  const morse = inputText.value.trim().split(' ');
  let text = '';
  for (let code of morse) {
    text += reverseMorse[code] || '';
  }
  outputDiv.textContent = text;
});

// Audio playback
playSoundBtn.addEventListener('click', playMorseAudio);

function playMorseAudio() {
  const morse = outputDiv.textContent;
  if (!morse) {
    alert("Convert text to Morse code first!");
    return;
  }
  
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const dotDuration = 0.1;
  let time = audioContext.currentTime;

  morse.split('').forEach(symbol => {
    if (symbol === '.') {
      playBeep(audioContext, time, dotDuration);
      time += dotDuration;
    } else if (symbol === '-') {
      playBeep(audioContext, time, dotDuration * 3);
      time += dotDuration * 3;
    } else if (symbol === ' ') {
      time += dotDuration * 3;
    } else if (symbol === '/') {
      time += dotDuration * 7;
    }
    time += dotDuration;
  });
}

function playBeep(audioContext, startTime, duration) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.type = 'sine';
  oscillator.frequency.value = 600;
  gainNode.gain.value = 0.5;
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

// Copy functionality
copyBtn.addEventListener('click', async () => {
  const morseText = outputDiv.textContent;
  if (!morseText) {
    alert("Nothing to copy! Convert text first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(morseText);
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Morse';
    }, 2000);
  } catch (err) {
    console.error("Copy failed:", err);
    alert("Couldn't copy. Try again or use Ctrl+C.");
  }
});

// Dark Mode
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.checked = theme === 'dark';
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 
                 (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

// Theme switcher
themeToggle.addEventListener('change', (e) => {
  setTheme(e.target.checked ? 'dark' : 'light');
});