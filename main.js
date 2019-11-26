var closeIcon = document.querySelector(".closeAction");
var banner = document.querySelector(".banner");
var dashIcon = document.querySelector(".dashIcon")
var transIcon = document.querySelector(".transIcon");
var profileIcon = document.querySelector(".profileIcon");
var dashPage = document.querySelector(".dashPage");

closeIcon.addEventListener('click' , closeBanner);
window.addEventListener('load' , highlightDashIcon);

function closeBanner() {
  banner.style.display = "none";
};

dashIcon.addEventListener('click' , highlightDashIcon);
transIcon.addEventListener('click' , highlightTransIcon);
profileIcon.addEventListener('click' , highlightProfileIcon);

// dashIcon.addEventListener('mouseover' , hoverDashIcon);
// transIcon.addEventListener('mouseover' , hoverTransIcon);
// profileIcon.addEventListener('mouseover' , hoverProfileIcon);
//
// dashIcon.addEventListener('mouseout' , highlightDashIcon);
// transIcon.addEventListener('mouseout' , highlightTransIcon);
// profileIcon.addEventListener('mouseout' , highlightProfileIcon);

function highlightDashIcon() {
  dashIcon.classList.add("dashIconClicked");
  transIcon.classList.remove("transIconClicked");
  profileIcon.classList.remove("profileIconClicked");
  dashPage.style.display = "block";
}

function highlightTransIcon() {
  transIcon.classList.add("transIconClicked");
  dashIcon.classList.remove("dashIconClicked");
  profileIcon.classList.remove("profileIconClicked");
  dashPage.style.display = "none";
}

function highlightProfileIcon() {
  profileIcon.classList.add("profileIconClicked");
  dashIcon.classList.remove("dashIconClicked");
  transIcon.classList.remove("transIconClicked");
}
