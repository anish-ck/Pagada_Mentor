# Pagada Mentor App - Setup Guide

## 📱 Quick Start with Expo Go

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo Go app on your mobile device ([iOS](https://apps.apple.com/app/apple-store/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Installation Steps

1. **Navigate to project directory**
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
   - Open Expo Go app on your phone
   - Scan the QR code displayed in the terminal
   - Wait for the app to load

### Alternative: Run on Emulator

**For Android:**
```bash
npx expo start --android
```

**For iOS (Mac only):**
```bash
npx expo start --ios
```

## 🎨 Design Features

The app implements a modern UI inspired by sports platforms with:

### Color Scheme
- **Primary Green**: #00D26A (CTAs, highlights, progress bars)
- **Dark Theme**: #1A1D26 (buttons, navigation)
- **Light Backgrounds**: Clean whites and grays
- **Sport Colors**: Dynamic colors per sport

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: 16px medium weight
- **Labels**: 12-14px secondary colors

### Components
- **Cards**: Rounded corners (16px), subtle shadows
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Badges**: Pill-shaped status indicators
- **Sport Tags**: Emoji-based sport identifiers

## 📂 Project Structure

```
pagada_mentor/
├── app/
│   ├── (tabs)/                 # Tab navigation screens
│   │   ├── _layout.js          # Tab navigator config
│   │   ├── index.js            # Dashboard (Home)
│   │   ├── sessions.js         # Session management
│   │   ├── mentorship.js       # Mentee applications
│   │   └── profile.js          # Mentor profile
│   ├── chat.js                 # Chat interface
│   ├── progress.js             # Progress tracking
│   ├── earnings.js             # Earnings & payments
│   └── _layout.js              # Root layout
├── components/
│   ├── Button.js               # Reusable button
│   ├── Card.js                 # Container component
│   ├── Badge.js                # Status badges
│   ├── SearchBar.js            # Search input
│   ├── TabButton.js            # Tab selector
│   └── SportTag.js             # Sport identifier
├── constants/
│   └── theme.js                # Design system
├── app.json                    # Expo config
├── package.json                # Dependencies
└── README.md                   # Documentation
```

## 🚀 Features Implemented

### 1. Dashboard & Analytics
**File:** `app/(tabs)/index.js`
- ✅ Real-time statistics cards
- ✅ Weekly performance chart
- ✅ Recent mentees list
- ✅ Greeting header with notifications

### 2. Session Management
**File:** `app/(tabs)/sessions.js`
- ✅ Interactive calendar view
- ✅ Session cards with mentee details
- ✅ Multiple tabs (Upcoming, Completed, Cancelled)
- ✅ Sport filtering
- ✅ Reschedule & Join buttons

### 3. Mentorship Management
**File:** `app/(tabs)/mentorship.js`
- ✅ New applications list
- ✅ Current mentees with progress bars
- ✅ Sport-based filtering
- ✅ Accept/Message actions
- ✅ Search functionality

### 4. Mentor Profile
**File:** `app/(tabs)/profile.js`
- ✅ Profile header with verification badge
- ✅ Rating & reviews display
- ✅ Stats (experience, mentees, hourly rate)
- ✅ Certifications badges
- ✅ Specialization & bio
- ✅ Earnings overview
- ✅ Portfolio section
- ✅ Settings menu

### 5. Chat Interface
**File:** `app/chat.js`
- ✅ Message bubbles (mentor vs mentee)
- ✅ Time stamps
- ✅ Message input with send button
- ✅ Attachment option
- ✅ Video call button

### 6. Progress Tracking
**File:** `app/progress.js`
- ✅ Mentee selection list
- ✅ Individual mentee details
- ✅ Stats cards (sessions, videos, rating, progress)
- ✅ Video submissions list
- ✅ Feedback review interface
- ✅ Progress bars

### 7. Earnings & Payments
**File:** `app/earnings.js`
- ✅ Available balance card
- ✅ Transaction history
- ✅ Pricing plans management
- ✅ Withdrawal interface
- ✅ Quick amount buttons
- ✅ Bank account display

## 🎯 Navigation Structure

```
Root
└── (tabs)
    ├── Dashboard (index)
    ├── Sessions
    ├── Mentorship
    └── Profile

Additional Screens (to be linked):
├── Chat
├── Progress Tracking
└── Earnings
```

## 🔧 Customization

### Changing Colors
Edit `constants/theme.js`:
```javascript
export const COLORS = {
  primary: '#00D26A',    // Change primary color
  dark: '#1A1D26',       // Change dark theme
  // ... more colors
};
```

### Adding New Sports
Edit `constants/theme.js`:
```javascript
export const SPORTS = [
  { id: 'cricket', name: 'Cricket', emoji: '🏏', color: '#FF6B35' },
  // Add new sport here
];
```

### Modifying Components
All reusable components are in `components/` directory.
Each component accepts props for customization.

## 📱 Testing Checklist

- [ ] Dashboard loads with all stats
- [ ] Calendar shows marked dates
- [ ] Session cards display correctly
- [ ] Mentorship tabs switch properly
- [ ] Profile displays all sections
- [ ] Sport filters work
- [ ] Progress bars animate
- [ ] Charts render correctly
- [ ] All buttons respond to taps
- [ ] Navigation between tabs works

## 🐛 Troubleshooting

### Issue: Metro bundler won't start
```bash
# Clear cache and restart
npx expo start -c
```

### Issue: QR code not scanning
- Ensure phone and computer are on the same WiFi
- Try tunnel mode: `npx expo start --tunnel`

### Issue: Charts not rendering
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Issue: Navigation errors
- Check Expo Router installation
- Verify all screen files are in correct directories

## 🔜 Next Steps

### Backend Integration
1. Set up API endpoints
2. Implement authentication
3. Connect real-time chat
4. Add payment gateway
5. Enable video calling

### Additional Features
1. Push notifications
2. File upload functionality
3. Video playback
4. Payment processing
5. Analytics integration

## 📞 Support

For issues or questions:
1. Check the README.md
2. Review Expo documentation: https://docs.expo.dev
3. React Native docs: https://reactnative.dev

---

**Ready to Start?**
```bash
cd /home/anish/Desktop/pagada_mentor
npm install
npx expo start
```

Then scan the QR code with Expo Go! 🚀

