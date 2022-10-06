$(function() {
    const ctx = document.getElementById("dev_ops_chart");
    const dev_ops_chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["AWS", "Linux", "Nginx", "Apache", "GitHub", "MySQL"],
            datasets: [{
                label: "DevOps",
                data: [3, 1, 3, 1, 3, 2],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1.0)",
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
                    max: 5,
                    min: 0,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
        }
    });
});