// Function to create the bar chart
function createBarChart(data, selectedOTU) {
    console.log("Selected OTU data:", data); // Log selected OTU data
    
    // Find the selected OTU data from the samples array using filter
    let otus = data.samples.filter(sample => sample.id === selectedOTU)[0];
    console.log("Selected OTU:", otus); // Log selected OTU
    
    // Get the top 10 OTU IDs in reverse order
    let topOTUs = otus.otu_ids.slice(0, 10).reverse();
    // Get the top 10 OTU labels in reverse order
    let topLabels = otus.otu_labels.slice(0, 10).reverse();

    // Define the trace for the bar chart
    let trace = {
        x: otus.sample_values.slice(0, 10).reverse(),
        y: topOTUs.map(otuId => `OTU ${otuId}`),
        text: topLabels, // Set otu_labels as hover text
        type: 'bar',
        orientation: 'h',
    };

    // Define layout for the bar chart
    let layout = {
        title: `Top 10 OTUs for ${selectedOTU}`,
    };

    // Create an array with the trace
    let dataToPlot = [trace];
    // Create the bar chart using Plotly
    Plotly.newPlot("bar", dataToPlot, layout);
}
// Function to handle dropdown change
function dropdownChange(data, selectedOTU) {
    createBarChart(data, selectedOTU);
    // updateBubbleChart(data, selectedOTU);
    // displayDemographicInfo(data, selectedOTU);
    // updateGaugeChart(data, selectedOTU);
}

// Define the URL to fetch the data
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Initialize the page
function init() {
    // Fetch the JSON data from the above URL
    d3.json(url).then(data => {
        console.log("Fetched data:", data);
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

        // Define event for dropdown change and Call the function to update charts
        otuDropdown.on("change", function() {
            let selectedOTU = otuDropdown.property("value");
            dropdownChange(data, selectedOTU); 
        });

        // Create the initial bar chart, bubble chart, demographic info, and gauge chart with the first OTU
        createBarChart(data, otuIds[0]);
        // updateBubbleChart(data, otuIds[0]);
        // displayDemographicInfo(data, otuIds[0]);
        // updateGaugeChart(data, otuIds[0]);
    })
}

// Call the initialization function
init();