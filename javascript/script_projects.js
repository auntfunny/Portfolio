const pagesDropDownButton = document.querySelector("#pagesDropDownButton");
const pagesDropDownMenu = document.querySelector("#pagesDropDownMenu");
const mainBody = document.querySelector("#mainBody");

let pageMenuToggle = 0;

pagesDropDownButton.addEventListener("click", togglePageMenu);
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
  "flex flex-col lg:flex-row justify-between gap-4 items-center w-3/4 min-h-84 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl".split(
    " ",
  );
let cardClassList2 =
  "flex flex-col lg:flex-row-reverse justify-between gap-4 items-center w-3/4 min-h-84 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl".split(
    " ",
  );
let linkClasses =
  "w-full md:w-120 hover:scale-105 transition-transform duration-300 ease-in-out".split(
    " ",
  );
let imageClasses = "rounded-xl w-full".split(" ");
let captionClasses =
  "w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly h-80".split(" ");
let articleTitleClasses1 =
  "text-lg md:text-3xl text-center lg:text-right text-acc3".split(" ");
let articleTitleClasses2 =
  "text-lg md:text-3xl text-center lg:text-left text-acc3".split(" ");
let articlePClasses = "text-xs md:text-base text-acc4 px-2 md:indent-8".split(
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
    this.element = document.createElement("article");
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

          AGE CALCULATOR CARD

***************************************************************************************************************/

const ageCalculatorObject = {
  card: {
    id: "ageCalculator",
    style: 2,
  },
  pageLink: {
    id: "agePageLink",
    href: "https://age-calculator-app-nine-pi.vercel.app/",
  },
  image: {
    id: "ageImage",
    alt: "Age Calculator",
    src: "/images/Age_Calculator_Large.png",
  },
  caption: {
    id: "ageCaption",
  },
  articleTitle: {
    id: "ageArticleTitle",
    text: "Age Calculator App",
    style: 2,
  },
  articlePara: {
    id: "ageArticleP",
    text: `This was from Frontend Mentor It takes a date and uses it as the birth date 
            to calculate the age of the person. As the user inputs the date, it verifies 
            that the date is valid and, when the button is pressed, it validates the total 
            date before calculating. I learned more about Javascript and how to write more 
            logical and clean code.`,
  },
  sourceLink: {
    id: "ageSourceLink",
    href: "https://github.com/auntfunny/Age-Calculator-App",
    text: "GitHub Repository",
  },
};
projectCardList.push(ageCalculatorObject);

/**************************************************************************************************************

          TIP CALCULATOR CARD

***************************************************************************************************************/

const tipCalculatorObject = {
  card: {
    id: "newTipCalculator",
    style: 1,
  },
  pageLink: {
    id: "tipPageLink",
    href: "https://tip-calculator-app-bay-phi.vercel.app/",
  },
  image: {
    id: "tipImage",
    alt: "Tip Calculator",
    src: "/images/Tip_Calculator_Large.png",
  },
  caption: {
    id: "tipCaption",
  },
  articleTitle: {
    id: "tipArticleTitle",
    text: "Tip Calculator App",
    style: 1,
  },
  articlePara: {
    id: "tipArticleP",
    text: `This project was from a Frontend Mentor challenge. It was my first
            JavaScript project, and I learned a lot about DOM manipulation and
            how to create interactive material, letting the user enter info and
            change the appearance of the site. It was an exciting first project
            that taught me a lot of new skills.`,
  },
  sourceLink: {
    id: "tipSourceLink",
    href: "https://github.com/auntfunny/Tip_Calculator_App",
    text: "GitHub Repository",
  },
};
projectCardList.push(tipCalculatorObject);

/**************************************************************************************************************

          TO_DO LIST CARD

***************************************************************************************************************/

const toDoListObject = {
  card: {
    id: "toDoList",
    style: 2,
  },
  pageLink: {
    id: "toDoPageLink",
    href: "https://to-do-list-one-pearl-38.vercel.app/",
  },
  image: {
    id: "toDoImage",
    alt: "To-Do List Image",
    src: "/images/ToDo_List_Large.png",
  },
  caption: {
    id: "toDoCaption",
  },
  articleTitle: {
    id: "toDoArticleTitle",
    text: "Daily and General To-Do List",
    style: 2,
  },
  articlePara: {
    id: "toDoArticleP",
    text: `This was a personal project that I wanted to complete as a
             challenge for me, and as a useful app. This gave me the 
             chance to work with Local Storage and was my first project 
             that the changes made in the page stay after a page reload.`,
  },
  sourceLink: {
    id: "toDoSourceLink",
    href: "https://github.com/auntfunny/To-Do_List",
    text: "GitHub Repository",
  },
};
projectCardList.push(toDoListObject);



/**************************************************************************************************************

          GATE PROJECT CARD

***************************************************************************************************************/

const gateObject = {
  card: {
    id: "newGateProject",
    style: 1,
  },
  pageLink: {
    id: "gatePageLink",
    href: "#",
  },
  image: {
    id: "gateImage",
    alt: "Gate Project",
    src: "/images/Gate_Large.jpeg",
  },
  caption: {
    id: "gateCaption",
  },
  articleTitle: {
    id: "gateArticleTitle",
    text: "Cabin Gate Project",
    style: 1,
  },
  articlePara: {
    id: "gateArticleP",
    text: `This was a project I did for a cabin rental project as the main
            entry gate. I built it by myself, designing, cutting and welding the
            frame, setting the rail, and adding the wood planks, creating a
            functioning and smooth rolling gate, with the option to add a motor
            to make it automated.`,
  },
  sourceLink: {
    id: "gateSourceLink",
    href: "#",
    text: "Cabin Facebook Page",
  },
};
projectCardList.push(gateObject);

/**************************************************************************************************************

          SOCIAL LINKS CARD

***************************************************************************************************************/
const socialLinksObject = {
  card: {
    id: "socialLinksCard",
    style: 2,
  },
  pageLink: {
    id: "socialPageLink",
    href: "https://social-links-profile-theta-six.vercel.app/",
  },
  image: {
    id: "socialImage",
    alt: "Social Links Page",
    src: "/images/Social_Links_Large.png",
  },
  caption: {
    id: "socialCaption",
  },
  articleTitle: {
    id: "socialArticleTitle",
    text: "Generic Social Links Profile",
    style: 2,
  },
  articlePara: {
    id: "socialArticleP",
    text: `This project came from a challenge given on the Frontend Mentor
            site. It was to recreate the social links profile given to make it
            as similar to the original picture as possible. This included making
            it responsive for mobile users and including hover and focus states
            to increase accessibility.`,
  },
  sourceLink: {
    id: "socialSourceLink",
    href: "https://github.com/auntfunny/Social_Links_Profile",
    text: "GitHub Repository",
  },
};
projectCardList.push(socialLinksObject);

/**************************************************************************************************************

          BLOG PREVIEW CARD

***************************************************************************************************************/

const blogPreviewObject = {
  card: {
    id: "newBlogPreview",
    style: 1,
  },
  pageLink: {
    id: "blogPageLink",
    href: "https://auntfunny.github.io/Blog_Preview_Card/",
  },
  image: {
    id: "blogImage",
    alt: "Blog Preview Card Page",
    src: "/images/Blog_Preview_Large.png",
  },
  caption: {
    id: "blogCaption",
  },
  articleTitle: {
    id: "blogArticleTitle",
    text: "Generic Blog Preview Card",
    style: 1,
  },
  articlePara: {
    id: "blogArticleP",
    text: `This project came from a challenge given on the Frontend Mentor
            site. It was to recreate Blog Preview Card and include some
            interactive hover features. This was one of the very first projects
            I did and started practicing making projects with HTML and basic CSS
            features.`,
  },
  sourceLink: {
    id: "blogSourceLink",
    href: "https://github.com/auntfunny/Blog_Preview_Card",
    text: "GitHub Repository",
  },
};
projectCardList.push(blogPreviewObject);

/**************************************************************************************************************

          MENU PAGE CARD

***************************************************************************************************************/

const menuPageObject = {
  card: {
    id: "newMenuPage",
    style: 2,
  },
  pageLink: {
    id: "recipePageLink",
    href: "https://recipe-page-main-eosin-omega.vercel.app/",
  },
  image: {
    id: "recipeImage",
    alt: "Recipe Page",
    src: "/images/Recipe_Page_Large.png",
  },
  caption: {
    id: "recipeCaption",
  },
  articleTitle: {
    id: "recipeArticleTitle",
    text: "Generic Recipe Page",
    style: 2,
  },
  articlePara: {
    id: "socialArticleP",
    text: `This project came from a challenge given on the Frontend Mentor
            site. The challenge was to create a responsive recipe page based 
            on the picture provided, including styles using span and table 
            features. This was the first real responsive, mobile-first page 
            that I created.`,
  },
  sourceLink: {
    id: "recipeSourceLink",
    href: "https://github.com/auntfunny/Recipe_Page_Main",
    text: "GitHub Repository",
  },
};
projectCardList.push(menuPageObject);

/**************************************************************************************************************

          UPLOAD ALL PROJECTS TO PAGE

***************************************************************************************************************/

for (let project of projectCardList) {
  const newCard = new projectCard(project.card.id, project.card.style);

  console.log(newCard);
  console.log(project.card.id);

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

  newCard.appendTo(`#mainBody`);
  newPageLink.appendTo(`#${project.card.id}`);
  newCaption.appendTo(`#${project.card.id}`);
  newImage.appendTo(`#${project.pageLink.id}`);
  newTitle.appendTo(`#${project.caption.id}`);
  newPara.appendTo(`#${project.caption.id}`);
  newSourceLink.appendTo(`#${project.caption.id}`);
}

/**************************************************************************************************************

          EMAIL FUNCTION

***************************************************************************************************************/
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const sendEmail = document.querySelector("#sendEmail");

sendEmail.addEventListener("click", sendTheEmail);

function sendTheEmail() {
  if (!message.value || !subject.value) {
    alert("Must enter message.");
  } else {
    const recipient = "anthonysblack.22@gmail.com";
    const emailBody = message.value;
    const subjectOfEmail = subject.value;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subjectOfEmail)}&body=${encodeURIComponent(emailBody)}`;
  }
}
