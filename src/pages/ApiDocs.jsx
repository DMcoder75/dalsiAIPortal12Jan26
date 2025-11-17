import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { Code, Copy, Check, ExternalLink, Zap, Shield, Gauge } from 'lucide-react'
import { useState } from 'react'

export default function ApiDocs() {
  const [copiedCode, setCopiedCode] = useState(null)

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const codeExamples = [
    {
      id: 'auth',
      title: 'Authentication',
      language: 'bash',
      code: `curl -X POST https://api.neodalsi.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your_api_key_here",
    "api_secret": "your_api_secret_here"
  }'`
    },
    {
      id: 'text-ai',
      title: 'DalSiAI Text Generation',
      language: 'python',
      code: `import requests

response = requests.post(
  'https://api.neodalsi.com/v1/text/generate',
  headers={
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  },
  json={
    'prompt': 'Write a professional email',
    'model': 'dalsi-ai',
    'max_tokens': 500
  }
)

print(response.json())`
    },
    {
      id: 'vision-ai',
      title: 'DalSiAIVi Image Analysis',
      language: 'javascript',
      code: `const analyzeImage = async (imageUrl) => {
  const response = await fetch(
    'https://api.neodalsi.com/v1/vision/analyze',
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_url: imageUrl,
        model: 'dalsi-ai-vi',
        analysis_type: 'general'
      })
    }
  );
  
  return await response.json();
};`
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark"
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
           minHeight: '100vh'
         }}>
      <Navigation />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'API Documentation', href: '/api-docs' }]} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrate powerful AI capabilities into your applications with our comprehensive REST API. 
            Access DalSiAI, DalSiAIVi, and DalSiAI VD through a single, unified interface.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                    <div className="text-2xl font-bold text-foreground">&lt; 2s</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-accent/20">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Gauge className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-green-500/20">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Security</div>
                  <div className="text-2xl font-bold text-foreground">Enterprise</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Getting Started</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>1. Get Your API Key</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Sign up for a Dalsi AI account and generate your API credentials from the dashboard.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Get API Key
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>2. Read the Docs</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Explore comprehensive documentation with examples for each API endpoint.
                </p>
                <Button variant="outline" className="w-full">
                  View Full Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">API Endpoints</h2>
          
          <div className="space-y-6">
            {/* DalSiAI Endpoints */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">DalSiAI - Text AI Engine</CardTitle>
                <CardDescription>Generate text, code, and content with advanced AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-card rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono text-primary">POST /v1/text/generate</code>
                      <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Text Generation</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Generate text content using DalSiAI</p>
                  </div>
                  <div className="p-3 bg-card rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono text-primary">POST /v1/text/summarize</code>
                      <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Summarization</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Summarize long-form text content</p>
                  </div>
                  <div className="p-3 bg-card rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono text-primary">POST /v1/text/translate</code>
                      <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Translation</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Translate text between languages</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DalSiAIVi Endpoints */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">DalSiAIVi - Vision AI Engine</CardTitle>
                <CardDescription>Analyze images, documents, and visual content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-card rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono text-accent">POST /v1/vision/analyze</code>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">Image Analysis</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Analyze images and extract insights</p>
                  </div>
                  <div className="p-3 bg-card rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono text-accent">POST /v1/vision/ocr</code>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">OCR</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Extract text from images and documents</p>
                  </div>
                  <div className="p-3 bg-card rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono text-accent">POST /v1/vision/generate</code>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">Image Generation</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Generate images from text descriptions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DalSiAI VD Endpoints */}
            <Card className="border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">DalSiAI VD - Video & Document AI</CardTitle>
                <CardDescription>Process videos and documents with advanced AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-card rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono text-yellow-500">POST /v1/video/analyze</code>
                      <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded">Video Analysis</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Analyze video content and extract metadata</p>
                  </div>
                  <div className="p-3 bg-card rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono text-yellow-500">POST /v1/document/process</code>
                      <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded">Document Processing</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Process and analyze documents intelligently</p>
                  </div>
                  <div className="p-3 bg-card rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono text-yellow-500">POST /v1/video/transcribe</code>
                      <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded">Transcription</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Transcribe video and audio content</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Code Examples</h2>
          
          <div className="space-y-6">
            {codeExamples.map((example) => (
              <Card key={example.id} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="h-5 w-5 text-primary" />
                      <span>{example.title}</span>
                    </CardTitle>
                    <span className="text-xs px-2 py-1 bg-muted rounded font-mono">{example.language}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-card p-4 rounded border border-border overflow-x-auto text-sm text-muted-foreground">
                      <code>{example.code}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(example.code, example.id)}
                    >
                      {copiedCode === example.id ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support */}
        <section className="mb-16">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our API support team is here to help you integrate and optimize your implementation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90">
                    Contact Support
                  </Button>
                  <Button variant="outline">
                    View Full API Reference
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
