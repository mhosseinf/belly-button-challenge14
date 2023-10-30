function CreateGaugeChart(data, selectedOTU) {
    // Find the selected OTU data from the metadata array using filter
    let metadata = data.metadata.filter(item => item.id == selectedOTU);

    // if (metadata.length === 0) {
    //     return; // Exit the function if metadata is empty
    // }

    let washFrequency = metadata[0].wfreq;

    // Define colors for the gauge chart, transitioning from white to dark green
    let colors = ["#FFFFFF", "#E6FFCC", "#C2FF99", "#80FF00", "#4D9900", "#1A6600", "#004C00", "#003300", "#001A00", "#000000"];

    // Calculate color index based on wash frequency
    let colorIndex = Math.floor(washFrequency);

    // Update the gauge chart with the new wash frequency value
    let trace = {
        domain: { x: [0, 1], y: [0, 1] },
        value: washFrequency,
        title: { text: "Belly Button Washing Frequency<br>Scrubs per Week" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [0, 9], tickwidth: 0.5, tickmode: "array", ticks: "outside" },
            bar: { color: colors[colorIndex] },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
                { range: [0, 1], color: colors[0] },
                { range: [1, 2], color: colors[1] },
                { range: [2, 3], color: colors[2] },
                { range: [3, 4], color: colors[3] },
                { range: [4, 5], color: colors[4] },
                { range: [5, 6], color: colors[5] },
                { range: [6, 7], color: colors[6] },
                { range: [7, 8], color: colors[7] },
                { range: [8, 9], color: colors[8] },
            ]
        }
    };

    let layout = {
        width: 400,
        height: 300,
        margin: { t: 50, r: 25, l: 50, b: 25 },
    };

    Plotly.newPlot('gauge', [trace], layout);
}