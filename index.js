const questions = [
  {
    question: "img/pepsi.jpeg",
    answer1: "Pepsi",
    answer2: "Coca-Cola",
    answer3: "Sprite",
    answer4: "Fanta",
    correctAnswer: "Pepsi",
    hint: "Second biggest pop brand",
  },
  {
    question: "img/mazda.jpeg",
    answer1: "BMW",
    answer2: "Mazda",
    answer3: "Mercedes",
    answer4: "Fiat",
    correctAnswer: "Mazda",
    hint: "Japannese brand",
  },
  {
    question: "img/levis.jpeg",
    answer1: "Zara",
    answer2: "Levi's",
    answer3: "Mavi",
    answer4: "Nike",
    correctAnswer: "Levi's",
    hint: "A big jeans company",
  },

  {
    question: "img/nestle.jpeg",
    answer1: "Milka",
    answer2: "Dodge",
    answer3: "Sarelle",
    answer4: "Nestle",
    correctAnswer: "Nestle",
    hint: "Chocolate",
  },
];

let index = -1;
let score = 0;
let questionNo = 1;

function setNextQuestion() {
  index = index + 1;
  index = index % questions.length;

  if (index == 0) {
    score = 0;
    document.getElementById("score").innerText = score.toString();
    document.getElementById("banner").innerText = "1/4".toString();
  }

  document.getElementById("image").src = questions[index].question;
  document.getElementById("answer1").innerText = questions[index].answer1;
  document.getElementById("answer2").innerText = questions[index].answer2;
  document.getElementById("answer3").innerText = questions[index].answer3;
  document.getElementById("answer4").innerText = questions[index].answer4;
}
setNextQuestion();
function dogru() {
  showDialog("Correct!", "Succes!", setNextQuestion, undefined, 1);

  questionNo = questionNo + 1;
  questionNo = questionNo % (questions.length + 1);

  document.getElementById("banner").innerText =
    questionNo + "/" + questions.length.toString();

  score = score + 10;
  document.getElementById("score").innerText = score.toString();
  if (index == questions.length - 1) {
    showDialog(
      "Correct! \nPlease enjoy your accomplishment",
      "Helal Sana!!!",
      setNextQuestion,
      undefined,
      1
    );
    document.getElementById("banner").innerText = "1/4".toString();
  }
}
function yanlis() {
  score = score - 5;
  document.getElementById("score").innerText = score.toString();
  questionNo = questionNo + 1;
  questionNo = questionNo % (questions.length + 1);
  document.getElementById("banner").innerText = questionNo + "/4".toString();
  showDialog("Wrong!", "Fail!", setNextQuestion);
  if (score <= 0) {
    showDialog("Wrong!\nGame Over!", "Fail", setNextQuestion, undefined, 2);

    questionNo = 1;
    index = -1;
    score = 0;
    document.getElementById("score").innerText = score.toString();
  }
}
function hint() {
  showDialog(questions[index].hint, "Hint:", hideDialog, undefined, 1);
}

function answer1OnClick() {
  if (questions[index].answer1 == questions[index].correctAnswer) {
    dogru();
  } else {
    yanlis();
  }
}
function answer2OnClick() {
  if (questions[index].answer2 == questions[index].correctAnswer) {
    dogru();
  } else {
    yanlis();
  }
}
function answer3OnClick() {
  if (questions[index].answer3 == questions[index].correctAnswer) {
    dogru();
  } else {
    yanlis();
  }
}

function answer4OnClick() {
  if (questions[index].answer4 == questions[index].correctAnswer) {
    dogru();
  } else {
    yanlis();
  }
}
