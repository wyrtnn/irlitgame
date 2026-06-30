import { useLanguage } from '../context/LanguageContext'
import type { ProgressState } from '../models/userProgress'

export const ProfileScreen = ({
  state,
  resetProgress,
}: {
  state: ProgressState
  resetProgress: () => void
}) => {
  const { t } = useLanguage()

  // Вычисляем количество дней с момента присоединения
  const joinedDate = new Date(state.joinedDate)
  const daysSinceJoined = Math.floor((Date.now() - joinedDate.getTime()) / (1000 * 60 * 60 * 24)) + 1

  return (
    <div className="screen">
      <section className="profile-header">
        <div className="profile-avatar">👤</div>
        <h2>{t('profileTitle')}</h2>
      </section>

      <section className="profile-stats">
        <div className="profile-stat">
          <span className="profile-stat-label">{t('totalPoints')}</span>
          <span className="profile-stat-value">{state.points}</span>
        </div>
        <div className="profile-stat">
          <span className="profile-stat-label">{t('totalActivities')}</span>
          <span className="profile-stat-value">{state.history.length}</span>
        </div>
        <div className="profile-stat">
          <span className="profile-stat-label">{t('joinedDate')}</span>
          <span className="profile-stat-value">{daysSinceJoined} дней</span>
        </div>
      </section>

      <section className="profile-actions">
        <button className="reset-button" type="button" onClick={resetProgress}>
          Сбросить прогресс
        </button>
      </section>

      <section className="dashboard-section">
        <h3>{t('stats')}</h3>
        <div className="stats-list">
          <div className="stat-row">
            <span>💪 {t('strength')}</span>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: `${Math.min(state.stats.strength ?? 0, 100) * 10}%` }} />
            </div>
            <span>{state.stats.strength ?? 0}</span>
          </div>
          <div className="stat-row">
            <span>🏃 {t('endurance')}</span>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: `${Math.min(state.stats.endurance ?? 0, 100) * 10}%` }} />
            </div>
            <span>{state.stats.endurance ?? 0}</span>
          </div>
          <div className="stat-row">
            <span>🧠 {t('focus')}</span>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: `${Math.min(state.stats.focus ?? 0, 100) * 10}%` }} />
            </div>
            <span>{state.stats.focus ?? 0}</span>
          </div>
          <div className="stat-row">
            <span>🛡️ {t('resilience')}</span>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: `${Math.min(state.stats.resilience ?? 0, 100) * 10}%` }} />
            </div>
            <span>{state.stats.resilience ?? 0}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
