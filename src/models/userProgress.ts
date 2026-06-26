import type { ActivityEffect } from './activity'

export type StatCard = {
  label: string
  value: number
  unit?: string
}

export type ProgressState = {
  stats: ActivityEffect
  points: number
  history: Array<{ activityId: string; title: string; timestamp: string; effect: ActivityEffect }>
  availableActivitiesIds: string[] // Задачи, доступные сегодня
  joinedDate: string // Дата присоединения
  lastResetDate: string // Последняя дата сброса доступных задач
}

export type ProgressAction =
  | { type: 'APPLY_ACTIVITY'; activityId: string; title: string; effect: ActivityEffect; points: number }
  | { type: 'REMOVE_AVAILABLE_ACTIVITY'; activityId: string }
  | { type: 'RESET_DAILY_ACTIVITIES' }
  | { type: 'RESET' }
