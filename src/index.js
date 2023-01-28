const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let currentLetterCodes = [];
    let currentCodeLetter = '';
 for (let i = 0; i < expr.length/10; i++) {
     currentLetterCodes.push(expr.slice(0 + i * 10 ,10 + i * 10));
     while (currentLetterCodes[i][0] == "0") {
         currentLetterCodes[i] = currentLetterCodes[i].slice(1);
 }
     if (currentLetterCodes[i] == "**********") {
         currentLetterCodes[i] = " "
     } else {
         for (let j = 0; j < currentLetterCodes[i].length / 2; j++) {
             if (currentLetterCodes[i].slice(0 + j * 2, 2 + j * 2) == "10") {
                 currentCodeLetter = currentCodeLetter + ".";
             }
             if (currentLetterCodes[i].slice(0 + j * 2, 2 + j * 2) == "11") {
                 currentCodeLetter = currentCodeLetter + "-";
             }
         }
         currentLetterCodes[i] = currentCodeLetter;
         currentCodeLetter = "";
     }
         for (let key of Object.keys(MORSE_TABLE)) {
          if (key == currentLetterCodes[i]) {
              currentLetterCodes[i] = MORSE_TABLE[key]
          }
        }   
 }
 


return currentLetterCodes.join('');
}

module.exports = {
    decode
}