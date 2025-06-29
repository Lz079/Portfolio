import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Sparkles, 
  Download, 
  Heart, 
  Share2, 
  Wand2, 
  Image as ImageIcon,
  Grid3X3,
  List,
  Filter,
  Search,
  Clock,
  CheckCircle,
  Eye,
  Palette
} from 'lucide-react'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('photorealistic')
  const [aspectRatio, setAspectRatio] = useState('square')
  const [isGenerating, setIsGenerating] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [favorites, setFavorites] = useState([])

  const styles = [
    { id: 'photorealistic', name: 'Photorealistic', description: 'Lifelike, detailed images' },
    { id: 'artistic', name: 'Artistic', description: 'Creative, expressive style' },
    { id: 'digital-art', name: 'Digital Art', description: 'Modern digital artwork' },
    { id: 'oil-painting', name: 'Oil Painting', description: 'Classic painted look' },
    { id: 'watercolor', name: 'Watercolor', description: 'Soft, flowing colors' },
    { id: 'sketch', name: 'Sketch', description: 'Hand-drawn appearance' }
  ]

  const aspectRatios = [
    { id: 'square', name: '1:1 Square', description: 'Perfect for social media' },
    { id: 'landscape', name: '16:9 Landscape', description: 'Wide format images' },
    { id: 'portrait', name: '9:16 Portrait', description: 'Tall format images' }
  ]

  // Sample gallery images (in a real app, these would be generated)
  const galleryImages = [
    {
      id: 1,
      prompt: 'Futuristic cityscape at sunset with flying cars',
      style: 'digital-art',
      aspectRatio: 'landscape',
      category: 'sci-fi',
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      likes: 142,
      downloads: 89,
      createdAt: '2025-01-15'
    },
    {
      id: 2,
      prompt: 'Majestic mountain landscape with aurora borealis',
      style: 'photorealistic',
      aspectRatio: 'landscape',
      category: 'nature',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      likes: 256,
      downloads: 178,
      createdAt: '2025-01-14'
    },
    {
      id: 3,
      prompt: 'Abstract geometric patterns in vibrant colors',
      style: 'artistic',
      aspectRatio: 'square',
      category: 'abstract',
      url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop',
      likes: 98,
      downloads: 67,
      createdAt: '2025-01-13'
    },
    {
      id: 4,
      prompt: 'Elegant portrait of a woman in renaissance style',
      style: 'oil-painting',
      aspectRatio: 'portrait',
      category: 'portrait',
      url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop',
      likes: 189,
      downloads: 134,
      createdAt: '2025-01-12'
    },
    {
      id: 5,
      prompt: 'Cyberpunk street scene with neon lights',
      style: 'digital-art',
      aspectRatio: 'landscape',
      category: 'sci-fi',
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      likes: 312,
      downloads: 245,
      createdAt: '2025-01-11'
    },
    {
      id: 6,
      prompt: 'Peaceful zen garden with cherry blossoms',
      style: 'watercolor',
      aspectRatio: 'square',
      category: 'nature',
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop',
      likes: 167,
      downloads: 123,
      createdAt: '2025-01-10'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Images', count: galleryImages.length },
    { id: 'nature', name: 'Nature', count: galleryImages.filter(img => img.category === 'nature').length },
    { id: 'sci-fi', name: 'Sci-Fi', count: galleryImages.filter(img => img.category === 'sci-fi').length },
    { id: 'portrait', name: 'Portrait', count: galleryImages.filter(img => img.category === 'portrait').length },
    { id: 'abstract', name: 'Abstract', count: galleryImages.filter(img => img.category === 'abstract').length }
  ]

  const filteredImages = galleryImages.filter(image => 
    selectedCategory === 'all' || image.category === selectedCategory
  )

  const generateImage = () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    // Simulate image generation
    setTimeout(() => {
      setIsGenerating(false)
      // In a real app, this would add the new image to the gallery
    }, 3000)
  }

  const toggleFavorite = (imageId) => {
    setFavorites(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    )
  }

  const getStyleColor = (styleId) => {
    const colors = {
      'photorealistic': 'bg-blue-500',
      'artistic': 'bg-purple-500',
      'digital-art': 'bg-cyan-500',
      'oil-painting': 'bg-amber-500',
      'watercolor': 'bg-pink-500',
      'sketch': 'bg-gray-500'
    }
    return colors[styleId] || 'bg-gray-500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Image Gallery</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Creative Visual Showcase</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                AI Powered
              </Badge>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share Gallery
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Generation Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wand2 className="h-5 w-5 text-purple-600" />
                  <span>Create New Image</span>
                </CardTitle>
                <CardDescription>
                  Generate stunning AI images from your imagination
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="prompt">Image Prompt *</Label>
                  <Textarea
                    id="prompt"
                    placeholder="Describe the image you want to create... e.g., 'A serene mountain lake at sunrise with mist rising from the water'"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Art Style</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {styles.map((styleOption) => (
                      <button
                        key={styleOption.id}
                        onClick={() => setStyle(styleOption.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          style === styleOption.id
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'
                        }`}
                      >
                        <div className="font-medium text-sm">{styleOption.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{styleOption.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Aspect Ratio</Label>
                  <div className="space-y-2">
                    {aspectRatios.map((ratio) => (
                      <button
                        key={ratio.id}
                        onClick={() => setAspectRatio(ratio.id)}
                        className={`w-full p-3 rounded-lg border text-left transition-all ${
                          aspectRatio === ratio.id
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'
                        }`}
                      >
                        <div className="font-medium text-sm">{ratio.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{ratio.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={generateImage} 
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {isGenerating ? (
                    <>
                      <Clock className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Image
                    </>
                  )}
                </Button>

                {isGenerating && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-300">
                      <Clock className="h-4 w-4 animate-spin" />
                      <span className="text-sm font-medium">Creating your masterpiece...</span>
                    </div>
                    <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                      This usually takes 10-30 seconds
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-2">
            {/* Gallery Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gallery</h2>
                <p className="text-gray-600 dark:text-gray-400">{filteredImages.length} AI-generated images</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1'
            }`}>
              {filteredImages.map(image => (
                <Card key={image.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={image.url}
                      alt={image.prompt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Overlay Actions */}
                    <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                        onClick={() => toggleFavorite(image.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.includes(image.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-600'
                          }`} 
                        />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Style Badge */}
                    <Badge className={`absolute top-2 left-2 ${getStyleColor(image.style)} text-white`}>
                      {styles.find(s => s.id === image.style)?.name}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        "{image.prompt}"
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{image.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4" />
                            <span>{image.downloads}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{image.likes * 3}</span>
                          </div>
                        </div>
                        <span>{image.createdAt}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {aspectRatios.find(r => r.id === image.aspectRatio)?.name}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Palette className="h-4 w-4 mr-2" />
                          Use Style
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <ImageIcon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No images found</h3>
                <p className="text-gray-600 dark:text-gray-400">Try selecting a different category</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1,247</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Images Generated</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Art Styles</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">15s</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Generation Time</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App

