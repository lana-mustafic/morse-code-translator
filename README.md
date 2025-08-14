# 📡 Morse Code Translator

[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge&logo=vercel)](https://lana-mustafic.github.io/morse-code-translator)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A clean web app that converts between text and Morse code with audio playback. Built with HTML, CSS, and JavaScript.

## ✨ Features

- **Bidirectional Translation**
  - Convert text to Morse code
  - Decode Morse code back to text
- **Audio Playback** 🔊
  - Hear Morse code as beep sounds
- **Modern UI**
  - Dark/Light mode toggle
  - Clean, responsive design
- **Convenience Tools**
  - Copy Morse code to clipboard
  - Simple, intuitive interface

## 🚀 Quick Start

1. **Run locally:**
   ```bash
   git clone [https://github.com/yourusername/morse-code-translator.git](https://github.com/yourusername/morse-code-translator.git)
   cd morse-code-translator
   open index.html
Or use the live demo:
[https://lana-mustafic.github.io/morse-code-translator](https://lana-mustafic.github.io/morse-code-translator)

## 🚀 Quick Start
1. **Run locally:**
   ```bash
   git clone [https://github.com/yourusername/morse-code-translator.git](https://github.com/yourusername/morse-code-translator.git)
   cd morse-code-translator
   open index.html
   ```
Or use the live demo:
[https://www.google.com/search?q=https://lana-mustafic.github.io/morse-code-translator](https://www.google.com/search?q=https://lana-mustafic.github.io/morse-code-translator)
## 🚀 Quick Start

1. **Run locally:**
   ```bash
   git clone [https://github.com/yourusername/morse-code-translator.git](https://github.com/yourusername/morse-code-translator.git)
   cd morse-code-translator
   open index.html
   ```
Or use the live demo:  
[https://lana-mustafic.github.io/morse-code-translator](https://lana-mustafic.github.io/morse-code-translator)  

## 🛠️ How It Works  

```javascript  
// Core translation function  
function textToMorse(text) {  
  return text.toUpperCase().split('')  
    .map(char => morseCode[char] || '')  
    .join(' ');  
}
```

## 🛠️ Key Technologies

- **Web Audio API** - For sound generation
- **CSS Variables** - Powers theme switching
- **Clipboard API** - Enables copy functionality

## 📚 Morse Code Reference

| Character | Morse Code |
|-----------|------------|
| A         | .-         |
| B         | -...       |
| 1         | .----      |
| Space     | /          |

## 📜 License

MIT © [Lana Mustafić](https://github.com/lana-mustafic)
