import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: "Jean Dupont",
    role: "Responsable Technique",
    message: "Solutum a modernisé notre chaîne de production avec professionnalisme.",
  },
  {
    name: "Aïcha Traoré",
    role: "Directrice Industrielle",
    message: "Une équipe sérieuse et engagée, je recommande vivement leurs services.",
  },
  {
    name: "M. Essomba",
    role: "Chef de projet",
    message: "Solutum a dépassé nos attentes sur le projet d#&39;automatisation.",
  },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const next = () => setIndex((index + 1) % testimonials.length)
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section py-6 has-text-centered">
      <div className="container" >
        <h2 className="title is-3 mb-4">Ce que disent nos clients</h2>
        <div className="container" >
          <p className="is-size-9 has-text-grey-dark">"{testimonials[index].message}"</p>
          <p className="mt-4 has-text-weight-bold">{testimonials[index].name}</p>
          <p className="is-size-7 has-text-grey">{testimonials[index].role}</p>
        </div>

        
      </div>
    </section>
  )
}
