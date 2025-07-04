import React from 'react'
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Jahre Erfahrung',
    count: 3,
    cls: "plus",
  },
  {
    id: 2,
    title: 'Abgeschlossene Projekte',
    count: 10,
    // cls: "10",
  },
  {
    id: 3,
    title: 'Kundenzufriedenheit',
    count: 100,
    cls: "percent",
  },
  {
    id: 4,
    title: 'Commits auf GitHub',
    count: 400 ,
    cls: "plus",
  }
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">Über Mich</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
            <div className="about-content-part wow fadeInUp delay-0-2s">
  <p>
    Mein Name ist Josef Leite. Nach meinem erfolgreichen Abschluss als Web Design Developer befinde ich mich aktuell im Bachelorstudium Web Development.
    Während meines Studiums habe ich meine Leidenschaft für Webdesign und -entwicklung entdeckt und seitdem zahlreiche private Projekte sowie erste Aufträge für Kunden umgesetzt.
    Mein Fokus liegt auf kreativen, modernen und funktionalen Lösungen, die individuell auf die Anforderungen meiner Auftraggeber zugeschnitten sind.
  </p>
</div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
