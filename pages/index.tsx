import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import '../styles/Home.module.css'

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

const inlineStyles = {
  home: { margin: '100px 60px 200px' },
  mainText: {
    fontSize: '48px',
  },
}

const email = 'hikurangi@gmail.com'
const bodyText = [
  'Hikurangi Schaverien-Kaa ',
  <Link
    key={1}
    href='https://nzmusician.co.nz/features/get-yer-kit-off-hikurangi-schaverien-kaa/'>
    beats the heck out of the drums
  </Link>,
  ' and ',
  <Link key={3} href='https://github.com/hikurangi'>
    writes clean code
  </Link>,
  ". He's mostly based in Wellington, Aotearoa (NZ). You can reach him via ",
  <Link key={4} href={`mailto:${email}`}>
    <em>{email}</em>
  </Link>,
  ' or find him ',
  <Link key={6} href='https://instagram.com/ignarukih'>
    on
  </Link>,
  ' ',
  <Link key={7} href='https://soundcloud.com/ignarukih'>
    the
  </Link>,
  ' ',
  <Link key={8} href='https://www.linkedin.com/in/ignarukih/'>
    socials
  </Link>,
  '.',
]
const Home: NextPage = () => (
  <main style={inlineStyles.home}>
    {' '}
    <p style={inlineStyles.mainText}>{bodyText}</p>
  </main>
)

export default Home
