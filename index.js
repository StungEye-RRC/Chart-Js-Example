// Import from the chart.js npm module.
import { Chart } from "chart.js"; 

// Get the context of the canvas element in our HTML file.
let ctx = document.querySelector("canvas#chart").getContext("2d"); 

// Create a pie chart showing the contents of our bag of holding.
new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["🏺 Amphora", "📜 Scrolls", "🗡️ Daggers"],
    datasets: [ { data: [12, 19, 30], backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"] } ]
  }
});