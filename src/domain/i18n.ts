import type { AnswerValue, Language } from '../types/brief'

export function translate(value: string, language: Language): string {
  const parts = String(value ?? '').split('|')
  return parts[language] || parts[0] || ''
}

export function formatAnswer(value: AnswerValue | undefined, language: Language, fallback = '—'): string {
  if (Array.isArray(value)) return value.length ? value.map((item) => translate(item, language)).join(' · ') : fallback
  return value ? translate(value, language) : fallback
}
