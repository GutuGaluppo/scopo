import { useEffect, useMemo, useReducer } from 'react'
import { sampleAnswers } from '../data/sample'
import { steps } from '../data/steps'
import type { Answers, AnswerValue, Language, Screen } from '../types/brief'

const STORAGE_KEY = 'brief-builder:v1'

interface State {
  language: Language
  screen: Screen
  step: number
  answers: Answers
}

type Action =
  | { type: 'toggle-language' }
  | { type: 'start' }
  | { type: 'demo' }
  | { type: 'home' }
  | { type: 'go'; step: number }
  | { type: 'review' }
  | { type: 'brief' }
  | { type: 'set-answer'; id: string; value: AnswerValue }
  | { type: 'toggle-answer'; id: string; value: string; max?: number }

const initialState: State = { language: 0, screen: 'start', step: 0, answers: {} }

function restoreState(): State {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return initialState
    const parsed = JSON.parse(saved) as Partial<State>
    return {
      language: parsed.language === 1 ? 1 : 0,
      screen: ['start', 'flow', 'review', 'brief'].includes(parsed.screen || '') ? parsed.screen as Screen : 'start',
      step: Math.max(0, Math.min(Number(parsed.step) || 0, steps.length - 1)),
      answers: parsed.answers && typeof parsed.answers === 'object' ? parsed.answers : {},
    }
  } catch {
    return initialState
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggle-language': return { ...state, language: state.language === 0 ? 1 : 0 }
    case 'start': return { ...state, screen: 'flow', step: 0, answers: {} }
    case 'demo': return { ...state, screen: 'review', answers: sampleAnswers }
    case 'home': return initialState
    case 'go': return { ...state, screen: 'flow', step: Math.max(0, Math.min(action.step, steps.length - 1)) }
    case 'review': return { ...state, screen: 'review' }
    case 'brief': return { ...state, screen: 'brief' }
    case 'set-answer': return { ...state, answers: { ...state.answers, [action.id]: action.value } }
    case 'toggle-answer': {
      const current = Array.isArray(state.answers[action.id]) ? state.answers[action.id] as string[] : []
      let next = current.includes(action.value) ? current.filter((item) => item !== action.value) : [...current, action.value]
      if (action.max && next.length > action.max) next = next.slice(-action.max)
      return { ...state, answers: { ...state.answers, [action.id]: next } }
    }
  }
}

export function useBriefBuilder() {
  const [state, dispatch] = useReducer(reducer, undefined, restoreState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    document.documentElement.lang = state.language ? 'en' : 'pt-BR'
  }, [state])

  const visibleQuestions = useMemo(
    () => steps[state.step].questions.filter((question) => !question.conditional || question.conditional(state.answers)),
    [state.answers, state.step],
  )

  const completedSteps = useMemo(() => steps.filter((step) =>
    step.questions.filter((question) => !question.conditional || question.conditional(state.answers)).some((question) => {
      const answer = state.answers[question.id]
      return Array.isArray(answer) ? answer.length > 0 : Boolean(answer)
    }),
  ).length, [state.answers])

  const progress = Math.round((completedSteps / steps.length) * 100)

  const next = () => state.step >= steps.length - 1 ? dispatch({ type: 'review' }) : dispatch({ type: 'go', step: state.step + 1 })
  const back = () => {
    if (state.screen === 'brief') dispatch({ type: 'review' })
    else if (state.screen === 'review') dispatch({ type: 'go', step: steps.length - 1 })
    else if (state.step === 0) dispatch({ type: 'home' })
    else dispatch({ type: 'go', step: state.step - 1 })
  }

  return {
    ...state,
    visibleQuestions,
    progress,
    completedSteps,
    toggleLanguage: () => dispatch({ type: 'toggle-language' }),
    start: () => dispatch({ type: 'start' }),
    demo: () => dispatch({ type: 'demo' }),
    home: () => dispatch({ type: 'home' }),
    go: (step: number) => dispatch({ type: 'go', step }),
    next,
    back,
    review: () => dispatch({ type: 'review' }),
    showBrief: () => dispatch({ type: 'brief' }),
    setAnswer: (id: string, value: AnswerValue) => dispatch({ type: 'set-answer', id, value }),
    toggleAnswer: (id: string, value: string, max?: number) => dispatch({ type: 'toggle-answer', id, value, max }),
  }
}
