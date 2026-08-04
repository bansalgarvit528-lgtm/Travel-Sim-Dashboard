const SUPABASE_URL = "https://ualwewqnzcsgzybibncd.supabase.co/rest/v1/rpc/get_sale_dashboard?apikey=sb_publishable_umFkWkpviSSSEqdqbJnhWw_bra_Fdb8";
const SUPABASE_KEY = "sb_publishable_umFkWkpviSSSEqdqbJnhWw_bra_Fdb8";

const reportDate = document.getElementById("reportDate");
const loadBtn = document.getElementById("loadBtn");
const loading = document.getElementById("loading");

// Default date
reportDate.value = "2026-05-20";

// Load dashboard on page load
window.addEventListener("load", loadDashboard);

// Load when button is clicked
loadBtn.addEventListener("click", loadDashboard);

// Load automatically when date changes
reportDate.addEventListener("change", loadDashboard);

async function loadDashboard() {

    const selectedDate = reportDate.value;

    console.log("Selected Date:", selectedDate);

    loading.style.display = "block";

    try {

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/rpc/get_sale_dashboard`,
            {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    report_date: selectedDate
                })
            }
        );

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const result = await response.json();

        console.log("API Response:", result);

        const data = result[0];

        updateCards(data.kpi_cards);

        updateLeaderboard(data.leaderboard_metrics);

        updateDestinations();

        updateDailyChart(data.daily_metrics);

        updateMonthlyChart(data.monthly_metrics);

    }
    catch (error) {

        console.error(error);

        alert(error.message);

    }
    finally {

        loading.style.display = "none";

    }

}

function updateCards(kpi) {

    document.getElementById("todayOrders").innerText =
        kpi.TODAY_SALES;

    document.getElementById("todayRevenue").innerText =
        "₹ " + Number(kpi.TODAY_REVENUE).toLocaleString();

    document.getElementById("mtdOrders").innerText =
        kpi.mtd_sales;

    document.getElementById("mtdRevenue").innerText =
        "₹ " + Number(kpi.MTD_REVENUE).toLocaleString();

    document.getElementById("prevOrders").innerText =
        kpi.PM_SALES;

    document.getElementById("prevRevenue").innerText =
        "₹ " + Number(kpi.PM_REVENUE).toLocaleString();

    document.getElementById("totalRevenue").innerText =
        "₹ " + Number(kpi.MTD_REVENUE).toLocaleString();

}

function updateLeaderboard(list) {

    const tbody = document.getElementById("leaderboardBody");

    tbody.innerHTML = "";

    list.forEach((person, index) => {

        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${person.sales_representative}</td>
                <td>${person.today_sales ?? 0}</td>
                <td>₹ ${Number(person.today_revenue ?? 0).toLocaleString()}</td>
            </tr>
        `;

    });

}

function updateDestinations() {

    const destinationList = document.getElementById("destinationList");

    destinationList.innerHTML = `
        <li><span>Goa</span><span>★★★★★</span></li>
        <li><span>Jaipur</span><span>★★★★☆</span></li>
        <li><span>Kerala</span><span>★★★★☆</span></li>
        <li><span>Leh</span><span>★★★☆☆</span></li>
        <li><span>Manali</span><span>★★★☆☆</span></li>
    `;

}