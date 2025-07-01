// Quiz Questions
const quizData = [
  {
    question: "What is battery swapping?",
    options: [
      "Charging a battery inside a vehicle",
      "Exchanging a discharged battery with a charged one",
      "Removing the battery permanently",
      "None of the above"
    ],
    answer: "Exchanging a discharged battery with a charged one"
  },
  {
    question: "Which component is commonly used in battery swapping stations?",
    options: ["Solar Panel", "Hydraulic Jack", "Robot Arm", "Windmill"],
    answer: "Robot Arm"
  },
  {
    question: "Battery swapping reduces which of the following?",
    options: ["Vehicle speed", "Battery lifespan", "Charging time", "Maintenance cost"],
    answer: "Charging time"
  },
  {
    question: "Who benefits the most from battery swapping?",
    options: ["Petrol car owners", "EV fleet operators", "Truck drivers", "All drivers"],
    answer: "EV fleet operators"
  }
];

// Load Quiz Questions
function loadQuiz() {
  const quizContainer = document.getElementById("quiz");

  quizData.forEach((q, index) => {
    const box = document.createElement("div");
    box.classList.add("bg-white", "p-4", "rounded", "shadow");

    const question = document.createElement("h2");
    question.classList.add("font-semibold", "mb-2");
    question.innerText = `${index + 1}. ${q.question}`;
    box.appendChild(question);

    q.options.forEach((opt) => {
      const optionId = `q${index}_${opt.replace(/\s+/g, '')}`;
      
      const wrapper = document.createElement("div");
      wrapper.classList.add("mb-1");

      const input = document.createElement("input");
      input.type = "radio";
      input.id = optionId;
      input.name = `question${index}`;
      input.value = opt;
      input.classList.add("mr-2");

      const label = document.createElement("label");
      label.setAttribute("for", optionId);
      label.classList.add("cursor-pointer", "hover:bg-blue-100", "block", "rounded", "p-2", "transition");
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));

      wrapper.appendChild(label);
      box.appendChild(wrapper);
    });

    quizContainer.appendChild(box);
  });
}

// Handle Submit
document.addEventListener("DOMContentLoaded", () => {
  loadQuiz();

  const submitBtn = document.getElementById("submit");
  const resultContainer = document.getElementById("result");

  submitBtn.addEventListener("click", () => {
    let score = 0;

    quizData.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      if (selected && selected.value === q.answer) {
        score++;
      }
    });

    resultContainer.innerText = `You scored ${score} out of ${quizData.length}!`;
  });
});
