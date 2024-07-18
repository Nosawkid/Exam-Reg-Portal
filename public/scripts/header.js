"use strict";
const aboutContainer = document.getElementById("about");
const aboutChildren = document.querySelector("#about-child");
const keptLink = document.getElementById("kept-about");
const keptChild = document.getElementById("kept-child");
const aboutContainerHam = document.getElementById("about-2");
const aboutChildrenHam = document.querySelector("#about-child-2");
const keptLinkHam = document.getElementById("kept-about-2");
const keptChildHam = document.getElementById("kept-child-2");
const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");
const horizontal = document.getElementById("horizontal");
const cross = document.getElementById("cross");

hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hidden");
  horizontal.classList.toggle("hidden");
  cross.classList.toggle("hidden");
});

addToggleVisibility(aboutContainer, aboutChildren);
addToggleVisibility(keptLink, keptChild);
addToggleVisibility(aboutContainerHam, aboutChildrenHam);
addToggleVisibility(keptLinkHam, keptChildHam);

function toggleVisibility(element, action) {
  if (action === "show") {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

function addToggleVisibility(container, children) {
  container.addEventListener("mouseover", () =>
    toggleVisibility(children, "show")
  );
  container.addEventListener("mouseleave", () =>
    toggleVisibility(children, "hide")
  );
}
