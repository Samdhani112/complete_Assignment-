// Function to reverse every word in a sentence
function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word =>
      word.split('').reverse().join('')
    );
    return reversedWords.join(' ');
  }
  
  // Function to sort an array in descending order
  function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  // Example 1: Reverse words in a sentence
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log("Reversed Sentence:", reversedSentence);
  
  // Example 2: Sort an array in descending order
  const numbersArray = [5, 2, 8, 1, 9, 3];
  const sortedArray = sortDescending(numbersArray);
  console.log("Sorted Array (Descending):", sortedArray);
  