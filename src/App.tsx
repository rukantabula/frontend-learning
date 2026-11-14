import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

type LinkIcon =
  | { kind: 'image'; src: string; className: string }
  | { kind: 'sprite'; id: string }

type ResourceLink = {
  label: string
  href: string
  icon: LinkIcon
}

const DOC_LINKS: ResourceLink[] = [
  {
    label: 'Explore Vite',
    href: 'https://vite.dev/',
    icon: { kind: 'image', src: viteLogo, className: 'logo' },
  },
  {
    label: 'Learn more',
    href: 'https://react.dev/',
    icon: { kind: 'image', src: reactLogo, className: 'button-icon' },
  },
]

const SOCIAL_LINKS: ResourceLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/vitejs/vite',
    icon: { kind: 'sprite', id: 'github-icon' },
  },
  {
    label: 'Discord',
    href: 'https://chat.vite.dev/',
    icon: { kind: 'sprite', id: 'discord-icon' },
  },
  {
    label: 'X.com',
    href: 'https://x.com/vite_js',
    icon: { kind: 'sprite', id: 'x-icon' },
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/vite.dev',
    icon: { kind: 'sprite', id: 'bluesky-icon' },
  },
]

function SpriteIcon({ id, className }: { id: string; className: string }) {
  return (
    <svg className={className} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

function LinkIconView({ icon }: { icon: LinkIcon }) {
  if (icon.kind === 'image') {
    return <img className={icon.className} src={icon.src} alt="" />
  }
  return <SpriteIcon id={icon.id} className="button-icon" />
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((c) => c + 1)}
    >
      Count is {count}
    </button>
  )
}

function Hero() {
  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <Counter />
    </section>
  )
}

type LinkPanelProps = {
  id: string
  iconId: string
  title: string
  description: string
  links: ResourceLink[]
}

function LinkPanel({ id, iconId, title, description, links }: LinkPanelProps) {
  return (
    <div id={id}>
      <SpriteIcon id={iconId} className="icon" />
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <LinkIconView icon={link.icon} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <>
      <Hero />

      <div className="ticks"></div>

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

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
