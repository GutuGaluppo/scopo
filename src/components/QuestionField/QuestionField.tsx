import { useState } from 'react'
import { translate } from '../../domain/i18n'
import type { AnswerValue, Language, Question, RichOption } from '../../types/brief'
import './question-field-style.css'

interface Props {
  question: Question
  value?: AnswerValue
  language: Language
  onSet: (value: AnswerValue) => void
  onToggle: (value: string, max?: number) => void
}

export function QuestionField({ question, value, language, onSet, onToggle }: Props) {
  const [draft, setDraft] = useState('')
  const type = question.type || 'cards'
  const en = language === 1
  const hintId = question.hint ? `hint-${question.id}` : undefined
  const inputProps = { 'aria-labelledby': `question-${question.id}`, 'aria-describedby': hintId }
  const selected = (option: string) => question.multi ? Array.isArray(value) && value.includes(option) : value === option
  const addTag = () => {
    const tag = draft.trim()
    if (!tag) return
    const current = Array.isArray(value) ? value : []
    if (!current.includes(tag)) onSet([...current, tag])
    setDraft('')
  }

  return <section className="question-field" aria-labelledby={`question-${question.id}`}>
    {question.conditional && <span className="question-field__conditional">{en ? 'Because of your previous answer' : 'Por causa da sua resposta anterior'}</span>}
    <h2 id={`question-${question.id}`}>{translate(question.t, language)}</h2>
    {question.help && <p className="question-field__help">{translate(question.help, language)}</p>}
    {question.ex && <p className="question-field__example">{translate(question.ex, language)}</p>}

    {type === 'text' && <input {...inputProps} className="question-field__input" value={typeof value === 'string' ? value : ''} onChange={(event) => onSet(event.target.value)} placeholder={question.ph} />}
    {type === 'long' && <textarea {...inputProps} className="question-field__input question-field__textarea" rows={4} value={typeof value === 'string' ? value : ''} onChange={(event) => onSet(event.target.value)} placeholder={question.ph} />}
    {type === 'tags' && <div className="question-field__tags">
      <div className="question-field__tag-list">{(Array.isArray(value) ? value : []).map((tag) => <span key={tag}>{tag}<button onClick={() => onSet((value as string[]).filter((item) => item !== tag))} aria-label={`${en ? 'Remove' : 'Remover'} ${tag}`}>×</button></span>)}</div>
      <input {...inputProps} className="question-field__input" value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); addTag() } }} onBlur={addTag} placeholder={question.ph} />
    </div>}
    {question.hint && type !== 'cards' && type !== 'scale' && <p id={hintId} className="question-field__hint"><span aria-hidden="true">i</span>{translate(question.hint, language)}</p>}
    {(type === 'cards' || type === 'scale') && <div className={`question-field__options question-field__options--${type} question-field__options--cols-${question.cols || 3}`}>
      {(question.opts || []).map((rawOption) => {
        const option = typeof rawOption === 'string' ? { t: rawOption } : rawOption as RichOption
        const isSelected = selected(option.t)
        const order = question.multi && Array.isArray(value) ? value.indexOf(option.t) + 1 : 0
        return <button key={option.t} className={`${isSelected ? 'question-field__option question-field__option--selected' : 'question-field__option'}${option.rec ? ' question-field__option--recommend' : ''}`} onClick={() => question.multi ? onToggle(option.t, question.max) : onSet(option.t)} aria-pressed={isSelected}>
          <span className={question.multi ? 'question-field__mark question-field__mark--square' : 'question-field__mark'}>{question.multi ? order || '' : isSelected ? '●' : ''}</span>
          <span><strong>{translate(option.t, language)}</strong>{option.d && <small>{translate(option.d, language)}</small>}</span>
        </button>
      })}
    </div>}
    {question.max && <p className="question-field__limit">{en ? `Up to ${question.max} — a new choice replaces the oldest.` : `Até ${question.max} — uma nova escolha substitui a mais antiga.`}</p>}
  </section>
}
