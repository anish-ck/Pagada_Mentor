# Component Usage Guide

This guide shows how to use all the reusable components in the Pagada Mentor app.

## Importing Components

```javascript
// Import individual components
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';

// Or import all at once
import { Button, Card, Badge, SearchBar, TabButton, SportTag } from '../components';
```

## Button Component

Versatile button with multiple variants and sizes.

```javascript
import Button from '../components/Button';

// Primary button (default)
<Button 
  title="Join Tournament" 
  onPress={() => {}} 
/>

// With icon
<Button 
  title="Message"
  variant="outline"
  icon={<Ionicons name="chatbubble" size={16} color={COLORS.primary} />}
  onPress={() => {}}
/>

// Different variants
<Button title="Primary" variant="primary" onPress={() => {}} />
<Button title="Secondary" variant="secondary" onPress={() => {}} />
<Button title="Outline" variant="outline" onPress={() => {}} />
<Button title="Ghost" variant="ghost" onPress={() => {}} />

// Different sizes
<Button title="Small" size="small" onPress={() => {}} />
<Button title="Medium" size="medium" onPress={() => {}} />
<Button title="Large" size="large" onPress={() => {}} />

// States
<Button title="Disabled" disabled onPress={() => {}} />
<Button title="Loading" loading onPress={() => {}} />
```

**Props:**
- `title` (string, required): Button text
- `onPress` (function, required): Press handler
- `variant` (string): 'primary' | 'secondary' | 'outline' | 'ghost'
- `size` (string): 'small' | 'medium' | 'large'
- `disabled` (boolean): Disable button
- `loading` (boolean): Show loading spinner
- `icon` (component): Icon to display
- `style` (object): Custom styles
- `textStyle` (object): Custom text styles

---

## Card Component

Container with shadow and rounded corners.

```javascript
import Card from '../components/Card';

// Basic card
<Card>
  <Text>Card content</Text>
</Card>

// Touchable card
<Card onPress={() => console.log('Card pressed')}>
  <Text>Tap me</Text>
</Card>

// No padding
<Card noPadding>
  <Image source={...} style={{ width: '100%' }} />
</Card>

// Custom style
<Card style={{ backgroundColor: COLORS.primary }}>
  <Text style={{ color: COLORS.white }}>Custom card</Text>
</Card>
```

**Props:**
- `children` (component, required): Card content
- `onPress` (function): Makes card touchable
- `noPadding` (boolean): Remove default padding
- `style` (object): Custom styles

---

## Badge Component

Small label for status indicators.

```javascript
import Badge from '../components/Badge';

// Basic badge
<Badge text="Active" />

// With icon
<Badge 
  text="Verified" 
  icon={<Ionicons name="checkmark" size={12} color={COLORS.white} />}
  variant="dark"
/>

// Different variants
<Badge text="Success" variant="success" />
<Badge text="Warning" variant="warning" />
<Badge text="Error" variant="error" />
<Badge text="Info" variant="info" />
<Badge text="Dark" variant="dark" />

// Sizes
<Badge text="Small" size="small" />
<Badge text="Medium" size="medium" />
```

**Props:**
- `text` (string, required): Badge text
- `variant` (string): 'default' | 'success' | 'warning' | 'error' | 'info' | 'dark'
- `size` (string): 'small' | 'medium'
- `icon` (component): Icon to display
- `style` (object): Custom styles

---

## SearchBar Component

Search input with icon.

```javascript
import SearchBar from '../components/SearchBar';

const [searchQuery, setSearchQuery] = useState('');

<SearchBar
  placeholder="Search tournaments or locations..."
  value={searchQuery}
  onChangeText={setSearchQuery}
/>

// With custom style
<SearchBar
  placeholder="Search..."
  value={searchQuery}
  onChangeText={setSearchQuery}
  style={{ marginHorizontal: 20 }}
/>
```

**Props:**
- `placeholder` (string): Placeholder text
- `value` (string): Input value
- `onChangeText` (function): Text change handler
- `style` (object): Custom styles

---

## TabButton Component

Tab selector button.

```javascript
import TabButton from '../components/TabButton';

const [activeTab, setActiveTab] = useState('cricket');

<View style={{ flexDirection: 'row' }}>
  <TabButton
    title="All Sports"
    active={activeTab === 'all'}
    onPress={() => setActiveTab('all')}
  />
  <TabButton
    title="Cricket"
    active={activeTab === 'cricket'}
    onPress={() => setActiveTab('cricket')}
  />
  <TabButton
    title="Football"
    active={activeTab === 'football'}
    onPress={() => setActiveTab('football')}
  />
</View>
```

**Props:**
- `title` (string, required): Tab text
- `active` (boolean): Active state
- `onPress` (function): Press handler
- `style` (object): Custom styles

---

## SportTag Component

Sport identifier with emoji.

```javascript
import SportTag from '../components/SportTag';
import { SPORTS } from '../constants/theme';

<SportTag sport={SPORTS[0]} />
// Displays: 🏏 Cricket

<SportTag sport={SPORTS[1]} />
// Displays: ⚽ Football
```

**Props:**
- `sport` (object, required): Sport object from SPORTS array
- `style` (object): Custom styles

---

## BottomSheet Component

Modal sheet that slides from bottom.

```javascript
import BottomSheet from '../components/BottomSheet';

const [visible, setVisible] = useState(false);

<BottomSheet
  visible={visible}
  onClose={() => setVisible(false)}
  title="Select Sport"
  height="50%"
>
  <Text>Sheet content</Text>
</BottomSheet>
```

**Props:**
- `visible` (boolean, required): Sheet visibility
- `onClose` (function, required): Close handler
- `title` (string): Sheet title
- `children` (component): Sheet content
- `height` (string): Sheet height ('50%', '80%', etc.)

---

## EmptyState Component

Display when no data available.

```javascript
import EmptyState from '../components/EmptyState';
import { Ionicons } from '@expo/vector-icons';

<EmptyState
  icon={<Ionicons name="people" size={64} color={COLORS.gray} />}
  title="No teams yet"
  description="Create a team or join existing one"
  action={
    <Button title="Create Your First Team" onPress={() => {}} />
  }
/>
```

**Props:**
- `icon` (component): Icon to display
- `title` (string, required): Main text
- `description` (string): Subtitle text
- `action` (component): Action button or component

---

## LoadingSpinner Component

Simple loading indicator.

```javascript
import LoadingSpinner from '../components/LoadingSpinner';

<LoadingSpinner />

// Custom size and color
<LoadingSpinner size="small" color={COLORS.primary} />
```

**Props:**
- `size` (string): 'small' | 'large'
- `color` (string): Spinner color

---

## Theme Constants

All design tokens are available in `constants/theme.js`:

```javascript
import { COLORS, SIZES, FONTS, FONT_WEIGHTS, SHADOWS, SPORTS } from '../constants/theme';

// Colors
COLORS.primary        // #00D26A (bright green)
COLORS.dark           // #1A1D26 (dark)
COLORS.white          // #FFFFFF
COLORS.textPrimary    // #1F2937
COLORS.success        // #10B981
// ... and more

// Sizes
SIZES.xs              // 4
SIZES.sm              // 8
SIZES.md              // 16
SIZES.lg              // 24
SIZES.xl              // 32
// ... and more

// Font weights
FONT_WEIGHTS.regular  // '400'
FONT_WEIGHTS.medium   // '500'
FONT_WEIGHTS.semiBold // '600'
FONT_WEIGHTS.bold     // '700'

// Shadows
SHADOWS.small         // Small shadow
SHADOWS.medium        // Medium shadow
SHADOWS.large         // Large shadow

// Sports
SPORTS[0]             // { id: 'cricket', name: 'Cricket', emoji: '🏏', color: '#FF6B35' }
SPORTS[1]             // { id: 'football', name: 'Football', emoji: '⚽', color: '#4A5568' }
// ... and more
```

---

## Common Patterns

### Card with Header and Actions

```javascript
<Card>
  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Arjun Patel</Text>
      <Text style={{ fontSize: 14, color: COLORS.textSecondary }}>🏏 Cricket</Text>
    </View>
    <Badge text="Active" variant="success" />
  </View>
  
  <View style={{ flexDirection: 'row', gap: 8 }}>
    <Button title="Message" variant="outline" size="small" style={{ flex: 1 }} />
    <Button title="Schedule" variant="primary" size="small" style={{ flex: 1 }} />
  </View>
</Card>
```

### List with Empty State

```javascript
{mentees.length > 0 ? (
  mentees.map(mentee => (
    <Card key={mentee.id}>
      <Text>{mentee.name}</Text>
    </Card>
  ))
) : (
  <EmptyState
    title="No mentees yet"
    description="Start accepting applications"
  />
)}
```

### Tabs with Content

```javascript
const [activeTab, setActiveTab] = useState('upcoming');

<View style={{ flexDirection: 'row', marginBottom: 16 }}>
  <TabButton
    title="Upcoming"
    active={activeTab === 'upcoming'}
    onPress={() => setActiveTab('upcoming')}
  />
  <TabButton
    title="Completed"
    active={activeTab === 'completed'}
    onPress={() => setActiveTab('completed')}
  />
</View>

{activeTab === 'upcoming' ? (
  <Text>Upcoming content</Text>
) : (
  <Text>Completed content</Text>
)}
```

---

## Style Guidelines

### Spacing
Use `SIZES` constants for consistent spacing:
```javascript
marginBottom: SIZES.md  // 16
padding: SIZES.lg       // 24
gap: SIZES.sm           // 8
```

### Typography
```javascript
{
  fontSize: SIZES.large,
  fontWeight: FONT_WEIGHTS.bold,
  color: COLORS.textPrimary,
}
```

### Shadows
```javascript
{
  ...SHADOWS.medium,  // Spread the shadow object
}
```

### Border Radius
```javascript
{
  borderRadius: SIZES.radiusMedium,  // 12
  borderRadius: SIZES.radiusFull,    // 9999 (pill shape)
}
```

---

Happy coding! 🚀
