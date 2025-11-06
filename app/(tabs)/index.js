import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import Card from '../../components/Card';
import { COLORS, SIZES, FONT_WEIGHTS } from '../../constants/theme';

const screenWidth = Dimensions.get('window').width;

export default function DashboardScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(30)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 600,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const stats = [
        { label: 'Total Mentees', value: '45', icon: 'people', color: COLORS.primary },
        { label: 'Hours Mentored', value: '234', icon: 'time', color: COLORS.info },
        { label: 'Avg Rating', value: '4.8', icon: 'star', color: COLORS.warning },
        { label: 'This Month', value: '₹45,000', icon: 'wallet', color: COLORS.success },
    ];

    const recentMentees = [
        { id: 1, name: 'Arjun Patel', sport: 'Cricket', sportIcon: 'baseball', status: 'Active', avatar: 'AP' },
        { id: 2, name: 'Priya Sharma', sport: 'Football', sportIcon: 'football', status: 'Active', avatar: 'PS' },
        { id: 3, name: 'Rohit Kumar', sport: 'Cricket', sportIcon: 'baseball', status: 'Pending', avatar: 'RK' },
    ];

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [2, 3, 2.5, 4, 3, 5, 4.5],
        }],
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <View style={styles.greetingRow}>
                            <Text style={styles.greeting}>Good Morning</Text>
                            <Ionicons name="hand-right" size={20} color={COLORS.warning} style={styles.waveIcon} />
                        </View>
                        <Text style={styles.name}>Rajesh Kumar</Text>
                    </View>
                    <View style={styles.notificationBadge}>
                        <Ionicons name="notifications" size={24} color={COLORS.dark} />
                        <View style={styles.badge} />
                    </View>
                </View>

                {/* Stats Grid */}
                <Animated.View 
                    style={[
                        styles.statsGrid,
                        {
                            opacity: fadeAnim,
                            transform: [{ translateY: slideAnim }],
                        },
                    ]}
                >
                    {stats.map((stat, index) => (
                        <Card key={index} style={styles.statCard}>
                            <View style={[styles.iconContainer, { backgroundColor: stat.color + '20' }]}>
                                <Ionicons name={stat.icon} size={24} color={stat.color} />
                            </View>
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                        </Card>
                    ))}
                </Animated.View>

                {/* Performance Chart */}
                <Card style={styles.chartCard}>
                    <Text style={styles.sectionTitle}>Weekly Performance</Text>
                    <Text style={styles.sectionSubtitle}>Hours mentored this week</Text>
                    <LineChart
                        data={chartData}
                        width={screenWidth - 64}
                        height={180}
                        chartConfig={{
                            backgroundColor: COLORS.white,
                            backgroundGradientFrom: COLORS.white,
                            backgroundGradientTo: COLORS.white,
                            decimalPlaces: 1,
                            color: (opacity = 1) => COLORS.primary,
                            labelColor: (opacity = 1) => COLORS.gray,
                            style: {
                                borderRadius: SIZES.radiusMedium,
                            },
                            propsForDots: {
                                r: '4',
                                strokeWidth: '2',
                                stroke: COLORS.primary,
                            },
                        }}
                        bezier
                        style={styles.chart}
                    />
                </Card>

                {/* Recent Mentees */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Mentees</Text>
                        <Text style={styles.seeAll}>See All</Text>
                    </View>

                    {recentMentees.map((mentee) => (
                        <Card key={mentee.id} style={styles.menteeCard} onPress={() => { }}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>{mentee.avatar}</Text>
                            </View>
                            <View style={styles.menteeInfo}>
                                <Text style={styles.menteeName}>{mentee.name}</Text>
                                <View style={styles.sportRow}>
                                    <Ionicons name={mentee.sportIcon} size={14} color={COLORS.textSecondary} />
                                    <Text style={styles.menteeSport}>{mentee.sport}</Text>
                                </View>
                            </View>
                            <View style={[
                                styles.statusBadge,
                                { backgroundColor: mentee.status === 'Active' ? COLORS.success + '20' : COLORS.warning + '20' }
                            ]}>
                                <Text style={[
                                    styles.statusText,
                                    { color: mentee.status === 'Active' ? COLORS.success : COLORS.warning }
                                ]}>
                                    {mentee.status}
                                </Text>
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
        paddingTop: SIZES.sm,
    },
    greeting: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
    },
    greetingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    waveIcon: {
        marginLeft: SIZES.xs,
    },
    name: {
        fontSize: SIZES.xxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginTop: SIZES.xs,
    },
    notificationBadge: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.error,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: SIZES.sm,
    },
    statCard: {
        width: (screenWidth - 48) / 2,
        margin: SIZES.xs,
        alignItems: 'center',
        padding: SIZES.md,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: SIZES.radiusMedium,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SIZES.sm,
    },
    statValue: {
        fontSize: SIZES.xxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.xs,
    },
    statLabel: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        textAlign: 'center',
    },
    chartCard: {
        margin: SIZES.md,
        marginTop: SIZES.sm,
    },
    chart: {
        marginVertical: SIZES.sm,
        borderRadius: SIZES.radiusMedium,
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
    },
    sectionSubtitle: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginTop: SIZES.xs,
    },
    seeAll: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight: FONT_WEIGHTS.medium,
    },
    menteeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.sm,
        padding: SIZES.md,
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
    menteeSport: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginLeft: SIZES.xs,
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
});
