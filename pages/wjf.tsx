import { NextPage } from 'next'
import ExternalLink from '../components/ExternalLink'
import mainStyleModule from '../styles/main.module.css'

const WJF: NextPage = () => (
  <main className={mainStyleModule.main}>
    {' '}
    <h1>WJF 2022</h1>
    <p>Click through to see me play this week.</p>
    <h2>Thursday</h2>
    <ul>
      <li>
        <ExternalLink href='https://www.facebook.com/events/739555610468854'>
          The Gilded Lily
        </ExternalLink>
        : the brilliant poisoned chalice
      </li>
    </ul>
    <h2>Friday</h2>
    <ul>
      <li>
        <ExternalLink href='https://www.facebook.com/events/801896107740651'>
          {"Callum Allardice's Cinematic Light Orchestra"}
        </ExternalLink>
        : filmic chiaroscuro
      </li>
    </ul>
    <h2>Saturday</h2>
    <ul>
      <li>
        <ExternalLink href='https://www.facebook.com/events/1526492837799634'>
          The Wellington City Shake Em On Downers - Festival Brunch
          Extravaganza!
        </ExternalLink>
        : loveable pests of the american songbook
      </li>
      <li>
        <ExternalLink href='https://www.facebook.com/events/3363519817215246'>
          Goldsmith Baynes
        </ExternalLink>
        : waiata reo Māori in improvised music
      </li>
      <li>
        <ExternalLink href='https://www.facebook.com/events/1322929671445462'>
          James Guilford Trio
        </ExternalLink>
        : midcentury avant garde meets jack dejohnette stank
      </li>
    </ul>
    <h2>Sunday</h2>
    <ul>
      <li>
        <ExternalLink href='https://www.facebook.com/events/486689293342461'>
          The Sunday Mixtape featuring Seth Boy
        </ExternalLink>
        : from filipino independence to the present-day immigrant experience
      </li>
      <li>
        <ExternalLink href='https://www.facebook.com/events/816428743137867'>
          Sanctuary / Jake Baxendale & Jasmine Lovell-Smith
        </ExternalLink>
        : bandcamp-sanctioned Third Stream improvisations
      </li>
      <li>
        <ExternalLink href='https://www.facebook.com/events/1281819272596504'>
          Hashigo Late Session with Louis Thompson-Munn
        </ExternalLink>
        {
          ': we will play "Another You" and there will maybe be six fucking tenor solos.'
        }
      </li>
    </ul>
  </main>
)
export default WJF
