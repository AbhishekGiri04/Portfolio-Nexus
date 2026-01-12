import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Star, ArrowUpRight, Sparkles, Code2, Brain, Gamepad2, Ship, Target } from 'lucide-react';

const projects = [
  {
    id: 3,
    title: 'CodeSphere — Real-Time Collaborative Code Editor Platform',
    subtitle: 'Modern Collaborative Coding Platform',
    description: 'Real-time collaborative coding platform with live editing, interactive whiteboard, and multi-language execution. Perfect for pair programming, code reviews, and interviews.',
    longDescription: 'Advanced collaborative coding platform designed for modern development teams, featuring real-time collaboration, multi-language support, and comprehensive development tools.',
    image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm8lMjBjb2RlfGVufDB8fDB8fHww',
    technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'Java', 'Shell', 'HTML', 'Firebase', 'TypeScript', 'Socket.IO', 'Fabric.js', 'Monaco Editor', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/AbhishekGiri04/CodeSphere',
    demo: 'https://codesphere-dev.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: true,
    icon: <Code2 className="w-6 h-6" />,
    gradient: 'from-purple-500 to-indigo-600',
    metrics: { latency: '<50ms', uptime: '99.9%', users: '200+' }
  },
  {
    id: 23,
    title: 'CareConnect — Integrated Accessibility Platform',
    subtitle: 'IoT Accessibility Platform',
    description: 'Designed and developed an IoT-enabled smart home automation platform for accessible and independent living, featuring gesture and voice control, fall detection, motion sensing, temperature alerts, and smart lighting using React.js, Node.js, ESP32, Firebase, MPU6050, DHT22, and PIR sensors.',
    longDescription: 'Comprehensive IoT smart home solution designed for accessible living with advanced sensors, fall detection, and intelligent automation for enhanced safety.',
    image: 'https://images.stockcake.com/public/d/7/f/d7f0345c-0b61-4a12-a113-1e231d817f09_large/smart-home-concept-stockcake.jpg',
    technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML', 'Firebase', 'C++', 'Socket.IO', 'Chart.js', 'Express.js', 'Web Speech API', 'Tailwind CSS', 'MediaPipe'],
    github: 'https://github.com/AbhishekGiri04/CareConnect',
    demo: 'https://careconnect-360.vercel.app',
    category: 'IoT Application',
    status: 'Live',
    featured: true,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-blue-500 to-cyan-600',
    metrics: { sensors: '4+', accuracy: '98%', response: '<2s' }
  },
  {
    id: 4,
    title: 'Maritime Intelligence Platform — Document Processing System',
    subtitle: 'AI-Powered Maritime Document Processing',
    description: 'A next-generation maritime document processing platform that revolutionizes Statement of Facts (SOF) analysis through advanced AI-powered extraction technologies. Built for maritime professionals who demand precision, efficiency, and intelligent automation in their operational workflows.',
    longDescription: 'Advanced maritime document processing system featuring AI-powered OCR, intelligent data extraction, and comprehensive analytics dashboard for optimizing shipping operations and document workflows.',
    image: 'https://media.istockphoto.com/id/544592156/photo/container-cargo-ship-and-cargo-plane-with-working-crane.jpg?s=612x612&w=0&k=20&c=t2dVqh3ACrN7kWX51BVaCIYfupK4D3D4Vwaf3C8suIk=',
    technologies: ['React', 'FastAPI', 'Node.js', 'Python', 'Tesseract', 'OpenCV', 'Camelot', 'Tabula-py', 'PDFPlumber', 'OpenAI API', 'Tailwind CSS', 'Vite', 'Dockerfile'],
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
    id: 27,
    title: 'HR-GenAI — AI-Powered Hiring Intelligence Platform',
    subtitle: 'AI-Driven Hiring Platform',
    description: 'HR-GenAI: AI-powered hiring platform using GPT-4 resume analysis, voice interviews, and Digital DNA profiling to predict job performance with 95% accuracy—eliminating bias and reducing hiring time by 10x.',
    longDescription: 'Advanced hiring intelligence platform using AI to analyze candidates, predict performance, and provide comprehensive insights for data-driven hiring decisions.',
    image: 'https://srascreening.com/wp-content/uploads/2025/02/Transforming-Background-Screening-The-Implications-of-AI-in-the-HR-Industry-min-scaled.jpeg',
    technologies: ['React', 'Node.js', 'JavaScript', 'Firebase', 'MongoDB', 'OpenAI', 'Nodemailer', 'Web Speech API', 'Tailwind CSS', 'Google Gemini'],
    github: 'https://github.com/AbhishekGiri04/HR-GenAI',
    demo: 'https://hrgen-dev.vercel.app',
    category: 'Machine Learning',
    status: 'Live',
    featured: true,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-600',
    metrics: { accuracy: '95%', candidates: '1K+', insights: 'Real-time' }
  },
  {
    id: 1,
    title: 'ALGOVISTA — Next Gen DSA Platform',
    subtitle: 'Professional DSA Learning Platform',
    description: 'Professional DSA learning platform featuring real-time algorithm execution, interactive visualizations, and comprehensive coverage of 50+ algorithms for computer science students and developers.',
    longDescription: 'Next-generation DSA platform combining professional-grade tools with immersive learning experiences, featuring real-time algorithm execution and comprehensive educational content.',
    image: 'https://0701.static.prezi.com/preview/v2/27rphjsagkoqzcpmtk3b34my476jc3sachvcdoaizecfr3dnitcq_3_0.png',
    technologies: ['React', 'Node.js', 'JavaScript', 'HTML', 'C++', 'Express.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/AbhishekGiri04/AlgoVista',
    demo: 'https://algovista-dev.vercel.app',
    category: 'Educational Platform',
    status: 'Live',
    featured: false,
    icon: <Code2 className="w-6 h-6" />,
    gradient: 'from-blue-500 to-cyan-600',
    metrics: { accuracy: '100%', users: '500+', performance: '99%' }
  },
  {
    id: 33,
    title: 'SATYA-DRISHTI — AI-Powered Content Moderation for Digital India',
    subtitle: 'AI Content Moderation Platform',
    description: 'SATYA-DRISHTI : AI content moderation for Digital India: 87% accuracy, 12 models, 9 languages, 10-15s analysis. Detects hate speech, NSFW, fake news. Court-ready evidence with IPC/IT Act mapping. Built for NITI Aayog',
    longDescription: 'Advanced AI-powered content moderation system designed for Digital India initiative with multi-language support and legal compliance.',
    image: 'https://chekkee.com/wp-content/uploads/2024/03/How-AI-Moderation-is-Transforming-Social-Media-Content-Management.webp',
    technologies: ['React', 'JavaScript', 'CSS', 'Python', 'OpenCV', 'MongoDB', 'PyTorch', 'FastAPI', 'HuggingFace', 'EasyOCR'],
    github: 'https://github.com/AbhishekGiri04/SATYA-DRISHTI',
    demo: 'https://satyadrishti-dev.vercel.app',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-red-500 to-pink-600',
    metrics: { accuracy: '87%', languages: '9+', models: '12+' }
  },
  {
    id: 2,
    title: 'Sparo — Smart Inbox Defender',
    subtitle: 'Machine Learning Spam Classifier',
    description: 'Sparo is an enterprise SMS spam detection platform with 97.1% accuracy using ML algorithms. Built with Python and Streamlit, it leverages Naive Bayes, NLP preprocessing, and TF-IDF vectorization for real-time analysis with interactive dashboards and bulk processing capabilities.',
    longDescription: 'Enterprise-grade spam detection system implementing advanced machine learning algorithms with real-time analysis, comprehensive threat detection, and intuitive web interface.',
    image: 'https://editor.analyticsvidhya.com/uploads/32086heading.jpeg',
    technologies: ['Python', 'Streamlit', 'Scikit-Learn', 'NLTK', 'Plotly', 'Pandas', 'WordCloud', 'Jupyter Notebook'],
    github: 'https://github.com/AbhishekGiri04/Sparo',
    demo: 'https://sparo-nyx.onrender.com',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-teal-600',
    metrics: { accuracy: '97.1%', precision: '100%', recall: '96%' }
  },
  {
    id: 5,
    title: 'GuessMaster Arena — AI-Powered Number Guessing Platform',
    subtitle: 'AI-Powered Multiplayer Gaming Platform',
    description: 'Real-time multiplayer gaming platform with intelligent AI opponents. Features competitive battles, live leaderboards, instant gameplay, and modern web technologies for seamless experience.',
    longDescription: 'Advanced multiplayer gaming platform with AI-powered opponents, real-time synchronization, competitive leaderboards, and immersive gaming experiences.',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-gaming-joystick-gaming-concept-game-controller-image_15745994.jpg',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'JavaScript', 'HTML', 'CSS3'],
    github: 'https://github.com/AbhishekGiri04/GuessMasterArena',
    demo: 'https://guessmasterarena.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Gamepad2 className="w-6 h-6" />,
    gradient: 'from-pink-500 to-rose-600',
    metrics: { players: '1000+', latency: '<30ms', uptime: '99.8%' }
  },
  {
    id: 6,
    title: 'CineMorph — AI Movie Genre Classifier',
    subtitle: 'AI Genre Classification',
    description: 'CineMorph is a Streamlit-based AI web app for movie genre classification with 85.2% accuracy. It uses ML models, TF-IDF, real-time plot analysis, batch processing, and an interactive dashboard to predict 27 genres.',
    longDescription: 'Advanced movie genre classification system using natural language processing and machine learning to analyze movie plots and predict genres with high accuracy.',
    image: 'https://miro.medium.com/v2/resize:fit:3840/1*jbfWuj3RSAAvmJeBwLWbsw.jpeg',
    technologies: ['Python', 'Streamlit', 'Scikit-Learn', 'TF-IDF', 'Plotly', 'Pandas', 'NumPy', 'Jupyter Notebook'],
    github: 'https://github.com/AbhishekGiri04/CineMorph',
    demo: 'https://cinemorph-dev.onrender.com',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-600',
    metrics: { accuracy: '85.2%', genres: '27+', speed: 'Real-time' }
  },
  {
    id: 7,
    title: 'HawkPay — Smart Fraud Detection',
    subtitle: 'Enterprise Fraud Detection System',
    description: 'HawkPay delivers 99.05% accurate fraud detection using LightGBM and SMOTE+Tomek balancing. This Streamlit app offers real-time transaction analysis, batch CSV processing, and interactive dashboards trained on 2.6M+ samples for enterprise-grade security.',
    longDescription: 'Enterprise-grade fraud detection system using advanced machine learning algorithms to analyze credit card transactions and detect fraudulent activities in real-time.',
    image: 'https://www.shutterstock.com/image-vector/cyber-security-data-protection-privacy-600nw-2417677151.jpg',
    technologies: ['Python', 'Streamlit', 'LightGBM', 'Scikit-Learn', 'SMOTE', 'Plotly', 'Pandas', 'Jupyter Notebook'],
    github: 'https://github.com/AbhishekGiri04/HawkPay',
    demo: 'https://hawkpay-v1.onrender.com',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-red-500 to-orange-600',
    metrics: { accuracy: '99.05%', precision: '99%', recall: '98%' }
  },
  {
    id: 8,
    title: 'VisionX — AI-Powered Vision Platform',
    subtitle: 'AI-Powered Computer Vision',
    description: 'Enterprise-grade AI vision platform delivering real-time face detection and intelligent object recognition through cutting-edge YOLOv8 and OpenCV algorithms, featuring scalable microservices architecture and responsive React interface for production-ready visual analytics.',
    longDescription: 'Advanced computer vision platform combining real-time face detection, object recognition, and intelligent visual analysis using cutting-edge AI algorithms.',
    image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2020/09/10-incredible-open-source-computer-vision-projects-for-beginner.jpg',
    technologies: ['React', 'FastAPI', 'Python', 'OpenCV', 'TensorFlow', 'TypeScript', 'Node.js', 'YOLOv8'],
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
    id: 9,
    title: 'LaneSight Vision AI — Professional Lane Detection System',
    subtitle: 'Advanced Computer Vision Platform',
    description: 'AI-powered lane detection system combining React & FastAPI for professional automotive safety. Real-time computer vision analysis, vehicle tracking & intelligent departure warnings.',
    longDescription: 'Professional automotive safety system featuring advanced lane detection, vehicle tracking, and real-time safety analysis for enhanced driving assistance.',
    image: 'https://etimg.etb2bimg.com/thumb/msid-101539194,imgsize-2839883,width-1200,height=627,overlay-etinfra,resizemode-75/news/roads-highways/kcp-infra-limited-completes-8-lane-project-on-nh45.jpg',
    technologies: ['React', 'FastAPI', 'Python', 'OpenCV', 'NumPy', 'JavaScript'],
    github: 'https://github.com/AbhishekGiri04/LaneSight',
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
    title: 'NeuroAttend — AI-Powered Attendance Management System',
    subtitle: 'AI-Powered Facial Recognition System',
    description: 'Enterprise AI attendance system with 99.97% facial recognition accuracy, real-time biometric processing in <100ms, automated alerts, and comprehensive analytics for seamless workforce management.',
    longDescription: 'Enterprise-grade attendance management system using advanced facial recognition technology with real-time processing and comprehensive analytics.',
    image: 'https://miro.medium.com/0*Q2jXRZXXzEq2klcb',
    technologies: ['React', 'FastAPI', 'Python', 'OpenCV', 'SQLite', 'Chart.js', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/AbhishekGiri04/NeuroAttend',
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
    title: 'Plan My Trip — Smart Budget Travel Planner for Students',
    subtitle: 'AI-Powered Travel Planning Platform',
    description: 'AI-powered travel planner helping students discover budget-friendly destinations with smart itineraries, real-time weather data, and ML-driven recommendations for affordable adventures.',
    longDescription: 'AI-powered travel planning platform designed specifically for students, featuring budget optimization, intelligent itinerary generation, and real-time weather integration.',
    image: 'https://st2.depositphotos.com/1561359/7818/v/950/depositphotos_78182962-stock-illustration-plan-your-trip-written-on.jpg',
    technologies: ['React', 'FastAPI', 'Python', 'Scikit-Learn', 'Pandas', 'OpenStreetMap', 'OpenWeather API', 'Jupyter Notebook', 'Tailwind CSS', 'JavaScript'],
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
    description: 'Next-gen AI platform delivering real-time product price predictions with 95%+ accuracy using LightGBM gradient boosting, TF-IDF vectorization & intelligent heuristics. Features robust monitoring, analytics dashboard & enterprise-grade performance for optimal pricing strategies.',
    longDescription: 'Advanced price prediction platform using state-of-the-art machine learning algorithms to provide optimal pricing strategies with real-time analytics and intelligent caching.',
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQG_Q3uAp-5HkQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712218362253?e=2147483647&v=beta&t=5O1xK1wTRyVJTl3aQME_09OCcu324Y9lzQtNPJKSlTI',
    technologies: ['React', 'FastAPI', 'Python', 'LightGBM', 'Machine Learning', 'TF-IDF', 'Recharts', 'Jupyter Notebook', 'Tailwind CSS'],
    github: 'https://github.com/AbhishekGiri04/AmazeWorth',
    demo: 'https://amaze-worth.vercel.app',
    category: 'Machine Learning',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-yellow-500 to-orange-600',
    metrics: { accuracy: '95%+', speed: 'Real-time', products: '10K+' }
  },
  {
    id: 20,
    title: 'CollabMeet — Collaborate. Communicate. Create.',
    subtitle: 'Real-Time Collaboration Platform',
    description: 'Real-time collaboration platform with WebRTC video conferencing, interactive whiteboard, and instant messaging. Built for seamless team productivity with zero downloads required.',
    longDescription: 'Professional collaboration platform combining video conferencing, real-time whiteboard, and team communication tools for enhanced remote work productivity.',
    image: 'https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/26-1.png?w=1600&h=900&fit=crop',
    technologies: ['Node.js', 'JavaScript', 'HTML5', 'WebRTC', 'WebSocket', 'Express.js', 'Tailwind CSS'],
    github: 'https://github.com/AbhishekGiri04/CollabMeet',
    demo: 'https://collabmeet-dev.onrender.com',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-violet-500 to-purple-600',
    metrics: { users: '1K+', latency: '<100ms', uptime: '99.9%' }
  },
  {
    id: 19,
    title: 'Navion — AI-Powered Smart Navigation Platform',
    subtitle: 'AI-Powered Navigation & Discovery',
    description: 'Navion is an AI-powered smart navigation platform built with React and Leaflet. Features voice assistant, AR navigation, 7 map themes, weather integration, and social sharing. Deployed as static site.',
    longDescription: 'Advanced navigation platform combining AI-powered routing, augmented reality features, and social discovery for enhanced location-based experiences.',
    image: 'https://img.freepik.com/premium-vector/gps-navigation-six-unit-drop-paper-map-blue-background_99087-149.jpg',
    technologies: ['React', 'JavaScript', 'Leaflet', 'OpenStreetMap', 'WebSpeech API', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/AbhishekGiri04/Navion',
    demo: 'https://navion-dev.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-cyan-500 to-blue-600',
    metrics: { accuracy: '96%', locations: '10K+', speed: 'Real-time' }
  },
  {
    id: 13,
    title: 'NestMetrics — AI-Powered Airbnb Smart Booking Insights',
    subtitle: 'AI-Powered Travel Analytics Platform',
    description: 'A full-stack AI-powered travel app that delivers predictive analytics, real-time insights, and interactive visualizations to help travelers make smarter accommodation choices.',
    longDescription: 'Advanced Airbnb analytics platform providing intelligent booking insights, price predictions, and comprehensive data visualizations for optimal accommodation decisions.',
    image: 'https://media.istockphoto.com/id/1003402646/photo/travel-booking-hotels-and-flights-reservation-on-internet.jpg?s=612x612&w=0&k=20&c=BBkVfUD_LkN5QP9qPawTUJYHZ3oEMaGuS0gQ_j2L-_Q=',
    technologies: ['React', 'Flask', 'Python', 'Machine Learning', 'Random Forest', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Tailwind CSS', 'Vite'],
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
    title: 'NetNova — AI-Powered Netflix Content Intelligence Platform',
    subtitle: 'AI-Powered Business Intelligence Platform',
    description: 'AI-powered platform analyzing 7,789+ Netflix titles with 84% ML accuracy, delivering real-time analytics and predictive insights for $100M+ streaming content decisions across 50+ countries.',
    longDescription: 'Advanced Netflix content analytics platform providing strategic insights, content performance analysis, and AI-powered recommendations for streaming industry professionals.',
    image: 'https://static0.moviewebimages.com/wordpress/wp-content/uploads/2024/08/netflix-logo.jpeg',
    technologies: ['React', 'FastAPI', 'Python', 'Scikit-Learn', 'Jupyter Notebook', 'Pandas', 'Recharts', 'Tailwind CSS', 'Vite'],
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
    title: 'Orderly — AI-Powered Smart Food Recommender',
    subtitle: 'AI-Powered Food Delivery Analytics',
    description: 'Orderly is an AI-powered food delivery analytics platform using ML to predict restaurant performance with 94.2% accuracy, offering real-time insights and smart integrations with Swiggy and Zomato.',
    longDescription: 'Advanced food delivery analytics platform with AI-powered recommendations, restaurant performance predictions, and seamless integration with major food delivery platforms.',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20220425/pngtree-staff-deliver-goods-by-motorbike-to-customers-who-order-image_1070195.jpg',
    technologies: ['React', 'Flask', 'Python', 'Machine Learning', 'Scikit-Learn', 'NumPy', 'Pandas', 'Recharts', 'Jupyter Notebook', 'Tailwind CSS'],
    github: 'https://github.com/AbhishekGiri04/Orderly',
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
    title: 'SimuLock — Advanced Deadlock Detection Simulator',
    subtitle: 'Interactive OS Deadlock Simulator',
    description: 'Advanced web-based deadlock detection simulator with real-time visualization, binary semaphore management, and intelligent resource allocation for operating systems education and research.',
    longDescription: 'Educational operating systems simulator providing interactive deadlock detection, prevention algorithms, and real-time visualization for computer science learning.',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*rKdmOO0CY9uYY1lz3d3iEw.jpeg',
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML5', 'Tailwind CSS', 'Socket.IO', 'NetworkX', 'CSS'],
    github: 'https://github.com/AbhishekGiri04/SimuLock',
    demo: 'https://simulock-dev.onrender.com',
    category: 'Educational Platform',
    status: 'Live',
    featured: false,
    icon: <Code2 className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-blue-600',
    metrics: { accuracy: '100%', simulations: '1K+', visualization: 'Real-time' }
  },
  {
    id: 17,
    title: 'Project Mirage — AI-Powered Invisibility Cloak System',
    subtitle: 'Computer Vision Innovation',
    description: 'Real-time invisibility cloak system using OpenCV and HSV color detection. Advanced computer vision with 30+ FPS processing, WebSocket streaming, and React interface.',
    longDescription: 'Innovative computer vision project implementing real-time invisibility effects using advanced image processing and color detection algorithms.',
    image: 'https://cdn.zmescience.com/wp-content/uploads/2015/09/640_invisibility-cloak.jpg',
    technologies: ['React', 'FastAPI', 'Python', 'OpenCV', 'WebSocket', 'NumPy', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/AbhishekGiri04/Project-Mirage',
    demo: 'https://mirage-dev-v1.vercel.app',
    category: 'Computer Vision',
    status: 'Live',
    featured: false,
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-600',
    metrics: { fps: '30+', accuracy: '95%', latency: '<50ms' }
  },
  {
    id: 18,
    title: 'TimelyBuddy — Smart Academic ERP System',
    subtitle: 'Academic Management Platform',
    description: 'Smart Academic ERP with AI-powered timetable generation using graph coloring, role-based access for Admin/Teacher/Student, assignment management, and real-time attendance.',
    longDescription: 'Complete academic management system featuring intelligent timetable scheduling, user authentication, and comprehensive administrative tools for educational institutions.',
    image: 'https://t4.ftcdn.net/jpg/07/40/61/73/360_F_740617335_zZ3ajwae5Z1adqNr1kEuqkRpDYzq9xY5.jpg',
    technologies: ['Python', 'Flask', 'JavaScript', 'SQLite', 'Bootstrap', 'HTML5', 'CSS', 'Pandas'],
    github: 'https://github.com/AbhishekGiri04/TimelyBuddy',
    demo: 'https://timelybuddy-dev.onrender.com',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-blue-500 to-indigo-600',
    metrics: { users: '500+', efficiency: '90%', uptime: '99.5%' }
  },
  {
    id: 21,
    title: 'GEHU Placement Portal — Advanced Placement Management System',
    subtitle: 'Advanced Placement Management Platform',
    description: 'Advanced placement management platform for Graphic Era Hill University featuring secure authentication, automated recruitment workflows, comprehensive analytics, and seamless industry-academia integration. Built with Node.js, Express, MySQL.',
    longDescription: 'Complete placement management system designed for GEHU, facilitating seamless connections between students, companies, and administrators with modern web design.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQGPl-AeIS_fhA/article-cover_image-shrink_720_1280/B56Zgc7KTfG0AI-/0/1752831934504?e=2147483647&v=beta&t=U02zK_t3fcbNi0wcHhOPBmQ1OdR0fSovr7sDamFRNmg',
    technologies: ['Node.js', 'JavaScript', 'MySQL', 'JWT', 'HTML5', 'CSS3', 'Express.js'],
    github: 'https://github.com/AbhishekGiri04/GEHU-Placement_Portal',
    demo: 'https://gehuplacementportal.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-green-600',
    metrics: { students: '2K+', companies: '100+', placements: '500+' }
  },
  {
    id: 24,
    title: 'Portfolio-Abhinova — Modern Developer Portfolio',
    subtitle: 'Personal Developer Portfolio',
    description: 'Hi, I\'m Abhishek Giri — a software engineer focused on building intelligent systems, solving complex problems, and delivering scalable, high-performance products with AI/ML.',
    longDescription: 'Professional developer portfolio showcasing technical expertise, project achievements, and development journey with modern web design and interactive elements.',
    image: 'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F52101%2Fbim-7gvrBoKmDjEfbOCMoop3CrQo87IszJ&w=3840&q=100',
    technologies: ['React', 'JavaScript', 'CSS', 'Three.js', 'Firebase', 'TypeScript', 'Next.js', 'AOS', 'Tailwind CSS', 'Framer Motion'],
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
    description: 'Hi, I\'m Abhishek Giri — a software developer building scalable, data-driven solutions with AI/ML, focused on clean architecture, performance, and real-world impact.',
    longDescription: 'Modern and interactive developer portfolio built with cutting-edge web technologies, showcasing professional projects, skills, and development expertise.',
    image: 'https://cdn.dribbble.com/userupload/16738264/file/original-974d5f5a3a23cd39771fc09065476b97.png?format=webp&resize=400x300&vertical=center',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Lucide React'],
    github: 'https://github.com/AbhishekGiri04/Portfolio-Nexus',
    demo: 'https://portfolio-nexux.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-600',
    metrics: { projects: '31+', technologies: '15+', experience: '2+ years' }
  },
  {
    id: 26,
    title: 'Invoice QC Service — AI-Powered B2B Invoice Extraction & Validation System',
    subtitle: 'AI-Driven Invoice Processing',
    description: 'Enterprise B2B invoice processing platform using Python & FastAPI with intelligent PDF extraction, automated validation, REST APIs, CLI tools, and a scalable, production-grade QC dashboard.',
    longDescription: 'Enterprise-grade invoice processing system with AI-powered extraction, validation, and comprehensive dashboard for B2B invoice management.',
    image: 'https://images.prismic.io/statrys/f92d973f-023c-40d3-a451-0d7dd445ebf4_invoice-number-complex-configuration-example-1.png?auto=compress,format',
    technologies: ['Python', 'FastAPI', 'JavaScript', 'HTML5', 'CSS', 'Typer', 'Pydantic', 'PDFPlumber', 'Pytest', 'Uvicorn', 'Dockerfile'],
    github: 'https://github.com/AbhishekGiri04/InvoiceQC-Service',
    demo: 'https://invqc-dev.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-green-600',
    metrics: { accuracy: '96%', speed: '5x faster', validation: 'Real-time' }
  },
  {
    id: 28,
    title: 'Agnix — Professional AI & ML Developer Website',
    subtitle: 'Official Developer Website',
    description: 'Agnix — The official website of Abhishek Giri, delivering AI & ML development services, innovative technology solutions, and a showcase of professional achievements through a modern, scalable web platform.',
    longDescription: 'Professional developer website showcasing AI & ML services, innovative solutions, and technical expertise with modern design and comprehensive service offerings.',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230712/pngtree-innovative-3d-renderings-for-web-development-promotions-marketing-collateral-business-presentations-image_3856387.jpg',
    technologies: ['JavaScript', 'WebGL', 'Three.js', 'HTML5', 'CSS3', 'GSAP', 'Draco'],
    github: 'https://github.com/AbhishekGiri04/Agnix',
    demo: 'https://agnix-dev.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-violet-500 to-indigo-600',
    metrics: { services: '10+', projects: '25+', clients: 'Global' }
  },
  {
    id: 29,
    title: 'Calvista — Interactive React Calendar Component',
    subtitle: 'Modern Calendar Component',
    description: 'Calvista is an enterprise-grade React calendar component featuring glass morphism UI, TypeScript safety, and WCAG 2.1 AA accessibility. Optimized for SaaS platforms with advanced event management and responsive design.',
    longDescription: 'Professional calendar component with accessibility features, flexible views, and comprehensive event management for modern web applications.',
    image: 'https://static.vecteezy.com/system/resources/previews/024/696/518/large_2x/june-calendar-and-white-flowers-on-wooden-background-photo.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Storybook', 'Date-fns', 'Clsx', 'JavaScript'],
    github: 'https://github.com/AbhishekGiri04/CalendarView',
    demo: 'https://calvista.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Code2 className="w-6 h-6" />,
    gradient: 'from-blue-500 to-purple-600',
    metrics: { views: '3+', accessibility: 'WCAG 2.1', responsive: '100%' }
  },
  {
    id: 31,
    title: 'AG-DEV — Professional AI & ML Developer Website',
    subtitle: 'Professional Developer Website',
    description: 'Professional AI & ML developer website with interactive 3D visuals, real-time project showcases, and physics-based tech stack. Built with React, Three.js, and GSAP.',
    longDescription: 'Professional developer website showcasing AI & ML services with interactive 3D visuals and modern web technologies.',
    image: 'https://i.graphicmama.com/blog/wp-content/uploads/2022/11/29070809/3d-website-designs.jpg',
    technologies: ['React', 'Three.js', 'TypeScript', 'GSAP', 'Vite', 'React Three Fiber', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/AbhishekGiri04/AG-DEV',
    demo: 'https://agxdev.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-violet-500 to-indigo-600',
    metrics: { visuals: '3D', animations: 'GSAP', performance: 'Optimized' }
  },
  {
    id: 32,
    title: 'Scalazon — Modern E-Commerce Platform',
    subtitle: 'Modern E-Commerce Platform',
    description: 'Modern React e-commerce platform with Redux state management, Firebase authentication, voice search, and responsive design. Features cart, wishlist, orders, and secure payments.',
    longDescription: 'Modern React e-commerce platform with comprehensive features including cart management, wishlist, and secure payment integration.',
    image: 'https://wallpapers.com/images/hd/e-commerce-pictures-fydfma1rdft7jec4.jpg',
    technologies: ['React', 'Redux', 'JavaScript', 'Firebase', 'React Router', 'CSS3', 'SweetAlert', 'Font Awesome', 'Axios', 'Vercel', 'FakeStore API'],
    github: 'https://github.com/AbhishekGiri04/Scalazon',
    demo: 'https://scalazon-dev.vercel.app',
    category: 'Web Application',
    status: 'Live',
    featured: false,
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-pink-500 to-rose-600',
    metrics: { products: '1K+', users: '500+', orders: 'Real-time' }
  }
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