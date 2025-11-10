# University Management System

A modern, responsive web application designed to streamline academic operations. Built using React and Tailwind CSS, it offers a clean, intuitive, and role-based user experience for administrators, teachers, and students. The application features distinct dashboards and functionalities tailored to each user role for seamless management of courses, users, and academic progress.

## ✨ Key Features

- **Role-Based Access Control:** Distinct interfaces and permissions for Administrators, Teachers, and Students.
- **Authentication:** Secure login and registration flow with account approval system.
- **Responsive Design:** Fully responsive layout that works on desktops, tablets, and mobile devices.
- **Dark Mode:** Theme support for user preference.

### 👨‍💼 Admin Features
- **Dashboard:** At-a-glance analytics of total students, teachers, courses, and overall pass rates.
- **User Management:** View, add, edit, and delete student and teacher profiles.
- **Course & Department Management:** Full CRUD functionality for university courses and departments.
- **Registration Approval:** A dedicated panel to approve or reject new user registrations, ensuring controlled access.

### 👩‍🏫 Teacher Features
- **Dashboard:** A summary of assigned courses and key statistics.
- **Course Management:** View a list of assigned courses.
- **Student Roster:** See a detailed list of students enrolled in each course.
- **(Future) Grade & Attendance Management:** Functionality to mark attendance and update grades for students.

### 🎓 Student Features
- **Dashboard:** Personalized welcome screen with an overview of enrolled courses, and overall attendance.
- **Course Details:** Access detailed information for each enrolled course, including grades (assignments, midterms, finals) and attendance percentage.
- **Course Materials:** View and download course-related materials like syllabi, lecture notes, and videos.

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://reactjs.org/) (with TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **State Management:** React Context API
- **Charts:** [Recharts](https://recharts.org/)
- **Backend Simulation:** A mock API is included to simulate backend services and data persistence.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jamilmalik1000/University-Management-System_React.git
    cd university-management-system
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:3000`.

---

##  credentials

Use the following credentials to explore the different roles:

-   **Admin:**
    -   **Email:** `admin@university.edu`
    -   **Password:** `admin`

-   **Teacher:**
    -   **Email:** `fatima.a@university.edu`
    -   **Password:** `password`

-   **Student:**
    -   **Email:** `ali.k@university.edu`
    -   **Password:** `password`

You can also register a new account. New registrations will appear in the Admin's "Registrations" tab for approval.

---

## 📂 Project Structure

```
/
├── public/
└── src/
    ├── assets/
    ├── components/
    │   ├── common/         # Reusable components (Card, Button, etc.)
    │   ├── icons/          # SVG icons
    │   └── layout/         # Layout components (Header, Sidebar, etc.)
    ├── contexts/           # React Context for global state (AuthContext)
    ├── hooks/              # Custom hooks (useAuth)
    ├── pages/              # Page components for each route
    │   ├── admin/
    │   ├── auth/
    │   ├── student/
    │   └── teacher/
    ├── routes/             # Routing configuration (AppRoutes)
    ├── services/           # API layer (mockApi)
    ├── types/              # TypeScript type definitions
    ├── App.tsx
    └── index.tsx
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
