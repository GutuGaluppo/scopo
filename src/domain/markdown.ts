import type { Answers, Language } from '../types/brief'
import { recommendArchitecture } from './architecture'
import { formatAnswer, translate } from './i18n'

export function generateMarkdown(answers: Answers, language: Language): string {
  const fallback = language ? '_not specified_' : '_não informado_'
  const value = (key: string, defaultValue = fallback) => formatAnswer(answers[key], language, defaultValue)
  const list = (key: string) => {
    const items = answers[key]
    return Array.isArray(items) && items.length ? items.map((item) => `- ${translate(item, language)}`).join('\n') : `- ${fallback}`
  }
  const pages = Array.isArray(answers.pages) ? answers.pages.map((item) => translate(item, language)) : []
  const architecture = recommendArchitecture(answers, language)

  return [
    `# ${answers.name || 'Untitled Project'}`, '',
    '## Project Overview',
    `- Type: ${value('kind')}`,
    `- Existing site: ${value('existing')}${answers.url ? ` — ${answers.url}` : ''}`,
    `- Timeline: ${value('deadline')}`,
    `- Budget band: ${value('budget')}`, '',
    '## Goals', list('goals'), '', `**Primary conversion:** ${value('conversion')}`, '',
    '## Target Audience', String(answers.who || fallback), '',
    `- Reach: ${value('reach')}`, `- Languages: ${value('langs')}`, `- Primary device: ${value('device')}`, `- Technical familiarity: ${value('savvy')}`, '',
    '## Sitemap', pages.length ? pages.map((page) => `- /${page.toLowerCase().replace(/\s+/g, '-')}`).join('\n') : '- /home', '',
    '## UI / UX', `- Style: ${value('style')}`, `- Layout: ${value('layout')}`, `- Theme: ${value('theme')}`, `- Existing identity: ${value('identity')}`, `- References: ${value('refs')}`, `- Liked in references: ${value('refLikes')}`, '',
    '## Content Strategy', `- Content readiness: ${value('contentReady')}`, `- Written by: ${value('writer')}`, `- Tone of voice: ${value('tone')}`, `- Existing assets: ${value('assets')}`, '',
    '## Functional Requirements', list('features'), Array.isArray(answers.payMethods) && answers.payMethods.length ? `\n**Payments:** ${value('payMethods')}` : null, '',
    '## Data Model', `- Stored entities: ${value('stores')}`, `- Accounts: ${value('accounts')}`, `- Sign-in methods: ${value('authMethods')}`, `- Roles: ${value('roles')}`, '',
    '## Recommended Stack', architecture.map((item) => `- **${item.role}:** ${item.pick} — ${item.why}`).join('\n'), '',
    '## SEO Requirements', `- Priority: ${value('seoPriority')}`, `- Organic dependency: ${value('organic')}`, `- Keywords: ${value('keywords')}`, `- Competitors: ${value('competitors')}`, '- Baseline: semantic HTML, sitemap.xml, robots.txt, Open Graph, Schema.org markup', '',
    '## Accessibility', `- Target: ${value('a11y', 'WCAG 2.2 AA')}`, '- Keyboard operable, visible focus, labelled controls, reduced-motion support', '',
    '## Performance', `- Priority: ${value('perf', language ? 'High' : 'Alta')}`, '- Targets: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1', `- Media profile: ${value('media')}`, '',
    '## Privacy & Analytics', `- Personal data: ${value('personal')}`, `- Privacy requirements: ${value('privacy')}`, `- Analytics: ${value('tools', value('track'))}`, '',
    '## Infrastructure', `- Existing hosting: ${value('hosting')}`, `- Hosting priority: ${value('hostPriority')}`, `- Domain: ${value('domainName', value('domain'))}`, '',
    '## Quality Baseline', '- Responsive: 360px → 1920px', '- Accessibility audit against the target above before launch', '',
    '## Deliverables', '- Sitemap and wireframes', '- Design system and page designs', '- Implemented site with CMS access', '- Analytics, SEO and deployment setup', `- Handover documentation — maintained by: ${value('maintenance')}`, '',
    '## Roadmap', '1. Discovery and content inventory', '2. Sitemap, wireframes, design system', '3. Page design and review', '4. Build and integrations', '5. QA, accessibility and performance pass', '6. Launch and post-launch monitoring',
  ].filter((line) => line !== null).join('\n')
}
