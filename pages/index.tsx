import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'

type LinkChildren = string | React.ReactElement
interface LinkProps {
  href: string
  children: LinkChildren
}

const Link = ({ href, children }: LinkProps) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
)

const email = 'hikurangi@gmail.com'

const Home: NextPage = () => (
  <main className={styles.main}>
    <div className={styles.wrapper}>
      <p className={styles.primaryText}>
        Hikurangi Schaverien-Kaa{' '}
        <Link href='https://nzmusician.co.nz/features/get-yer-kit-off-hikurangi-schaverien-kaa/'>
          beats the heck out of the drums
        </Link>{' '}
        and <Link href='https://github.com/hikurangi'>writes clean code</Link>.
        <br />
        He{"'"}s mostly based in{' '}
        <Link href='https://en.wikipedia.org/wiki/Te_Whanganui-a-Tara'>
          Te Whanganui-a-Tara
        </Link>
        , Aotearoa.
        <br />
        You can reach him via <Link href={`mailto:${email}`}>
          email
        </Link> or <Link href='https://instagram.com/ignarukih'>on</Link>{' '}
        <Link href='https://soundcloud.com/ignarukih'>the</Link>{' '}
        <Link href='https://www.twitter.com/ignarukih/'>socials</Link>.
      </p>
    </div>
  </main>
)

export default Home
