import listAbout from '../datas/about.json'
import Accordion from './Accordion'

function AboutAccordion() {
  return (
    <div>
      <ul>
        {listAbout.map(({ id, heading, content }) => (
          <Accordion key={id} heading={heading} content={content} />
        ))}
      </ul>
    </div>
  )
}

export default AboutAccordion