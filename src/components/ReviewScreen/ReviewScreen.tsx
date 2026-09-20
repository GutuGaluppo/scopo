import { recommendArchitecture } from '../../domain/architecture'
import { buildReviewGroups } from '../../domain/review'
import type { Answers, Language } from '../../types/brief'
import './review-screen-style.css'

interface Props { language: Language; answers: Answers; onEdit: (step: number) => void; onGenerate: () => void; onBack: () => void }

export function ReviewScreen({ language, answers, onEdit, onGenerate, onBack }: Props) {
  const en = language === 1
  const groups = buildReviewGroups(answers, language)
  const architecture = recommendArchitecture(answers, language)
  return <main className="review-screen">
    <div className="review-screen__inner">
      <p className="review-screen__kicker">{en ? 'Step 16 of 16 · Review' : 'Etapa 16 de 16 · Revisão'}</p>
      <h1>{en ? 'Your Website Blueprint' : 'Blueprint do seu website'}</h1>
      <p className="review-screen__intro">{en ? 'Everything you told us, grouped. Edit anything before generating the brief.' : 'Tudo o que você respondeu, agrupado. Edite o que quiser antes de gerar o briefing.'}</p>
      {groups.length ? <div className="review-screen__cards">{groups.map((group) => <article key={group.title}>
        <header><span>{group.title}</span><button onClick={() => onEdit(group.step)}>{en ? 'Edit' : 'Editar'}</button></header>
        {group.rows.map((row) => <div className="review-screen__row" key={row.label}><small>{row.label}</small><p>{row.value}</p></div>)}
      </article>)}</div> : <div className="review-screen__empty">{en ? 'No answers yet. Go back and start your brief.' : 'Ainda não há respostas. Volte e comece seu briefing.'}</div>}
      <section className="review-screen__architecture">
        <h2>{en ? 'Recommended Architecture' : 'Arquitetura recomendada'}</h2>
        <p>{en ? 'Derived from your answers. These are suggestions, not irreversible decisions.' : 'Derivada das suas respostas. São sugestões, não decisões irreversíveis.'}</p>
        <div>{architecture.map((item) => <article key={item.role}><small>{item.role}</small><strong>{item.pick}</strong><p>{item.why}</p></article>)}</div>
      </section>
      <div className="review-screen__actions">
        <button className="review-screen__generate" onClick={onGenerate}>{en ? 'Generate Project Brief' : 'Gerar briefing do projeto'} <span aria-hidden="true">→</span></button>
        <button className="review-screen__back" onClick={onBack}>{en ? 'Back' : 'Voltar'}</button>
      </div>
    </div>
  </main>
}
