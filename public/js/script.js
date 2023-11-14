const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

// code for survey
document.addEventListener("DOMContentLoaded", function() {
  const surveyForm = document.getElementById("survey-form");
  const addQuestionButton = document.getElementById("add-question");
  const questionsContainer = document.getElementById("questions-container");

  addQuestionButton.addEventListener("click", function() {
      const questionType = document.getElementById("question-type").value;
      const questionText = document.getElementById("question").value;
      if (questionText) {
          const questionDiv = document.createElement("div");
          questionDiv.classList.add("question");
          const questionLabel = document.createElement("label");
          questionLabel.textContent = questionText;
          let inputField;
          if (questionType == "multiple-choice") {
              inputField = document.createElement("input");
              inputField.type = "text";
              inputField.placeholder = "Enter options (comma-separated)";
          } else if (questionType === "text") {
              inputField = document.createElement("input");
              inputField.type = "text";
              inputField.placeholder = "User's answer";
          } else if (questionType === "rating") {
              inputField = document.createElement("input");
              inputField.type = "number";
              inputField.min = "1";
              inputField.max = "5";
              inputField.placeholder = "Enter rating (1-5)";
          }
          questionDiv.appendChild(questionLabel);
          questionDiv.appendChild(inputField);
          questionsContainer.appendChild(questionDiv);
      }
  });

  surveyForm.addEventListener("submit", function(e) {
      e.preventDefault();
      // Add logic to save survey data to the backend here
  });
});

// code for customization
document.addEventListener("DOMContentLoaded", function() {
  const customizationForm = document.getElementById("customization-form");
  const surveyColorInput = document.getElementById("survey-color");
  const surveyPreview = document.getElementById("survey-preview");

  customizationForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const selectedColor = surveyColorInput.value;
      
      // Apply customization to the survey preview
      surveyPreview.style.backgroundColor = selectedColor;
      // surveyPreview.style.backgroundColor = selectedColor;

  });
});

// resposne HTMLAllCollection 
document.addEventListener("DOMContentLoaded", function() {
  const surveyForm = document.getElementById("survey-form");

  surveyForm.addEventListener("submit", function(e) {
      e.preventDefault();

      // Collect responses and submit to backend
      const responses = {
          question1: document.querySelector('input[name="question1"]:checked').value,
          question2: document.querySelector('textarea[name="question2"]').value,
          question3: parseInt(document.querySelector('input[name="question3"]').value)
      };

      // Send responses to the backend (replace with actual API call)
      sendResponsesToBackend(responses);
  });

  function sendResponsesToBackend(responses) {
      // Implement logic to send responses to the backend
      // You can use AJAX, fetch, or an API library
      console.log("Sending responses:", responses);
  }
});

// code for distribution 
document.addEventListener("DOMContentLoaded", function() {
  const distributionForm = document.getElementById("distribution-form");
  const distributionMethodSelect = document.getElementById("distribution-method");
  const distributionDetails = document.getElementById("distribution-details");

  distributionForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const selectedMethod = distributionMethodSelect.value;
      
      let distributionDetailsHTML = "";
      
      if (selectedMethod === "email") {
          distributionDetailsHTML = "<p>You will receive an email with the survey link.</p>";
      } else if (selectedMethod === "link") {
          const uniqueSurveyLink = generateUniqueLink(); // Replace with your actual link generation logic
          distributionDetailsHTML = `<p>Here is your survey link: <a href="${uniqueSurveyLink}" target="_blank">${uniqueSurveyLink}</a></p>`;
      } else if (selectedMethod === "social-media") {
          distributionDetailsHTML = "<p>You can share the survey on your preferred social media platform.</p>";
      }
      
      distributionDetails.innerHTML = distributionDetailsHTML;
  });

  function generateUniqueLink() {
      // Implement your logic to generate a unique survey link
      // This could involve combining base URL with a unique identifier
      return "https://example.com/survey/abc123";
  }
});


// servey results code 
document.addEventListener("DOMContentLoaded", function() {
  // Sample data for demonstration
  const responseData = {
      labels: ['Red', 'Blue', 'Green', 'Yellow'],
      data: [15, 25, 20, 30]
  };

  // Create a pie chart
  const responseChart = new Chart(document.getElementById('response-chart'), {
      type: 'pie',
      data: {
          labels: responseData.labels,
          datasets: [{
              data: responseData.data,
              backgroundColor: ['#ff6384', '#36a2eb', '#4bc0c0', '#ffce56'],
          }]
      }
  });
});

// document.addEventListener("DOMContentLoaded",function(){
//   const sign=document.getElementById('sibtn');
//   const data=document.getElementsByClassName('container1');
//   const log=document.getElementsByClassName('login-wrap body');
//   const btn=document.getElementById('logbtn');
  
//   log[0].style.display='none';
//   btn.addEventListener('click',function(){
//     for(var i=0;i<data.length;i++){
//        data[i].style.display='none';
//       }
//        log[0].style.display='block';
  
//   });
  
//   sign.addEventListener('click',function () {
//     for(var i=0;i<data.length;i++){
//       data[i].style.display='block';
//      }
//     log[0].style.display='none';
  
//   });
// });