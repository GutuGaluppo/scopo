import { describe, expect, it } from 'vitest'
import { recommendArchitecture } from './architecture'

describe('recommendArchitecture', () => {
  it('recommends Astro for infrequently changing static content', () => {
    const result = recommendArchitecture({ freq: 'Raramente|Rarely', accounts: 'Não|No', stores: ['Nada dinâmico|Nothing dynamic'] }, 0)
    expect(result.find((item) => item.role === 'Frontend')?.pick).toBe('Astro')
    expect(result.find((item) => item.role === 'Database')?.pick).toBe('Sem banco de dados')
  })

  it('honours an explicit technology preference', () => {
    const result = recommendArchitecture({ stack: 'React|React' }, 1)
    expect(result.find((item) => item.role === 'Frontend')?.pick).toBe('React')
  })
})
