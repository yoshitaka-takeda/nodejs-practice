const libReadLineSync = require('readline-sync');

let dict = [];
dict[' '] = [[1,1],[1,1],[1,1],[1,1]];
dict['\''] = [[0,1,1],[0,0,1],[0,0,0],[0,0,0]];
dict['A'] = [[0,0,0,1,0,0,0],[0,0,1,0,1,0,0],[0,1,1,1,1,1,0],[1,0,0,0,0,0,1]];
dict['B'] = [[1,0,1,0,1,0,0],[1,0,0,0,1,1,0],[1,0,1,0,0,0,1],[1,0,1,0,1,0,1]];
dict['C'] = [[0,0,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,1,0,0,0,0],[0,0,1,1,1,1,0]];
dict['D'] = [[1,1,1,0,1,0,0],[1,0,0,0,0,1,1],[1,0,0,0,0,1,1],[1,1,1,1,1,1,0]];
dict['E'] = [[1,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,0,1,0,1,0,0],[1,1,0,1,1,1,0]];
dict['F'] = [[1,1,1,1,1,1],[1,1,0,0,0,0],[1,1,1,1,0,0],[1,1,0,0,0,0]];
dict['G'] = [[0,0,1,1,1,0],[1,1,0,0,0,0],[1,0,0,1,1,1],[0,1,1,1,1,1]];
dict['H'] = [[1,0,0,0,1,1],[1,0,0,0,1,1],[1,1,1,1,0,1],[1,0,0,0,0,1]];
dict['I'] = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]];
dict['J'] = [[0,0,0,0,1],[0,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0]];
dict['K'] = [[1,0,0,0,1,1],[1,0,1,0,0,0],[1,1,0,1,0,0],[1,1,0,0,1,1]];
dict['L'] = [[1,1,0,0,0],[1,1,0,0,0],[1,1,0,0,0],[1,1,1,1,1]];
dict['M'] = [[1,1,0,0,0,1,1],[1,0,1,0,1,0,1],[1,0,0,1,0,0,1],[1,0,0,0,0,0,1]];
dict['N'] = [[1,1,0,0,0,0,1],[1,0,1,0,0,0,1],[1,0,0,1,1,0,1],[1,0,0,0,1,1,1]];
dict['O'] = [[0,1,1,1,1,0,0],[1,0,0,0,0,1,1],[1,1,0,0,0,0,1],[0,0,1,1,1,1,0]];
dict['P'] = [[1,1,0,1,0,1,0],[1,1,0,0,1,1,1],[1,0,1,1,0,0,0],[1,0,0,0,0,0,0]];
dict['Q'] = [[0,1,0,1,1,0,0],[1,1,0,0,0,1,0],[1,0,0,0,0,1,0],[0,1,1,1,0,0,1]];
dict['R'] = [[1,1,0,1,1,0,0],[1,0,0,0,1,1,0],[1,1,0,1,0,0,0],[1,0,0,0,0,1,1]];
dict['S'] = [[0,0,1,1,0,1,0],[1,1,0,0,0,0,0],[0,0,0,0,1,1,1],[0,1,1,0,1,1,0]];
dict['T'] = [[1,1,1,1,1,1,1],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0]];
dict['U'] = [[1,1,0,0,0,0,1],[1,1,0,0,0,0,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]];
dict['V'] = [[1,0,0,0,0,0,1],[0,1,0,0,0,1,0],[0,0,1,0,1,0,0],[0,0,0,1,0,0,0]];
dict['W'] = [[1,0,0,0,0,0,1],[1,0,0,1,0,0,1],[0,1,0,1,0,1,0],[0,0,1,0,1,0,0]];
dict['X'] = [[1,0,0,0,0,0,1],[0,0,1,1,0,0,0],[0,0,0,1,1,0,0],[1,0,0,0,0,0,1]];
dict['Y'] = [[1,1,0,0,0,0,1,1],[0,1,1,0,1,1,1,0],[0,0,0,1,1,0,0,0],[0,0,1,1,0,0,0,0]];
dict['Z'] = [[1,1,0,1,0,1,1],[0,0,0,0,0,1,1],[0,0,1,1,0,0,0],[1,1,0,1,0,1,1]];

let asciiArt = "";
let asciiArtArr = [];
let cursor;
let currentTextIndex = 0;
let textLength = 0;

function text2ascii(text = null) {
    let asciiArtRow = 4;
    text = text.toUpperCase();
    try {
        let dictArray;
        let currentText;
        textLength = text.length;
        for (i = 0; i < textLength; i++) {
            if(!dict.hasOwnProperty(text[i])) {
                throw new Error(`'${text[i]}` + "' Not in Dictionary");
            }
            dictArray = dict[text[i]];
            currentText = text[i];
            currentTextIndex = i;
            asciiArtArr.push([]);
            for (j = 0; j < asciiArtRow; j++) {
                asciiArtArr[currentTextIndex].push([]);
                cursor = "";
                for (k = 0; k < dictArray[j].length; k++) {
                    let charReplace = "";
                    if(dictArray[j][k] == 1) {
                        charReplace = currentText;
                    }
                    else { charReplace = ' '; }
                    cursor += charReplace;
                }
                asciiArtArr[currentTextIndex][j] += cursor;
                asciiArtArr[currentTextIndex][j] += (currentTextIndex == text.length - 1)? '': '  ';
            }
        }
        for(let line = 0; line < asciiArtArr[0].length; line++) {
            asciiArt += asciiArtArr.map(box => box[line]).join('') + '\n';
        }
        return asciiArt;
    } catch (err) {
        console.error(err);
        return;
    }
}

const text = libReadLineSync.question('text2ascii: '); 
console.log(text2ascii(text));