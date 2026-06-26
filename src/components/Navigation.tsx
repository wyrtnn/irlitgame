import { useLanguage } from '../context/LanguageContext'

type Screen = 'home' | 'tasks' | 'profile'

export const Navigation = ({ currentScreen, onNavigate }: { currentScreen: Screen; onNavigate: (screen: Screen) => void }) => {
  const { t, language, setLanguage } = useLanguage()

  return (
    <nav className="navigation">
      <div className="nav-menu">
        <button
          className={`nav-button ${currentScreen === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          {t('home')}
        </button>
        <button
          className={`nav-button ${currentScreen === 'tasks' ? 'active' : ''}`}
          onClick={() => onNavigate('tasks')}
        >
          {t('tasks')}
        </button>
        <button
          className={`nav-button ${currentScreen === 'profile' ? 'active' : ''}`}
          onClick={() => onNavigate('profile')}
        >
          {t('profile')}
        </button>
      </div>

      <div className="nav-language">
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'ru' | 'en')}
        >
          <option value="ru">🇷🇺 Русский</option>
          <option value="en">🇬🇧 English</option>
        </select>
      </div>
    </nav>
  )
}
