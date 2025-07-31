import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of AI in Audio Analysis",
      excerpt: "Explore how artificial intelligence is revolutionizing the way businesses analyze audio content and extract valuable insights.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "AI Technology",
      tags: ["AI", "Audio Analysis", "Machine Learning"]
    },
    {
      title: "Transforming Call Centers with Smart Analytics",
      excerpt: "Discover how leading call centers are using advanced audio analytics to improve customer satisfaction and operational efficiency.",
      author: "Michael Rodriguez",
      date: "March 8, 2025", 
      readTime: "7 min read",
      category: "Business Solutions",
      tags: ["Call Center", "Analytics", "Customer Service"]
    },
    {
      title: "Security Best Practices for Audio Data",
      excerpt: "Learn about the latest security protocols and best practices for protecting sensitive audio data in your organization.",
      author: "Jennifer Park",
      date: "March 1, 2025",
      readTime: "6 min read", 
      category: "Security",
      tags: ["Security", "Data Protection", "Compliance"]
    },
    {
      title: "Measuring ROI in Audio Analysis",
      excerpt: "A comprehensive guide to calculating and maximizing the return on investment for audio analysis solutions.",
      author: "David Thompson",
      date: "February 22, 2025",
      readTime: "8 min read",
      category: "Business Strategy",
      tags: ["ROI", "Business Strategy", "Analytics"]
    },
    {
      title: "The Evolution of Speech Recognition",
      excerpt: "From early systems to modern AI-powered solutions, explore the fascinating journey of speech recognition technology.",
      author: "Dr. Lisa Wang",
      date: "February 15, 2025",
      readTime: "10 min read",
      category: "Technology History",
      tags: ["Speech Recognition", "Technology", "History"]
    },
    {
      title: "Implementing Audio Analysis in Healthcare",
      excerpt: "How healthcare providers are leveraging audio analysis to improve patient care and operational efficiency.",
      author: "Dr. James Mitchell",
      date: "February 8, 2025",
      readTime: "6 min read",
      category: "Healthcare",
      tags: ["Healthcare", "Patient Care", "Technology"]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CallQA Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, trends, and expert perspectives on audio analysis, AI technology, and business transformation
          </p>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <Badge className="mb-4">Featured</Badge>
                <h3 className="text-2xl font-bold mb-4">The Future of AI in Audio Analysis</h3>
                <p className="text-muted-foreground mb-6">
                  Explore how artificial intelligence is revolutionizing the way businesses analyze audio content and extract valuable insights. From real-time transcription to advanced sentiment analysis, discover the cutting-edge technologies shaping the future of audio analytics.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Dr. Sarah Chen</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>March 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-6">
                  <Badge variant="secondary">AI Technology</Badge>
                  <Badge variant="outline">Audio Analysis</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                </div>
              </div>
              <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-primary/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Featured Article</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest insights and trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Badge className="mb-2 w-fit">{post.category}</Badge>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">
              Explore articles organized by topic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center p-6">
              <h3 className="font-semibold mb-2">AI Technology</h3>
              <p className="text-sm text-muted-foreground">12 articles</p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center p-6">
              <h3 className="font-semibold mb-2">Business Solutions</h3>
              <p className="text-sm text-muted-foreground">8 articles</p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center p-6">
              <h3 className="font-semibold mb-2">Security</h3>
              <p className="text-sm text-muted-foreground">6 articles</p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center p-6">
              <h3 className="font-semibold mb-2">Business Strategy</h3>
              <p className="text-sm text-muted-foreground">9 articles</p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center p-6">
              <h3 className="font-semibold mb-2">Technology History</h3>
              <p className="text-sm text-muted-foreground">4 articles</p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center p-6">
              <h3 className="font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground">7 articles</p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center p-6">
              <h3 className="font-semibold mb-2">Case Studies</h3>
              <p className="text-sm text-muted-foreground">5 articles</p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center p-6">
              <h3 className="font-semibold mb-2">Industry Trends</h3>
              <p className="text-sm text-muted-foreground">11 articles</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest insights and industry trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}