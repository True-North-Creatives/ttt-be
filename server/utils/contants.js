const WOD_PLANS = {
    FUNCTIONAL_TRAINING: {
        title: 'FUNCTIONAL TRAINING',
        path: 'functional',
        collection: 'functional',
    },
    POWERBUILDING: {
        title: 'POWER BUILDING',
        path: 'power',
        collection: 'power',
    },
    BODYWEIGHT_WORKOUT: {
        title: 'BODYWEIGHT WORKOUT',
        path: 'bodyweight',
        collection: 'bodyweight',
    },
    HOME_WORKOUT: { title: 'HOME WORKOUT', path: 'home', collection: 'home' },
    CARDIO_WORKOUT: {
        title: 'CARDIO WORKOUT',
        path: 'cardio',
        collection: 'cardio',
    },
    AB_WORKOUT: { title: 'AB WORKOUT', path: 'ab', collection: 'ab' },
    YOGA: { title: 'YOGA', path: 'yoga', collection: 'yoga' },
    KETTLEBELL_WORKOUT: {
        title: 'KETTLEBELL WORKOUT',
        path: 'kettlebell',
        collection: 'kettlebell',
    },
};

const MOD_PLANS = {
    MASS_GAINER: {
        title: 'Mass Gainer',
        collection: 'massGainer',
    },
    MUSCLE_BUILDING: {
        title: 'Muscle building (Moderate Carbs)',
        collection: 'muscleBuilding',
    },
    GENERAL_HEALTH_MAINTENANCE: {
        title: 'General Health Maintenance',
        collection: 'general',
    },
    FAT_LOSS: {
        title: 'Fat Loss (Low carb Diet)',
        collection: 'fatLoss',
    },
    KETO: {
        title: 'Keto',
        collection: 'keto',
    },
};

module.exports = { WOD_PLANS, MOD_PLANS };
