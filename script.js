const displayResult = document.querySelector(".display-result");
const submitButton = document.querySelector(".submit-btn");

let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");
let q3 = document.querySelector(".q3");
let q4 = document.querySelector(".q3");

let q1Answer;//Set with Question #1 value
let q2Answer; //Set with Question #2 value
let q3Answer; //Set with Question #3 value
let q4Answer; //Set with Question #4 value


const API_ENDPOINT_URL = "https://api.random.org/json-rpc/4/invoke";
const API_KEY = "cd5f8d1f-153c-484e-8d90-b14b314fee36";

const getRandomChance = (lowerBound, upperBound) => {

  fetch(API_ENDPOINT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'generateIntegers',
      params: {
        "apiKey": API_KEY,
        "n": 1,
        "min": lowerBound,
        "max": upperBound,
        "replacement": false
      },
      id: 1,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data.result.random.data[1];
    });
}

const getUserAnswerScore = () => {
  console.log("Got to getUserAnswerScore");

  let questionScores = [];

  if (q1Answer === "morning") {
    questionScores.push(1);
  } else if (q1Answer === "afternoon") {
    questionScores.push(2);
  } else if (q1Answer === "evening") {
    questionScores.push(3);
  } else if (q1Answer === "night") {
    questionScores.push(4);
  }


  if (q2Answer === "salad") {
    questionScores.push(4);
  } else if (q2Answer === "sushi") {
    questionScores.push(3);
  } else if (q2Answer === "chicken salad") {
    questionScores.push(2);
  } else if (q2Answer === "pizza") {
    questionScores.push(1);
  }


  if (q3Answer === "track and field") {
    questionScores.push(1);
  } else if (q3Answer === "football") {
    questionScores.push(2);
  } else if (q3Answer === "soccer") {
    questionScores.push(3);
  } else if (q3Answer === "tennis") {
    questionScores.push(4);
  }


  if (q4Answer === "freight") {
    questionScores.push(4);
  } else if (q4Answer === "bullet") {
    questionScores.push(3);
  } else if (q4Answer === "light rail") {
    questionScores.push(2);
  } else if (q4Answer === "none") {
    questionScores.push(1);
  }

  return questionScores;
}

const calcUserScore = (scoreArray) => {

  let totalScore = 0;

  for (let i = 0; i < scoreArray.length; i++) {
    totalScore += scoreArray[i];
  }

  return totalScore;
}

const elvalutateFinalScore = (finalScore) => {
  let randomChanceNumber = getRandomChance(1, 100);


  if (randomChanceNumber >= 75 && randomChanceNumber <= 95) {
    return {
      name: "Bear",
      imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg"
    };
  } else if (randomChanceNumber > 95) {
    return {
      name: "Moose",
      imgSource: "https://cdn.britannica.com/57/92857-050-8D5A0A8E/bull-moose-water.jpg"
    };
  } else {
    if (finalScore >= 4 && finalScore < 8) {
      return {
        name: "Cheetah",
        imgSource: "http://cdn.shopify.com/s/files/1/1951/2637/articles/082119_Cheetah_BlogPost_featured-image.jpg?v=1566407036"
      };
    } else if (finalScore >= 8 && finalScore < 12) {
      return {
        name: "Mouse",
        imgSource: "https://a-z-animals.com/media/2019/11/Mouse-header.jpg"
      };
    } else if (finalScore >= 12 && finalScore < 16) {
      return {
        name: "Owl",
        imgSource: "https://www.nps.gov/articles/000/images/GGO_spread-wings_Mel-Clements.jpg?maxwidth=1200&autorotate=false"
      };
    } else if (finalScore === 16) {
      return {
        name: "Shark",
        imgSource: "https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg"
      };
    }
  }
}

const processAnswers = () => {
  let userAnswerArr = getUserAnswerScore();

  let finalScore = calcUserScore(userAnswerArr);

  return elvalutateFinalScore(finalScore);
}

const getQuizResult = () => {
  q1Answer = q1.value; //Set with Question #1 value
  q2Answer = q2.value; //Set with Question #2 value
  q3Answer = q3.value; //Set with Question #3 value
  q4Answer = q4.value; //Set with Question #4 value


  let resultAnimal = processAnswers();
console.log("quizResult finish process")
  
  displayResult.insertAdjacentHTML("beforeend", `<p class='result-text'>You are a(n) ${resultAnimal.name}</p>`);
  
  displayResult.insertAdjacentHTML("beforeend", `<img class='result-img' src='${resultAnimal.imgSource}'>`);
}

/*
submitButton.onclick(() => {
  q1Answer = q1.value; //Set with Question #1 value
  q2Answer = q2.value; //Set with Question #2 value
  q3Answer = q3.value; //Set with Question #3 value
  q4Answer = q4.value; //Set with Question #4 value

  let resultAnimal = processAnswers();

  displayResult.insertAdjacentElement("beforeend", `<p class='result-text'>You are a(n) ${resultAnimal.name}</p>`);
  console.log("outputted name");
  
  displayResult.insertAdjacentElement("beforeend", `<img class='result-img' href='${resultAnimal.imgSource}'>`);

});
*/