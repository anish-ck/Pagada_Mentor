import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONT_WEIGHTS } from '../constants/theme';

export default function ChatScreen({ route }) {
    const [message, setMessage] = useState('');

    const chatMessages = [
        { id: 1, text: 'Hi Coach! Thanks for accepting my application.', sender: 'mentee', time: '10:30 AM' },
        { id: 2, text: 'Hello Arjun! Happy to work with you. Let\'s schedule our first session.', sender: 'mentor', time: '10:32 AM' },
        { id: 3, text: 'That would be great! I\'m available this week.', sender: 'mentee', time: '10:35 AM' },
        { id: 4, text: 'Perfect! How about Thursday at 4 PM?', sender: 'mentor', time: '10:37 AM' },
        { id: 5, text: 'Works for me! See you then.', sender: 'mentee', time: '10:38 AM' },
    ];

    const sendMessage = () => {
        if (message.trim()) {
            // Handle send message
            setMessage('');
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={COLORS.textPrimary} />
                </TouchableOpacity>
                <View style={styles.headerInfo}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>AP</Text>
                    </View>
                    <View>
                        <Text style={styles.headerName}>Arjun Patel</Text>
                        <Text style={styles.headerStatus}>Active now</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Ionicons name="videocam" size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>

            {/* Messages */}
            <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
                {chatMessages.map((msg) => (
                    <View
                        key={msg.id}
                        style={[
                            styles.messageWrapper,
                            msg.sender === 'mentor' ? styles.mentorMessageWrapper : styles.menteeMessageWrapper,
                        ]}
                    >
                        <View
                            style={[
                                styles.messageBubble,
                                msg.sender === 'mentor' ? styles.mentorMessage : styles.menteeMessage,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.messageText,
                                    msg.sender === 'mentor' ? styles.mentorMessageText : styles.menteeMessageText,
                                ]}
                            >
                                {msg.text}
                            </Text>
                        </View>
                        <Text style={styles.messageTime}>{msg.time}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Input */}
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.attachButton}>
                    <Ionicons name="attach" size={24} color={COLORS.gray} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    placeholderTextColor={COLORS.gray}
                    value={message}
                    onChangeText={setMessage}
                    multiline
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Ionicons name="send" size={20} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundSecondary,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.md,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    backButton: {
        marginRight: SIZES.md,
    },
    headerInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radiusFull,
        backgroundColor: COLORS.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.sm,
    },
    avatarText: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
    },
    headerName: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    headerStatus: {
        fontSize: SIZES.small,
        color: COLORS.success,
        marginTop: 2,
    },
    messagesContainer: {
        flex: 1,
        padding: SIZES.md,
    },
    messageWrapper: {
        marginBottom: SIZES.md,
    },
    mentorMessageWrapper: {
        alignItems: 'flex-end',
    },
    menteeMessageWrapper: {
        alignItems: 'flex-start',
    },
    messageBubble: {
        maxWidth: '75%',
        paddingHorizontal: SIZES.md,
        paddingVertical: SIZES.sm,
        borderRadius: SIZES.radiusMedium,
        marginBottom: SIZES.xs,
    },
    mentorMessage: {
        backgroundColor: COLORS.primary,
        borderBottomRightRadius: 4,
    },
    menteeMessage: {
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: 4,
    },
    messageText: {
        fontSize: SIZES.medium,
        lineHeight: 20,
    },
    mentorMessageText: {
        color: COLORS.white,
    },
    menteeMessageText: {
        color: COLORS.textPrimary,
    },
    messageTime: {
        fontSize: SIZES.xSmall,
        color: COLORS.textSecondary,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: SIZES.md,
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
    attachButton: {
        padding: SIZES.sm,
    },
    input: {
        flex: 1,
        backgroundColor: COLORS.offWhite,
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: SIZES.md,
        paddingVertical: SIZES.sm,
        marginHorizontal: SIZES.sm,
        maxHeight: 100,
        fontSize: SIZES.medium,
        color: COLORS.textPrimary,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radiusFull,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
