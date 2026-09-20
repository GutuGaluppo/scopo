import { allNavigationSteps, steps } from '../../data/steps'
import { translate } from '../../domain/i18n'
import type { Answers, Language, Screen } from '../../types/brief'
import './sidebar-style.css'

interface Props {
  language: Language
  screen: Screen
  currentStep: number
  answers: Answers
  progress: number
  onGo: (step: number) => void
  onToggleLanguage: () => void
  onHome: () => void
}

export function Sidebar({ language, screen, currentStep, answers, progress, onGo, onToggleLanguage, onHome }: Props) {
  const en = language === 1
  const isComplete = (index: number) => index < steps.length && steps[index].questions.some((question) => {
    const answer = answers[question.id]
    return Array.isArray(answer) ? answer.length > 0 : Boolean(answer)
  })
  return (
    <aside className="sidebar">
      <div className="sidebar__summary">
        <div className="sidebar__brand">Brief Builder</div>
        <div className="sidebar__progress-label"><span>{en ? 'Progress' : 'Progresso'}</span><strong>{progress}%</strong></div>
        <div className="sidebar__progress" role="progressbar" aria-label={en ? 'Brief progress' : 'Progresso do briefing'} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${progress}%` }} /></div>
      </div>
      <nav className="sidebar__nav" aria-label={en ? 'Brief steps' : 'Etapas do briefing'}>
        {allNavigationSteps.map((step, index) => {
          const active = screen === 'flow' ? index === currentStep : index === steps.length
          return <button key={step.key} className={active ? 'sidebar__item sidebar__item--active' : 'sidebar__item'} onClick={() => index < steps.length ? onGo(index) : undefined} disabled={index === steps.length && screen === 'flow'} aria-current={active ? 'step' : undefined}>
            <span className="sidebar__number">{String(index + 1).padStart(2, '0')}</span>
            <span>{translate(step.label, language)}</span>
            <span className={isComplete(index) ? 'sidebar__tick sidebar__tick--visible' : 'sidebar__tick'} aria-hidden="true">✓</span>
          </button>
        })}
      </nav>
      <footer className="sidebar__footer">
        <button onClick={onToggleLanguage}>{en ? 'EN' : 'PT'}</button>
        <button className="sidebar__restart" onClick={onHome}>{en ? 'Start over' : 'Recomeçar'}</button>
      </footer>
    </aside>
  )
}
