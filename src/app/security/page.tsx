import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Database, Eye, Key, AlertTriangle, CheckCircle, Globe, Server, Users, Fingerprint, Certificate } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how CallQA protects your data with enterprise-grade security measures and industry-leading practices.
          </p>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Security Overview</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Enterprise Grade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bank-level security protocols designed to protect your most sensitive data
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Lock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>End-to-End Encryption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Military-grade encryption for data both in transit and at rest
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Compliance Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SOC 2 Type II, GDPR, CCPA, and HIPAA compliant
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>24/7 Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous security monitoring and threat detection
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-lg mb-6">
                At CallQA, security is not just a feature—it's the foundation of everything we do. We implement comprehensive security measures across our entire platform to ensure your audio data and transcriptions remain protected at all times.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Our Security Philosophy</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Security by design and default</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Zero-trust architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Defense in depth strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Continuous improvement</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Security Commitments</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Regular security audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Penetration testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Vulnerability management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Incident response readiness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Database className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Data Protection</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Encryption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Data at Rest</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      All data is encrypted using AES-256 encryption, the industry standard for data protection.
                    </p>
                    <div className="bg-muted p-3 rounded text-xs font-mono">
                      AES-256-GCM with key rotation every 90 days
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data in Transit</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      All communications are secured with TLS 1.3 encryption.
                    </p>
                    <div className="bg-muted p-3 rounded text-xs font-mono">
                      TLS 1.3 with perfect forward secrecy
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Key Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Secure Key Storage</h4>
                    <p className="text-muted-foreground text-sm">
                      Encryption keys are managed using Hardware Security Modules (HSMs) and never stored alongside encrypted data.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Rotation</h4>
                    <p className="text-muted-foreground text-sm">
                      Automated key rotation ensures that even if keys were compromised, the exposure window is minimized.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">HSM Protected</Badge>
                    <Badge variant="outline">FIPS 140-2</Badge>
                    <Badge variant="outline">Key Rotation</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Infrastructure Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cloud Environment</h4>
                    <p className="text-muted-foreground text-sm">
                      Hosted on secure, SOC 2 compliant cloud infrastructure with redundant systems across multiple availability zones.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Network Security</h4>
                    <p className="text-muted-foreground text-sm">
                      Multi-layered network security including firewalls, intrusion detection, and DDoS protection.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">SOC 2 Type II</Badge>
                    <Badge variant="outline">ISO 27001</Badge>
                    <Badge variant="outline">Multi-AZ</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fingerprint className="h-5 w-5" />
                  Access Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Authentication</h4>
                    <p className="text-muted-foreground text-sm">
                      Multi-factor authentication required for all administrative access and sensitive operations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Authorization</h4>
                    <p className="text-muted-foreground text-sm">
                      Role-based access control with principle of least privilege and regular access reviews.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">MFA Required</Badge>
                    <Badge variant="outline">RBAC</Badge>
                    <Badge variant="outline">SSO Support</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance and Certifications */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Certificate className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Compliance and Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  SOC 2 Type II
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Certified for Security, Availability, Processing Integrity, Confidentiality, and Privacy trust principles.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Security:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Confidentiality:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  GDPR Compliant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Fully compliant with EU General Data Protection Regulation requirements for data protection and privacy.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Data Processing:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>User Rights:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Portability:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  HIPAA Compliant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Healthcare customers can use our platform with confidence for processing protected health information.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>PHI Processing:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>BAA Available:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audit Logs:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  CCPA Compliant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Complies with California Consumer Privacy Act for enhanced consumer privacy protections.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Data Collection:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Opt-Out Rights:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Deletion:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-red-600" />
                  ISO 27001
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Certified information security management system following international standards.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>ISMS:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Management:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Continuous Improvement:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fingerprint className="h-5 w-5 text-indigo-600" />
                  PCI DSS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Payment Card Industry Data Security Standard compliant for secure payment processing.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Payment Security:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Card Data:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regular Audits:</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Security Practices</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Development Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Secure Coding</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• OWASP Top 10 compliance</li>
                      <li>• Static code analysis</li>
                      <li>• Dynamic application security testing</li>
                      <li>• Secure code review process</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">DevSecOps</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Security integrated in CI/CD</li>
                      <li>• Automated security scanning</li>
                      <li>• Infrastructure as Code security</li>
                      <li>• Security training for developers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Operational Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Monitoring & Detection</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 24/7 security monitoring</li>
                      <li>• SIEM integration</li>
                      <li>• Anomaly detection</li>
                      <li>• Real-time alerting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Incident Response</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Dedicated incident response team</li>
                      <li>• Regular drills and testing</li>
                      <li>• Clear escalation procedures</li>
                      <li>• Post-incident reviews</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Physical Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Data Centers</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Tier III+ data centers</li>
                      <li>• 24/7 physical security</li>
                      <li>• Biometric access control</li>
                      <li>• Video surveillance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Controls</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Fire suppression systems</li>
                      <li>• Climate control</li>
                      <li>• Redundant power systems</li>
                      <li>• Disaster recovery</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Third-Party Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Vendor Management</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Security assessments</li>
                      <li>• Contractual security requirements</li>
                      <li>• Regular audits</li>
                      <li>• Continuous monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Supply Chain</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Software supply chain security</li>
                      <li>• Dependency scanning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Security Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Multi-Factor Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Require multiple forms of authentication for enhanced account security.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">TOTP support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">SMS verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Hardware tokens</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Single Sign-On (SSO)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Integrate with your existing identity provider for seamless authentication.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">SAML 2.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">OAuth 2.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">OpenID Connect</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Audit Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprehensive logging of all system activities for security and compliance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Immutable logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Real-time monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Export capabilities</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Configurable data retention policies to meet your compliance requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Custom retention periods</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Automated deletion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Legal hold support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">IP Whitelisting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Restrict access to your account from trusted IP addresses only.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">IPv4/IPv6 support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">CIDR notation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Easy management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Session Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Advanced session controls for enhanced security and user management.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Session timeout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Concurrent session limits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Remote session termination</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Reporting */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Security Reporting</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Responsible Disclosure</h4>
                  <p className="text-muted-foreground mb-4">
                    We encourage responsible disclosure of security vulnerabilities. If you discover a potential security issue, please report it to us promptly.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Security Contact</h5>
                    <p className="text-blue-700 text-sm">
                      Email: security@callqa.com<br />
                      PGP Key Available Upon Request
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Bug Bounty Program</h4>
                  <p className="text-muted-foreground mb-4">
                    We offer a bug bounty program for qualifying security vulnerabilities discovered and responsibly disclosed.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <h6 className="font-semibold text-green-800 text-sm">Critical</h6>
                      <p className="text-green-700 text-xs">Up to $5,000</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <h6 className="font-semibold text-yellow-800 text-sm">High</h6>
                      <p className="text-yellow-700 text-xs">Up to $2,000</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <h6 className="font-semibold text-orange-800 text-sm">Medium</h6>
                      <p className="text-orange-700 text-xs">Up to $500</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <h6 className="font-semibold text-blue-800 text-sm">Low</h6>
                      <p className="text-blue-700 text-xs">Up to $100</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Response Times</h4>
                  <p className="text-muted-foreground mb-4">
                    We commit to the following response times for security reports:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3">
                      <div className="font-semibold text-sm mb-1">Critical Vulnerabilities</div>
                      <div className="text-muted-foreground text-xs">Response within 24 hours</div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="font-semibold text-sm mb-1">High Vulnerabilities</div>
                      <div className="text-muted-foreground text-xs">Response within 48 hours</div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="font-semibold text-sm mb-1">Medium Vulnerabilities</div>
                      <div className="text-muted-foreground text-xs">Response within 72 hours</div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="font-semibold text-sm mb-1">Low Vulnerabilities</div>
                      <div className="text-muted-foreground text-xs">Response within 1 week</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Security Best Practices</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">For Users</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use strong, unique passwords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Enable multi-factor authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Regularly review account activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Keep software and browsers updated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Be cautious with email links and attachments</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">For Administrators</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Implement least privilege access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Regular security training for team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Monitor and review access logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Keep systems and applications patched</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Have an incident response plan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}