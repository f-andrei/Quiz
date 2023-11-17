const questions = [
	{
	question: "Quem é considerado o fundador da Microsoft?",
	options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Jeff Bezos"],
	answer: "Bill Gates",
	image: "img/billgates.png"
	},
	{
	question: "O que significa a sigla 'CPU'?",
	options: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Central Power Unit"],
	answer: "Central Processing Unit",
	image: "img/cpu.png"
	},
	{
	question: "Quem é considerado o pai da computação?",
	options: ["Steve Jobs", "Bill Gates", "Alan Turing", "Mark Zuckerberg"],
	answer: "Alan Turing",
	image: "img/alanturing.png"
	},
	{
	question: "Qual sistema operacional é conhecido por ser de código aberto e baseado em Linux?",
	options: ["Windows", "macOS", "Ubuntu", "Android"],
	answer: "Ubuntu",
	image: "img/ubuntu.png"
	},
	{
	question: "Qual linguagem é usada para estruturar conteúdo e layout em uma página web?",
	options: ["CSS", "HTML", "JavaScript", "PHP"],
	answer: "HTML",
	image: "img/html.webp"
	},
	
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

questionElement.textContent = questions[currentQuestion].question;
optionsElement.innerHTML = "";

questions[currentQuestion].options.forEach((option, index) => {
	const button = document.createElement("button");
	button.textContent = option;
	button.onclick = () => checkAnswer(option);
	optionsElement.appendChild(button);
});

resultElement.textContent = `Pontuação: ${score}/${questions.length}`;
}

function checkAnswer(option) {
const body = document.body;
const resultElement = document.getElementById("result");
if (option === questions[currentQuestion].answer) {
	score++
	const imgElement = document.getElementById("answerImg");
	imgElement.src = questions[currentQuestion].image;
	document.getElementById("result").textContent = "Resposta correta!";
	body.style.backgroundColor = "green";
	body.style.color= "white";
} else {
	document.getElementById("result").textContent = "Resposta incorreta!";
	document.getElementById("answerImg").src = "";
	body.style.backgroundColor = "red";
	body.style.color= "white";
	resultElement.style.fontSize = "80px";
}
setTimeout(function () {
	body.style.backgroundColor = "";
	body.style.color= "#FF495C";
	resultElement.style.fontSize = "";
}, 1500);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("answerImg").src = '';
        displayQuestion();
    } else {
        const finalScore = document.createElement("h2");
        finalScore.textContent = `O quiz acabou! Sua pontuação final é ${score}/${questions.length}`;
        finalScore.className = "mt-5";

        const resultImage = document.createElement("img");
        resultImage.className = "mt-3";
        
        const container = document.createElement("div");
        container.className = "container text-center";
        container.appendChild(finalScore);

        if (score < 3) {
            resultImage.src = "img/sad.png";
        } else if (score > 3) {
            resultImage.src = "img/happy.png";
        } else {
            resultImage.src = "img/neutral.png";
        }

        container.appendChild(resultImage);
        document.body.innerHTML = '';
        document.body.appendChild(container);
    }
}

displayQuestion();