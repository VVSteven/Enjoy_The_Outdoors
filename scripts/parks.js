document.addEventListener("DOMContentLoaded", () => {
  const stateSelection = document.getElementById("locationAccordian");
  const typeSelection = document.getElementById("typeAccordian");

  typeSelection.onchange = typeSelection;
  stateSelection.onchange = stateSelection;

  addStatesList();
  addTypeLists();
});

function addStatesList() {}
function addTypeLists() {}

function displayStates() {
  const statesList = document.getElementById("statesList");

  for (let state of locationsArray) {
    // console.log(state)
    const option = new Option(state);
    statesList.appendChild(option);
  }
}

function displayTypes() {
  const statesList = document.getElementById("statesList");

  for (let state of locationsArray) {
    // console.log(state)
    const option = new Option(state);
    statesList.appendChild(option);
  }
}
