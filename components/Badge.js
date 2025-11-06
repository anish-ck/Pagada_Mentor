import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONT_WEIGHTS } from '../constants/theme';

export default function Badge({
    text,
    icon,
    variant = 'default',
    size = 'medium',
    style
}) {
    const getVariantStyle = () => {
        switch (variant) {
            case 'success':
                return { backgroundColor: COLORS.success + '20', color: COLORS.success };
            case 'warning':
                return { backgroundColor: COLORS.warning + '20', color: COLORS.warning };
            case 'error':
                return { backgroundColor: COLORS.error + '20', color: COLORS.error };
            case 'info':
                return { backgroundColor: COLORS.info + '20', color: COLORS.info };
            case 'dark':
                return { backgroundColor: COLORS.dark, color: COLORS.white };
            default:
                return { backgroundColor: COLORS.lightGray, color: COLORS.textSecondary };
        }
    };

    const variantStyle = getVariantStyle();

    return (
        <View style={[
            styles.badge,
            { backgroundColor: variantStyle.backgroundColor },
            size === 'small' && styles.small,
            style
        ]}>
            {icon}
            <Text style={[
                styles.text,
                { color: variantStyle.color },
                size === 'small' && styles.smallText,
                icon && { marginLeft: SIZES.xs }
            ]}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.sm,
        paddingVertical: SIZES.xs,
        borderRadius: SIZES.radiusFull,
        alignSelf: 'flex-start',
    },
    small: {
        paddingHorizontal: SIZES.xs,
        paddingVertical: 2,
    },
    text: {
        fontSize: SIZES.small,
        fontWeight: FONT_WEIGHTS.medium,
    },
    smallText: {
        fontSize: SIZES.xSmall,
    },
});
