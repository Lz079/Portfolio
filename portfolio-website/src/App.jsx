import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Brain, 
  Code, 
  Palette, 
  TrendingUp, 
  Users, 
  Star,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Download,
  ChevronDown,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Zap,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  MessageSquare,
  BarChart3,
  Lightbulb,
  Rocket,
  Shield
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Import images
import profilePhoto from './assets/profile-photo.jpg'
import aiWorkspace from './assets/ai-workspace.webp'
import modernOffice from './assets/modern-office.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: Brain,
      title: "AI Content Creation",
      description: "Leverage cutting-edge AI to create compelling content that engages your audience and drives conversions.",
      features: ["Blog Posts & Articles", "Social Media Content", "Email Campaigns", "Product Descriptions"]
    },
    {
      icon: Code,
      title: "eCommerce Development",
      description: "Build high-converting online stores with modern design and seamless user experience.",
      features: ["Custom Store Design", "Payment Integration", "Mobile Optimization", "SEO Implementation"]
    },
    {
      icon: Palette,
      title: "AI Image Generation",
      description: "Create stunning visuals using AI technology for marketing, branding, and content needs.",
      features: ["Marketing Graphics", "Product Mockups", "Brand Assets", "Custom Illustrations"]
    },
    {
      icon: TrendingUp,
      title: "Campaign Copywriting",
      description: "Craft persuasive copy that converts prospects into customers across all marketing channels.",
      features: ["Ad Copy", "Landing Pages", "Email Sequences", "Sales Funnels"]
    },
    {
      icon: BarChart3,
      title: "Presentations",
      description: "Design impactful presentations that communicate your message effectively to any audience.",
      features: ["Business Presentations", "Pitch Decks", "Training Materials", "Visual Storytelling"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Ensure your projects meet the highest standards with comprehensive testing and optimization.",
      features: ["Performance Testing", "User Experience Audit", "Content Review", "Technical Optimization"]
    }
  ]

  const projects = [
    {
      title: "AI Content Creator",
      description: "Smart blog post generator with AI-powered content creation, style customization, and SEO optimization.",
      image: "/api/placeholder/600/400",
      tags: ["React", "AI", "Content Creation", "SEO"],
      link: "#",
      type: "Web Application"
    },
    {
      title: "TechGear Pro Store",
      description: "Modern e-commerce platform with advanced filtering, cart management, and responsive design.",
      image: "/api/placeholder/600/400",
      tags: ["React", "E-commerce", "UI/UX", "Responsive"],
      link: "#",
      type: "E-commerce"
    },
    {
      title: "AI Image Gallery",
      description: "Creative showcase platform with AI image generation, gallery management, and style customization.",
      image: "/api/placeholder/600/400",
      tags: ["React", "AI", "Image Generation", "Gallery"],
      link: "#",
      type: "Creative Platform"
    },
    {
      title: "AI Technology Trends 2025",
      description: "Professional presentation covering latest AI trends, business applications, and implementation strategies.",
      image: "/api/placeholder/600/400",
      tags: ["Presentation", "AI", "Business Strategy", "Data Visualization"],
      link: "#",
      type: "Presentation"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      content: "The AI content creation system transformed our marketing workflow. We're now producing 3x more content in half the time, and engagement rates have increased by 150%.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "RetailNow",
      content: "Our new e-commerce platform exceeded all expectations. Sales increased by 40% in the first month, and customer feedback has been overwhelmingly positive.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Lisa Rodriguez",
      role: "Creative Director",
      company: "BrandCraft",
      content: "The AI image generation capabilities are incredible. We've cut our design costs by 60% while maintaining the highest quality standards for our clients.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    }
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "150%", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">AI Specialist</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
            >
              <div className="px-4 py-2 space-y-2">
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item}
                  </button>
                ))}
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Zap className="h-3 w-3 mr-1" />
                AI-Powered Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Innovative AI Solutions for 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Business</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                I'm an AI specialist focused on delivering innovative solutions that enhance your online presence and develop cutting-edge applications. Whether you need AI content creation, eCommerce development, or creative visual solutions, I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Let's Talk
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={profilePhoto}
                  alt="AI Specialist"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              <Target className="h-3 w-3 mr-1" />
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Passionate About AI Innovation
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              With expertise in artificial intelligence, web development, and creative design, I help businesses leverage cutting-edge technology to achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "Artificial Intelligence", level: 95 },
                  { skill: "eCommerce Development", level: 90 },
                  { skill: "Content Creation", level: 92 },
                  { skill: "Campaign Copywriting", level: 88 },
                  { skill: "AI Image Generation", level: 85 },
                  { skill: "Quality Assurance", level: 93 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item.skill}</span>
                      <span className="text-slate-500 dark:text-slate-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={aiWorkspace}
                alt="AI Workspace"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <Lightbulb className="h-3 w-3 mr-1" />
              Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From AI-powered content creation to cutting-edge web development, I offer a full range of services to transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800">
                  <CardHeader>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              <Rocket className="h-3 w-3 mr-1" />
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore my latest work showcasing AI-powered solutions, modern web development, and creative design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full mb-4 mx-auto w-fit">
                          <Code className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">{project.type}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
              <Award className="h-3 w-3 mr-1" />
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              <MessageSquare className="h-3 w-3 mr-1" />
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Let's discuss how I can help bring your vision to life with cutting-edge AI solutions and expert development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">
                    Let's Connect
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    I'm always excited to work on new projects and help businesses achieve their goals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Email</div>
                      <div className="text-slate-600 dark:text-slate-300">contact@aispecialist.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Phone</div>
                      <div className="text-slate-600 dark:text-slate-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Location</div>
                      <div className="text-slate-600 dark:text-slate-300">Available Worldwide</div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-600">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={modernOffice}
                alt="Modern Office"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Introduction
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">AI Specialist</span>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Delivering innovative AI solutions and expert development services to help businesses thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white">
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">AI Content Creation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">eCommerce Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Image Generation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campaign Copywriting</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-300">
                <li>contact@aispecialist.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Available Worldwide</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 AI Specialist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

