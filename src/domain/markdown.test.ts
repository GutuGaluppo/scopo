import { describe, expect, it } from 'vitest'
import { generateMarkdown } from './markdown'

describe('generateMarkdown', () => {
  it('includes project name, goals and recommended stack', () => {
    const markdown = generateMarkdown({ name: 'Aurora', goals: ['Gerar leads|Generate leads'], freq: 'Raramente|Rarely' }, 0)
    expect(markdown).toContain('# Aurora')
    expect(markdown).toContain('- Gerar leads')
    expect(markdown).toContain('## Recommended Stack')
  })
})
