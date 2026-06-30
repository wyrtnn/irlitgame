import { useEffect, useReducer } from 'react'
import type { Activity } from '../models/activity'
import type { ProgressState, ProgressAction } from '../models/userProgress'
import { loadProgress, saveProgress } from '../services/persistenceService'

const ALL_ACTIVITY_IDS = [
  'vanek11',
  'gym-session',
  'morning-run',
  'yoga-session',
  'healthy-cooking',
  'cold-shower',
  'morning-read',
  'meditation',
  'language-learning',
  'learning-new-skill',
  'journal-writing',
  'podcast-learning',
  'project-work',
  'code-practice',
  'networking',
  'portfolio-update',
  'deep-work-session',
  'early-wake',
  'room-clean',
  'no-phone-hour',
  'social-detox',
  'gratitude-practice',
  'mentor-session',
]

// Получаем строку даты без времени (YYYY-MM-DD)
const getTodayDate = () => new Date().toISOString().split('T')[0]

const initialState: ProgressState = {
  stats: { strength: 0, endurance: 0, focus: 0, resilience: 0 },
  points: 0,
  history: [],
  availableActivitiesIds: ALL_ACTIVITY_IDS,
  joinedDate: new Date().toISOString(),
  lastResetDate: getTodayDate(),
}

// Редьюсер управляет состоянием прогресса и доступными задачами
const reducer = (state: ProgressState, action: ProgressAction): ProgressState => {
  switch (action.type) {
    case 'APPLY_ACTIVITY':
      return {
        stats: {
          strength: (state.stats.strength ?? 0) + (action.effect.strength ?? 0),
          endurance: (state.stats.endurance ?? 0) + (action.effect.endurance ?? 0),
          focus: (state.stats.focus ?? 0) + (action.effect.focus ?? 0),
          resilience: (state.stats.resilience ?? 0) + (action.effect.resilience ?? 0),
        },
        points: state.points + action.points,
        history: [
          {
            activityId: action.activityId,
            title: action.title,
            timestamp: new Date().toISOString(),
            effect: action.effect,
          },
          ...state.history,
        ],
        availableActivitiesIds: state.availableActivitiesIds,
        joinedDate: state.joinedDate,
        lastResetDate: state.lastResetDate,
      }
    case 'REMOVE_AVAILABLE_ACTIVITY':
      return {
        ...state,
        availableActivitiesIds: state.availableActivitiesIds.filter((id) => id !== action.activityId),
      }
    case 'RESET_DAILY_ACTIVITIES':
      return {
        ...state,
        availableActivitiesIds: ALL_ACTIVITY_IDS,
        lastResetDate: getTodayDate(),
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export const useUserProgress = () => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const loaded = loadProgress()
    if (!loaded) return initialState

    // Проверяем, нужно ли сбросить доступные задачи на новый день
    const today = getTodayDate()
    if (loaded.lastResetDate !== today) {
      return {
        ...loaded,
        availableActivitiesIds: ALL_ACTIVITY_IDS,
        lastResetDate: today,
      }
    }

    return loaded
  })

  // Автоматически сохраняем состояние при изменении
  useEffect(() => {
    saveProgress(state)
  }, [state])

  const applyActivity = (activity: Activity) => {
    // Применяем активность и сразу же удаляем её из доступных
    dispatch({
      type: 'APPLY_ACTIVITY',
      activityId: activity.id,
      title: activity.title,
      effect: activity.effect,
      points: activity.points,
    })
    dispatch({
      type: 'REMOVE_AVAILABLE_ACTIVITY',
      activityId: activity.id,
    })
  }

  const resetProgress = () => dispatch({ type: 'RESET' })

  return { state, applyActivity, resetProgress }
}
