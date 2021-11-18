var isOpenQ1 = false;
var isOpenQ2 = false;
var isOpenQ3 = false;
var isOpenQ4 = false;
var isOpenQ5 = false;

// Events for Q1
const handleMouseoverQ1 = () => {
  document.getElementById("q1").style.color = "hsl(14, 88%, 65%)";
};
const handleMouseoutQ1 = () => {
  document.getElementById("q1").style.color = "hsl(237, 12%, 33%)";
};
const handleClickQ1 = () => {
  if (isOpenQ1) {
    document.getElementById("a1").style.transform = "translateY(100%)";
    document.getElementById("a1").style.height = "0";
    document.getElementById("button1").style.transform = "rotate(0deg)";
    document.getElementById("q1").style.fontWeight = "400";
    isOpenQ1 = false;
  } else {
    document.getElementById("a1").style.transform = "translateY(0%)";
    document.getElementById("a1").style.height = "100%";
    document.getElementById("button1").style.transform = "rotate(180deg)";
    document.getElementById("q1").style.fontWeight = "700";
    isOpenQ1 = true;
  }
};

document.getElementById("q1").addEventListener("mouseover", handleMouseoverQ1);
document.getElementById("q1").addEventListener("mouseout", handleMouseoutQ1);
document.getElementById("q1").addEventListener("click", handleClickQ1);

// Events for Q2
const handleMouseoverQ2 = () => {
  document.getElementById("q2").style.color = "hsl(14, 88%, 65%)";
};
const handleMouseoutQ2 = () => {
  document.getElementById("q2").style.color = "hsl(237, 12%, 33%)";
};
const handleClickQ2 = () => {
  if (isOpenQ2) {
    document.getElementById("a2").style.transform = "translateY(100%)";
    document.getElementById("a2").style.height = "0";
    document.getElementById("button2").style.transform = "rotate(0deg)";
    document.getElementById("q2").style.fontWeight = "400";
    isOpenQ2 = false;
  } else {
    document.getElementById("a2").style.transform = "translateY(0)";
    document.getElementById("a2").style.height = "100%";
    document.getElementById("button2").style.transform = "rotate(180deg)";
    document.getElementById("q2").style.fontWeight = "700";
    isOpenQ2 = true;
  }
};

document.getElementById("q2").addEventListener("mouseover", handleMouseoverQ2);
document.getElementById("q2").addEventListener("mouseout", handleMouseoutQ2);
document.getElementById("q2").addEventListener("click", handleClickQ2);

// Events for Q3
const handleMouseoverQ3 = () => {
  document.getElementById("q3").style.color = "hsl(14, 88%, 65%)";
};
const handleMouseoutQ3 = () => {
  document.getElementById("q3").style.color = "hsl(237, 12%, 33%)";
};
const handleClickQ3 = () => {
  if (isOpenQ3) {
    document.getElementById("a3").style.transform = "translateY(100%)";
    document.getElementById("a3").style.height = "0";
    document.getElementById("button3").style.transform = "rotate(0deg)";
    document.getElementById("q3").style.fontWeight = "400";
    isOpenQ3 = false;
  } else {
    document.getElementById("a3").style.transform = "translateY(0)";
    document.getElementById("a3").style.height = "100%";
    document.getElementById("button3").style.transform = "rotate(180deg)";
    document.getElementById("q3").style.fontWeight = "700";
    isOpenQ3 = true;
  }
};

document.getElementById("q3").addEventListener("mouseover", handleMouseoverQ3);
document.getElementById("q3").addEventListener("mouseout", handleMouseoutQ3);
document.getElementById("q3").addEventListener("click", handleClickQ3);

// Events for Q4
const handleMouseoverQ4 = () => {
  document.getElementById("q4").style.color = "hsl(14, 88%, 65%)";
};
const handleMouseoutQ4 = () => {
  document.getElementById("q4").style.color = "hsl(237, 12%, 33%)";
};
const handleClickQ4 = () => {
  if (isOpenQ4) {
    document.getElementById("a4").style.transform = "translateY(100%)";
    document.getElementById("a4").style.height = "0";
    document.getElementById("button4").style.transform = "rotate(0deg)";
    document.getElementById("q4").style.fontWeight = "400";
    isOpenQ4 = false;
  } else {
    document.getElementById("a4").style.transform = "translateY(0)";
    document.getElementById("a4").style.height = "100%";
    document.getElementById("button4").style.transform = "rotate(180deg)";
    document.getElementById("q4").style.fontWeight = "700";
    isOpenQ4 = true;
  }
};

document.getElementById("q4").addEventListener("mouseover", handleMouseoverQ4);
document.getElementById("q4").addEventListener("mouseout", handleMouseoutQ4);
document.getElementById("q4").addEventListener("click", handleClickQ4);

// Events for Q5
const handleMouseoverQ5 = () => {
  document.getElementById("q5").style.color = "hsl(14, 88%, 65%)";
};
const handleMouseoutQ5 = () => {
  document.getElementById("q5").style.color = "hsl(237, 12%, 33%)";
};
const handleClickQ5 = () => {
  if (isOpenQ5) {
    document.getElementById("a5").style.transform = "translateY(100%)";
    document.getElementById("a5").style.height = "0";
    document.getElementById("button5").style.transform = "rotate(0deg)";
    document.getElementById("q5").style.fontWeight = "400";
    isOpenQ5 = false;
  } else {
    document.getElementById("a5").style.transform = "translateY(0)";
    document.getElementById("a5").style.height = "100%";
    document.getElementById("button5").style.transform = "rotate(180deg)";
    document.getElementById("q5").style.fontWeight = "700";
    isOpenQ5 = true;
  }
};

document.getElementById("q5").addEventListener("mouseover", handleMouseoverQ5);
document.getElementById("q5").addEventListener("mouseout", handleMouseoutQ5);
document.getElementById("q5").addEventListener("click", handleClickQ5);
