import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { Calendar, User, ArrowRight, Zap, TrendingUp, Award } from 'lucide-react'

export default function NewsUpdates() {
  const news = [
    {
      id: 1,
      title: "DalSiAI Achieves 99.5% Accuracy in Healthcare Diagnostics",
      category: "Product Update",
      date: "November 10, 2025",
      author: "Dr. Sarah Chen",
      image: "🏥",
      excerpt: "Our latest DalSiAI model demonstrates unprecedented accuracy in medical image analysis, setting new industry standards.",
      content: "After months of research and testing with leading healthcare institutions, DalSiAI has achieved a remarkable 99.5% accuracy rate in diagnostic imaging analysis. This breakthrough represents a significant advancement in AI-assisted medical diagnosis."
    },
    {
      id: 2,
      title: "Introducing DalSiAI VD: Video & Document Processing",
      category: "Feature Launch",
      date: "November 8, 2025",
      author: "James Mitchell",
      image: "🎬",
      excerpt: "We're thrilled to announce the launch of DalSiAI VD, our newest multimodal AI engine for video and document analysis.",
      content: "DalSiAI VD extends our AI capabilities to video and document processing, enabling organizations to extract insights from multiple content formats. This new engine supports real-time video analysis and intelligent document classification."
    },
    {
      id: 3,
      title: "Partnership with Global Telecom Leader - Vodafone",
      category: "Partnership",
      date: "November 5, 2025",
      author: "Michael Rodriguez",
      image: "🤝",
      excerpt: "Dalsi AI partners with Vodafone to bring advanced AI solutions to telecommunications industry.",
      content: "We're excited to announce a strategic partnership with Vodafone, one of the world's leading telecommunications companies. Together, we'll develop AI solutions for customer service automation and network optimization."
    },
    {
      id: 4,
      title: "Education AI Platform Expands to 50+ Universities",
      category: "Milestone",
      date: "November 1, 2025",
      author: "Emma Thompson",
      image: "🎓",
      excerpt: "Our education AI platform is now being used by over 50 universities worldwide to enhance student learning experiences.",
      content: "With adoption across 50+ universities globally, our education AI platform continues to transform how students learn. Universities report improved student engagement and personalized learning outcomes."
    },
    {
      id: 5,
      title: "DalSiAI Wins Best AI Innovation Award 2025",
      category: "Award",
      date: "October 28, 2025",
      author: "Lisa Wong",
      image: "🏆",
      excerpt: "Recognized for innovation and impact, DalSiAI receives the prestigious Best AI Innovation Award.",
      content: "At the Global AI Summit 2025, DalSiAI was honored with the Best AI Innovation Award, recognizing our contributions to advancing artificial intelligence in healthcare and education sectors."
    },
    {
      id: 6,
      title: "API v2.0 Released with Enhanced Performance",
      category: "Technical Update",
      date: "October 25, 2025",
      author: "David Park",
      image: "⚡",
      excerpt: "Our new API v2.0 offers 40% faster response times and improved reliability for developers.",
      content: "We've released API v2.0 with significant performance improvements. Developers can now process requests 40% faster, with better error handling and comprehensive documentation."
    }
  ]

  const categories = [
    { name: "All", count: 6 },
    { name: "Product Update", count: 2 },
    { name: "Feature Launch", count: 1 },
    { name: "Partnership", count: 1 },
    { name: "Milestone", count: 1 },
    { name: "Award", count: 1 }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark"
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
           minHeight: '100vh'
         }}>
      <Navigation />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'News & Updates', href: '/news-updates' }]} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                News & <span className="text-primary">Updates</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay informed about the latest developments, product launches, and milestones at Dalsi AI.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat.name}
                  variant={cat.name === "All" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {cat.name} <span className="ml-2 text-xs opacity-70">({cat.count})</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {news.map((item) => (
                <Card key={item.id} className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-1/4 bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                      <span className="text-6xl">{item.image}</span>
                    </div>

                    {/* Content */}
                    <CardContent className="md:w-3/4 p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground mb-4">{item.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>By {item.author}</span>
                        </span>
                        <Button variant="ghost" className="text-primary hover:text-primary/80">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-card/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-8 text-center border border-primary/30">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest news, product updates, and exclusive insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
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
