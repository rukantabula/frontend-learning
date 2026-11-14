export type LinkIcon =
  | { kind: 'image'; src: string; className: string }
  | { kind: 'sprite'; id: string; className: string }

export type ResourceLink = {
  label: string
  href: string
  icon: LinkIcon
}
