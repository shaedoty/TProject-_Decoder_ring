// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//const polybiusModule = (function () {
    // you can add any code you want within this function scope
    /*const arrayKey = [
      ["a", 11],
      ["b", 21],
      ["c", 31],
      ["d", 41],
      ["e", 51],
      ["f", 12],
      ["g", 22],
      ["h", 32],
      ["i", 42],
      ["j", 42],
      ["k", 52],
      ["l", 13],
      ["m", 23],
      ["n", 33],
      ["o", 43],
      ["p", 53],
      ["q", 14],
      ["r", 24],
      ["s", 34],
      ["t", 44],
      ["u", 54],
      ["v", 15],
      ["w", 25],
      ["x", 35],
      ["y", 45],
      ["z", 55],
    ];
    const arrayKeyForNumbers = [
      ["a", 11],
      ["b", 21],
      ["c", 31],
      ["d", 41],
      ["e", 51],
      ["f", 12],
      ["g", 22],
      ["h", 32],
      ["(i/j)", 42],
      ["k", 52],
      ["l", 13],
      ["m", 23],
      ["n", 33],
      ["o", 43],
      ["p", 53],
      ["q", 14],
      ["r", 24],
      ["s", 34],
      ["t", 44],
      ["u", 54],
      ["v", 15],
      ["w", 25],
      ["x", 35],
      ["y", 45],
      ["z", 55],
    ];*/
  
    /*function polybius(inputLowercase, encode = true) {
      // your solution code here
      //make variable for new message
      let newMessageEncoded = "";
  
      
      //make sure that when decoding the number of spaces excluding spaces should be even
      //create a variable that replaces spaces with no spaces
      let noSpacesinputLowercase = inputLowercase.replace(/ /g, "");
      // create variable that shows the length of noSpacesinputLowercase
      let noSpacesinputLowercaseCount = noSpacesinputLowercase.length;
      //if statement that says if we are decoding and the length of the inputLowercase string without spaces divedied by two DOES NOT have a remainder of zero return false
      if (!encode && noSpacesinputLowercaseCount % 2 !== 0) {
        return false;
      }
  
      
       for (let j = 0; j < grid.length; j++) {
        let gridObjLetter = grid[j][0]; //set variable for the letter in the given grid index
        let gridObjNum = grid[j][1]; //set variable for the number in the given grid index
        let gridIndex = grid[j]
        //loop throgh idexes of inputLowercase
        for (let i = 0; i < inputLowercase.length; i++) {
          let inputLowercaseIndex = inputLowercase[i].toLowerCase(); //get index of inputLowercase and chang to lowercase
  
          if (grid[j] == inputLowercaseIndex) {
             newCharacter = gribObjLetter
             newMessageEncoded += newCharacter
          }
         
        }
        
      }
      return newMessageEncoded;
    }
  
    return {
      polybius,
    };
  })();









  function polybius(input, encode = true) {
    //sets inputLowercase to lowercase
    inputLowercase = input.toLowerCase();// create a variable to ignore uppercase
    newMessageEncoded = ""; //create variable to store new message 
    if (encode) {//if statement to say if we are encoding, if the current index is a space add it to the new message else add the number from encodeObj that matched the current inputLowercase index
      for (let i = 0; i < inputLowercase.length; i++) {
        //loop through to access indexes
        if (inputLowercase[i] == " ") {
          newMessageEncoded += " ";//add spaced to newMessage
        } else {
          newMessageEncoded += encodeObj[inputLowercase[i]];
        }
      }
      return newMessageEncoded;//return the new encoded message
    } else {
      extraSpace string stores a copy of the inputLowercase changing 1 space to 2 so that the string length stays an even number
      let newMessageDecoded = "";
      let extraSpace = "";//create variable to add a 
      for (let i = 0; i < inputLowercase.length; i++) {
        if (inputLowercase[i] != " ") {
          extraSpace += inputLowercase[i];
        } else {
          extraSpace += "  ";
        }
      }
      if (extraSpace.length % 2 != 0) {
        return false;
      }
      for (let i = 0; i < extraSpace.length; i += 2) {
        if (extraSpace[i] != " ") {
          let code = "";
          code += extraSpace[i];
          code += extraSpace[i + 1];
          newMessageDecoded += decodeObj[code];
        }
        //Changes double spaces to single space
        else {
          newMessageDecoded += " ";
        }
      }
      return newMessageDecoded;
    }
  }
  return {
    polybius,
  };
})();
*/

let x = "Hello there";
let y = x.toLowerCase().split()
let z = x.toLowerCase().split('').join()
console.log(x)

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"