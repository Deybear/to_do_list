
/* - - - - - - - - - - || DISPLAY CURRENT DATE || - - - - - - - - - - */

// Calling date container . . .
const currentDay = document.getElementById("current_day");

// Calling date container . . .
const currentDate = document.getElementById("current_date");

// Display date . . .
currentDay.innerHTML = moment().format('dddd');

// Display date . . .
currentDate.innerHTML = moment().format('ll');