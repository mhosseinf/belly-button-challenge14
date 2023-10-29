# belly-button-challenge14

Interactive Web Visualizations
This repository contains code for creating interactive web visualisations of OTU data from a URL. The visualisation includes bar charts, bubble charts, and sample metadata displays. Additionally, it features a separate bonus file that generates a gauge chart with specific functionality.

Code Structure
The code is structured as follows:

index.html
The main HTML file contains the structure of the web page, including a dropdown menu for selecting the OTU. This is where the visualisations are displayed.

bonus.js
A separate JavaScript file, bonus.js, contains code for creating a specialised gauge chart with distinct functionality. This will be explained separately below.

app.js
The primary JavaScript file, app.js, includes functions for creating bar charts and bubble charts, displaying sample metadata, and calling the gauge chart in the bonus JS file. It connects to the JSON data source and handles user interactions with the dropdown menu.

samples.json
This JSON file is the data source containing information about OTU samples, metadata, and OTU names.

Functionality
Bar Chart and Bubble Chart
The createBarChart function generates a horizontal bar chart showing the top 10 OTUs for the selected OTU ID.
The createBubbleChart function creates a bubble chart displaying data related to OTU IDs.
Sample Metadata Display
The displayDemographicInfo function displays demographic information for the selected OTU. It appends key-value pairs from the metadata to the web page.
General Gauge Chart
The CreateGaugeChart function produces a gauge chart illustrating belly button washing frequency. It uses colours to indicate the level of scrubbing per week.
Bonus Gauge Chart (in bonus.js)
The bonus gauge chart in bonus.js is a separate implementation with additional features. It supports a digital display of the washing frequency and uses different colours for different levels. 

How to Use
Open index.html in your web browser.

Select an OTU from the dropdown menu.

View the interactive visualisations, including bar charts, bubble charts, sample metadata, and the general gauge chart.


Bonus Gauge Chart
The bonus gauge chart in bonus.js offers additional functionality compared to the general gauge chart:

It includes a digital readout of washing frequency.
The colours of the gauge chart are more distinct to represent different levels of scrubbing per week.
This bonus feature provides a more interactive experience for users interested in detailed information about washing frequency.

Enjoy exploring the interactive web visualisations!

