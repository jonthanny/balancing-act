var closeIcon = document.querySelector(".closeAction");
var banner = document.querySelector(".banner");
var dashIcon = document.querySelector(".dashIcon")

closeIcon.addEventListener('click' , closeBanner)

function closeBanner() {
  banner.style.display = "none"
};

dashIcon.addEventListener('hover' , highlightDashIcon)

function highlightDashIcon() {
  dashIcon.style
}
