(function () {

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
fetchAPI();
});

async function fetchAPI(){
  const pathURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20&diet=low-fat&diet=high-protein	`;
  const response = await fetch(pathURL);
  const data = await response.json();
  generateAPIData(data.hits);
  console.log(data);
}


function generateAPIData(results) {
  let generatedData = "";
  results.map((result) => {
  generatedData += `
  <div class="item">
  <img src="${result.recipe.image}">
    <div class="flex-container">
    <h2 class="recipe-title">${result.recipe.label}</h2>
    <a class="view-recipe" href="${result.recipe.url}" target="_blank">View Recipe</a>
  </div>
   <p class="calories">Calories: ${result.recipe.calories.toFixed(2)}</p>
   <p class="fat">Fat: ${result.recipe.digest[0].total.toFixed(2)}</p>
   <p class="protein">Protein: ${result.recipe.digest[2].total.toFixed(2)}</p>
   <p class="carbs">Carbohydrates: ${result.recipe.digest[1].total.toFixed(2)}</p>
  </div>`; 
 });
 searchResultDiv.innerHTML = generatedData; 
}


//resources 

//button events 

const button = document.querySelector('button');
const showResources = document.querySelector("#resourcesDivShow");

showResources.style.display = 'none'; 

button.onclick = () => {
  if (showResources.style.display === 'none') {
   showResources.style.display = 'block'; 
  } else {
    showResources.style.display = 'none'; 
  }
};



//end IIFE
})();