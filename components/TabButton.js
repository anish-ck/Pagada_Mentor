import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONT_WEIGHTS } from '../constants/theme';

export default function TabButton({ title, active, onPress, style }) {
    return (
        <TouchableOpacity
            style={[
                styles.tab,
                active && styles.activeTab,
                style
            ]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[
                styles.tabText,
                active && styles.activeTabText
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tab: {
        paddingHorizontal: SIZES.lg,
        paddingVertical: SIZES.sm,
        borderRadius: SIZES.radiusMedium,
        marginRight: SIZES.sm,
    },
    activeTab: {
        backgroundColor: COLORS.dark,
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
