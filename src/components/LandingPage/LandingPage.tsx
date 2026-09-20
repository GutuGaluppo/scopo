import { deliverables, howItWorks, plainWordsPoints } from '../../data/landing'
import { sampleAnswers } from '../../data/sample'
import { steps } from '../../data/steps'
import { translate } from '../../domain/i18n'
import { generateMarkdown } from '../../domain/markdown'
import type { Language } from '../../types/brief'
import './landing-page-style.css'

interface Props {
  language: Language
  onToggleLanguage: () => void
  onStart: () => void
  onDemo: () => void
}

const PREVIEW_LINES = 22

export function LandingPage({ language, onToggleLanguage, onStart, onDemo }: Props) {
  const en = language === 1
  const previewText = generateMarkdown(sampleAnswers, language).split('\n').slice(0, PREVIEW_LINES).join('\n')

  return (
    <div className="landing">
      <header className="landing__header">
        <div className="landing__brand">Brief Builder <span>v1.0</span></div>
        <nav className="landing__nav" aria-label={en ? 'Page sections' : 'Seções da página'}>
          <a href="#how">{en ? 'How it works' : 'Como funciona'}</a>
          <a href="#plain-words">{en ? 'No jargon' : 'Sem jargão'}</a>
          <a href="#result">{en ? 'What you get' : 'O que você recebe'}</a>
        </nav>
        <div className="landing__header-actions">
          <button className="landing__language" onClick={onToggleLanguage}>{en ? 'EN' : 'PT'}</button>
          <button className="landing__header-cta" onClick={onStart}>{en ? 'Start' : 'Começar'}</button>
        </div>
      </header>

      <main>
        <section className="landing__hero">
          <div className="landing__hero-copy">
            <p className="landing__kicker">{en ? 'Project brief, without the jargon' : 'Briefing de projeto, sem jargão'}</p>
            <h1>{en ? 'Describe your website the way you talk about it. Get a developer-ready brief.' : 'Descreva seu site do jeito que você fala sobre ele. Receba um briefing pronto para o desenvolvedor.'}</h1>
            <p className="landing__lead">{en ? `${steps.length} short steps of plain questions. Every technical decision is translated into something you already know how to answer.` : `${steps.length} etapas curtas de perguntas simples. Toda decisão técnica é traduzida para algo que você já sabe responder.`}</p>
            <div className="landing__actions">
              <button className="landing__primary" onClick={onStart}>{en ? 'Start a brief' : 'Começar um briefing'} <span aria-hidden="true">→</span></button>
              <button className="landing__secondary" onClick={onDemo}>{en ? 'See a filled example' : 'Ver exemplo preenchido'}</button>
            </div>
            <ul className="landing__meta">
              <li>≈ 12 {en ? 'minutes' : 'minutos'}</li>
              <li>{en ? 'No sign-up' : 'Sem cadastro'}</li>
              <li>{en ? 'Saved on this device' : 'Salvo neste dispositivo'}</li>
            </ul>
          </div>
          <figure className="landing__preview">
            <div className="landing__preview-bar"><span aria-hidden="true" /><strong>PROJECT_BRIEF.md</strong></div>
            <pre aria-hidden="true">{previewText}</pre>
            <figcaption>{en ? 'Excerpt of a brief generated from the example answers.' : 'Trecho de um briefing gerado a partir das respostas de exemplo.'}</figcaption>
          </figure>
        </section>

        <section id="how" className="landing__section">
          <div className="landing__section-head">
            <p className="landing__kicker">{en ? 'How it works' : 'Como funciona'}</p>
            <h2>{en ? 'From idea to brief in four moves' : 'Da ideia ao briefing em quatro movimentos'}</h2>
          </div>
          <ol className="landing__how">
            {howItWorks.map((item, index) => (
              <li key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><strong>{translate(item.title, language)}</strong><p>{translate(item.text, language)}</p></li>
            ))}
          </ol>
        </section>

        <section id="plain-words" className="landing__section landing__plain">
          <div className="landing__plain-copy">
            <p className="landing__kicker">{en ? 'Not technical?' : 'Sem conhecimento técnico?'}</p>
            <h2>{en ? 'Every step comes with an explanation in plain words.' : 'Cada etapa tem uma explicação em palavras simples.'}</h2>
            <p>{en ? 'Not sure what a CMS, SEO or hosting is? That is fine. Every step has a button that opens a window explaining what is being asked, and why, with an everyday example.' : 'Não sabe o que é CMS, SEO ou hospedagem? Tudo bem. Toda etapa tem um botão que abre uma janela explicando o que está sendo perguntado, e por quê, com um exemplo do dia a dia.'}</p>
            <ul>{plainWordsPoints.map((point) => <li key={point}>{translate(point, language)}</li>)}</ul>
          </div>
          <div className="landing__plain-demo" aria-hidden="true">
            <span className="landing__plain-button"><b>?</b>{en ? 'Explain this step in plain words' : 'Explicar esta etapa em palavras simples'}</span>
            <div className="landing__plain-card">
              <small>{en ? 'In plain words · Technology' : 'Em palavras simples · Tecnologia'}</small>
              <strong>{en ? 'Who will edit the content?' : 'Quem vai editar o conteúdo?'}</strong>
              <p>{en ? 'A CMS is the dashboard where text and photos are changed without touching code. Here you say who will use it.' : 'CMS é o painel onde se trocam textos e fotos sem mexer em código. Aqui você diz quem vai usá-lo.'}</p>
              <p className="landing__plain-example"><b>{en ? 'Example' : 'Exemplo'}</b>{en ? 'The receptionist updates opening hours in two clicks.' : 'A recepcionista atualiza o horário de atendimento em dois cliques.'}</p>
            </div>
          </div>
        </section>

        <section id="result" className="landing__section">
          <div className="landing__section-head">
            <p className="landing__kicker">{en ? 'What you get' : 'O que você recebe'}</p>
            <h2>{en ? 'A brief a developer can start from on day one' : 'Um briefing do qual o desenvolvedor pode partir no primeiro dia'}</h2>
          </div>
          <ul className="landing__deliverables">
            {deliverables.map((item) => <li key={item.title}><strong>{translate(item.title, language)}</strong><p>{translate(item.text, language)}</p></li>)}
          </ul>
        </section>

        <section className="landing__final">
          <h2>{en ? 'Ready to describe your website?' : 'Pronto para descrever seu site?'}</h2>
          <p>{en ? 'It takes about 12 minutes. Your progress is saved on this device.' : 'Leva cerca de 12 minutos. Seu progresso fica salvo neste dispositivo.'}</p>
          <button className="landing__primary" onClick={onStart}>{en ? 'Start a brief' : 'Começar um briefing'} <span aria-hidden="true">→</span></button>
        </section>
      </main>

      <footer className="landing__footer"><span>Brief Builder</span><span>{en ? 'Plain questions in. Developer-ready brief out.' : 'Perguntas simples entram. Briefing pronto sai.'}</span></footer>
    </div>
  )
}
