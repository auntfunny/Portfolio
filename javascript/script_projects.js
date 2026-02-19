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

let myClassList1 =
  "flex flex-col lg:flex-row justify-between gap-4 items-center w-3/4 min-h-84 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl".split(
    " ",
  );
let myClassList2 =
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

const listOfProjects = [];

/**************************************************************************************************************

          TIP CALCULATOR CARD

***************************************************************************************************************/

const newTipCalculator = document.createElement("article");
newTipCalculator.id = "newTipCalculator";
for (let item of myClassList1) {
  newTipCalculator.classList.add(item);
}

const tipPageLink = document.createElement("a");
tipPageLink.id = "tipPageLink";
tipPageLink.href = "https://tip-calculator-app-bay-phi.vercel.app/";
tipPageLink.target = "_blank";
for (let item of linkClasses) {
  tipPageLink.classList.add(item);
}

const tipImage = document.createElement("img");
tipImage.id = "tipImage";
tipImage.alt = "Tip Calculator";
tipImage.classList.add("rounded-xl", "w-full");
tipImage.src = "/images/Tip_Calculator_Large.png";

const tipCaption = document.createElement("div");
tipCaption.id = "tipCaption";
for (let item of captionClasses) {
  tipCaption.classList.add(item);
}

const tipArticleTitle = document.createElement("h2");
tipArticleTitle.id = "tipArticleTitle";
tipArticleTitle.textContent = "Tip Calculator App";
for (let item of articleTitleClasses1) {
  tipArticleTitle.classList.add(item);
}

const tipArticleP = document.createElement("p");
tipArticleP.id = "tipArticleP";
tipArticleP.textContent = `This project was from a Frontend Mentor challenge. It was my first
            JavaScript project, and I learned a lot about DOM manipulation and
            how to create interactive material, letting the user enter info and
            change the appearance of the site. It was an exciting first project
            that taught me a lot of new skills.`;
for (let item of articlePClasses) {
  tipArticleP.classList.add(item);
}

const tipSourceLink = document.createElement("a");
tipSourceLink.id = "tipSourceLink";
tipSourceLink.href = "https://github.com/auntfunny/Tip_Calculator_App";
tipSourceLink.target = "_blank";
tipSourceLink.textContent = "GitHub Repository";
for (let item of sourceLinkClasses) {
  tipSourceLink.classList.add(item);
}

newTipCalculator.appendChild(tipPageLink);
newTipCalculator.appendChild(tipCaption);
tipPageLink.appendChild(tipImage);
tipCaption.appendChild(tipArticleTitle);
tipCaption.appendChild(tipArticleP);
tipCaption.appendChild(tipSourceLink);
listOfProjects.push(newTipCalculator);

/**************************************************************************************************************

          SOCIAL LINKS CARD

***************************************************************************************************************/

const newSocialLinks = document.createElement("article");
newSocialLinks.id = "newSocialLinks";
for (let item of myClassList2) {
  newSocialLinks.classList.add(item);
}

const socialPageLink = document.createElement("a");
socialPageLink.id = "socialPageLink";
socialPageLink.href = "https://social-links-profile-theta-six.vercel.app/";
socialPageLink.target = "_blank";
for (let item of linkClasses) {
  socialPageLink.classList.add(item);
}

const socialImage = document.createElement("img");
socialImage.id = "socialImage";
socialImage.alt = "Social Links Page";
socialImage.classList.add("rounded-xl", "w-full");
socialImage.src = "/images/Social_Links_Large.png";

const socialCaption = document.createElement("div");
socialCaption.id = "socialCaption";
for (let item of captionClasses) {
  socialCaption.classList.add(item);
}

const socialArticleTitle = document.createElement("h2");
socialArticleTitle.id = "socialArticleTitle";
socialArticleTitle.textContent = "Generic Social Links Profile";
for (let item of articleTitleClasses2) {
  socialArticleTitle.classList.add(item);
}

const socialArticleP = document.createElement("p");
socialArticleP.id = "socialArticleP";
socialArticleP.textContent = `This project came from a challenge given on the Frontend Mentor
            site. It was to recreate the social links profile given to make it
            as similar to the original picture as possible. This included making
            it responsive for mobile users and including hover and focus states
            to increase accessibility.`;
for (let item of articlePClasses) {
  socialArticleP.classList.add(item);
}

const socialSourceLink = document.createElement("a");
socialSourceLink.id = "socialSourceLink";
socialSourceLink.href = "https://github.com/auntfunny/Social_Links_Profile";
socialSourceLink.target = "_blank";
socialSourceLink.textContent = "GitHub Repository";
for (let item of sourceLinkClasses) {
  socialSourceLink.classList.add(item);
}

newSocialLinks.appendChild(socialPageLink);
newSocialLinks.appendChild(socialCaption);
socialPageLink.appendChild(socialImage);
socialCaption.appendChild(socialArticleTitle);
socialCaption.appendChild(socialArticleP);
socialCaption.appendChild(socialSourceLink);
listOfProjects.push(newSocialLinks);

/**************************************************************************************************************

          MENU PAGE CARD

***************************************************************************************************************/

const newMenuPage = document.createElement("article");
newMenuPage.id = "newMenuPage";
for (let item of myClassList1) {
  newMenuPage.classList.add(item);
}

const recipePageLink = document.createElement("a");
recipePageLink.id = "recipePageLink";
recipePageLink.href = "https://recipe-page-main-eosin-omega.vercel.app/";
recipePageLink.target = "_blank";
for (let item of linkClasses) {
  recipePageLink.classList.add(item);
}

const recipeImage = document.createElement("img");
recipeImage.id = "recipeImage";
recipeImage.alt = "Recipe Page";
recipeImage.classList.add("rounded-xl", "w-full");
recipeImage.src = "/images/Recipe_Page_Large.png";

const recipeCaption = document.createElement("div");
recipeCaption.id = "recipeCaption";
for (let item of captionClasses) {
  recipeCaption.classList.add(item);
}

const recipeArticleTitle = document.createElement("h2");
recipeArticleTitle.id = "recipeArticleTitle";
recipeArticleTitle.textContent = "Generic Recipe Page";
for (let item of articleTitleClasses1) {
  recipeArticleTitle.classList.add(item);
}

const recipeArticleP = document.createElement("p");
recipeArticleP.id = "recipeArticleP";
recipeArticleP.textContent = `This project came from a challenge given on the Frontend Mentor
            site. The challenge was to create a recipe page based on the picture
            provided, including styles using span and table features. There was
            also a mobile picture, and this was the first real responsive,
            mobile-first page that I created.`;
for (let item of articlePClasses) {
  recipeArticleP.classList.add(item);
}

const recipeSourceLink = document.createElement("a");
recipeSourceLink.id = "recipeSourceLink";
recipeSourceLink.href = "https://github.com/auntfunny/Recipe_Page_Main";
recipeSourceLink.target = "_blank";
recipeSourceLink.textContent = "GitHub Repository";
for (let item of sourceLinkClasses) {
  recipeSourceLink.classList.add(item);
}

newMenuPage.appendChild(recipePageLink);
newMenuPage.appendChild(recipeCaption);
recipePageLink.appendChild(recipeImage);
recipeCaption.appendChild(recipeArticleTitle);
recipeCaption.appendChild(recipeArticleP);
recipeCaption.appendChild(recipeSourceLink);
listOfProjects.push(newMenuPage);

/**************************************************************************************************************

          GATE PROJECT CARD

***************************************************************************************************************/

const newGateProject = document.createElement("article");
newGateProject.id = "newGateProject";
for (let item of myClassList2) {
  newGateProject.classList.add(item);
}

const gatePageLink = document.createElement("a");
gatePageLink.id = "gatePageLink";
gatePageLink.href = "#";
for (let item of linkClasses) {
  gatePageLink.classList.add(item);
}

const gateImage = document.createElement("img");
gateImage.id = "gateImage";
gateImage.alt = "Tip Calculator";
gateImage.classList.add("rounded-xl", "w-full");
gateImage.src = "/images/Gate_Large.jpeg";

const gateCaption = document.createElement("div");
gateCaption.id = "gateCaption";
for (let item of captionClasses) {
  gateCaption.classList.add(item);
}

const gateArticleTitle = document.createElement("h2");
gateArticleTitle.id = "gateArticleTitle";
gateArticleTitle.textContent = "Cabin Gate Project";
for (let item of articleTitleClasses2) {
  gateArticleTitle.classList.add(item);
}

const gateArticleP = document.createElement("p");
gateArticleP.id = "gateArticleP";
gateArticleP.textContent = `This was a project I did for a cabin rental project as the main
            entry gate. I built it by myself, designing, cutting and welding the
            frame, setting the rail, and adding the wood planks, creating a
            functioning and smooth rolling gate, with the option to add a motor
            to make it automated.`;
for (let item of articlePClasses) {
  gateArticleP.classList.add(item);
}

const gateSourceLink = document.createElement("a");
gateSourceLink.id = "gateSourceLink";
gateSourceLink.href = "#";
gateSourceLink.textContent = "GitHub Repository";
for (let item of sourceLinkClasses) {
  gateSourceLink.classList.add(item);
}

newGateProject.appendChild(gatePageLink);
newGateProject.appendChild(gateCaption);
gatePageLink.appendChild(gateImage);
gateCaption.appendChild(gateArticleTitle);
gateCaption.appendChild(gateArticleP);
gateCaption.appendChild(gateSourceLink);
listOfProjects.push(newGateProject);

/**************************************************************************************************************

          BLOG PREVIEW CARD

***************************************************************************************************************/

const newBlogPreview = document.createElement("article");
newBlogPreview.id = "newBlogPreview";
for (let item of myClassList1) {
  newBlogPreview.classList.add(item);
}

const blogPageLink = document.createElement("a");
blogPageLink.id = "blogPageLink";
blogPageLink.href = "https://auntfunny.github.io/Blog_Preview_Card/";
blogPageLink.target = "_blank";
for (let item of linkClasses) {
  blogPageLink.classList.add(item);
}

const blogImage = document.createElement("img");
blogImage.id = "blogImage";
blogImage.alt = "Tip Calculator";
blogImage.classList.add("rounded-xl", "w-full");
blogImage.src = "/images/Blog_Preview_Large.png";

const blogCaption = document.createElement("div");
blogCaption.id = "blogCaption";
for (let item of captionClasses) {
  blogCaption.classList.add(item);
}

const blogArticleTitle = document.createElement("h2");
blogArticleTitle.id = "blogArticleTitle";
blogArticleTitle.textContent = "Generic Blog Preview Card";
for (let item of articleTitleClasses1) {
  blogArticleTitle.classList.add(item);
}

const blogArticleP = document.createElement("p");
blogArticleP.id = "blogArticleP";
blogArticleP.textContent = `This project came from a challenge given on the Frontend Mentor
            site. It was to recreate Blog Preview Card and include some
            interactive hover features. This was one of the very first projects
            I did and started practicing making projects with HTML and basic CSS
            features.`;
for (let item of articlePClasses) {
  blogArticleP.classList.add(item);
}

const blogSourceLink = document.createElement("a");
blogSourceLink.id = "blogSourceLink";
blogSourceLink.href = "https://github.com/auntfunny/Blog_Preview_Card";
blogSourceLink.target = "_blank";
blogSourceLink.textContent = "GitHub Repository";
for (let item of sourceLinkClasses) {
  blogSourceLink.classList.add(item);
}

newBlogPreview.appendChild(blogPageLink);
newBlogPreview.appendChild(blogCaption);
blogPageLink.appendChild(blogImage);
blogCaption.appendChild(blogArticleTitle);
blogCaption.appendChild(blogArticleP);
blogCaption.appendChild(blogSourceLink);
listOfProjects.push(newBlogPreview);

for (let project of listOfProjects) {
  mainBody.appendChild(project);
}
