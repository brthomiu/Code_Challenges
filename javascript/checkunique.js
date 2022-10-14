//JavaScript function to check if all of the characters in a string are unique

function uniqueCharacters(stringIn) {
  let referenceString = [];

  //Iterates through the reference string and checks if the empty array contains the current character
  //if they don't match, it pushes the character to the reference string which ends up checking that character against all the subsequent characters as it continues to iterate
  const uniqueStageOne = (stringIn) => {
    for (let i = 0; i < stringIn.length; i++) {
      if (referenceString.includes(stringIn[i]) === false) {
        referenceString.push(stringIn[i]);
      } else {
        return false;
      }
    }
  };

  if (stringIn === "") {
    console.log("Please enter a string.");
    return "Error";
  } else {
    if (uniqueStageOne(stringIn) === false) {
      console.log("Characters in " + stringIn + " are NOT unique.");
      return false;
    } else {
      console.log("Characters in " + stringIn + " ARE unique.");
      return true;
    }
  }
}

uniqueCharacters("Spoon");

uniqueCharacters("Plants");
