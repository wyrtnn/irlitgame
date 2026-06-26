import type { Activity } from '../models/activity'

export const ActivitySelector = ({
  activities,
  onSelect,
}: {
  activities: Activity[]
  onSelect: (activity: Activity) => void
}) => {
  return (
    <section className="activity-section">
      <h2>Задача дня</h2>
      <div className="activity-grid">
        {activities.map((activity) => (
          <button
            key={activity.id}
            onClick={() => onSelect(activity)}
            className="activity-button"
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
}
