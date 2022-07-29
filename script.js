const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = navLink.getAttribute("href");
    // console.log(id);
    const idSelect = document.querySelector(id);
    idSelect.scrollIntoView({ behavior: "smooth" });
  });
});

const mainMain = document.querySelectorAll(".about-me-content");
const main = document.querySelector(".main-content");
const initialCoords = main.getBoundingClientRect();
const header = document.querySelector("#home");


const text = document.querySelector(".sec-text");
// console.log(header.getBoundingClientRect());
// console.log(main.getBoundingClientRect());

const textLoad = ()=>{
  setTimeout(()=>{
    text.textContent = "Web Developer"
  }, 0)
  setTimeout(()=>{
    text.textContent = "Freelancer"
  }, 4000)
}

textLoad()
setInterval(textLoad,12000)


window.addEventListener("scroll", function (e) {
  if (window.scrollY > initialCoords.top) {
    header.classList.add("header-sticky");
  } else header.classList.remove("header-sticky");
});

const obsCallback = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    sectionObserver  }
  // else {mainMain.classList.add('section--hidden')}
  // console.log(entries);
};
const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

mainMain.forEach(function (section) {
  const sectionObserver = section.classList.add("section--show");
  observer.observe(section);
});

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(main);
