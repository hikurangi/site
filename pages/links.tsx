import type { NextPage } from 'next'
import ExternalLink from '../components/ExternalLink'

const Links: NextPage = () => (
  <main className='main'>
    <h1>Links</h1>
    <ul>
      <li>
        Discography on: <ExternalLink href=''>Spotify</ExternalLink>,{' '}
        <ExternalLink href=''>Apple Music</ExternalLink>
      </li>
      <li>
        <ExternalLink href=''>Bandcamp</ExternalLink>
      </li>
      <li>
        <ExternalLink href=''>Soundcloud</ExternalLink>
      </li>
      <li>
        <ExternalLink href=''>Instagram</ExternalLink>
      </li>
      <li>
        <ExternalLink href=''>The article</ExternalLink>
      </li>
    </ul>
  </main>
)
export default Links
