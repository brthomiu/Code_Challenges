/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function (s) {
    const checkVowel = (v) => {
        const vowels = "aeiouAEIOU"
        if (vowels.includes(v)) {
            return true
        }
    };

        //   if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u" || v === "A" || v === "E" || v === "I" || v === "O" || v === "U") {
    //     return true;
    //   } 
    // };
  
    let wordVowels = [];
  
    for (let i = 0; i < s.length; i++) {
      if (checkVowel(s[i]) === true) {
        wordVowels.push(s[i]);
      }
    }
  
    let newWord = s.split("");
  
    for (let i = s.length; i >= 0; i--) {
      if (checkVowel(s[i]) === true) {
        newWord[i] = wordVowels.shift();
      }
    }
  
    return newWord.join("");
  };

console.log(reverseVowels("hello"));
console.log(reverseVowels("leEtcode"));
