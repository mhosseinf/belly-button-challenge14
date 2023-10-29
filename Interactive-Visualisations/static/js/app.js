// Define the URL to fetch the data
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Initialize the page
function init() {
    // Fetch the JSON data from the above URL
    d3.json(url).then(data => {
        console.log("Fetched data:", data); // Log fetched data
        // Extract the list of OTU IDs
        let otuIds = data.names;

        // Select the OTU dropdown element
        let otuDropdown = d3.select("#selDataset");

        // Populate the dropdown with OTU options
        for (let i = 0; i < otuIds.length; i++) {
            let otuId = otuIds[i];
        
            let option = otuDropdown.append("option");
            option.property("value", otuId);
            option.text(`OTU ${otuId}`);
        }

        // Define event listener for dropdown change
        otuDropdown.on("change", function() {
            let selectedOTU = otuDropdown.property("value");
            createBarChart(data, selectedOTU); // Update the bar chart
            updateBubbleChart(data, selectedOTU); // Update the bubble chart
            displayDemographicInfo(data, selectedOTU); // Update the demographic info
            updateGaugeChart(data, selectedOTU); // Update the gauge chart
        });

        // Create the initial bar chart, bubble chart, demographic info, and gauge chart with the first OTU
        createBarChart(data, otuIds[0]);
        updateBubbleChart(data, otuIds[0]);
        displayDemographicInfo(data, otuIds[0]);
        updateGaugeChart(data, otuIds[0]);
    }).catch(error => {
        console.error("Error loading data:", error);
    });
}

// Call the initialization function
init();