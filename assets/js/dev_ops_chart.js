$(function() {
    const ctx = document.getElementById("dev_ops_chart");
    const dev_ops_chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["AWS", "Linux", "Nginx", "Apache", "SQL", "Git / GitHub"],
            datasets: [{
                label: "DevOps",
                data: [2, 2, 2, 1, 2, 2],
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