type LinkChildren = string | React.ReactElement

interface LinkProps {
  href: string
  children: LinkChildren
}

const ExternalLink = ({ href, children }: LinkProps) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
)

export default ExternalLink
