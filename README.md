📁 weather-frontend/README.md
md
Copy
Edit
# 🌤️ Weather App Frontend

This is the frontend for the decoupled weather application built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **RippleUI**. It communicates with a Laravel backend API to display weather data retrieved from the OpenWeatherMap API.

## 🔧 Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [RippleUI](https://ui.ripple-ui.com/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## 📸 UI Preview

> [Add a screenshot or GIF here]

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/weather-frontend.git
cd weather-frontend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Tailwind & RippleUI
Already configured in tailwind.config.js.

4. Run Development Server
bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to use the app.

🌐 Environment
Make sure your Laravel API is running on http://localhost:8000 or update the fetch URL accordingly in SearchWeather.tsx.

📂 Components
SearchWeather.tsx: Input for city and display section for weather data

index.tsx: Main page rendering weather search

📫 Contact
For inquiries or suggestions, feel free to reach out:
Shadrack Mutua — [your email] — [your LinkedIn or GitHub]

yaml
Copy
Edit

---

## 📁 `weather-backend/README.md`

```md
# ☁️ Weather App Backend (Laravel API)

This is the backend API built using **Laravel 11** that serves weather data from the **OpenWeatherMap API**. It is designed as a RESTful API to be consumed by the Next.js frontend.

## ⚙️ Features

- API endpoint to fetch weather data for any city
- Uses Laravel's HTTP client to call OpenWeatherMap
- Returns simplified JSON weather response

## 🔧 Technologies Used

- Laravel 11 (API Only)
- Guzzle HTTP Client
- OpenWeatherMap API

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/weather-backend.git
cd weather-backend
2. Install Dependencies
bash
Copy
Edit
composer install
3. Set Up Environment
Copy .env.example to .env and add your OpenWeatherMap API key.

bash
Copy
Edit
cp .env.example .env
php artisan key:generate
Edit .env:

ini
Copy
Edit
OPENWEATHER_API_KEY=your_api_key_here
4. Run the API Server
bash
Copy
Edit
php artisan serve
The API will be available at: http://localhost:8000/api/weather?city=Nairobi

📬 API Usage
Endpoint: GET /api/weather?city={city}

Sample Request:

bash
Copy
Edit
curl http://localhost:8000/api/weather?city=Nairobi
Sample Response:

json
Copy
Edit
{
  "city": "Nairobi",
  "description": "clear sky",
  "temperature": 27.4,
  "humidity": 56,
  "wind_speed": 3.6,
  "icon": "01d"
}
🧪 Testing
To test the API locally, use Postman or CURL with various city names.
