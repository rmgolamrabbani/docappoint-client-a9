# 🩺 DocAppoint – Doctor Appointment Manager

🔗 **Live Site:** https://docappoint-client-a9.vercel.app/

DocAppoint is a modern and fully responsive Doctor Appointment Booking Platform where users can browse doctors, view doctor details, book appointments, manage bookings, and update their profiles securely.

The platform is built with modern technologies including Next.js, Express.js, MongoDB, Tailwind CSS, and Better Auth authentication.

---

# ✨ Features

- 🔐 Secure Authentication System with Better Auth
- 👨‍⚕️ Browse and Search Doctors Dynamically
- 📅 Book Appointments with Interactive Modal
- 🧾 Private Dashboard for Managing Bookings
- ✏️ Update & Delete Appointment Functionality
- 🌙 Theme Toggle Support
- 🔎 Search Doctors by Name
- ⚡ Dynamic Loading Spinner
- 🚫 Custom 404 Error Page
- 📱 Fully Responsive for Mobile, Tablet & Desktop
- 🔒 Protected Routes with JWT/Session Authentication
- 🔔 Toast Notifications for Success & Error Messages
- 🎨 Modern UI with Smooth Animations and Clean Design
- 📈 SEO Friendly Dynamic Metadata

---

# 🚀 Technologies Used

## Frontend
- Next.js 16
- React.js
- Tailwind CSS
- Framer Motion
- Swiper.js
- HeroUI
- Lucide React
- React Hot Toast
- js-cookie

## Backend
- Node.js
- Express.js
- MongoDB
- Better Auth
- JWT Authentication

---

# 📂 Project Structure

```bash
DocAppoint/
│
├── client/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── providers/
│   │   └── utils/
│   │
│   └── public/
│
├── server/
│   ├── index.js
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── utils/
│
└── README.md
```

---

# 🏠 Main Pages

## Home Page
- Hero Banner with Swiper Slider
- Top Rated Doctors Section
- Why Choose Us Section
- Testimonials Section

## All Appointments Page
- Dynamic doctor cards
- Search doctors by name
- Protected View Details button

## Doctor Details Page
- Complete doctor information
- Availability schedule
- Book Appointment button

## Dashboard (Private Route)

### My Bookings
- View personal bookings
- Update appointment
- Delete appointment

### My Profile
- View user information
- Update profile instantly

---

# 🔐 Authentication System

## Login Features
- Email & Password Login
- Google Authentication
- Protected Private Routes
- Persistent Login on Reload

## Registration Features
- Name
- Email
- Photo URL
- Password Validation

### Password Rules
- Minimum 6 characters
- At least one uppercase letter
- At least one lowercase letter

---

# 📦 API Endpoints

## Doctors API

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/appointments` | Get all doctors |
| GET | `/appointments/:id` | Get single doctor |

---

## Booking API

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/booking` | Create booking |
| GET | `/booking/:userId` | Get user bookings |
| PATCH | `/booking/:id` | Update booking |
| DELETE | `/booking/:id` | Delete booking |

---

# 🖥️ Client Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# 🌐 Server Setup

```bash
cd server

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔑 Environment Variables

## Client (.env.local)

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## Server (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_uri

BETTER_AUTH_SECRET=your_secret_key

BETTER_AUTH_URL=http://localhost:3000
```

---

# 🎨 UI & Design Highlights

- Modern Glassmorphism Navbar
- Smooth Page Animations
- Gradient Design System
- Equal Height Responsive Cards
- Interactive Booking Modal
- Clean Typography & Balanced Spacing
- Mobile First Responsive Design
- Theme Toggle System

---

# 📋 Demo Booking Data

```json
{
  "userEmail": "user@gmail.com",
  "doctorName": "Dr. Ayesha Rahman",
  "patientName": "Rahim Uddin",
  "gender": "Male",
  "phone": "01712345678",
  "appointmentDate": "2026-05-12",
  "appointmentTime": "10:30 AM"
}
```

---

# 🔥 Future Improvements

- ⭐ Doctor Review System
- 💳 Online Payment Integration
- 📹 Video Consultation
- 📩 Appointment Notifications
- 👨‍⚕️ Doctor Dashboard
- 🛠️ Admin Dashboard
- 📄 Prescription Management

---

# 👨‍💻 Developer Information

## Md. Golam Rabbani

Full Stack MERN Developer

### 🔗 Links

Client GitHub Repository Link : https://github.com/rmgolamrabbani/docappoint-client-a9

Server GitHub Repository Link: https://github.com/rmgolamrabbani/docappoint-server-a9

Live link : https://docappoint-client-a9.vercel.app/
---

# ✅ Assignment Requirements Completed

- Authentication System
- Protected Routes
- JWT/Session Authentication
- MongoDB CRUD Operations
- Dynamic Routing
- Responsive Design
- Search Functionality
- Toast Notifications
- Loading Spinner
- Custom 404 Page
- SEO Metadata
- Update/Delete Features
- Dashboard System
- Better Auth Integration

---

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.
