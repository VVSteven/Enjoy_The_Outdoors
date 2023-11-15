document.addEventListener("DOMContentLoaded", () => {
  displayType(parkTypesArray);
  displayLocations(locationsArray);
});

function displayType(parkTypesArray) {
  const uListType = document.querySelector("#typeList");
  uListType.innerText = "";

  parkTypesArray.forEach((type) => {
    const typeList = document.createElement("li");
    uListType.appendChild(typeList);

    const displayParkType = document.createElement("a");
    displayParkType.classList.add(
      "link-body-emphasis",
      "d-inline-flex",
      "text-decoration-none",
      "rounded"
    );
    const typeId = "type" + type.replace(/\s+/g, "");
    displayParkType.id = typeId;
    displayParkType.innerText = type;
    typeList.appendChild(displayParkType);
  });
}

function displayLocations(locationsArray) {
  const uListLocation = document.querySelector("#locationList");
  uListLocation.innerText = "";

  locationsArray.forEach((location) => {
    const locationList = document.createElement("li");
    uListLocation.appendChild(locationList);

    const displayStateName = document.createElement("a");
    displayStateName.classList.add(
      "link-body-emphasis",
      "d-inline-flex",
      "text-decoration-none",
      "rounded"
    );
    const stateId = "state" + location.replace(/\s+/g, "");
    displayStateName.id = stateId;
    displayStateName.innerText = location;
    locationList.appendChild(displayStateName);
  });
}

function displayNationalParks(){
  
}