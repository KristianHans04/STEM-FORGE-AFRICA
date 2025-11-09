import type { Metadata } from 'next'
import { Target, Eye, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about STEM FORGE AFRICA LTD, our mission, vision, and commitment to advancing STEM education across Africa.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 african-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-accent-900/90"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="mb-6">About STEM FORGE AFRICA</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building the future of African innovation through STEM education and global partnerships
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <Target className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To establish a globally recognized platform that inspires and equips the next generation of African innovators, engineers, and leaders through cutting-edge STEM education, robotics programs, and international collaboration.
              </p>
            </div>
            <div className="card">
              <Eye className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To be the leading catalyst for STEM excellence in Africa, creating a sustainable ecosystem where young minds thrive, innovate, and compete on the global stage while solving local and international challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Who We Are</h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                STEM FORGE AFRICA LTD is a technology-driven organization dedicated to transforming STEM education across the African continent. Founded with the vision of creating world-class opportunities for young African innovators, we serve as the parent organization for multiple initiatives aimed at fostering excellence in science, technology, engineering, and mathematics.
              </p>
              <p>
                Our flagship program, <strong className="text-primary-600 dark:text-primary-400">FIRST Global Team Kenya</strong>, represents the pinnacle of youth robotics and innovation in the region. Through this program and future initiatives, we provide students with hands-on experience in cutting-edge technologies, leadership development, and the opportunity to represent Africa on the international stage.
              </p>
              <p>
                We believe that Africa's future lies in the hands of its young innovators. By providing world-class STEM education, mentorship, and resources, we are building a generation of problem-solvers who will drive technological advancement and economic growth across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: 'Excellence',
                description: 'We maintain the highest standards in all our programs, from education quality to competition performance.'
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Collaboration',
                description: 'We build strong partnerships with organizations, sponsors, and communities to maximize our impact.'
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: 'Innovation',
                description: 'We encourage creative thinking and cutting-edge solutions to real-world challenges.'
              },
              {
                icon: <Eye className="w-10 h-10" />,
                title: 'Integrity',
                description: 'We operate with transparency, accountability, and ethical practices in all our endeavors.'
              }
            ].map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-center mb-12">What We Do</h2>
          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                title: 'STEM Education Programs',
                description: 'We design and implement comprehensive STEM education programs that combine theoretical knowledge with practical, hands-on experience in robotics, programming, and engineering.'
              },
              {
                title: 'International Competition',
                description: 'Through FIRST Global Team Kenya, we provide students with the opportunity to compete on the global stage, representing Africa at the annual FIRST Global Challenge.'
              },
              {
                title: 'Mentorship & Training',
                description: 'We connect students with experienced mentors and provide intensive training in technical skills, leadership, teamwork, and problem-solving.'
              },
              {
                title: 'Community Outreach',
                description: 'We engage with communities across Africa to promote STEM education, inspire young minds, and create pathways to careers in technology and innovation.'
              },
              {
                title: 'Corporate Partnerships',
                description: 'We collaborate with global corporations and organizations to secure funding, resources, and expertise that enable our programs to thrive.'
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
