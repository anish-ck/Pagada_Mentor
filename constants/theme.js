// Design system inspired by the provided UI screenshots

export const COLORS = {
    // Primary colors
    primary: '#00D26A', // Bright green from "Join Tournament" button
    primaryDark: '#00B359',
    primaryLight: '#33DB88',

    // Neutral colors
    dark: '#1A1D26', // Dark background from buttons
    darkGray: '#2D3139',
    gray: '#8F92A1',
    lightGray: '#E5E7EB',
    offWhite: '#F3F4F6',
    white: '#FFFFFF',

    // Text colors
    textPrimary: '#1F2937',
    textSecondary: '#6B7280',
    textLight: '#9CA3AF',

    // Status colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Sport colors
    cricket: '#FF6B35',
    football: '#4A5568',

    // Background
    background: '#FFFFFF',
    backgroundSecondary: '#F9FAFB',

    // Border
    border: '#E5E7EB',

    // Overlay
    overlay: 'rgba(0, 0, 0, 0.5)',
};

export const SIZES = {
    // Font sizes
    xSmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    xLarge: 20,
    xxLarge: 24,
    xxxLarge: 32,

    // Spacing
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,

    // Border radius
    radiusSmall: 8,
    radiusMedium: 12,
    radiusLarge: 16,
    radiusXLarge: 24,
    radiusFull: 9999,

    // Component sizes
    buttonHeight: 48,
    inputHeight: 48,
    tabBarHeight: 60,
    headerHeight: 56,
};

export const FONTS = {
    regular: 'System',
    medium: 'System',
    semiBold: 'System',
    bold: 'System',
};

export const FONT_WEIGHTS = {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
};

export const SHADOWS = {
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
};

export const SPORTS = [
    { id: 'cricket', name: 'Cricket', emoji: '🏏', color: COLORS.cricket },
    { id: 'football', name: 'Football', emoji: '⚽', color: COLORS.football },
    { id: 'basketball', name: 'Basketball', emoji: '🏀', color: '#FF8C42' },
    { id: 'tennis', name: 'Tennis', emoji: '🎾', color: '#059669' },
    { id: 'badminton', name: 'Badminton', emoji: '🏸', color: '#8B5CF6' },
    { id: 'athletics', name: 'Athletics', emoji: '🏃', color: '#EC4899' },
];
