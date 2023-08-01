function showParagraphsDiv() {
  let paragraphsDiv = document.getElementById("p-div");
  let imagesDiv = document.getElementById("img-div");

  paragraphsDiv.style.display = "block";
  imagesDiv.style.display = "none";

  let newParagraph = document.createElement("p");
  newParagraph.textContent = "Capybara capybara capybara capybara Capybara";
  paragraphsDiv.appendChild(newParagraph);
}

function showImagesDiv() {
  let imagesDiv = document.getElementById("img-div");
  let paragraphsDiv = document.getElementById("p-div");

  imagesDiv.style.display = "block";
  paragraphsDiv.style.display = "none";

  let newImage = document.createElement("img");
  newImage.src = "capybara.jpeg";
  newImage.alt = "New Image";
  newImage.style.width = "200px";
  imagesDiv.appendChild(newImage);
}

let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");

pButton.addEventListener("click", showParagraphsDiv);
imgButton.addEventListener("click", showImagesDiv);
