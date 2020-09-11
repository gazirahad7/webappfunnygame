const list = document.getElementById("list");
const people = list.childElementCount;
const noResult = document.getElementById("noResult");
const name = document.getElementById("name");
const error = document.getElementById("error");
const headItem = document.getElementById("headItem");
const form = document.getElementById("form");


let number = 0;

headItem.addEventListener("click", (e) => {
if(e.target.classList.contains('update-item')){
    number = e.target.getAttribute("data-value");

    document.querySelectorAll(".update-item").forEach((el) => {
      el.classList.remove("active-item");
    });
    e.target.classList.add("active-item");
}
});


let actressArray = [];

const getRandomNumber = () => Math.floor(Math.random() * actressArray.length);


for (let i = 1; i <= people; i++) {
  document.getElementById("act_" + i).innerHTML =
    actressArray[getRandomNumber()];
}


form.addEventListener("submit", (e) => {
  e.preventDefault();


  switch (number) {
    case "1":
      actressArray = ["Good", "Very Good", "bad", "Very bad", "Best", "Dumb"];
      break;
    case "2":
      actressArray = ["Yes", "No", "yes"];
      break;

    case "3":
      actressArray = [
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
      actressArray = [
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
      actressArray = [
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
      actressArray = [
        "MESSI",
        "NEYMAR",
        "LEWANDOWSKI",
        "C.Ronaldo",
        "MESSi",
        "C.Ronaldo",
        "Roberto Carlos",
        "Ronaldinho"
      ];
      break;

    case "7":
      actressArray = ["Chicken diner", "you are lost"];
      break;

    case "8":
      actressArray = ["you are virgin", "you are not virgin"];
      break;

    case "9":
      actressArray = [
        "Viral kokli",
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
        "Mashrafe"
      ];
      break;

    case "10":
      actressArray = ["a", "d",'e','f','h','i','l','m','n','o','p','r','s','t','u','y','z','r','s'];
      break;
  }

  const newPerson = people + 1;
  
  error.innerHTML = '';

let errorText = '';
 

  if (!number) {
  
    errorText = "Please select an item to play";
  }
  else if(name.value !== "" ) {
  
    const li = `<li> ${
      name.value
    } <span id='act_'> </span> <span class='show-output  '>${
      actressArray[getRandomNumber()]
    } </span> <i class="far fa-trash-alt delete  age"></i></li>`;

    noResult.innerHTML = ''
    list.insertAdjacentHTML("beforeend", li);

    name.value = "";
  } else if(!errorText){

     errorText = "Please enter your name";

  }
    error.innerHTML = errorText;

});


list.addEventListener("click", function (e) {
  //console.log(this.contains(e.target))
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    //console.log(people,list)
   if (!list.childElementCount) {
      noResult.innerHTML = "No Result Found Now";
    }else{
      noResult.innerHTML = ""
    }
  }

  this.style.cursor = "pointer";
});

