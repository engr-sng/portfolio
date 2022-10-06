$(function() {
    const ctx = document.getElementById("front_end_chart");
    const front_end_chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["HTML / CSS", "SCSS / Sass", "JavaScript",  "jQuery", "Ruby", "Ruby on Rails"],
            datasets: [{
                label: "Back-End",
                data: [5, 5, 3, 3, 4, 4],
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