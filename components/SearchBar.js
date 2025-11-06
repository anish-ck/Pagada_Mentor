import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

export default function SearchBar({ placeholder, value, onChangeText, style }) {
    return (
        <View style={[styles.container, style]}>
            <Ionicons name="search" size={20} color={COLORS.gray} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.offWhite,
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: SIZES.md,
        height: 48,
    },
    icon: {
        marginRight: SIZES.sm,
    },
    input: {
        flex: 1,
        fontSize: SIZES.medium,
        color: COLORS.textPrimary,
    },
});
