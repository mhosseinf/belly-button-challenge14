// Function to create the bar chart
function createBarChart(data, selectedOTU) {
    console.log("Selected OTU data:", data); // Log selected OTU data
    // Find the selected OTU data from the samples array using filter
    let otus = data.samples.filter(sample => sample.id === selectedOTU)[0];
    console.log("Selected OTU:", otus); // Log selected OTU
    
    // Sort the OTUs in descending order based on sample_values
    otus.otu_ids.sort((a, b) => a - b);
    otus.otu_labels.sort((a, b) => a - b);
    otus.sample_values.sort((a, b) => a - b);


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

// Function to create the bubble chart
function createBubbleChart(data, selectedOTU) {
    console.log("Selected OTU data:", data); // Log selected OTU data
    
    // Find the selected OTU data from the samples array using filter
    let otus = data.samples.filter(sample => sample.id === selectedOTU)[0];
    console.log("Selected OTU:", otus); // Log selected OTU
    
    // Define the trace for the bubble chart
    let trace = {
        x: otus.otu_ids,
        y: otus.sample_values,
        text: otus.otu_labels,
        mode: 'markers',
        marker: {
            size: otus.sample_values,
            color: otus.otu_ids,
            colorscale: 'Earth'
        }
    };

    // Define layout for the bubble chart
    let layout = {
        title: `Bubble Chart for ${selectedOTU}`,
        xaxis: {
            title: 'OTU ID'
        },
        yaxis: {
            title: 'Sample Values'
        }
    };

    // Create an array with the trace
    let dataToPlot = [trace];
    // Create the bubble chart using Plotly
    Plotly.newPlot("bubble", dataToPlot, layout);
}

// Function to handle dropdown change
function dropdownChange(data, selectedOTU) {
    createBarChart(data, selectedOTU);
    createBubbleChart(data, selectedOTU);
    displayDemographicInfo(data, selectedOTU);
    CreateGaugeChart(data, selectedOTU);
}

// Function to display sample metadata for the displayDemographicInfo
function displayDemographicInfo(data, selectedOTU) {
    console.log("Selected OTU data:", data); 
 // Find the selected OTU data from the samples array using filter
    let metadata = data.metadata.filter(item => item.id == selectedOTU)[0];
    console.log("Selected metadata:", metadata);

    let sampleMetadata = d3.select("#sample-metadata");

    // Clear any existing metadata
    sampleMetadata.html("");

    // Iterate through the metadata and append each key-value pair
    for (let [key, value] of Object.entries(metadata)) {
        sampleMetadata
            .append("p")
            .text(`${key}: ${value}`);
    }
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

        // Define event for dropdown change and call the function to update charts
        otuDropdown.on("change", function() {
            let selectedOTU = otuDropdown.property("value");
            dropdownChange(data, selectedOTU); 
        });

        // Create the initial bar chart and bubble chart with the first OTU
        createBarChart(data, otuIds[0]);
        createBubbleChart(data, otuIds[0]);
        displayDemographicInfo(data, otuIds[0]);
        CreateGaugeChart(data, otuIds[0]);
    });
}

// Call the initialization function
init();