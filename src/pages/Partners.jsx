import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { Building2, Zap, Globe, Users, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Partners() {
  const strategicPartners = [
    {
      id: 1,
      name: 'Vodafone',
      category: 'Telecommunications',
      logo: '📱',
      description: 'Leading global telecommunications company',
      partnership: 'AI-powered customer service automation and network optimization',
      regions: 'Europe, Africa, Asia-Pacific',
      benefits: ['Advanced customer support AI', 'Network intelligence solutions', 'Real-time analytics']
    },
    {
      id: 2,
      name: 'Siemens Healthineers',
      category: 'Healthcare Technology',
      logo: '🏥',
      description: 'Global medical technology leader',
      partnership: 'Diagnostic imaging AI and clinical decision support',
      regions: 'Worldwide',
      benefits: ['Medical image analysis', 'Clinical workflow optimization', 'Diagnostic assistance']
    },
    {
      id: 3,
      name: 'Microsoft Azure',
      category: 'Cloud Infrastructure',
      logo: '☁️',
      description: 'Enterprise cloud computing platform',
      partnership: 'Integrated AI services on Azure platform',
      regions: 'Global',
      benefits: ['Scalable cloud infrastructure', 'Enterprise security', 'Global data centers']
    },
    {
      id: 4,
      name: 'IBM Watson',
      category: 'Enterprise AI',
      logo: '🤖',
      description: 'Enterprise artificial intelligence platform',
      partnership: 'Joint AI solutions for enterprise clients',
      regions: 'North America, Europe',
      benefits: ['Enterprise AI integration', 'Advanced analytics', 'Industry-specific solutions']
    },
    {
      id: 5,
      name: 'UNESCO',
      category: 'Education',
      logo: '🎓',
      description: 'United Nations Educational, Scientific and Cultural Organization',
      partnership: 'AI for education accessibility and personalized learning',
      regions: 'Global',
      benefits: ['Education accessibility', 'Personalized learning paths', 'Global reach']
    },
    {
      id: 6,
      name: 'World Health Organization',
      category: 'Global Health',
      logo: '🌍',
      description: 'International public health organization',
      partnership: 'AI solutions for global health initiatives',
      regions: 'Worldwide',
      benefits: ['Health data analysis', 'Epidemic prediction', 'Resource optimization']
    }
  ]

  const partnerBenefits = [
    {
      title: 'Technology Integration',
      description: 'Seamless integration with partner platforms and services',
      icon: Zap
    },
    {
      title: 'Market Expansion',
      description: 'Access to new markets and customer segments',
      icon: Globe
    },
    {
      title: 'Joint Innovation',
      description: 'Collaborative R&D and product development',
      icon: Building2
    },
    {
      title: 'Dedicated Support',
      description: 'Priority support and dedicated partnership team',
      icon: Users
    }
  ]

  const partnershipTiers = [
    {
      tier: 'Technology Partner',
      description: 'Integration and co-marketing opportunities',
      requirements: ['Active product integration', 'Joint go-to-market strategy', 'Quarterly business reviews'],
      benefits: ['Co-branded marketing', 'Technical support', 'Revenue sharing model']
    },
    {
      tier: 'Strategic Partner',
      description: 'Deep integration and joint solution development',
      requirements: ['Significant customer overlap', 'Joint product roadmap', 'Executive alignment'],
      benefits: ['Exclusive territories', 'Joint development fund', 'Executive steering committee']
    },
    {
      tier: 'Enterprise Partner',
      description: 'Global partnership with dedicated resources',
      requirements: ['Enterprise customer base', 'Global presence', 'Significant investment'],
      benefits: ['Global co-selling rights', 'Custom integration', 'Strategic investment options']
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark"
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
           minHeight: '100vh'
         }}>
      <Navigation />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Partners', href: '/partners' }]} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Partners</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Strategic partnerships with industry leaders to deliver comprehensive AI solutions 
                across healthcare, education, telecommunications, and enterprise sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Strategic Partners</h2>
              <p className="text-muted-foreground">Leading organizations we collaborate with</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategicPartners.map((partner) => (
                <Card key={partner.id} className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer flex flex-col">
                  <CardHeader>
                    <div className="text-5xl mb-4">{partner.logo}</div>
                    <CardTitle className="group-hover:text-primary transition-colors">{partner.name}</CardTitle>
                    <CardDescription className="text-xs">{partner.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-3">{partner.description}</p>
                    <p className="text-sm font-semibold text-primary mb-4">Partnership Focus:</p>
                    <p className="text-sm text-muted-foreground mb-4">{partner.partnership}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Key Benefits:</p>
                      <ul className="space-y-2">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-3">Regions: {partner.regions}</p>
                      <Button variant="outline" size="sm" className="w-full group-hover:border-primary">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why Partner With Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerBenefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <Card key={benefit.title} className="bg-card border-border hover:border-primary/50 transition-all">
                    <CardHeader>
                      <Icon className="h-8 w-8 text-primary mb-4" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Partnership Tiers</h2>
              <p className="text-muted-foreground">Choose the partnership level that fits your organization</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnershipTiers.map((tier) => (
                <Card key={tier.tier} className="bg-card border-border hover:border-primary/50 transition-all flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.tier}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {tier.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-8 text-center border border-primary/30">
              <h2 className="text-3xl font-bold text-foreground mb-4">Interested in Partnering?</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for organizations that share our vision of advancing AI technology. 
                Let's explore how we can work together to create innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90">
                  Become a Partner
                </Button>
                <Button variant="outline">
                  Download Partner Program Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Partnership Inquiries</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about partnership opportunities? Our partnership team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  Email: partners@dalsi.ai
                </Button>
                <Button variant="outline">
                  Phone: +1 (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
