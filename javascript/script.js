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

const skillList = document.querySelector("#skillList");
const skillClassList = "flex justify-center items-center w-28 h-28 lg:w-36 lg:h-36 rounded-xl bg-acc4 inset-shadow-sm/50 hover:scale-125 transition-all duration-400 ease-in-out".split(" ");
const skillImageClassList = "w-18 lg:w-28".split(" ");

const htmlSkill = document.createElement("div");
htmlSkill.id = "htmlSkill";
for(let item of skillClassList){
  htmlSkill.classList.add(item);
}

const hmtlSkillImage = document.createElement("img");
hmtlSkillImage.src = "/public/images/html.png";
hmtlSkillImage.alt = "HTML Logo";
for(let item of skillImageClassList){
  hmtlSkillImage.classList.add(item);
}

htmlSkill.appendChild(hmtlSkillImage);

const cssSkill = document.createElement("div");
cssSkill.id = "cssSkill";
for(let item of skillClassList){
  cssSkill.classList.add(item);
}

const cssSkillImage = document.createElement("img");
cssSkillImage.src = "/public/images/css.png";
cssSkillImage.alt = "CSS Logo";
for(let item of skillImageClassList){
  cssSkillImage.classList.add(item);
}

cssSkill.appendChild(cssSkillImage);

const cSkill = document.createElement("div");
cSkill.id = "cSkill";
for(let item of skillClassList){
  cSkill.classList.add(item);
}

const cSkillImage = document.createElement("img");
cSkillImage.src = "/public/images/c.png";
cSkillImage.alt = "HTML Logo";
for(let item of skillImageClassList){
  cSkillImage.classList.add(item);
}

cSkill.appendChild(cSkillImage);

const tailwindSkill = document.createElement("div");
tailwindSkill.id = "tailwindSkill";
for(let item of skillClassList){
  tailwindSkill.classList.add(item);
}

const tailwindSkillImage = document.createElement("img");
tailwindSkillImage.src = "/public/images/tailwind.png";
tailwindSkillImage.alt = "HTML Logo";
for(let item of skillImageClassList){
  tailwindSkillImage.classList.add(item);
}

tailwindSkill.appendChild(tailwindSkillImage);

const javascriptSkill = document.createElement("div");
javascriptSkill.id = "tailwindSkill";
for(let item of skillClassList){
  javascriptSkill.classList.add(item);
}

const javascriptSkillImage = document.createElement("img");
javascriptSkillImage.src = "/public/images/javascript.png";
javascriptSkillImage.alt = "HTML Logo";
for(let item of skillImageClassList){
  javascriptSkillImage.classList.add(item);
}

javascriptSkill.appendChild(javascriptSkillImage);



skillList.appendChild(htmlSkill);
skillList.appendChild(cssSkill);
skillList.appendChild(javascriptSkill);
skillList.appendChild(tailwindSkill);
skillList.appendChild(cSkill);