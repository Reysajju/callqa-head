import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, Globe, Mail, Calendar, CheckCircle } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last updated: March 15, 2025</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Overview</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                CallQA ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our services, including our audio transcription and analysis platform.
              </p>
              <p className="text-muted-foreground">
                By using CallQA, you agree to the collection and use of information in accordance with this policy. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Database className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We collect the following types of personal information:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Name and contact information:</strong> When you create an account, we collect your name, email address, and other contact details.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Account credentials:</strong> Username, password, and authentication information for account access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Payment information:</strong> Billing details for subscription services (processed securely by third-party payment processors).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Company information:</strong> Business details for enterprise customers and team accounts.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Audio and Transcription Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  When you use our services, we collect and process:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Audio files:</strong> The original audio content you upload for transcription and analysis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Transcription text:</strong> The converted text from your audio files.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Analysis results:</strong> Insights, scores, and metadata generated from our AI analysis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Metadata:</strong> File information, timestamps, and processing details.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Technical and Usage Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We automatically collect certain information when you use our services:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Device information:</strong> IP address, browser type, operating system, and device identifiers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Usage data:</strong> Pages visited, features used, time spent on the platform, and interaction data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>API usage:</strong> Request logs, response times, and error information for API access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Cookies and tracking:</strong> Small data files stored on your device to enhance user experience.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">How We Use Your Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Service Provision</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Process and transcribe audio files</li>
                  <li>• Generate analysis and insights</li>
                  <li>• Store and organize your data</li>
                  <li>• Provide customer support</li>
                  <li>• Maintain and improve our services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Send service updates and notifications</li>
                  <li>• Respond to your inquiries</li>
                  <li>• Provide technical support</li>
                  <li>• Share important announcements</li>
                  <li>• Send marketing communications (with consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Security and Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Prevent fraud and abuse</li>
                  <li>• Ensure platform security</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Conduct security audits</li>
                  <li>• Maintain data integrity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Business Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Analyze usage patterns</li>
                  <li>• Improve user experience</li>
                  <li>• Develop new features</li>
                  <li>• Conduct business analytics</li>
                  <li>• Make strategic decisions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Sharing and Disclosure */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Data Sharing and Disclosure</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                We do not sell, rent, or trade your personal information. We only share your data in the following circumstances:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Service Providers</h4>
                  <p className="text-muted-foreground">
                    We work with trusted third-party service providers who help us operate our platform, process payments, provide customer support, and analyze usage data. These providers have access to only the information necessary to perform their functions and are contractually obligated to protect your data.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Legal Requirements</h4>
                  <p className="text-muted-foreground">
                    We may disclose your information if required by law, subpoena, or other legal process, or when we believe in good faith that disclosure is necessary to comply with legal requirements, protect our rights, or ensure the safety of our users.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Business Transfers</h4>
                  <p className="text-muted-foreground">
                    In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of that transaction. We will notify you via email or prominent notice on our website of any such change.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">With Your Consent</h4>
                  <p className="text-muted-foreground">
                    We may share your information with third parties when you have given us explicit consent to do so.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Data Security</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                We implement industry-standard security measures to protect your personal information and audio data:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Encryption</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AES-256 encryption for data at rest</li>
                    <li>• TLS 1.3 encryption for data in transit</li>
                    <li>• End-to-end encryption for sensitive data</li>
                    <li>• Encrypted backups and storage</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Access Controls</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Multi-factor authentication</li>
                    <li>• Role-based access control</li>
                    <li>• Regular access reviews</li>
                    <li>• Principle of least privilege</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Monitoring and Detection</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 24/7 security monitoring</li>
                    <li>• Intrusion detection systems</li>
                    <li>• Regular security audits</li>
                    <li>• Vulnerability assessments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Compliance</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• GDPR compliant</li>
                    <li>• CCPA compliant</li>
                    <li>• SOC 2 Type II certified</li>
                    <li>• HIPAA compliant (for healthcare)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Your Rights and Choices */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Eye className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Your Rights and Choices</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                You have the following rights regarding your personal information:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Access and Portability</h4>
                  <p className="text-muted-foreground">
                    You can request access to your personal information and obtain a copy of your data in a portable format.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Correction and Deletion</h4>
                  <p className="text-muted-foreground">
                    You can request correction of inaccurate information or deletion of your personal data, subject to legal obligations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Opt-Out</h4>
                  <p className="text-muted-foreground">
                    You can opt-out of marketing communications and certain data collection activities.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Data Portability</h4>
                  <p className="text-muted-foreground">
                    You can request transfer of your data to another service provider where technically feasible.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Complaints</h4>
                  <p className="text-muted-foreground">
                    You have the right to file complaints with data protection authorities about our data practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">International Data Transfers</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                CallQA operates globally and may transfer your data to countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws through:
              </p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Standard Contractual Clauses (SCCs) approved by European authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Adequacy decisions for countries with robust data protection laws</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Binding Corporate Rules (BCRs) for internal data transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Additional technical and organizational measures to protect your data</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Children's Privacy</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                CallQA is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
              <p className="text-muted-foreground">
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Changes to This Policy */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Changes to This Policy</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable laws. When we make changes, we will:
              </p>
              
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Update the "Last updated" date at the top of this policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Notify users of significant changes via email or platform notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Obtain consent when required by applicable laws</span>
                </li>
              </ul>
              
              <p className="text-muted-foreground">
                We encourage you to review this policy periodically to stay informed about how we are protecting your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Contact Information</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">privacy@callqa.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Data Protection Officer</div>
                    <div className="text-muted-foreground">dpo@callqa.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Mailing Address</div>
                    <div className="text-muted-foreground">123 Tech Street, Innovation City, IC 12345</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  We will respond to your inquiry within 30 days of receipt and work to address your concerns promptly and thoroughly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}