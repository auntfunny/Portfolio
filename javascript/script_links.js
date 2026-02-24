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