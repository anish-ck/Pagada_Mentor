# 🛠️ Troubleshooting Guide

Common issues and solutions for the Pagada Mentor app.

---

## 🚀 Installation Issues

### Error: "npm: command not found"
**Solution:**
1. Install Node.js from https://nodejs.org/
2. Restart your terminal
3. Verify: `node --version` and `npm --version`

### Error: "Cannot find module 'expo'"
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Error: Network timeout during npm install
**Solution:**
```bash
# Use a different registry
npm install --registry=https://registry.npmjs.org/
```

---

## 📱 Expo Go Issues

### QR Code Won't Scan
**Solutions:**
1. Ensure phone and computer are on **same WiFi network**
2. Try tunnel mode:
   ```bash
   npx expo start --tunnel
   ```
3. Manually enter URL shown in terminal into Expo Go app

### "Something went wrong" in Expo Go
**Solutions:**
1. Clear Expo cache:
   ```bash
   npx expo start -c
   ```
2. Reinstall Expo Go app on phone
3. Check if using latest Expo Go version

### Metro Bundler Won't Start
**Solution:**
```bash
# Kill any existing Metro processes
killall node
npx expo start
```

---

## 🎨 Rendering Issues

### Charts Not Displaying
**Solution:**
```bash
# Reinstall chart dependencies
npm install react-native-chart-kit react-native-svg
npx expo start -c
```

### Icons Not Showing
**Solution:**
- Icons load automatically with Expo
- Ensure internet connection on first load
- Clear cache: `npx expo start -c`

### Calendar Not Interactive
**Solution:**
```bash
# Reinstall calendar library
npm install react-native-calendars
npx expo start -c
```

---

## 🔧 Development Issues

### Changes Not Reflecting
**Solutions:**
1. Enable "Fast Refresh" in Expo Go app
2. Shake phone → "Reload" in development menu
3. Restart Metro: `Ctrl+C` then `npx expo start`

### TypeScript Errors (if using TS)
**Solution:**
- This project uses JavaScript (.js files)
- If adding TypeScript, install: `npm install -D typescript @types/react @types/react-native`

### Import Errors
**Solution:**
```javascript
// Use correct import paths
import Button from '../components/Button'; // ✅ Correct
import Button from 'components/Button';    // ❌ Wrong
```

---

## 📱 Device-Specific Issues

### Android: "Failed to connect to development server"
**Solutions:**
1. Ensure USB debugging is enabled
2. Try tunnel mode: `npx expo start --tunnel`
3. Check firewall isn't blocking port 8081

### iOS: Metro Bundler connection issues
**Solutions:**
1. Ensure both devices on same WiFi
2. Disable VPN if active
3. Try: `npx expo start --lan`

### Low Performance on Device
**Solutions:**
1. Close other apps on phone
2. Disable "Remote JS Debugging"
3. Use development build (not Expo Go) for production testing

---

## 🎯 Navigation Issues

### Tab Navigation Not Working
**Solution:**
- Verify file structure:
  ```
  app/
  ├── (tabs)/
  │   ├── _layout.js
  │   ├── index.js
  │   └── ...
  └── _layout.js
  ```

### Screen Not Found Error
**Solution:**
1. Check file names match exactly
2. Ensure files are in correct directory
3. Restart Metro bundler

---

## 🎨 Styling Issues

### Colors Not Matching Theme
**Solution:**
- Always import from theme:
  ```javascript
  import { COLORS } from '../constants/theme';
  ```

### Spacing Inconsistent
**Solution:**
- Use SIZES constants:
  ```javascript
  import { SIZES } from '../constants/theme';
  padding: SIZES.md // Not: padding: 16
  ```

---

## 💾 Data & State Issues

### State Not Updating
**Solutions:**
1. Check useState hook usage
2. Ensure setState is called correctly
3. Use React DevTools for debugging

### Props Not Passing
**Solution:**
```javascript
// Correct prop passing
<Button title="Click" onPress={() => {}} />

// Not
<Button title="Click" onPress={handlePress()} /> // ❌ Immediately calls function
```

---

## 🔍 Debugging Tips

### Enable Debug Mode
1. Shake phone in Expo Go
2. Select "Debug Remote JS"
3. Open Chrome DevTools at http://localhost:19000/debugger-ui

### Check Console Logs
```javascript
console.log('Debug info:', data);
console.warn('Warning message');
console.error('Error message');
```

### React DevTools
```bash
# Install globally
npm install -g react-devtools

# Run
react-devtools
```

---

## 📦 Package Issues

### Dependency Conflicts
**Solution:**
```bash
# Force reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Expo SDK Version Mismatch
**Solution:**
```bash
# Upgrade Expo
npx expo install --fix
```

---

## 🌐 Network Issues

### API Calls Failing (when backend ready)
**Solutions:**
1. Check API URL is correct
2. Ensure proper CORS headers on backend
3. Use HTTPS for production APIs

### Image Loading Issues
**Solution:**
```javascript
// Use proper image source
<Image source={{ uri: 'https://...' }} />
<Image source={require('../assets/image.png')} />
```

---

## 🚨 Common Error Messages

### "Invariant Violation: Element type is invalid"
**Cause:** Incorrect import/export
**Solution:**
```javascript
// Use
export default function Component() {}
import Component from './Component';

// Not
export function Component() {}
import Component from './Component'; // ❌ Missing curly braces
```

### "TypeError: undefined is not an object"
**Cause:** Accessing property of undefined
**Solution:**
```javascript
// Use optional chaining
const name = user?.name;

// Or check first
const name = user && user.name;
```

### "Module not found"
**Solutions:**
1. Check import path is correct
2. Ensure file exists
3. Restart Metro: `npx expo start -c`

---

## 🔄 Reset Everything

If all else fails:

```bash
# 1. Clear all caches
npx expo start -c

# 2. If that doesn't work, nuclear option:
rm -rf node_modules package-lock.json
npm install
npx expo start -c

# 3. Also clear Expo cache:
rm -rf ~/.expo
```

---

## 📞 Getting Help

### Resources:
- **Expo Docs**: https://docs.expo.dev
- **React Native Docs**: https://reactnative.dev
- **Expo Forums**: https://forums.expo.dev
- **Stack Overflow**: Tag with `expo` and `react-native`

### Check Files:
- Review `SETUP_GUIDE.md` for setup steps
- Check `COMPONENT_GUIDE.md` for component usage
- See `SCREENS_OVERVIEW.md` for screen details

---

## ✅ Pre-flight Checklist

Before reporting issues, verify:

- [ ] Node.js and npm are installed
- [ ] Dependencies installed (`npm install` completed)
- [ ] Latest Expo Go app on phone
- [ ] Phone and computer on same WiFi
- [ ] Metro bundler running (`npx expo start`)
- [ ] No firewall blocking ports
- [ ] Correct import paths in code
- [ ] Files in correct directories

---

## 🎯 Quick Fixes

```bash
# Fix 90% of issues:
rm -rf node_modules package-lock.json
npm install
npx expo start -c

# Then scan QR code again
```

---

**Still stuck?** Check the error message in terminal carefully - it usually tells you exactly what's wrong!

