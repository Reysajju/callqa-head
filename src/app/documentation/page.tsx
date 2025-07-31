import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Code, Users, Settings, Shield, Zap, FileText, Video, Download, ExternalLink } from "lucide-react"

export default function DocumentationPage() {
  const gettingStartedTopics = [
    {
      title: "Account Setup",
      description: "Learn how to create and configure your CallQA account",
      difficulty: "Beginner",
      time: "10 minutes"
    },
    {
      title: "First Audio Upload",
      description: "Upload and process your first audio file",
      difficulty: "Beginner", 
      time: "15 minutes"
    },
    {
      title: "Dashboard Navigation",
      description: "Understanding the CallQA dashboard interface",
      difficulty: "Beginner",
      time: "8 minutes"
    },
    {
      title: "Setting Up Analysis Templates",
      description: "Create custom analysis templates for your needs",
      difficulty: "Intermediate",
      time: "20 minutes"
    }
  ]

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/transcribe",
      description: "Upload and transcribe audio files",
      example: `POST /api/v1/transcribe
Content-Type: multipart/form-data

{
  "file": "audio.mp3",
  "language": "en",
  "analysis_template": "customer_service"
}`
    },
    {
      method: "GET",
      endpoint: "/api/v1/transcriptions/{id}",
      description: "Retrieve transcription results",
      example: `GET /api/v1/transcriptions/12345
Authorization: Bearer your_api_key

{
  "id": "12345",
  "status": "completed",
  "text": "Transcribed text...",
  "analysis": {...}
}`
    },
    {
      method: "POST",
      endpoint: "/api/v1/analyze",
      description: "Analyze existing transcription",
      example: `POST /api/v1/analyze
Content-Type: application/json

{
  "transcription_id": "12345",
  "analysis_type": "sentiment",
  "custom_keywords": ["satisfied", "frustrated"]
}`
    },
    {
      method: "GET",
      endpoint: "/api/v1/reports",
      description: "Generate analysis reports",
      example: `GET /api/v1/reports?start_date=2025-01-01&end_date=2025-03-01
Authorization: Bearer your_api_key

{
  "reports": [...],
  "summary": {...}
}`
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you integrate and make the most of CallQA
          </p>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Quick Start Guide</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Getting Started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  New to CallQA? Follow our step-by-step guide to get up and running in minutes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Create Account</h4>
                      <p className="text-sm text-muted-foreground">Sign up and verify your email</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Upload Audio</h4>
                      <p className="text-sm text-muted-foreground">Upload your first audio file</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Configure Analysis</h4>
                      <p className="text-sm text-muted-foreground">Set up analysis parameters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">View Results</h4>
                      <p className="text-sm text-muted-foreground">Access your insights and reports</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  API Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Integrate CallQA into your applications using our RESTful API.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <code className="text-sm">
                    curl -X POST "https://api.callqa.com/v1/transcribe" <br />
                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" <br />
                    &nbsp;&nbsp;-H "Content-Type: multipart/form-data" <br />
                    &nbsp;&nbsp;-F "file=@audio.mp3"
                  </code>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Secure authentication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-600" />
                    <span>Real-time processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-purple-600" />
                    <span>Comprehensive documentation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Topics */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Getting Started Topics</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {gettingStartedTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant={topic.difficulty === "Beginner" ? "default" : "secondary"}>
                        {topic.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{topic.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{topic.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">API Reference</h2>
          </div>
          
          <div className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant={endpoint.method === "POST" ? "default" : "secondary"}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm bg-muted px-2 py-1 rounded">{endpoint.endpoint}</code>
                  </div>
                  <CardTitle className="text-lg">{endpoint.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      <code>{endpoint.example}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Videos */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Video className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Video Tutorials</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Video className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">First Steps with CallQA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn the basics of navigating the CallQA platform and uploading your first audio file.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>12:45</span>
                  <span>•</span>
                  <span>Beginner</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Video className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">Advanced Analysis Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dive deep into creating custom analysis templates and advanced configuration options.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>18:30</span>
                  <span>•</span>
                  <span>Intermediate</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Video className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">API Integration Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Step-by-step guide to integrating CallQA API into your applications and workflows.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>25:15</span>
                  <span>•</span>
                  <span>Advanced</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Settings className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="authentication">
              <AccordionTrigger>How do I authenticate with the API?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Authentication is done using Bearer tokens. You can generate your API key from the dashboard under Settings → API Keys. Include the key in the Authorization header of your requests.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="limits">
              <AccordionTrigger>What are the API rate limits?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Rate limits depend on your subscription plan. Free tier allows 100 requests per hour, Pro tier allows 1000 requests per hour, and Enterprise plans have custom limits. Check your dashboard for current usage and limits.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="formats">
              <AccordionTrigger>What audio formats are supported?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We support MP3, WAV, M4A, FLAC, and OGG formats. For best results, we recommend using high-quality audio files with minimal background noise and clear speech.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="languages">
              <AccordionTrigger>Which languages are supported?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Currently, we support English, Spanish, French, German, Italian, Portuguese, Dutch, and Russian. We're constantly adding more languages to our platform.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Download className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Downloads & Resources</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  API Documentation PDF
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete API documentation in PDF format for offline reference.
                </p>
                <button className="flex items-center gap-2 text-primary hover:underline">
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  SDK Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Official SDK libraries for Python, JavaScript, Java, and C#.
                </p>
                <button className="flex items-center gap-2 text-primary hover:underline">
                  <ExternalLink className="h-4 w-4" />
                  View SDKs
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  User Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive user guide covering all features and functionality.
                </p>
                <button className="flex items-center gap-2 text-primary hover:underline">
                  <Download className="h-4 w-4" />
                  Download Guide
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Training Videos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Collection of training videos and tutorials.
                </p>
                <button className="flex items-center gap-2 text-primary hover:underline">
                  <ExternalLink className="h-4 w-4" />
                  Watch Videos
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}