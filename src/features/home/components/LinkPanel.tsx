import { SpriteIcon } from '@/components/SpriteIcon'
import type { ResourceLink } from '../types'
import { LinkIconView } from './LinkIconView'

type LinkPanelProps = {
  id: string
  iconId: string
  title: string
  description: string
  links: readonly ResourceLink[]
}

export function LinkPanel({
  id,
  iconId,
  title,
  description,
  links,
}: LinkPanelProps) {
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
