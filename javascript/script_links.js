const pagesDropDownButton = document.querySelector("#pagesDropDownButton");
const pagesDropDownMenu = document.querySelector("#pagesDropDownMenu");


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




function checkMenus(event){
    if (!pagesDropDownMenu.contains(event.target) && pageMenuToggle === 1) {
    togglePageMenu();
  } 
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
