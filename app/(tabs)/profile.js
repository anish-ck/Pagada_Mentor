import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import { COLORS, SIZES, FONT_WEIGHTS, SPORTS } from '../../constants/theme';

export default function ProfileScreen() {
    const [isEditing, setIsEditing] = useState(false);

    const mentorProfile = {
        name: 'Rajesh Kumar',
        avatar: 'RK',
        sport: SPORTS[0], // Cricket
        rating: 4.9,
        totalReviews: 156,
        experience: 15,
        mentees: 45,
        certifications: ['Former State Player', 'Certified Coach', 'NCA Level 2'],
        specialization: 'Batting & Strategy',
        bio: 'Former state-level cricket player with 15 years of coaching experience. Specialized in batting techniques and game strategy.',
        hourlyRate: 1500,
        availability: 'Mon-Sat, 9 AM - 6 PM',
        verified: true,
    };

    const earnings = {
        thisMonth: 45000,
        lastMonth: 38000,
        total: 234000,
        pending: 12000,
    };

    const portfolio = [
        { id: 1, type: 'video', thumbnail: null },
        { id: 2, type: 'certificate', thumbnail: null },
        { id: 3, type: 'video', thumbnail: null },
    ];

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Profile</Text>
                    <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                        <Ionicons
                            name={isEditing ? "close" : "create-outline"}
                            size={24}
                            color={COLORS.dark}
                        />
                    </TouchableOpacity>
                </View>

                {/* Profile Card */}
                <Card style={styles.profileCard}>
                    <View style={styles.profileHeader}>
                        <View style={styles.avatarLarge}>
                            <Text style={styles.avatarLargeText}>{mentorProfile.avatar}</Text>
                            {mentorProfile.verified && (
                                <View style={styles.verifiedBadge}>
                                    <Ionicons name="checkmark" size={12} color={COLORS.white} />
                                </View>
                            )}
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.name}>{mentorProfile.name}</Text>
                            <View style={styles.ratingRow}>
                                <Ionicons name="star" size={16} color={COLORS.warning} />
                                <Text style={styles.rating}>{mentorProfile.rating}</Text>
                                <Text style={styles.reviews}>({mentorProfile.totalReviews} reviews)</Text>
                            </View>
                            <View style={styles.sportBadge}>
                                <Text style={styles.sportEmoji}>{mentorProfile.sport.emoji}</Text>
                                <Text style={styles.sportName}>{mentorProfile.sport.name}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{mentorProfile.experience}</Text>
                            <Text style={styles.statLabel}>Years Exp.</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{mentorProfile.mentees}</Text>
                            <Text style={styles.statLabel}>Mentees</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>₹{mentorProfile.hourlyRate}</Text>
                            <Text style={styles.statLabel}>Per Hour</Text>
                        </View>
                    </View>
                </Card>

                {/* Certifications */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Certifications</Text>
                    <View style={styles.badgesContainer}>
                        {mentorProfile.certifications.map((cert, index) => (
                            <Badge
                                key={index}
                                text={cert}
                                variant="dark"
                                style={styles.certBadge}
                                icon={<Ionicons name="shield-checkmark" size={14} color={COLORS.white} />}
                            />
                        ))}
                    </View>
                </View>

                {/* Specialization */}
                <Card style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Ionicons name="trophy" size={20} color={COLORS.primary} />
                        <Text style={styles.cardTitle}>Specialization</Text>
                    </View>
                    <Text style={styles.cardContent}>{mentorProfile.specialization}</Text>
                </Card>

                {/* Bio */}
                <Card style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Ionicons name="information-circle" size={20} color={COLORS.info} />
                        <Text style={styles.cardTitle}>About Me</Text>
                    </View>
                    <Text style={styles.cardContent}>{mentorProfile.bio}</Text>
                </Card>

                {/* Availability */}
                <Card style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Ionicons name="time" size={20} color={COLORS.warning} />
                        <Text style={styles.cardTitle}>Availability</Text>
                    </View>
                    <Text style={styles.cardContent}>{mentorProfile.availability}</Text>
                </Card>

                {/* Earnings Dashboard */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Earnings</Text>
                    <Card style={styles.earningsCard}>
                        <View style={styles.earningsGrid}>
                            <View style={styles.earningItem}>
                                <Text style={styles.earningLabel}>This Month</Text>
                                <Text style={styles.earningValue}>₹{earnings.thisMonth.toLocaleString()}</Text>
                            </View>
                            <View style={styles.earningItem}>
                                <Text style={styles.earningLabel}>Last Month</Text>
                                <Text style={styles.earningValue}>₹{earnings.lastMonth.toLocaleString()}</Text>
                            </View>
                            <View style={styles.earningItem}>
                                <Text style={styles.earningLabel}>Total Earned</Text>
                                <Text style={styles.earningValue}>₹{earnings.total.toLocaleString()}</Text>
                            </View>
                            <View style={styles.earningItem}>
                                <Text style={styles.earningLabel}>Pending</Text>
                                <Text style={[styles.earningValue, { color: COLORS.warning }]}>
                                    ₹{earnings.pending.toLocaleString()}
                                </Text>
                            </View>
                        </View>
                        <Button
                            title="Withdraw Funds"
                            variant="primary"
                            style={styles.withdrawButton}
                            icon={<Ionicons name="wallet" size={18} color={COLORS.white} />}
                            onPress={() => { }}
                        />
                    </Card>
                </View>

                {/* Portfolio */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Portfolio</Text>
                        <TouchableOpacity>
                            <Ionicons name="add-circle" size={24} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {portfolio.map((item) => (
                            <Card key={item.id} style={styles.portfolioItem} noPadding>
                                <View style={styles.portfolioPlaceholder}>
                                    <Ionicons
                                        name={item.type === 'video' ? 'play-circle' : 'document-text'}
                                        size={32}
                                        color={COLORS.gray}
                                    />
                                </View>
                            </Card>
                        ))}
                    </ScrollView>
                </View>

                {/* Settings Options */}
                <Card style={styles.card}>
                    <TouchableOpacity style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <Ionicons name="settings" size={20} color={COLORS.textSecondary} />
                            <Text style={styles.settingText}>Settings</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <Ionicons name="card" size={20} color={COLORS.textSecondary} />
                            <Text style={styles.settingText}>Payment Methods</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <Ionicons name="help-circle" size={20} color={COLORS.textSecondary} />
                            <Text style={styles.settingText}>Help & Support</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
                    </TouchableOpacity>
                </Card>

                <Button
                    title="Logout"
                    variant="outline"
                    style={styles.logoutButton}
                    icon={<Ionicons name="log-out-outline" size={18} color={COLORS.error} />}
                    textStyle={{ color: COLORS.error }}
                    onPress={() => { }}
                />

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
    profileCard: {
        margin: SIZES.md,
        marginTop: 0,
    },
    profileHeader: {
        flexDirection: 'row',
        marginBottom: SIZES.lg,
    },
    avatarLarge: {
        width: 80,
        height: 80,
        borderRadius: SIZES.radiusFull,
        backgroundColor: COLORS.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    avatarLargeText: {
        fontSize: SIZES.xxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
    },
    verifiedBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: COLORS.success,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: COLORS.white,
    },
    profileInfo: {
        flex: 1,
        marginLeft: SIZES.md,
        justifyContent: 'center',
    },
    name: {
        fontSize: SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.xs,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.sm,
    },
    rating: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
        marginLeft: SIZES.xs,
    },
    reviews: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginLeft: SIZES.xs,
    },
    sportBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.offWhite,
        paddingHorizontal: SIZES.sm,
        paddingVertical: SIZES.xs,
        borderRadius: SIZES.radiusFull,
        alignSelf: 'flex-start',
    },
    sportEmoji: {
        fontSize: SIZES.medium,
        marginRight: SIZES.xs,
    },
    sportName: {
        fontSize: SIZES.small,
        fontWeight: FONT_WEIGHTS.medium,
        color: COLORS.textPrimary,
    },
    statsRow: {
        flexDirection: 'row',
        paddingTop: SIZES.md,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statDivider: {
        width: 1,
        backgroundColor: COLORS.border,
    },
    statValue: {
        fontSize: SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.xs,
    },
    statLabel: {
        fontSize: SIZES.xSmall,
        color: COLORS.textSecondary,
    },
    section: {
        padding: SIZES.md,
        paddingTop: 0,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.md,
    },
    sectionTitle: {
        fontSize: SIZES.large,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.md,
    },
    badgesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    certBadge: {
        marginRight: SIZES.sm,
        marginBottom: SIZES.sm,
    },
    card: {
        margin: SIZES.md,
        marginTop: 0,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.sm,
    },
    cardTitle: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
        marginLeft: SIZES.sm,
    },
    cardContent: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
        lineHeight: 22,
    },
    earningsCard: {
        padding: SIZES.lg,
    },
    earningsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: SIZES.lg,
    },
    earningItem: {
        width: '50%',
        marginBottom: SIZES.md,
    },
    earningLabel: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginBottom: SIZES.xs,
    },
    earningValue: {
        fontSize: SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.primary,
    },
    withdrawButton: {
        marginTop: SIZES.sm,
    },
    portfolioItem: {
        width: 120,
        height: 120,
        marginRight: SIZES.sm,
        overflow: 'hidden',
    },
    portfolioPlaceholder: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.offWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SIZES.md,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingText: {
        fontSize: SIZES.medium,
        color: COLORS.textPrimary,
        marginLeft: SIZES.md,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
    },
    logoutButton: {
        margin: SIZES.md,
        marginTop: SIZES.sm,
        borderColor: COLORS.error,
    },
});
