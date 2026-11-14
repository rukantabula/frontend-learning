import { SpriteIcon } from '@/components/SpriteIcon'
import type { LinkIcon } from '../types'

export function LinkIconView({ icon }: { icon: LinkIcon }) {
  if (icon.kind === 'image') {
    return <img className={icon.className} src={icon.src} alt="" />
  }
  return <SpriteIcon id={icon.id} className={icon.className} />
}
