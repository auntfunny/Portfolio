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