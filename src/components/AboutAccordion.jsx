import listAbout from '../datas/about.json'
import Accordion from './Accordion'

function AboutAccordion() {
  return (
    <section>
      <ul className="container">
          {listAbout.map(({ id, heading, content }) => (
            <Accordion key={id} heading={heading} content={content} />
          ))}
      </ul>
    </section>
  )
}

export default AboutAccordion