import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Code, Copy, CheckCircle, AlertCircle, Clock, Database, Shield, Zap } from "lucide-react"
import { useState } from "react"

export default function APIReferencePage() {
  const [copiedCode, setCopiedCode] = useState("")

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const endpoints = {
    transcription: [
      {
        method: "POST",
        path: "/v1/transcribe",
        description: "Upload and transcribe audio file",
        authentication: "Required",
        rateLimit: "10/minute",
        parameters: [
          { name: "file", type: "file", required: true, description: "Audio file to transcribe" },
          { name: "language", type: "string", required: false, description: "Language code (e.g., 'en', 'es', 'fr')" },
          { name: "analysis_template", type: "string", required: false, description: "Custom analysis template ID" },
          { name: "webhook_url", type: "string", required: false, description: "URL to receive webhook notifications" }
        ],
        response: `{
  "id": "transcription_123456",
  "status": "processing",
  "file_name": "customer_call.mp3",
  "duration": 245,
  "language": "en",
  "created_at": "2025-03-15T10:30:00Z",
  "webhook_url": "https://your-app.com/webhook"
}`,
        example: `curl -X POST "https://api.callqa.com/v1/transcribe" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@customer_call.mp3" \\
  -F "language=en" \\
  -F "analysis_template=customer_service"`
      },
      {
        method: "GET",
        path: "/v1/transcriptions/{id}",
        description: "Get transcription status and results",
        authentication: "Required",
        rateLimit: "60/minute",
        parameters: [
          { name: "id", type: "path", required: true, description: "Transcription ID" },
          { name: "include_analysis", type: "boolean", required: false, description: "Include analysis results" }
        ],
        response: `{
  "id": "transcription_123456",
  "status": "completed",
  "file_name": "customer_call.mp3",
  "duration": 245,
  "text": "Hello, thank you for calling...",
  "segments": [
    {
      "start": 0.0,
      "end": 3.5,
      "text": "Hello, thank you for calling",
      "speaker": "agent",
      "confidence": 0.98
    }
  ],
  "analysis": {
    "sentiment": "positive",
    "keywords": ["thank you", "help", "satisfied"],
    "quality_score": 8.5
  },
  "created_at": "2025-03-15T10:30:00Z",
  "completed_at": "2025-03-15T10:35:00Z"
}`,
        example: `curl -X GET "https://api.callqa.com/v1/transcriptions/transcription_123456" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json"`
      }
    ],
    analysis: [
      {
        method: "POST",
        path: "/v1/analyze",
        description: "Analyze existing transcription",
        authentication: "Required",
        rateLimit: "30/minute",
        parameters: [
          { name: "transcription_id", type: "string", required: true, description: "ID of completed transcription" },
          { name: "analysis_type", type: "string", required: true, description: "Type of analysis (sentiment, keywords, quality)" },
          { name: "custom_keywords", type: "array", required: false, description: "Custom keywords to analyze" },
          { name: "threshold", type: "number", required: false, description: "Confidence threshold (0-1)" }
        ],
        response: `{
  "analysis_id": "analysis_789012",
  "transcription_id": "transcription_123456",
  "analysis_type": "sentiment",
  "results": {
    "overall_sentiment": "positive",
    "sentiment_score": 0.75,
    "segments": [
      {
        "start": 0.0,
        "end": 30.5,
        "sentiment": "positive",
        "confidence": 0.85
      }
    ],
    "keywords_found": ["satisfied", "help", "quick"],
    "quality_metrics": {
      "clarity": 8.5,
      "professionalism": 9.0,
      "resolution": 8.0
    }
  },
  "created_at": "2025-03-15T10:40:00Z"
}`,
        example: `curl -X POST "https://api.callqa.com/v1/analyze" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "transcription_id": "transcription_123456",
    "analysis_type": "sentiment",
    "custom_keywords": ["satisfied", "frustrated"],
    "threshold": 0.7
  }'`
      }
    ],
    reports: [
      {
        method: "GET",
        path: "/v1/reports",
        description: "Generate analysis reports",
        authentication: "Required",
        rateLimit: "10/minute",
        parameters: [
          { name: "start_date", type: "string", required: false, description: "Start date (YYYY-MM-DD)" },
          { name: "end_date", type: "string", required: false, description: "End date (YYYY-MM-DD)" },
          { name: "format", type: "string", required: false, description: "Report format (json, csv, pdf)" },
          { name: "include_transcripts", type: "boolean", required: false, description: "Include full transcripts" }
        ],
        response: `{
  "report_id": "report_345678",
  "period": {
    "start": "2025-03-01",
    "end": "2025-03-15"
  },
  "summary": {
    "total_transcriptions": 245,
    "total_duration": 12540,
    "average_sentiment": 0.72,
    "quality_score": 8.2
  },
  "trends": {
    "sentiment_trend": "positive",
    "quality_improvement": 0.15,
    "keyword_frequency": {
      "satisfied": 156,
      "help": 142,
      "quick": 98
    }
  },
  "generated_at": "2025-03-15T11:00:00Z",
  "download_url": "https://api.callqa.com/reports/report_345678.pdf"
}`,
        example: `curl -X GET "https://api.callqa.com/v1/reports?start_date=2025-03-01&end_date=2025-03-15&format=pdf" \\
  -H "Authorization: Bearer your_api_key"`
      }
    ]
  }

  const webhooks = [
    {
      event: "transcription.completed",
      description: "Fired when transcription is completed",
      payload: `{
  "event": "transcription.completed",
  "data": {
    "id": "transcription_123456",
    "status": "completed",
    "text": "Transcribed text...",
    "duration": 245,
    "language": "en",
    "created_at": "2025-03-15T10:30:00Z",
    "completed_at": "2025-03-15T10:35:00Z"
  }
}`
    },
    {
      event: "transcription.failed",
      description: "Fired when transcription fails",
      payload: `{
  "event": "transcription.failed",
  "data": {
    "id": "transcription_123456",
    "status": "failed",
    "error": "Audio format not supported",
    "created_at": "2025-03-15T10:30:00Z"
  }
}`
    },
    {
      event: "analysis.completed",
      description: "Fired when analysis is completed",
      payload: `{
  "event": "analysis.completed",
  "data": {
    "analysis_id": "analysis_789012",
    "transcription_id": "transcription_123456",
    "analysis_type": "sentiment",
    "results": {...},
    "created_at": "2025-03-15T10:40:00Z"
  }
}`
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">API Reference</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete documentation for the CallQA REST API. Build powerful integrations with our audio analysis platform.
          </p>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Authentication</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>API Key Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                All API requests must include your API key in the Authorization header using the Bearer token scheme.
              </p>
              
              <div className="bg-muted p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-2">
                  <code className="text-sm">Authorization: Bearer your_api_key</code>
                  <button 
                    onClick={() => copyToClipboard("Authorization: Bearer your_api_key")}
                    className="p-1 hover:bg-muted-foreground/10 rounded"
                  >
                    {copiedCode === "Authorization: Bearer your_api_key" ? 
                      <CheckCircle className="h-4 w-4 text-green-600" /> : 
                      <Copy className="h-4 w-4" />
                    }
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Getting Your API Key</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Log in to your CallQA dashboard</li>
                    <li>2. Navigate to Settings → API Keys</li>
                    <li>3. Click "Generate New Key"</li>
                    <li>4. Copy and securely store your key</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Security Best Practices</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Keep your API key secret</li>
                    <li>• Use environment variables</li>
                    <li>• Rotate keys regularly</li>
                    <li>• Monitor usage in dashboard</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rate Limits Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Rate Limits</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>API Rate Limits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Free</div>
                  <div className="text-sm text-muted-foreground">100 requests/hour</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Pro</div>
                  <div className="text-sm text-muted-foreground">1,000 requests/hour</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Enterprise</div>
                  <div className="text-sm text-muted-foreground">Custom limits</div>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Response Headers</h4>
                <div className="space-y-2 text-sm">
                  <div><code>X-RateLimit-Limit: 1000</code> - Your rate limit</div>
                  <div><code>X-RateLimit-Remaining: 950</code> - Remaining requests</div>
                  <div><code>X-RateLimit-Reset: 1640995200</code> - Reset timestamp</div>
                  <div><code>Retry-After: 60</code> - Seconds to wait (429 response)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">API Endpoints</h2>
          </div>
          
          <Tabs defaultValue="transcription" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="transcription">Transcription</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="transcription" className="mt-6">
              <div className="space-y-6">
                {endpoints.transcription.map((endpoint, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={endpoint.method === "POST" ? "default" : "secondary"}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-lg bg-muted px-3 py-1 rounded">{endpoint.path}</code>
                      </div>
                      <CardTitle>{endpoint.description}</CardTitle>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>{endpoint.authentication}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{endpoint.rateLimit}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Parameters</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left p-2">Name</th>
                                  <th className="text-left p-2">Type</th>
                                  <th className="text-left p-2">Required</th>
                                  <th className="text-left p-2">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <tr key={paramIndex} className="border-b">
                                    <td className="p-2 font-mono">{param.name}</td>
                                    <td className="p-2">{param.type}</td>
                                    <td className="p-2">
                                      {param.required ? 
                                        <Badge variant="destructive" className="text-xs">Required</Badge> : 
                                        <Badge variant="outline" className="text-xs">Optional</Badge>
                                      }
                                    </td>
                                    <td className="p-2">{param.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Response</h4>
                          <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <pre className="text-sm">
                              <code>{endpoint.response}</code>
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Example</h4>
                          <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <div className="flex justify-between items-start mb-2">
                              <pre className="text-sm">
                                <code>{endpoint.example}</code>
                              </pre>
                              <button 
                                onClick={() => copyToClipboard(endpoint.example)}
                                className="p-1 hover:bg-muted-foreground/10 rounded flex-shrink-0"
                              >
                                {copiedCode === endpoint.example ? 
                                  <CheckCircle className="h-4 w-4 text-green-600" /> : 
                                  <Copy className="h-4 w-4" />
                                }
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-6">
              <div className="space-y-6">
                {endpoints.analysis.map((endpoint, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={endpoint.method === "POST" ? "default" : "secondary"}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-lg bg-muted px-3 py-1 rounded">{endpoint.path}</code>
                      </div>
                      <CardTitle>{endpoint.description}</CardTitle>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>{endpoint.authentication}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{endpoint.rateLimit}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Parameters</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left p-2">Name</th>
                                  <th className="text-left p-2">Type</th>
                                  <th className="text-left p-2">Required</th>
                                  <th className="text-left p-2">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <tr key={paramIndex} className="border-b">
                                    <td className="p-2 font-mono">{param.name}</td>
                                    <td className="p-2">{param.type}</td>
                                    <td className="p-2">
                                      {param.required ? 
                                        <Badge variant="destructive" className="text-xs">Required</Badge> : 
                                        <Badge variant="outline" className="text-xs">Optional</Badge>
                                      }
                                    </td>
                                    <td className="p-2">{param.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Response</h4>
                          <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <pre className="text-sm">
                              <code>{endpoint.response}</code>
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Example</h4>
                          <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <div className="flex justify-between items-start mb-2">
                              <pre className="text-sm">
                                <code>{endpoint.example}</code>
                              </pre>
                              <button 
                                onClick={() => copyToClipboard(endpoint.example)}
                                className="p-1 hover:bg-muted-foreground/10 rounded flex-shrink-0"
                              >
                                {copiedCode === endpoint.example ? 
                                  <CheckCircle className="h-4 w-4 text-green-600" /> : 
                                  <Copy className="h-4 w-4" />
                                }
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="mt-6">
              <div className="space-y-6">
                {endpoints.reports.map((endpoint, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={endpoint.method === "POST" ? "default" : "secondary"}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-lg bg-muted px-3 py-1 rounded">{endpoint.path}</code>
                      </div>
                      <CardTitle>{endpoint.description}</CardTitle>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>{endpoint.authentication}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{endpoint.rateLimit}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Parameters</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left p-2">Name</th>
                                  <th className="text-left p-2">Type</th>
                                  <th className="text-left p-2">Required</th>
                                  <th className="text-left p-2">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <tr key={paramIndex} className="border-b">
                                    <td className="p-2 font-mono">{param.name}</td>
                                    <td className="p-2">{param.type}</td>
                                    <td className="p-2">
                                      {param.required ? 
                                        <Badge variant="destructive" className="text-xs">Required</Badge> : 
                                        <Badge variant="outline" className="text-xs">Optional</Badge>
                                      }
                                    </td>
                                    <td className="p-2">{param.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Response</h4>
                          <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <pre className="text-sm">
                              <code>{endpoint.response}</code>
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Example</h4>
                          <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <div className="flex justify-between items-start mb-2">
                              <pre className="text-sm">
                                <code>{endpoint.example}</code>
                              </pre>
                              <button 
                                onClick={() => copyToClipboard(endpoint.example)}
                                className="p-1 hover:bg-muted-foreground/10 rounded flex-shrink-0"
                              >
                                {copiedCode === endpoint.example ? 
                                  <CheckCircle className="h-4 w-4 text-green-600" /> : 
                                  <Copy className="h-4 w-4" />
                                }
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Webhooks Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Webhooks</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Webhook Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Configure webhooks to receive real-time notifications about transcription and analysis events.
              </p>
              
              <div className="space-y-6">
                {webhooks.map((webhook, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline">{webhook.event}</Badge>
                      <span className="text-sm text-muted-foreground">{webhook.description}</span>
                    </div>
                    <div className="bg-muted p-3 rounded overflow-x-auto">
                      <pre className="text-sm">
                        <code>{webhook.payload}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Error Handling Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Error Handling</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>HTTP Status Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Client Errors (4xx)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>400 Bad Request</span>
                      <span className="text-muted-foreground">Invalid request format</span>
                    </div>
                    <div className="flex justify-between">
                      <span>401 Unauthorized</span>
                      <span className="text-muted-foreground">Invalid API key</span>
                    </div>
                    <div className="flex justify-between">
                      <span>403 Forbidden</span>
                      <span className="text-muted-foreground">Insufficient permissions</span>
                    </div>
                    <div className="flex justify-between">
                      <span>404 Not Found</span>
                      <span className="text-muted-foreground">Resource not found</span>
                    </div>
                    <div className="flex justify-between">
                      <span>422 Unprocessable Entity</span>
                      <span className="text-muted-foreground">Validation error</span>
                    </div>
                    <div className="flex justify-between">
                      <span>429 Too Many Requests</span>
                      <span className="text-muted-foreground">Rate limit exceeded</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Server Errors (5xx)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>500 Internal Server Error</span>
                      <span className="text-muted-foreground">Server error</span>
                    </div>
                    <div className="flex justify-between">
                      <span>502 Bad Gateway</span>
                      <span className="text-muted-foreground">Gateway error</span>
                    </div>
                    <div className="flex justify-between">
                      <span>503 Service Unavailable</span>
                      <span className="text-muted-foreground">Service temporarily down</span>
                    </div>
                    <div className="flex justify-between">
                      <span>504 Gateway Timeout</span>
                      <span className="text-muted-foreground">Gateway timeout</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Error Response Format</h4>
                <pre className="text-sm">
                  <code>{`{
  "error": {
    "code": "invalid_api_key",
    "message": "The provided API key is invalid or expired",
    "details": {
      "request_id": "req_123456"
    }
  }
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Database className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">SDKs & Libraries</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Python SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Official Python library for CallQA API integration.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <code className="text-sm">pip install callqa-python</code>
                </div>
                <button className="text-primary hover:underline text-sm">View Documentation →</button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>JavaScript SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Modern JavaScript/TypeScript library for browser and Node.js.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <code className="text-sm">npm install callqa-js</code>
                </div>
                <button className="text-primary hover:underline text-sm">View Documentation →</button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Java SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Java library for enterprise application integration.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <code className="text-sm">implementation 'com.callqa:callqa-java:1.0.0'</code>
                </div>
                <button className="text-primary hover:underline text-sm">View Documentation →</button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>C# SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  .NET library for Windows and cross-platform applications.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <code className="text-sm">Install-Package CallQA.NET</code>
                </div>
                <button className="text-primary hover:underline text-sm">View Documentation →</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}