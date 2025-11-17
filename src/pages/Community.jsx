import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { Users, MessageSquare, Calendar, Trophy, Github, Slack, Zap, ArrowRight } from 'lucide-react'

export default function Community() {
  const communityStats = [
    { label: 'Active Members', value: '15,000+', icon: Users },
    { label: 'Forum Posts', value: '50,000+', icon: MessageSquare },
    { label: 'Events Hosted', value: '120+', icon: Calendar },
    { label: 'Top Contributors', value: '500+', icon: Trophy }
  ]

  const forums = [
    {
      title: 'General Discussion',
      description: 'General questions and discussions about DalSiAI',
      posts: 3245,
      members: 8500,
      lastActivity: '2 hours ago'
    },
    {
      title: 'API & Integration',
      description: 'Questions about API integration and development',
      posts: 1890,
      members: 4200,
      lastActivity: '30 minutes ago'
    },
    {
      title: 'Healthcare Solutions',
      description: 'Discuss healthcare AI implementations and use cases',
      posts: 1245,
      members: 3100,
      lastActivity: '1 hour ago'
    },
    {
      title: 'Education & Learning',
      description: 'Share education AI strategies and best practices',
      posts: 980,
      members: 2800,
      lastActivity: '4 hours ago'
    },
    {
      title: 'Showcase & Projects',
      description: 'Share your projects and showcase your work',
      posts: 756,
      members: 2200,
      lastActivity: '5 hours ago'
    },
    {
      title: 'Feature Requests',
      description: 'Suggest new features and improvements',
      posts: 542,
      members: 1800,
      lastActivity: '3 hours ago'
    }
  ]

  const upcomingEvents = [
    {
      title: 'DalSiAI Webinar: Advanced Text Analysis',
      date: 'November 15, 2025',
      time: '2:00 PM EST',
      attendees: 450,
      type: 'Webinar'
    },
    {
      title: 'Community Meetup - San Francisco',
      date: 'November 20, 2025',
      time: '6:00 PM PST',
      attendees: 120,
      type: 'In-Person'
    },
    {
      title: 'AI Ethics Workshop',
      date: 'November 22, 2025',
      time: '10:00 AM EST',
      attendees: 300,
      type: 'Workshop'
    },
    {
      title: 'Developer Hackathon 2025',
      date: 'December 1-3, 2025',
      time: 'All Day',
      attendees: 800,
      type: 'Hackathon'
    }
  ]

  const topContributors = [
    { name: 'Alex Johnson', contributions: 342, expertise: 'API Integration' },
    { name: 'Sarah Chen', contributions: 298, expertise: 'Healthcare AI' },
    { name: 'Michael Rodriguez', contributions: 276, expertise: 'Education Solutions' },
    { name: 'Emma Thompson', contributions: 254, expertise: 'Best Practices' },
    { name: 'David Park', contributions: 231, expertise: 'Performance Optimization' },
    { name: 'Lisa Wong', contributions: 198, expertise: 'Security' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark"
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
           minHeight: '100vh'
         }}>
      <Navigation />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Community', href: '/community' }]} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                Join Our <span className="text-primary">Community</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Connect with thousands of developers, data scientists, and AI enthusiasts. Share ideas, 
                ask questions, and grow together.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {communityStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label} className="bg-card/50 border-border text-center">
                    <CardContent className="pt-6">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Community Channels */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Connect With Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Forum</CardTitle>
                  <CardDescription>Ask questions and share knowledge</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:border-primary">
                    Visit Forum
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
                <CardHeader>
                  <Slack className="h-8 w-8 text-accent mb-4" />
                  <CardTitle>Slack Channel</CardTitle>
                  <CardDescription>Real-time chat with community</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:border-primary">
                    Join Slack
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
                <CardHeader>
                  <Github className="h-8 w-8 text-chart-4 mb-4" />
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>Contribute to open source</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:border-primary">
                    View Repos
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Forums Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Active Forums</h2>
              <p className="text-muted-foreground">Join discussions on topics that matter to you</p>
            </div>

            <div className="space-y-4">
              {forums.map((forum) => (
                <Card key={forum.title} className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {forum.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{forum.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span>{forum.posts.toLocaleString()} posts</span>
                          <span>{forum.members.toLocaleString()} members</span>
                          <span>Last activity: {forum.lastActivity}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Upcoming Events</h2>
              <p className="text-muted-foreground">Learn, network, and connect with the community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.title} className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full">
                        {event.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{event.attendees} attending</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4 group-hover:border-primary">
                      Register
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Contributors */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Top Contributors</h2>
              <p className="text-muted-foreground">Recognize our most active community members</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topContributors.map((contributor, idx) => (
                <Card key={contributor.name} className="bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        #{idx + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{contributor.name}</h3>
                        <p className="text-sm text-muted-foreground">{contributor.expertise}</p>
                        <div className="mt-2 flex items-center space-x-1">
                          <Trophy className="h-4 w-4 text-accent" />
                          <span className="text-sm text-accent">{contributor.contributions} contributions</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-8 text-center border border-primary/30">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to join?</h2>
              <p className="text-muted-foreground mb-6">
                Become part of a vibrant community of AI enthusiasts and professionals.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
