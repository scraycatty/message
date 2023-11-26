const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 27th cupcake!";
  gif.src = "3rd.gif";

  // Hide Yes and No buttons after clicking Yes
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  gif.src = "2nd.jpg";

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Move back to the default place and reset gif after 1.5 seconds
  setTimeout(() => {
    noBtn.style.left = ""; // Set it back to default (empty string)
    noBtn.style.top = ""; // Set it back to default (empty string)
    gif.src = "1st.gif"; // Set it back to default (empty string)
  }, 1500);
});

