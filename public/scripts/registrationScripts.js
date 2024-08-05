"use strict";

import { months } from "/scripts/utils.js";

const dateInput = document.getElementById("dob");
const currentDateText = document.getElementById("currentDate");
const age = document.getElementById("age");

const todaysDate = new Date();
const currentMonth = months[todaysDate.getMonth()];
const currentDate = todaysDate.getDate();
const currentYear = todaysDate.getFullYear();

currentDateText.textContent = `${currentMonth} ${currentDate}, ${currentYear}`;

dateInput.addEventListener("change", (e) => {
  const selectedDate = new Date(dateInput.value);
  let years = currentYear - selectedDate.getFullYear();
  let months = todaysDate.getMonth() - selectedDate.getMonth();
  let days = currentDate - selectedDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(
      todaysDate.getFullYear(),
      todaysDate.getMonth(),
      0
    ).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  age.value = `${years} years, ${months} months, ${days} days old`;
});
