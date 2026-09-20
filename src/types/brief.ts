export type Language = 0 | 1
export type Screen = 'start' | 'flow' | 'review' | 'brief'
export type AnswerValue = string | string[]
export type Answers = Record<string, AnswerValue>
export type QuestionType = 'text' | 'long' | 'tags' | 'scale' | 'cards'

export interface RichOption {
  t: string
  d?: string
  rec?: boolean
}

export type QuestionOption = string | RichOption

export interface Question {
  id: string
  type?: QuestionType
  t: string
  help: string
  ex?: string
  ph?: string
  hint?: string
  opts?: QuestionOption[]
  multi?: boolean
  max?: number
  cols?: number
  conditional?: (answers: Answers) => boolean
}

export interface Step {
  key: string
  label: string
  title: string
  intro: string
  questions: Question[]
}

export interface GuideItem {
  title: string
  explain: string
  example: string
}

export interface StepGuide {
  intro: string
  items: GuideItem[]
}

export interface ArchitectureItem {
  role: string
  pick: string
  why: string
}
