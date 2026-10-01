import type { Language } from '../../types/brief'
import './language-select-style.css'

interface Props {
  language: Language
  onChange: (language: Language) => void
}

export function LanguageSelect({ language, onChange }: Props) {
  return (
    <select
      className="language-select"
      aria-label={language === 1 ? 'Language' : 'Idioma'}
      value={language}
      onChange={(event) => onChange(event.currentTarget.value === '1' ? 1 : 0)}
    >
      <option value={0}>Português</option>
      <option value={1}>English</option>
    </select>
  )
}
