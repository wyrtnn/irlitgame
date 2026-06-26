import type { ProgressState } from '../models/userProgress'

const STORAGE_KEY = 'real-life-progress'

export const loadProgress = (): ProgressState | null => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ProgressState) : null
  } catch {
    return null
  }
}

export const saveProgress = (state: ProgressState): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore storage failures in prototype
  }
}
