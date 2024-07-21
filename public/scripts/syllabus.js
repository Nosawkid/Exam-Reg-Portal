"use strict";

const printBtn = document.querySelector("#print-btn");
const table = document.querySelector("#syllabus-table");

printBtn.addEventListener("click", async (e) => {
  document.querySelector("tfoot").classList.add("hidden");
  document.querySelector("header").classList.add("hidden");
  window.print();
  document.querySelector("tfoot").classList.remove("hidden");
  document.querySelector("header").classList.remove("hidden");
});
