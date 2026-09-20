import { BriefScreen } from './components/BriefScreen/BriefScreen'
import { FlowScreen } from './components/FlowScreen/FlowScreen'
import { MobileHeader } from './components/MobileHeader/MobileHeader'
import { ReviewScreen } from './components/ReviewScreen/ReviewScreen'
import { Sidebar } from './components/Sidebar/Sidebar'
import { StartScreen } from './components/StartScreen/StartScreen'
import { useBriefBuilder } from './hooks/useBriefBuilder'
import './app-style.css'

export default function App() {
  const brief = useBriefBuilder()
  if (brief.screen === 'start') return <StartScreen language={brief.language} onToggleLanguage={brief.toggleLanguage} onStart={brief.start} onDemo={brief.demo} />

  return <div className="app-shell">
    <Sidebar language={brief.language} screen={brief.screen} currentStep={brief.step} answers={brief.answers} progress={brief.progress} onGo={brief.go} onToggleLanguage={brief.toggleLanguage} onHome={brief.home} />
    <div className="app-shell__content">
      <MobileHeader language={brief.language} screen={brief.screen} currentStep={brief.step} progress={brief.progress} onBack={brief.back} onToggleLanguage={brief.toggleLanguage} />
      {brief.screen === 'flow' && <FlowScreen language={brief.language} step={brief.step} answers={brief.answers} questions={brief.visibleQuestions} onSet={brief.setAnswer} onToggle={brief.toggleAnswer} onNext={brief.next} onBack={brief.back} />}
      {brief.screen === 'review' && <ReviewScreen language={brief.language} answers={brief.answers} onEdit={brief.go} onGenerate={brief.showBrief} onBack={brief.back} />}
      {brief.screen === 'brief' && <BriefScreen language={brief.language} answers={brief.answers} onEdit={brief.review} onHome={brief.home} />}
    </div>
  </div>
}
