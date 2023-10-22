// Get a reference to the canvas element
var ctx = document.getElementById("myChart").getContext("2d");

// Define the data for the chart
var chartData = {
  labels: ["Jun", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Sales",
      data: [5, 10, 11, 20, 18], // Example data values
      backgroundColor: "purple", // Background color
      borderColor: "purple", // Border color
      borderWidth: 2, // Border width
    },
  ],
};

// Create the chart
var myChart = new Chart(ctx, {
  type: "line",
  data: chartData,
});

// You can customize the chart further by configuring options and adding more data if needed.
