import type { Language } from '../../types/brief'
import './start-screen-style.css'

interface Props {
  language: Language
  onToggleLanguage: () => void
  onStart: () => void
  onDemo: () => void
}

export function StartScreen({ language, onToggleLanguage, onStart, onDemo }: Props) {
  const en = language === 1
  const steps = en
    ? [['01', 'Answer in plain words', 'One question per section, with examples and a way out when you are not sure.'], ['02', 'The flow adapts', 'Payments open payment questions. Irrelevant sections stay out of the way.'], ['03', 'Review the blueprint', 'Every answer is grouped and editable before export.'], ['04', 'Take the Markdown', 'A structured PROJECT_BRIEF.md, ready for the first sprint.']]
    : [['01', 'Responda em linguagem simples', 'Uma pergunta por seção, com exemplos e uma saída quando você não souber.'], ['02', 'O fluxo se adapta', 'Pagamentos abrem perguntas específicas. Seções irrelevantes ficam de fora.'], ['03', 'Revise o blueprint', 'Cada resposta fica agrupada e editável antes da exportação.'], ['04', 'Leve o Markdown', 'Um PROJECT_BRIEF.md estruturado, pronto para a primeira sprint.']]

  return (
    <main className="start-screen">
      <header className="start-screen__header">
        <div className="start-screen__brand">Brief Builder <span>v1.0</span></div>
        <button className="start-screen__language" onClick={onToggleLanguage}>{en ? 'EN' : 'PT'}</button>
      </header>
      <div className="start-screen__grid">
        <section className="start-screen__hero">
          <p className="start-screen__kicker">{en ? 'Project brief, without the jargon' : 'Briefing de projeto, sem jargão'}</p>
          <h1>{en ? 'Describe your website the way you talk about it. Get a developer-ready brief.' : 'Descreva seu site do jeito que você fala sobre ele. Receba um briefing pronto para o desenvolvedor.'}</h1>
          <p className="start-screen__intro">{en ? 'Fifteen short steps of plain questions. Every technical decision is translated into something you already know how to answer.' : 'Quinze etapas curtas de perguntas simples. Toda decisão técnica é traduzida para algo que você já sabe responder.'}</p>
          <div className="start-screen__actions">
            <button className="start-screen__primary" onClick={onStart}>{en ? 'Start a brief' : 'Começar um briefing'} <span aria-hidden="true">→</span></button>
            <button className="start-screen__secondary" onClick={onDemo}>{en ? 'See a filled example' : 'Ver exemplo preenchido'}</button>
          </div>
          <div className="start-screen__meta"><span>≈ 12 {en ? 'minutes' : 'minutos'}</span><span>Markdown</span><span>{en ? 'Saved on this device' : 'Salvo neste dispositivo'}</span></div>
        </section>
        <ol className="start-screen__steps">
          {steps.map(([number, title, description]) => (
            <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div></li>
          ))}
        </ol>
      </div>
    </main>
  )
}
