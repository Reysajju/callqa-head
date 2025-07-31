import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Certificate, Shield, CheckCircle, Globe, Users, FileText, Scale, Database, Lock, Eye, Calendar, Download } from "lucide-react"

export default function CompliancePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CallQA maintains comprehensive compliance with global regulations and industry standards to ensure your data is protected and your business meets its legal obligations.
          </p>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Certificate className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Compliance Overview</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Global Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compliance with international regulations and frameworks
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Industry-recognized certifications and attestations
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Scale className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Audited Regularly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Independent third-party audits and assessments
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive compliance documentation available
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-lg mb-6">
                CallQA is committed to maintaining the highest standards of compliance across all aspects of our operations. Our comprehensive compliance program ensures that we meet or exceed regulatory requirements while providing you with the tools and documentation you need to meet your own compliance obligations.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Our Compliance Commitment</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Continuous monitoring and improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Regular risk assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Employee training and awareness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Transparent reporting</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Compliance Benefits</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Reduced regulatory risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Enhanced data protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Improved customer trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Competitive advantage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Regulatory Compliance</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  GDPR (General Data Protection Regulation)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Full compliance with EU GDPR requirements for processing personal data of EU residents.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Requirements Met:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Lawful basis for processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Data subject rights implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Data Protection Officer (DPO) available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Data Protection Impact Assessments (DPIA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Breach notification procedures</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Article 30</Badge>
                    <Badge variant="outline">Article 32</Badge>
                    <Badge variant="outline">Article 34</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  CCPA (California Consumer Privacy Act)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Compliant with California's privacy law providing enhanced consumer privacy rights.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Consumer Rights Supported:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Right to know what data is collected</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Right to delete personal information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Right to opt-out of data sale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Right to non-discrimination</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">§1798.100</Badge>
                    <Badge variant="outline">§1798.105</Badge>
                    <Badge variant="outline">§1798.110</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  HIPAA (Health Insurance Portability and Accountability Act)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    HIPAA compliant for healthcare organizations processing protected health information (PHI).
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">HIPAA Requirements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Privacy Rule compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Security Rule implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Breach Notification Rule</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Business Associate Agreements (BAA)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">45 CFR §164</Badge>
                    <Badge variant="outline">BAA Available</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-600" />
                  SOC 2 Type II
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    SOC 2 Type II certified for security, availability, processing integrity, confidentiality, and privacy.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Trust Service Criteria:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Security - System protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Availability - System accessibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Processing Integrity - System completeness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Confidentiality - Data protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Privacy - Personal data handling</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Type II</Badge>
                    <Badge variant="outline">Annual Audit</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Industry Standards</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">ISO 27001</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  International standard for information security management systems (ISMS).
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Certified:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ISMS:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Management:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">ISO 27701</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Privacy information management system extension to ISO 27001.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Certified:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PIMS:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Privacy Controls:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">PCI DSS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Payment Card Industry Data Security Standard for secure payment processing.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Compliant:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Card Data:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SAQ A:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">NIST CSF</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  National Institute of Standards and Technology Cybersecurity Framework.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Identify:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protect:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Detect:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Respond:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recover:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">CIS Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Center for Internet Security Controls for cyber defense.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Implementation:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>v8 Controls:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Safeguards:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">FedRAMP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Federal Risk and Authorization Management Program compliance.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>In Process:</span>
                    <span className="text-blue-600">○</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Impact Level:</span>
                    <span className="text-blue-600">Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3PAO:</span>
                    <span className="text-blue-600">Engaged</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Residency */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Data Residency</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Global Data Centers</h4>
                  <p className="text-muted-foreground mb-4">
                    CallQA operates data centers in multiple regions to meet your data residency requirements:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold mb-2">North America</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• US East (Virginia)</li>
                        <li>• US West (California)</li>
                        <li>• Canada (Toronto)</li>
                        <li>• Mexico (Querétaro)</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Europe</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• EU West (Ireland)</li>
                        <li>• EU Central (Frankfurt)</li>
                        <li>• UK (London)</li>
                        <li>• Switzerland (Zurich)</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Asia Pacific</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Asia Pacific (Singapore)</li>
                        <li>• Asia Pacific (Tokyo)</li>
                        <li>• Asia Pacific (Sydney)</li>
                        <li>• Asia Pacific (Mumbai)</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold mb-2">South America</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• South America (São Paulo)</li>
                        <li>• South America (Bogotá)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Data Residency Options</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h6 className="font-semibold text-blue-800 mb-2">Standard</h6>
                      <p className="text-blue-700 text-sm">
                        Data stored in nearest available region for optimal performance
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h6 className="font-semibold text-green-800 mb-2">Regional</h6>
                      <p className="text-green-700 text-sm">
                        Data stored within specified geographic region (e.g., EU, US)
                      </p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h6 className="font-semibold text-purple-800 mb-2">Country-Specific</h6>
                      <p className="text-purple-700 text-sm">
                        Data stored within specific country (Enterprise only)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Cross-Border Data Transfers</h4>
                  <p className="text-muted-foreground mb-4">
                    For customers requiring data to remain within specific jurisdictions, we provide:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Standard Contractual Clauses (SCCs) for EU data transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Adequacy decisions for approved countries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Binding Corporate Rules (BCRs) for internal transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Data Processing Agreements (DPAs) for all customers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance Documentation */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Compliance Documentation</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                We provide comprehensive documentation to help you understand and verify our compliance posture. Available documents include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Certifications</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center justify-between">
                        <span>SOC 2 Type II Report</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>ISO 27001 Certificate</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>ISO 27701 Certificate</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>PCI DSS Attestation</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Policies</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center justify-between">
                        <span>Information Security Policy</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Data Privacy Policy</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Incident Response Plan</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Business Continuity Plan</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Agreements</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center justify-between">
                        <span>Data Processing Agreement (DPA)</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Business Associate Agreement (BAA)</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Standard Contractual Clauses (SCCs)</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Service Level Agreement (SLA)</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Reports</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center justify-between">
                        <span>Annual Compliance Report</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Transparency Report</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Security Assessment Report</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Risk Assessment Report</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold mb-2">Request Documentation</h4>
                <p className="text-muted-foreground text-sm">
                  Additional compliance documentation is available upon request. Contact our compliance team at compliance@callqa.com for specific requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance Audits */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Compliance Audits</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Audit Schedule</h4>
                  <p className="text-muted-foreground mb-4">
                    Our compliance program includes regular audits by independent third parties:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h6 className="font-semibold mb-2">Annual Audits</h6>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• SOC 2 Type II</li>
                        <li>• ISO 27001/27701</li>
                        <li>• PCI DSS</li>
                        <li>• Internal Controls</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h6 className="font-semibold mb-2">Quarterly Reviews</h6>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Compliance Status</li>
                        <li>• Risk Assessment</li>
                        <li>• Policy Updates</li>
                        <li>• Training Effectiveness</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Audit Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Planning</h5>
                        <p className="text-muted-foreground text-sm">
                          Define audit scope, objectives, and methodology
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Assessment</h5>
                        <p className="text-muted-foreground text-sm">
                          Evaluate controls against requirements and standards
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Reporting</h5>
                        <p className="text-muted-foreground text-sm">
                          Document findings and recommendations for improvement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Remediation</h5>
                        <p className="text-muted-foreground text-sm">
                          Implement corrective actions and track progress
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Audit Results</h4>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h5 className="font-semibold text-green-800">Clean Audit History</h5>
                    </div>
                    <p className="text-green-700 text-sm">
                      CallQA has maintained a clean audit history with no material findings in the past 3 years. All audits have resulted in successful certification or attestation.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Compliance Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Contact Compliance Team</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                Our dedicated compliance team is available to answer your questions and provide assistance with compliance requirements.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Compliance Inquiries</div>
                      <div className="text-muted-foreground">compliance@callqa.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Security Questions</div>
                      <div className="text-muted-foreground">security@callqa.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Data Protection Officer</div>
                      <div className="text-muted-foreground">dpo@callqa.com</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Document Requests</div>
                      <div className="text-muted-foreground">docs@callqa.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Audit Coordination</div>
                      <div className="text-muted-foreground">audit@callqa.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">International Compliance</div>
                      <div className="text-muted-foreground">intl-compliance@callqa.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Response Times</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-blue-700">Routine Inquiries</div>
                    <div className="text-blue-600">24-48 hours</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-700">Urgent Matters</div>
                    <div className="text-blue-600">4-8 hours</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-700">Document Requests</div>
                    <div className="text-blue-600">3-5 business days</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-700">Audit Support</div>
                    <div className="text-blue-600">Immediate response</div>
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