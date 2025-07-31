import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Mic, Shield, Clock, Settings, Globe, MessageSquare, Zap } from "lucide-react"

export default function FAQPage() {
  const faqData = [
    {
      question: "What is CallQA and how does it work?",
      answer: "CallQA is an AI-powered audio transcription and analysis platform that converts speech to text and provides detailed insights. It uses advanced machine learning algorithms to transcribe audio files and analyze them based on your specific requirements.",
      icon: HelpCircle
    },
    {
      question: "What types of audio files can I analyze with CallQA?",
      answer: "CallQA supports various audio formats including MP3, WAV, M4A, and more. It's ideal for analyzing customer service calls, meetings, interviews, and any other voice recordings.",
      icon: Mic
    },
    {
      question: "How accurate is the transcription?",
      answer: "Our AI-powered transcription system achieves an accuracy rate of up to 95% for clear audio recordings. The accuracy may vary depending on factors such as audio quality, background noise, and accent clarity.",
      icon: Zap
    },
    {
      question: "Is my data secure with CallQA?",
      answer: "Yes, we take data security seriously. All audio files and transcriptions are encrypted both in transit and at rest. We comply with industry-standard security protocols and data protection regulations.",
      icon: Shield
    },
    {
      question: "How long does it take to transcribe an audio file?",
      answer: "Transcription time depends on the audio file length and quality. Typically, a 1-hour recording is transcribed within 5-10 minutes.",
      icon: Clock
    },
    {
      question: "Can I customize the analysis criteria?",
      answer: "Yes, CallQA allows you to set custom parameters and keywords for analysis based on your specific needs and standard operating procedures.",
      icon: Settings
    },
    {
      question: "Do you offer integration with other tools?",
      answer: "Yes, CallQA provides API access and integrates with popular CRM systems, call center software, and communication platforms.",
      icon: MessageSquare
    },
    {
      question: "What languages does CallQA support?",
      answer: "Currently, CallQA supports transcription and analysis in multiple languages including English, Spanish, French, German, and more.",
      icon: Globe
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about CallQA and our audio analysis services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about CallQA
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <faq.icon className="h-5 w-5 text-primary" />
                    </div>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground ml-13">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative FAQ View */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Access FAQ</h2>
            <p className="text-lg text-muted-foreground">
              Browse questions by category
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="general" className="border-b">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  General Questions
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What is CallQA and how does it work?</h4>
                    <p className="text-muted-foreground">
                      CallQA is an AI-powered audio transcription and analysis platform that converts speech to text and provides detailed insights. It uses advanced machine learning algorithms to transcribe audio files and analyze them based on your specific requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What types of audio files can I analyze with CallQA?</h4>
                    <p className="text-muted-foreground">
                      CallQA supports various audio formats including MP3, WAV, M4A, and more. It's ideal for analyzing customer service calls, meetings, interviews, and any other voice recordings.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical" className="border-b">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  Technical Details
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">How accurate is the transcription?</h4>
                    <p className="text-muted-foreground">
                      Our AI-powered transcription system achieves an accuracy rate of up to 95% for clear audio recordings. The accuracy may vary depending on factors such as audio quality, background noise, and accent clarity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How long does it take to transcribe an audio file?</h4>
                    <p className="text-muted-foreground">
                      Transcription time depends on the audio file length and quality. Typically, a 1-hour recording is transcribed within 5-10 minutes.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security" className="border-b">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  Security & Privacy
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Is my data secure with CallQA?</h4>
                    <p className="text-muted-foreground">
                      Yes, we take data security seriously. All audio files and transcriptions are encrypted both in transit and at rest. We comply with industry-standard security protocols and data protection regulations.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="features" className="border-b">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-primary" />
                  Features & Customization
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Can I customize the analysis criteria?</h4>
                    <p className="text-muted-foreground">
                      Yes, CallQA allows you to set custom parameters and keywords for analysis based on your specific needs and standard operating procedures.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Do you offer integration with other tools?</h4>
                    <p className="text-muted-foreground">
                      Yes, CallQA provides API access and integrates with popular CRM systems, call center software, and communication platforms.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="languages" className="border-b">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  Language Support
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What languages does CallQA support?</h4>
                    <p className="text-muted-foreground">
                      Currently, CallQA supports transcription and analysis in multiple languages including English, Spanish, French, German, and more.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <MessageSquare className="h-5 w-5" />
                  Contact Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get personalized help from our support team
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <HelpCircle className="h-5 w-5" />
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore our comprehensive documentation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}