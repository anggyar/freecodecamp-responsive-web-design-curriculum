let textInputted = document.querySelector("#text-input");

let charCount = document.querySelector("#char-count");

const limitChar = Number(charCount.textContent.split("/")[1]); //number✅

let count = charCount.textContent.split(" ")[2].split("/")[0];

textInputted.addEventListener("input", () => {
  if (textInputted.value.length > limitChar) {
    textInputted.value = textInputted.value.slice(0, limitChar);
  }
  const currentLength = textInputted.value.length;

  count = currentLength;

  charCount.textContent = `Character Count: ${count}/50`;
  if (currentLength === limitChar) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "#6338a8";
  }
});
