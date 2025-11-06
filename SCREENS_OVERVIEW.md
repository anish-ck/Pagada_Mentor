# Pagada Mentor App - Screen Overview

## 📱 Screen Showcase

This document provides an overview of all screens in the Pagada Mentor app.

---

## 🏠 Dashboard (Home Screen)
**File:** `app/(tabs)/index.js`

### Features:
- **Greeting Header**: Personalized welcome message with notification badge
- **Statistics Grid**: 4 stat cards showing:
  - Total Mentees (with people icon)
  - Hours Mentored (with time icon)
  - Average Rating (with star icon)
  - Monthly Earnings (with wallet icon)
- **Performance Chart**: Weekly line chart showing mentoring hours
- **Recent Mentees**: List of latest mentees with avatars and status badges

### Color Scheme:
- Stat icons have colored backgrounds (primary, info, warning, success)
- Chart uses primary green color
- Active status in green, Pending in yellow

---

## 📅 Sessions Screen
**File:** `app/(tabs)/sessions.js`

### Features:
- **Interactive Calendar**: 
  - Marked dates for sessions
  - Color-coded dots (green for scheduled, yellow for pending)
  - Today highlight in primary color
- **Filter Tabs**: Upcoming, Completed, Cancelled
- **Session Cards**: Each shows:
  - Mentee avatar with initials
  - Name and sport emoji
  - Date and time with icons
  - Session type (video call or in-person)
  - Action buttons (Reschedule, Join)
- **Add Button**: Floating action button for new sessions

### Design Elements:
- Calendar with rounded corners
- Pill-shaped tab buttons
- Dark "Create" button in header

---

## 🎓 Mentorship Screen
**File:** `app/(tabs)/mentorship.js`

### Features:
- **Search Bar**: Full-width search with icon
- **Sport Filters**: Horizontal scrollable tabs (All Sports, Cricket, Football)
- **Two Tabs**: 
  - **Applications**: New mentee requests
  - **My Mentees**: Current active mentees

### Applications View:
- Profile cards with:
  - Avatar, name, sport
  - Rating badge (star with number)
  - Age and experience details
  - Goal description
  - Message and Accept buttons

### My Mentees View:
- Mentee cards with:
  - Avatar and basic info
  - Progress bar with percentage
  - Join date
  - View Progress and Schedule buttons

### Design:
- Green primary actions
- Progress bars in green
- Rating badges in yellow/gold

---

## 👤 Profile Screen
**File:** `app/(tabs)/profile.js`

### Features:
- **Profile Header**:
  - Large avatar with verification checkmark badge
  - Name, rating (star + number), review count
  - Sport badge with emoji
  - Stats row (Years, Mentees, Hourly Rate)

- **Certifications**: Pill-shaped dark badges with shield icons

- **Info Sections**:
  - Specialization (with trophy icon)
  - About Me (with info icon)
  - Availability (with clock icon)

- **Earnings Dashboard**:
  - 2x2 grid showing This Month, Last Month, Total, Pending
  - Withdraw Funds button

- **Portfolio**: Horizontal scrollable placeholder cards

- **Settings Menu**:
  - Settings
  - Payment Methods
  - Help & Support
  - (Each with chevron right arrow)

- **Logout Button**: Red outlined button at bottom

### Color Coding:
- Success green for verified badge
- Primary green for earnings
- Warning yellow for pending amounts
- Different icon colors per section

---

## 💬 Chat Screen
**File:** `app/chat.js`

### Features:
- **Header**:
  - Back button
  - Mentee avatar and name
  - "Active now" status in green
  - Video call button

- **Messages**:
  - Mentor messages: Green bubbles, aligned right
  - Mentee messages: White bubbles, aligned left
  - Timestamps below each message
  - Rounded corners with tail effect

- **Input Section**:
  - Attachment icon button
  - Multi-line text input
  - Green circular send button

### Design:
- Clean chat interface
- WhatsApp-style message bubbles
- Smooth color transitions

---

## 📊 Progress Tracking Screen
**File:** `app/progress.js`

### Features:
- **Mentee List View**:
  - Cards with avatar, name, sport
  - Progress bars showing improvement percentage
  - Tap to view details

- **Individual Mentee View**:
  - Back navigation
  - Profile summary
  - **4 Stat Cards**:
    - Sessions Completed (checkmark, green)
    - Videos Submitted (camera, blue)
    - Average Rating (star, yellow)
    - Progress Percentage (trending up, green)
  
  - **Submissions List**:
    - Video thumbnails with play icon
    - Title and date
    - Status badge (Reviewed/Pending)
    - Feedback section with rating
    - "Review & Provide Feedback" button for pending items

### Design:
- 2x2 stat card grid
- Color-coded icons
- Large progress percentages
- Green for completed, yellow for pending

---

## 💰 Earnings Screen
**File:** `app/earnings.js`

### Features:
- **Four Tabs**: Overview, Transactions, Pricing, Withdraw

### Overview Tab:
- **Balance Card**:
  - Large available balance in green
  - Pending and This Month amounts
  - Withdraw button
- **Stats Cards**: Last Month, Total Earned
- **Recent Transactions**: Latest 3 transactions

### Transactions Tab:
- Full transaction history
- Each shows:
  - Icon (cash for session, arrow for withdrawal)
  - Type and mentee name
  - Date and sport
  - Amount (green for income)
  - Status badge

### Pricing Tab:
- Pricing plan cards:
  - Type (Per Session, Monthly Package)
  - Duration details
  - Large price in green
  - Active badge
  - Edit/Activate button

### Withdraw Tab:
- Large card with:
  - Available balance display
  - Amount input with ₹ symbol
  - Quick amount buttons (₹5K, ₹10K, ₹20K, Full)
  - Bank account display
  - "Proceed to Withdraw" button
- Fee information note

### Design:
- Prominent balance displays
- Transaction icons with colored backgrounds
- Green for earnings, neutral for withdrawals

---

## 🎨 Design System Summary

### Color Palette:
- **Primary**: #00D26A (Bright Green) - CTAs, progress, highlights
- **Dark**: #1A1D26 - Buttons, text, nav items
- **Success**: #10B981 - Positive status, earnings
- **Warning**: #F59E0B - Pending status, ratings
- **Error**: #EF4444 - Errors, delete actions
- **Info**: #3B82F6 - Information, secondary actions

### Typography:
- **Headings**: 24-32px, Bold (700)
- **Subheadings**: 18-20px, SemiBold (600)
- **Body**: 16px, Medium (500)
- **Captions**: 12-14px, Regular (400)

### Spacing:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px (default padding)
- **lg**: 24px
- **xl**: 32px
- **xxl**: 48px

### Border Radius:
- **Small**: 8px
- **Medium**: 12px (cards, buttons)
- **Large**: 16px (cards)
- **X-Large**: 24px (bottom sheets)
- **Full**: 9999px (pills, avatars)

### Icons:
- **Ionicons** from @expo/vector-icons
- Sizes: 16px (small), 20px (medium), 24px (large)
- Colors match context (primary for actions, gray for inactive)

### Components:
- **Cards**: White background, rounded 16px, medium shadow
- **Buttons**: Height 48px, rounded 12px, various colors
- **Badges**: Pill-shaped, colored backgrounds with alpha
- **Progress Bars**: Height 8px, rounded full, green fill

---

## 🚀 Navigation Flow

```
App Launch
    ↓
Dashboard (Tab 1)
    ├─→ Chat (from mentee card)
    ├─→ Progress Tracking (from "View Progress")
    └─→ Earnings (from earnings card)

Sessions (Tab 2)
    ├─→ Calendar interaction
    ├─→ Session details
    └─→ Chat (from session)

Mentorship (Tab 3)
    ├─→ Applications list
    ├─→ My Mentees list
    ├─→ Chat (from Message button)
    └─→ Progress Tracking (from View Progress)

Profile (Tab 4)
    ├─→ Edit profile
    ├─→ Earnings (from earnings section)
    ├─→ Settings
    ├─→ Payment Methods
    └─→ Help & Support
```

---

## 📐 Layout Patterns

### List Item Pattern:
```
[Avatar] [Name         ] [Badge/Icon]
         [Subtitle     ]
         [Progress Bar ]
         [Action Buttons      ]
```

### Stat Card Pattern:
```
    [Icon]
    Value
    Label
```

### Transaction Pattern:
```
[Icon] [Title    ] [Amount]
       [Subtitle ] [Status]
```

### Header Pattern:
```
[Back] [Avatar] [Name     ] [Action]
                [Status   ]
```

---

## 💡 Interactive Elements

- **Tap Targets**: Minimum 44x44px for touch
- **Cards**: Touchable with opacity feedback (0.7)
- **Buttons**: Haptic feedback on press
- **Tabs**: Smooth color transitions
- **Progress Bars**: Animated fills
- **Modals**: Slide-in animations
- **Bottom Sheets**: Swipe to dismiss

---

This comprehensive design system ensures consistency across all screens while maintaining the modern, clean aesthetic inspired by the reference images.

