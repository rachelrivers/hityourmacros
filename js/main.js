(function () {

  const searchForm = document.querySelector("#form");
  const searchResultDiv = document.querySelector("#results");
  const container = document.querySelector("#mainContainer");

  let searchQuery = "";
  const API_ID = '8edc38ff';
  const API_key = "08c811cb469279c8c1741585a4673f31";

  //Hide API keys:
  //const API_ID = config.API_ID;
  //const API_key = config.API_KEY;

  //search input

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
  });

  async function fetchAPI() {
    const pathURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_key}&from=0&to=20&diet=low-fat&diet=high-protein	`;
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


 //button toggle events 

  const button = document.querySelector('button');
  const showResources = document.querySelector("#resourcesDivShow");

  showResources.style.display = 'none';

  button.onclick = () => {
    if (showResources.style.display === 'none') {
      showResources.style.display = 'block';
      button.innerHTML = "Show Less";
    } else {
      showResources.style.display = 'none';
      button.innerHTML = "Show More";
    }
  };



  //end IIFE
})();