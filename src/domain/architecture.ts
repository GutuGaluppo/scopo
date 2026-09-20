import type { Answers, ArchitectureItem, Language } from '../types/brief'
import { translate } from './i18n'

const selected = (answers: Answers, key: string, prefix: string) => {
  const value = answers[key]
  return Array.isArray(value) && value.some((item) => item.startsWith(prefix))
}

export function recommendArchitecture(answers: Answers, language: Language): ArchitectureItem[] {
  const kind = String(answers.kind || '').split('|')[0]
  const frequency = String(answers.freq || '').split('|')[0]
  const preference = String(answers.stack || '').split('|')[0]
  const dynamic = answers.accounts === 'Sim|Yes' || selected(answers, 'features', 'Pagamentos') || selected(answers, 'features', 'Área privada') || frequency === 'Muda para cada usuário'

  let frontend = 'Next.js'
  let frontendWhy = 'Renderização híbrida: páginas estáticas rápidas e áreas dinâmicas no mesmo projeto.|Hybrid rendering: fast static pages and dynamic areas in one project.'
  if (preference && preference !== 'Sem preferência') {
    frontend = preference
    frontendWhy = 'Sua preferência declarada.|Your stated preference.'
  } else if (kind === 'E-commerce') {
    frontend = 'Next.js + Shopify'
    frontendWhy = 'Catálogo e checkout prontos, vitrine sob seu controle.|Catalogue and checkout out of the box, storefront under your control.'
  } else if (!dynamic && ['Raramente', 'Algumas vezes por mês'].includes(frequency)) {
    frontend = 'Astro'
    frontendWhy = 'Conteúdo muda pouco: páginas pré-geradas entregam o melhor tempo de carregamento.|Content rarely changes: pre-generated pages give the best load times.'
  }

  const fixedContent = String(answers.cms || '').startsWith('Ninguém, conteúdo fixo')
  const needsDatabase = Array.isArray(answers.stores) && answers.stores.length > 0 && !selected(answers, 'stores', 'Nada dinâmico')

  const items = [
    { role: 'Frontend', pick: frontend, why: frontendWhy },
    { role: 'Styling', pick: 'CSS por componente', why: 'Estilos co-localizados, com tokens globais e sem dependência visual adicional.|Co-located styles, shared global tokens and no extra visual dependency.' },
    { role: 'CMS', pick: fixedContent ? 'Markdown no repositório' : 'Sanity', why: fixedContent ? 'Conteúdo fixo não justifica um CMS.|Fixed content does not justify a CMS.' : 'Edição sem conhecimento técnico, com previsualização.|Non-technical editing, with preview.' },
    { role: 'Database', pick: needsDatabase ? 'PostgreSQL' : 'Sem banco de dados|No database', why: needsDatabase ? 'Dados relacionais com integridade garantida.|Relational data with guaranteed integrity.' : 'Nada precisa ser guardado; menos custo e menos superfície de ataque.|Nothing needs storing; less cost and less attack surface.' },
    { role: 'Hosting', pick: 'Vercel', why: 'Deploy automático, CDN global, previews por branch.|Automatic deploys, global CDN and branch previews.' },
    { role: 'Analytics', pick: answers.track === 'Não|No' ? 'Nenhum|None' : 'Plausible', why: 'Métricas essenciais sem cookies e sem banner.|Essential metrics with no cookies and no banner.' },
  ]

  if (answers.accounts === 'Sim|Yes') {
    items.splice(4, 0, { role: 'Auth', pick: 'Auth.js', why: 'Login por email e provedores externos com sessões seguras.|Email and provider sign-in with secure sessions.' })
  }

  return items.map((item) => ({ ...item, pick: translate(item.pick, language), why: translate(item.why, language) }))
}
