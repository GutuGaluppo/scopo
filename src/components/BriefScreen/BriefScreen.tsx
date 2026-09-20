import { useState } from 'react'
import { generateMarkdown } from '../../domain/markdown'
import type { Answers, Language } from '../../types/brief'
import './brief-screen-style.css'

interface Props { language: Language; answers: Answers; onEdit: () => void; onHome: () => void }

export function BriefScreen({ language, answers, onEdit, onHome }: Props) {
  const [copied, setCopied] = useState(false)
  const en = language === 1
  const markdown = generateMarkdown(answers, language)
  const copy = async () => {
    await navigator.clipboard.writeText(markdown)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  const download = () => {
    const url = URL.createObjectURL(new Blob([markdown], { type: 'text/markdown' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'PROJECT_BRIEF.md'
    link.click()
    URL.revokeObjectURL(url)
  }
  return <main className="brief-screen">
    <div className="brief-screen__inner">
      <header className="brief-screen__header">
        <div><p>{en ? 'Ready to hand over' : 'Pronto para entregar'}</p><h1>PROJECT_BRIEF.md</h1></div>
        <div className="brief-screen__actions">
          <button className="brief-screen__copy" onClick={copy}>{copied ? (en ? 'Copied ✓' : 'Copiado ✓') : (en ? 'Copy Markdown' : 'Copiar Markdown')}</button>
          <button onClick={download}>{en ? 'Download .md' : 'Baixar .md'}</button>
          <button onClick={onEdit}>{en ? 'Edit answers' : 'Editar respostas'}</button>
          <button className="brief-screen__home" onClick={onHome}>{en ? 'Start over' : 'Recomeçar'}</button>
        </div>
      </header>
      <section className="brief-screen__document" aria-label="PROJECT_BRIEF.md">
        <div><span /><strong>PROJECT_BRIEF.md</strong><small>{markdown.split('\n').length} {en ? 'lines' : 'linhas'}</small></div>
        <pre>{markdown}</pre>
      </section>
    </div>
  </main>
}
