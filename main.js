var closeIcon = document.querySelector(".closeAction");
var banner = document.querySelector(".banner");
var dashIcon = document.querySelector(".dashIcon")
var transIcon = document.querySelector(".transIcon");
var profileIcon = document.querySelector(".profileIcon");

closeIcon.addEventListener('click' , closeBanner);
window.addEventListener('load' , highlightDashIcon);

function closeBanner() {
  banner.style.display = "none";
};

dashIcon.addEventListener('click' , highlightDashIcon);
transIcon.addEventListener('click' , highlightTransIcon);
profileIcon.addEventListener('click' , highlightProfileIcon);

dashIcon.addEventListener('mouseover' , highlightDashIcon);
transIcon.addEventListener('mouseover' , highlightTransIcon);
profileIcon.addEventListener('mouseover' , highlightProfileIcon);

dashIcon.addEventListener('mouseout' , highlightDashIcon);
transIcon.addEventListener('mouseout' , highlightTransIcon);
profileIcon.addEventListener('mouseout' , highlightProfileIcon);

function highlightDashIcon() {
  dashIcon.classList.add("dashIconClicked");
  transIcon.classList.remove("transIconClicked");
  profileIcon.classList.remove("profileIconClicked");
}

function highlightTransIcon() {
  transIcon.classList.add("transIconClicked");
  dashIcon.classList.remove("dashIconClicked");
  profileIcon.classList.remove("profileIconClicked");
}

function highlightProfileIcon() {
  profileIcon.classList.add("profileIconClicked");
  dashIcon.classList.remove("dashIconClicked");
  transIcon.classList.remove("transIconClicked");
}
