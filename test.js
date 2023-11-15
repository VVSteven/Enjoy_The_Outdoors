const locationsArray = [
    "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas",
    "California", "Colorado", "Connecticut", "Delaware", "DC",
    "Florida", "Georgia", "Guam", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
    "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

document.addEventListener('DOMContentLoaded', function () {
    const locationsList = document.getElementById('locations-list');

    locationsArray.forEach(location => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = location;

        const label = document.createElement('label');
        label.htmlFor = location;
        label.textContent = location;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        locationsList.appendChild(listItem);
    });
});
