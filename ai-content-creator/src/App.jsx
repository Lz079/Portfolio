import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Sparkles, FileText, Target, Clock, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const [topic, setTopic] = useState('')
  const [audience, setAudience] = useState('')
  const [tone, setTone] = useState('professional')
  const [length, setLength] = useState('medium')
  const [generatedContent, setGeneratedContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const toneOptions = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'authoritative', label: 'Authoritative' },
    { value: 'conversational', label: 'Conversational' }
  ]

  const lengthOptions = [
    { value: 'short', label: 'Short (300-500 words)' },
    { value: 'medium', label: 'Medium (500-800 words)' },
    { value: 'long', label: 'Long (800-1200 words)' }
  ]

  const generateContent = async () => {
    if (!topic.trim()) return
    
    setIsGenerating(true)
    
    // Simulate AI content generation
    setTimeout(() => {
      const sampleContent = `# ${topic}

## Introduction

In today's rapidly evolving digital landscape, understanding ${topic.toLowerCase()} has become increasingly important for ${audience || 'professionals and enthusiasts alike'}. This comprehensive guide will explore the key aspects, benefits, and practical applications that make this topic relevant in our modern world.

## Key Benefits

The importance of ${topic.toLowerCase()} cannot be overstated. Here are some compelling reasons why this matters:

**Enhanced Efficiency**: By implementing best practices in ${topic.toLowerCase()}, organizations can streamline their processes and achieve better results with less effort.

**Future-Ready Approach**: Staying ahead of trends in ${topic.toLowerCase()} ensures that you're prepared for upcoming challenges and opportunities in your field.

**Competitive Advantage**: Those who master ${topic.toLowerCase()} often find themselves with a significant edge over their competitors.

## Practical Implementation

When it comes to putting ${topic.toLowerCase()} into practice, consider these actionable steps:

1. **Assessment Phase**: Begin by evaluating your current situation and identifying areas where ${topic.toLowerCase()} can make the most impact.

2. **Strategic Planning**: Develop a comprehensive plan that aligns with your goals and resources.

3. **Execution**: Implement your strategy systematically, monitoring progress and making adjustments as needed.

4. **Optimization**: Continuously refine your approach based on results and feedback.

## Best Practices

To maximize the benefits of ${topic.toLowerCase()}, keep these best practices in mind:

- Stay informed about the latest developments and trends
- Invest in proper training and skill development
- Build strong networks with other professionals in the field
- Regularly review and update your strategies
- Measure results and track key performance indicators

## Common Challenges and Solutions

While implementing ${topic.toLowerCase()} can be highly beneficial, it's important to be aware of potential challenges:

**Challenge**: Resistance to change within organizations
**Solution**: Focus on clear communication about benefits and provide adequate training and support.

**Challenge**: Limited resources or budget constraints
**Solution**: Start with small, manageable projects that demonstrate value before scaling up.

**Challenge**: Keeping up with rapid technological changes
**Solution**: Establish a culture of continuous learning and stay connected with industry thought leaders.

## Future Outlook

The future of ${topic.toLowerCase()} looks promising, with emerging technologies and evolving best practices creating new opportunities for innovation and growth. Organizations that invest in understanding and implementing these concepts today will be well-positioned for success tomorrow.

## Conclusion

${topic} represents a significant opportunity for those willing to embrace its potential. By understanding the fundamentals, implementing best practices, and staying committed to continuous improvement, you can harness the power of ${topic.toLowerCase()} to achieve your goals and drive meaningful results.

Whether you're just getting started or looking to enhance your existing knowledge, the key is to take action and begin applying these concepts in your work. The journey may require effort and dedication, but the rewards are well worth the investment.

---

*This content was generated using advanced AI technology to demonstrate intelligent content creation capabilities. The AI analyzes your input parameters and creates engaging, relevant content tailored to your specific needs.*`

      setGeneratedContent(sampleContent)
      setIsGenerating(false)
    }, 2000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Content Creator</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Intelligent Blog Post Generator</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <CheckCircle className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span>Content Parameters</span>
              </CardTitle>
              <CardDescription>
                Define your content requirements and let AI create engaging blog posts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic">Topic *</Label>
                <Input
                  id="topic"
                  placeholder="e.g., Digital Marketing Strategies, AI in Healthcare, Remote Work Best Practices"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Input
                  id="audience"
                  placeholder="e.g., Small business owners, Tech professionals, Students"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Tone of Voice</Label>
                <div className="flex flex-wrap gap-2">
                  {toneOptions.map((option) => (
                    <Badge
                      key={option.value}
                      variant={tone === option.value ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setTone(option.value)}
                    >
                      {option.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Content Length</Label>
                <div className="flex flex-wrap gap-2">
                  {lengthOptions.map((option) => (
                    <Badge
                      key={option.value}
                      variant={length === option.value ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setLength(option.value)}
                    >
                      {option.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                onClick={generateContent} 
                disabled={!topic.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isGenerating ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Generating Content...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Blog Post
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Panel */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-green-600" />
                <span>Generated Content</span>
              </CardTitle>
              <CardDescription>
                AI-generated blog post ready for use
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generatedContent ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Content Ready
                    </Badge>
                    <Button variant="outline" size="sm" onClick={copyToClipboard}>
                      Copy to Clipboard
                    </Button>
                  </div>
                  <Textarea
                    value={generatedContent}
                    readOnly
                    className="min-h-[400px] font-mono text-sm"
                  />
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Generated content will appear here</p>
                  <p className="text-sm">Fill in the parameters and click generate to start</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            AI Content Creation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-fit mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Smart Generation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Advanced AI algorithms create contextually relevant and engaging content
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full w-fit mx-auto mb-4">
                    <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Targeted Content</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Customizable tone and style to match your brand and audience
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full w-fit mx-auto mb-4">
                    <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Time Efficient</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generate high-quality blog posts in seconds, not hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

