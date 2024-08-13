document.addEventListener("DOMContentLoaded", function () {
  const text = "Hi, I am Abhideep";
  const typedTextSpan = document.getElementById("typed-text");
  const cursorSpan = document.createElement("span");
  cursorSpan.classList.add("cursor");
  cursorSpan.textContent = "|";
  typedTextSpan.after(cursorSpan);

  let charIndex = 0;
  function type() {
    if (charIndex < text.length) {
      typedTextSpan.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 200);
    } else {
      cursorSpan.remove();
    }
  }

  type();
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});

function toggledarkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const scrolltoabout = () => {
  window.scrollTo(0, 0);
};
const scrolltoedu = () => {
  window.scrollTo(0, 600);
};
const scrolltoskills = () => {
  window.scrollTo(0, 850);
};
const scrolltoprojects = () => {
  window.scrollTo(0, 1150);
};
const scrolltocert = () => {
  window.scrollTo(0, 2900);
};
const scrolltocontact = () => {
  window.scrollTo(0, 40000);
};
