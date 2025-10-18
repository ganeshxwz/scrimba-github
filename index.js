let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");

count = 0;

function add1() {
  count += 1;
  homeCount.textContent = count;
}

function add2() {
  count += 2;
  homeCount.textContent = count;
}

function add3() {
  count += 3;
  homeCount.textContent = count;
}

count2 = 0;

function addg1() {
  count2 += 1;
  guestCount.textContent = count2;
}

function addg2() {
  count2 += 2;
  guestCount.textContent = count2;
}

function addg3() {
  count2 += 3;
  guestCount.textContent = count2;
}

function reset() {
  guestCount.textContent = 0;
  homeCount.textContent = 0;
  count = 0;
  count2 = 0;
}
