# Enjoy The Outdoors

The goal for the project was to demonstrate the integration of JavaScript with HTML and CSS, focusing on dynamic content generation and manipulation of the Document Object Model (DOM).

## Technologies Used
- **JavaScript:** Used for dynamic content generation, DOM manipulation, and implementing interactive features.
- **HTML:** Provides the structure and markup for the web pages.
- **CSS:** Styles the HTML elements to enhance the visual presentation and layout.
- **Bootstrap:** Utilized for responsive design, grid layout, and pre-styled components.

## Steps Taken
1. Looked for inspiration.
2. Sketched the project on Microsoft Whiteboard.
3. Started building the index page until satisfied.
4. Developed the park page, focusing on JavaScript functionality.
5. Spent considerable time ensuring the park page functionality worked as intended.
6. Rushed through development of the mountains page.

## Page Details
### Index Page
- Black and white theme.
- Includes navigation, hero image, and content consisting of two photos and two paragraphs.

### Park Page
- Features navigation, hero image, and a filter section on the right.
- Main content dynamically displays filtered results based on selection.
- Filter options include type and location.
- Utilized city arrays to display national parks in specific locations.
- Accessed detailed information about each national park from the `nationalParksArray`.
#### Park Page JavaScript Functionality Overview

- **DOMContentLoaded Event Listener**: Ensures that the DOM content is fully loaded before executing JavaScript functions.
- **Display Functions**: 
  - `displayType`: Populates the park type select dropdown with options based on the `parkTypesArray`.
  - `displayLocations`: Populates the location select dropdown with options based on the `locationsArray`.
  - `displayNationalParkInformation`: Displays national park information initially.
- **Event Listeners**: 
  - Listen for clicks on park type and location elements in the dropdowns to filter parks accordingly.
  - Listen for clicks on clear filters buttons to reset selected filters.
- **Filtering Parks**:
  - The `filterParks` function filters parks based on the selected park type and location.
- **Displaying Filtered Parks**:
  - The `displayFiltered` function dynamically displays the filtered national park information.
- **Helper Functions**:
  - `clearFiltersButtons`: Clears the text content of the clear buttons.

#### Usage

1. **Dropdown Selection**: Users can select a specific park type and location from the dropdown menus.
2. **Filtering**: Parks are dynamically filtered based on the selected park type and location.
3. **Clear Filters**: Users can clear selected filters to reset the display.

### Mountains Page
- Contains navigation, hero image, and a filter section on the right.
- Main content dynamically displays filtered results based on selection.
- Filter options include mountain and elevation.
  #### Mountains Page JavaScript Functionality Overview

- **DOMContentLoaded Event Listener**: The code ensures that the DOM content is fully loaded before executing JavaScript functions.
- **Event Listeners**: Three event listeners are added to listen for changes in the mountain select dropdown and the minimum and maximum elevation input fields. When changes occur, the `filterMountains` function is called.
- **`addMountainsSelect` Function**: Populates the mountain select dropdown with options based on the `mountainsArray`.
- **`filterMountains` Function**: Filters mountains based on the selected mountain, minimum elevation, and maximum elevation. It updates the display accordingly.
- **`displayMountains` Function**: Clears the existing mountain container and displays the filtered mountains.
- **`displayMountain` Function**: Creates a div for each mountain and populates it with the mountain's information.
- **Helper Functions**: Several helper functions are used to add headers, images, descriptions, and additional information for each mountain.

#### Usage

1. **Dropdown Selection**: Users can select a specific mountain from the dropdown menu.
2. **Elevation Range Selection**: Users can adjust the minimum and maximum elevation range to filter mountains accordingly.
3. **Display Update**: The filtered mountains are dynamically displayed based on the user's selections.


## Struggles and Goals
### Struggles
- Difficulty in retrieving values from selected `<a>` tags.

### Goals
- Achieve a visually appealing display with fully functional code.

## Blueprint
- [Homepage Draft](C:/Users/Student/pluralsight/LearnToCode/Workbook5/Enjoy_The_Outdoors/images/readme/homepage.PNG)
- [Park Draft](C:/Users/Student/pluralsight/LearnToCode/Workbook5/Enjoy_The_Outdoors/images/readme/park.PNG)
- [Mountain Draft](C:/Users/Student/pluralsight/LearnToCode/Workbook5/Enjoy_The_Outdoors/images/readme/mountain.PNG)
- [Logic Draft](C:/Users/Student/pluralsight/LearnToCode/Workbook5/Enjoy_The_Outdoors/images/readme/logic.PNG)

[GitHub Issues](https://github.com/VVSteven/Enjoy_The_Outdoors/issues/1#issue-2006901973)

This project showcases the integration of JavaScript for dynamic content generation, HTML for structure, CSS for styling, and Bootstrap for responsive design. It emphasizes the use of DOM manipulation techniques to create interactive and visually appealing web pages.
