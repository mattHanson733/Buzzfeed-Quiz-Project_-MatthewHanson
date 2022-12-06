document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

const getSpecialChance = () => {
  let randomChance = Math.ceil(Math.random() * 10);
  let superRandomChance = Math.ceil(Math.random() * 100);

  if (randomChance === 3) {
    return 
  }
}

const getAnswerChoices = () => {
  if (q1Choice === 'Morning') {
      quizAnswers.push(1);
    } else if (q1Choice === 'Afternoon') {
      quizAnswers.push(2);
    } else if (q1Choice === 'Evening') {
      quizAnswers.push(3);
    } else if (q1Choice === 'Night') {
      quizAnswers.push(4);
    }


    if (q2Choice === 'Salad') {
      quizAnswers.push(1);
    } else if (q2Choice === 'Sushi') {
      quizAnswers.push(2);
    } else if (q2Choice === 'Chicken Salad') {
      quizAnswers.push(3);
    } else if (q2Choice === 'Pizza') {
      quizAnswers.push(4);
    }


    if (q3Choice === 'Track and Field ') {
      quizAnswers.push(1);
    } else if (q3Choice === 'Soccer') {
      quizAnswers.push(2);
    } else if (q3Choice === 'Football') {
      quizAnswers.push(3);
    } else if (q3Choice === 'Tennis') {
      quizAnswers.push(4);
    }


    if (q4Choice === 'Freight') {
      quizAnswers.push(1);
    } else if (q4Choice === 'Bullet') {
      quizAnswers.push(2);
    } else if (q4Choice === 'Light Rail') {
      quizAnswers.push(3);
    } else if (q4Choice === 'None') {
      quizAnswers.push(4);
    }
}


const calculateFinalScore = (questionScoresArray) => {
  
  questionScores.map((e) => {
    quizResult += e;
  })

  if (4 <= X < 8) {
      
    } else if (8 <= X < 12) {
    
    } else if (12 <= X < 16) {
    
    } else if (16 = X) {
    
    } else if (16 < X) {
      
    }
  
}


function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q3");

  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let resultImg = "";
  let quizResult = 0;
  let questionScoreTotal = 0;
  let quizAnswers = {
    q1Answer,
    q2Answer,
    q3Answer,
    q4Answer
  };





  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    let q1Choice = q1.value;
    let q2Choice = q2.value;
    let q3Choice = q3.value;
    let q4Choice = q4.value;



    // task 7: create a conditional statement for the responses to Question 1 based on the user input.




    // task 8: create a conditional statement for the responses to Question 2 based on the user input.




    // task 9: create a conditional statement for the responses to Question 3 based on the user input.




    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.




    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.






  };
}