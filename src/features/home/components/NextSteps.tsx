import { DOC_LINKS, SOCIAL_LINKS } from '../constants'
import { LinkPanel } from './LinkPanel'
import './NextSteps.css'

export function NextSteps() {
  return (
    <section id="next-steps">
      <LinkPanel
        id="docs"
        iconId="documentation-icon"
        title="Documentation"
        description="Your questions, answered"
        links={DOC_LINKS}
      />
      <LinkPanel
        id="social"
        iconId="social-icon"
        title="Connect with us"
        description="Join the Vite community"
        links={SOCIAL_LINKS}
      />
    </section>
  )
}
