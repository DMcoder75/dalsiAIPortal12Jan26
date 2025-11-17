import { Button } from '../components/ui/button'
import { ArrowLeft, Scale, AlertTriangle, Shield, FileText, Users, Gavel } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground dark"
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
           minHeight: '100vh'
         }}>
      <Navigation />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions', href: '/terms-conditions' }]} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Terms & <span className="text-primary">Conditions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using our AI services and solutions.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: January 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-destructive/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg p-8 border border-destructive/50">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Important Legal Notice</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-destructive">PLEASE READ THESE TERMS CAREFULLY.</strong> By accessing or using 
                  Dalsi AI & Automations services, you agree to be bound by these Terms and Conditions. 
                  If you do not agree to these terms, you must not use our services.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-destructive">LIMITATION OF LIABILITY:</strong> DALSI AI & AUTOMATIONS SHALL NOT BE 
                  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING 
                  FROM YOUR USE OF OUR SERVICES, REGARDLESS OF THE THEORY OF LIABILITY.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Acceptance of Terms */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you 
                  ("User," "you," or "your") and Dalsi AI & Automations ("Company," "we," "us," or "our") 
                  regarding your use of our artificial intelligence services, software applications, 
                  and related services (collectively, the "Services").
                </p>
                <p className="leading-relaxed">
                  By accessing, downloading, installing, or using our Services, you acknowledge that you 
                  have read, understood, and agree to be bound by these Terms. If you are using the Services 
                  on behalf of an organization, you represent and warrant that you have the authority to 
                  bind that organization to these Terms.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-accent mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Service Description</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Dalsi AI & Automations provides artificial intelligence solutions including but not limited to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• DalSiAI: Advanced text-based AI engine for natural language processing</li>
                  <li>• DalSiAIVi: Multimodal AI system for text, image, and video processing</li>
                  <li>• Healthcare AI solutions for medical professionals and institutions</li>
                  <li>• Educational AI tools for learning and training purposes</li>
                  <li>• API access and integration services</li>
                  <li>• Custom AI model development and deployment</li>
                </ul>
                <p className="leading-relaxed">
                  Our Services are designed to assist and augment human capabilities, not to replace 
                  professional judgment or decision-making in critical areas such as healthcare, 
                  education, or other professional services.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-chart-4 mr-4" />
                <h2 className="text-2xl font-bold text-foreground">User Responsibilities & Acceptable Use</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Your Obligations</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By using our Services, you agree to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Use the Services only for lawful purposes and in accordance with these Terms</li>
                    <li>• Provide accurate and complete information when creating accounts or using Services</li>
                    <li>• Maintain the security and confidentiality of your account credentials</li>
                    <li>• Comply with all applicable laws, regulations, and professional standards</li>
                    <li>• Respect intellectual property rights and privacy of others</li>
                    <li>• Use professional judgment and not rely solely on AI outputs for critical decisions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Prohibited Uses</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree NOT to use our Services to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Generate harmful, illegal, or malicious content</li>
                    <li>• Violate any applicable laws or regulations</li>
                    <li>• Infringe upon intellectual property rights of others</li>
                    <li>• Attempt to reverse engineer, hack, or compromise our systems</li>
                    <li>• Share or distribute inappropriate or offensive content</li>
                    <li>• Use the Services for unauthorized commercial purposes</li>
                    <li>• Impersonate others or provide false information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MAJOR LIABILITY DISCLAIMERS */}
            <div className="bg-destructive/10 rounded-lg p-8 border border-destructive/50">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive mr-4" />
                <h2 className="text-2xl font-bold text-foreground">LIMITATION OF LIABILITY & DISCLAIMERS</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-destructive/30">
                  <h3 className="text-xl font-semibold text-destructive mb-4">NO LIABILITY FOR USER DECISIONS</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-destructive">DALSI AI & AUTOMATIONS EXPRESSLY DISCLAIMS ALL LIABILITY 
                    FOR ANY DECISIONS, ACTIONS, OR OUTCOMES RESULTING FROM YOUR USE OF OUR AI SERVICES.</strong> 
                    Our AI systems provide suggestions, recommendations, and outputs that are intended to assist 
                    and inform, but the ultimate responsibility for all decisions and actions rests solely with you.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-destructive/30">
                  <h3 className="text-xl font-semibold text-destructive mb-4">HEALTHCARE & MEDICAL DISCLAIMERS</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-destructive">OUR AI SERVICES ARE NOT MEDICAL DEVICES AND DO NOT PROVIDE 
                    MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.</strong> Any healthcare-related outputs from our AI systems 
                    are for informational purposes only and should not replace professional medical judgment.
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Healthcare professionals must exercise independent clinical judgment</li>
                    <li>• AI outputs should be validated against established medical standards</li>
                    <li>• We are not liable for any medical decisions or patient outcomes</li>
                    <li>• Users must comply with all applicable healthcare regulations and standards</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border border-destructive/30">
                  <h3 className="text-xl font-semibold text-destructive mb-4">EDUCATIONAL DISCLAIMERS</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-destructive">EDUCATIONAL AI TOOLS ARE SUPPLEMENTARY AND DO NOT REPLACE 
                    QUALIFIED EDUCATIONAL INSTRUCTION OR ASSESSMENT.</strong> Educators and institutions remain 
                    responsible for all educational decisions and outcomes.
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• AI-generated educational content should be reviewed by qualified educators</li>
                    <li>• We are not liable for educational outcomes or student performance</li>
                    <li>• Users must ensure compliance with educational standards and regulations</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border border-destructive/30">
                  <h3 className="text-xl font-semibold text-destructive mb-4">GENERAL LIMITATION OF LIABILITY</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-destructive">TO THE MAXIMUM EXTENT PERMITTED BY LAW, DALSI AI & AUTOMATIONS 
                    SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                    DAMAGES, INCLUDING BUT NOT LIMITED TO:</strong>
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6 mt-4">
                    <li>• Loss of profits, revenue, or business opportunities</li>
                    <li>• Data loss or corruption</li>
                    <li>• Business interruption or downtime</li>
                    <li>• Personal injury or property damage</li>
                    <li>• Professional liability or malpractice claims</li>
                    <li>• Regulatory fines or penalties</li>
                    <li>• Reputational damage</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-destructive">OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR 
                    RELATED TO THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS 
                    PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Service Availability */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Service Availability & Warranties</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Service Availability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to provide reliable and continuous service, we do not guarantee that 
                    our Services will be available at all times or free from interruptions. We may 
                    temporarily suspend or restrict access to our Services for maintenance, updates, 
                    or other operational reasons.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Disclaimer of Warranties</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-destructive">THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" 
                    WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong> We disclaim all warranties, 
                    including but not limited to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Merchantability and fitness for a particular purpose</li>
                    <li>• Non-infringement of third-party rights</li>
                    <li>• Accuracy, completeness, or reliability of AI outputs</li>
                    <li>• Uninterrupted or error-free operation</li>
                    <li>• Security or freedom from viruses or harmful components</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Intellectual Property Rights</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  All intellectual property rights in the Services, including but not limited to software, 
                  algorithms, models, documentation, and content, are owned by Dalsi AI & Automations or 
                  our licensors. You are granted a limited, non-exclusive, non-transferable license to 
                  use the Services in accordance with these Terms.
                </p>
                <p className="leading-relaxed">
                  You retain ownership of any content you input into our Services. However, you grant us 
                  a license to use such content solely for the purpose of providing the Services and 
                  improving our AI models (in anonymized form where applicable).
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <Gavel className="h-8 w-8 text-accent mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Indemnification</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-destructive">You agree to indemnify, defend, and hold harmless 
                  Dalsi AI & Automations, its officers, directors, employees, agents, and affiliates from 
                  and against any and all claims, damages, losses, costs, and expenses (including reasonable 
                  attorney fees) arising from or related to:</strong>
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Your use of the Services</li>
                  <li>• Your violation of these Terms</li>
                  <li>• Your violation of any applicable laws or regulations</li>
                  <li>• Any decisions or actions you take based on AI outputs</li>
                  <li>• Any content you submit or generate using our Services</li>
                  <li>• Any harm to third parties resulting from your use of the Services</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Termination</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We may terminate or suspend your access to the Services at any time, with or without 
                  cause, and with or without notice. You may terminate your use of the Services at any 
                  time by discontinuing use and deleting your account.
                </p>
                <p className="leading-relaxed">
                  Upon termination, your right to use the Services will cease immediately. Provisions 
                  of these Terms that by their nature should survive termination will survive, including 
                  but not limited to liability limitations, indemnification, and dispute resolution.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Governing Law & Dispute Resolution</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  jurisdiction where Dalsi AI & Automations is incorporated, without regard to conflict 
                  of law principles.
                </p>
                <p className="leading-relaxed">
                  Any disputes arising from or related to these Terms or the Services shall be resolved 
                  through binding arbitration in accordance with the rules of the applicable arbitration 
                  association. You waive any right to participate in class action lawsuits or class-wide 
                  arbitration.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Changes to Terms</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material 
                  changes by posting the updated Terms on our website and updating the "Last updated" date. 
                  Your continued use of the Services after such changes constitutes acceptance of the new Terms.
                </p>
                <p className="leading-relaxed">
                  If you do not agree to the modified Terms, you must discontinue use of the Services.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <p className="text-foreground font-medium mb-2">Dalsi AI & Automations</p>
                  <p>Email: <span className="text-primary">info@neodalsi.com</span></p>
                  <p>Address: AI Innovation Hub, Tech Valley</p>
                </div>
              </div>
            </div>

            {/* Final Acknowledgment */}
            <div className="bg-destructive/10 rounded-lg p-8 border border-destructive/50">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Acknowledgment</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-destructive">BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, 
                  UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS, INCLUDING ALL LIABILITY 
                  LIMITATIONS AND DISCLAIMERS.</strong>
                </p>
                <p className="leading-relaxed">
                  <strong className="text-destructive">YOU UNDERSTAND THAT YOU ARE SOLELY RESPONSIBLE FOR ALL 
                  DECISIONS AND ACTIONS TAKEN BASED ON OR IN CONNECTION WITH OUR AI SERVICES, AND THAT DALSI AI & 
                  AUTOMATIONS SHALL HAVE NO LIABILITY FOR SUCH DECISIONS OR ACTIONS.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
