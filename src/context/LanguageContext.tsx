import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Language } from '../i18n'
import { translations } from '../i18n'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Сохраняем язык в localStorage, по умолчанию русский
  const [language, setLanguageSt] = useState<Language>(() => {
    const saved = localStorage.getItem('app-language')
    return (saved as Language) || 'ru'
  })

  const setLanguage = (lang: Language) => {
    setLanguageSt(lang)
    localStorage.setItem('app-language', lang)
  }

  // Функция перевода: берет ключ и возвращает строку на текущем языке
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
