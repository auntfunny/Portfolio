import projects from "../data/projects.json";

const pagesDropDownButton = document.querySelector("#pagesDropDownButton");
const pagesDropDownMenu = document.querySelector("#pagesDropDownMenu");
const mainBody = document.querySelector("#mainBody");
const projectList = document.querySelector("#projectList");
const showMore = document.querySelector("#showMore");

let pageMenuToggle = 0;

pagesDropDownButton.addEventListener("click", togglePageMenu);
document.body.addEventListener("click", checkMenus);
showMore.addEventListener("click", showMoreProjects);

function togglePageMenu(event) {
  if (pageMenuToggle === 0) {
    pagesDropDownMenu.classList.toggle("hidden");
    event.stopPropagation();
    pageMenuToggle = 1;
  } else {
    pagesDropDownMenu.classList.toggle("hidden");
    pageMenuToggle = 0;
  }
}

function checkMenus(event) {
  if (!pagesDropDownMenu.contains(event.target) && pageMenuToggle === 1) {
    togglePageMenu();
  }
}

/**************************************************************************************************************

          CARD CLASS STYLES

***************************************************************************************************************/
const projectCardList = [];
const projectCardIDList = [];

let cardClassList1 =
  "flex flex-col lg:flex-row justify-between gap-4 items-center w-3/4 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl hidden".split(
    " ",
  );
let cardClassList2 =
  "flex flex-col lg:flex-row-reverse justify-between gap-4 items-center w-3/4 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl hidden".split(
    " ",
  );
let linkClasses =
  "w-full md:w-120 hover:scale-105 transition-transform duration-300 ease-in-out".split(
    " ",
  );
let imageClasses = "rounded-xl w-full".split(" ");
let captionClasses =
  "w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly".split(" ");
let articleTitleClasses1 =
  "text-lg md:text-3xl text-center lg:text-right text-acc3 pr-4".split(" ");
let articleTitleClasses2 =
  "text-lg md:text-3xl text-center lg:text-left text-acc3".split(" ");
let articlePClasses = "text-xs md:text-base text-acc4 p-2 md:indent-8".split(
  " ",
);
let sourceLinkClasses =
  "px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out".split(
    " ",
  );

/**************************************************************************************************************

          CARD CLASSES

***************************************************************************************************************/

class projectCard {
  constructor(newID, style) {
    this.element = document.createElement("li");
    this.element.id = newID;
    if (style === 1) {
      this.element.classList.add(...cardClassList1);
    } else {
      this.element.classList.add(...cardClassList2);
    }
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

class projectPageLink {
  constructor(newID, newHref) {
    this.element = document.createElement("a");
    this.element.id = newID;
    this.element.href = newHref;
    this.element.target = "_blank";
    this.element.classList.add(...linkClasses);
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

class projectImage {
  constructor(newID, newAlt, newSrc) {
    this.element = document.createElement("img");
    this.element.id = newID;
    this.element.alt = newAlt;
    this.element.src = newSrc;
    this.element.classList.add(...imageClasses);
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

class projectCaption {
  constructor(newID) {
    this.element = document.createElement("div");
    this.element.id = newID;
    this.element.classList.add(...captionClasses);
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

class projectTitle {
  constructor(newID, newTextContent, style) {
    this.element = document.createElement("h2");
    this.element.id = newID;
    this.element.textContent = newTextContent;
    if (style === 1) {
      this.element.classList.add(...articleTitleClasses1);
    } else {
      this.element.classList.add(...articleTitleClasses2);
    }
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

class projectP {
  constructor(newID, newTextContent) {
    this.element = document.createElement("p");
    this.element.id = newID;
    this.element.textContent = newTextContent;
    this.element.classList.add(...articlePClasses);
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

class projectSourceLink {
  constructor(newID, newHref, newText) {
    this.element = document.createElement("a");
    this.element.id = newID;
    this.element.href = newHref;
    this.element.target = "_blank";
    this.element.textContent = newText;
    this.element.classList.add(...sourceLinkClasses);
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

          LOAD PROJECTS TO PAGE

***************************************************************************************************************/
let loadedProjects = 5


for (let project of projects) {
  const newCard = new projectCard(project.card.id, project.card.style);

  const newPageLink = new projectPageLink(
    project.pageLink.id,
    project.pageLink.href,
  );

  const newImage = new projectImage(
    project.image.id,
    project.image.alt,
    project.image.src,
  );

  const newCaption = new projectCaption(project.caption.id);

  const newTitle = new projectTitle(
    project.articleTitle.id,
    project.articleTitle.text,
    project.articleTitle.style,
  );

  const newPara = new projectP(
    project.articlePara.id,
    project.articlePara.text,
  );

  const newSourceLink = new projectSourceLink(
    project.sourceLink.id,
    project.sourceLink.href,
    project.sourceLink.text,
  );

  newCard.appendTo(`#projectList`);
  newPageLink.appendTo(`#${project.card.id}`);
  newCaption.appendTo(`#${project.card.id}`);
  newImage.appendTo(`#${project.pageLink.id}`);
  newTitle.appendTo(`#${project.caption.id}`);
  newPara.appendTo(`#${project.caption.id}`);
  newSourceLink.appendTo(`#${project.caption.id}`);
}

function loadProjects(number){
  for(let i = 0; i < number; i++){
    projectList.children[i].classList.remove("hidden");
  }
}

function showMoreProjects() {
  if(loadedProjects < projects.length - 5){
    loadedProjects += 5;
  } else {
    loadedProjects = projects.length;
    mainBody.removeChild(showMore);
  }
  loadProjects(loadedProjects);
}

loadProjects(loadedProjects);

/**************************************************************************************************************

          EMAIL FUNCTION

***************************************************************************************************************/
const sendEmail = document.querySelector("#sendEmail");
const formButton = document.querySelector("#formButton");
const statusMessage = document.querySelector("#statusMessage")
import emailjs from "@emailjs/browser";

emailjs.init({ publicKey: "W02jWj1PPR-ybgsFu" });

sendEmail.addEventListener("submit", sendTheEmail);

function sendTheEmail(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const templateParams = {
    message: formData.get("message"),
    title: formData.get("subject"),
    name: formData.get("nameOFSender"),
    email: formData.get("emailOfSender"),
    time: new Date().toString(),
  };
  console.log(templateParams);

  buttonLoading(true);
  emailjs
    .send("service_my_page", "template_5q88fyt", templateParams)
    .then(
      () => {
        console.log("SUCCESS!");
        statusMessage.textContent = "Message Sent!"
      },
      (error) => {
        console.log("FAILED...", error.text);
        statusMessage.textContent = "Message failed to send"
      },
    )
    .finally(() => buttonLoading(false));

  event.target.reset();
}

function buttonLoading(status) {
  formButton.disabled = status;
  if (status) {
    formButton.innerHTML = `<div class="w-6 h-6 rounded-full border-3 border-acc4 border-t-acc1 animate-spin"><div>`;
    formButton.classList.add("hover:cursor-wait");
    formButton.classList.remove(
      "hover:cursor-pointer",
      "hover:bg-acc4",
      "hover:text-acc3",
    );
  } else {
    formButton.innerHTML = "Send message";
    formButton.classList.remove("hover:cursor-wait");
    formButton.classList.add(
      "hover:cursor-pointer",
      "hover:bg-acc4",
      "hover:text-acc3",
    );
  }
}
