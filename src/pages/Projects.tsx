import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Star, ArrowUpRight, Sparkles, Code2, Brain, Gamepad2, Ship, Target } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Navion — Smart Navigation Platform',
    subtitle: 'AI-Powered Navigation & Discovery',
    description: 'A next-generation navigation platform with AI-powered routing, AR navigation, and social features for intelligent location discovery and real-time travel experiences.',
    longDescription: 'Advanced navigation platform combining AI-powered routing, augmented reality features, and social discovery for enhanced location-based experiences.',
    image: 'https://media.istockphoto.com/id/1128192660/vector/blue-city-map-navigation-design.jpg?s=612x612&w=0&k=20&c=t6zytAUMZFdOs-A7GEbPdGdxQPo72l-u07Wpc7KfxH4=',
    technologies: ['React', 'Vite', 'Leaflet', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    github: 'https://github.com/AbhishekGiri04/Navion-Smart_Navigation_Platform',
    demo: 'https://navionx.netlify.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-cyan-500 to-blue-600',
    metrics: { accuracy: '96%', locations: '10K+', speed: 'Real-time' }
  },
  {
    id: 2,
    title: 'Sparo — Smart Inbox Defender',
    subtitle: 'Machine Learning Spam Classifier',
    description: 'A Streamlit-based web app for intelligent SMS spam detection and classification with 97.1% accuracy using advanced ML models and real-time analysis.',
    longDescription: 'Enterprise-grade spam detection system implementing advanced machine learning algorithms with real-time analysis, comprehensive threat detection, and intuitive web interface.',
    image: 'https://editor.analyticsvidhya.com/uploads/32086heading.jpeg',
    technologies: ['Python', 'Streamlit', 'Scikit-Learn', 'NLTK', 'Plotly'],
    github: 'https://github.com/AbhishekGiri04/Sparo-Smart_Inbox_Defender',
    demo: 'https://github.com/AbhishekGiri04/Sparo-Smart_Inbox_Defender',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-teal-600',
    metrics: { accuracy: '97.1%', precision: '100%', recall: '96%' }
  },
  {
    id: 3,
    title: 'CareConnect',
    subtitle: 'IoT Accessibility Platform',
    description: 'IoT platform for gesture recognition, voice automation, fall detection using ESP32, MPU6050, PIR sensors, relays. React dashboard with real-time MQTT/WebSocket updates, Firebase integration, sub-second response supporting 4 disability categories.',
    longDescription: 'Comprehensive IoT smart home solution designed for accessible living with advanced sensors, fall detection, and intelligent automation for enhanced safety.',
    image: 'https://ajeevi.com/wp-content/uploads/2023/06/1-15.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Firebase', 'TensorFlow'],
    github: 'https://github.com/AbhishekGiri04/CareConnect',
    demo: 'https://github.com/AbhishekGiri04/CareConnect',
    category: 'IoT Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-blue-500 to-cyan-600',
    metrics: { sensors: '4+', accuracy: '98%', response: '<2s' }
  },
  {
    id: 4,
    title: 'ALGOVISTA — Next Gen DSA Platform',
    subtitle: 'Professional DSA Learning Platform',
    description: 'A professional-grade learning platform engineered for developers and students to master Data Structures and Algorithms through immersive, hands-on learning with real-time algorithm execution and interactive visualizations.',
    longDescription: 'Next-generation DSA platform combining professional-grade tools with immersive learning experiences, featuring real-time algorithm execution and comprehensive educational content.',
    image: 'https://miro.medium.com/0*RgDby7Ef-IjxXtFX',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS', 'Node.js', 'Express.js', 'C++'],
    github: 'https://github.com/AbhishekGiri04/AlgoVista',
    demo: 'https://algovista-flux.vercel.app',
    category: 'Educational Platform',
    status: 'Live',
    featured: true,
    icon: <Code2 className="w-6 h-6" />,
    gradient: 'from-blue-500 to-cyan-600',
    metrics: { accuracy: '100%', users: '500+', performance: '99%' }
  },
  {
    id: 5,
    title: 'GuessMaster Arena — Number Guessing Platform',
    subtitle: 'AI-Powered Multiplayer Gaming Platform',
    description: 'A real-time multiplayer gaming platform with AI-powered opponents, competitive number guessing battles, and modern web technologies.',
    longDescription: 'Advanced multiplayer gaming platform with AI-powered opponents, real-time synchronization, competitive leaderboards, and immersive gaming experiences.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/62e299234793355.Y3JvcCw4NjAsNjcyLDAsNjEz.jpg',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'CSS'],
    github: 'https://github.com/AbhishekGiri04/GuessMaster_Arena',
    demo: 'https://guessmasterarena.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Gamepad2 className="w-6 h-6" />,
    gradient: 'from-pink-500 to-rose-600',
    metrics: { players: '1000+', latency: '<30ms', uptime: '99.8%' }
  },

  {
    id: 9,
    title: 'LaneSight Vision AI — Lane Detection System',
    subtitle: 'Advanced Computer Vision Platform',
    description: 'An advanced computer vision platform with a React frontend and Python backend for real-time lane detection, vehicle tracking, and intelligent automotive safety assistance.',
    longDescription: 'Professional automotive safety system featuring advanced lane detection, vehicle tracking, and real-time safety analysis for enhanced driving assistance.',
    image: 'https://etimg.etb2bimg.com/thumb/msid-101539194,imgsize-2839883,width-1200,height=627,overlay-etinfra,resizemode-75/news/roads-highways/kcp-infra-limited-completes-8-lane-project-on-nh45.jpg',
    technologies: ['React', 'FastAPI', 'OpenCV', 'Python', 'JavaScript', 'NumPy'],
    github: 'https://github.com/AbhishekGiri04/LaneSight-Lane_Detection_System',
    demo: 'https://lanesight.vercel.app',
    category: 'Computer Vision',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-green-500 to-emerald-600',
    metrics: { accuracy: '98%', latency: '<100ms', detection: 'Real-time' }
  },
  {
    id: 10,
    title: 'NeuroAttend — Attendance Management System',
    subtitle: 'AI-Powered Facial Recognition System',
    description: 'An AI-powered attendance management system with advanced facial recognition, 99.97% accuracy, real-time biometric analysis, and sub-100ms processing speed.',
    longDescription: 'Enterprise-grade attendance management system using advanced facial recognition technology with real-time processing and comprehensive analytics.',
    image: 'https://www.timechamp.io/blogs/wp-content/uploads/2023/08/Online-Attendance-Management-System-scaled.jpg',
    technologies: ['React', 'FastAPI', 'Python', 'OpenCV', 'Tailwind CSS', 'SQLite'],
    github: 'https://github.com/AbhishekGiri04/NeuroAttend-Attendance_Management_System',
    demo: 'https://neuroattend.vercel.app',
    category: 'Computer Vision',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-600',
    metrics: { accuracy: '99.97%', speed: '<100ms', users: '1000+' }
  },
  {
    id: 11,
    title: 'Plan My Trip – Smart Budget Travel Planner for Students',
    subtitle: 'AI-Powered Travel Planning Platform',
    description: 'An AI-powered web app that helps students plan budget-friendly trips with smart itineraries, real-time weather insights, and personalized travel recommendations.',
    longDescription: 'AI-powered travel planning platform designed specifically for students, featuring budget optimization, intelligent itinerary generation, and real-time weather integration.',
    image: 'https://img.freepik.com/premium-vector/travel-time-vector-background-design-time-travel-text-with-3d-luggage-bag-sunglasses-hat_572293-2504.jpg',
    technologies: ['React', 'FastAPI', 'Python', 'Scikit-Learn', 'Tailwind CSS', 'OpenWeather'],
    github: 'https://github.com/AbhishekGiri04/Plan-My-Trip',
    demo: 'https://plan-my-trip-io.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-orange-500 to-red-600',
    metrics: { savings: '40%', accuracy: '92%', destinations: '100+' }
  },
  {
    id: 12,
    title: 'AmazeWorth — Smart Price Engine',
    subtitle: 'AI-Powered Product Price Prediction',
    description: 'A next-gen AI platform that predicts optimal product prices in real time using advanced LightGBM, TF-IDF, and intelligent heuristic technologies with robust monitoring and analytics.',
    longDescription: 'Advanced price prediction platform using state-of-the-art machine learning algorithms to provide optimal pricing strategies with real-time analytics and intelligent caching.',
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQG_Q3uAp-5HkQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712218362253?e=2147483647&v=beta&t=5O1xK1wTRyVJTl3aQME_09OCcu324Y9lzQtNPJKSlTI',
    technologies: ['React', 'FastAPI', 'Python', 'LightGBM', 'Tailwind CSS', 'Machine Learning'],
    github: 'https://github.com/AbhishekGiri04/AmazeWorth',
    demo: 'https://amaze-worth.vercel.app',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-yellow-500 to-orange-600',
    metrics: { accuracy: '94%', speed: 'Real-time', products: '10K+' }
  },
  {
    id: 13,
    title: 'NestMetrics — Airbnb Smart Booking Insights',
    subtitle: 'AI-Powered Travel Analytics Platform',
    description: 'A full-stack AI-powered travel app that delivers predictive analytics, real-time insights, and interactive visualizations to help travelers make smarter accommodation choices.',
    longDescription: 'Advanced Airbnb analytics platform providing intelligent booking insights, price predictions, and comprehensive data visualizations for optimal accommodation decisions.',
    image: 'https://www.hotellinksolutions.com/images/blog/avt.jpg',
    technologies: ['React', 'Flask', 'Python', 'Machine Learning', 'Tailwind CSS', 'Random Forest'],
    github: 'https://github.com/AbhishekGiri04/NestMetrics',
    demo: 'https://nestmetrics.vercel.app',
    category: 'Data Science',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-teal-500 to-cyan-600',
    metrics: { accuracy: '89%', listings: '50K+', insights: 'Real-time' }
  },
  {
    id: 14,
    title: 'NetNova — Netflix Content Intelligence Platform',
    subtitle: 'AI-Powered Business Intelligence Platform',
    description: 'A full-stack AI-powered business intelligence platform that transforms Netflix\'s 7,789+ content dataset into actionable insights for streaming platforms and content strategists.',
    longDescription: 'Advanced Netflix content analytics platform providing strategic insights, content performance analysis, and AI-powered recommendations for streaming industry professionals.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNibjDk4NCFVIvgUU9JHXHnpcxmqG_G0fZfA&s',
    technologies: ['React', 'FastAPI', 'Python', 'Scikit-Learn', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/AbhishekGiri04/NetNova',
    demo: 'https://netnova.vercel.app',
    category: 'Data Science',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-red-500 to-pink-600',
    metrics: { content: '7,789+', accuracy: '91%', insights: 'Strategic' }
  },
  {
    id: 15,
    title: 'Orderly — Smart Food Recommender',
    subtitle: 'AI-Powered Food Delivery Analytics',
    description: 'An AI-powered web application for intelligent food delivery analytics with real-time restaurant performance predictions and personalized recommendations integrated with Swiggy and Zomato.',
    longDescription: 'Advanced food delivery analytics platform with AI-powered recommendations, restaurant performance predictions, and seamless integration with major food delivery platforms.',
    image: 'https://www.travelerfood.com/blog/wp-content/uploads/2024/04/Online-Food-Order.jpg',
    technologies: ['React', 'Flask', 'Python', 'Scikit-Learn', 'Tailwind CSS', 'Machine Learning'],
    github: 'https://github.com/AbhishekGiri04/Orderly-Smart_Food_Recommender',
    demo: 'https://orderly-go.vercel.app',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-green-500 to-teal-600',
    metrics: { accuracy: '88%', restaurants: '5K+', recommendations: 'Real-time' }
  },
  {
    id: 16,
    title: 'SimuLock — Deadlock Detection Simulator',
    subtitle: 'Interactive OS Deadlock Simulator',
    description: 'An interactive web-based simulator that visualizes, detects, and prevents operating system deadlocks in real time using binary semaphores and intelligent resource allocation algorithms.',
    longDescription: 'Educational operating systems simulator providing interactive deadlock detection, prevention algorithms, and real-time visualization for computer science learning.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOdiifJsJ0DiUalzDZqUSkqCaUjwhkCLaZPmFQLzNDai5esci3Wp1o_fZ2mCX_FFAjJg&usqp=CAU',
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML', 'Tailwind CSS', 'Socket.IO'],
    github: 'https://github.com/AbhishekGiri04/SimuLock-Deadlock_Detection_Simulator',
    demo: 'https://simulock.vercel.app',
    category: 'Educational Platform',
    status: 'Live',
    featured: false,
    icon: <Code2 className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-blue-600',
    metrics: { accuracy: '100%', simulations: '1K+', visualization: 'Real-time' }
  },

  {
    id: 19,
    title: 'CodeSphere — Real-Time Collaborative Code Editor Platform',
    subtitle: 'Modern Collaborative Coding Platform',
    description: 'A modern collaborative coding platform that brings teams together with real-time code editing, interactive whiteboard, and instant code execution. Perfect for pair programming, code reviews, and technical interviews with Java-first approach supporting multiple languages.',
    longDescription: 'Advanced collaborative coding platform designed for modern development teams, featuring real-time collaboration, multi-language support, and comprehensive development tools.',
    image: 'https://www.augmentedmind.de/wp-content/uploads/2020/06/collaborative-editor-feature.jpg',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Socket.IO', 'Docker'],
    github: 'https://github.com/AbhishekGiri04/CodeSphere',
    demo: 'https://codesphere-v1.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: true,
    icon: <Code2 className="w-6 h-6" />,
    gradient: 'from-purple-500 to-indigo-600',
    metrics: { latency: '<50ms', uptime: '99.9%', users: '200+' }
  },
  {
    id: 20,
    title: 'CollabMeet — Collaborate. Communicate. Create.',
    subtitle: 'Real-Time Collaboration Platform',
    description: 'A comprehensive web application for real-time collaboration with WebRTC video calls, an interactive live whiteboard, and seamless team communication for professional meeting management.',
    longDescription: 'Professional collaboration platform combining video conferencing, real-time whiteboard, and team communication tools for enhanced remote work productivity.',
    image: 'https://amazy-static.s3.eu-central-1.amazonaws.com/amazy-storage/ea8/057/2d5/653b74b3b0a4906fdfde37ed_best-online-meeting-platforms_1702494541.jpg',
    technologies: ['HTML', 'JavaScript', 'Node.js', 'WebRTC', 'Tailwind CSS', 'WebSocket'],
    github: 'https://github.com/AbhishekGiri04/CollabMeet',
    demo: 'https://collabmeet-v1.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: true,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-violet-500 to-purple-600',
    metrics: { users: '1K+', latency: '<100ms', uptime: '99.9%' }
  },
  {
    id: 21,
    title: 'GEHU Aspire — Smart Placement Portal',
    subtitle: 'Comprehensive Placement Management',
    description: 'A comprehensive placement management system for Graphic Era Hill University (GEHU) that seamlessly connects students, companies, and administrators using modern web technologies and a professional UI/UX design.',
    longDescription: 'Complete placement management system designed for GEHU, facilitating seamless connections between students, companies, and administrators with modern web design.',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/470/538/datas/original.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/AbhishekGiri04/GEHU-Smart_Placement_Portal',
    demo: 'https://gehu-placement-portal.netlify.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-green-600',
    metrics: { students: '2K+', companies: '100+', placements: '500+' }
  },
  {
    id: 22,
    title: 'MoodMart — Personalized Shopping Platform',
    subtitle: 'Emotion-Aware AI E-Commerce',
    description: 'Emotion-aware AI e-commerce platform that detects your mood in real time to deliver personalized product recommendations and a smarter, more human shopping experience.',
    longDescription: 'Revolutionary e-commerce platform using emotion detection AI to provide personalized shopping experiences based on real-time mood analysis.',
    image: 'https://st4.depositphotos.com/7341970/40159/v/450/depositphotos_401593532-stock-illustration-online-grocery-shopping-vector-illustration.jpg',
    technologies: ['Python', 'Flask', 'OpenCV', 'DeepFace'],
    github: 'https://github.com/AbhishekGiri04/MoodMart',
    demo: 'https://mood-mart.vercel.app',
    category: 'Computer Vision',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-pink-500 to-rose-600',
    metrics: { accuracy: '92%', emotions: '7+', products: '5K+' }
  },
  {
    id: 23,
    title: 'Maritime Intelligence Platform — Document Processing System',
    subtitle: 'AI-Powered Maritime Document Processing',
    description: 'A comprehensive web application for processing maritime documents using advanced AI — intelligent event extraction, structured SOF parsing, and real-time analytics.',
    longDescription: 'Advanced maritime document processing system featuring AI-powered OCR, intelligent data extraction, and comprehensive analytics dashboard for optimizing shipping operations and document workflows.',
    image: 'https://img.freepik.com/premium-photo/cargo-vessel-international-logistics-shipping-ai-generated_145713-14780.jpg',
    technologies: ['React.js', 'FastAPI', 'Node.js', 'Tesseract', 'Python', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/AbhishekGiri04/Maritime-Intelligence-Platform',
    demo: 'https://maritime-intelligence-platform-v1.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: true,
    icon: <Ship className="w-6 h-6" />,
    gradient: 'from-blue-600 to-indigo-700',
    metrics: { accuracy: '95%', speed: '10x faster', efficiency: '85%' }
  },
  {
    id: 24,
    title: 'Portfolio-Abhinova — Modern Developer Portfolio',
    subtitle: 'Personal Developer Portfolio',
    description: 'Hello, I\'m Abhishek Giri! Welcome to my personal portfolio — a showcase of my journey as a developer, highlighting my skills, innovative projects, and passion for building impactful technology solutions.',
    longDescription: 'Professional developer portfolio showcasing technical expertise, project achievements, and development journey with modern web design and interactive elements.',
    image: 'https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/AbhishekGiri04/Portfolio-Abhinova',
    demo: 'https://portfolio-abhinova.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-slate-500 to-gray-600',
    metrics: { visitors: '1K+', projects: '25+', skills: '20+' }
  },
  {
    id: 25,
    title: 'Portfolio-Nexus — Modern Developer Portfolio',
    subtitle: 'Professional Developer Showcase',
    description: 'Hi, I\'m Abhishek Giri! Explore my portfolio to discover my work as a passionate developer — creating smart, creative, and impactful tech projects that turn ideas into reality.',
    longDescription: 'Modern and interactive developer portfolio built with cutting-edge web technologies, showcasing professional projects, skills, and development expertise.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7O295F1H8jT7rps5u7FPvhQksHLeuOGEu63FSSbv1gXT4VfBNImceDwHtSqUIjfCx-4&usqp=CAU',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Lucide React'],
    github: 'https://github.com/AbhishekGiri04/Portfolio-Nexus',
    demo: 'https://portfolio-nexus.netlify.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-600',
    metrics: { projects: '25', technologies: '15+', experience: '2+ years' }
  },
  {
    id: 26,
    title: 'Agnix — Professional AI & ML Developer Website',
    subtitle: 'Official Developer Website',
    description: 'Agnix - Official website of Abhishek Giri featuring AI & ML development services, innovative tech solutions, and professional achievements. Modern web platform showcasing cutting-edge technology expertise and development capabilities.',
    longDescription: 'Professional developer website showcasing AI & ML services, innovative solutions, and technical expertise with modern design and comprehensive service offerings.',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQFQ-B2IobV-4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1678216405315?e=2147483647&v=beta&t=smqITnKNXypQmReKCpJzCLmr9RsF7dqNelXRGDn9atc',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/AbhishekGiri04/Agnix',
    demo: 'https://agnix.netlify.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-violet-500 to-indigo-600',
    metrics: { services: '10+', projects: '25+', clients: 'Global' }
  },
  {
    id: 27,
    title: 'Calvista — Interactive React Calendar Component',
    subtitle: 'Modern Calendar Component',
    description: 'A fully interactive, accessibility-first calendar component built with React, TypeScript, and Tailwind CSS. Designed for modern web applications and SaaS platforms, this component offers smooth navigation, flexible views, and robust event management.',
    longDescription: 'Professional calendar component with accessibility features, flexible views, and comprehensive event management for modern web applications.',
    image: 'https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2020/12/project-management-calendar-1.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/AbhishekGiri04/CalendarView',
    demo: 'https://calvista.netlify.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Code2 className="w-6 h-6" />,
    gradient: 'from-blue-500 to-purple-600',
    metrics: { views: '3+', accessibility: 'WCAG 2.1', responsive: '100%' }
  },
  {
    id: 28,
    title: 'TimelyBuddy - Smart Academic ERP System',
    subtitle: 'Academic Management Platform',
    description: 'A comprehensive academic ERP system featuring intelligent timetable scheduling, secure user authentication, role-based access control, and complete academic management capabilities.',
    longDescription: 'Complete academic management system featuring intelligent timetable scheduling, user authentication, and comprehensive administrative tools for educational institutions.',
    image: 'https://www.chalkbox.in/images/erpimage.png',
    technologies: ['Flask', 'Python', 'SQLite', 'Bootstrap', 'JavaScript', 'HTML'],
    github: 'https://github.com/AbhishekGiri04/TimelyBuddy',
    demo: 'https://github.com/AbhishekGiri04/TimelyBuddy',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-blue-500 to-indigo-600',
    metrics: { users: '500+', efficiency: '90%', uptime: '99.5%' }
  },
  {
    id: 29,
    title: 'Project Mirage —Invisibility Cloak System',
    subtitle: 'Computer Vision Innovation',
    description: 'A cutting-edge computer vision application that generates real-time invisibility effects using advanced OpenCV algorithms and HSV color detection techniques.',
    longDescription: 'Innovative computer vision project implementing real-time invisibility effects using advanced image processing and color detection algorithms.',
    image: 'https://cdn.zmescience.com/wp-content/uploads/2015/09/640_invisibility-cloak.jpg',
    technologies: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
    github: 'https://github.com/AbhishekGiri04/Project-Mirage',
    demo: 'https://github.com/AbhishekGiri04/Project-Mirage',
    category: 'Computer Vision',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-600',
    metrics: { fps: '30+', accuracy: '95%', latency: '<50ms' }
  },
  {
    id: 30,
    title: 'HawkPay — Smart Fraud Detection',
    subtitle: 'Enterprise Fraud Detection System',
    description: 'A Streamlit-based web app for intelligent credit card fraud detection with 99.05% accuracy using advanced LightGBM models and real-time transaction analysis.',
    longDescription: 'Enterprise-grade fraud detection system using advanced machine learning algorithms to analyze credit card transactions and detect fraudulent activities in real-time.',
    image: 'https://cdn.sanity.io/images/9sed75bn/production/116ca6fc51f2f98318bf4f24cd05383a69023c04-896x504.png?auto=format',
    technologies: ['Python', 'Streamlit', 'LightGBM', 'Scikit-Learn', 'Plotly'],
    github: 'https://github.com/AbhishekGiri04/HawkPay-Smart_Fraud_Detection',
    demo: 'https://github.com/AbhishekGiri04/HawkPay-Smart_Fraud_Detection',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-red-500 to-orange-600',
    metrics: { accuracy: '99.05%', precision: '99%', recall: '98%' }
  },
  {
    id: 31,
    title: 'VisionX — Vision Platform',
    subtitle: 'AI-Powered Computer Vision',
    description: 'A real-time AI vision platform for face detection and object recognition, powered by advanced computer vision algorithms and modern web technologies for intelligent visual analysis.',
    longDescription: 'Advanced computer vision platform combining real-time face detection, object recognition, and intelligent visual analysis using cutting-edge AI algorithms.',
    image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2020/09/10-incredible-open-source-computer-vision-projects-for-beginner.jpg',
    technologies: ['React', 'FastAPI', 'Python', 'OpenCV', 'TensorFlow', 'Node.js'],
    github: 'https://github.com/AbhishekGiri04/VisionX',
    demo: 'https://vision-spectra.vercel.app',
    category: 'Computer Vision',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-cyan-500 to-blue-600',
    metrics: { accuracy: '95%', speed: 'Real-time', objects: '80+' }
  },
  {
    id: 32,
    title: 'CineMorph — Movie Genre Classifier',
    subtitle: 'AI Genre Classification',
    description: 'A Streamlit-based AI web app for intelligent movie genre classification with 85.2% accuracy using advanced ML models and real-time plot analysis.',
    longDescription: 'Advanced movie genre classification system using natural language processing and machine learning to analyze movie plots and predict genres with high accuracy.',
    image: 'https://miro.medium.com/v2/resize:fit:3840/1*jbfWuj3RSAAvmJeBwLWbsw.jpeg',
    technologies: ['Python', 'Streamlit', 'Scikit-Learn', 'TF-IDF', 'Plotly', 'Pandas', 'NumPy'],
    github: 'https://github.com/AbhishekGiri04/CineMorph-AI_Movie_Genre_Classifier',
    demo: 'https://github.com/AbhishekGiri04/CineMorph-AI_Movie_Genre_Classifier',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-600',
    metrics: { accuracy: '85.2%', genres: '20+', speed: 'Real-time' }
  },
  {
    id: 33,
    title: 'Invoice QC Service — B2B Invoice Extraction & Validation System',
    subtitle: 'AI-Driven Invoice Processing',
    description: 'AI-driven B2B invoice extraction and validation system featuring a Python-based pipeline, FastAPI services, Typer CLI, and a Web QC dashboard. Automates PDF-to-JSON data extraction, applies robust business-rule validation, and delivers production-ready, scalable invoice processing.',
    longDescription: 'Enterprise-grade invoice processing system with AI-powered extraction, validation, and comprehensive dashboard for B2B invoice management.',
    image: 'https://images.prismic.io/statrys/f92d973f-023c-40d3-a451-0d7dd445ebf4_invoice-number-complex-configuration-example-1.png?auto=compress,format',
    technologies: ['Python', 'FastAPI', 'React', 'Typer', 'Tailwind CSS', 'Machine Learning'],
    github: 'https://github.com/AbhishekGiri04/InvoiceQC-Service',
    demo: 'https://invqc.netlify.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-green-600',
    metrics: { accuracy: '96%', speed: '5x faster', validation: 'Real-time' }
  },
  {
    id: 34,
    title: 'HR-GenAI — Hiring Intelligence Platform',
    subtitle: 'AI-Driven Hiring Platform',
    description: 'HR-GenAI is an AI-driven hiring intelligence platform that builds a Digital DNA Profile for candidates using resume analysis, cognitive interviews, and predictive scoring. It delivers unbiased evaluations, skill insights, performance predictions, and a real-time analytics dashboard for smarter hiring.',
    longDescription: 'Advanced hiring intelligence platform using AI to analyze candidates, predict performance, and provide comprehensive insights for data-driven hiring decisions.',
    image: 'https://borgenproject.org/wp-content/uploads/HR-Human-Resources-Management.jpg',
    technologies: ['React', 'FastAPI', 'Python', 'Machine Learning', 'Tailwind CSS', 'NLP'],
    github: 'https://github.com/AbhishekGiri04/HR-GenAI',
    demo: 'https://hr-genai.vercel.app',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-600',
    metrics: { accuracy: '93%', candidates: '1K+', insights: 'Real-time' }
  },
];

function Projects() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 opacity-30"
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute -inset-3 bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-emerald-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Featured
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Comprehensive portfolio showcasing advanced software engineering solutions across multiple domains. 
              <span className="text-emerald-400 font-medium">Each project reflects industry-standard practices</span> and innovative problem-solving methodologies.
            </p>
            

          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold rounded-full shadow-lg`}>
                    {project.icon}
                    <span>{project.status}</span>
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Metrics */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-2">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg border border-white/30">
                          <div className="text-white text-xs font-medium">{key}</div>
                          <div className="text-white text-sm font-bold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-emerald-600 font-semibold mb-4">{project.subtitle}</p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:from-emerald-100 hover:to-cyan-100 hover:text-emerald-700 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">More Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional projects showcasing diverse technical skills and problem-solving approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <div className={`flex items-center gap-1 px-2 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-lg`}>
                      {project.icon}
                      <span>{project.category}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-emerald-600 font-semibold mb-3">{project.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 transition-colors text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;