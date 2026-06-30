import './App.css'
import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { useUserProgress } from './hooks/useUserProgress'
import { Navigation } from './components/Navigation'
import { HomeScreen } from './screens/HomeScreen'
import { TasksScreen } from './screens/TasksScreen'
import { ProfileScreen } from './screens/ProfileScreen'

type Screen = 'home' | 'tasks' | 'profile'

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')
  // Хук управляет прогрессом, историей и логикой применения реальных действий
  const { state, applyActivity, resetProgress } = useUserProgress()

  return (
    <div className="app-shell">
      <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />

      <main className="app-main">
        {currentScreen === 'home' && <HomeScreen state={state} />}
        {currentScreen === 'tasks' && <TasksScreen state={state} onApplyActivity={applyActivity} />}
        {currentScreen === 'profile' && <ProfileScreen state={state} resetProgress={resetProgress} />}
      </main>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
