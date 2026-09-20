import { describe, expect, it } from 'vitest'
import { guides } from './guides'
import { steps } from './steps'

const isBilingual = (value: string) => {
  const parts = value.split('|')
  return parts.length === 2 && parts.every((part) => part.trim().length > 0)
}

describe('step guides', () => {
  it('has a guide for every step and no orphan guides', () => {
    expect(Object.keys(guides).sort()).toEqual(steps.map((step) => step.key).sort())
  })

  it('has at least one item per guide, all written in both languages', () => {
    for (const [key, guide] of Object.entries(guides)) {
      expect(isBilingual(guide.intro), `${key}.intro`).toBe(true)
      expect(guide.items.length, `${key} items`).toBeGreaterThan(0)
      for (const item of guide.items) {
        expect(isBilingual(item.title), `${key}: ${item.title}`).toBe(true)
        expect(isBilingual(item.explain), `${key}: ${item.title} explain`).toBe(true)
        expect(isBilingual(item.example), `${key}: ${item.title} example`).toBe(true)
      }
    }
  })
})
