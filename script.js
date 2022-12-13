document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);


const Animals = {
  "cheetah": {
    name: "Cheetah",
    imgSource: "http://cdn.shopify.com/s/files/1/1951/2637/articles/082119_Cheetah_BlogPost_featured-image.jpg?v=1566407036"
  },
  "mouse": {
    name: "Mouse",
    imgSource: "https://a-z-animals.com/media/2019/11/Mouse-header.jpg"
  },
  "owl": {
    name: "Owl",
    imgSource: "https://www.nps.gov/articles/000/images/GGO_spread-wings_Mel-Clements.jpg?maxwidth=1200&autorotate=false"
  },
  "shark": {
    name: "Shark",
    imgSource: "https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg"
  },
  "bear": {
    name: "Bear",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg"
  },
  "moose": {
    name: "Moose",
    imgSource: "https://cdn.britannica.com/57/92857-050-8D5A0A8E/bull-moose-water.jpg"
  },
}


const getSpecialChance = () => {
  let a = Math.floor(Math.random() * 101);
  if (a >= 75) {
    return 1;
  } else if (a > 95) {
    return 2;
  }

  return 0;
}

const processAnswerChoices = () => {
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


const evaluateFinalScore = () => {

  if (4 <= X < 8) {
    outputResult('cheetah');
  } else if (8 <= X < 12) {
    outputResult('mouse');
  } else if (12 <= X < 16) {
    outputResult('owl');
  } else if (16 = X) {
    outputResult('shark');
  }

}

const outputResult = (animalResult) => {
  displayResult.insertAdjacentElement(beforeend, `You are a(n) ${Animal.animalResult.name}`);
  displayResult.insertAdjacentElement(beforeend, `<img class="result-img" src="${Animal.animalResult.img}">`);
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
  let quizAnswers = [];
  let resultAnimal = "";

  quizAnswers


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    let q1Choice = q1.value.toLowerCase();
    let q2Choice = q2.value.toLowerCase();
    let q3Choice = q3.value.toLowerCase();
    let q4Choice = q4.value.toLowerCase();

    let randomBonus = getSpecialChance();

    if (randomBonus != 0) {
      if (randomBonus === 1) {
        resultAnimal = "Bear";
      } else if (randomBonus === 2) {
        resultAnimal = "moose";
      }
    } else {
      evaluateFinalScore(quizAnswers);
    }


    // task 7: create a conditional statement for the responses to Question 1 based on the user input.




    // task 8: create a conditional statement for the responses to Question 2 based on the user input.




    // task 9: create a conditional statement for the responses to Question 3 based on the user input.




    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.




    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.






  };
}