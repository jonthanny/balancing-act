var closeIcon = document.querySelector(".closeAction");
var banner = document.querySelector(".banner");
var dashIcon = document.querySelector(".dashIcon")
var transIcon = document.querySelector(".transIcon");
var profileIcon = document.querySelector(".profileIcon");
var dashPage = document.querySelector(".dashPage");
var transPage = document.getElementById("transPage");

closeIcon.addEventListener('click' , closeBanner);
window.addEventListener('load' , highlightDashIcon);

function closeBanner() {
  banner.style.height = "0px";
  banner.style.opacity = "0";
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
  dashPage.style.opacity = "100%"
  dashPage.style.zIndex = "2";
  transPage.style.opacity = "0%";
  transPage.style.zIndex = "-2";
  dashIcon.classList.add("dashIconClicked");
  transIcon.classList.remove("transIconClicked");
  profileIcon.classList.remove("profileIconClicked");
}

function highlightTransIcon() {
  transPage.style.opacity = "100%";
  transPage.style.zIndex = "2";
  dashPage.style.opacity = "0%";
  dashPage.style.zIndex = "-2";
  transIcon.classList.add("transIconClicked");
  dashIcon.classList.remove("dashIconClicked");
  profileIcon.classList.remove("profileIconClicked");
}

function highlightProfileIcon() {
  profileIcon.classList.add("profileIconClicked");
  dashIcon.classList.remove("dashIconClicked");
  transIcon.classList.remove("transIconClicked");
}
