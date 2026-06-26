export type ActivityCategory = 'Health' | 'Skill' | 'Mind' | 'Routine'

export type ActivityEffect = {
  strength?: number
  endurance?: number
  focus?: number
  resilience?: number
}

export type Activity = {
  id: string
  title: string
  description: string
  category: ActivityCategory
  points: number
  effect: ActivityEffect
}
