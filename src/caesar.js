// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let allLetters = "abcdefghijklmnopqrstuvwxyz"; // create variable for all of the letters

  function caesar(input, shift, encode = true) {
    // your solution code here
    let newMessage = ""; //create an empty string to put new decoded message into
    //if there is no shift or if it is less than - 25 or longer than 25, return false
    if (!shift || shift < -25 || shift > 25) return false;
    if (encode === false) shift = shift *= -1;
    //if you are not encoding change shift to go it the other direction to decode
    for (let i = 0; i < input.length; i++) {
      //loop through the input variable
      let inputLetter = input[i].toLowerCase(); // make sure all inputs are converted to lower case to ignore capital letters and want to get input letter and shift it down the allLetters variable. shift number is how many idexes we will move down the allLetters string.
      const inputLetterIndexInAllLetters = allLetters.indexOf(inputLetter); //make variable that will hold the index of inputLetter's place in allLetters
      //find out what index in allLetters inputLetter is at
      let shiftedLetter = inputLetterIndexInAllLetters + shift; //create variable that will take the index the inputletter is at in allLetter and apply the shift
      //write an if statement that says if the shiftedLetter is shifted too far and will be outside of the allLetters string, that is wraps around to the start. Do this by saying that if it shifts more than 25 indexes, you make it equal -26 to put it in the spot you need
      if (allLetters.includes(inputLetter)) {
        //find out what index in allLetters inputLetter is at.
        if (shiftedLetter > 25) shiftedLetter += -26;
        //write another if statement that does the same thing as the above if statement, but does it in the opposite direction. accounts for too long of a negative shift
        if (shiftedLetter < 0) shiftedLetter += 26;

        const newLetter = allLetters[shiftedLetter]; //create variable that will hold the new letter at the index that each shifted letter ends up at in the allLetters string
        newMessage += newLetter; //add all of the new shifted letters to the new message string
      } else {
        newMessage += inputLetter; //write else statement to account for the spaces in the input given and to make sure all letters are lower case
      }
    }
    return newMessage;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
