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

const htmlCard = {
  base: {
    id: "htmlSkill",
  },
  image: {
    id: "hmtlSkillImage",
    alt: "HTML Logo",
    src: "/images/html.png",
  },
};
skillCardList.push(htmlCard);

const cssCard = {
  base: {
    id: "cssSkill",
  },
  image: {
    id: "cssSkillImage",
    alt: "CSS Logo",
    src: "/images/css.png",
  },
};
skillCardList.push(cssCard);

const javascriptCard = {
  base: {
    id: "javascriptSkill",
  },
  image: {
    id: "javascriptSkillImage",
    alt: "JavaScript Logo",
    src: "/images/javascript.png",
  },
};
skillCardList.push(javascriptCard);

const tailwindCard = {
  base: {
    id: "tailwindSkill",
  },
  image: {
    id: "tailwindSkillImage",
    alt: "Tailwind Logo",
    src: "/images/tailwind.png",
  },
};
skillCardList.push(tailwindCard);

const reactCard = {
  base: {
    id: "reactSkill",
  },
  image: {
    id: "reactSkillImage",
    alt: "React Logo",
    src: "/images/react.png",
  },
};
skillCardList.push(reactCard);

const cCard = {
  base: {
    id: "cSkill",
  },
  image: {
    id: "cSkillImage",
    alt: "C++ Logo",
    src: "/images/c.png",
  },
};
skillCardList.push(cCard);

for (let skill of skillCardList) {
  const newCard = new skillItem(skill.base.id);
  const newImage = new skillImage(
    skill.image.id,
    skill.image.alt,
    skill.image.src,
  );

  newCard.appendTo("#skillList");
  newImage.appendTo(`#${skill.base.id}`);
}

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
