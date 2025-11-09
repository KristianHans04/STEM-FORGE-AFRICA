import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Lightbulb, Users, Globe, Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home',
  description: 'STEM FORGE AFRICA LTD - Parent organization of FIRST Global Team Kenya, empowering innovation through STEM education across Africa.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center african-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-accent-900/90 dark:from-primary-950/95 dark:via-primary-900/90 dark:to-accent-950/95"></div>
        
        <div className="container-custom relative z-10 text-center text-white animate-fade-in">
          <h1 className="mb-6 leading-tight">
            Empowering Innovation<br />
            Through <span className="text-accent-300">STEM Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            STEM FORGE AFRICA LTD is the driving force behind transformative STEM initiatives across Africa, with FIRST Global Team Kenya as our flagship program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/programs" className="btn-primary inline-flex items-center gap-2">
              Explore Our Programs <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/about" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-900">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              To establish a globally recognized platform that inspires and equips the next generation of African innovators, engineers, and leaders through cutting-edge STEM education and robotics programs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: 'Innovation',
                description: 'Fostering creative problem-solving and technological advancement across Africa.'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Collaboration',
                description: 'Building partnerships with organizations, sponsors, and communities worldwide.'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Global Impact',
                description: 'Representing Africa on the international stage through excellence in STEM.'
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: 'Excellence',
                description: 'Maintaining the highest standards in education, technology, and leadership.'
              }
            ].map((value, index) => (
              <div key={index} className="card text-center group hover:scale-105 transform transition-all">
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Program Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white dark:from-primary-900 dark:to-primary-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Flagship Program</h2>
              <h3 className="text-2xl md:text-3xl mb-4 text-accent-200">FIRST Global Team Kenya</h3>
              <p className="text-lg mb-6 text-gray-100">
                FIRST Global Team Kenya represents the pinnacle of youth innovation in Africa. Our team competes annually in the FIRST Global Challenge, bringing together talented students to solve real-world problems through robotics and STEM.
              </p>
              <Link href="https://fgckenya.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-accent-500 hover:text-white transition-all">
                Visit Team Kenya Website <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="card bg-white/10 backdrop-blur-md border-white/20">
              <h4 className="text-xl font-bold mb-4">Program Highlights</h4>
              <ul className="space-y-3">
                {[
                  'Annual participation in FIRST Global Challenge',
                  'Hands-on robotics and engineering training',
                  'International competition and cultural exchange',
                  'Leadership and teamwork development',
                  'Community outreach and STEM advocacy'
                ].map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent-300 mt-1">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with us to empower the next generation of African innovators. Together, we can build a brighter future through STEM education.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Get In Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
