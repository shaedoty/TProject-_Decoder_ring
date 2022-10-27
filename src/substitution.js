// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//abcdefghijklmnopqrstuvwxyz

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let regularalphabet = "abcdefghijklmnopqrstuvwxyz";
    let singleLetterInAlphabet = regularalphabet.split("");
    let newMessageArray = [];
    let lowercaseInput = input.toLowerCase();
    // if no alphabet length return false
    if (!alphabet) return false;
    //if statement to say if the alphabet is not 26 characters return false
    if (alphabet.length !== 26) return false;
    //use a double loop to make sure there are no repeated characters in the given alphabet
    for (let i = 0; i <= alphabet.length; i++) {
      for (let j = i + 1; j <= alphabet.length; j++) {
        if (alphabet[j] == alphabet[i]) {
          return false;
        }
      }
    }
    let matchingObj = {};
    if (encode) {
      for (let letter in singleLetterInAlphabet) {
        matchingObj[singleLetterInAlphabet[letter]] = alphabet[letter];
      }
    } else if (!encode) {
      for (let letter in singleLetterInAlphabet) {
        matchingObj[alphabet[letter]] = singleLetterInAlphabet[letter];
      }
    }

    //now for each index of input, if there exists that index as a key in the key object, push its value, otherwise push the index (special characters);
    for (let letter of lowercaseInput) {
      if (matchingObj[letter]) {
        newMessageArray.push(matchingObj[letter]);
      } else {
        newMessageArray.push(letter);
      }
    }
    return newMessageArray.join("");
  }

  return {
    substitution,
  };
})();

console.log(substitutionModule.substitution("message that is a secret", "$wae&zrdxtfcygvuhbijnokmpl", true));

module.exports = { substitution: substitutionModule.substitution };
