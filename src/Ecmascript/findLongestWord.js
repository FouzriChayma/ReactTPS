const findLongestWord = (words) => {
    let [firstWord, ...rest] = words;
  
    let wordLengths = words.map(word => ({ word, length: word.length }));
  
    let longestWord = wordLengths.reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
  
    return longestWord;
  };
  
////////////////////////// TESTS //////////////////////////
  const wordsArray = ["apple", "banana", "strawberry", "kiwi"];
  console.log(findLongestWord(wordsArray));
  // Output: { word: 'strawberry', length: 10 }
  