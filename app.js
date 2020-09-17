const list = document.getElementById("list");
const people = list.childElementCount;
const noResult = document.getElementById("noResult");
const name = document.getElementById("name");
const error = document.getElementById("error");
const headItem = document.getElementById("headItem");
const form = document.getElementById("form");
const playing = document.getElementById("playing");

let number = 0;


headItem.addEventListener("click", (e) => {
  if (e.target.classList.contains("update-item")) {
    playing.innerHTML = "You are playing: " + e.target.textContent;
    number = e.target.getAttribute("data-value");

    document.querySelectorAll(".update-item").forEach((el) => {
      el.classList.remove("active-item");
    });
    e.target.classList.add("active-item");
  }
});

let dataArray = [];

const getRandomNumber = () => Math.floor(Math.random() * dataArray.length);

for (let i = 1; i <= people; i++) {
  document.getElementById("act_" + i).innerHTML = dataArray[getRandomNumber()];
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (number) {
    case "1":
      dataArray = ["Good", "Very Good", "bad", "Very bad", "Best", "Dumb"];
      break;
    case "2":
      dataArray = ["Yes", "No", "yes"];
      break;

    case "3":
      dataArray = [
        "21 age",
        "22 age",
        "23 age",
        "24 age",
        "25 age",
        "26 age",
        "27 age",
        "28 age",
        "29 age",
        "30 age",
        "31 age",
        "32 age",
        "33 age",
        "34 age",
        "35 age",
        "40 age",
      ];
      break;

    case "4":
      dataArray = [
        "sunny",
        "Alia Bhatt",
        "Katrina kaiff",
        "shraddha kapoor",
        "deepika",
        "anushka",
        "sunny",
        "Kriti Sanon",
        "Shruti Haasan",
        "Angelina",
      ];
      break;

    case "5":
      dataArray = [
        "Shahrukh Khan",
        "Salman Khan",
        "Aamir khan",
        "Tiger Shoff",
        "Hrithik Roshan",
        "Ranbir khapoor",
        "Emraan Hashmi",
        "Shushant Rajput",
        "Robert Doweny",
        "Chirs Hemsworth",
        "Leonardo Dicaprio",
        "Dwayne Johnson",
        "Chris Evans",
        "Mark Ruffalo",
      ];
      break;
    case "6":
      dataArray = [
        "MESSI",
        "NEYMAR",
        "LEWANDOWSKI",
        "C.Ronaldo",
        "MESSi",
        "C.Ronaldo",
        "Roberto Carlos",
        "Ronaldinho",
      ];
      break;

    case "7":
      dataArray = ["Chicken diner", "you are lost"];
      break;

    case "8":
      dataArray = ["you are virgin", "you are not virgin"];
      break;

    case "9":
      dataArray = [
        "Virat kohli",
        "Kane williamson",
        ,
        "Ben stokes",
        "De Kock",
        "david warner",
        "Sachin  tendulkar",
        "Shakib al hasan",
        "MS dhoni",
        "chris gayle",
        "Mushfiqure rahim",
        "tamim iqbal",
        "Dilshan",
        "Sangakkara",
        "lasith malinga",
        "mahmudul",
        "AB de villiers",
        "Mashrafe",
      ];
      break;

    case "10":
      dataArray = [
        "a",
        "d",
        "e",
        "f",
        "h",
        "i",
        "l",
        "m",
        "n",
        "o",
        "p",
        "r",
        "s",
        "t",
        "u",
        "y",
        "z",
        "r",
        "s",
      ];
      break;
  }

  // commit
  const allLetter = /^[A-Za-z ]+$/;

  if (!number) {
    error.innerHTML = "Please select an item to play";
  } else if (!name.value) {
    error.innerHTML = "Please enter your name";
  } else if (!name.value.match(allLetter)) {
    error.innerHTML = "Only letters are allowed";
  } else {
    const li = `<li> ${
      name.value
    } <span id='act_'> </span> <span class='show-output  '>${
      dataArray[getRandomNumber()]
    } </span> <i class="far fa-trash-alt delete"></i></li>`;

    error.innerHTML = "";
    noResult.innerHTML = "";
    name.value = "";

    list.insertAdjacentHTML("beforeend", li);
  }
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    if (!list.childElementCount) {
      noResult.innerHTML = "No Result Found Now";
    }
  }
});

//Top button

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


// Dark Mode
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});

