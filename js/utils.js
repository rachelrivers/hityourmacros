//button events 

const resourcesDiv = document.getElementById("resourcesDiv");
const button = document.getElementById("toggleResources");

button.onClick = function(){
  if (resourcesDiv.className == "open") {
    resourcesDiv.className = "";
    button.innerHTML = "Show More"
  } else {
    resourcesDiv.className = "open";
    button.innerHTML = "Show Less";
  }
};