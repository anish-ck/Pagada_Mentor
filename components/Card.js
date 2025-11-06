import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

export default function Card({ children, style, onPress, noPadding = false }) {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        if (onPress) {
            Animated.spring(scaleAnim, {
                toValue: 0.97,
                useNativeDriver: true,
                speed: 50,
                bounciness: 4,
            }).start();
        }
    };

    const handlePressOut = () => {
        if (onPress) {
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: true,
                speed: 50,
                bounciness: 4,
            }).start();
        }
    };

    const Container = onPress ? TouchableOpacity : View;

    const cardContent = (
        <Container
            style={[
                styles.card,
                noPadding && { padding: 0 },
                style
            ]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={onPress ? 0.9 : 1}
        >
            {children}
        </Container>
    );

    if (onPress) {
        return (
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                {cardContent}
            </Animated.View>
        );
    }

    return cardContent;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusLarge,
        padding: SIZES.md,
        ...SHADOWS.medium,
    },
});
