import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Users, Trophy, Globe, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Programs',
  description: 'Explore STEM FORGE AFRICA programs, featuring FIRST Global Team Kenya as our flagship initiative.',
}

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 african-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-accent-900/90"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transforming lives through world-class STEM education and innovation programs
          </p>
        </div>
      </section>

      {/* Flagship Program - FIRST Global Team Kenya */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 rounded-full text-sm font-semibold mb-4">
                Flagship Program
              </span>
              <h2 className="mb-4">FIRST Global Team Kenya</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Our premier robotics program representing Africa at the annual FIRST Global Challenge
              </p>
            </div>

            <div className="card mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">About the Program</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    FIRST Global Team Kenya is Kenya's official representative at the FIRST Global Challenge, an annual international robotics competition that brings together teams from over 190 countries. Our team embodies excellence, innovation, and the spirit of African ingenuity on the global stage.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Each year, talented Kenyan students work together to design, build, and program a robot to compete in challenges focused on solving real-world problems through STEM solutions.
                  </p>
                  <Link 
                    href="https://fgckenya.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Visit Team Kenya Website <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Trophy className="w-6 h-6" />,
                      title: 'International Competition',
                      description: 'Compete against teams from 190+ countries annually'
                    },
                    {
                      icon: <Wrench className="w-6 h-6" />,
                      title: 'Hands-On Learning',
                      description: 'Real-world robotics, programming, and engineering experience'
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: 'Team Development',
                      description: 'Leadership, collaboration, and communication skills'
                    },
                    {
                      icon: <Globe className="w-6 h-6" />,
                      title: 'Global Exposure',
                      description: 'Cultural exchange and international networking'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-primary-600 dark:text-primary-400 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: 'Years Active',
                  value: '5+',
                  description: 'Competing since 2017'
                },
                {
                  label: 'Students Impacted',
                  value: '100+',
                  description: 'Through direct participation and outreach'
                },
                {
                  label: 'Countries Competed Against',
                  value: '190+',
                  description: 'At annual FIRST Global Challenge'
                }
              ].map((stat, index) => (
                <div key={index} className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Programs */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Expanding Our Impact</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              STEM FORGE AFRICA is committed to launching additional programs that will expand access to quality STEM education across Africa. Stay tuned for exciting new initiatives!
            </p>
            <div className="card bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
              <h3 className="text-2xl font-bold mb-4">Future Initiatives</h3>
              <ul className="space-y-3 text-left max-w-2xl mx-auto">
                {[
                  'STEM Mentorship Programs for underserved communities',
                  'Robotics Workshops and Training Camps',
                  'Women in STEM Empowerment Initiatives',
                  'Regional STEM Competitions and Hackathons',
                  'Corporate-Sponsored Scholarship Programs'
                ].map((initiative, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{initiative}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="mb-6">Support Our Programs</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Your partnership can help us reach more students, expand our programs, and create lasting impact across Africa.
          </p>
          <Link href="/contact" className="btn-primary">
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  )
}
