# Pagada Mentor App

A modern React Native mobile application for sports mentors built with Expo Go. This app enables mentors to manage their mentees, schedule sessions, track progress, and handle payments.

## 🎨 Design System

The app follows a clean, modern design inspired by sports tournament platforms with:
- **Primary Color**: Bright Green (#00D26A)
- **Dark Theme**: Dark backgrounds for buttons and CTAs (#1A1D26)
- **Light Backgrounds**: Off-white and light gray for cards and surfaces
- **Sport Icons**: Emoji-based sport identifiers (🏏, ⚽, etc.)

## 🚀 Features

### 1. Dashboard & Analytics
- Real-time statistics (total mentees, hours mentored, ratings, earnings)
- Weekly performance charts
- Recent mentees overview
- Quick access to important metrics

### 2. Session Management
- Interactive calendar view with session markers
- Upcoming, completed, and cancelled sessions
- Video call and in-person session support
- Session rescheduling and cancellation
- Real-time session reminders

### 3. Mentorship Management
- New mentee applications with detailed profiles
- Current mentees list with progress tracking
- Sport-based filtering
- Application approval/rejection system
- In-app messaging

### 4. Mentor Profile
- Comprehensive profile with verification badge
- Certifications and specializations
- Portfolio uploads (videos, certificates)
- Earnings dashboard
- Availability settings
- Payment management

## 📦 Installation

1. **Clone the repository**
   ```bash
   cd /home/anish/Desktop/pagada_mentor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Install the Expo Go app on your iOS or Android device
   - Scan the QR code from the terminal
   - The app will load on your device

## 🛠️ Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **Expo Router** - File-based navigation
- **React Native Calendars** - Calendar component
- **React Native Chart Kit** - Data visualization
- **Ionicons** - Icon library

## 📁 Project Structure

```
pagada_mentor/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.js          # Tab navigation
│   │   ├── index.js             # Dashboard screen
│   │   ├── sessions.js          # Sessions management
│   │   ├── mentorship.js        # Mentorship screen
│   │   └── profile.js           # Profile screen
│   └── _layout.js               # Root layout
├── components/
│   ├── Button.js                # Reusable button component
│   ├── Card.js                  # Card container
│   ├── Badge.js                 # Badge/tag component
│   ├── SearchBar.js             # Search input
│   ├── TabButton.js             # Tab selector
│   └── SportTag.js              # Sport identifier
├── constants/
│   └── theme.js                 # Design tokens
├── app.json                     # Expo configuration
└── package.json                 # Dependencies

```

## 🎯 Key Components

### Button
Versatile button component with multiple variants:
- Primary (green background)
- Secondary (dark background)
- Outline (bordered)
- Ghost (transparent)

### Card
Container component with shadow and rounded corners for content grouping.

### Badge
Small label component for status indicators and tags.

### SearchBar
Search input with icon for filtering and searching.

## 🎨 Theme Configuration

All design tokens are centralized in `constants/theme.js`:

```javascript
- COLORS: Color palette
- SIZES: Spacing, font sizes, border radius
- FONTS: Font families
- SHADOWS: Shadow styles
- SPORTS: Sport definitions with emojis
```

## 📱 Screens

1. **Dashboard** - Analytics overview with stats and charts
2. **Sessions** - Calendar-based session management
3. **Mentorship** - Applications and current mentees
4. **Profile** - Mentor profile and settings

## 🔜 Future Enhancements

- Real-time chat integration
- Video call functionality (WebRTC)
- AI-powered video analysis
- Payment gateway integration
- Push notifications
- Multi-language support

## 📄 License

This project is part of the Pagada platform.

## 👥 Contributing

This is a frontend-only implementation. Backend integration will be added in future updates.

---

Built with ❤️ using React Native and Expo

