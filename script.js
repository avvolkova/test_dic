'use strict'
function translit (text) {
 let result = '';
 let Rus = document.querySelector("#russian-text");
 let Eng = document.querySelector("#english-text");
 const alphabet = {
    'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',     'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya',   ' ': ' '
  };
  for(let i = 0; i < text.length; i++) {
     let ifUpper = (text[i] === text[i].toUpperCase());
     if (alphabet[text[i].toLowerCase()] == undefined) {
       result += word[i];
     } else {
       if(ifUpper) {
         result += alphabet[text[i].toLowerCase()].toUpperCase();
       } else  result += alphabet[text[i].toLowerCase()];
     }
  }
  return result;
}

function enterStr() {
    let textEntered = document.querySelector('input').value;
    let newDiv = document.createElement('div');
    let newDiv2 = document.createElement('div');

    if (textEntered.length < 12) {
      newDiv.title = textEntered;
      newDiv2.title = translit(textEntered);
      newDiv.style.cursor = "pointer";
      newDiv2.style.cursor = "pointer";
      textEntered = textEntered.substring(0, 12) + "...";

    }

    newDiv.innerText = textEntered;
    newDiv2.innerText = translit(textEntered);
    let wordBook = document.querySelector("#russian-text");
    let wordBook2 = document.querySelector("#english-text");
    wordBook.appendChild(newDiv);
    wordBook2.appendChild(newDiv2);

    document.querySelector('input').value = "";
    return false;
  }

function init() {
     let button = document.querySelector("#text-submit");
     button.addEventListener('click', enterStr);
     document.querySelector('input').addEventListener('keydown', function(e) {
       if(e.wich === 13 || e.keyCode === 13 || e.key === 'Enter') {
         enterStr();
         e.preventDefault();
         return false;
      }
  });
 } 
window.onload = init;
  

      
    
  
    
    
  
  