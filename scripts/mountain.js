document.addEventListener("DOMContentLoaded", () => {
  const mountainSelect = document.getElementById("mountainSelect");
  const minElevation = document.getElementById("minElevation");
  const maxElevation = document.getElementById("maxElevation");

  mountainSelect.addEventListener("change", filterMountains);
  minElevation.addEventListener("change", filterMountains);
  maxElevation.addEventListener("change", filterMountains);

  addMountainsSelect(mountainsArray);
  displayMountains(mountainsArray);
});
function addMountainsSelect(mountains) {
  const mountainSelect = document.querySelector("#mountainSelect");
  mountainSelect.innerText = "";
  
  const selectAllOption = document.createElement("option");
  selectAllOption.innerText = "Show All";
  mountainSelect.appendChild(selectAllOption);

  mountains.forEach((mountain) => {
    const mountainOption = document.createElement("option");
    mountainOption.innerText = mountain.name;
    mountainSelect.appendChild(mountainOption);
  });
}

function filterMountains() {
  const mountain = document.getElementById("mountainSelect").value;
  const minElevation = document.getElementById("minElevation").value;
  const maxElevation = document.getElementById("maxElevation").value;

  let filteredMountain = mountainsArray;

  if (mountain !== "Show All") {
    filteredMountain = mountainsArray.filter(
      (m) =>
        m.name === mountain &&
        m.elevation >= minElevation &&
        m.elevation <= maxElevation
    );
  } else {
    filteredMountain = mountainsArray.filter(
      (m) => m.elevation >= minElevation && m.elevation <= maxElevation
    );
  }

  document.getElementById("minElevationDisplay").innerText = minElevation;
  document.getElementById("maxElevationDisplay").innerText = maxElevation;

  displayMountains(filteredMountain);
}

function displayMountains(mountains) {
  const mountainContainer = document.querySelector("#content");
  mountainContainer.innerHTML = "";

  mountains.forEach((mountain) => {
    displayMountain(mountain, mountainContainer);
  });
}

function displayMountain(mountain, parentDiv) {
  const mountainDiv = document.createElement("div");
  mountainDiv.classList.add("product");
  parentDiv.appendChild(mountainDiv);

  addMountainHeader(mountain, mountainDiv);
  addImageRow(mountain, mountainDiv);
  addDescription(mountain, mountainDiv);
  addAdditionalInfo(mountain, mountainDiv);
}

function addMountainHeader(mountain, productDiv) {
  const mountainHeader = document.createElement("h2");
  mountainHeader.innerText = mountain.name;
  productDiv.appendChild(mountainHeader);
}

function addImageRow(mountain, parent) {
  const imageRow = document.createElement("div");
  parent.appendChild(imageRow);

  const img = document.createElement("img");
  img.src = "images/" + mountain.img;
  imageRow.appendChild(img);

  const elevation = document.createElement("h4");
  elevation.innerText = "Elevation: " + mountain.elevation;
  imageRow.appendChild(elevation);
}

function addDescription(mountain, parent) {
  const descriptionRow = document.createElement("div");
  parent.appendChild(descriptionRow);

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.innerText = mountain.desc;
  descriptionRow.appendChild(descriptionParagraph);
}

function addAdditionalInfo(mountain, parent) {
  const additionalInfoDiv = document.createElement("div");
  parent.appendChild(additionalInfoDiv);

  const effort = document.createElement("p");
  effort.innerText = "Effort" + mountain.effort;
  additionalInfoDiv.appendChild(effort);

  const coords = document.createElement("p");
  coords.innerText =
    "Latitude: " + mountain.coords.lat + ", Longitude: " + mountain.coords.lng;
}
