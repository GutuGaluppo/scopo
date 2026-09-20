import { useState } from 'react'
import { guides } from '../../data/guides'
import { steps } from '../../data/steps'
import { translate } from '../../domain/i18n'
import type { Answers, AnswerValue, Language, Question } from '../../types/brief'
import { GuideModal } from '../GuideModal/GuideModal'
import { QuestionField } from '../QuestionField/QuestionField'
import './flow-screen-style.css'

interface Props {
  language: Language
  step: number
  answers: Answers
  questions: Question[]
  onSet: (id: string, value: AnswerValue) => void
  onToggle: (id: string, value: string, max?: number) => void
  onNext: () => void
  onBack: () => void
}

export function FlowScreen({ language, step, answers, questions, onSet, onToggle, onNext, onBack }: Props) {
  const en = language === 1
  const current = steps[step]
  const [guideOpen, setGuideOpen] = useState(false)
  return <main className="flow-screen">
    <div className="flow-screen__inner">
      <div className="flow-screen__heading-meta"><span>{translate(current.label, language)}</span><span>{en ? 'Step' : 'Etapa'} {step + 1}/{steps.length + 1}</span></div>
      <h1>{translate(current.title, language)}</h1>
      {current.intro && <p className="flow-screen__intro">{translate(current.intro, language)}</p>}
      <button className="flow-screen__help" onClick={() => setGuideOpen(true)} aria-haspopup="dialog"><span aria-hidden="true">?</span>{en ? 'Explain this step in plain words' : 'Explicar esta etapa em palavras simples'}</button>
      {questions.map((question) => <QuestionField key={question.id} question={question} value={answers[question.id]} language={language} onSet={(value) => onSet(question.id, value)} onToggle={(value, max) => onToggle(question.id, value, max)} />)}
      <div className="flow-screen__actions">
        <button className="flow-screen__next" onClick={onNext}>{step === steps.length - 1 ? (en ? 'Review' : 'Revisar') : (en ? 'Continue' : 'Continuar')} <span aria-hidden="true">→</span></button>
        <button className="flow-screen__back" onClick={onBack}>{en ? 'Back' : 'Voltar'}</button>
        <button className="flow-screen__skip" onClick={onNext}>{en ? 'Skip this step' : 'Pular esta etapa'}</button>
      </div>
    </div>
    <GuideModal open={guideOpen} language={language} kicker={`${en ? 'In plain words' : 'Em palavras simples'} · ${en ? 'Step' : 'Etapa'} ${step + 1}`} title={translate(current.title, language)} guide={guides[current.key]} onClose={() => setGuideOpen(false)} />
  </main>
}
