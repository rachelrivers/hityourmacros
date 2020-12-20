const searchForm = document.querySelector("#form");
const searchResultDiv = document.querySelector("#results");
const container = document.querySelector("#mainContainer");

let searchQuery ="";
const APP_ID='8edc38ff';
const APP_key="08c811cb469279c8c1741585a4673f31";


// console.log(searchForm);
// console.log(searchResultDiv);
// console.log(mainContainer);

//search input

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
searchQuery = e.target.querySelector('input').value;
fetchAPI()
});

async function fetchAPI(){
  const pathURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(pathURL);
  const data = await response.json();
  console.log(data);
  generateAPIData1(data);
  generateAPIData2(data);
  generateAPIData3(data);
  generateAPIData4(data);
}



function generateAPIData1(data) {
  // for (let i = 2; i < 20, i++;) {
  document.querySelector("#results").innerHTML = 
  `
  <div class="item">
    <img
       src="${data.hits[0].recipe.image}">
    <div class="flex-container">
      <h2 class="recipe-title">${data.hits[0].recipe.label}</h2>
       <a class="view-recipe" href="${data.hits[0].recipe.url}" target="_blank">View Recipe</a>
    </div>
    <p class="calories">Calories: ${data.hits[0].recipe.calories.toFixed(2)}</p>
    <p class="fat">Fat: ${data.hits[0].recipe.digest[0].total.toFixed(2)}</p>
    <p class="protein">Protein: ${data.hits[0].recipe.digest[2].total.toFixed(2)}</p>
    <p class="carbs">Carbohydrates: ${data.hits[0].recipe.digest[1].total.toFixed(2)}</p>
   </div>
  <div class="item">
    <img
       src="${data.hits[1].recipe.image}">
    <div class="flex-container">
      <h2 class="recipe-title">${data.hits[1].recipe.label}</h2>
       <a class="view-recipe" href="${data.hits[1].recipe.url}" target="_blank">View Recipe</a>
    </div>
    <p class="calories">Calories: ${data.hits[1].recipe.calories.toFixed(2)}</p>
    <p class="fat">Fat: ${data.hits[1].recipe.digest[0].total.toFixed(2)}</p>
    <p class="protein">Protein: ${data.hits[1].recipe.digest[2].total.toFixed(2)}</p>
    <p class="carbs">Carbohydrates: ${data.hits[1].recipe.digest[1].total.toFixed(2)}</p>
   </div>
  <div class="item">
    <img
       src="${data.hits[2].recipe.image}">
    <div class="flex-container">
      <h2 class="recipe-title">${data.hits[2].recipe.label}</h2>
       <a class="view-recipe" href="${data.hits[2].recipe.url}" target="_blank">View Recipe</a>
    </div>
    <p class="calories">Calories: ${data.hits[2].recipe.calories.toFixed(2)}</p>
    <p class="fat">Fat: ${data.hits[2].recipe.digest[0].total.toFixed(2)}</p>
    <p class="protein">Protein: ${data.hits[2].recipe.digest[2].total.toFixed(2)}</p>
    <p class="carbs">Carbohydrates: ${data.hits[2].recipe.digest[1].total.toFixed(2)}</p>
   </div>
  <div class="item">
    <img
       src="${data.hits[3].recipe.image}">
    <div class="flex-container">
      <h2 class="recipe-title">${data.hits[3].recipe.label}</h2>
       <a class="view-recipe" href="${data.hits[3].recipe.url}" target="_blank">View Recipe</a>
    </div>
    <p class="calories">Calories: ${data.hits[3].recipe.calories.toFixed(2)}</p>
    <p class="fat">Fat: ${data.hits[3].recipe.digest[0].total.toFixed(2)}</p>
    <p class="protein">Protein: ${data.hits[3].recipe.digest[2].total.toFixed(2)}</p>
    <p class="carbs">Carbohydrates: ${data.hits[3].recipe.digest[1].total.toFixed(2)}</p>
   </div>
  `
}



//resources/drop down 

const showResources = document.getElementsById("#resourcesButton"); 

const resourcesDiv = document.getElementsByID("#toggleResources");

