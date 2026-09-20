import { useEffect, useRef } from 'react'
import { translate } from '../../domain/i18n'
import type { Language, StepGuide } from '../../types/brief'
import './guide-modal-style.css'

interface Props {
  open: boolean
  language: Language
  kicker: string
  title: string
  guide: StepGuide
  onClose: () => void
}

export function GuideModal({ open, language, kicker, title, guide, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const en = language === 1

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return <dialog ref={dialogRef} className="guide-modal" aria-labelledby="guide-modal-title" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <div className="guide-modal__panel">
      <header className="guide-modal__header">
        <div>
          <p className="guide-modal__kicker">{kicker}</p>
          <h2 id="guide-modal-title">{title}</h2>
        </div>
        <button className="guide-modal__close" onClick={onClose} aria-label={en ? 'Close' : 'Fechar'}>×</button>
      </header>
      <div className="guide-modal__body">
        <p className="guide-modal__intro">{translate(guide.intro, language)}</p>
        <ul className="guide-modal__items">
          {guide.items.map((item) => <li key={item.title}>
            <h3>{translate(item.title, language)}</h3>
            <p>{translate(item.explain, language)}</p>
            <p className="guide-modal__example"><strong>{en ? 'Example' : 'Exemplo'}</strong>{translate(item.example, language)}</p>
          </li>)}
        </ul>
      </div>
      <footer className="guide-modal__footer">
        <button onClick={onClose}>{en ? 'Got it, back to the form' : 'Entendi, voltar ao formulário'}</button>
      </footer>
    </div>
  </dialog>
}
