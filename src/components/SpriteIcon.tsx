type SpriteIconProps = {
  id: string
  className: string
}

export function SpriteIcon({ id, className }: SpriteIconProps) {
  return (
    <svg className={className} role="presentation" aria-hidden="true">
      <use href={`${import.meta.env.BASE_URL}icons.svg#${id}`}></use>
    </svg>
  )
}
