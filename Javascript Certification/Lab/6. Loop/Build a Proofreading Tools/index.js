function isPalindrome(word) {
  let str = word.toLowerCase();

  let wordLength = str.length;

  for (let i = 0; i < wordLength / 2; i++) {
    console.log(str[i], str[wordLength - 1 - i]);
    if (str[i] !== str[wordLength - 1 - i]) {
      return false;
    }
  }

  return true;
}

// console.log(isPalindrome("hello"))

function findPalindromeBreaks(words) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      result.push(i);
    }
  }
  return result;
}

/**
 * buat fungsi findRepatedPhrases(words, phraseLength), words adalah array, phraseLength adalah number.
 * Return berupa array dari index awal dimana urutan phraseLength dari words muncul lebih dari 1 di array - termasuk index dari awal kemunculan.
 * Return menjadi empty kalau phraseLength lebih dari atau sama dnegan panjang words.
 */
function findRepeatedPhrases(words, phraseLength) {
  let wordsLength = words.length;

  if (phraseLength >= wordsLength) {
    return [];
  }

  let result = [];

  let maxLength = wordsLength - phraseLength;

  for (let i = 0; i <= maxLength; i++) {
    let targetPhrase = words.slice(i, i + phraseLength).join(" ");
    // console.log(`\n=== [OUTER LOOP] Jari Kiri (i = ${i}) ===`);
    // console.log(`Mencari duplikat untuk frasa: "${targetPhrase}"`);

    let isDuplicate = false;
    for (let j = 0; j <= maxLength; j++) {
      if (i === j) {
        continue;
      }

      let comparablePhrase = words.slice(j, j + phraseLength).join(" ");
      // console.log(`  -> [INNER LOOP] Jari Kanan (j = ${j}): Coba bandingkan dengan "${comparablePhrase}"`);

      let match = true;

      for (let k = 0; k < phraseLength; k++) {
        if (words[i + k] !== words[j + k]) {
          // console.log(`     [X] BEDA di kata ke-${k + 1}: '${words[i + k]}' vs '${words[j + k]}'`);
          match = false;
          break;
        } else {
          // console.log(`     [V] COCOK di kata ke-${k + 1}: sama-sama '${words[i + k]}'`);
        }
      }

      if (match === true) {
        // console.log(`  >>> KETEMU! Frasa di index i = ${i} memiliki duplikat di index j = ${j} <<<`);
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate === true) {
      result.push(i);
    }
    // console.log(`=== [SELESAI] Outer Loop (i = ${i}) ===\n`);
  }

  return result;
}

// console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2))

function analyzeTexts(texts, phraseLength) {
  const textLength = texts.length;

  const result = [];
  if (textLength === 0) {
    return result;
  }

  for (let i = 0; i < textLength; i++) {
    let currentWordsArray = texts[i];

    let repeatedResult = findRepeatedPhrases(currentWordsArray, phraseLength);
    let palindromeResult = findPalindromeBreaks(currentWordsArray);

    let analyzedObject = {
      repeatedPhrases: repeatedResult,
      palindromeBreaks: palindromeResult,
    };

    result.push(analyzedObject);
  }

  return result;
}
