import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { COLORS, SIZES, FONT_WEIGHTS, SHADOWS } from '../constants/theme';

export default function VerifyOTPScreen({ navigation, route }) {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(30);
    const inputRefs = useRef([]);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(30)).current;

    const phoneNumber = route?.params?.phoneNumber || '+91 98765 43210';

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleOtpChange = (value, index) => {
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const otpCode = otp.join('');
        console.log('Verifying OTP:', otpCode);
        // Handle OTP verification
    };

    const handleResend = () => {
        setTimer(30);
        console.log('Resending OTP');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Header */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
                <Ionicons name="arrow-back" size={24} color={COLORS.textPrimary} />
            </TouchableOpacity>

            <Animated.View
                style={[
                    styles.content,
                    {
                        opacity: fadeAnim,
                        transform: [{ translateY: slideAnim }],
                    },
                ]}
            >
                {/* Icon */}
                <View style={styles.iconContainer}>
                    <View style={styles.iconCircle}>
                        <Ionicons name="lock-closed" size={40} color={COLORS.primary} />
                    </View>
                </View>

                {/* Title */}
                <Text style={styles.title}>Verify Your Phone</Text>
                <Text style={styles.subtitle}>
                    We've sent a verification code to{'\n'}
                    <Text style={styles.phone}>{phoneNumber}</Text>
                </Text>

                {/* OTP Input */}
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            style={[
                                styles.otpInput,
                                digit && styles.otpInputFilled,
                            ]}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            keyboardType="number-pad"
                            maxLength={1}
                            selectTextOnFocus
                        />
                    ))}
                </View>

                {/* Timer and Resend */}
                <View style={styles.resendContainer}>
                    {timer > 0 ? (
                        <Text style={styles.timerText}>
                            Resend code in <Text style={styles.timerCount}>{timer}s</Text>
                        </Text>
                    ) : (
                        <TouchableOpacity onPress={handleResend}>
                            <Text style={styles.resendText}>Resend Code</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Verify Button */}
                <Button
                    title="Verify & Continue"
                    variant="primary"
                    onPress={handleVerify}
                    style={styles.verifyButton}
                    disabled={otp.join('').length !== 6}
                />

                {/* Change Number */}
                <TouchableOpacity
                    style={styles.changeNumberButton}
                    onPress={() => navigation?.goBack()}
                >
                    <Text style={styles.changeNumberText}>Change Phone Number</Text>
                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundSecondary,
    },
    backButton: {
        padding: SIZES.md,
        marginLeft: SIZES.xs,
    },
    content: {
        flex: 1,
        paddingHorizontal: SIZES.lg,
        paddingTop: SIZES.xl,
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: SIZES.xl,
    },
    iconCircle: {
        width: 100,
        height: 100,
        borderRadius: SIZES.radiusFull,
        backgroundColor: COLORS.primary + '20',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.medium,
    },
    title: {
        fontSize: SIZES.xxxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        textAlign: 'center',
        marginBottom: SIZES.sm,
    },
    subtitle: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: SIZES.xxl,
    },
    phone: {
        color: COLORS.textPrimary,
        fontWeight: FONT_WEIGHTS.semiBold,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZES.xl,
        paddingHorizontal: SIZES.sm,
    },
    otpInput: {
        width: 50,
        height: 56,
        borderRadius: SIZES.radiusMedium,
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.border,
        fontSize: SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.bold,
        textAlign: 'center',
        color: COLORS.textPrimary,
        ...SHADOWS.small,
    },
    otpInputFilled: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary + '10',
    },
    resendContainer: {
        alignItems: 'center',
        marginBottom: SIZES.xl,
    },
    timerText: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
    },
    timerCount: {
        color: COLORS.primary,
        fontWeight: FONT_WEIGHTS.semiBold,
    },
    resendText: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight: FONT_WEIGHTS.semiBold,
    },
    verifyButton: {
        marginBottom: SIZES.lg,
    },
    changeNumberButton: {
        alignItems: 'center',
        paddingVertical: SIZES.md,
    },
    changeNumberText: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
        fontWeight: FONT_WEIGHTS.medium,
    },
});
