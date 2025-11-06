import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { COLORS, SIZES, FONT_WEIGHTS, SHADOWS } from '../constants/theme';

export default function LoginScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [isFocused, setIsFocused] = useState(false);
    
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 600,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const handlePhoneLogin = () => {
        // Handle phone number login
        console.log('Login with phone:', countryCode + phoneNumber);
    };

    const handleGoogleLogin = () => {
        // Handle Google login
        console.log('Login with Google');
    };

    const formatPhoneNumber = (text) => {
        const cleaned = text.replace(/\D/g, '');
        setPhoneNumber(cleaned);
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {/* Header */}
                    <Animated.View
                        style={[
                            styles.header,
                            {
                                opacity: fadeAnim,
                                transform: [{ translateY: slideAnim }],
                            },
                        ]}
                    >
                        <View style={styles.logoContainer}>
                            <View style={styles.logo}>
                                <Ionicons name="fitness" size={48} color={COLORS.primary} />
                            </View>
                        </View>
                        <Text style={styles.title}>Welcome to Pagada</Text>
                        <Text style={styles.subtitle}>
                            Connect with expert mentors and achieve your sports goals
                        </Text>
                    </Animated.View>

                    {/* Phone Number Input */}
                    <Animated.View
                        style={[
                            styles.formContainer,
                            {
                                opacity: fadeAnim,
                                transform: [{ translateY: slideAnim }],
                            },
                        ]}
                    >
                        <Text style={styles.label}>Phone Number</Text>
                        <View
                            style={[
                                styles.phoneInputContainer,
                                isFocused && styles.phoneInputFocused,
                            ]}
                        >
                            <TouchableOpacity style={styles.countryCodeButton}>
                                <Text style={styles.countryCode}>{countryCode}</Text>
                                <Ionicons name="chevron-down" size={16} color={COLORS.textSecondary} />
                            </TouchableOpacity>
                            <View style={styles.divider} />
                            <TextInput
                                style={styles.phoneInput}
                                placeholder="Enter your phone number"
                                placeholderTextColor={COLORS.gray}
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                onChangeText={formatPhoneNumber}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                maxLength={10}
                            />
                        </View>

                        <Button
                            title="Continue with Phone"
                            variant="primary"
                            onPress={handlePhoneLogin}
                            style={styles.loginButton}
                            icon={<Ionicons name="call" size={18} color={COLORS.white} />}
                        />

                        {/* Divider */}
                        <View style={styles.dividerContainer}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>OR</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        {/* Google Sign In */}
                        <TouchableOpacity
                            style={styles.googleButton}
                            onPress={handleGoogleLogin}
                            activeOpacity={0.8}
                        >
                            <View style={styles.googleIconContainer}>
                                <Ionicons name="logo-google" size={20} color={COLORS.error} />
                            </View>
                            <Text style={styles.googleButtonText}>Continue with Google</Text>
                        </TouchableOpacity>

                        {/* Additional Options */}
                        <View style={styles.optionsContainer}>
                            <TouchableOpacity style={styles.socialButton}>
                                <Ionicons name="logo-apple" size={24} color={COLORS.textPrimary} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialButton}>
                                <Ionicons name="logo-facebook" size={24} color="#1877F2" />
                            </TouchableOpacity>
                        </View>
                    </Animated.View>

                    {/* Footer */}
                    <Animated.View
                        style={[
                            styles.footer,
                            {
                                opacity: fadeAnim,
                            },
                        ]}
                    >
                        <Text style={styles.footerText}>
                            By continuing, you agree to our{' '}
                            <Text style={styles.link}>Terms of Service</Text> and{' '}
                            <Text style={styles.link}>Privacy Policy</Text>
                        </Text>
                    </Animated.View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundSecondary,
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: SIZES.lg,
    },
    header: {
        alignItems: 'center',
        marginBottom: SIZES.xxl,
    },
    logoContainer: {
        marginBottom: SIZES.lg,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: SIZES.radiusFull,
        backgroundColor: COLORS.primary + '20',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.large,
    },
    title: {
        fontSize: SIZES.xxxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.sm,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: SIZES.lg,
    },
    formContainer: {
        marginBottom: SIZES.xl,
    },
    label: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.sm,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusMedium,
        borderWidth: 2,
        borderColor: COLORS.border,
        marginBottom: SIZES.lg,
        ...SHADOWS.small,
    },
    phoneInputFocused: {
        borderColor: COLORS.primary,
        ...SHADOWS.medium,
    },
    countryCodeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.md,
        paddingVertical: SIZES.md,
    },
    countryCode: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
        marginRight: SIZES.xs,
    },
    divider: {
        width: 1,
        height: 30,
        backgroundColor: COLORS.border,
    },
    phoneInput: {
        flex: 1,
        fontSize: SIZES.medium,
        color: COLORS.textPrimary,
        paddingHorizontal: SIZES.md,
        paddingVertical: SIZES.md,
    },
    loginButton: {
        marginBottom: SIZES.lg,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SIZES.lg,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.border,
    },
    dividerText: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        fontWeight: FONT_WEIGHTS.semiBold,
        marginHorizontal: SIZES.md,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusMedium,
        paddingVertical: SIZES.md,
        borderWidth: 1.5,
        borderColor: COLORS.border,
        marginBottom: SIZES.lg,
        ...SHADOWS.small,
    },
    googleIconContainer: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.sm,
    },
    googleButtonText: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: SIZES.md,
    },
    socialButton: {
        width: 56,
        height: 56,
        borderRadius: SIZES.radiusMedium,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.small,
    },
    footer: {
        marginTop: 'auto',
        paddingTop: SIZES.xl,
    },
    footerText: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 20,
    },
    link: {
        color: COLORS.primary,
        fontWeight: FONT_WEIGHTS.semiBold,
    },
});
