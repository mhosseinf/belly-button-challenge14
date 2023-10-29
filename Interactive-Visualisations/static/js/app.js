// Function to create the bar chart
function createBarChart(data, selectedOTU) {
    // Find the selected OTU data from the samples array
    let otus = data.samples.filter(sample => sample.id === selectedOTU);

    // Sort the otus in descending order based on otu_ids
    otus.sort((a, b) => b.otu_ids - a.otu_ids);

    // Get the top 10 OTU IDs, sample values, and labels
    let topOTUs = otus.slice(0, 10);
    
    // Extract the necessary data for the bar chart
    let otuIds = topOTUs.map(otu => `OTU ${otu.otu_ids}`);
    let sampleValues = topOTUs.map(otu => otu.sample_values);
    let otuLabels = topOTUs.map(otu => otu.otu_labels);

    // Define the trace for the bar chart
    let trace = {
        x: sampleValues,
        y: otuIds,
        text: otuLabels,
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
        updateBubbleChart(data, otuIds[0]);
        displayDemographicInfo(data, otuIds[0]);
        updateGaugeChart(data, otuIds[0]);
    })
}

// Call the initialization function
init();