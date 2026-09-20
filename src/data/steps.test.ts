import { describe, expect, it } from 'vitest'
import { steps } from './steps'

const isBilingual = (value: string) => {
  const parts = value.split('|')
  return parts.length === 2 && parts.every((part) => part.trim().length > 0)
}

describe('input helper text', () => {
  const inputs = steps.flatMap((step) => step.questions).filter((question) => ['text', 'long', 'tags'].includes(question.type || ''))

  it('gives every free-form input a bilingual hint', () => {
    expect(inputs.length).toBeGreaterThan(0)
    for (const question of inputs) {
      expect(question.hint, `${question.id} hint`).toBeTruthy()
      expect(isBilingual(question.hint!), `${question.id} hint`).toBe(true)
    }
  })
})
