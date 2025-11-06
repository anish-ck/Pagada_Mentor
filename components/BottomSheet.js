import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONT_WEIGHTS, SHADOWS } from '../constants/theme';

export default function BottomSheet({
    visible,
    onClose,
    title,
    children,
    height = '50%'
}) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPress={onClose}
            >
                <TouchableOpacity
                    style={[styles.container, { height }]}
                    activeOpacity={1}
                >
                    <View style={styles.header}>
                        <View style={styles.handle} />
                    </View>
                    {title && (
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <TouchableOpacity onPress={onClose}>
                                <Ionicons name="close" size={24} color={COLORS.textPrimary} />
                            </TouchableOpacity>
                        </View>
                    )}
                    <View style={styles.content}>
                        {children}
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: COLORS.overlay,
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: SIZES.radiusXLarge,
        borderTopRightRadius: SIZES.radiusXLarge,
        ...SHADOWS.large,
    },
    header: {
        alignItems: 'center',
        paddingTop: SIZES.sm,
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: COLORS.lightGray,
        borderRadius: 2,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.md,
        paddingTop: SIZES.sm,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
    },
    content: {
        flex: 1,
        padding: SIZES.md,
    },
});
