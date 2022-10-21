import type { NextPage } from 'next'
import ExternalLink from '../components/ExternalLink'
import styles from '../styles/layouts.module.css'
import mainStyleModule from '../styles/main.module.css'
const email = 'hikurangi@gmail.com'

const Home: NextPage = () => (
  <main className={mainStyleModule.main}>
    <div className={styles.wrapper}>
      <p className={styles.primaryText}>
        Hikurangi Schaverien-Kaa{' '}
        <ExternalLink href='https://nzmusician.co.nz/features/get-yer-kit-off-hikurangi-schaverien-kaa/'>
          beats the heck out of the drums
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href='https://github.com/hikurangi'>
          writes clean code
        </ExternalLink>
        .
        <br />
        He{"'"}s mostly based in{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Te_Whanganui-a-Tara'>
          Te Whanganui-a-Tara
        </ExternalLink>
        , Aotearoa.
        <br />
        You can reach him via{' '}
        <ExternalLink href={`mailto:${email}`}>email</ExternalLink> or{' '}
        <ExternalLink href='https://instagram.com/ignarukih'>on</ExternalLink>{' '}
        <ExternalLink href='https://soundcloud.com/ignarukih'>the</ExternalLink>{' '}
        <ExternalLink href='https://www.twitter.com/ignarukih/'>
          socials
        </ExternalLink>
        .
      </p>
    </div>
  </main>
)

export default Home
