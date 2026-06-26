import { useLanguage } from '../context/LanguageContext'
import type { ProgressState } from '../models/userProgress'

export const HomeScreen = ({ state }: { state: ProgressState }) => {
  const { t } = useLanguage()

  return (
    <div className="screen">
      <section className="hero-section">
        <h2 className="hero-title">{t('projectTitle')}</h2>
        <p className="hero-description">{t('projectDescription')}</p>
      </section>

      <section className="home-stats-section">
        <h3>{t('statsTitle')}</h3>
        <div className="stats-info-grid">
          <div className="stat-info-card">
            <div className="stat-info-icon">💪</div>
            <div className="stat-info-name">{t('strength')}</div>
            <div className="stat-info-desc">{t('strengthDesc')}</div>
            <div className="stat-info-value">{state.stats.strength ?? 0}</div>
          </div>
          <div className="stat-info-card">
            <div className="stat-info-icon">🏃</div>
            <div className="stat-info-name">{t('endurance')}</div>
            <div className="stat-info-desc">{t('enduranceDesc')}</div>
            <div className="stat-info-value">{state.stats.endurance ?? 0}</div>
          </div>
          <div className="stat-info-card">
            <div className="stat-info-icon">🧠</div>
            <div className="stat-info-name">{t('focus')}</div>
            <div className="stat-info-desc">{t('focusDesc')}</div>
            <div className="stat-info-value">{state.stats.focus ?? 0}</div>
          </div>
          <div className="stat-info-card">
            <div className="stat-info-icon">🛡️</div>
            <div className="stat-info-name">{t('resilience')}</div>
            <div className="stat-info-desc">{t('resilienceDesc')}</div>
            <div className="stat-info-value">{state.stats.resilience ?? 0}</div>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <h3>{t('progress')}</h3>
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-label">{t('points')}</div>
            <div className="stat-value">{state.points}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">{t('totalActivities')}</div>
            <div className="stat-value">{state.history.length}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
