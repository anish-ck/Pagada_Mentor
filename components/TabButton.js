import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { COLORS, SIZES, FONT_WEIGHTS } from '../constants/theme';

export default function TabButton({ title, active, onPress, style }) {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const bgAnim = useRef(new Animated.Value(active ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(bgAnim, {
            toValue: active ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [active]);

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
            speed: 50,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
        }).start();
    };

    const backgroundColor = bgAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', COLORS.dark],
    });

    return (
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
                onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.9}
            >
                <Animated.View
                    style={[
                        styles.tab,
                        { backgroundColor },
                        style
                    ]}
                >
                    <Text style={[
                        styles.tabText,
                        active && styles.activeTabText
                    ]}>
                        {title}
                    </Text>
                </Animated.View>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    tab: {
        paddingHorizontal: SIZES.lg,
        paddingVertical: SIZES.sm,
        borderRadius: SIZES.radiusMedium,
        marginRight: SIZES.sm,
    },
    tabText: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.medium,
        color: COLORS.textSecondary,
    },
    activeTabText: {
        color: COLORS.white,
    },
});
