import { useLanguage } from '../context/LanguageContext'
import { activities } from '../data/activities'
import type { Activity, ActivityCategory } from '../models/activity'
import type { ProgressState } from '../models/userProgress'

const categoryTitles: Record<ActivityCategory, string> = {
  Health: 'Физическая сила и здоровье',
  Mind: 'Концентрация и умственная активность',
  Skill: 'Профессиональный рост',
  Routine: 'Внутренняя устойчивость и спокойствие',
}

export const TasksScreen = ({
  state,
  onApplyActivity,
}: {
  state: ProgressState
  onApplyActivity: (activity: Activity) => void
}) => {
  const { t } = useLanguage()

  const availableActivities = activities.filter((activity) =>
    state.availableActivitiesIds.includes(activity.id),
  )

  const activitiesByCategory = availableActivities.reduce(
    (groups, activity) => {
      groups[activity.category].push(activity)
      return groups
    },
    {
      Health: [],
      Mind: [],
      Skill: [],
      Routine: [],
    } as Record<ActivityCategory, Activity[]>,
  )

  return (
    <>
      <h2>{t('todayTasks')}</h2>

      {availableActivities.length === 0 ? (
        <p className="empty-state">{t('noTasks')}</p>
      ) : (
        (['Health', 'Mind', 'Skill', 'Routine'] as ActivityCategory[]).map((category) => {
          const categoryActivities = activitiesByCategory[category]

          if (categoryActivities.length === 0) {
            return null
          }

          return (
            <section key={category} className="activity-section">
              <h3>{categoryTitles[category]}</h3>
              <div className="activity-grid">
                {categoryActivities.map((activity) => (
                  <button
                    key={activity.id}
                    type="button"
                    className="activity-button"
                    onClick={() => onApplyActivity(activity)}
                  >
                    <div className="activity-header">
                      <strong>{activity.title}</strong>
                      <span className="activity-points">+{activity.points}</span>
                    </div>
                    <p className="activity-description">{activity.description}</p>
                  </button>
                ))}
              </div>
            </section>
          )
        })
      )}
    </>
  )
}

