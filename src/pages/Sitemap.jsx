import { Button } from '../components/ui/button'
import { ArrowLeft, Home, Brain, Stethoscope, GraduationCap, User, Phone, FileText, Shield, Scale, ExternalLink } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default function Sitemap() {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: Home,
      color: "text-primary",
      pages: [
        { name: "Home", url: "/", description: "Main landing page with AI solutions overview" },
        { name: "About Us", url: "/about", description: "Learn about our mission, vision, and values" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" }
      ]
    },
    {
      category: "AI Solutions",
      icon: Brain,
      color: "text-accent",
      pages: [
        { name: "DalSiAI - Text Engine", url: "/#solutions", description: "Advanced text-based AI capabilities" },
        { name: "DalSiAIVi - Multimodal AI", url: "/#solutions", description: "Text, image, and video processing" },
        { name: "AI Automation", url: "/#solutions", description: "Intelligent automation solutions" },
        { name: "API Integration", url: "/#solutions", description: "Developer tools and API access" }
      ]
    },
    {
      category: "Industry Solutions",
      icon: Stethoscope,
      color: "text-destructive",
      pages: [
        { name: "Healthcare Solutions", url: "/#healthcare", description: "AI for medical professionals and institutions" },
        { name: "Remote Patient Monitoring", url: "/#healthcare", description: "24/7 AI-powered patient insights" },
        { name: "Diagnostic Assistance", url: "/#healthcare", description: "Advanced medical image analysis" },
        { name: "Clinical Decision Support", url: "/#healthcare", description: "Intelligent healthcare recommendations" }
      ]
    },
    {
      category: "Education & Training",
      icon: GraduationCap,
      color: "text-chart-4",
      pages: [
        { name: "Education Platform", url: "/#education", description: "AI-powered learning solutions" },
        { name: "Personalized Learning", url: "/#education", description: "Adaptive learning experiences" },
        { name: "Smart Tutoring", url: "/#education", description: "Intelligent tutoring systems" },
        { name: "Content Generation", url: "/#education", description: "Automated educational content creation" }
      ]
    },
    {
      category: "Pricing & Plans",
      icon: FileText,
      color: "text-primary",
      pages: [
        { name: "Pricing Overview", url: "/#pricing", description: "Compare our AI solution plans" },
        { name: "Starter Plan", url: "/#pricing", description: "Perfect for small practices and institutions" },
        { name: "Professional Plan", url: "/#pricing", description: "Comprehensive AI for growing organizations" },
        { name: "Enterprise Plan", url: "/#pricing", description: "Unlimited AI power for large systems" }
      ]
    },
    {
      category: "Legal & Policies",
      icon: Shield,
      color: "text-muted-foreground",
      pages: [
        { name: "Privacy Policy", url: "/privacy-policy", description: "How we protect and handle your data" },
        { name: "Terms & Conditions", url: "/terms-conditions", description: "Legal terms and liability disclaimers" },
        { name: "Cookie Policy", url: "/privacy-policy#cookies", description: "Information about our cookie usage" },
        { name: "Security", url: "/privacy-policy#security", description: "Our data protection measures" }
      ]
    }
  ]

  const externalLinks = [
    { name: "Documentation", url: "/docs", description: "Technical documentation and guides" },
    { name: "API Reference", url: "/api", description: "Complete API documentation" },
    { name: "Support Center", url: "/support", description: "Help articles and troubleshooting" },
    { name: "Community Forum", url: "/community", description: "Connect with other users" },
    { name: "Developer Portal", url: "/developers", description: "Resources for developers" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark"
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
           minHeight: '100vh'
         }}>
      <Navigation />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Sitemap', href: '/sitemap' }]} />
      
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
                Site <span className="text-primary">Map</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Navigate through all pages and sections of the Dalsi AI portal. Find exactly what you're looking for.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Quick Navigation</h2>
              <p className="text-xl text-muted-foreground">
                Jump directly to the most important sections of our website.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Button 
                variant="outline" 
                className="h-auto p-6 flex flex-col items-center space-y-3 hover:border-primary/50 hover:bg-primary/10"
                onClick={() => window.location.href = '/'}
              >
                <Home className="h-8 w-8 text-primary" />
                <span className="font-semibold">Home</span>
                <span className="text-sm text-muted-foreground text-center">Main landing page</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-6 flex flex-col items-center space-y-3 hover:border-accent/50 hover:bg-accent/10"
                onClick={() => window.location.href = '/#solutions'}
              >
                <Brain className="h-8 w-8 text-accent" />
                <span className="font-semibold">AI Solutions</span>
                <span className="text-sm text-muted-foreground text-center">Our AI capabilities</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-6 flex flex-col items-center space-y-3 hover:border-destructive/50 hover:bg-destructive/10"
                onClick={() => window.location.href = '/about'}
              >
                <User className="h-8 w-8 text-destructive" />
                <span className="font-semibold">About Us</span>
                <span className="text-sm text-muted-foreground text-center">Our story & mission</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-6 flex flex-col items-center space-y-3 hover:border-chart-4/50 hover:bg-chart-4/10"
                onClick={() => window.location.href = '/contact'}
              >
                <Phone className="h-8 w-8 text-chart-4" />
                <span className="font-semibold">Contact</span>
                <span className="text-sm text-muted-foreground text-center">Get in touch</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Complete Site Structure */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Complete Site Structure</h2>
              <p className="text-xl text-muted-foreground">
                Explore all pages and sections organized by category.
              </p>
            </div>
            
            <div className="space-y-12">
              {siteStructure.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-card rounded-lg p-8 border border-border">
                  <div className="flex items-center mb-6">
                    <section.icon className={`h-8 w-8 ${section.color} mr-4`} />
                    <h3 className="text-2xl font-bold text-foreground">{section.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.pages.map((page, pageIndex) => (
                      <div 
                        key={pageIndex}
                        className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
                        onClick={() => window.location.href = page.url}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {page.name}
                          </h4>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {page.description}
                        </p>
                        <div className="mt-3 text-xs text-primary font-mono">
                          {page.url}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Additional Resources</h2>
              <p className="text-xl text-muted-foreground">
                External links and resources for developers and users.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalLinks.map((link, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onClick={() => window.location.href = link.url}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {link.name}
                    </h4>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                  <div className="mt-3 text-xs text-accent font-mono">
                    {link.url}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">Need Help Finding Something?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you can't find what you're looking for on this sitemap, our team is here to help. 
                Contact us and we'll guide you to the right information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = 'mailto:info@neodalsi.com'}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              Sitemap last updated: January 1, 2025 | 
              <span className="ml-2">
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
              </span>
              <span className="mx-2">•</span>
              <span>
                <a href="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</a>
              </span>
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
