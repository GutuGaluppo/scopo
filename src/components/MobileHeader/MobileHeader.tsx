import { allNavigationSteps } from '../../data/steps'
import { translate } from '../../domain/i18n'
import type { Language, Screen } from '../../types/brief'
import './mobile-header-style.css'

interface Props { language: Language; screen: Screen; currentStep: number; progress: number; onBack: () => void; onToggleLanguage: () => void }

export function MobileHeader({ language, screen, currentStep, progress, onBack, onToggleLanguage }: Props) {
  const en = language === 1
  const label = screen === 'flow' ? `${translate(allNavigationSteps[currentStep].label, language)} · ${currentStep + 1}/${allNavigationSteps.length}` : screen === 'review' ? `${translate(allNavigationSteps.at(-1)!.label, language)} · ${allNavigationSteps.length}/${allNavigationSteps.length}` : 'PROJECT_BRIEF.md'
  return <header className="mobile-header">
    <div className="mobile-header__row">
      <button onClick={onBack} aria-label={en ? 'Back' : 'Voltar'}>←</button>
      <strong>{label}</strong>
      <button className="mobile-header__language" onClick={onToggleLanguage}>{en ? 'EN' : 'PT'}</button>
    </div>
    <div className="mobile-header__progress"><span style={{ width: `${screen === 'review' || screen === 'brief' ? 100 : progress}%` }} /></div>
  </header>
}
