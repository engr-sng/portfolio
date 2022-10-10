$(function() {
    const ctx = document.getElementById("front_end_chart");
    const front_end_chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["HTML", "CSS", "SCSS", "JavaScript",  "jQuery"],
            datasets: [{
                label: "Back-End",
                data: [3, 3, 3, 2, 2],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgb(75, 192, 192, 1.0)",
            }]
        },
        options: {
            plugins: {
                legend: {
                display: false
                }
            },
            scales: {
                r: {
                    max: 3,
                    min: 0,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
        }
    });
});