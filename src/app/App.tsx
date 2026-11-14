import { Hero, NextSteps } from '@/features/home'
import './App.css'

function App() {
  return (
    <>
      <Hero />

      <div className="ticks"></div>

      <NextSteps />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
