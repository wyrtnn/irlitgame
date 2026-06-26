import type { ProgressState } from '../models/userProgress'

// Форматируем карточку для каждого статуса. Карточка создана для быстрой оценки прогресса.
const formatStat = (label: string, value: number) => (
  <div className="stat-card">
    <div className="stat-label">{label}</div>
    <div className="stat-value">{value}</div>
  </div>
)

export const Dashboard = ({ state }: { state: ProgressState }) => {
  return (
    <section className="dashboard-section">
      <h2>Прогресс</h2>
      <div className="stat-grid">
        {formatStat('Очки', state.points)}
        {formatStat('Сила', state.stats.strength ?? 0)}
        {formatStat('Выносливость', state.stats.endurance ?? 0)}
        {formatStat('Фокус', state.stats.focus ?? 0)}
        {formatStat('Устойчивость', state.stats.resilience ?? 0)}
      </div>
    </section>
  )
}
