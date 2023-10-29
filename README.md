# belly-button-challenge14

## Interactive Web Visualisations

This repository contains code for creating interactive web visualisations of OTU data from a JSON source. The visualisation includes bar charts, bubble charts, and sample metadata displays. Additionally, it features a separate bonus file that generates a gauge chart with specific functionality.

### Code Structure
The code is structured as follows:

index.html
The main HTML file contains the structure of the web page, including a dropdown menu for selecting the OTU. This is where the visualisations are displayed.

bonus.js
A separate JavaScript file, bonus.js, contains code for creating a specialised gauge chart with distinct functionality. It is part of the bonus feature and is explained below.

app.js
The primary JavaScript file, app.js, includes functions for creating bar charts, bubble charts, displaying sample metadata, and the gauge chart. It connects to the JSON data source at the provided URL and handles user interactions with the dropdown menu.

samples.json
This JSON file is the data source containing information about OTU samples, metadata, and OTU names.

Code Structure and Interaction
app.js
The primary JavaScript file, app.js, serves as the core of the web application. It includes functions for creating the main visualisations and handling user interactions:

createBarChart(data, selectedOTU): This function generates a horizontal bar chart showing the top 10 OTUs for the selected OTU ID.

createBubbleChart(data, selectedOTU): This function creates a bubble chart displaying data related to OTU IDs.

displayDemographicInfo(data, selectedOTU): This function displays demographic information for the selected OTU. It appends key-value pairs from the metadata to the web page.

CreateGaugeChart(data, selectedOTU): This function produces a gauge chart illustrating belly button washing frequency. It uses colours to indicate the level of scrubbing per week.function details are in bonus.js file.

init(): The initialisation function fetches data from the provided URL, creates the dropdown menu, and sets event listeners. It also initialises the visualisations with the first OTU.

bonus.js
The separate bonus.js file is part of the bonus feature and provides an alternative gauge chart implementation with additional functionality:

It includes a digital display of washing frequency.
The colours of the gauge chart are more distinct to represent different levels.

### Interaction
While app.js handles the main interactive web visualisations, bonus.js provides an alternative implementation of the gauge chart. 

### How to Use
Open index.html in your web browser.

Select an OTU from the dropdown menu.

View the interactive visualisations, including bar charts, bubble charts, sample metadata, and the general gauge chart.


