Build a Proofreading Tool
In this lab, you will build a proofreading tool that analyzes arrays of words for palindromes and repeated phrases.

A palindrome is a word that reads the same forwards and backwards. For example, "racecar" and "level" are palindromes, but "hello" is not.

A phrase is a sequence of consecutive words. For example, in ["the", "cat", "sat", "the", "cat"], the phrase "the cat" (a sequence of 2 words) appears at positions 0 and 3.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should define a function named isPalindrome that takes a word string as its argument. It should return true if the word reads the same forwards and backwards (case-insensitive), and false otherwise.

You should define a function named findPalindromeBreaks that takes a words array as its argument. It should return an array of indices of words that are not palindromes. It should return an empty array if the input is empty.

You should define a function named findRepeatedPhrases that takes a words array and a phraseLength number as arguments. It should return an array of all start indices where a sequence of phraseLength consecutive words appears more than once in the array — including the index of the first occurrence. It should return an empty array if phraseLength is greater than or equal to the length of words. Overlapping sequences should also be counted.

You should define a function named analyzeTexts that takes a texts array and a phraseLength number as arguments. It should process each element of texts (each an array of words) and return an array of objects, each with repeatedPhrases and palindromeBreaks properties. It should return an empty array if texts is empty.
