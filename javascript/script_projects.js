const pagesDropDownButton = document.querySelector("#pagesDropDownButton");
const pagesDropDownMenu = document.querySelector("#pagesDropDownMenu");
const mainBody = document.querySelector("#mainBody");
const tipCalculatorCard = document.querySelector("#tipCalculatorCard");
const socialLinksCard = document.querySelector("#socialLinksCard");
const blogPreviewCard = document.querySelector("#blogPreviewCard");
const menuPageCard = document.querySelector("#menuPageCard");
const gateProjectCard = document.querySelector("#gateProjectCard");

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

const newTipCalculator = document.createElement("article");
newTipCalculator.id = "newTipCalculator";
let myClassList1 =
  "flex flex-col lg:flex-row justify-between gap-4 items-center w-3/4 min-h-84 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl".split(
    " ",
  );
let myClassList2 = "flex flex-col lg:flex-row-reverse justify-between gap-4 items-center w-3/4 min-h-84 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl".split(" ");
let classes1 = "flex flex-col lg:flex-row justify-between gap-4 items-center w-3/4 min-h-84 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl";
let classes2 = "flex flex-col lg:flex-row-reverse justify-between gap-4 items-center w-3/4 min-h-84 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl";
let linkClasses = "w-full md:w-120 hover:scale-105 transition-transform duration-300 ease-in-out".split(" ");
let linkClassName = "w-full md:w-120 hover:scale-105 transition-transform duration-300 ease-in-out";
let captionClasses = "w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly h-80".split(" ");
let captionClassName = "w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly h-80";

newTipCalculator.classList.add(myClassList1);
newTipCalculator.className = classes1;

const tipPageLink = document.createElement("a");
tipPageLink.id = "tipPageLink";
tipPageLink.href = "https://tip-calculator-app-bay-phi.vercel.app/";
tipPageLink.target = "_blank";
tipPageLink.classList.add(linkClasses);
tipPageLink.className = linkClassName;

const tipImage = document.createElement("img");
tipImage.id = "tipImage";
tipImage.alt = "Tip Calculator";
tipImage.classList.add("rounded-xl", "w-full");
tipImage.className = "rounded-xl w-full";
tipImage.src = "../src/images/Tip_Calculator.png";

const tipCaption = document.createElement("div");
tipCaption.id = "tipCaption";
tipCaption.classList.add(captionClasses);
tipCaption.className = captionClassName;
tipCaption.innerHTML = `<h2 class="text-lg md:text-3xl text-center lg:text-right text-acc3">
            Tip Calculator App
          </h2>
          <p class="text-xs md:text-base text-acc4 px-2 md:indent-8">
            This project was from a Frontend Mentor challenge. It was my first
            JavaScript project, and I learned a lot about DOM manipulation and
            how to create interactive material, letting the user enter info and
            change the appearance of the site. It was an exciting first project
            that taught me a lot of new skills.
          </p>
          <a
            href="https://github.com/auntfunny/Tip_Calculator_App"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >GitHub Repository</a
          >`;


mainBody.appendChild(newTipCalculator);
newTipCalculator.appendChild(tipPageLink);
newTipCalculator.appendChild(tipCaption);
tipPageLink.appendChild(tipImage);



const newSocialLinks = document.createElement("article");
newSocialLinks.id = "newSocialLinks";
newSocialLinks.classList.add(myClassList2);
newSocialLinks.className = classes2;
newSocialLinks.innerHTML = `
        <!-- Picture and Link  -->
        <a
          href="https://social-links-profile-theta-six.vercel.app/"
          target="_blank"
          class="w-full md:w-120 hover:scale-105 transition-transform duration-300 ease-in-out"
          ><img
            src="../src/images/Social_Links.png"
            alt="Social Links Project"
            class="rounded-xl w-full"
        /></a>
        <!-- Caption  -->
        <div class="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly h-80">
          <h2 class="text-lg md:text-3xl text-center lg:text-left text-acc3">
            Generic Social Links Profile
          </h2>
          <p class="text-xs md:text-base text-acc4 px-2 md:indent-8">
            This project came from a challenge given on the Frontend Mentor
            site. It was to recreate the social links profile given to make it
            as similar to the original picture as possible. This included making
            it responsive for mobile users and including hover and focus states
            to increase accessibility.
          </p>
          <a
            href="https://github.com/auntfunny/Social_Links_Profile"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >GitHub Repository</a
          >
        </div>`;


const newBlogPreview = document.createElement("article");
newBlogPreview.id = "newBlogPreview";
newBlogPreview.classList.add(myClassList1);
newBlogPreview.className = classes1;
newBlogPreview.innerHTML = `
        <!-- Picture and Link  -->
        <a
          href="https://auntfunny.github.io/Blog_Preview_Card/"
          target="_blank"
          class="w-full md:w-120 hover:scale-105 transition-transform duration-300 ease-in-out"
          ><img
            src="../src/images/Blog_Preview.png"
            alt="Blog Preview Project"
            class="rounded-xl w-full"
        /></a>
        <!-- Caption  -->
        <div class="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly h-80">
          <h2 class="text-lg md:text-3xl text-center lg:text-right text-acc3">
            Generic Blog Preview Card
          </h2>
          <p
            class="text-xs md:text-base text-acc4  px-2 md:indent-8 "
          >
            This project came from a challenge given on the Frontend Mentor
            site. It was to recreate Blog Preview Card and include some
            interactive hover features. This was one of the very first projects
            I did and started practicing making projects with HTML and basic CSS
            features.
          </p>
          <a
            href="https://github.com/auntfunny/Blog_Preview_Card"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >GitHub Repository</a
          >
        </div>`;


const newMenuPage = document.createElement("article");
newMenuPage.id = "newMenuPage";
newMenuPage.classList.add(myClassList2);
newMenuPage.className = classes2;
newMenuPage.innerHTML = `
        <!-- Picture and Link  -->
        <a
          href="https://recipe-page-main-eosin-omega.vercel.app/"
          target="_blank"
          class="w-full md:w-120 hover:scale-105 transition-transform duration-300 ease-in-out"
          ><img
            src="../src/images/Recipe_Page.png"
            alt="Recipe Page Project"
            class="rounded-xl w-full"
        /></a>
        <!-- Caption  -->
        <div class="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly h-80">
          <h2 class="text-lg md:text-3xl text-center lg:text-left text-acc3">
            Generic Social Links Profile
          </h2>
          <p class="text-xs md:text-base text-acc4 px-2 md:indent-8">
            This project came from a challenge given on the Frontend Mentor
            site. The challenge was to create a recipe page based on the picture
            provided, including styles using span and table features. There was
            also a mobile picture, and this was the first real responsive,
            mobile-first page that I created.
          </p>
          <a
            href="https://github.com/auntfunny/Recipe_Page_Main"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >GitHub Repository</a
          >
        </div>`;



const newGateProject = document.createElement("article");
newGateProject.id = "newGateProject";
newGateProject.classList.add(myClassList1);
newGateProject.className = classes1;
newGateProject.innerHTML = `
        <!-- Picture and Link  -->
        <a href="#" target="_blank" class="w-full md:w-120"
          ><img
            src="../src/images/Gate.png"
            alt="Gate Project"
            class="rounded-xl w-full hover:scale-105 transition-transform duration-300 ease-in-out"
        /></a>
        <!-- Caption  -->
        <div class="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly h-80">
          <h2 class="text-lg md:text-3xl text-center lg:text-right text-acc3">
            Cabin Gate Project
          </h2>
          <p
            class="text-xs md:text-base text-acc4 px-2 md:indent-8 "
          >
            This was a project I did for a cabin rental project as the main
            entry gate. I built it by myself, designing, cutting and welding the
            frame, setting the rail, and adding the wood planks, creating a
            functioning and smooth rolling gate, with the option to add a motor
            to make it automated.
          </p>
          <a
            href="#"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >Cabin Facebook</a
          >
        </div>`;




mainBody.appendChild(newSocialLinks);
mainBody.appendChild(newBlogPreview);
mainBody.appendChild(newMenuPage);
mainBody.appendChild(newGateProject);


