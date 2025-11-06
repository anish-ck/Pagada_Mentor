import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/Card';
import Button from '../../components/Button';
import TabButton from '../../components/TabButton';
import SearchBar from '../../components/SearchBar';
import { COLORS, SIZES, FONT_WEIGHTS, SPORTS } from '../../constants/theme';

export default function MentorshipScreen() {
    const [activeTab, setActiveTab] = useState('applications');
    const [activeSport, setActiveSport] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const applications = [
        {
            id: 1,
            name: 'Rohit Kumar',
            age: 24,
            sport: '🏏 Cricket',
            experience: '3 years',
            goal: 'Improve batting technique and strategy',
            avatar: 'RK',
            rating: 4.2,
        },
        {
            id: 2,
            name: 'Sneha Reddy',
            age: 21,
            sport: '⚽ Football',
            experience: '2 years',
            goal: 'Professional football career guidance',
            avatar: 'SR',
            rating: 4.5,
        },
        {
            id: 3,
            name: 'Karthik Menon',
            age: 26,
            sport: '🏏 Cricket',
            experience: '5 years',
            goal: 'Advanced bowling techniques',
            avatar: 'KM',
            rating: 4.0,
        },
    ];

    const currentMentees = [
        {
            id: 1,
            name: 'Arjun Patel',
            sport: '🏏 Cricket',
            joinedDate: 'Oct 15, 2024',
            progress: 85,
            avatar: 'AP',
        },
        {
            id: 2,
            name: 'Priya Sharma',
            sport: '⚽ Football',
            joinedDate: 'Nov 2, 2024',
            progress: 60,
            avatar: 'PS',
        },
    ];

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Mentorship</Text>
                </View>

                {/* Search Bar */}
                <SearchBar
                    placeholder="Search mentees or applications..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={styles.searchBar}
                />

                {/* Sport Filters */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.sportFilters}
                    contentContainerStyle={styles.sportFiltersContent}
                >
                    <TabButton
                        title="All Sports"
                        active={activeSport === 'all'}
                        onPress={() => setActiveSport('all')}
                    />
                    {SPORTS.slice(0, 2).map((sport) => (
                        <TabButton
                            key={sport.id}
                            title={`${sport.emoji} ${sport.name}`}
                            active={activeSport === sport.id}
                            onPress={() => setActiveSport(sport.id)}
                        />
                    ))}
                </ScrollView>

                {/* Tabs */}
                <View style={styles.tabs}>
                    <TabButton
                        title="Applications"
                        active={activeTab === 'applications'}
                        onPress={() => setActiveTab('applications')}
                    />
                    <TabButton
                        title="My Mentees"
                        active={activeTab === 'mentees'}
                        onPress={() => setActiveTab('mentees')}
                    />
                </View>

                {/* Content */}
                {activeTab === 'applications' ? (
                    <View style={styles.content}>
                        <Text style={styles.sectionTitle}>New Applications ({applications.length})</Text>

                        {applications.map((application) => (
                            <Card key={application.id} style={styles.applicationCard}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.avatar}>
                                        <Text style={styles.avatarText}>{application.avatar}</Text>
                                    </View>
                                    <View style={styles.applicantInfo}>
                                        <Text style={styles.applicantName}>{application.name}</Text>
                                        <Text style={styles.sport}>{application.sport}</Text>
                                    </View>
                                    <View style={styles.ratingBadge}>
                                        <Ionicons name="star" size={14} color={COLORS.warning} />
                                        <Text style={styles.ratingText}>{application.rating}</Text>
                                    </View>
                                </View>

                                <View style={styles.detailsGrid}>
                                    <View style={styles.detailItem}>
                                        <Text style={styles.detailLabel}>Age</Text>
                                        <Text style={styles.detailValue}>{application.age} years</Text>
                                    </View>
                                    <View style={styles.detailItem}>
                                        <Text style={styles.detailLabel}>Experience</Text>
                                        <Text style={styles.detailValue}>{application.experience}</Text>
                                    </View>
                                </View>

                                <View style={styles.goalSection}>
                                    <Text style={styles.goalLabel}>Goal</Text>
                                    <Text style={styles.goalText}>{application.goal}</Text>
                                </View>

                                <View style={styles.cardActions}>
                                    <Button
                                        title="Message"
                                        variant="outline"
                                        size="small"
                                        style={styles.actionButton}
                                        icon={<Ionicons name="chatbubble-outline" size={16} color={COLORS.primary} />}
                                        onPress={() => { }}
                                    />
                                    <Button
                                        title="Accept"
                                        variant="primary"
                                        size="small"
                                        style={styles.actionButton}
                                        icon={<Ionicons name="checkmark" size={16} color={COLORS.white} />}
                                        onPress={() => { }}
                                    />
                                </View>
                            </Card>
                        ))}
                    </View>
                ) : (
                    <View style={styles.content}>
                        <Text style={styles.sectionTitle}>Current Mentees ({currentMentees.length})</Text>

                        {currentMentees.map((mentee) => (
                            <Card key={mentee.id} style={styles.menteeCard}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.avatar}>
                                        <Text style={styles.avatarText}>{mentee.avatar}</Text>
                                    </View>
                                    <View style={styles.applicantInfo}>
                                        <Text style={styles.applicantName}>{mentee.name}</Text>
                                        <Text style={styles.sport}>{mentee.sport}</Text>
                                    </View>
                                    <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
                                </View>

                                <View style={styles.progressSection}>
                                    <View style={styles.progressHeader}>
                                        <Text style={styles.progressLabel}>Progress</Text>
                                        <Text style={styles.progressPercentage}>{mentee.progress}%</Text>
                                    </View>
                                    <View style={styles.progressBar}>
                                        <View style={[styles.progressFill, { width: `${mentee.progress}%` }]} />
                                    </View>
                                </View>

                                <Text style={styles.joinedDate}>Joined {mentee.joinedDate}</Text>

                                <View style={styles.cardActions}>
                                    <Button
                                        title="View Progress"
                                        variant="outline"
                                        size="small"
                                        style={[styles.actionButton, { marginRight: SIZES.sm }]}
                                        onPress={() => { }}
                                    />
                                    <Button
                                        title="Schedule"
                                        variant="secondary"
                                        size="small"
                                        style={styles.actionButton}
                                        onPress={() => { }}
                                    />
                                </View>
                            </Card>
                        ))}
                    </View>
                )}

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
        padding: SIZES.md,
        paddingBottom: SIZES.sm,
    },
    title: {
        fontSize: SIZES.xxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
    },
    searchBar: {
        marginHorizontal: SIZES.md,
        marginBottom: SIZES.md,
    },
    sportFilters: {
        marginBottom: SIZES.md,
    },
    sportFiltersContent: {
        paddingHorizontal: SIZES.md,
    },
    tabs: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.md,
        marginBottom: SIZES.md,
    },
    content: {
        padding: SIZES.md,
        paddingTop: 0,
    },
    sectionTitle: {
        fontSize: SIZES.large,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.md,
    },
    applicationCard: {
        marginBottom: SIZES.md,
    },
    menteeCard: {
        marginBottom: SIZES.md,
    },
    cardHeader: {
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
    applicantInfo: {
        flex: 1,
        marginLeft: SIZES.md,
    },
    applicantName: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    sport: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginTop: SIZES.xs,
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.warning + '20',
        paddingHorizontal: SIZES.sm,
        paddingVertical: SIZES.xs,
        borderRadius: SIZES.radiusFull,
    },
    ratingText: {
        fontSize: SIZES.small,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.warning,
        marginLeft: SIZES.xs,
    },
    detailsGrid: {
        flexDirection: 'row',
        marginBottom: SIZES.md,
    },
    detailItem: {
        flex: 1,
    },
    detailLabel: {
        fontSize: SIZES.xSmall,
        color: COLORS.textSecondary,
        marginBottom: SIZES.xs,
    },
    detailValue: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    goalSection: {
        marginBottom: SIZES.md,
    },
    goalLabel: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginBottom: SIZES.xs,
    },
    goalText: {
        fontSize: SIZES.medium,
        color: COLORS.textPrimary,
        lineHeight: 22,
    },
    cardActions: {
        flexDirection: 'row',
    },
    actionButton: {
        flex: 1,
    },
    progressSection: {
        marginBottom: SIZES.md,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZES.sm,
    },
    progressLabel: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
    },
    progressPercentage: {
        fontSize: SIZES.small,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.primary,
    },
    progressBar: {
        height: 8,
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.radiusFull,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radiusFull,
    },
    joinedDate: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginBottom: SIZES.md,
    },
});
