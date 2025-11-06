import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONT_WEIGHTS } from '../constants/theme';

export default function SportTag({ sport, style }) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.emoji}>{sport.emoji}</Text>
            <Text style={styles.text}>{sport.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.sm,
        paddingVertical: SIZES.xs,
        borderRadius: SIZES.radiusFull,
        alignSelf: 'flex-start',
    },
    emoji: {
        fontSize: SIZES.medium,
        marginRight: SIZES.xs,
    },
    text: {
        fontSize: SIZES.small,
        fontWeight: FONT_WEIGHTS.medium,
        color: COLORS.textPrimary,
    },
});
