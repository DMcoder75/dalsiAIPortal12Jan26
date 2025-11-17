import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { HelpCircle, MessageSquare, FileText, Phone, Mail, Search, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function SupportCenter() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "How do I get started with DalSiAI?",
      answer: "Getting started is simple! Sign up for an account, choose your plan, and follow our onboarding guide. Our team can also provide personalized setup assistance for enterprise clients."
    },
    {
      id: 2,
      question: "What are the system requirements for DalSiAI?",
      answer: "DalSiAI is cloud-based and works on any modern web browser. For API integration, you'll need Python 3.7+ or Node.js 12+. Check our documentation for detailed requirements."
    },
    {
      id: 3,
      question: "How is my data protected?",
      answer: "We use enterprise-grade encryption, comply with GDPR and HIPAA standards, and conduct regular security audits. Your data is stored in secure, redundant data centers."
    },
    {
      id: 4,
      question: "Can I integrate DalSiAI with my existing systems?",
      answer: "Yes! Our API supports integration with most systems. We provide REST and GraphQL APIs, webhooks, and SDKs for popular programming languages."
    },
    {
      id: 5,
      question: "What kind of support is included?",
      answer: "All plans include email support. Professional and Enterprise plans include priority support, phone support, and dedicated account managers."
    },
    {
      id: 6,
      question: "How often is DalSiAI updated?",
      answer: "We release updates monthly with new features and improvements. Critical security patches are deployed immediately."
    },
    {
      id: 7,
      question: "Do you offer training for my team?",
      answer: "Yes! We offer online training courses, webinars, and on-site training for enterprise customers. Check our learning resources section."
    },
    {
      id: 8,
      question: "What's your uptime guarantee?",
      answer: "We guarantee 99.9% uptime with automatic failover and redundancy. Enterprise plans include SLA guarantees."
    }
  ]

  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      available: "24/7 for Enterprise",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions and concerns",
      available: "Response within 24 hours",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      available: "Business hours (EST)",
      action: "Call Us"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      available: "Always available",
      action: "View Docs"
    }
  ]

  const resources = [
    { title: "API Documentation", description: "Complete API reference and code examples" },
    { title: "Video Tutorials", description: "Step-by-step video guides for common tasks" },
    { title: "Integration Guides", description: "How to integrate DalSiAI with popular platforms" },
    { title: "Best Practices", description: "Tips and strategies for optimal results" },
    { title: "Troubleshooting Guide", description: "Solutions to common issues" },
    { title: "Community Forum", description: "Connect with other DalSiAI users" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark"
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
           minHeight: '100vh'
         }}>
      <Navigation />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Support Center', href: '/support-center' }]} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                Support <span className="text-primary">Center</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                We're here to help! Find answers to your questions or contact our support team.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Get Help</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel) => {
                const Icon = channel.icon
                return (
                  <Card key={channel.title} className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
                    <CardHeader>
                      <Icon className="h-8 w-8 text-primary mb-4" />
                      <CardTitle>{channel.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{channel.description}</p>
                      <p className="text-xs text-primary mb-4">{channel.available}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        {channel.action}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Find answers to common questions about DalSiAI</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.id} className="bg-card border-border hover:border-primary/50 transition-all">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-card/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{faq.question}</span>
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-primary transition-transform ${
                        expandedFaq === faq.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === faq.id && (
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Learning Resources</h2>
              <p className="text-muted-foreground">Explore our comprehensive guides and tutorials</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card key={resource.title} className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                    <Button variant="ghost" className="text-primary hover:text-primary/80">
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-8 text-center border border-primary/30">
              <h2 className="text-3xl font-bold text-foreground mb-4">Still need help?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is ready to assist you. Contact us and we'll get back to you as soon as possible.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
