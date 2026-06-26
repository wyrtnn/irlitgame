// Система переводов для поддержки нескольких языков
export type Language = 'ru' | 'en'

export const translations = {
  ru: {
    // Navigation
    home: 'Главная',
    tasks: 'Задачи',
    profile: 'Профиль',

    // Home screen
    projectTitle: 'Мой реальный прогресс',
    projectDescription: 'Приложение для отслеживания личного развития через ежедневные действия.',
    statsTitle: 'Основные метрики',
    strengthDesc: 'Физическая сила и здоровье',
    enduranceDesc: 'Выносливость и тренированность',
    focusDesc: 'Концентрация и умственная активность',
    resilienceDesc: 'Внутренняя устойчивость и спокойствие',

    // Tasks screen
    todayTasks: 'Сегодняшние задачи',
    completeAction: 'Подтвердить действие',
    noTasks: 'На сегодня нет запланированных действий',

    // Profile screen
    profileTitle: 'Мой профиль',
    totalPoints: 'Всего очков',
    totalActivities: 'Завершено действий',
    streak: 'Текущая серия дней',
    stats: 'Статистика',
    joinedDate: 'Присоединился',

    // Dashboard
    progress: 'Прогресс',
    points: 'Очки',
    strength: 'Сила',
    endurance: 'Выносливость',
    focus: 'Фокус',
    resilience: 'Устойчивость',

    // Activity
    dayTask: 'Задача дня',
    description: 'Описание',
    effect: 'Эффект',
    actionHistory: 'История действий',
    noActions: 'Пока нет зафиксированных действий.',

    // Language
    language: 'Язык',
  },
  en: {
    // Navigation
    home: 'Home',
    tasks: 'Tasks',
    profile: 'Profile',

    // Home screen
    projectTitle: 'My Real Progress',
    projectDescription: 'Track your personal development through daily real-world actions.',
    statsTitle: 'Key Metrics',
    strengthDesc: 'Physical strength and health',
    enduranceDesc: 'Endurance and fitness',
    focusDesc: 'Concentration and mental activity',
    resilienceDesc: 'Inner strength and calmness',

    // Tasks screen
    todayTasks: "Today's Tasks",
    completeAction: 'Confirm Action',
    noTasks: 'No planned actions for today',

    // Profile screen
    profileTitle: 'My Profile',
    totalPoints: 'Total Points',
    totalActivities: 'Completed Actions',
    streak: 'Current Streak',
    stats: 'Statistics',
    joinedDate: 'Joined',

    // Dashboard
    progress: 'Progress',
    points: 'Points',
    strength: 'Strength',
    endurance: 'Endurance',
    focus: 'Focus',
    resilience: 'Resilience',

    // Activity
    dayTask: 'Day Task',
    description: 'Description',
    effect: 'Effect',
    actionHistory: 'Action History',
    noActions: 'No recorded actions yet.',

    // Language
    language: 'Language',
  },
}
