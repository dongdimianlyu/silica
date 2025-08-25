import Hero from '@/components/sections/Hero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from '@/components/sections/ContactForm'
import ClientOnly from '@/components/ui/ClientOnly'
import { ScrollReveal, StaggerContainer, CounterAnimation } from '@/components/animations/ScrollAnimations'
import { ReactParticleSystem } from '@/components/animations/ParticleSystem'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section id="products" className="relative py-20 bg-gray-50 overflow-hidden">
{/* Temporarily disabled - fixing CSS styling issue */}
        {/* <ClientOnly>
          <ReactParticleSystem density="low" color="rgba(0, 102, 204, 0.1)" count={30} />
        </ClientOnly> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Silica Gel Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading desiccant solutions engineered for optimal moisture control 
              across diverse industrial applications.
            </p>
          </ScrollReveal>
          
          <StaggerContainer stagger={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Indicating Silica Gel',
                description: 'Color-changing crystals that visually indicate moisture saturation levels.',
                features: ['Visual moisture indication', 'Reusable after regeneration', 'FDA approved grades']
              },
              {
                name: 'Non-Indicating Silica Gel', 
                description: 'High-capacity moisture absorption without color change indicators.',
                features: ['Maximum absorption capacity', 'Cost-effective solution', 'Various mesh sizes']
              },
              {
                name: 'Specialty Grades',
                description: 'Custom formulations for specific industrial requirements.',
                features: ['Custom particle sizes', 'Industry-specific formulas', 'Enhanced performance']
              },
              {
                name: 'Bulk Industrial',
                description: 'Large-volume packaging for manufacturing and industrial operations.',
                features: ['Bulk packaging options', 'Consistent quality', 'Competitive pricing']
              }
            ].map((product, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-blue rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full opacity-80"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
          </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-primary font-medium hover:text-accent transition-colors duration-300 text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </StaggerContainer>

          {/* Stats Section */}
          <div className="mt-20">
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <CounterAnimation to={99.9} suffix="%" />
                    </div>
                    <div className="text-gray-600 text-sm uppercase tracking-wide">Purity Level</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <CounterAnimation to={500} suffix="+" />
                    </div>
                    <div className="text-gray-600 text-sm uppercase tracking-wide">Industrial Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <CounterAnimation to={20} suffix="+" />
                    </div>
                    <div className="text-gray-600 text-sm uppercase tracking-wide">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <CounterAnimation to={24} suffix="/7" />
                    </div>
                    <div className="text-gray-600 text-sm uppercase tracking-wide">Technical Support</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <AnimatedSection id="applications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted moisture control solutions across multiple industries and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Electronics Manufacturing',
              'Pharmaceutical Packaging',
              'Food & Beverage',
              'Automotive Components',
              'Textile Industry',
              'Industrial Equipment'
            ].map((application, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{application}</h3>
                <p className="text-gray-600">Reliable moisture protection for critical applications.</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quality Section */}
      <AnimatedSection id="quality" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quality & Reliability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous testing protocols and quality assurance processes ensure consistent performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'ISO Certified', description: 'Manufacturing processes meet international quality standards' },
              { title: 'Rigorous Testing', description: 'Comprehensive quality control at every production stage' },
              { title: 'Technical Support', description: 'Expert guidance and custom solution development' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About SilicaGel Pro
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over two decades of experience in desiccant technology, we specialize in 
                manufacturing and distributing premium silica gel solutions for industrial applications.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to quality, technical expertise, and customer service has made us 
                a trusted partner for companies across diverse industries.
              </p>
              <div className="space-y-4">
                {[
                  'Advanced manufacturing facilities',
                  'Dedicated technical support team',
                  'Custom solution development',
                  'Reliable global supply chain'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-blue rounded-lg h-96"></div>
          </div>
        </div>
      </AnimatedSection>

            {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gray-900 text-white overflow-hidden">
{/* Temporarily disabled - fixing CSS styling issue */}
        {/* <ClientOnly>
          <ReactParticleSystem density="medium" color="rgba(0, 212, 255, 0.2)" count={40} />
        </ClientOnly> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your moisture control needs? Contact our technical team for 
              expert guidance and custom solutions.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-400 mt-1">Mon-Fri 8AM-6PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-300">info@silicagelpro.com</p>
                        <p className="text-sm text-gray-400 mt-1">Response within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Address</p>
                        <p className="text-gray-300">123 Industrial Blvd</p>
                        <p className="text-gray-300">Manufacturing City, MC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-white">8:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-white">9:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" delay={0.4}>
              <ContactForm type="contact" />
            </ScrollReveal>
          </div>

          {/* Emergency Contact */}
          <ScrollReveal direction="up" delay={0.6} className="mt-16 text-center">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Emergency Technical Support</h4>
              <p className="text-gray-300 mb-4">
                For urgent technical issues affecting production, our emergency support team is available 24/7.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Emergency Support: +1 (555) 123-4567
              </a>
            </div>
          </ScrollReveal>
    </div>
      </section>
    </>
  )
}
