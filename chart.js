let dailyChart = null;
let monthlyChart = null;

// ===============================
// Daily Revenue Chart
// ===============================

function updateDailyChart(dailyMetrics) {

    const labels = dailyMetrics.map(item =>
        item.order_date.substring(8)   // Day only (01,02,03...)
    );

    const revenue = dailyMetrics.map(item =>
        item.total_revenue
    );

    const ctx = document
        .getElementById("dailyChart")
        .getContext("2d");

    if (dailyChart) {
        dailyChart.destroy();
    }

    dailyChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: labels,

            datasets: [{

                label: "Daily Revenue",

                data: revenue,

                borderColor: "#ff5b1f",

                backgroundColor: "rgba(255,91,31,0.15)",

                borderWidth: 3,

                fill: true,

                tension: 0.4

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true

                }

            }

        }

    });

}

// ===============================
// Monthly Sales Chart
// ===============================

function updateMonthlyChart(monthlyMetrics) {

    const monthNames = [

        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"

    ];

    const labels = monthlyMetrics.map(item =>
        monthNames[item.month - 1]
    );

    const sales = monthlyMetrics.map(item =>
        item.no_of_sales
    );

    const ctx = document
        .getElementById("monthlyChart")
        .getContext("2d");

    if (monthlyChart) {
        monthlyChart.destroy();
    }

    monthlyChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [{

                label: "Monthly Sales",

                data: sales,

                borderWidth: 1

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true

                }

            }

        }

    });

}