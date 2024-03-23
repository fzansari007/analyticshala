// Nav menu icons click
const navIconClick = (btnType) => {
  let burgerBtn = document.querySelector(".fa-bars");
  let closeBtn = document.querySelector(".fa-xmark");
  let navBar = document.querySelector(".nav_links");
  let navBarLinks = document.querySelectorAll(".nav_links a");

  if (btnType === "burger") {
    burgerBtn.classList.add("inactive");
    closeBtn.classList.remove("inactive");
    navBar.classList.remove("inactive");
    navBarLinks.forEach((link) => link.classList.remove("inactive"));
  } else {
    burgerBtn.classList.remove("inactive");
    closeBtn.classList.add("inactive");
    navBar.classList.add("inactive");
    navBarLinks.forEach((link) => link.classList.add("inactive"));
  }
};

const closeMenu = () => {
  let burgerBtn = document.querySelector(".fa-bars");
  let closeBtn = document.querySelector(".fa-xmark");
  let navBar = document.querySelector(".nav_links");
  let navBarLinks = document.querySelectorAll(".nav_links a");

  burgerBtn.classList.remove("inactive");
  closeBtn.classList.add("inactive");
  navBar.classList.add("inactive");
  navBarLinks.forEach((link) => link.classList.add("inactive"));
};

// Handle form click
const handleSubmit = () => {
  e.preventDefault();
  debugger;
};

// Courses Modal
const coursesClick = (course) => {
  const modal_container = document.getElementById("modal_container");
  const modal_title = document.getElementById("course_title");
  const modal_top = document.getElementById("courses_modal_top");
  const modal_bottom = document.getElementById("courses_modal_bottom");

  modal_container.classList.add("active");

  if (course === "data") {
    modal_title.innerText = "Data Visualization";
    modal_top.innerText = "Data Visualization top section";
    modal_bottom.innerText = "Data Visualization bottom section";
  } else if (course === "reporting") {
    modal_title.innerText = "Reporting Analytics";
    modal_top.innerText = "Reporting Analytics top section";
    modal_bottom.innerText = "Reporting Analytics bottom section";
  } else if (course === "etl") {
    modal_title.innerText = "ETL";
    modal_top.innerText = "ETL top section";
    modal_bottom.innerText = "ETL bottom section";
  } else if (course === "python") {
    modal_title.innerText = "Python";
    modal_top.innerText = "Python top section";
    modal_bottom.innerText = "Python bottom section";
  } else if (course === "excel") {
    modal_title.innerText = "Excel VBA";
    modal_top.innerText = "Excel VBA top section";
    modal_bottom.innerText = "Excel VBA bottom section";
  } else if (course === "tableau") {
    modal_title.innerText = "Tableau";
    modal_top.innerText = "Tableau top section";
    modal_bottom.innerText = "Tableau bottom section";
  }
};

const modalClose = () => {
  modal_container.classList.remove("active");
};
