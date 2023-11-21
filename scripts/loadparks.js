 function displayNationalParkInformation() {
  const informationDiv = document.querySelector("#informationDiv");
  informationDiv.innerText = "";

  nationalParksArray.forEach((location) => {
    
    const informationDiv2 = document.createElement("div");
    informationDiv2.classList.add("p-5","rounded-3");
    informationDiv2.id = "informationDiv" + location.LocationID;
    informationDiv.appendChild(informationDiv2);

    const locationHeader = document.createElement("h2");
    locationHeader.classList.add("text-body-emphasis");
    locationHeader.innerText = location.LocationName + " Information";
    informationDiv2.appendChild(locationHeader);

    const locationAddressDefine = document.createElement("dl");
    locationAddressDefine.classList.add("row", "mt-4");
    informationDiv2.appendChild(locationAddressDefine);

    const locationNameHeader = document.createElement("dt");
    locationNameHeader.classList.add("col-sm-2");
    locationNameHeader.innerText = "Location Name:";
    locationAddressDefine.appendChild(locationNameHeader);

    const locationName = document.createElement("dd");
    locationName.classList.add("col-sm-5");
    locationName.innerText = location.LocationName;
    locationAddressDefine.appendChild(locationName);

    const addressHeader = document.createElement("dt");
    addressHeader.classList.add("col-sm-1");
    addressHeader.innerText = "Address:";
    locationAddressDefine.appendChild(addressHeader);

    const address = document.createElement("dd");
    address.classList.add("col-sm-4");
    address.innerText = location.Address;
    locationAddressDefine.appendChild(address);

    const cityStateZipDefine = document.createElement("dl");
    cityStateZipDefine.classList.add("row", "mt-4");
    informationDiv2.appendChild(cityStateZipDefine);

    const cityNameHeader = document.createElement("dt");
    cityNameHeader.classList.add("col-sm-1");
    cityNameHeader.innerText = "City:";
    cityStateZipDefine.appendChild(cityNameHeader);

    const cityName = document.createElement("dd");
    cityName.classList.add("col-sm-2");
    cityName.innerText = location.City;
    cityStateZipDefine.appendChild(cityName);

    const stateNameHeader = document.createElement("dt");
    stateNameHeader.classList.add("col-sm-1");
    stateNameHeader.innerText = "State:";
    cityStateZipDefine.appendChild(stateNameHeader);

    const stateName = document.createElement("dd");
    stateName.classList.add("col-sm-2");
    stateName.innerText = location.State;
    cityStateZipDefine.appendChild(stateName);

    const zipCodeHeader = document.createElement("dt");
    zipCodeHeader.classList.add("col-sm-2");
    zipCodeHeader.innerText = "Zip Code:";
    cityStateZipDefine.appendChild(zipCodeHeader);

    const zipCode = document.createElement("dd");
    zipCode.classList.add("col-sm-1");
    zipCode.innerText = location.ZipCode;
    cityStateZipDefine.appendChild(zipCode);

    const phoneFaxDefine = document.createElement("dl");
    phoneFaxDefine.classList.add("row", "mt-4");
    informationDiv2.appendChild(phoneFaxDefine);

    const phoneHeader = document.createElement("dt");
    phoneHeader.classList.add("col-sm-2");
    phoneHeader.innerText = "Phone Number:";
    phoneFaxDefine.appendChild(phoneHeader);

    const phoneNuber = document.createElement("dd");
    phoneNuber.classList.add("col-sm-2");
    phoneNuber.innerText = location.Phone;
    phoneFaxDefine.appendChild(phoneNuber);

    const faxHeader = document.createElement("dt");
    faxHeader.classList.add("col-sm-1");
    faxHeader.innerText = "Fax:";
    phoneFaxDefine.appendChild(faxHeader);

    const faxNumber = document.createElement("dd");
    faxNumber.classList.add("col-sm-2");
    faxNumber.innerText = location.Fax;
    phoneFaxDefine.appendChild(faxNumber);

    const buttonId = "button" + location.LocationID;

    const additionalInfoButton = document.createElement("button");
    additionalInfoButton.classList.add(
      "btn",
      "btn-toggle",
      "d-inline-flex",
      "align-items-center",
      "rounded",
      "border-0",
      "collapsed",
      "btn-outline-dark"
    );
    additionalInfoButton.setAttribute("data-bs-toggle", "collapse");
    additionalInfoButton.setAttribute("data-bs-target", "#" + buttonId);
    additionalInfoButton.setAttribute("aria-expanded", "true");
    additionalInfoButton.innerText = "Additional Information";
    informationDiv2.appendChild(additionalInfoButton);

    const additionalInfoDiv = document.createElement("div");
    additionalInfoDiv.classList.add("collapse", "hide");
    additionalInfoDiv.id = buttonId;
    informationDiv2.appendChild(additionalInfoDiv);

    const additionalInfoDefine = document.createElement("dl");
    additionalInfoDefine.classList.add("row", "mt-4");
    additionalInfoDiv.appendChild(additionalInfoDefine);

    const locationIdHeader = document.createElement("dt");
    locationIdHeader.classList.add("col-sm-3");
    locationIdHeader.innerText = "Location Id:";
    additionalInfoDefine.appendChild(locationIdHeader);

    const locationId = document.createElement("dd");
    locationId.classList.add("col-sm-9");
    locationId.innerText = location.LocationID;
    additionalInfoDefine.appendChild(locationId);

    const locationTypeHeader = document.createElement("dt");
    locationTypeHeader.classList.add("col-sm-3");
    locationTypeHeader.innerText = "Location Type:";
    additionalInfoDefine.appendChild(locationTypeHeader);

    const locationType = document.createElement("dd");
    locationType.classList.add("col-sm-9");
    locationType.innerText = location.Location.type;
    additionalInfoDefine.appendChild(locationType);

    const latitudeHeader = document.createElement("dt");
    latitudeHeader.classList.add("col-sm-3");
    latitudeHeader.innerText = "Latitude:";
    additionalInfoDefine.appendChild(latitudeHeader);

    const latitude = document.createElement("dd");
    latitude.classList.add("col-sm-9");
    latitude.innerText = location.Latitude;
    additionalInfoDefine.appendChild(latitude);

    const LongitudeHeader = document.createElement("dt");
    LongitudeHeader.classList.add("col-sm-3");
    LongitudeHeader.innerText = "Longitude:";
    additionalInfoDefine.appendChild(LongitudeHeader);

    const longitude = document.createElement("dd");
    longitude.classList.add("col-sm-9");
    longitude.innerText = location.Longitude;
    additionalInfoDefine.appendChild(longitude);
  });
}