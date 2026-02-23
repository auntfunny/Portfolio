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

function checkMenus(event) {
  if (!pagesDropDownMenu.contains(event.target) && pageMenuToggle === 1) {
    togglePageMenu();
  } else if (
    !sectionDropDownMenu.contains(event.target) &&
    sectionMenuToggle === 1
  ) {
    toggleSectionMenu();
  }
}

/**************************************************************************************************************

          CARD CLASS STYLES

***************************************************************************************************************/

const skillList = document.querySelector("#skillList");
const skillClassList =
  "flex justify-center items-center w-28 h-28 lg:w-36 lg:h-36 rounded-xl bg-acc4 inset-shadow-sm/50 hover:scale-125 transition-all duration-400 ease-in-out".split(
    " ",
  );
const skillImageClassList = "w-18 lg:w-28".split(" ");

/**************************************************************************************************************

          CARD CLASSES

***************************************************************************************************************/

class skillItem {
  constructor(newID) {
    this.element = document.createElement("div");
    this.element.id = newID;
    this.element.classList.add(...skillClassList);
  }

  appendTo(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
      parent.appendChild(this.element);
    } else {
      console.error(
        `Parent element with selector "${parentSelector}" not found.`,
      );
    }
  }
}

class skillImage {
  constructor(newID, newAlt, newSrc) {
    this.element = document.createElement("img");
    this.element.id = newID;
    this.element.alt = newAlt;
    this.element.src = newSrc;
    this.element.classList.add(...skillImageClassList);
  }

  appendTo(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
      parent.appendChild(this.element);
    } else {
      console.error(
        `Parent element with selector "${parentSelector}" not found.`,
      );
    }
  }
}
/**************************************************************************************************************

          SKILL CARDS

***************************************************************************************************************/
const skillCardList = [];

const htmlCard ={
  base: {
    id: "htmlSkill"
  },
  image: {
    id: "hmtlSkillImage",
    alt: "HTML Logo",
    src: "/images/html.png"
  }
}
skillCardList.push(htmlCard);

const cssCard ={
  base: {
    id: "cssSkill"
  },
  image: {
    id: "cssSkillImage",
    alt: "CSS Logo",
    src: "/images/css.png"
  }
}
skillCardList.push(cssCard);


const javascriptCard ={
  base: {
    id: "javascriptSkill"
  },
  image: {
    id: "javascriptSkillImage",
    alt: "JavaScript Logo",
    src: "/images/javascript.png"
  }
}
skillCardList.push(javascriptCard);


const cCard ={
  base: {
    id: "cSkill"
  },
  image: {
    id: "cSkillImage",
    alt: "C++ Logo",
    src: "/images/c.png"
  }
}
skillCardList.push(cCard);


const tailwindCard ={
  base: {
    id: "tailwindSkill"
  },
  image: {
    id: "tailwindSkillImage",
    alt: "Tailwind Logo",
    src: "/images/tailwind.png"
  }
}
skillCardList.push(tailwindCard);


for(let skill of skillCardList){
  const newCard = new skillItem (skill.base.id);
  const newImage = new skillImage(skill.image.id, skill.image.alt, skill.image.src)

  newCard.appendTo("#skillList");
  newImage.appendTo(`#${skill.base.id}`);
}

