import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Search, 
  Menu, 
  User, 
  Truck, 
  Shield, 
  RotateCcw,
  Filter,
  Grid3X3,
  List
} from 'lucide-react'
import './App.css'

// Import product images
import laptopImg from './assets/laptop.jpg'
import headphonesImg from './assets/headphones.png'
import smartphoneImg from './assets/smartphone.jpg'
import smartwatchImg from './assets/smartwatch.jpg'
import keyboardImg from './assets/keyboard.jpg'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [wishlist, setWishlist] = useState([])

  const products = [
    {
      id: 1,
      name: 'MacBook Pro 16"',
      category: 'laptops',
      price: 2499,
      originalPrice: 2799,
      rating: 4.8,
      reviews: 1247,
      image: laptopImg,
      description: 'Powerful laptop with M3 Pro chip, 18GB RAM, 512GB SSD',
      features: ['M3 Pro Chip', '18GB RAM', '512GB SSD', '16" Liquid Retina Display'],
      inStock: true,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Beats Solo4 Wireless',
      category: 'audio',
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 892,
      image: headphonesImg,
      description: 'Premium wireless headphones with active noise cancellation',
      features: ['40hr Battery', 'Active Noise Cancellation', 'Spatial Audio', 'Fast Fuel'],
      inStock: true,
      badge: 'Sale'
    },
    {
      id: 3,
      name: 'iPhone 15 Pro',
      category: 'phones',
      price: 999,
      originalPrice: 1099,
      rating: 4.9,
      reviews: 2156,
      image: smartphoneImg,
      description: 'Latest iPhone with titanium design and A17 Pro chip',
      features: ['A17 Pro Chip', '128GB Storage', 'Pro Camera System', 'Titanium Design'],
      inStock: true,
      badge: 'New'
    },
    {
      id: 4,
      name: 'Apple Watch Series 9',
      category: 'wearables',
      price: 399,
      originalPrice: 429,
      rating: 4.7,
      reviews: 1543,
      image: smartwatchImg,
      description: 'Advanced smartwatch with health monitoring and fitness tracking',
      features: ['S9 Chip', 'Always-On Display', 'Health Monitoring', 'Water Resistant'],
      inStock: true,
      badge: 'Popular'
    },
    {
      id: 5,
      name: 'Gaming Mechanical Keyboard',
      category: 'accessories',
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      reviews: 687,
      image: keyboardImg,
      description: 'RGB mechanical gaming keyboard with blue switches',
      features: ['Mechanical Blue Switches', 'RGB Backlight', 'Anti-Ghosting', 'USB-C'],
      inStock: false,
      badge: 'Limited'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'laptops', name: 'Laptops', count: products.filter(p => p.category === 'laptops').length },
    { id: 'phones', name: 'Smartphones', count: products.filter(p => p.category === 'phones').length },
    { id: 'audio', name: 'Audio', count: products.filter(p => p.category === 'audio').length },
    { id: 'wearables', name: 'Wearables', count: products.filter(p => p.category === 'wearables').length },
    { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Seller': return 'bg-green-500'
      case 'Sale': return 'bg-red-500'
      case 'New': return 'bg-blue-500'
      case 'Popular': return 'bg-purple-500'
      case 'Limited': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TechGear Pro</h1>
                <p className="text-xs text-gray-500">Premium Electronics</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Premium Tech at Your Fingertips</h2>
            <p className="text-xl mb-8 text-blue-100">Discover the latest in technology with unbeatable prices and quality</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Truck className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $99</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">2-Year Warranty</h3>
                <p className="text-sm text-gray-600">On all products</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <RotateCcw className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">30-Day Returns</h3>
                <p className="text-sm text-gray-600">Hassle-free returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>Categories</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600">{filteredProducts.length} products found</p>
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

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.badge && (
                      <Badge className={`absolute top-2 left-2 ${getBadgeColor(product.badge)} text-white`}>
                        {product.badge}
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          wishlist.includes(product.id) 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-600'
                        }`} 
                      />
                    </Button>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">
                              ${product.price}
                            </span>
                            {product.originalPrice > product.price && (
                              <span className="text-sm text-gray-500 line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                          <div className={`text-xs ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </div>
                        </div>
                        
                        <Button
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <ShoppingCart className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">TechGear Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for premium electronics and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Laptops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smartphones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Audio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wearables</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 TechGear Pro. All rights reserved. Built with modern web technologies.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

