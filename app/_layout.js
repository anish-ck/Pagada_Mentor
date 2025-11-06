import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName="login"
        >
            <Stack.Screen name="login" />
            <Stack.Screen name="verify-otp" />
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}
