import { Button } from '../components/ui/button'
import { ArrowLeft, Users, Target, Lightbulb, Award, Globe, Heart } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground dark"
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
           minHeight: '100vh'
         }}>
      <Navigation />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }]} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Button 
                variant="ghost" 
                className="mb-6 text-primary hover:text-primary/80"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                About <span className="text-primary">Dalsi AI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of artificial intelligence with cutting-edge solutions that transform 
                healthcare and education through advanced AI technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-4" />
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To develop and deploy intelligent automation solutions that enhance human capabilities, 
                  improve outcomes, and create meaningful impact in the lives of patients, students, and 
                  professionals worldwide. We believe that AI should augment human intelligence, not replace it.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-accent mr-4" />
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize how organizations interact with artificial intelligence, making advanced 
                  AI capabilities accessible, practical, and transformative for healthcare and education 
                  sectors worldwide. We envision a future where AI empowers every professional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Founded with the belief that <strong className="text-primary">Artificial Intelligence Made Real</strong> 
                is not just our tagline—it's our commitment to practical, impactful AI solutions.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dalsi AI & Automations was born from the recognition that while AI technology has advanced 
                rapidly, there remained a significant gap between cutting-edge research and practical, 
                real-world applications that truly benefit people's lives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our founders, with extensive backgrounds in healthcare technology and educational innovation, 
                witnessed firsthand the challenges faced by professionals in these critical sectors. They 
                saw the potential for AI to not just automate tasks, but to genuinely enhance human 
                capabilities and improve outcomes for patients and students.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to push the boundaries of what's possible with AI, developing solutions 
                that are not only technologically advanced but also ethically responsible, user-friendly, 
                and designed with the end-user's needs at the forefront.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do at Dalsi AI & Automations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Human-Centered</h3>
                <p className="text-muted-foreground">
                  We design AI solutions that enhance human capabilities rather than replace them, 
                  always keeping the end-user's needs and experiences at the center of our development process.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <Award className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our work, from the quality of our AI models 
                  to the user experience of our applications and the support we provide to our clients.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border hover:border-destructive/50 transition-all duration-300 hover:scale-105">
                <Heart className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Ethical AI</h3>
                <p className="text-muted-foreground">
                  We are committed to developing AI responsibly, ensuring our solutions are transparent, 
                  fair, and respect privacy while contributing positively to society.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border hover:border-chart-4/50 transition-all duration-300 hover:scale-105">
                <Lightbulb className="h-12 w-12 text-chart-4 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what's possible with AI, exploring new 
                  technologies and methodologies to solve complex real-world problems.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Impact</h3>
                <p className="text-muted-foreground">
                  We aim to make a positive impact on a global scale, developing solutions that can 
                  benefit organizations and individuals worldwide, regardless of their size or location.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Results-Driven</h3>
                <p className="text-muted-foreground">
                  We focus on delivering measurable results and tangible value to our clients, 
                  ensuring our AI solutions translate into real improvements in efficiency and outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Commitment</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are dedicated to building AI solutions that make a real difference in the world.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Dalsi AI?</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-foreground">Proven Expertise:</strong> Deep knowledge in healthcare and education sectors</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-foreground">Cutting-Edge Technology:</strong> Advanced AI models including text and multimodal capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-foreground">Practical Solutions:</strong> Real-world applications that deliver measurable results</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-foreground">Ongoing Support:</strong> Comprehensive support and continuous improvement</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-white">
                    <h4 className="text-2xl font-bold mb-4">Ready to Transform?</h4>
                    <p className="mb-6">Join thousands of organizations already using Dalsi AI to achieve better outcomes.</p>
                    <Button 
                      className="bg-white text-primary hover:bg-gray-100"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Started Today
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
