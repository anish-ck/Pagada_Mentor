import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, Animated } from 'react-native';
import { COLORS, SIZES, FONT_WEIGHTS, SHADOWS } from '../constants/theme';

export default function Button({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    icon = null,
    style = {},
    textStyle = {}
}) {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const getVariantStyle = () => {
        switch (variant) {
            case 'primary':
                return styles.primary;
            case 'secondary':
                return styles.secondary;
            case 'outline':
                return styles.outline;
            case 'ghost':
                return styles.ghost;
            default:
                return styles.primary;
        }
    };

    const getSizeStyle = () => {
        switch (size) {
            case 'small':
                return styles.small;
            case 'large':
                return styles.large;
            default:
                return styles.medium;
        }
    };

    const getTextColor = () => {
        if (disabled) return COLORS.gray;
        switch (variant) {
            case 'primary':
                return COLORS.white;
            case 'secondary':
                return COLORS.white;
            case 'outline':
                return COLORS.primary;
            case 'ghost':
                return COLORS.textPrimary;
            default:
                return COLORS.white;
        }
    };

    return (
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
                style={[
                    styles.button,
                    getVariantStyle(),
                    getSizeStyle(),
                    disabled && styles.disabled,
                    style
                ]}
                onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                disabled={disabled || loading}
                activeOpacity={0.9}
            >
                {loading ? (
                    <ActivityIndicator color={getTextColor()} />
                ) : (
                    <>
                        {icon}
                        <Text style={[
                            styles.text,
                            { color: getTextColor() },
                            size === 'small' && styles.smallText,
                            size === 'large' && styles.largeText,
                            textStyle
                        ]}>
                            {title}
                        </Text>
                    </>
                )}
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: SIZES.lg,
    },
    primary: {
        backgroundColor: COLORS.primary,
        ...SHADOWS.medium,
    },
    secondary: {
        backgroundColor: COLORS.dark,
        ...SHADOWS.medium,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: COLORS.primary,
    },
    ghost: {
        backgroundColor: 'transparent',
    },
    small: {
        height: 36,
        paddingHorizontal: SIZES.md,
    },
    medium: {
        height: SIZES.buttonHeight,
    },
    large: {
        height: 56,
        paddingHorizontal: SIZES.xl,
    },
    disabled: {
        backgroundColor: COLORS.lightGray,
        opacity: 0.6,
    },
    text: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        marginLeft: SIZES.xs,
    },
    smallText: {
        fontSize: SIZES.small,
    },
    largeText: {
        fontSize: SIZES.large,
    },
});
