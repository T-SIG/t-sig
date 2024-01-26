window.onload = () => {
  let idToShow = window.location.hash.replace("#", "");

  let divs = document.querySelectorAll(".ans");

  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id != idToShow) {
      // console.log(divs[i].id);
      divs[i].style.display = "none";
    }
  }

  // console.log(idToShow);
};

let answers = {
  1: "16",
  2: "14",
  3: "15",
  4: "2",
  5: "1",
  6: "11",
  7: "Y",
  8: "8",
  9: "52",
  10: "87",
  11: "4",
  12: "3",
  13: "7",
  14: "10",
  15: "65",
  16: "3",
  17: "2",
  18: "a",
  19: "0",
  20: "3",
};

function checkAnswer(qno) {
  let val = document.getElementById(`answerInput${qno}`).value;
  let greenTick = document.createElement("img");
  greenTick.src = "/img/tick.gif";
  let redTick = document.createElement("img");
  redTick.src = "/img/wrong.gif";

  if (val == answers[qno]) {
    let tickContainer = document.getElementById(`tickContainer${qno}`);

    while (tickContainer.firstChild) {
      tickContainer.removeChild(tickContainer.firstChild);
    }

    let msg = document.getElementById(`msg${qno}`);

    msg.innerHTML = "Great job! 🎉 You've aced the challenge! 🚀 Ready to level up? Join us to enhance your coding skills and make an impact. Click Apply Now to start the journey! 💻🚀";

    let applyBtn = document.createElement("a");
    applyBtn.innerHTML = "Apply Now ->";
    applyBtn.href = "https://forms.gle/9UYQddtDJrMrgfc86";

    tickContainer.appendChild(greenTick);

    let thingsDiv = document.getElementsByClassName("things")[qno - 1];
    if (thingsDiv.firstElementChild && thingsDiv.lastElementChild) {
      thingsDiv.removeChild(thingsDiv.firstElementChild);
      thingsDiv.removeChild(thingsDiv.lastElementChild);
    }

    
    msg.after(applyBtn);


  }
  else {
    let tickContainer = document.getElementById(`tickContainer${qno}`);

    while (tickContainer.firstChild) {
      tickContainer.removeChild(tickContainer.firstChild);
    }

    let msg = document.getElementById(`msg${qno}`);

    msg.innerHTML = "No worries! 🤔 Coding challenges can be tricky. It's cool if you didn't nail it this time. 🌈 Join us to boost your coding skills. Click Apply Now and let's learn together! 🚀💡👩‍💻👨‍💻";

    let applyBtn = document.createElement("a");
    applyBtn.innerHTML = "Apply Now ->";
    applyBtn.href = "https://forms.gle/9UYQddtDJrMrgfc86";

    tickContainer.appendChild(redTick);

    let thingsDiv = document.getElementsByClassName("things")[qno - 1];
    if (thingsDiv.firstElementChild && thingsDiv.lastElementChild) {
      thingsDiv.removeChild(thingsDiv.firstElementChild);
      thingsDiv.removeChild(thingsDiv.lastElementChild);
    }

    
    msg.after(applyBtn);

  }
}
