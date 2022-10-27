// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let encodeObj = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    "(i/j)": 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  let decodeObj = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    // your solution code here
    const inputLowercase = input.toLowerCase().split(""); //lowercase input and divide characters into ordered lis
    const inputLowercaseDecode = input.split(" ").join(""); //split characters and join
// console.log('********************************************************')
// console.log(inputLowercase)
// console.log('********************************************************')
// console.log('********************************************************')
// console.log(inputLowercaseDecode)
// console.log('********************************************************')
    //if trying to decode but the length of pairs provided is not even then return false because there are no half letters
    if (!encode && inputLowercaseDecode.length % 2 !== 0) {
      return false; // //if statement that says if we are decoding and the length of the inputLowercaseDecode without spaces divedied by two DOES NOT have a remainder of zero return false

      //if trying to decode
    } else if (!encode) {
      let output = []; //set a variable for an empty array to push letters into

      for (let i = 0; i < input.length; i += 2) {
        //loop through and increment 2 every loop to account for every letter equaling 2 numbers
        let indexWithASpace = input[i];
        let numIndex = input[i + 1];

        if (indexWithASpace === " ") {
          // console.log(i)
          i -= 1;
          // console.log(i)
          output.push(" ");
        } else {
          let pair = indexWithASpace + numIndex;
          let numberstoLetter = decodeObj[pair];
          output.push(numberstoLetter);
        }
      }

      return output.join(""); //use join() to join output array with characters

      //if trying to encode
    } else {
     
      let output = inputLowercase.map((letter) => {
        for (let letters in encodeObj) {
          if (letter == "i" || letter == "j") {//map over inputLowercase , in order to make jor i match what is in the Objs at top change j or i to (i/j) so that they return the right numbers. 
            letter = "(i/j)";
            return encodeObj[letter];
          } else if (letter == letters) {
            return encodeObj[letter];
          }
        }
        return letter;
      });

      return output.join(""); //use join() to join array of characters
    }
  }

  return {
    polybius,
  };
})();


console.log(polybiusModule.polybius("hi",true))

module.exports = { polybius: polybiusModule.polybius };
