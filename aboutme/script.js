const text = "being working on it...";
const typingElement = document.getElementById("typing-text");
let i = 0;

function type() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100); // Adjust speed (ms) here
  }
}

type();
