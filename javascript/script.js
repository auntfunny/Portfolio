const sectionDropDownButton = document.querySelector("#sectionDropDownButton");
const sectionDropDownMenu = document.querySelector("#sectionDropDownMenu");
const pagesDropDownButton = document.querySelector("#pagesDropDownButton");
const pagesDropDownMenu = document.querySelector("#pagesDropDownMenu");
const aboutLink = document.querySelector("#aboutLink");
const skillsLink = document.querySelector("#skillsLink");
const projectsLink = document.querySelector("#projectsLink");


let pageMenuToggle = 0;
let sectionMenuToggle = 0;

pagesDropDownButton.addEventListener("click", togglePageMenu);
sectionDropDownButton.addEventListener("click", toggleSectionMenu);
aboutLink.addEventListener("click", toggleSectionMenu);
skillsLink.addEventListener("click", toggleSectionMenu);
projectsLink.addEventListener("click", toggleSectionMenu);
document.body.addEventListener("click", checkMenus);




function togglePageMenu(event) {
  if (pageMenuToggle === 0) {
    pagesDropDownMenu.classList.toggle("hidden");
    event.stopPropagation(); 
    pageMenuToggle = 1;
  } else {
    pagesDropDownMenu.classList.toggle("hidden");
    pageMenuToggle = 0;
  }
  if (sectionMenuToggle === 1) {
    sectionDropDownMenu.classList.toggle("hidden");
    sectionMenuToggle = 0;
  }
}

function toggleSectionMenu(event) {
  if (sectionMenuToggle === 0) {
    sectionDropDownMenu.classList.toggle("hidden");
    event.stopPropagation(); 
    sectionMenuToggle = 1;
  } else {
    sectionDropDownMenu.classList.toggle("hidden");
    sectionMenuToggle = 0;
  }
  if (pageMenuToggle === 1) {
    pagesDropDownMenu.classList.toggle("hidden");
    pageMenuToggle = 0;
  }
}


function checkMenus(event){
    if (!pagesDropDownMenu.contains(event.target) && pageMenuToggle === 1) {
    togglePageMenu();
  } else if(!sectionDropDownMenu.contains(event.target) && sectionMenuToggle === 1) {
    toggleSectionMenu();
  }
}