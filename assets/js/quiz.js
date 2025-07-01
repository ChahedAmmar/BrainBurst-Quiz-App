const title=document.getElementById("quiz-title");
const container=document.getElementById("quiz-container");
let  currentQuiz=null
let progressBar=document.getElementById("progress");
let userAnswers=[]
let questionIndex=0;
let score=0;
let questionNumber=document.getElementById("question-number");
let startTime;
document.addEventListener("DOMContentLoaded", function() {
   const id=getQuizId();
   
   if(!id){
       container.innerHTML="<p>Quiz not found</p>";
       return;
   }
   else{
    getQuizData(id);
   }


}
)

function getQuizId(){
    const param=new URLSearchParams(window.location.search);
    const quizId=param.get("quiz");
    return quizId;
}
function getQuizData(quizId){

    currentQuiz=data.quizzes.find(q=>q.id===quizId);
    if(!currentQuiz){
        return null;
    }
    questionIndex=0;
    score=0;
    startTime=new Date();
    userAnswers=[]
    title.textContent=currentQuiz.title;
    showQuestions();


    
}
function showQuestions(){
    const question = currentQuiz.questions[questionIndex];
    
    container.innerHTML = `
        <h3>${question.question}</h3>
        <div class="choices" id="choices-container"></div>
        <div class="buttons">
                  
            ${questionIndex > 0 ? `<button class="back" onclick="goBack()">Previous</button>` : ""}
            <button class="next" onclick="nextQuestion()"> ${questionIndex === currentQuiz.questions.length - 1 ? "Finish" : "Next"}</button>
              <button class="home" onclick="goHome()">Home</button>

        </div>
    `;
    
    const choicesContainer = document.getElementById('choices-container');
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.textContent = choice; 
        button.onclick = () => selectedAnswer(index);
        choicesContainer.appendChild(button);
    });
    
    progressBar.style.width = `${(questionIndex + 1) / currentQuiz.questions.length * 100}%`;
}
function selectedAnswer(index){
    document.querySelectorAll(".choice").forEach((btn, i) => {
        btn.disabled = true;
        
    })
    const selectedBtn=document.querySelectorAll(".choice")[index];
    if(index===currentQuiz.questions[questionIndex].answer){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
        selectedBtn.classList.add("selected");
        const correctIndex=currentQuiz.questions[questionIndex].answer;
        document.querySelectorAll(".choice")[correctIndex].classList.add("correct");
    }
    userAnswers[questionIndex] = index;
    
    

}
function nextQuestion(){
    if(userAnswers[questionIndex] === undefined) {
        alert("Please select an answer before proceeding.");
        return;
    }
    if(questionIndex<currentQuiz.questions.length-1){
        questionIndex++;

        showQuestions();
        questionNumber.textContent = `Question ${questionIndex + 1} of ${currentQuiz.questions.length}`;
    }
    else{
        finishQuiz();
    }
}
function goBack(){
    if(questionIndex>0){
        questionIndex--;
        showQuestions();
        questionNumber.textContent = `Question ${questionIndex +1} of ${currentQuiz.questions.length}`;
    }
}
function finishQuiz() {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
  
    Storage.saveHistory(
      currentQuiz.id,
      currentQuiz.title,
      score,
      10,
      Math.round(timeTaken)
    );
  
    container.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your score: ${score} / ${currentQuiz.questions.length}</p>
      <p>Time taken: ${Math.round(timeTaken)} seconds</p>
      <button class="restart" onclick="restartQuiz()">Restart Quiz</button>
      <button class="home" onclick="goHome()">Home</button>
    `;
  }
  
  
function restartQuiz(){
    questionIndex=0;
    score=0;
    userAnswers=[];
    startTime=new Date();
    showQuestions();
}
function goHome(){
    window.location.href="../index.html";
}
