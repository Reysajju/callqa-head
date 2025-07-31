import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Target, ArrowRight, Shield, TrendingUp, Users, DollarSign, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function BenefitsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose CallQA?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the transformative benefits of AI-powered audio analysis for your business
          </p>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-4">Save Time and Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  Automate your quality assurance process and reduce manual review time by up to 80%.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">80% faster processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Reduced manual labor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Quick deployment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-4">Improve Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  AI-powered analysis ensures consistent evaluation across all calls and conversations.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">95%+ accuracy rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Consistent scoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Reduced human error</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-4">Easy Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  Seamlessly integrate with your existing workflow and tools.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">API access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">CRM integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Custom workflows</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-4">Secure Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  All your transcriptions and reports are securely stored and easily accessible in your profile.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Bank-level encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">GDPR compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Easy access</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how CallQA transforms business operations and drives measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                <p className="text-muted-foreground">
                  Average reduction in quality assurance operational costs
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Productivity Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
                <p className="text-muted-foreground">
                  Increase in team productivity and analysis throughput
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                <p className="text-muted-foreground">
                  Improvement in customer satisfaction scores
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your ROI</h2>
            <p className="text-lg text-muted-foreground">
              See how much you can save with CallQA
            </p>
          </div>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Typical Savings Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Before CallQA</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Manual review time</span>
                      <span className="font-medium">40 hours/week</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Human error rate</span>
                      <span className="font-medium">15-20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Analysis consistency</span>
                      <span className="font-medium">Variable</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly cost</span>
                      <span className="font-medium">$8,000+</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">With CallQA</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Automated processing</span>
                      <span className="font-medium text-green-600">8 hours/week</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI accuracy rate</span>
                      <span className="font-medium text-green-600">95%+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Analysis consistency</span>
                      <span className="font-medium text-green-600">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly cost</span>
                      <span className="font-medium text-green-600">$3,200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Monthly Savings:</span>
                  <span className="text-2xl font-bold text-green-600">$4,800</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-semibold">Annual ROI:</span>
                  <span className="text-2xl font-bold text-green-600">180%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Competitive Advantages</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Why CallQA outperforms traditional solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Superior AI Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our proprietary AI algorithms deliver industry-leading accuracy and insights that competitors can't match.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Scalable Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From small teams to enterprise-level operations, CallQA scales seamlessly with your business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Continuous Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We constantly update our platform with the latest AI advancements and customer feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Dedicated Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24/7 customer support with dedicated account managers for enterprise clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Success Stories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real results from businesses that transformed their operations with CallQA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Call Center Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "CallQA reduced our quality assurance time by 75% while improving accuracy. The ROI was evident within the first month."
                </p>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div>Operations Manager, TechSupport Inc.</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Healthcare Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The secure transcription and analysis capabilities have revolutionized how we handle patient communications."
                </p>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold">Dr. Michael Chen</div>
                  <div>CTO, HealthFirst Medical</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Financial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "CallQA's compliance features and accuracy have been invaluable for our customer service quality control."
                </p>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold">Jennifer Martinez</div>
                  <div>Compliance Officer, SecureBank</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Audio Analysis?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join businesses that trust CallQA for their audio transcription and analysis needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="https://callqa.magnatesempire.com/" target="_blank" rel="noopener noreferrer">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}