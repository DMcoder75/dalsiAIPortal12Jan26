import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { Briefcase, MapPin, DollarSign, Users, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Careers() {
  const jobRoles = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      salary: "$180K - $240K",
      experience: "5+ years",
      description: "Lead the development of advanced AI models and machine learning pipelines for our DalSiAI platform.",
      responsibilities: [
        "Design and implement scalable ML architectures",
        "Develop and optimize neural networks for text processing",
        "Collaborate with data scientists on model training",
        "Mentor junior engineers and conduct code reviews"
      ],
      requirements: [
        "Strong background in machine learning and deep learning",
        "Proficiency in Python, TensorFlow, and PyTorch",
        "Experience with NLP and transformer models",
        "Knowledge of cloud platforms (AWS, GCP, Azure)"
      ]
    },
    {
      id: 2,
      title: "Computer Vision Specialist",
      department: "Engineering",
      location: "Remote / New York, NY",
      salary: "$170K - $230K",
      experience: "4+ years",
      description: "Develop cutting-edge computer vision solutions for DalSiAIVi multimodal AI platform.",
      responsibilities: [
        "Build image and video processing pipelines",
        "Implement object detection and image segmentation models",
        "Optimize vision models for real-time inference",
        "Collaborate on multimodal AI integration"
      ],
      requirements: [
        "Expertise in computer vision and image processing",
        "Proficiency in OpenCV, PyTorch, and TensorFlow",
        "Experience with CNN architectures",
        "Strong understanding of video processing techniques"
      ]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / London, UK",
      salary: "$140K - $190K",
      experience: "3+ years",
      description: "Build and maintain scalable web applications and APIs for the Dalsi AI platform.",
      responsibilities: [
        "Develop responsive frontend interfaces with React",
        "Build robust backend services with Node.js/Python",
        "Design and implement RESTful and GraphQL APIs",
        "Ensure code quality and security best practices"
      ],
      requirements: [
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Understanding of microservices architecture",
        "Knowledge of Docker and Kubernetes"
      ]
    },
    {
      id: 4,
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      location: "Remote / Toronto, Canada",
      salary: "$120K - $160K",
      experience: "3+ years",
      description: "Ensure quality and reliability of AI-powered applications through comprehensive testing.",
      responsibilities: [
        "Develop automated test suites for web and API testing",
        "Perform performance and load testing on AI models",
        "Create test strategies for ML model validation",
        "Collaborate with developers on bug fixes and improvements"
      ],
      requirements: [
        "Proficiency in test automation frameworks (Selenium, Cypress)",
        "Experience with Python and JavaScript testing",
        "Understanding of ML model testing and validation",
        "Knowledge of CI/CD pipelines and tools"
      ]
    },
    {
      id: 5,
      title: "AI Solutions Architect",
      department: "Solutions",
      location: "Remote / Singapore",
      salary: "$160K - $220K",
      experience: "6+ years",
      description: "Design and architect AI solutions tailored to enterprise client needs.",
      responsibilities: [
        "Assess client requirements and design AI solutions",
        "Create technical architecture documentation",
        "Lead solution implementation and deployment",
        "Provide technical guidance to implementation teams"
      ],
      requirements: [
        "Deep understanding of AI/ML concepts and applications",
        "Experience in enterprise solution design",
        "Knowledge of healthcare and education AI use cases",
        "Strong communication and leadership skills"
      ]
    },
    {
      id: 6,
      title: "Data Science Specialist",
      department: "Research & Development",
      location: "Remote / Boston, MA",
      salary: "$150K - $210K",
      experience: "4+ years",
      description: "Conduct research and develop novel AI algorithms for next-generation products.",
      responsibilities: [
        "Conduct research on advanced AI techniques",
        "Develop and test new algorithms and models",
        "Analyze large datasets and extract insights",
        "Publish research papers and present findings"
      ],
      requirements: [
        "Advanced degree in Computer Science, Statistics, or related field",
        "Strong mathematical and statistical background",
        "Experience with research methodologies",
        "Proficiency in Python, R, and data analysis tools"
      ]
    },
    {
      id: 7,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Berlin, Germany",
      salary: "$110K - $160K",
      experience: "3+ years",
      description: "Create intuitive and beautiful user interfaces for AI-powered applications.",
      responsibilities: [
        "Design user interfaces and user experiences",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with developers on implementation"
      ],
      requirements: [
        "Proficiency in design tools (Figma, Adobe XD)",
        "Strong understanding of UX/UI principles",
        "Experience with responsive design",
        "Portfolio demonstrating design excellence"
      ]
    },
    {
      id: 8,
      title: "Product Manager - AI Solutions",
      department: "Product",
      location: "Remote / Sydney, Australia",
      salary: "$130K - $190K",
      experience: "4+ years",
      description: "Drive product strategy and roadmap for AI solutions targeting healthcare and education.",
      responsibilities: [
        "Define product vision and strategy",
        "Manage product roadmap and prioritization",
        "Conduct market research and competitive analysis",
        "Work with engineering and design teams on product development"
      ],
      requirements: [
        "Experience in product management for AI/ML products",
        "Understanding of healthcare or education industry",
        "Strong analytical and communication skills",
        "Experience with agile development methodologies"
      ]
    },
    {
      id: 9,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Amsterdam, Netherlands",
      salary: "$130K - $180K",
      experience: "3+ years",
      description: "Build and maintain scalable infrastructure for AI model deployment and serving.",
      responsibilities: [
        "Design and implement cloud infrastructure",
        "Manage containerization and orchestration",
        "Implement CI/CD pipelines",
        "Monitor system performance and optimize resources"
      ],
      requirements: [
        "Proficiency in cloud platforms (AWS, GCP, Azure)",
        "Experience with Docker, Kubernetes, and Terraform",
        "Knowledge of monitoring and logging tools",
        "Understanding of ML model serving and inference"
      ]
    },
    {
      id: 10,
      title: "AI Ethics & Compliance Specialist",
      department: "Governance",
      location: "Remote / Brussels, Belgium",
      salary: "$120K - $170K",
      experience: "3+ years",
      description: "Ensure ethical AI practices and regulatory compliance across all products.",
      responsibilities: [
        "Develop AI ethics guidelines and policies",
        "Conduct bias audits on AI models",
        "Ensure GDPR and healthcare compliance",
        "Provide training on responsible AI practices"
      ],
      requirements: [
        "Understanding of AI ethics and fairness",
        "Knowledge of GDPR and healthcare regulations",
        "Experience in compliance and governance",
        "Strong analytical and communication skills"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark"
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
           minHeight: '100vh'
         }}>
      <Navigation />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers' }]} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                Join Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Help us revolutionize AI solutions for healthcare and education. We're looking for talented individuals 
                passionate about building the future of artificial intelligence.
              </p>
            </div>

            {/* Culture Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Collaborative Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Work with talented teams from around the world in a supportive, inclusive environment.</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <Briefcase className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Continuous learning, mentorship programs, and career development opportunities.</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-chart-4 mb-2" />
                  <CardTitle>Competitive Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Competitive salaries, health insurance, flexible working, and equity options.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Open Positions</h2>
              <p className="text-xl text-muted-foreground">
                {jobRoles.length} exciting opportunities to join our growing team
              </p>
            </div>

            <div className="space-y-6">
              {jobRoles.map((job) => (
                <Card key={job.id} className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">{job.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{job.department}</CardDescription>
                      </div>
                      <ArrowRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{job.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-accent" />
                        <span className="text-sm">{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-5 w-5 text-chart-4" />
                        <span className="text-sm">{job.experience}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 w-full md:w-auto">
                      Apply Now
                      <ArrowRight className="h-4 w-4 ml-2" />
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Don't see a role that fits?</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Send Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
