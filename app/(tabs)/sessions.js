import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/Card';
import Button from '../../components/Button';
import TabButton from '../../components/TabButton';
import { COLORS, SIZES, FONT_WEIGHTS } from '../../constants/theme';

export default function SessionsScreen() {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [selectedDate, setSelectedDate] = useState('');

    const upcomingSessions = [
        {
            id: 1,
            mentee: 'Arjun Patel',
            sport: '🏏 Cricket',
            time: '10:00 AM - 11:00 AM',
            date: 'Today',
            type: 'Video Call',
            avatar: 'AP',
        },
        {
            id: 2,
            mentee: 'Priya Sharma',
            sport: '⚽ Football',
            time: '2:00 PM - 3:00 PM',
            date: 'Tomorrow',
            type: 'In-Person',
            avatar: 'PS',
        },
        {
            id: 3,
            mentee: 'Vikram Singh',
            sport: '🏏 Cricket',
            time: '4:00 PM - 5:00 PM',
            date: 'Dec 8, 2024',
            type: 'Video Call',
            avatar: 'VS',
        },
    ];

    const markedDates = {
        '2024-12-05': { marked: true, dotColor: COLORS.primary },
        '2024-12-06': { marked: true, dotColor: COLORS.primary },
        '2024-12-08': { marked: true, dotColor: COLORS.warning },
        '2024-12-10': { marked: true, dotColor: COLORS.primary },
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Sessions</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Ionicons name="add" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                </View>

                {/* Calendar */}
                <Card style={styles.calendarCard}>
                    <Calendar
                        markedDates={markedDates}
                        onDayPress={(day) => setSelectedDate(day.dateString)}
                        theme={{
                            backgroundColor: 'transparent',
                            calendarBackground: 'transparent',
                            textSectionTitleColor: COLORS.textSecondary,
                            selectedDayBackgroundColor: COLORS.primary,
                            selectedDayTextColor: COLORS.white,
                            todayTextColor: COLORS.primary,
                            dayTextColor: COLORS.textPrimary,
                            textDisabledColor: COLORS.lightGray,
                            dotColor: COLORS.primary,
                            selectedDotColor: COLORS.white,
                            arrowColor: COLORS.primary,
                            monthTextColor: COLORS.textPrimary,
                            textMonthFontWeight: FONT_WEIGHTS.bold,
                            textDayFontSize: SIZES.medium,
                            textMonthFontSize: SIZES.large,
                        }}
                    />
                </Card>

                {/* Tabs */}
                <View style={styles.tabs}>
                    <TabButton
                        title="Upcoming"
                        active={activeTab === 'upcoming'}
                        onPress={() => setActiveTab('upcoming')}
                    />
                    <TabButton
                        title="Completed"
                        active={activeTab === 'completed'}
                        onPress={() => setActiveTab('completed')}
                    />
                    <TabButton
                        title="Cancelled"
                        active={activeTab === 'cancelled'}
                        onPress={() => setActiveTab('cancelled')}
                    />
                </View>

                {/* Sessions List */}
                <View style={styles.sessionsList}>
                    {upcomingSessions.map((session) => (
                        <Card key={session.id} style={styles.sessionCard}>
                            <View style={styles.sessionHeader}>
                                <View style={styles.avatar}>
                                    <Text style={styles.avatarText}>{session.avatar}</Text>
                                </View>
                                <View style={styles.sessionInfo}>
                                    <Text style={styles.menteeName}>{session.mentee}</Text>
                                    <Text style={styles.sport}>{session.sport}</Text>
                                </View>
                                <View style={styles.typebadge}>
                                    <Ionicons
                                        name={session.type === 'Video Call' ? 'videocam' : 'location'}
                                        size={16}
                                        color={COLORS.primary}
                                    />
                                </View>
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.sessionDetails}>
                                <View style={styles.detailRow}>
                                    <Ionicons name="calendar" size={18} color={COLORS.textSecondary} />
                                    <Text style={styles.detailText}>{session.date}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Ionicons name="time" size={18} color={COLORS.textSecondary} />
                                    <Text style={styles.detailText}>{session.time}</Text>
                                </View>
                            </View>

                            <View style={styles.sessionActions}>
                                <Button
                                    title="Reschedule"
                                    variant="outline"
                                    size="small"
                                    style={styles.actionButton}
                                    onPress={() => { }}
                                />
                                <Button
                                    title="Join"
                                    variant="primary"
                                    size="small"
                                    style={styles.actionButton}
                                    onPress={() => { }}
                                />
                            </View>
                        </Card>
                    ))}
                </View>

                <View style={{ height: 20 }} />
            </ScrollView>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.md,
    },
    title: {
        fontSize: SIZES.xxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
    },
    addButton: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radiusMedium,
        backgroundColor: COLORS.dark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarCard: {
        margin: SIZES.md,
        marginTop: 0,
    },
    tabs: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.md,
        marginVertical: SIZES.md,
    },
    sessionsList: {
        padding: SIZES.md,
        paddingTop: 0,
    },
    sessionCard: {
        marginBottom: SIZES.md,
    },
    sessionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.md,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: SIZES.radiusFull,
        backgroundColor: COLORS.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
    },
    sessionInfo: {
        flex: 1,
        marginLeft: SIZES.md,
    },
    menteeName: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    sport: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginTop: SIZES.xs,
    },
    typeBadge: {
        width: 36,
        height: 36,
        borderRadius: SIZES.radiusMedium,
        backgroundColor: COLORS.primary + '20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: SIZES.md,
    },
    sessionDetails: {
        marginBottom: SIZES.md,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.sm,
    },
    detailText: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
        marginLeft: SIZES.sm,
    },
    sessionActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        flex: 1,
        marginHorizontal: SIZES.xs,
    },
});
