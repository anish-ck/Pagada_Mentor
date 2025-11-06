import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import Button from '../components/Button';
import { COLORS, SIZES, FONT_WEIGHTS } from '../constants/theme';

// Animated Progress Bar Component
function AnimatedProgressBar({ progress }) {
    const widthAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(widthAnim, {
            toValue: progress,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    const width = widthAnim.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.progressBar}>
            <Animated.View style={[styles.progressFill, { width }]} />
        </View>
    );
}

export default function ProgressTrackingScreen() {
    const [selectedMentee, setSelectedMentee] = useState(null);

    const mentees = [
        {
            id: 1,
            name: 'Arjun Patel',
            avatar: 'AP',
            sport: 'Cricket',
            sportIcon: 'baseball',
            progress: 85,
            submissions: [
                {
                    id: 1,
                    title: 'Batting Practice - Cover Drive',
                    date: 'Dec 3, 2024',
                    type: 'video',
                    status: 'reviewed',
                    feedback: 'Great improvement in footwork. Keep practicing the follow-through.',
                    rating: 4.5,
                },
                {
                    id: 2,
                    title: 'Fielding Drills',
                    date: 'Nov 28, 2024',
                    type: 'video',
                    status: 'pending',
                    feedback: null,
                    rating: null,
                },
            ],
            stats: {
                sessionsCompleted: 12,
                videosSubmitted: 8,
                averageRating: 4.3,
                improvementRate: 85,
            },
        },
        {
            id: 2,
            name: 'Priya Sharma',
            avatar: 'PS',
            sport: 'Football',
            sportIcon: 'football',
            progress: 60,
            submissions: [],
            stats: {
                sessionsCompleted: 6,
                videosSubmitted: 4,
                averageRating: 4.0,
                improvementRate: 60,
            },
        },
    ];

    const renderMenteeList = () => (
        <View style={styles.menteeList}>
            {mentees.map((mentee) => (
                <Card key={mentee.id} onPress={() => setSelectedMentee(mentee)} style={styles.menteeCard}>
                    <View style={styles.menteeHeader}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>{mentee.avatar}</Text>
                        </View>
                        <View style={styles.menteeInfo}>
                            <Text style={styles.menteeName}>{mentee.name}</Text>
                            <Text style={styles.sport}>{mentee.sport}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
                    </View>
                    <View style={styles.progressSection}>
                        <View style={styles.progressHeader}>
                            <Text style={styles.progressLabel}>Overall Progress</Text>
                            <Text style={styles.progressPercentage}>{mentee.progress}%</Text>
                        </View>
                        <AnimatedProgressBar progress={mentee.progress} />
                    </View>
                </Card>
            ))}
        </View>
    );

    const renderMenteeDetails = () => (
        <ScrollView style={styles.detailsContainer} showsVerticalScrollIndicator={false}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => setSelectedMentee(null)}>
                <Ionicons name="arrow-back" size={24} color={COLORS.textPrimary} />
                <Text style={styles.backText}>Back to Mentees</Text>
            </TouchableOpacity>

            {/* Mentee Header */}
            <Card style={styles.detailHeader}>
                <View style={styles.menteeHeader}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>{selectedMentee.avatar}</Text>
                    </View>
                    <View style={styles.menteeInfo}>
                        <Text style={styles.menteeName}>{selectedMentee.name}</Text>
                        <View style={styles.sportRow}>
                            <Ionicons name={selectedMentee.sportIcon} size={14} color={COLORS.textSecondary} />
                            <Text style={styles.sport}>{selectedMentee.sport}</Text>
                        </View>
                    </View>
                </View>
            </Card>

            {/* Stats Grid */}
            <View style={styles.statsGrid}>
                <Card style={styles.statCard}>
                    <Ionicons name="checkmark-circle" size={24} color={COLORS.success} />
                    <Text style={styles.statValue}>{selectedMentee.stats.sessionsCompleted}</Text>
                    <Text style={styles.statLabel}>Sessions</Text>
                </Card>
                <Card style={styles.statCard}>
                    <Ionicons name="videocam" size={24} color={COLORS.info} />
                    <Text style={styles.statValue}>{selectedMentee.stats.videosSubmitted}</Text>
                    <Text style={styles.statLabel}>Videos</Text>
                </Card>
                <Card style={styles.statCard}>
                    <Ionicons name="star" size={24} color={COLORS.warning} />
                    <Text style={styles.statValue}>{selectedMentee.stats.averageRating}</Text>
                    <Text style={styles.statLabel}>Avg Rating</Text>
                </Card>
                <Card style={styles.statCard}>
                    <Ionicons name="trending-up" size={24} color={COLORS.primary} />
                    <Text style={styles.statValue}>{selectedMentee.stats.improvementRate}%</Text>
                    <Text style={styles.statLabel}>Progress</Text>
                </Card>
            </View>

            {/* Submissions */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent Submissions</Text>
                {selectedMentee.submissions.map((submission) => (
                    <Card key={submission.id} style={styles.submissionCard}>
                        <View style={styles.submissionHeader}>
                            <View style={styles.videoIcon}>
                                <Ionicons name="play-circle" size={32} color={COLORS.primary} />
                            </View>
                            <View style={styles.submissionInfo}>
                                <Text style={styles.submissionTitle}>{submission.title}</Text>
                                <Text style={styles.submissionDate}>{submission.date}</Text>
                            </View>
                            <View
                                style={[
                                    styles.statusBadge,
                                    {
                                        backgroundColor:
                                            submission.status === 'reviewed'
                                                ? COLORS.success + '20'
                                                : COLORS.warning + '20',
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.statusText,
                                        {
                                            color: submission.status === 'reviewed' ? COLORS.success : COLORS.warning,
                                        },
                                    ]}
                                >
                                    {submission.status === 'reviewed' ? 'Reviewed' : 'Pending'}
                                </Text>
                            </View>
                        </View>

                        {submission.feedback && (
                            <>
                                <View style={styles.divider} />
                                <View style={styles.feedbackSection}>
                                    <Text style={styles.feedbackLabel}>Your Feedback</Text>
                                    <Text style={styles.feedbackText}>{submission.feedback}</Text>
                                    <View style={styles.ratingRow}>
                                        <Ionicons name="star" size={16} color={COLORS.warning} />
                                        <Text style={styles.ratingText}>{submission.rating}/5</Text>
                                    </View>
                                </View>
                            </>
                        )}

                        {!submission.feedback && (
                            <>
                                <View style={styles.divider} />
                                <Button
                                    title="Review & Provide Feedback"
                                    variant="primary"
                                    size="small"
                                    onPress={() => { }}
                                />
                            </>
                        )}
                    </Card>
                ))}
            </View>
        </ScrollView>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.title}>Progress Tracking</Text>
            </View>
            {selectedMentee ? renderMenteeDetails() : renderMenteeList()}
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
    },
    title: {
        fontSize: SIZES.xxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
    },
    menteeList: {
        padding: SIZES.md,
        paddingTop: 0,
    },
    menteeCard: {
        marginBottom: SIZES.md,
    },
    menteeHeader: {
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
    menteeInfo: {
        flex: 1,
        marginLeft: SIZES.md,
    },
    menteeName: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    sportRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.xs,
    },
    sport: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginLeft: SIZES.xs,
    },
    progressSection: {
        marginTop: SIZES.sm,
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
    detailsContainer: {
        flex: 1,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.md,
    },
    backText: {
        fontSize: SIZES.medium,
        color: COLORS.textPrimary,
        marginLeft: SIZES.sm,
    },
    detailHeader: {
        margin: SIZES.md,
        marginTop: 0,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: SIZES.sm,
    },
    statCard: {
        width: '47%',
        margin: '1.5%',
        alignItems: 'center',
        padding: SIZES.md,
    },
    statValue: {
        fontSize: SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginTop: SIZES.sm,
        marginBottom: SIZES.xs,
    },
    statLabel: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
    },
    section: {
        padding: SIZES.md,
    },
    sectionTitle: {
        fontSize: SIZES.large,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.md,
    },
    submissionCard: {
        marginBottom: SIZES.md,
    },
    submissionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    videoIcon: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary + '10',
        borderRadius: SIZES.radiusMedium,
    },
    submissionInfo: {
        flex: 1,
        marginLeft: SIZES.md,
    },
    submissionTitle: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    submissionDate: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginTop: SIZES.xs,
    },
    statusBadge: {
        paddingHorizontal: SIZES.sm,
        paddingVertical: SIZES.xs,
        borderRadius: SIZES.radiusFull,
    },
    statusText: {
        fontSize: SIZES.xSmall,
        fontWeight: FONT_WEIGHTS.medium,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: SIZES.md,
    },
    feedbackSection: {
        marginTop: SIZES.sm,
    },
    feedbackLabel: {
        fontSize: SIZES.small,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.xs,
    },
    feedbackText: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
        lineHeight: 22,
        marginBottom: SIZES.sm,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
        marginLeft: SIZES.xs,
    },
});
