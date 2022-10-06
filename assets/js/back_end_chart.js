$(function() {
    const ctx = document.getElementById("back_end_chart");
    const back_end_chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["HTML / CSS", "SCSS / Sass", "JavaScript",  "jQuery", "Ruby", "Ruby on Rails"],
            datasets: [{
                label: "Back-End",
                data: [5, 5, 3, 3, 4, 4],
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