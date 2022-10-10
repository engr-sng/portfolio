$(function() {
    const ctx = document.getElementById("back_end_chart");
    const back_end_chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["Ruby", "Ruby on Rails", "PHP", "Laravel", "API"],
            datasets: [{
                label: "Back-End",
                data: [3, 3, 2, 2, 2],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1.0)",
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