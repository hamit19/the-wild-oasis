# 🏨 The Wild Oasis - Hotel Management System

A modern, full-featured hotel and cabin management application built with React. This comprehensive platform enables hotel staff to efficiently manage bookings, cabins, guest check-ins/check-outs, and view detailed analytics with an intuitive admin dashboard.

**Live Demo:** [https://the-wild-oasis-hamid.netlify.app/login](https://the-wild-oasis-hamid.netlify.app)


---

## 📸 Screenshots

> Add screenshots here to showcase your application

### Dashboard View
```
[Insert Dashboard Screenshot]
```

### Bookings Management
```
[Insert Bookings Screenshot]
```

### Cabin Management
```
[Insert Cabins Screenshot]
```

### Check-in/Check-out
```
[Insert Check-in Screenshot]
```

---

---

## ✨ Features

### 🔐 **Authentication & User Management**
- Secure user registration and login with email verification
- Password update functionality
- User profile management with avatar upload
- Role-based access control (Admin/User)
- Protected routes and session management

### 📊 **Dashboard & Analytics**
- Real-time statistics dashboard showing key metrics
- Sales and revenue charts with date filtering
- Guest duration analysis
- Recent bookings and stays overview
- Date range filtering for historical data analysis

### 📅 **Booking Management**
- View all bookings with detailed information
- Filter and sort bookings by status (upcoming, checked-in, checked-out)
- Detailed booking pages with guest information
- Booking deletion functionality
- Real-time booking status updates

### 🏠 **Cabin Management**
- Create, edit, and delete cabin listings
- Upload cabin images
- Manage cabin details (capacity, price, description)
- View all cabins with thumbnail previews
- Bulk cabin operations

### ✅ **Check-In/Check-Out System**
- Today's activity view showing daily check-ins and check-outs
- Quick check-in and check-out operations
- Breakfast recording functionality
- Guest arrival confirmation
- Today's activity tracking

### ⚙️ **Settings & Configuration**
- Minimum/maximum nights per booking
- Breakfast price configuration
- Hotel configuration management
- Editable settings for dynamic pricing

### 🌙 **User Experience**
- Light/Dark mode toggle with system preference detection
- Responsive design for all devices
- Real-time notifications and error handling
- Smooth animations and transitions
- Error fallback boundary for crash prevention
- Loading states and optimistic updates

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **Vite 4.4** - Lightning-fast build tool
- **React Router v6** - Client-side routing
- **TanStack Query (React Query)** - Server state management
- **React Hook Form** - Form state management
- **Styled Components** - CSS-in-JS styling
- **Recharts** - Data visualization
- **React Icons** - Icon library

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Supabase Auth** - Authentication and authorization

### Development Tools
- **ESLint** - Code quality and linting
- **React Hot Toast** - Toast notifications
- **React Error Boundary** - Error handling
- **Date-fns** - Date manipulation

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/the-wild-oasis.git
   cd the-wild-oasis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm preview
```

---

## 📁 Project Structure

```
the-wild-oasis/
├── src/
│   ├── pages/               # Page components (Dashboard, Bookings, etc.)
│   ├── features/            # Feature modules
│   │   ├── authentication/  # Login, signup, user management
│   │   ├── bookings/        # Booking management
│   │   ├── cabins/          # Cabin management
│   │   ├── check-in-out/    # Check-in/out functionality
│   │   ├── dashboard/       # Analytics and charts
│   │   └── settings/        # App settings
│   ├── ui/                  # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── context/             # Context API (Dark mode)
│   ├── services/            # API calls and backend integration
│   ├── styles/              # Global styles
│   ├── data/                # Mock data and utilities
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── package.json             # Project dependencies
└── vite.config.js          # Vite configuration
```

---

## 🎯 Key Functionalities

### Authentication Flow
- Users create an account with email and password
- Email verification for security
- JWT-based session management
- Protected routes for authenticated users only
- Auto-logout and session timeout

### Booking Workflow
1. Admin creates or receives booking requests
2. View bookings with comprehensive details
3. Check-in guests on arrival
4. Record breakfast preferences
5. Check-out guests and process payments
6. View booking history and analytics

### Data Management
- Real-time data synchronization with Supabase
- Optimistic updates for better UX
- Error handling and retry mechanisms
- Cache management with React Query
- Data persistence and recovery

---

## 📊 Performance Features

- **Optimized Queries** - React Query with caching strategies
- **Code Splitting** - Lazy loading of components
- **Image Optimization** - Efficient image loading
- **Dark Mode** - Reduced eye strain with system preference detection
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop

---

## 🔐 Security Features

- **Authentication** - Supabase authentication with secure tokens
- **Protected Routes** - Role-based access control
- **Input Validation** - Form validation with React Hook Form
- **Error Boundaries** - Graceful error handling
- **Environment Variables** - Sensitive data protection

---

## 🚀 Deployment

This project is deployed on **Netlify**:

1. Connect your GitHub repository to Netlify
2. Set up environment variables in Netlify dashboard
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

---

## 💡 Learning Outcomes

This project demonstrates expertise in:
- ✅ Modern React patterns and hooks
- ✅ State management with Context API and React Query
- ✅ Form handling and validation
- ✅ API integration and backend connectivity
- ✅ Responsive and accessible UI design
- ✅ Dark mode implementation
- ✅ Authentication and authorization
- ✅ Real-time data updates
- ✅ Error handling and loading states
- ✅ Performance optimization

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 📧 Contact

For questions or inquiries about this project, feel free to reach out!

[Portfolio](https://yourportfolio.com) | [LinkedIn](https://www.linkedin.com/in/hamid-hassani-a431b0244)

---

**Built with ❤️ by Hamid Hassani**

**Happy Coding! 🎉**
