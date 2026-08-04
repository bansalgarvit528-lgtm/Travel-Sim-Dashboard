# ✈️ Travel Sales Analytics Dashboard

A responsive and interactive **Travel Sales Analytics Dashboard** designed to visualize sales performance, revenue trends, sales representatives' performance, and key business metrics.

The project integrates a **Supabase backend/database** with a frontend dashboard through a REST API/RPC endpoint. The API was tested and validated using **Postman**, while the web application consumes the API dynamically using JavaScript.

---

## 📌 Project Overview

The Travel Sales Analytics Dashboard provides a centralized view of important sales and revenue metrics.

Users can select a specific reporting date and dynamically load the corresponding data from the backend.

The dashboard displays:

* 📊 Today's Orders
* 💰 Today's Revenue
* 📅 Month-to-Date Sales
* 💵 Month-to-Date Revenue
* 📈 Previous Month Performance
* 💰 Total Revenue
* 🏆 Daily Sales Leaderboard
* 🌍 Top Destinations
* 📉 Daily Revenue Trends
* 📊 Monthly Sales Trends

The dashboard is designed to make sales data easier to understand through **KPI cards, tables, and interactive charts**.

---

## 🚀 Key Features

### 1. Dynamic Date Selection

Users can select a reporting date from the dashboard.

The application automatically fetches the corresponding data from the backend whenever:

* The dashboard loads
* The **Load Data** button is clicked
* The selected date is changed

This functionality is implemented through JavaScript event listeners.

---

### 2. KPI Dashboard

The dashboard provides important business KPIs including:

| KPI                    | Description                                 |
| ---------------------- | ------------------------------------------- |
| Today's Orders         | Number of sales/orders for the selected day |
| Today's Revenue        | Revenue generated on the selected day       |
| Month-to-Date Orders   | Total sales during the current month        |
| Month-to-Date Revenue  | Revenue generated during the current month  |
| Previous Month Orders  | Sales performance of the previous month     |
| Previous Month Revenue | Revenue generated during the previous month |
| Total Revenue          | Overall displayed revenue metric            |

The values are dynamically populated from the API response.

---

### 3. Daily Sales Leaderboard

The dashboard contains a leaderboard showing sales representatives and their performance.

The table displays:

* Rank
* Sales Representative
* Orders
* Revenue

The leaderboard is dynamically generated from the API response.

---

### 4. Revenue Visualization

The project uses **Chart.js** to visualize business performance.

#### Daily Revenue Chart

A line chart displays revenue trends across individual days.

The chart extracts the order date and total revenue from the API response.

#### Monthly Sales Chart

A bar chart displays the number of sales across different months.

The application converts month numbers into readable month names such as January, February, March, etc.

---

## 🏗️ Project Architecture

```text
                         ┌─────────────────────┐
                         │      Supabase       │
                         │   Database / RPC    │
                         └──────────┬──────────┘
                                    │
                                    │ REST API
                                    ▼
                         ┌─────────────────────┐
                         │        API          │
                         │  Supabase RPC       │
                         └──────────┬──────────┘
                                    │
                                    │ JSON Response
                                    ▼
                         ┌─────────────────────┐
                         │    JavaScript       │
                         │   Fetch + Process   │
                         └──────────┬──────────┘
                                    │
                   ┌────────────────┼────────────────┐
                   ▼                ▼                ▼
              KPI Cards        Leaderboard        Charts
                   │                │                │
                   └────────────────┼────────────────┘
                                    ▼
                         ┌─────────────────────┐
                         │    Web Dashboard    │
                         │   HTML + CSS + JS   │
                         └─────────────────────┘
```

---

## 🛠️ Technologies Used

### Frontend

* **HTML5** – Dashboard structure
* **CSS3** – Styling and responsive layout
* **JavaScript (ES6+)** – API integration and dynamic data handling
* **Chart.js** – Data visualization
* **Font Awesome** – Icons

The HTML page loads Chart.js through its CDN and includes separate JavaScript files for dashboard logic and charts.

### Backend & Database

* **Supabase**
* PostgreSQL database
* Supabase REST API
* Supabase RPC function

### API Testing

* **Postman** – Used to test and validate the API endpoint and response structure before integrating it with the frontend.

---

## 📂 Project Structure

```text
Travel-Sales-Dashboard/
│
├── index.html
├── style.css
├── script.js
├── chart.js
│
└── README.md
```

### File Description

| File         | Purpose                                       |
| ------------ | --------------------------------------------- |
| `index.html` | Main dashboard structure                      |
| `style.css`  | Dashboard styling and responsive design       |
| `script.js`  | API integration and dynamic dashboard updates |
| `chart.js`   | Daily and monthly chart generation            |
| `README.md`  | Project documentation                         |

---

## 🔄 Data Flow

The overall data flow of the application is:

```text
User selects date
       ↓
JavaScript captures selected date
       ↓
API request is generated
       ↓
Supabase RPC endpoint
       ↓
PostgreSQL / Supabase Database
       ↓
JSON response
       ↓
JavaScript processes response
       ↓
KPI Cards + Leaderboard + Charts
       ↓
Dashboard displays updated information
```

The application sends the selected `report_date` as part of a POST request to the Supabase RPC endpoint.

---

## 🔌 API Integration

The project uses a Supabase RPC function named:

```text
get_sale_dashboard
```

The API receives the selected reporting date:

```json
{
  "report_date": "2026-05-20"
}
```

The JavaScript application then processes the API response and extracts:

```text
kpi_cards
leaderboard_metrics
daily_metrics
monthly_metrics
```

These datasets are used to populate different sections of the dashboard.

---

## 🧪 API Testing with Postman

Before integrating the API with the frontend, the API can be tested using **Postman**.

### Request Type

```text
POST
```

### API Endpoint

```text
Supabase REST RPC Endpoint
```

### Headers

```text
apikey: YOUR_SUPABASE_KEY
Authorization: Bearer YOUR_SUPABASE_KEY
Content-Type: application/json
```

### Request Body

```json
{
  "report_date": "2026-05-20"
}
```

### Expected Response Structure

```json
[
  {
    "kpi_cards": {},
    "leaderboard_metrics": [],
    "daily_metrics": [],
    "monthly_metrics": []
  }
]
```

> The exact response values depend on the data stored in the Supabase database.

---

## 🗄️ Database

The project uses **Supabase** as the backend database platform.

Supabase provides the database layer and exposes the required dashboard data through an RPC function.

The frontend does not directly perform SQL queries. Instead, it communicates with the backend through the API endpoint.

```text
Frontend
   ↓
REST API
   ↓
Supabase RPC
   ↓
PostgreSQL Database
```

This approach separates the presentation layer from the database layer and makes the dashboard easier to maintain.

---

## 📊 Dashboard Components

### KPI Cards

The dashboard contains four primary KPI cards:

```text
Today's Orders
Today's Revenue
Month To Date
Previous Month
```

The HTML structure defines these dashboard cards and their dynamic elements.

### Leaderboard

The leaderboard dynamically creates table rows based on the API response.

```text
Rank | Name | Orders | Revenue
```

### Top Destinations

The dashboard also contains a dedicated section for displaying top travel destinations.

### Charts

Two visualizations are included:

```text
1. Daily Revenue → Line Chart
2. Monthly Sales → Bar Chart
```

---

## 📱 Responsive Design

The dashboard is designed to work across different screen sizes.

The CSS includes responsive breakpoints that modify:

* KPI card layout
* Dashboard sections
* Charts
* Header layout
* Table display

For smaller screens, the dashboard changes from multi-column layouts to single-column layouts.

The leaderboard table also supports horizontal scrolling on smaller screens.

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### 2. Open the Project

```bash
cd Travel-Sales-Dashboard
```

### 3. Run the Application

Since this is a frontend project, you can run it using:

* VS Code Live Server
* Any local HTTP server
* GitHub Pages
* Another static hosting platform

For VS Code:

```text
Right Click → Open with Live Server
```

### 4. Select a Date

Choose a reporting date from the date selector.

### 5. Load Dashboard Data

Click:

```text
Load Data
```

The application will request the data from the Supabase API and update the dashboard.

---

## 🔐 Security Considerations

**Do not commit private Supabase credentials or service-role keys to GitHub.**

For production applications, environment variables should be used instead of hardcoding credentials.

Example:

```text
SUPABASE_URL
SUPABASE_ANON_KEY
```

A `.env` file should be added to `.gitignore`:

```text
.env
```

> If the current Supabase key is intended to be a publishable/anon key, it should still be protected by appropriate Supabase Row Level Security (RLS) policies. Never expose a Supabase `service_role` key in frontend code.

---

## 🎯 Project Objectives

The main objectives of this project are:

* Build an interactive sales analytics dashboard
* Integrate a frontend application with a REST API
* Use Supabase as a cloud database/backend
* Test APIs using Postman
* Process JSON API responses using JavaScript
* Convert raw data into meaningful KPIs
* Visualize sales and revenue trends
* Create a responsive dashboard interface
* Demonstrate practical data analytics concepts

---

## 💡 Learning Outcomes

Through this project, the following concepts were implemented:

* REST API integration
* API testing with Postman
* HTTP POST requests
* JSON data handling
* Supabase database integration
* RPC functions
* JavaScript asynchronous programming
* `fetch()` API
* Dynamic DOM manipulation
* Data visualization
* Chart.js
* Responsive web design
* Dashboard development
* KPI analysis

---

## 🔮 Future Enhancements

Possible future improvements include:

* 🔐 User authentication
* 📊 Additional business KPIs
* 📅 Custom date-range filtering
* 📥 Export reports to Excel/CSV
* 📄 Generate PDF reports
* 🔎 Advanced filtering
* 📈 Additional sales analytics
* 🌍 Dynamic destination analytics from the database
* 📱 Progressive Web App support
* ☁️ Deployment with a production backend
* 🔒 Improved API security and Row Level Security

---

## 👨‍💻 Author

**Garvit Bansal**

B.Tech Computer Science & Engineering – AI & ML

Interested in:

* Data Analytics
* Artificial Intelligence
* Machine Learning
* Data Visualization
* Software Development

---

## ⭐ Project Status

```text
Status: Completed
Backend: Supabase
Database: PostgreSQL / Supabase
API Testing: Postman
Frontend: HTML + CSS + JavaScript
Visualization: Chart.js
```

---

## 📜 License

This project is created for educational, learning, and portfolio purposes.

You are welcome to study and modify the project for learning purposes.
