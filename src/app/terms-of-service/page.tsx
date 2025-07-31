import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Users, DollarSign, Globe, CheckCircle, AlertCircle, Calendar } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These terms govern your use of CallQA's services. By using our platform, you agree to these terms and conditions.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last updated: March 15, 2025</span>
          </div>
        </div>
      </section>

      {/* Acceptance of Terms */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Acceptance of Terms</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                Welcome to CallQA! These Terms of Service ("Terms") govern your use of our audio transcription and analysis platform (the "Service"). By accessing or using CallQA, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-muted-foreground mb-6">
                If you are using CallQA on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. In that case, "you" and "your" will refer to that entity.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
                    <p className="text-yellow-700 text-sm">
                      If you do not agree to these Terms, you may not access or use the Service. We reserve the right to update or modify these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Service Description</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                CallQA provides an AI-powered platform for audio transcription, analysis, and insights generation. Our Service includes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">Core Features</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Audio file transcription to text</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>AI-powered content analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Custom analysis templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Reporting and analytics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Platform Components</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Web-based dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>RESTful API access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>SDK libraries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Integration tools</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                The Service is provided on a subscription basis with different tiers offering varying levels of features, usage limits, and support. Specific features and availability may vary based on your subscription plan.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* User Accounts and Registration */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">User Accounts and Registration</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Account Creation</h4>
                  <p className="text-muted-foreground mb-4">
                    To use the Service, you must create an account by providing accurate and complete information. You are responsible for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Maintaining the confidentiality of your account credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>All activities that occur under your account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Keeping your contact information up to date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Notifying us immediately of any unauthorized use</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Account Requirements</h4>
                  <p className="text-muted-foreground mb-4">
                    You must be at least 13 years old to create an account. By creating an account, you represent and warrant that:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You are of legal age to form a binding contract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You have the authority to accept these Terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You will comply with all applicable laws</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Account Termination</h4>
                  <p className="text-muted-foreground">
                    We reserve the right to suspend or terminate your account at any time for violations of these Terms, suspicious activity, or for any other reason at our sole discretion. Upon termination, your right to use the Service will immediately cease.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment and Subscription */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Payment and Subscription</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Subscription Plans</h4>
                  <p className="text-muted-foreground mb-4">
                    CallQA offers various subscription plans with different features and usage limits. All subscriptions are subject to the following terms:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Automatic renewal unless cancelled</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Payment in advance of each billing cycle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Usage limits based on subscription tier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Overage charges for exceeding limits</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Payment Methods</h4>
                  <p className="text-muted-foreground mb-4">
                    We accept major credit cards, debit cards, and other payment methods as specified on our website. All payments are processed securely through third-party payment processors.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Refunds</h4>
                  <p className="text-muted-foreground mb-4">
                    Refunds are handled according to our refund policy:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>30-day money-back guarantee for new customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Prorated refunds for annual subscriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>No refunds for usage-based charges</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Price Changes</h4>
                  <p className="text-muted-foreground">
                    We reserve the right to change our prices at any time. We will provide at least 30 days' notice before any price changes take effect for existing subscribers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Acceptable Use */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Acceptable Use</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You are prohibited from using the Service to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Prohibited Activities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Upload illegal or harmful content</li>
                    <li>• Violate intellectual property rights</li>
                    <li>• Harass, abuse, or harm others</li>
                    <li>• Interfere with service operation</li>
                    <li>• Reverse engineer or decompile</li>
                    <li>• Create false identities</li>
                    <li>• Spread malware or viruses</li>
                    <li>• Engage in fraudulent activities</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Permitted Uses</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Transcribe your own audio content</li>
                    <li>• Analyze business communications</li>
                    <li>• Generate insights for research</li>
                    <li>• Improve customer service quality</li>
                    <li>• Create training materials</li>
                    <li>• Monitor compliance</li>
                    <li>• Generate reports for internal use</li>
                    <li>• Integrate with your applications</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Consequences of Violation</h4>
                    <p className="text-red-700 text-sm">
                      Violation of these acceptable use policies may result in immediate account suspension or termination, without notice, and may also result in legal action.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Intellectual Property</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Our Rights</h4>
                  <p className="text-muted-foreground mb-4">
                    CallQA retains all rights, title, and interest in and to the Service, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Software, algorithms, and technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Website design and content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Trademarks and service marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Documentation and training materials</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Your Rights</h4>
                  <p className="text-muted-foreground mb-4">
                    You retain ownership of all content you upload or submit to the Service. By using the Service, you grant us a license to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Process, transcribe, and analyze your content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Store and maintain your content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Generate insights and reports from your content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use anonymized data for service improvement</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Open Source Components</h4>
                  <p className="text-muted-foreground">
                    The Service may incorporate open source software components. Such components are subject to their respective license terms, which can be found in our documentation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Level Agreement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Service Level Agreement</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Uptime Commitment</h4>
                  <p className="text-muted-foreground mb-4">
                    We strive to provide the Service with the following availability:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">99.9%</div>
                      <div className="text-sm text-muted-foreground">Enterprise Plan</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">99.5%</div>
                      <div className="text-sm text-muted-foreground">Pro Plan</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">99.0%</div>
                      <div className="text-sm text-muted-foreground">Free Plan</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Support Response Times</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Plan</th>
                          <th className="text-left p-2">Critical Issues</th>
                          <th className="text-left p-2">Normal Issues</th>
                          <th className="text-left p-2">General Inquiries</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">Enterprise</td>
                          <td className="p-2">1 hour</td>
                          <td className="p-2">4 hours</td>
                          <td className="p-2">24 hours</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Pro</td>
                          <td className="p-2">4 hours</td>
                          <td className="p-2">24 hours</td>
                          <td className="p-2">48 hours</td>
                        </tr>
                        <tr>
                          <td className="p-2">Free</td>
                          <td className="p-2">Best effort</td>
                          <td className="p-2">Best effort</td>
                          <td className="p-2">Best effort</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Service Credits</h4>
                  <p className="text-muted-foreground">
                    If we fail to meet our uptime commitments, eligible customers may receive service credits as compensation. Service credits are calculated based on the duration and impact of the outage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Limitation of Liability</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Disclaimer of Warranties</h4>
                  <p className="text-muted-foreground mb-4">
                    The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Merchantability and fitness for a particular purpose</li>
                    <li>• Non-infringement of intellectual property rights</li>
                    <li>• Accuracy, reliability, or completeness of transcriptions</li>
                    <li>• Uninterrupted or error-free operation</li>
                    <li>• Security of data transmission or storage</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Limitation of Damages</h4>
                  <p className="text-muted-foreground mb-4">
                    To the maximum extent permitted by law, our total liability arising out of or related to these Terms or the Service shall not exceed:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>For paid subscribers: the fees paid by you in the 12 months preceding the claim</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>For free users: $100 USD</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Exclusion of Consequential Damages</h4>
                  <p className="text-muted-foreground">
                    In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption, even if we have been advised of the possibility of such damages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Termination</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Termination by You</h4>
                  <p className="text-muted-foreground mb-4">
                    You may terminate your account at any time by:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Accessing the account settings in your dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Following the cancellation process for your subscription</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Contacting our support team for assistance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Termination by Us</h4>
                  <p className="text-muted-foreground mb-4">
                    We reserve the right to terminate or suspend your account immediately, without prior notice, for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Violation of these Terms of Service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Suspicious or fraudulent activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Legal requirements or government requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Discontinuation of the Service</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Effect of Termination</h4>
                  <p className="text-muted-foreground mb-4">
                    Upon termination:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Your right to access and use the Service will cease immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>We may delete your data in accordance with our data retention policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Any outstanding fees will become immediately due</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Certain provisions of these Terms will survive termination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Governing Law</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                These Terms of Service and your use of the Service shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Jurisdiction and Venue</h4>
                  <p className="text-muted-foreground">
                    Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Delaware, and you hereby irrevocably consent to the jurisdiction and venue thereof.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Dispute Resolution</h4>
                  <p className="text-muted-foreground">
                    We encourage you to contact us first to resolve any disputes informally. If informal resolution is not possible, disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">International Users</h4>
                  <p className="text-muted-foreground">
                    The Service is controlled and operated from the United States. If you are accessing the Service from outside the United States, you are responsible for compliance with local laws.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Miscellaneous */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Miscellaneous</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Entire Agreement</h4>
                  <p className="text-muted-foreground">
                    These Terms constitute the entire agreement between you and CallQA regarding the Service and supersede all prior agreements, communications, and understandings.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Severability</h4>
                  <p className="text-muted-foreground">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Waiver</h4>
                  <p className="text-muted-foreground">
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. Any waiver of these Terms must be in writing and signed by an authorized representative of CallQA.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Assignment</h4>
                  <p className="text-muted-foreground">
                    You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. We may assign or transfer these Terms at our discretion.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Notices</h4>
                  <p className="text-muted-foreground">
                    All notices under these Terms will be in writing and sent to the contact information provided in your account or to our legal department at legal@callqa.com.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Contact Information</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                If you have questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Legal Department</div>
                    <div className="text-muted-foreground">legal@callqa.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Support</div>
                    <div className="text-muted-foreground">support@callqa.com</div>
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
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}