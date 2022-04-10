const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

let ageOfCat = cats.age;

// Question 1

const logTheWord = [(complain = logWord)];

function logWord() {
  console.log("meow");
}

logWord();

// Question 2

let heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  p = paragraphs[i].style.color = "red";
}

// Question 6

let resultContainer = document.querySelector(".results");
resultContainer.innerHTML = "<p>New paragraph</p>";

resultContainer.style.backgroundColor = "yellow";

// Question 7

function listFunction(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

listFunction(cats);

// Question 8

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let catList = JSON.stringify(cats);
    document.querySelector(".cat-container").innerHTML =
      "<div>" + catList + "</div>";
  }
}

createCats(cats);
