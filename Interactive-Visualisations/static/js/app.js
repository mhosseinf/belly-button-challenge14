// Separate function to handle dropdown change
function dropdownChange(data, selectedOTU) {
    createBarChart(data, selectedOTU);
    updateBubbleChart(data, selectedOTU);
    displayDemographicInfo(data, selectedOTU);
    updateGaugeChart(data, selectedOTU);
}

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

        // Populate the dropdown options with OTU values
        for (let i = 0; i < otuIds.length; i++) {
            let otuId = otuIds[i];
            let option = otuDropdown.append("option");
            option.property("value", otuId);
            option.text(`OTU ${otuId}`);
        }

        // Define event for dropdown change
        dropdownMenu.on("change", function() {
            let selectedOTU = dropdownMenu.property("value");
            dropdownChange(data, selectedOTU); // Call the function to update charts
        });

    })
}

// Call the initialization function
init();