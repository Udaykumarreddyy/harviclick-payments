console.log("JS is working");
const amountInput = document.getElementById("amount");
const result = document.getElementById("result");
const charge = document.getElementById("charge");

function calculate() {
  if (!amountInput || !result || !charge) {
    return;
  }

  let amount = parseFloat(amountInput.value) || 0;

  let charges = Math.round(amount * 0.017);
  let finalAmount = amount - charges;

  charge.textContent = "₹ " + charges;
  result.textContent = "₹ " + finalAmount;
}

if (amountInput) {
  amountInput.addEventListener("input", calculate);
}

// run once on load
calculate();

const revealCards = document.querySelectorAll(".reveal-card");

if (revealCards.length > 0 && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 35}ms`;
    revealObserver.observe(card);
  });
} else {
  revealCards.forEach((card) => card.classList.add("in-view"));
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // close others
    faqItems.forEach((el) => {
      if (el !== item) {
        el.classList.remove("active");
        el.querySelector(".icon").textContent = "+";
      }
    });

    // toggle current
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});

const scrollBtn = document.getElementById("scrollTopBtn");

// show button when scroll down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

// scroll to top when clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
