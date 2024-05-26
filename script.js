
const words = [ 

    "java", 

    "javascript", 

    "python", 

    "pascal", 

    "ruby", 

    "perl", 

    "swift", 

    "kotlin", 
]; 

  
 
let randomIndex = Math.floor(Math.random() * words.length); 
let selectedWord = words[randomIndex]; 
console.log(selectedWord); 

  
 
let guessedword = []; 

  

let displayWord = ""; 

for (let i = 0; i < selectedWord.length; i++) { 

    displayWord += "_ "; 
} 

document.getElementById("displayWord").textContent = displayWord; 

  
 

function guessLetter() { 

    let input=document.getElementById("letter-input"); 
 

    if (!input.value) { 

        alert("Empty Input box. Please add input letter"); 

        return; 

    } 

  

    let letter = input.value.toLowerCase(); 

    input.value = ""; 

   

    if (guessedword.includes(letter)) { 

        alert("You have already guessed that letter!"); 

        return; 

    } 
    guessedword.push(letter); 


    let updatedDisplay = ""; 

    let allLettersGuessed = true; 

    for (let i = 0; i < selectedWord.length; i++) { 

        if (guessedword.includes(selectedWord[i])) { 

            updatedDisplay += selectedWord[i] + " "; 

        } else { 

            updatedDisplay += "_ "; 

            allLettersGuessed = false; 

        } 

    } 

    document.getElementById("displayWord").textContent = updatedDisplay; 

   

    if (allLettersGuessed) { 

        alert("Congratulations! You guessed the word correctly!"); 

    } 
}
