const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "OLLLLEEEYYY. YARIN GÖRÜŞÜRÜZZ!!!";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMml3ZmV3bDF2OWhzODA2MHY2eWgzcHU0a3pmdXE4NXl6d3RkcXM4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Y6n9TR7U07ew/giphy.gif";

  
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  
  noBtn.remove();
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Saat kaçta müsait olduğunu bana yaz...";
  letsGoBtn.classList.add("letsgo-btn"); 
  letsGoBtn.style.position = "absolute";

  
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "400px"; 

 

  
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);