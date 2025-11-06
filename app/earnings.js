import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import Button from '../components/Button';
import TabButton from '../components/TabButton';
import { COLORS, SIZES, FONT_WEIGHTS } from '../constants/theme';

export default function EarningsScreen() {
    const [activeTab, setActiveTab] = useState('overview');
    const [withdrawAmount, setWithdrawAmount] = useState('');

    const earnings = {
        available: 33000,
        pending: 12000,
        thisMonth: 45000,
        lastMonth: 38000,
        total: 234000,
    };

    const transactions = [
        {
            id: 1,
            type: 'session',
            mentee: 'Arjun Patel',
            amount: 1500,
            date: 'Dec 5, 2024',
            status: 'completed',
            sport: '🏏 Cricket',
        },
        {
            id: 2,
            type: 'withdrawal',
            amount: -15000,
            date: 'Dec 1, 2024',
            status: 'processed',
            bankAccount: '****4567',
        },
        {
            id: 3,
            type: 'session',
            mentee: 'Priya Sharma',
            amount: 1500,
            date: 'Nov 30, 2024',
            status: 'pending',
            sport: '⚽ Football',
        },
    ];

    const pricingPlans = [
        {
            id: 1,
            type: 'Per Session',
            price: 1500,
            duration: '1 hour',
            active: true,
        },
        {
            id: 2,
            type: 'Monthly Package',
            price: 10000,
            duration: '8 sessions/month',
            active: false,
        },
    ];

    const renderOverview = () => (
        <View style={styles.content}>
            {/* Balance Card */}
            <Card style={styles.balanceCard}>
                <Text style={styles.balanceLabel}>Available Balance</Text>
                <Text style={styles.balanceAmount}>₹{earnings.available.toLocaleString()}</Text>
                <View style={styles.balanceDetails}>
                    <View style={styles.balanceItem}>
                        <Text style={styles.balanceItemLabel}>Pending</Text>
                        <Text style={styles.balanceItemValue}>₹{earnings.pending.toLocaleString()}</Text>
                    </View>
                    <View style={styles.balanceItem}>
                        <Text style={styles.balanceItemLabel}>This Month</Text>
                        <Text style={styles.balanceItemValue}>₹{earnings.thisMonth.toLocaleString()}</Text>
                    </View>
                </View>
                <Button
                    title="Withdraw Funds"
                    variant="primary"
                    style={styles.withdrawButton}
                    icon={<Ionicons name="wallet" size={18} color={COLORS.white} />}
                    onPress={() => setActiveTab('withdraw')}
                />
            </Card>

            {/* Stats Cards */}
            <View style={styles.statsRow}>
                <Card style={styles.statCard}>
                    <Ionicons name="calendar" size={24} color={COLORS.info} />
                    <Text style={styles.statValue}>₹{earnings.lastMonth.toLocaleString()}</Text>
                    <Text style={styles.statLabel}>Last Month</Text>
                </Card>
                <Card style={styles.statCard}>
                    <Ionicons name="trending-up" size={24} color={COLORS.success} />
                    <Text style={styles.statValue}>₹{earnings.total.toLocaleString()}</Text>
                    <Text style={styles.statLabel}>Total Earned</Text>
                </Card>
            </View>

            {/* Recent Transactions */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Transactions</Text>
                    <TouchableOpacity onPress={() => setActiveTab('transactions')}>
                        <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                </View>
                {transactions.slice(0, 3).map((transaction) => (
                    <Card key={transaction.id} style={styles.transactionCard}>
                        <View style={styles.transactionRow}>
                            <View
                                style={[
                                    styles.transactionIcon,
                                    {
                                        backgroundColor:
                                            transaction.type === 'session'
                                                ? COLORS.success + '20'
                                                : COLORS.info + '20',
                                    },
                                ]}
                            >
                                <Ionicons
                                    name={transaction.type === 'session' ? 'cash' : 'arrow-down'}
                                    size={20}
                                    color={transaction.type === 'session' ? COLORS.success : COLORS.info}
                                />
                            </View>
                            <View style={styles.transactionInfo}>
                                <Text style={styles.transactionTitle}>
                                    {transaction.type === 'session'
                                        ? `Session - ${transaction.mentee}`
                                        : 'Withdrawal'}
                                </Text>
                                <Text style={styles.transactionDate}>{transaction.date}</Text>
                            </View>
                            <Text
                                style={[
                                    styles.transactionAmount,
                                    {
                                        color: transaction.amount > 0 ? COLORS.success : COLORS.textPrimary,
                                    },
                                ]}
                            >
                                {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                            </Text>
                        </View>
                    </Card>
                ))}
            </View>
        </View>
    );

    const renderTransactions = () => (
        <View style={styles.content}>
            <Text style={styles.sectionTitle}>All Transactions</Text>
            {transactions.map((transaction) => (
                <Card key={transaction.id} style={styles.transactionCard}>
                    <View style={styles.transactionRow}>
                        <View
                            style={[
                                styles.transactionIcon,
                                {
                                    backgroundColor:
                                        transaction.type === 'session' ? COLORS.success + '20' : COLORS.info + '20',
                                },
                            ]}
                        >
                            <Ionicons
                                name={transaction.type === 'session' ? 'cash' : 'arrow-down'}
                                size={20}
                                color={transaction.type === 'session' ? COLORS.success : COLORS.info}
                            />
                        </View>
                        <View style={styles.transactionInfo}>
                            <Text style={styles.transactionTitle}>
                                {transaction.type === 'session' ? `Session - ${transaction.mentee}` : 'Withdrawal'}
                            </Text>
                            <Text style={styles.transactionDate}>{transaction.date}</Text>
                            {transaction.sport && <Text style={styles.transactionSport}>{transaction.sport}</Text>}
                        </View>
                        <View style={styles.transactionRight}>
                            <Text
                                style={[
                                    styles.transactionAmount,
                                    {
                                        color: transaction.amount > 0 ? COLORS.success : COLORS.textPrimary,
                                    },
                                ]}
                            >
                                {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                            </Text>
                            <View
                                style={[
                                    styles.statusBadge,
                                    {
                                        backgroundColor:
                                            transaction.status === 'completed' || transaction.status === 'processed'
                                                ? COLORS.success + '20'
                                                : COLORS.warning + '20',
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.statusText,
                                        {
                                            color:
                                                transaction.status === 'completed' || transaction.status === 'processed'
                                                    ? COLORS.success
                                                    : COLORS.warning,
                                        },
                                    ]}
                                >
                                    {transaction.status}
                                </Text>
                            </View>
                        </View>
                    </View>
                </Card>
            ))}
        </View>
    );

    const renderPricing = () => (
        <View style={styles.content}>
            <Text style={styles.sectionTitle}>Pricing Plans</Text>
            {pricingPlans.map((plan) => (
                <Card key={plan.id} style={styles.pricingCard}>
                    <View style={styles.pricingHeader}>
                        <View>
                            <Text style={styles.pricingType}>{plan.type}</Text>
                            <Text style={styles.pricingDuration}>{plan.duration}</Text>
                        </View>
                        {plan.active && (
                            <View style={styles.activeBadge}>
                                <Text style={styles.activeBadgeText}>Active</Text>
                            </View>
                        )}
                    </View>
                    <Text style={styles.pricingAmount}>₹{plan.price.toLocaleString()}</Text>
                    <Button
                        title={plan.active ? 'Edit Pricing' : 'Activate Plan'}
                        variant={plan.active ? 'outline' : 'secondary'}
                        size="small"
                        onPress={() => { }}
                    />
                </Card>
            ))}
        </View>
    );

    const renderWithdraw = () => (
        <View style={styles.content}>
            <Card style={styles.withdrawCard}>
                <Text style={styles.withdrawTitle}>Withdraw Funds</Text>
                <Text style={styles.withdrawSubtitle}>
                    Available Balance: ₹{earnings.available.toLocaleString()}
                </Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Amount</Text>
                    <View style={styles.amountInput}>
                        <Text style={styles.currencySymbol}>₹</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0"
                            placeholderTextColor={COLORS.gray}
                            value={withdrawAmount}
                            onChangeText={setWithdrawAmount}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <View style={styles.quickAmounts}>
                    {[5000, 10000, 20000, 33000].map((amount) => (
                        <TouchableOpacity
                            key={amount}
                            style={styles.quickAmountButton}
                            onPress={() => setWithdrawAmount(amount.toString())}
                        >
                            <Text style={styles.quickAmountText}>₹{amount.toLocaleString()}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.bankInfo}>
                    <Ionicons name="card" size={20} color={COLORS.textSecondary} />
                    <Text style={styles.bankInfoText}>Bank Account: HDFC Bank ****4567</Text>
                </View>

                <Button
                    title="Proceed to Withdraw"
                    variant="primary"
                    style={styles.proceedButton}
                    onPress={() => { }}
                />
            </Card>

            <Text style={styles.withdrawNote}>
                Note: Withdrawals are processed within 2-3 business days. A processing fee of 2% applies.
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>Earnings</Text>
                </View>

                {/* Tabs */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.tabs}
                    contentContainerStyle={styles.tabsContent}
                >
                    <TabButton
                        title="Overview"
                        active={activeTab === 'overview'}
                        onPress={() => setActiveTab('overview')}
                    />
                    <TabButton
                        title="Transactions"
                        active={activeTab === 'transactions'}
                        onPress={() => setActiveTab('transactions')}
                    />
                    <TabButton
                        title="Pricing"
                        active={activeTab === 'pricing'}
                        onPress={() => setActiveTab('pricing')}
                    />
                    <TabButton
                        title="Withdraw"
                        active={activeTab === 'withdraw'}
                        onPress={() => setActiveTab('withdraw')}
                    />
                </ScrollView>

                {/* Content */}
                {activeTab === 'overview' && renderOverview()}
                {activeTab === 'transactions' && renderTransactions()}
                {activeTab === 'pricing' && renderPricing()}
                {activeTab === 'withdraw' && renderWithdraw()}

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
    },
    title: {
        fontSize: SIZES.xxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
    },
    tabs: {
        marginBottom: SIZES.md,
    },
    tabsContent: {
        paddingHorizontal: SIZES.md,
    },
    content: {
        padding: SIZES.md,
        paddingTop: 0,
    },
    balanceCard: {
        padding: SIZES.lg,
        marginBottom: SIZES.md,
    },
    balanceLabel: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
        marginBottom: SIZES.xs,
    },
    balanceAmount: {
        fontSize: SIZES.xxxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.primary,
        marginBottom: SIZES.lg,
    },
    balanceDetails: {
        flexDirection: 'row',
        marginBottom: SIZES.lg,
    },
    balanceItem: {
        flex: 1,
    },
    balanceItemLabel: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginBottom: SIZES.xs,
    },
    balanceItemValue: {
        fontSize: SIZES.large,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    withdrawButton: {
        marginTop: SIZES.sm,
    },
    statsRow: {
        flexDirection: 'row',
        marginBottom: SIZES.md,
        gap: SIZES.md,
    },
    statCard: {
        flex: 1,
        alignItems: 'center',
        padding: SIZES.md,
    },
    statValue: {
        fontSize: SIZES.large,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginTop: SIZES.sm,
        marginBottom: SIZES.xs,
    },
    statLabel: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        textAlign: 'center',
    },
    section: {
        marginTop: SIZES.sm,
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
    seeAll: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight: FONT_WEIGHTS.medium,
    },
    transactionCard: {
        marginBottom: SIZES.sm,
    },
    transactionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transactionIcon: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radiusMedium,
        alignItems: 'center',
        justifyContent: 'center',
    },
    transactionInfo: {
        flex: 1,
        marginLeft: SIZES.md,
    },
    transactionTitle: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    transactionDate: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginTop: SIZES.xs,
    },
    transactionSport: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginTop: 2,
    },
    transactionRight: {
        alignItems: 'flex-end',
    },
    transactionAmount: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.bold,
        marginBottom: SIZES.xs,
    },
    statusBadge: {
        paddingHorizontal: SIZES.sm,
        paddingVertical: 2,
        borderRadius: SIZES.radiusFull,
    },
    statusText: {
        fontSize: SIZES.xSmall,
        fontWeight: FONT_WEIGHTS.medium,
        textTransform: 'capitalize',
    },
    pricingCard: {
        marginBottom: SIZES.md,
    },
    pricingHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: SIZES.md,
    },
    pricingType: {
        fontSize: SIZES.large,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
    },
    pricingDuration: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginTop: SIZES.xs,
    },
    activeBadge: {
        backgroundColor: COLORS.success + '20',
        paddingHorizontal: SIZES.sm,
        paddingVertical: SIZES.xs,
        borderRadius: SIZES.radiusFull,
    },
    activeBadgeText: {
        fontSize: SIZES.xSmall,
        fontWeight: FONT_WEIGHTS.medium,
        color: COLORS.success,
    },
    pricingAmount: {
        fontSize: SIZES.xxLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.primary,
        marginBottom: SIZES.md,
    },
    withdrawCard: {
        padding: SIZES.lg,
        marginBottom: SIZES.md,
    },
    withdrawTitle: {
        fontSize: SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.xs,
    },
    withdrawSubtitle: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
        marginBottom: SIZES.lg,
    },
    inputContainer: {
        marginBottom: SIZES.lg,
    },
    inputLabel: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: COLORS.textPrimary,
        marginBottom: SIZES.sm,
    },
    amountInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.offWhite,
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: SIZES.md,
        height: 56,
    },
    currencySymbol: {
        fontSize: SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
        marginRight: SIZES.sm,
    },
    input: {
        flex: 1,
        fontSize: SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textPrimary,
    },
    quickAmounts: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: SIZES.lg,
        gap: SIZES.sm,
    },
    quickAmountButton: {
        backgroundColor: COLORS.offWhite,
        paddingHorizontal: SIZES.md,
        paddingVertical: SIZES.sm,
        borderRadius: SIZES.radiusMedium,
    },
    quickAmountText: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.medium,
        color: COLORS.textPrimary,
    },
    bankInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.offWhite,
        padding: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        marginBottom: SIZES.lg,
    },
    bankInfoText: {
        fontSize: SIZES.medium,
        color: COLORS.textSecondary,
        marginLeft: SIZES.sm,
    },
    proceedButton: {
        marginTop: SIZES.sm,
    },
    withdrawNote: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        lineHeight: 20,
        fontStyle: 'italic',
    },
});
