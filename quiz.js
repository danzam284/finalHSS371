const quiz = [
    {
        question: "What is the term used to describe the unequal distribution of access to technology and the internet?",
        choices: ["Digital dilemma", "Digital divide", "Digital distinction", "Digital gap"],
        answer: "Digital divide"
    },
    {
        question: "Which of the following is NOT a barrier to digital inclusion?",
        choices: ["Lack of affordable access to devices and the internet", "Limited digital literacy skills", "Geographical location", "Proficiency in a foreign language"],
        answer: "Proficiency in a foreign language"
    },
    {
        question: "What is the term used to describe the lack of access to technology and the internet among rural communities?",
        choices: ["Rural digital divide", "Urban digital divide", "Suburban digital divide", "National digital divide"],
        answer: "Rural digital divide"
    },
    {
        question: "Which of the following is NOT a potential solution to bridging the digital divide in education?",
        choices: ["Providing students with mobile hotspots", "Increasing funding for schools in low-income areas", "Improving teacher training in digital literacy", "Limiting the number of technology devices available in schools"],
        answer: "Limiting the number of technology devices available in schools"
    },
    {
        question: "What is the term used to describe the learning gap that occurs when students do not have equal access to technology and the internet?",
        choices: ["Digital inequality", "Digital equity", "Technological divide", "Achievement gap"],
        answer: "Achievement gap"
    },
    {
        question: "Which of the following is an example of a digital literacy skill?",
        choices: ["Writing in cursive", "Typing quickly and accurately", "Knowing how to play a musical instrument", "Speaking a foreign language"],
        answer: "Typing quickly and accurately"
    },
    {
        question: "Which of the following is NOT a benefit of providing students with equal access to technology and the internet?",
        choices: ["Improved academic achievement", "Increased opportunities for collaboration and communication", "Reduced cost of education", "Enhanced digital literacy skills"],
        answer: "Reduced cost of education"
    },
    {
        question: "What is the name of the program that provides free educational content and resources to educators and students?",
        choices: ["Khan Academy", "Coursera", "edX", "Udemy"],
        answer: "Khan Academy"
    },
    {
        question: "Which of the following is a potential consequence of the digital divide?",
        choices: ["Increased economic growth", "Decreased social inequality", "Limited access to job opportunities", "Improved healthcare outcomes"],
        answer: "Limited access to job opportunities"
    },
    {
        question: "Which of the following is NOT a potential solution to bridging the digital divide?",
        choices: ["Providing free or low-cost internet access to low-income households", "Increasing the availability of public computers and Wi-Fi hotspots", "Offering online classes exclusively for students who have access to technology", "Providing technology training for students and teachers"],
        answer: "Offering online classes exclusively for students who have access to technology"
     }
  ];

document.getElementById("start").onclick = function() {
  this.hidden = true;
  document.getElementById("question").hidden = false;
  document.getElementById("choices").hidden = false;
  document.getElementById("score").hidden = false;
  

}

document.getElementById("again").onclick = function() {
    location.reload();
}
  
  let currentQuestion = 0;
  let score = 0;
  
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const scoreElement = document.getElementById("score");
  
  function showQuestion() {
    question.innerHTML = quiz[currentQuestion].question;
    choices.innerHTML = "";
    for (let i = 0; i < quiz[currentQuestion].choices.length; i++) {
      const button = document.createElement("button");
      button.className = "option";
      button.innerHTML = quiz[currentQuestion].choices[i];
      button.addEventListener("click", selectAnswer);
      choices.appendChild(button);
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const selectedAnswer = selectedButton.innerHTML;
    if (selectedAnswer === quiz[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion >= quiz.length) {
      endGame();
    } else {
      showQuestion();
    }
  }
  
  function endGame() {
    question.innerHTML = "Quiz completed!";
    choices.innerHTML = "";
    scoreElement.innerHTML = `Your score is ${score} out of ${quiz.length}`;
    document.getElementById("again").hidden = false;
    document.getElementById("st").hidden = false;
    if (score >= 10) {
        document.getElementById("st").innerHTML = "Perfection is your middle name!";
    } else if (score > 7) {
        document.getElementById("st").innerHTML = "Solid score champ!";
    } else if (score > 4) {
        document.getElementById("st").innerHTML = "Not bad, but room for improvement.";
    } else if (score > 2) {
        document.getElementById("st").innerHTML = "Ehhhhhh... you should do a bit more studying...";
    } else {
        document.getElementById("st").innerHTML = "Are you even trying??";
    }
  }
  
  showQuestion();