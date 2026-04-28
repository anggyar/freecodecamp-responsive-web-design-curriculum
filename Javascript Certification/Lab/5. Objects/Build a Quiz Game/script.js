let questions = [
  {
    category: "science",
    question: "What is gravity?",
    choices: [
      "I don't know",
      "The force that pull everything to the centre of the mass",
      "Something that drag you down",
    ],
    answer: "The force that pull everything to the centre of the mass",
  },
  {
    category: "food",
    question: "Daging Bakso terbuat dari apa?",
    choices: ["Daging", "Ayam", "Bisa keduanya"],
    answer: "Bisa keduanya",
  },
  {
    category: "science",
    question: "Apakah simbol kimia dari besi?",
    choices: ["Fe", "O2", "H20"],
    answer: "Fe",
  },
  {
    category: "health",
    question: "Apakah benar gula dapat menyebabkan diabetes?",
    choices: ["Benar", "Salah", "Saya tidak yakin"],
    answer: "Benar",
  },
  {
    category: "tech",
    question:
      "Apakah PostgreSQL merupakan salah satu media untuk menyimpan data?",
    choices: ["Benar", "Salah", "Saya tidak yakin"],
    answer: "Benar",
  },
];
// console.log(getRandomQuestion(question))

function getRandomQuestion(questionsArray) {
  let randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  let randomChoiceIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomChoiceIndex];
}

function getResults(questionObj, computerChoice) {
  const realAnswer = questionObj.answer;

  if (computerChoice === realAnswer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${realAnswer}`;
  }
}

const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log("Soal: ", selectedQuestion.question);
console.log("Pilihan Computer: ", computerChoice);
console.log(getResults(selectedQuestion, computerChoice));
