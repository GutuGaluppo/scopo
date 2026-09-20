import type { Answers, Language } from '../types/brief'
import { formatAnswer } from './i18n'

export interface ReviewRow { label: string; value: string }
export interface ReviewGroup { title: string; step: number; rows: ReviewRow[] }

export function buildReviewGroups(answers: Answers, language: Language): ReviewGroup[] {
  const group = (title: string, step: number, rows: Array<[string, string]>) => ({
    title,
    step,
    rows: rows.filter(([, value]) => value !== '—').map(([label, value]) => ({ label, value })),
  })
  const value = (key: string) => formatAnswer(answers[key], language)
  const en = language === 1

  return [
    group(en ? 'Project' : 'Projeto', 0, [[en ? 'Name' : 'Nome', value('name')], [en ? 'Type' : 'Tipo', value('kind')], [en ? 'Existing site' : 'Site atual', value('existing')]]),
    group(en ? 'Goals' : 'Objetivos', 1, [[en ? 'Objectives' : 'Objetivos', value('goals')], [en ? 'Main conversion' : 'Conversão', value('conversion')]]),
    group(en ? 'Audience' : 'Público', 2, [[en ? 'Who' : 'Quem', value('who')], [en ? 'Reach' : 'Alcance', value('reach')], [en ? 'Languages' : 'Idiomas', value('langs')], [en ? 'Device' : 'Dispositivo', value('device')]]),
    group(en ? 'Content' : 'Conteúdo', 3, [[en ? 'Readiness' : 'Situação', value('contentReady')], [en ? 'Tone' : 'Tom', value('tone')], [en ? 'Assets' : 'Materiais', value('assets')], [en ? 'Pages' : 'Páginas', value('pages')]]),
    group('UI / UX', 4, [[en ? 'Style' : 'Estilo', value('style')], ['Layout', value('layout')], [en ? 'Theme' : 'Tema', value('theme')]]),
    group(en ? 'Features' : 'Funcionalidades', 5, [[en ? 'Selected' : 'Selecionadas', value('features')], [en ? 'Payments' : 'Pagamentos', value('payMethods')]]),
    group(en ? 'Data' : 'Dados', 6, [[en ? 'Stored' : 'Armazenado', value('stores')], [en ? 'Accounts' : 'Contas', value('accounts')], [en ? 'Roles' : 'Perfis', value('roles')]]),
    group('SEO', 8, [[en ? 'Priority' : 'Prioridade', value('seoPriority')], [en ? 'Keywords' : 'Palavras-chave', value('keywords')]]),
    group(en ? 'Accessibility' : 'Acessibilidade', 9, [[en ? 'Target' : 'Meta', value('a11y')]]),
    group('Performance', 10, [[en ? 'Priority' : 'Prioridade', value('perf')], [en ? 'Media' : 'Mídia', value('media')]]),
    group(en ? 'Infrastructure' : 'Infraestrutura', 13, [[en ? 'Hosting' : 'Hospedagem', value('hosting')], [en ? 'Domain' : 'Domínio', value('domain')], [en ? 'Launch' : 'Lançamento', value('deadline')]]),
  ].filter((item) => item.rows.length > 0)
}
