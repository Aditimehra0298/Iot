import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cpu, Zap, Calendar, Clock, Users, BookOpen, Wrench, Monitor, Play, CheckCircle, Award, Globe, Code, Shield, Eye, Sun, Battery, Microscope, Star, Quote, Brain, Settings, Rocket, Flame, Wheat, Stethoscope, Bone as Drone, ChevronRight, Instagram, Linkedin, Facebook, Youtube, Home, Sprout, Heart, Bot, Car } from 'lucide-react';

function App() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedTier, setSelectedTier] = useState('silver');

  // Syllabus navigation functions
  const scrollSyllabusLeft = () => {
    const container = document.getElementById('syllabus-container');
    if (container) {
      const scrollAmount = 300; // Adjust scroll distance
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollSyllabusRight = () => {
    const container = document.getElementById('syllabus-container');
    if (container) {
      const scrollAmount = 300; // Adjust scroll distance
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const [activeWeek, setActiveWeek] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [learningModes, setLearningModes] = useState({
    '2-month': 'offline',
    '4-month': 'offline',
    '6-month': 'offline'
  });
  const [showForm, setShowForm] = useState(false);
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [selectedProgramForForm, setSelectedProgramForForm] = useState(null);
  const [selectedProgramForOnlineForm, setSelectedProgramForOnlineForm] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    course: '',
    message: ''
  });
  const [onlineFormData, setOnlineFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    course: '',
    message: ''
  });
  const [ctaLearningMode, setCtaLearningMode] = useState('offline');
  const [showCtaForm, setShowCtaForm] = useState(false);
  const [ctaFormData, setCtaFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    course: '',
    message: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState('');
  const [openItems, setOpenItems] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  // Masterclass modules data
  const masterclassModules = [
    {
      id: 1,
      title: "Smart Home Automation System",
      subtitle: "Control and monitor lights, fans, and appliances using a mobile app or voice assistant",
      description: "Build a comprehensive smart home system that allows you to control and monitor lights, fans, and appliances remotely through a mobile app or voice assistant integration.",
      icon: Home,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      hoverColor: "group-hover:border-blue-500/60",
      technologies: ["ESP32", "Relays", "Alexa/Google Assistant"],
      duration: "3 weeks",
      level: "Beginner",
      projects: 5,
      animation: "animate-pulse-slow"
    },
    {
      id: 2,
      title: "IoT Smart Agriculture System",
      subtitle: "Automated irrigation with soil-moisture sensing, weather updates, and mobile notifications",
      description: "Develop an intelligent agricultural monitoring system that automatically manages irrigation based on soil moisture levels and provides weather updates with mobile notifications.",
      icon: Sprout,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      hoverColor: "group-hover:border-green-500/60",
      technologies: ["Arduino/ESP8266", "DHT11", "Soil Moisture Sensor"],
      duration: "4 weeks",
      level: "Intermediate",
      projects: 6,
      animation: "animate-bounce-slow"
    },
    {
      id: 3,
      title: "Health Monitoring IoT System",
      subtitle: "Real-time monitoring of heart rate, SpO2, and temperature with alerts on the cloud/mobile app",
      description: "Create a comprehensive health monitoring system that tracks vital signs in real-time and sends alerts through cloud platforms and mobile applications.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      hoverColor: "group-hover:border-red-500/60",
      technologies: ["ESP32", "Pulse Sensor", "ThingSpeak/Blynk"],
      duration: "4 weeks",
      level: "Intermediate",
      projects: 7,
      animation: "animate-wave"
    },
    {
      id: 4,
      title: "Obstacle Avoidance Robot",
      subtitle: "An autonomous robot that detects and avoids obstacles using sensors",
      description: "Build an intelligent autonomous robot equipped with advanced sensors that can navigate environments while detecting and avoiding obstacles in real-time.",
      icon: Bot,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      hoverColor: "group-hover:border-purple-500/60",
      technologies: ["Arduino", "Ultrasonic Sensors", "Motor Driver"],
      duration: "3 weeks",
      level: "Beginner",
      projects: 4,
      animation: "animate-flicker"
    },
    {
      id: 5,
      title: "Robotic Arm with Pick & Place",
      subtitle: "A robotic arm that can be controlled via joystick or mobile app to perform pick-and-place tasks",
      description: "Design and build a versatile robotic arm system that can be controlled through joystick or mobile app to perform precise pick-and-place operations.",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      hoverColor: "group-hover:border-orange-500/60",
      technologies: ["Servo Motors", "Arduino", "Bluetooth Module"],
      duration: "5 weeks",
      level: "Advanced",
      projects: 8,
      animation: "animate-pulse-slow"
    },
    {
      id: 6,
      title: "IoT-enabled Smart Robot Car",
      subtitle: "A robot car controlled via mobile app, GPS-enabled, with live monitoring over IoT",
      description: "Develop an advanced robot car that can be controlled remotely through a mobile app, features GPS navigation, and provides live monitoring capabilities over IoT networks.",
      icon: Car,
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
      hoverColor: "group-hover:border-teal-500/60",
      technologies: ["ESP32/NodeMCU", "GPS Module", "DC Motors"],
      duration: "6 weeks",
      level: "Advanced",
      projects: 10,
      animation: "animate-bounce-slow"
    }
  ];

  // Advanced specializations data
  const advancedSpecializations = [
    {
      id: 1,
      title: "Agricultural Robotics",
      description: "Design autonomous farming robots for crop monitoring, harvesting, and precision agriculture",
      icon: Wheat,
      color: "from-green-500 to-lime-500",
      projects: ["Crop Monitoring Drones", "Automated Harvesting Systems", "Soil Analysis Robots"]
    },
    {
      id: 2,
      title: "Medical Robotics",
      description: "Develop surgical assistance robots, patient monitoring systems, and rehabilitation devices",
      icon: Stethoscope,
      color: "from-pink-500 to-rose-500",
      projects: ["Surgical Assistant Robots", "Patient Monitoring IoT", "Rehabilitation Devices"]
    },
    {
      id: 3,
      title: "Drone Technology",
      description: "Master autonomous drone systems for surveillance, delivery, and environmental monitoring",
      icon: Drone,
      color: "from-purple-500 to-indigo-500",
      projects: ["Autonomous Delivery Drones", "Surveillance Systems", "Environmental Mapping"]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "Krishworks Technology provided excellent IoT training and project support for our compliance courses in Bengaluru. Their expertise helped us implement customized IoT solutions seamlessly.",
      author: "Dr. Ishani Roy",
      location: "Bengaluru"
    },
    {
      text: "The team at Krishworks guided us through IoT project phases and training, ensuring smooth integration with our existing systems. Their proactive support in Bengaluru was invaluable.",
      author: "Chryslynn D'Costa",
      location: "Bengaluru"
    },
    {
      text: "Krishworks delivered hands-on IoT training sessions that empowered our staff in Kolkata to operate real-time monitoring systems effectively during the project roll-out.",
      author: "Diptesh Mukherjee",
      location: "Kolkata"
    },
    {
      text: "BrandStory conducted detailed IoT workshops and helped implement our business automation project in Mumbai successfully, enabling us to optimize operations.",
      author: "Rahul Gupta",
      location: "Mumbai"
    },
    {
      text: "Sieora's IoT training and project management services in Chennai elevated our team's technical capabilities, leading to successful deployment of smart home automation systems.",
      author: "Priya Menon",
      location: "Chennai"
    },
    {
      text: "Yalantis provided comprehensive IoT training coupled with project execution support in Delhi, which enhanced our logistics platform's efficiency and real-time data handling.",
      author: "Anil Sharma",
      location: "Delhi"
    }
  ];

  // FAQ data
  const faqData = [
    {
      question: "What makes your IoT training program different from others?",
      answer: "Our IoT training combines hands-on project work with real-world industry scenarios. Students work with actual hardware, sensors, and cloud platforms used by leading companies. We focus on practical implementation rather than just theory, ensuring you can immediately apply what you learn in professional environments.",
      icon: <Zap className="h-5 w-5" />
    },
    {
      question: "Do I need programming experience to start IoT and robotics training?",
      answer: "While basic programming knowledge helps, we welcome complete beginners! Our curriculum starts with fundamentals and gradually builds complexity. We cover essential programming concepts in Python and C++ specifically for IoT and robotics applications, ensuring everyone can follow along regardless of their starting point.",
      icon: <Brain className="h-5 w-5" />
    },
    {
      question: "What kind of projects will I work on during the training?",
      answer: "You'll build real-world projects like smart home automation systems, industrial monitoring dashboards, autonomous robot navigation, sensor data analytics platforms, and connected device networks. Each project is designed to showcase different aspects of IoT and robotics, from hardware integration to cloud deployment.",
      icon: <Settings className="h-5 w-5" />
    },
    {
      question: "How long does it take to become job-ready in IoT and robotics?",
      answer: "Our intensive 6-month program is designed to make you industry-ready. This includes 3 months of core IoT concepts, 2 months of robotics specialization, and 1 month of capstone project work. We also provide career support including portfolio development and interview preparation.",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      question: "What hardware and software tools will I learn to use?",
      answer: "You'll master Arduino, Raspberry Pi, ESP32, various sensors (temperature, humidity, motion, cameras), actuators, and communication protocols (WiFi, Bluetooth, LoRa). On the software side, we cover Python, C++, Node.js, MQTT, cloud platforms (AWS IoT, Google Cloud), and mobile app development for device control.",
      icon: <Settings className="h-5 w-5" />
    },
    {
      question: "Is there ongoing support after completing the training?",
      answer: "Absolutely! We provide 1 year of post-training support including access to our alumni network, monthly tech talks, project mentorship, career guidance, and priority access to advanced workshops. Our community stays connected through our private Discord server where you can share projects and get help.",
      icon: <Brain className="h-5 w-5" />
    },
    {
      question: "Can I specialize in specific IoT domains like smart cities or healthcare?",
      answer: "Yes! After completing the core curriculum, you can choose specialization tracks in smart cities, healthcare IoT, industrial automation, agriculture tech, or consumer electronics. Each track includes domain-specific projects, industry case studies, and connections with relevant employers.",
      icon: <Zap className="h-5 w-5" />
    },
    {
      question: "What are the career opportunities after IoT and robotics training?",
      answer: "Graduates find roles as IoT Engineers, Robotics Developers, Embedded Systems Engineers, Solutions Architects, Product Managers for tech companies, and many start their own IoT consulting businesses. The demand is growing rapidly with average starting salaries ranging from ₹6-12 LPA depending on skills and location.",
      icon: <Rocket className="h-5 w-5" />
    }
  ];


  // Set loading to false after component mounts
  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  // FAQ toggle function - only one item can be open at a time
  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? [] // Close if already open
        : [index] // Open only this item, close all others
    );
  };

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Submit to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbzmgACkaI0vuqEMe8KX7R79h62FJDqJZ2s7jpar632wKQZF5k-oeneS6vXbf4OhXxV-/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          program: selectedProgramForForm,
          formType: 'offline',
          source: 'program-card',
          timestamp: new Date().toISOString()
        })
      });
      
      console.log('Form submitted to Google Sheets:', { ...formData, program: selectedProgramForForm });
      setThankYouMessage(`Thank you for your interest in ${selectedProgramForForm === '2-month' ? 'Silver' : selectedProgramForForm === '4-month' ? 'Gold' : 'Diamond'} offline training! We will contact you soon.`);
      setShowThankYou(true);
      setShowForm(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        course: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Thank you for your interest! We will contact you soon.');
      setShowForm(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        course: '',
        message: ''
      });
    }
  };

  const openForm = (program) => {
    setSelectedProgramForForm(program);
    setShowForm(true);
  };

  const openOnlineForm = (program) => {
    setSelectedProgramForOnlineForm(program);
    setShowOnlineForm(true);
  };

  const openCtaForm = () => {
    setShowCtaForm(true);
  };

  const handleCtaInputChange = (e) => {
    const { name, value } = e.target;
    setCtaFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCtaFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Submit to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbzmgACkaI0vuqEMe8KX7R79h62FJDqJZ2s7jpar632wKQZF5k-oeneS6vXbf4OhXxV-/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...ctaFormData,
          formType: ctaLearningMode,
          source: 'cta-section',
          timestamp: new Date().toISOString()
        })
      });
      
      console.log('CTA form submitted to Google Sheets:', { ...ctaFormData, mode: ctaLearningMode });
      setThankYouMessage(`Thank you for your interest in ${ctaLearningMode} training! We will contact you soon.`);
      setShowThankYou(true);
      setShowCtaForm(false);
      setCtaFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        course: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting CTA form:', error);
      alert(`Thank you for your interest in ${ctaLearningMode} training! We will contact you soon.`);
      setShowCtaForm(false);
      setCtaFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        course: '',
        message: ''
      });
    }
  };

  const handleOnlineInputChange = (e) => {
    const { name, value } = e.target;
    setOnlineFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOnlineFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Submit to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbzmgACkaI0vuqEMe8KX7R79h62FJDqJZ2s7jpar632wKQZF5k-oeneS6vXbf4OhXxV-/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...onlineFormData,
          program: selectedProgramForOnlineForm,
          formType: 'online',
          source: 'program-card',
          timestamp: new Date().toISOString()
        })
      });
      
      console.log('Online form submitted to Google Sheets:', { ...onlineFormData, program: selectedProgramForOnlineForm });
      setThankYouMessage(`Thank you for your interest in ${selectedProgramForOnlineForm === '2-month' ? 'Silver' : selectedProgramForOnlineForm === '4-month' ? 'Gold' : 'Diamond'} online training! We will contact you soon.`);
      setShowThankYou(true);
      setShowOnlineForm(false);
      setOnlineFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        course: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting online form:', error);
      alert('Thank you for your interest in online training! We will contact you soon.');
      setShowOnlineForm(false);
      setOnlineFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        course: '',
        message: ''
      });
    }
  };

  const programs = {
    '2-month': {
      title: '2-Month IoT Bootcamp',
      duration: '8 Weeks',
      ideal: 'Beginners, Bootcamps, Engineering Students',
      focus: 'Foundations + Intermediate + Cloud',
      color: 'from-gray-400 to-gray-600',
     
      weeks: [
        {
          week: 1,
          module: 'Introduction to IoT & Electronics',
          topics: ['What is IoT', 'IoT Architecture', 'Sensors & Actuators', 'Microcontrollers', 'Breadboard & LEDs', 'Introduction to Electronics'],
          projects: ['LED Blinking', 'Buzzer System', 'Diode Circuit', 'Transistor Circuit', 'RLC Circuits']
        },
        {
          week: 2,
          module: 'Arduino Programming Basics',
          topics: ['Digital/Analog IO', 'IF-ELSE', 'FOR/WHILE Loops', 'Functions', 'Serial Monitor'],
          projects: ['Traffic Light Control', 'LED Dice Game', 'Serial Calculator']
        },
        {
          week: 3,
          module: 'Sensor Integration with Arduino',
          topics: ['DHT11 / DHT22', 'LDR, PIR', 'Ultrasonic, IR', 'Soil Sensor', 'Sound Sensor'],
          projects: ['Smart Temp Alert', 'Obstacle Detector', 'Irrigation Monitor']
        },
        {
          week: 4,
          module: 'Actuators & Mini Projects',
          topics: ['DC Motors', 'Servo Motor', 'Stepper Motor', 'Relays', 'Controlling Outputs'],
          projects: ['Automatic Fan', 'PIR-Based Lighting', 'Smart Switch Board']
        },
        {
          week: 5,
          module: 'ESP32 Programming + Wi-Fi',
          topics: ['ESP32 Setup', 'Serial Monitor', 'Wi-Fi Scanner', 'Digital IO'],
          projects: ['ESP32 LED Blink', 'Sensor Data to Web Server', 'Wi-Fi Scanner']
        },
        {
          week: 6,
          module: 'Web & Cloud (Thing-Speak + Blynk)',
          topics: ['HTTP', 'Web Server', 'Thing-Speak', 'Blynk'],
          projects: ['Web Dashboard Control', 'Cloud Temp Logger', 'Mobile Controlled Fan']
        },
        {
          week: 7,
          module: 'Micro-Python on ESP32 (Intro)',
          topics: ['U-PyCraft', 'Variables', 'Loops', 'Touch Input'],
          projects: ['Capacitive Touch LED', 'DHT Sensor Web Dashboard']
        },
        {
          week: 8,
          module: 'Mini Capstone Project & Demo',
          topics: ['Project Planning', 'Integration & Presentation'],
          projects: ['Smart Home Panel', 'Weather Dashboard', 'IoT Plant Monitor']
        }
      ]
    },
    '4-month': {
      title: '4-Month IoT Mastery',
      duration: '16 Weeks',
      ideal: 'Intermediate Learners, Career Switchers',
      focus: 'Advanced IoT + Industrial Protocols',
     
      
      weeks: [
        {
          week: 1,
          module: 'Introduction to IoT & Electronics',
          topics: ['What is IoT', 'IoT Architecture', 'Sensors & Actuators', 'Microcontrollers', 'Basics of Electronics'],
          projects: ['LED Blinking', 'Push Button LED', 'Buzzer Alert System', 'Fan Controller with Potentiometer']
        },
        {
          week: 2,
          module: 'Arduino Programming Basics',
          topics: ['Digital & Analog', 'I/O - IF/ELSE', 'FOR/WHILE', 'Functions', 'Serial Monitor'],
          projects: ['Traffic Light Control', 'Analog Sensor Reading', 'LED Pattern Generator', 'Simple Calculator', 'LED Dice Game']
        },
        {
          week: 3,
          module: 'Communication Protocols',
          topics: ['UART', 'I2C', 'SPI', 'Wi-Fi', 'HTTP/HTTPS'],
          projects: ['Serial Data Transmission', 'OLED Display Integration', 'SD Card Logging', 'TFT / RFID Module']
        },
        {
          week: 4,
          module: 'Sensor Integration with Microcontroller',
          topics: ['DHT11', 'LDR', 'PIR', 'Ultrasonic (HC-SR04)', 'Soil Moisture Sensor', 'IR Sensor'],
          projects: ['Smart Temperature Alert', 'Ultrasonic Obstacle Detector', 'Smart Irrigation System', 'Home Automation + Alerts']
        },
        {
          week: 5,
          module: 'Actuators and Mini Projects',
          topics: ['Relays', 'DC Motors', 'Servo Motor', 'Stepper Motor'],
          projects: ['Automatic Fan with Temp Sensor', 'Motion-Based Lighting', 'Plant Watering System', 'Visitor Alert System']
        },
        {
          week: 6,
          module: 'ESP32 Basics + Wi-Fi',
          topics: ['Introduction to ESP32', 'Arduino IDE setup', 'Digital/Analog I/O with ESP32'],
          projects: ['Web-Controlled LED', 'Temperature Logger on Thing-Speak', 'ESP32 Wi-Fi Weather Station']
        },
        {
          week: 7,
          module: 'Web & Cloud Platforms',
          topics: ['ESP32 Web Server', 'Blynk & ThingSpeak', 'HTTP Requests'],
          projects: ['Sensor Web Dashboard', 'Mobile-Controlled Automation', 'Cloud Temp & Soil Logger']
        },
        {
          week: 8,
          module: 'Micro-Python on ESP32',
          topics: ['Micro-Python Intro', 'uPyCraft/Thonny IDE', 'Variables, Loops, Libraries'],
          projects: ['Blink, Sensor Read (DHT11)', 'Basic Web Server on ESP32', 'Capacitive Touch–Controlled LED']
        },
        {
          week: 9,
          module: 'Raspberry Pi + Python Basics',
          topics: ['Raspberry Pi Setup', 'GPIO Control', 'Python Programming', 'Linux Commands'],
          projects: ['IoT Weather Station', 'Smart Home Automation Panel', 'Smart Plant Monitoring System']
        },
        {
          week: 10,
          module: 'Advanced IoT Systems',
          topics: ['System Integration', 'Data Processing', 'Network Protocols'],
          projects: ['Smart Home Hub', 'Industrial Sensor Network', 'Environmental Monitoring System']
        },
        {
          week: 11,
          module: 'Buffer / Extension / Revision',
          topics: ['Extra Practice or Custom Add-ons'],
          projects: ['(As per training discretion)']
        },
        {
          week: 12,
          module: 'Python + Flask on Raspberry Pi',
          topics: ['Python Web Server', 'File Handling'],
          projects: ['Web UI to Control GPIO', 'Sensor Logger in CSV']
        },
        {
          week: 13,
          module: 'MQTT Protocol',
          topics: ['Broker & Client Basics', 'MQTT.fx / Mosquitto', 'Pub/Sub'],
          projects: ['MQTT-based Home Automation', 'ESP32 ↔ Python Bi-directional', 'Cloud Data Logging']
        },
        {
          week: 14,
          module: 'Industrial Protocols & BLE',
          topics: ['RS232/RS485', 'Modbus Basics', 'BLE with ESP32', 'Industry 4.0 Concepts'],
          projects: ['BLE Energy Monitor', 'RS485 Sensor Integration']
        },
        {
          week: 15,
          module: 'Voice + Smart Assistant Integration',
          topics: ['IFTTT', 'Google Assistant', 'Webhooks & Applets'],
          projects: ['Voice-controlled Home', 'Automation (Fan/Light)']
        },
        {
          week: 16,
          module: 'Final Project + Evaluation',
          topics: ['Design', 'Integration', 'Present'],
          projects: ['Capstone Project: Home Automation', 'Smart Farm', 'Health Monitor', 'AI-Enabled Surveillance']
        }
      ]
    },
    '6-month': {
      title: '6-Month IoT & AI Mastery',
      duration: '24 Weeks',
      ideal: 'Advanced Learners, Industry Professionals',
      focus: 'Complete IoT + AI + Industry 4.0',
      color: 'from-purple-500 to-purple-700',

      weeks: [
        {
          week: 1,
          module: 'Introduction to IoT & Electronics',
          topics: ['What is IoT', 'IoT Architecture', 'Sensors & Actuators', 'Microcontrollers', 'Basics of Electronics'],
          projects: ['LED Blinking', 'Push Button LED', 'Buzzer Alert System', 'Fan Controller with Potentiometer']
        },
        {
          week: 2,
          module: 'Arduino Programming Basics',
          topics: ['Digital & Analog', 'I/O - IF/ELSE', 'FOR/WHILE', 'Functions', 'Serial Monitor'],
          projects: ['Traffic Light Control', 'Analog Sensor Reading', 'LED Pattern Generator', 'Simple Calculator']
        },
        {
          week: 3,
          module: 'IoT Hardware Fundamentals',
          topics: ['Circuit Design', 'Component Selection', 'Power Management', 'Assembly'],
          projects: ['Custom Sensor Board', 'Power Supply Testing']
        },
        {
          week: 4,
          module: 'Communication Protocols',
          topics: ['UART', 'I2C', 'SPI', 'Wi-Fi', 'HTTP/HTTPS'],
          projects: ['Serial Data Transmission', 'OLED Display Integration', 'SD Card Logging', 'TFT / RFID Module']
        },
        {
          week: 5,
          module: 'Sensor Integration with Microcontroller',
          topics: ['DHT11', 'LDR', 'PIR', 'Ultrasonic', 'Soil Moisture Sensor', 'IR Sensor'],
          projects: ['Smart Temperature Alert', 'Ultrasonic Obstacle Detector', 'Smart Irrigation System']
        },
        {
          week: 6,
          module: 'Actuators and Mini Projects',
          topics: ['Relays', 'DC Motors', 'Servo Motor', 'Stepper Motor'],
          projects: ['Automatic Fan with Temp Sensor', 'Motion-Based Lighting', 'Plant Watering System']
        },
        {
          week: 7,
          module: 'ESP32 Basics + Wi-Fi',
          topics: ['Introduction to ESP32', 'Arduino IDE setup', 'Digital/Analog I/O with ESP32'],
          projects: ['Web-Controlled LED (Web Server)', 'Temperature Logger on Thing-Speak', 'ESP32 Wi-Fi Weather Station']
        },
        {
          week: 8,
          module: 'Web & Cloud Platforms',
          topics: ['ESP32 Web Server', 'Blynk & ThingSpeak', 'HTTP Requests'],
          projects: ['Sensor Web Dashboard', 'Mobile-Controlled Automation', 'Cloud Temp & Soil Logger']
        },
        {
          week: 9,
          module: 'Bluetooth-Controlled Robot',
          topics: ['HC-05', 'Joystick', 'Mobile App'],
          projects: ['Bluetooth Car with App Control']
        },
        {
          week: 10,
          module: 'Line/Human Follower Bot',
          topics: ['IR Array Sensor', 'PWM Logic', 'Human Follower'],
          projects: ['Track-following Robot and Make Different types of Robots']
        },
        {
          week: 11,
          module: 'Micro-Python on ESP32',
          topics: ['Micro-Python Intro', 'uPyCraft/Thonny IDE', 'Variables, Loops, Libraries'],
          projects: ['Blink, Sensor Read (DHT11)', 'Basic Web Server on ESP32', 'Capacitive Touch–Controlled LED']
        },
        {
          week: 12,
          module: 'Mid-Term Project Week',
          topics: ['Integrate multiple modules'],
          projects: ['Smart Irrigation / IoT Home Panel']
        },
        {
          week: 13,
          module: 'Raspberry Pi + Python Basics',
          topics: ['Raspberry Pi Setup', 'GPIO Control', 'Python Programming', 'Linux Commands'],
          projects: ['IoT Weather Station', 'Smart Home Automation Panel', 'Smart Plant Monitoring System']
        },
        {
          week: 14,
          module: 'Sensor + Python Projects',
          topics: ['PIR', 'DHT11', 'Soil', 'Camera'],
          projects: ['PIR Alarm', 'Weather Monitor', 'Pi Cam Viewer']
        },
        {
          week: 15,
          module: 'Python + Flask on Raspberry Pi',
          topics: ['Python Web Server', 'File Handling'],
          projects: ['Web UI to Control GPIO', 'Sensor Logger in CSV']
        },
        {
          week: 16,
          module: 'Buffer / Extension / Revision',
          topics: ['Extra Practice or Custom Add-ons'],
          projects: ['(As per training discretion)']
        },
        {
          week: 17,
          module: 'MQTT Protocol',
          topics: ['Broker & Client Basics', 'MQTT.fx / Mosquitto', 'Pub/Sub'],
          projects: ['MQTT-based Home Automation', 'ESP32 ↔ Python Bi-directional', 'Cloud Data Logging']
        },
        {
          week: 18,
          module: 'Computer Vision with OpenCV',
          topics: ['Color/Object Tracking'],
          projects: ['Color Following Robot (Pi + Cam + OpenCV)']
        },
        {
          week: 19,
          module: 'Industrial Protocols & BLE',
          topics: ['RS232/RS485', 'Modbus Basics', 'BLE with ESP32', 'Industry 4.0 Concepts'],
          projects: ['BLE Energy Monitor', 'RS485 Sensor Integration']
        },
        {
          week: 20,
          module: 'Voice + Smart Assistant Integration',
          topics: ['IFTTT', 'Google Assistant', 'Webhooks & Applets'],
          projects: ['Voice-controlled Home', 'Automation (Fan/Light)']
        },
        {
          week: 21,
          module: 'AI-Powered Robot',
          topics: ['Teachable Machine', 'TensorFlow Lite'],
          projects: ['Smart Surveillance Bot']
        },
        {
          week: 22,
          module: 'Real-World Industrial IoT',
          topics: ['Use Cases, Security, Data Logging'],
          projects: ['IoT Energy Meter, Factory Monitor Dashboard']
        },
        {
          week: 23,
          module: 'Final Project Build',
          topics: ['Planning, Hardware + Code Integration'],
          projects: ['Team-Based Capstone Projects']
        },
        {
          week: 24,
          module: 'Demo + Presentation',
          topics: ['Testing, Debugging, Reporting'],
          projects: ['Evaluation + Showcase']
        }
      ]
    }
  };

  const prerequisites = [
    {
      title: 'Basic Programming Knowledge',
      level: 'Preferred but not mandatory',
      description: 'Structure of Basic Programming, Arduino C/C++ and later MicroPython',
      icon: Code
    },
    {
      title: 'Basic Electronics Knowledge',
      level: 'Must-Have',
      description: 'Understanding of Ohms Law, Current/Voltage/Resistance, Breadboarding basics',
      icon: Zap
    },
    {
      title: 'Basic Computer Literacy',
      level: 'Required',
      description: 'Install software, use serial monitor, navigate folders, connect USB devices',
      icon: Monitor
    },
    {
      title: 'Internet & Mobile Apps',
      level: 'Recommended',
      description: 'Wi-Fi configuration, mobile apps (Blynk), basic HTTP concepts',
      icon: Globe
    }
  ];








  return (
    <>
      <style jsx>{`
        @keyframes irritatingLoop {
          0% { transform: translateX(0) rotate(0deg) scale(1); }
          10% { transform: translateX(10px) rotate(1deg) scale(1.02); }
          20% { transform: translateX(-5px) rotate(-0.5deg) scale(0.98); }
          30% { transform: translateX(15px) rotate(1.5deg) scale(1.01); }
          40% { transform: translateX(-10px) rotate(-1deg) scale(0.99); }
          50% { transform: translateX(20px) rotate(2deg) scale(1.03); }
          60% { transform: translateX(-15px) rotate(-1.5deg) scale(0.97); }
          70% { transform: translateX(25px) rotate(2.5deg) scale(1.02); }
          80% { transform: translateX(-20px) rotate(-2deg) scale(0.98); }
          90% { transform: translateX(30px) rotate(3deg) scale(1.01); }
          100% { transform: translateX(0) rotate(0deg) scale(1); }
        }
        
        @keyframes continuousMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes individualCardMove {
          0% { transform: translateX(-150px); }
          10% { transform: translateX(-120px); }
          20% { transform: translateX(-90px); }
          30% { transform: translateX(-60px); }
          40% { transform: translateX(-30px); }
          50% { transform: translateX(0px); }
          60% { transform: translateX(30px); }
          70% { transform: translateX(60px); }
          80% { transform: translateX(90px); }
          90% { transform: translateX(120px); }
          100% { transform: translateX(150px); }
        }
        
        @keyframes autoScrollWeekGrid {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% + 100vw)); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1rem)); }
        }
        
        @keyframes annoyingBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes crazyShake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10% { transform: translateX(-2px) rotate(-1deg); }
          20% { transform: translateX(2px) rotate(1deg); }
          30% { transform: translateX(-1px) rotate(-0.5deg); }
          40% { transform: translateX(1px) rotate(0.5deg); }
          50% { transform: translateX(-3px) rotate(-1.5deg); }
          60% { transform: translateX(3px) rotate(1.5deg); }
          70% { transform: translateX(-2px) rotate(-1deg); }
          80% { transform: translateX(2px) rotate(1deg); }
          90% { transform: translateX(-1px) rotate(-0.5deg); }
        }
        
        .irritating-syllabus {
          animation: irritatingLoop 3s ease-in-out infinite;
        }
        
        .continuous-move {
          animation: continuousMove 8s linear infinite;
        }
        
        .individual-card-move {
          animation: individualCardMove 6s linear infinite;
        }
        
        .auto-scroll-week-grid {
          animation: autoScrollWeekGrid 20s linear infinite;
        }
        
        .auto-scroll-week-grid:hover {
          animation-play-state: paused;
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .annoying-cards {
          animation: annoyingBounce 2s ease-in-out infinite;
        }
        
        .crazy-shake {
          animation: crazyShake 0.5s ease-in-out infinite;
        }
        
        .irritating-syllabus:hover {
          animation-play-state: paused;
        }
        
        .continuous-move:hover {
          animation-play-state: paused;
        }
        
        .individual-card-move:hover {
          animation-play-state: running;
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-[#4A90E2] via-[#7FB3D3] to-[#E8F4FD] text-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="/Untitled design (20).png" 
            alt="Background Pattern" 
            className="w-full h-full object-cover opacity-30"
            onLoad={() => console.log('Main background image loaded successfully')}
            onError={(e) => console.error('Main background image failed to load:', e)}
          />
        </div>
        {/* Smooth blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2] via-[#7FB3D3] to-[#E8F4FD]"></div>
      </div>

            {/* Navigation */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#4A90E2] shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              <div className="relative">
                {/* Enhanced logo with subtle shadow */}
                <img 
                  src="/l5.png" 
                  alt="IoT Academy Logo" 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-[#1A365D] to-[#4A90E2] bg-clip-text text-transparent leading-tight">
                  Internet of Things & Robotics
                </span>
                <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm font-semibold bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] bg-clip-text text-transparent leading-tight Serif bold italic">
                  A Division of ITC (India)Pvt. Ltd.
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              <a href="#programs" className="text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-sm lg:text-base xl:text-lg hover:scale-105 transform duration-200">Programs</a>
              <a href="#projects" className="text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-sm lg:text-base xl:text-lg hover:scale-105 transform duration-200">Projects</a>
              <a href="#syllabus" className="text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-sm lg:text-base xl:text-lg hover:scale-105 transform duration-200">Syllabus</a>
              <a href="#prerequisites" className="text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-sm lg:text-base xl:text-lg hover:scale-105 transform duration-200">Prerequisites</a>
              <button 
                onClick={openCtaForm}
                className="bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-bold py-2 px-4 lg:py-3 lg:px-6 xl:px-8 rounded-full text-sm lg:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Enroll Now
              </button>
            </div>

            <button 
              className="md:hidden text-gray-900 hover:text-[#4A90E2] font-semibold p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block transition-all duration-300 h-0.5 w-6 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/95 backdrop-blur-md border-t border-[#4A90E2]/20`}>
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a href="#programs" className="block text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-base sm:text-lg py-2 hover:bg-gray-50 rounded-lg px-3">Programs</a>
            <a href="#projects" className="block text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-base sm:text-lg py-2 hover:bg-gray-50 rounded-lg px-3">Projects</a>
            <a href="#syllabus" className="block text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-base sm:text-lg py-2 hover:bg-gray-50 rounded-lg px-3">Syllabus</a>
            <a href="#prerequisites" className="block text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-base sm:text-lg py-2 hover:bg-gray-50 rounded-lg px-3">Prerequisites</a>
            <button 
              onClick={openCtaForm}
              className="w-full bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-bold py-3 px-6 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="https://cdn.pixabay.com/video/2019/10/10/27725-365890983_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              {/* IoT and Robotics Division Badge */}
              <div className="mb-4 flex justify-center lg:justify-start">
                <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white text-xs font-semibold rounded-full shadow-lg">
                  <Cpu className="w-3 h-3 mr-1.5" />
                  Premier IoT & Robotics testing, Certification, and training Hub
                </div>
              </div>
              
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="relative">
                  <Cpu className="w-14 h-14 sm:w-16 sm:h-16 text-[#4A90E2]" />
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 animate-fade-in leading-tight drop-shadow-2xl bg-gradient-to-r from-blue-300/20 to-blue-400/20 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl inline-block border border-blue-300/30">
                Master Class in IoT & Robotics
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-lg">
                Transform your career with hands-on IoT and Electronics training. Build real-world projects and master industry-standard technologies.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { icon: Zap, text: '100+ Projects', color: 'text-[#4A90E2]' },
                  { icon: Users, text: 'Expert Mentors', color: 'text-[#7FB3D3]' },
                  { icon: BookOpen, text: 'Industry Skills', color: 'text-[#4A90E2]' },
                  { icon: Wrench, text: 'Hands-on Learning', color: 'text-[#7FB3D3]' },
                  { icon: Award, text: 'Free Internships', color: 'text-[#4A90E2]' },
                  { icon: Users, text: 'Placement Assistance', color: 'text-[#7FB3D3]' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/90 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/95 transition-all duration-300 hover:scale-105 shadow-lg">
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                    <span className="text-gray-900 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                <button
                  onClick={openCtaForm}
                  className="bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#4A90E2]/25"
                >
                  Explore Programs
                </button>
                <button 
                  onClick={() => {
                    // Download the existing PDF file
                    const link = document.createElement('a');
                    link.href = '/Who We Are.pdf';
                    link.download = 'Who We Are.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105"
                >
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right Side - Video Collage */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Video Collage Container */}
                <div className="relative bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] backdrop-blur-md rounded-3xl p-6 border border-[#4A90E2]/30 shadow-xl overflow-hidden">
                  <div className="relative max-w-2xl">
                    {/* Main Large Video - Top */}
                    <div className="relative mb-3">
                      <video 
                        className="w-full h-auto rounded-2xl shadow-lg"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231f2937'%3E%3C/text%3E%3C/svg%3E"
                      >
                        <source src="https://media.istockphoto.com/id/2204914581/video/a-young-student-carefully-uses-a-multimeter-to-examine-the-circuit-board-of-a-robotic-arm-in.mp4?s=mp4-640x640-is&k=20&c=rumdwQjZ345SrWqGB0Ots5GuBS64gkkDicQjosk2kbU=" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Main video overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      
                      {/* Main video info */}
                      <div className="absolute bottom-3 left-3 bg-[#4A90E2]/90 backdrop-blur-sm rounded-lg p-2 border border-[#4A90E2]/50">
                        <div className="text-xs text-white font-mono">
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span>MAIN</span>
                          </div>
                          <div className="text-white text-xs">IoT Training</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Row - Two Videos Side by Side */}
                    <div className="flex gap-3">
                      {/* Left Video */}
                      <div className="relative flex-1">
                        <video 
                          className="w-full h-auto rounded-xl shadow-md"
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%231f2937'%3E%3C/text%3E%3C/svg%3E"
                        >
                          <source src="https://media.istockphoto.com/id/2163416805/video/3d-animation-of-evtols-flying-over-skyscrapers-in-a-modern-city.mp4?s=mp4-640x640-is&k=20&c=oTefkHtdU2LS73Cu-wDw5ezKOFLCGGMLcZ4BMPNisj8=" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        
                        {/* Left video overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                            <Play className="w-5 h-5 text-white ml-0.5" />
                          </div>
                        </div>
                        
                        {/* Left video info */}
                        <div className="absolute bottom-2 left-2 bg-[#7FB3D3]/90 backdrop-blur-sm rounded-lg p-1.5 border border-[#7FB3D3]/50">
                          <div className="text-xs text-white font-mono">
                            <div className="text-white text-xs"></div>
                          </div>
                        </div>
                      </div>
                    
                      {/* Right Video */}
                      <div className="relative flex-1">
                        <video 
                        className="w-full h-auto rounded-xl shadow-md"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%231f2937'%3E%3C/svg%3E"
                      >
                        <source src="https://cdn.pixabay.com/video/2022/11/26/140521-775376205_large.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Bottom right video overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        </div>
                      </div>
                      
                      {/* Bottom right video info */}
                      <div className="absolute bottom-2 left-2 bg-[#1A365D]/90 backdrop-blur-sm rounded-lg p-1.5 border border-[#1A365D]/50">
                        <div className="text-xs text-white font-mono">
                          <div className="text-white text-xs">Tech Future</div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Collage info overlay */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="text-xs text-white font-mono">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse"></div>
                        <span></span>
                      </div>
                      <div className="text-white text-xs"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section id="programs" className="relative z-10 py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img 
            src="/Untitled design (20).png" 
            alt="Program Background" 
            className="w-full h-full object-cover opacity-50"
            onLoad={() => console.log('Program section background image loaded successfully')}
            onError={(e) => console.error('Program section background image failed to load:', e)}
          />
          {/* Overlay to ensure content readability */}
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
        <h4 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-8 sm:mb-12 text-blue-900">
              Choose Our Program
              </h4>
              

          <div className="flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-6 md:gap-8 justify-center">
            {/* 2-Month Program */}
            <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md">
                  <div 
                    onClick={() => setSelectedProgram('2-month')}
                    className={`relative cursor-pointer group transition-all duration-500 ${
                      selectedProgram === '2-month' ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                {/* Silver Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Badge Background */}
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-2xl border-4 border-gray-200 flex items-center justify-center transform rotate-12">
                      {/* Badge Inner Circle */}
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full flex items-center justify-center border-2 border-gray-100">
                        {/* Badge Icon */}
                        <div className="text-gray-600 text-lg font-bold">🥈</div>
                      </div>
                    </div>
                    {/* Badge Label */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg border border-gray-600">
                      SILVER
                    </div>
                    {/* Badge Shine Effect */}
                    <div className="absolute top-1 left-1 w-3 h-3 bg-white/60 rounded-full blur-sm"></div>
                  </div>
                </div>

                {/* Program Container */}
                    <div className="relative bg-gradient-to-br from-gray-400 to-gray-600 p-1 rounded-2xl shadow-2xl overflow-hidden">
                      {/* Silver Light Background Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-gray-200/30 via-gray-300/40 to-gray-200/30 rounded-3xl blur-xl animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 opacity-20 animate-pulse"></div>
                      
                      <div className="relative bg-white rounded-2xl p-6 m-1 min-h-[280px] flex flex-col justify-between shadow-xl">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
                            <div className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-gray-400 to-gray-600 text-white">
                              {programs['2-month'].duration}
                            </div>
                          </div>
                          
                          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{programs['2-month'].title}</h3>
                          <p className="text-gray-800 mb-2 text-sm sm:text-base">
                            <span className="text-blue-500 font-semibold">Ideal for:</span> {programs['2-month'].ideal}
                          </p>
                          <p className="text-gray-800 mb-4 text-sm sm:text-base">
                            <span className="text-cyan-500 font-semibold">Focus:</span> {programs['2-month'].focus}
                          </p>
                          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{programs['2-month'].price}</div>
                        
                      </div>
                      
                      {/* Training Mode Selection */}
                      <div className="mb-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-1.5 shadow-md border border-gray-200">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-gray-700">Training Mode</p>
                            <div className="flex items-center space-x-1">
                              {/* Offline Mode */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLearningModes(prev => ({ ...prev, '2-month': 'offline' }));
                                }}
                                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5 ${
                                  learningModes['2-month'] === 'offline'
                                    ? 'bg-gradient-to-r from-gray-400 to-gray-600 text-white shadow-md shadow-gray-400/25'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                <div className="w-3 h-3">
                                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span>Offline</span>
                              </button>

                              {/* Online Mode */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLearningModes(prev => ({ ...prev, '2-month': 'online' }));
                                }}
                                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5 ${
                                  learningModes['2-month'] === 'online'
                                    ? 'bg-gradient-to-r from-gray-400 to-gray-600 text-white shadow-md shadow-gray-500/25'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                <div className="w-3 h-3">
                                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                  </svg>
                                </div>
                                <span>Online</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProgram('2-month');
                            setSelectedTier('silver');
                            document.getElementById('syllabus').scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="flex-1 text-center py-3 rounded-2xl bg-gradient-to-r from-gray-300 to-gray-500 text-white font-bold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base hover:from-gray-400 hover:to-gray-600"
                        >
                          Syllabus
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (learningModes['2-month'] === 'offline') {
                              openForm('2-month');
                            } else {
                              openOnlineForm('2-month');
                            }
                          }}
                          className="flex-1 text-center py-3 rounded-2xl bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base hover:from-gray-500 hover:to-gray-700"
                        >
                          {selectedProgram === '2-month' ? 'Selected' : 'Choose Program'}
                        </button>
                      </div>
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {selectedProgram === '2-month' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>

            {/* 4-Month Program */}
            <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md">
                  <div 
                    onClick={() => setSelectedProgram('4-month')}
                    className={`relative cursor-pointer group transition-all duration-500 ${
                      selectedProgram === '4-month' ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                {/* Gold Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Badge Background */}
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-2xl border-4 border-yellow-300 flex items-center justify-center transform -rotate-12">
                      {/* Badge Inner Circle */}
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full flex items-center justify-center border-2 border-yellow-200">
                        {/* Badge Icon */}
                        <div className="text-yellow-700 text-lg font-bold">🥇</div>
                      </div>
                    </div>
                    {/* Badge Label */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-800 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg border border-yellow-600">
                      GOLD
                    </div>
                    {/* Badge Shine Effect */}
                    <div className="absolute top-1 left-1 w-3 h-3 bg-white/80 rounded-full blur-sm"></div>
                    {/* Additional Shine */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full blur-sm"></div>
                  </div>
                </div>

                {/* Program Container */}
                    <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20 animate-pulse"></div>
                      
                      <div className="relative bg-white rounded-2xl p-6 m-1 min-h-[280px] flex flex-col justify-between shadow-xl">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
                            <div className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                              {programs['4-month'].duration}
                            </div>
                          </div>
                          
                          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{programs['4-month'].title}</h3>
                          <p className="text-gray-800 mb-2 text-sm sm:text-base">
                            <span className="text-yellow-500 font-semibold">Ideal for:</span> {programs['4-month'].ideal}
                          </p>
                          <p className="text-gray-800 mb-4 text-sm sm:text-base">
                            <span className="text-yellow-600 font-semibold">Focus:</span> {programs['4-month'].focus}
                          </p>
                          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{programs['4-month'].price}</div>
                        
                      </div>
                      
                      {/* Training Mode Selection */}
                      <div className="mb-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-1.5 shadow-md border border-gray-200">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-gray-700">Training Mode</p>
                            <div className="flex items-center space-x-1">
                              {/* Offline Mode */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLearningModes(prev => ({ ...prev, '4-month': 'offline' }));
                                }}
                                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5 ${
                                  learningModes['4-month'] === 'offline'
                                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md shadow-yellow-500/25'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                <div className="w-3 h-3">
                                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span>Offline</span>
                              </button>

                              {/* Online Mode */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLearningModes(prev => ({ ...prev, '4-month': 'online' }));
                                }}
                                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5 ${
                                  learningModes['4-month'] === 'online'
                                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md shadow-yellow-500/25'
                                    : 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                                }`}
                              >
                                <div className="w-3 h-3">
                                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                  </svg>
                                </div>
                                <span>Online</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProgram('4-month');
                            setSelectedTier('gold');
                            document.getElementById('syllabus').scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="flex-1 text-center py-3 rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-500 text-white font-bold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base hover:from-yellow-400 hover:to-yellow-600"
                        >
                          Syllabus
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (learningModes['4-month'] === 'offline') {
                              openForm('4-month');
                            } else {
                              openOnlineForm('4-month');
                            }
                          }}
                          className="flex-1 text-center py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base hover:from-yellow-500 hover:to-yellow-700"
                        >
                          {selectedProgram === '4-month' ? 'Selected' : 'Choose Program'}
                        </button>
                      </div>
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {selectedProgram === '4-month' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>

            {/* 6-Month Program */}
            <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md">
                  <div 
                    onClick={() => setSelectedProgram('6-month')}
                    className={`relative cursor-pointer group transition-all duration-500 ${
                      selectedProgram === '6-month' ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                {/* Diamond Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Badge Background */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-600 rounded-full shadow-2xl border-4 border-purple-300 flex items-center justify-center transform rotate-6">
                      {/* Badge Inner Circle */}
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-300 via-purple-400 to-pink-500 rounded-full flex items-center justify-center border-2 border-purple-200">
                        {/* Badge Icon */}
                        <div className="text-purple-700 text-lg font-bold">💎</div>
                      </div>
                    </div>
                    {/* Badge Label */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-800 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg border border-purple-600">
                      DIAMOND
                    </div>
                    {/* Badge Shine Effect */}
                    <div className="absolute top-1 left-1 w-3 h-3 bg-white/90 rounded-full blur-sm"></div>
                    {/* Additional Shine */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white/70 rounded-full blur-sm"></div>
                    {/* Diamond Sparkle */}
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-cyan-300/80 rounded-full blur-sm animate-pulse"></div>
                  </div>
                </div>

                {/* Program Container */}
                    <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 p-1 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 opacity-20 animate-pulse"></div>
                      
                      <div className="relative bg-white rounded-2xl p-6 m-1 min-h-[280px] flex flex-col justify-between shadow-xl">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
                            <div className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                              {programs['6-month'].duration}
                            </div>
                          </div>
                          
                          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{programs['6-month'].title}</h3>
                          <p className="text-gray-800 mb-2 text-sm sm:text-base">
                            <span className="text-purple-600 font-semibold">Ideal for:</span> {programs['6-month'].ideal}
                          </p>
                          <p className="text-gray-800 mb-4 text-sm sm:text-base">
                            <span className="text-purple-500 font-semibold">Focus:</span> {programs['6-month'].focus}
                          </p>
                          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{programs['6-month'].price}</div>
                        
                      </div>
                      
                      {/* Training Mode Selection */}
                      <div className="mb-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-1.5 shadow-md border border-gray-200">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-gray-700">Training Mode</p>
                            <div className="flex items-center space-x-1">
                              {/* Offline Mode */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLearningModes(prev => ({ ...prev, '6-month': 'offline' }));
                                }}
                                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5 ${
                                  learningModes['6-month'] === 'offline'
                                    ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md shadow-purple-500/25'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                <div className="w-3 h-3">
                                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span>Offline</span>
                              </button>

                              {/* Online Mode */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLearningModes(prev => ({ ...prev, '6-month': 'online' }));
                                }}
                                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5 ${
                                  learningModes['6-month'] === 'online'
                                    ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md shadow-purple-500/25'
                                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                                }`}
                              >
                                <div className="w-3 h-3">
                                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                  </svg>
                                </div>
                                <span>Online</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProgram('6-month');
                            setSelectedTier('diamond');
                            document.getElementById('syllabus').scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="flex-1 text-center py-3 rounded-2xl bg-gradient-to-r from-purple-300 to-purple-500 text-white font-bold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base hover:from-purple-400 hover:to-purple-600"
                        >
                          Syllabus
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (learningModes['6-month'] === 'offline') {
                              openForm('6-month');
                            } else {
                              openOnlineForm('6-month');
                            }
                          }}
                          className="flex-1 text-center py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base hover:from-purple-600 hover:to-purple-800"
                        >
                          {selectedProgram === '6-month' ? 'Selected' : 'Choose Program'}
                        </button>
                      </div>
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {selectedProgram === '6-month' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

        {/* Tier Selection Section */}
        <div className="relative z-10 py-6 sm:py-8 px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {/* Silver Tier */}
              <button
                onClick={() => setSelectedTier('silver')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform ${
                  selectedTier === 'silver' 
                    ? 'bg-gradient-to-r from-gray-500 to-gray-700 text-white shadow-lg scale-105' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-102'
                }`}
              >
                🥈 Silver
              </button>

              {/* Gold Tier */}
              <button
                onClick={() => setSelectedTier('gold')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform ${
                  selectedTier === 'gold' 
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-lg scale-105' 
                    : 'bg-yellow-200 text-yellow-700 hover:bg-yellow-300 hover:scale-102'
                }`}
              >
                🥇 Gold
              </button>

              {/* Diamond Tier */}
              <button
                onClick={() => setSelectedTier('diamond')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform ${
                  selectedTier === 'diamond' 
                    ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg scale-105' 
                    : 'bg-purple-200 text-purple-700 hover:bg-purple-300 hover:scale-102'
                }`}
              >
                💎 Diamond
              </button>
                </div>
              </div>
            </div>

        {/* Syllabus Details Section */}
        <div id="syllabus" className="relative z-10 py-3 sm:py-4 md:py-6 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`relative bg-white rounded-3xl p-6 sm:p-8 border shadow-lg transition-all duration-300 overflow-hidden ${
            selectedTier === 'silver' ? 'border-gray-500 shadow-gray-500/20' :
            selectedTier === 'gold' ? 'border-yellow-500 shadow-yellow-500/20' :
            selectedTier === 'diamond' ? 'border-purple-500 shadow-purple-500/20' :
            'border-gray-500 shadow-gray-500/20'
          }`}>
            {/* Content */}
            <div>
            <h3 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center transition-all duration-300 ${
              selectedTier === 'silver' ? 'bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent' :
              selectedTier === 'gold' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent' :
              selectedTier === 'diamond' ? 'bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent' :
              'bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent'
            }`}>
              {selectedTier === 'silver' ? 'Silver Tier - Foundation Syllabus' :
               selectedTier === 'gold' ? 'Gold Tier - Advanced Syllabus' :
               selectedTier === 'diamond' ? 'Diamond Tier - Master Syllabus' :
               'Silver Tier - Foundation Syllabus'}
                </h3>

            {!isLoading ? (
              <div className="relative">
                {/* Navigation Arrows */}
                <button
                  onClick={scrollSyllabusLeft}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 -ml-4 transition-all duration-300 hover:scale-110"
                  aria-label="Scroll left"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 rotate-180" />
                </button>
                
                <button
                  onClick={scrollSyllabusRight}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 -mr-4 transition-all duration-300 hover:scale-110"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                <div className="overflow-x-auto scrollbar-hide" id="syllabus-container">
                  <div className={`${selectedTier} flex gap-1 sm:gap-2 md:gap-3 pb-4 min-w-max`} style={{width: 'max-content'}}>
                  {(() => {
                    // Define tier-based syllabus content
                    const tierSyllabus = {
                      silver: [
                        { week: 1, module: "IoT Fundamentals", topics: ["Introduction to IoT", "Basic Electronics", "Arduino Basics", "Sensors & Actuators"], projects: ["LED Control", "Temperature Sensor", "Basic Automation"] },
                        { week: 2, module: "Basic Programming", topics: ["C++ for Arduino", "Basic Python", "Serial Communication", "Data Types"], projects: ["Data Logger", "Simple Dashboard", "Alert System"] },
                        { week: 3, module: "Simple Projects", topics: ["LED Control", "Temperature Sensor", "Basic Automation", "Project Planning"], projects: ["Smart Light", "Weather Station", "Motion Detector"] },
                        { week: 4, module: "Foundation Review", topics: ["Concept Review", "Basic Troubleshooting", "Documentation", "Final Project"], projects: ["Portfolio Project", "Documentation", "Presentation"] },
                        { week: 5, module: "Basic Electronics", topics: ["Circuit Design", "Components", "Soldering", "Testing"], projects: ["Basic Circuit", "Component Testing", "Soldering Practice"] },
                        { week: 6, module: "Sensor Integration", topics: ["Temperature Sensors", "Motion Sensors", "Light Sensors", "Data Collection"], projects: ["Sensor Network", "Data Logger", "Monitoring System"] },
                        { week: 7, module: "Basic Robotics", topics: ["Motor Control", "Servo Motors", "Basic Movement", "Simple Automation"], projects: ["Moving Robot", "Servo Control", "Automated System"] },
                        { week: 8, module: "Final Project", topics: ["Project Planning", "Implementation", "Testing", "Documentation"], projects: ["Complete IoT Project", "Final Presentation", "Portfolio"] }
                      ],
                      gold: [
                        { week: 1, module: "Advanced IoT Concepts", topics: ["IoT Architecture", "Protocols (MQTT, HTTP)", "Cloud Integration", "Data Management"], projects: ["Cloud Dashboard", "API Integration", "Data Analytics"] },
                        { week: 2, module: "Robotics Fundamentals", topics: ["Robot Mechanics", "Motor Control", "Sensor Integration", "Navigation Systems"], projects: ["Line Follower", "Obstacle Avoidance", "Pick & Place"] },
                        { week: 3, module: "Advanced Programming", topics: ["Python Advanced", "API Development", "Database Integration", "Real-time Processing"], projects: ["Real-time Monitor", "Database System", "API Server"] },
                        { week: 4, module: "Industry Projects", topics: ["Smart Home System", "Industrial Automation", "Data Analytics", "Project Management"], projects: ["Smart Home Hub", "Industrial Monitor", "Analytics Dashboard"] },
                        { week: 5, module: "Expert Mentorship", topics: ["Code Review", "Best Practices", "Industry Standards", "Career Guidance"], projects: ["Code Optimization", "Best Practices", "Portfolio Review"] },
                        { week: 6, module: "Portfolio Development", topics: ["Project Documentation", "Git Version Control", "Professional Presentation", "Certification Prep"], projects: ["Git Portfolio", "Documentation", "Certification"] },
                        { week: 7, module: "Advanced Robotics", topics: ["AI Integration", "Computer Vision", "Machine Learning", "Autonomous Systems"], projects: ["AI Robot", "Vision System", "ML Model"] },
                        { week: 8, module: "IoT Security", topics: ["Security Protocols", "Encryption", "Authentication", "Network Security"], projects: ["Secure Communication", "Encryption System", "Security Audit"] },
                        { week: 9, module: "Advanced Electronics", topics: ["Circuit Design", "PCB Layout", "Signal Processing", "Power Management"], projects: ["Custom PCB", "Signal Processor", "Power System"] },
                        { week: 10, module: "Wireless Communication", topics: ["WiFi, Bluetooth", "LoRa, Zigbee", "5G Integration", "Mesh Networks"], projects: ["Wireless Network", "Mesh System", "5G Project"] },
                        { week: 11, module: "Data Science & Analytics", topics: ["Data Visualization", "Statistical Analysis", "Predictive Modeling", "Big Data"], projects: ["Analytics Dashboard", "Predictive Model", "Big Data System"] },
                        { week: 12, module: "Cloud Computing", topics: ["AWS, Azure", "Microservices", "Containerization", "Serverless"], projects: ["Cloud Deployment", "Microservice App", "Serverless Function"] },
                        { week: 13, module: "Mobile App Development", topics: ["React Native", "Flutter", "IoT Mobile Apps", "Cross-platform"], projects: ["IoT Mobile App", "Cross-platform App", "Mobile Dashboard"] },
                        { week: 14, module: "Advanced AI & ML", topics: ["Deep Learning", "Neural Networks", "Computer Vision", "Natural Language Processing"], projects: ["AI Model", "Vision System", "NLP Project"] },
                        { week: 15, module: "Industry Internship", topics: ["Real-world Projects", "Industry Mentorship", "Professional Development", "Networking"], projects: ["Industry Project", "Professional Network", "Career Development"] },
                        { week: 16, module: "Final Capstone", topics: ["Comprehensive Project", "Portfolio Presentation", "Industry Certification", "Career Launch"], projects: ["Capstone Project", "Portfolio", "Certification"] }
                      ],
                      diamond: [
                        { week: 1, module: "Master IoT Architecture", topics: ["Enterprise IoT", "Microservices", "Edge Computing", "Security Protocols"], projects: ["Enterprise System", "Microservice API", "Edge Computing"] },
                        { week: 2, module: "Advanced Robotics", topics: ["AI Integration", "Computer Vision", "Machine Learning", "Autonomous Systems"], projects: ["AI Robot", "Vision System", "ML Model"] },
                        { week: 3, module: "Leadership & Innovation", topics: ["Team Management", "Innovation Strategies", "Technology Trends", "Strategic Planning"], projects: ["Team Project", "Innovation Lab", "Strategy Plan"] },
                        { week: 4, module: "Master Projects", topics: ["Complex System Design", "Multi-platform Integration", "Performance Optimization", "Scalability"], projects: ["Complex System", "Multi-platform", "Optimization"] },
                        { week: 5, module: "Advanced Electronics", topics: ["Circuit Design", "PCB Layout", "Signal Processing", "Power Management"], projects: ["Custom PCB", "Signal Processor", "Power System"] },
                        { week: 6, module: "Wireless Communication", topics: ["WiFi, Bluetooth", "LoRa, Zigbee", "5G Integration", "Mesh Networks"], projects: ["Wireless Network", "Mesh System", "5G Project"] },
                        { week: 7, module: "Data Science & Analytics", topics: ["Data Visualization", "Statistical Analysis", "Predictive Modeling", "Big Data"], projects: ["Analytics Dashboard", "Predictive Model", "Big Data System"] },
                        { week: 8, module: "Cloud Computing", topics: ["AWS, Azure", "Microservices", "Containerization", "Serverless"], projects: ["Cloud Deployment", "Microservice App", "Serverless Function"] },
                        { week: 9, module: "Mobile App Development", topics: ["React Native", "Flutter", "IoT Mobile Apps", "Cross-platform"], projects: ["IoT Mobile App", "Cross-platform App", "Mobile Dashboard"] },
                        { week: 10, module: "Advanced AI & ML", topics: ["Deep Learning", "Neural Networks", "Computer Vision", "Natural Language Processing"], projects: ["AI Model", "Vision System", "NLP Project"] },
                        { week: 11, module: "Enterprise Solutions", topics: ["Cloud Architecture", "DevOps", "Scalability", "Performance Optimization"], projects: ["Cloud System", "DevOps Pipeline", "Scalable Architecture"] },
                        { week: 12, module: "IoT Security Mastery", topics: ["Advanced Security", "Penetration Testing", "Compliance", "Risk Management"], projects: ["Security Audit", "Penetration Test", "Compliance Report"] },
                        { week: 13, module: "Blockchain & IoT", topics: ["Blockchain Integration", "Smart Contracts", "Decentralized Systems", "Cryptocurrency"], projects: ["Blockchain IoT", "Smart Contract", "Decentralized App"] },
                        { week: 14, module: "Quantum Computing", topics: ["Quantum Algorithms", "Quantum IoT", "Quantum Security", "Future Technologies"], projects: ["Quantum Algorithm", "Quantum Security", "Future Tech"] },
                        { week: 15, module: "Industry 4.0 & 5.0", topics: ["Smart Manufacturing", "Digital Twins", "Cyber-Physical Systems", "Autonomous Systems"], projects: ["Smart Factory", "Digital Twin", "CPS System"] },
                        { week: 16, module: "Research & Development", topics: ["R&D Methodologies", "Patent Development", "Innovation Labs", "Technology Transfer"], projects: ["R&D Project", "Patent Application", "Innovation Lab"] },
                        { week: 17, module: "Advanced Internship", topics: ["Industry Leadership", "Mentoring Others", "Project Management", "Strategic Planning"], projects: ["Leadership Project", "Mentoring Program", "Strategic Plan"] },
                        { week: 18, module: "Certification & Assessment", topics: ["Professional Certification", "Industry Assessment", "Portfolio Review", "Expert Evaluation"], projects: ["Certification Prep", "Assessment", "Expert Review"] },
                        { week: 19, module: "Career Advancement", topics: ["Leadership Skills", "Industry Networking", "Consulting Preparation", "Entrepreneurship"], projects: ["Leadership Project", "Networking", "Business Plan"] },
                        { week: 20, module: "Global Technology Trends", topics: ["Emerging Technologies", "Market Analysis", "Technology Forecasting", "Global Standards"], projects: ["Trend Analysis", "Market Report", "Technology Forecast"] },
                        { week: 21, module: "Ethics & Sustainability", topics: ["AI Ethics", "Sustainable Technology", "Green IoT", "Social Impact"], projects: ["Ethics Framework", "Green Technology", "Social Impact"] },
                        { week: 22, module: "Advanced Capstone", topics: ["Comprehensive Project", "Industry Integration", "Real-world Application", "Innovation Showcase"], projects: ["Capstone Project", "Industry Integration", "Innovation Showcase"] },
                        { week: 23, module: "Master Portfolio", topics: ["Portfolio Development", "Professional Branding", "Industry Presentation", "Career Launch"], projects: ["Master Portfolio", "Professional Brand", "Industry Presentation"] },
                        { week: 24, module: "Future Leadership", topics: ["Technology Leadership", "Innovation Management", "Strategic Vision", "Industry Transformation"], projects: ["Leadership Project", "Innovation Management", "Strategic Vision"] }
                      ]
                    };
                    
                    const currentSyllabus = tierSyllabus[selectedTier] || tierSyllabus.silver;
                    
                    return currentSyllabus.map((week, index) => (
                      <div 
                        key={index} 
                      className={`bg-white/90 rounded-2xl p-3 sm:p-4 md:p-6 border transition-all duration-300 hover:shadow-lg cursor-pointer shadow-md w-72 sm:w-80 flex-shrink-0 ${
                        selectedTier === 'silver' ? 'border-gray-500 hover:border-gray-600 hover:shadow-gray-500/20' :
                        selectedTier === 'gold' ? 'border-yellow-500 hover:border-yellow-600 hover:shadow-yellow-500/20' :
                        selectedTier === 'diamond' ? 'border-purple-500 hover:border-purple-600 hover:shadow-purple-500/20' :
                        'border-gray-500 hover:border-gray-600 hover:shadow-gray-500/20'
                      } ${
                        activeWeek === index ? 
                          (selectedTier === 'silver' ? 'border-gray-600 shadow-lg shadow-gray-500/20' :
                           selectedTier === 'gold' ? 'border-yellow-600 shadow-lg shadow-yellow-500/20' :
                           selectedTier === 'diamond' ? 'border-purple-600 shadow-lg shadow-purple-500/20' :
                           'border-gray-600 shadow-lg shadow-gray-500/20') : ''
                        }`}
                        onClick={() => setActiveWeek(activeWeek === index ? null : index)}
                      >
                      {/* Week Header */}
                      <div className="text-center mb-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl text-white mb-3 transition-all duration-300 ${
                          selectedTier === 'silver' ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                          selectedTier === 'gold' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                          selectedTier === 'diamond' ? 'bg-gradient-to-r from-purple-500 to-purple-700' :
                          'bg-gradient-to-r from-gray-400 to-gray-600'
                        }`}>
                                {week.week}
                              </div>
                        <h4 className={`text-base sm:text-lg font-bold mb-2 transition-all duration-300 ${
                          selectedTier === 'silver' ? 'text-gray-500' :
                          selectedTier === 'gold' ? 'text-yellow-500' :
                          selectedTier === 'diamond' ? 'text-purple-500' :
                          'text-gray-500'
                        }`}>{week.module}</h4>
                        <div className="text-gray-600 text-xs sm:text-sm font-medium">Week {week.week}</div>
                          </div>
                          
                      {/* Topics Section - Hidden by default, shown on click */}
                      <div className={`transition-all duration-300 overflow-hidden ${
                        activeWeek === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="mb-4">
                          <h5 className={`font-bold mb-3 text-xs sm:text-sm border-b pb-2 transition-all duration-300 ${
                            selectedTier === 'silver' ? 'text-cyan-500 border-cyan-500/30' :
                            selectedTier === 'gold' ? 'text-emerald-500 border-emerald-500/30' :
                            selectedTier === 'diamond' ? 'text-purple-500 border-purple-500/30' :
                            'text-cyan-500 border-cyan-500/30'
                          }`}>Topics Covered:</h5>
                          <ul className="text-gray-800 text-xs sm:text-sm space-y-2">
                              {week.topics.map((topic, i) => (
                                <li key={i} className="flex items-start">
                                <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 transition-all duration-300 ${
                                  selectedTier === 'silver' ? 'bg-cyan-500' :
                                  selectedTier === 'gold' ? 'bg-emerald-500' :
                                  selectedTier === 'diamond' ? 'bg-purple-500' :
                                  'bg-cyan-500'
                                }`}></div>
                                <span className="leading-relaxed">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                        {/* Projects Section */}
                        <div>
                          <h5 className={`font-bold mb-3 text-xs sm:text-sm border-b pb-2 transition-all duration-300 ${
                            selectedTier === 'silver' ? 'text-gray-500 border-gray-500/30' :
                            selectedTier === 'gold' ? 'text-green-500 border-green-500/30' :
                            selectedTier === 'diamond' ? 'text-purple-500 border-purple-500/30' :
                            'text-gray-500 border-gray-500/30'
                          }`}>Projects:</h5>
                          <ul className="text-gray-800 text-xs sm:text-sm space-y-2">
                              {week.projects.map((project, i) => (
                                <li key={i} className="flex items-start">
                                <div className={`w-4 h-4 mt-1 mr-3 flex-shrink-0 transition-all duration-300 ${
                                  selectedTier === 'silver' ? 'text-gray-500' :
                                  selectedTier === 'gold' ? 'text-green-500' :
                                  selectedTier === 'diamond' ? 'text-purple-500' :
                                  'text-gray-500'
                                }`}>
                                  <Zap className="w-full h-full" />
                                </div>
                                <span className="leading-relaxed">{project}</span>
                                </li>
                              ))}
                            </ul>
                        </div>
                          </div>

                      {/* Expandable Content Indicator */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-xs sm:text-sm text-gray-500 font-medium">
                              {activeWeek === index ? 'Hide Details' : 'Click to View Details'}
                            </span>
                            <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${activeWeek === index ? 'rotate-180' : ''} ${
                              selectedTier === 'silver' ? 'text-blue-500' :
                              selectedTier === 'gold' ? 'text-green-500' :
                              selectedTier === 'diamond' ? 'text-orange-500' :
                              'text-blue-500'
                            }`} />
                          </div>
                          </div>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
                </div>
              </div>
            ) : isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-lg font-medium">Loading Syllabus...</p>
                </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center text-gray-500">
                      <Cpu className="w-16 h-16 mx-auto mb-4 text-[#7FB3D3]" />
                  <p className="text-lg font-medium">Choose a program from above to view the detailed curriculum</p>
                      <p className="text-sm text-gray-400 mt-2">Touch/Click on any program card to see the syllabus</p>
                    </div>
                  </div>
                )}
              </div>
          </div>
        </div>
        </div>
        
      </section>

      {/* Video Section */}
      <section className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/Untitled design (20).png"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-20"
            onLoad={() => console.log('Video section background image loaded successfully')}
            onError={(e) => console.error('Video section background image failed to load:', e)}
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About Master Class in IoT & Robotics
            </h4>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              See how our comprehensive IoT training programs transform beginners into skilled professionals
            </p>
          </div>
          
          <div className="w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-2xl">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  key={isVideoMuted ? 'muted' : 'unmuted'}
                  src={`https://player.vimeo.com/video/1115389578?title=0&byline=0&portrait=0&autoplay=1&loop=1&controls=0${isVideoMuted ? '&muted=1' : ''}`}
                  title="IoT Academy Introduction Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Mute/Unmute Button */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => setIsVideoMuted(!isVideoMuted)}
                    className="bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
                    title={isVideoMuted ? "Unmute Video" : "Mute Video"}
                  >
                    {isVideoMuted ? (
                      // Muted icon
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      </svg>
                    ) : (
                      // Unmuted icon
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Experience Our IoT Training
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover the hands-on approach that makes our IoT Academy the preferred choice for professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IoT & Robotics Masterclass Section */}
      <section id="projects" className="relative z-10 mt-8 sm:mt-12 md:mt-16 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("public/Screenshot 2025-09-02 at 2.44.21 PM.png")'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="mb-8 sm:mb-6 flex justify-center pt-4 sm:pt-2">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white text-sm font-semibold rounded-full shadow-lg">
                <Zap className="w-3 h-3 mr-1.5" />
                Industry-Leading Featured Projects
              </div>
            </div>
            
            <h4 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-12 sm:mb-16 text-white">
              IoT & Robotics Projects
            </h4>
             
             
             <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform from beginner to expert with our comprehensive training program. 
              Master IoT fundamentals, then advance to cutting-edge robotics applications in agriculture and medical fields.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>19 weeks total</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Live mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Industry certification</span>
              </div>
            </div>
          </div>

          {/* Core Modules */}
          <div className="mb-24 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 sm:mb-16 text-center">Our Core Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {masterclassModules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <div
                    key={module.id}
                    className={`group relative bg-white/90 backdrop-blur-sm border border-[#7FB3D3] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 transition-all duration-500 cursor-pointer`}
                    onMouseEnter={() => setHoveredProject(module.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3]">
                          <IconComponent 
                            className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white ${hoveredProject === module.id ? 'scale-110' : ''} transition-transform duration-300`} 
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              module.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                              module.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {module.level}
                            </span>
                            <span className="text-gray-500 text-xs sm:text-sm">{module.duration}</span>
                          </div>
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#4A90E2] transition-colors duration-300">
                            {module.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Subtitle */}
                    <h5 className="text-sm sm:text-base md:text-lg font-medium text-[#4A90E2] mb-3 sm:mb-4">
                      {module.subtitle}
                    </h5>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {module.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{module.projects} Projects</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                        <span>4.9/5 Rating</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {module.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-[#4A90E2] hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Advanced Specializations */}
          <div className="mb-24 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Advanced Specializations Areas</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
              After completing core training and projects, experience our advanced and specialised IoT, Robotics and AI-based applications in high-impact industries
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {advancedSpecializations.map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <div
                    key={spec.id}
                    className="group relative bg-white/90 backdrop-blur-sm border border-[#7FB3D3] rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{spec.title}</h4>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{spec.description}</p>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-xs text-gray-500 font-medium">Key Projects:</p>
                      {spec.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-[#4A90E2] rounded-full" />
                          <span>{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Training Progression */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#4A90E2]/10 to-[#7FB3D3]/10 backdrop-blur-sm border border-[#4A90E2]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Your Learning Journey</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-white font-bold text-base sm:text-lg md:text-xl">1</span>
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Foundation</h4>
                  <p className="text-gray-200 text-xs sm:text-sm">Master IoT basics and sensor integration</p>
                </div>
                
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-white font-bold text-base sm:text-lg md:text-xl">2</span>
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Advanced Systems</h4>
                  <p className="text-gray-200 text-xs sm:text-sm">Build complex autonomous systems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-white font-bold text-base sm:text-lg md:text-xl">3</span>
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Specialization</h4>
                  <p className="text-gray-200 text-xs sm:text-sm">Focus on agriculture, medical, or drone tech</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm border border-orange-300 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 shadow-lg">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  Advanced Training Unlocks
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  Upon completion of core modules, trainers gain access to specialized robotics workshops including 
                  <span className="text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded"> drone manufacturing</span>, 
                  <span className="text-green-600 font-semibold bg-green-50 px-2 py-1 rounded"> agricultural automation systems</span>, and 
                  <span className="text-pink-600 font-semibold bg-pink-50 px-2 py-1 rounded"> medical robotics development</span>. 
                  Build real-world solutions that make a difference.
                </p>
              </div>

              <button 
                onClick={() => {
                  setCtaFormData({
                    name: '',
                    phone: '',
                    email: '',
                    location: '',
                    course: 'Masterclass',
                    message: ''
                  });
                  setShowCtaForm(true);
                }}
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4A90E2]/25 text-sm sm:text-base"
              >
                Enroll in Masterclass
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IoT & Robotics Master Training Section */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4A90E2] via-[#7FB3D3] to-[#E8F4FD]">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              IoT & Robotics Master Internship
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Dive into the future with our comprehensive internships. Learn to build and program intelligent devices, from connected sensors to autonomous robots. Get hands-on with real-world Industry 5.0 projects and become an expert in the most in-demand fields.

            </p>
            <div className="flex justify-center">
              <button 
                onClick={openCtaForm}
                className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full shadow-lg hover:from-[#7FB3D3] hover:to-[#4A90E2] transition-all duration-300 hover:scale-105 transform"
              >
                Get Started Now
              </button>
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-4xl mb-4 text-[#4A90E2]">
                  <Wrench className="h-12 w-12" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Hands-on Projects</h4>
                <p className="text-gray-700">Build and program real robots and smart devices to create a strong project portfolio.</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-4xl mb-4 text-[#4A90E2]">
                  <Zap className="h-12 w-12" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Expert-led Modules</h4>
                <p className="text-gray-700">Learn from industry professionals with real-world experience in robotics and IoT.</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-4xl mb-4 text-[#4A90E2]">
                  <Award className="h-12 w-12" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Official Certificate</h4>
                <p className="text-gray-700">Receive a certificate upon completion to validate your skills and boost your resume.</p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-4xl mb-4 text-[#4A90E2]">
                  <Users className="h-12 w-12" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Career Guidance</h4>
                <p className="text-gray-700">Get personalized advice to navigate the job market and start your career in robotics.</p>
              </div>
            </div>
          </div>

          {/* Who Should Apply Section */}
          <div className="mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
              Who Should Apply?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-center max-w-5xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300">
                <p className="text-lg sm:text-xl font-semibold text-[#4A90E2]">Aspiring engineers and tech enthusiasts</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300">
                <p className="text-lg sm:text-xl font-semibold text-[#4A90E2]">Students and professionals specializing in robotics and IoT</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300">
                <p className="text-lg sm:text-xl font-semibold text-[#4A90E2]">Anyone passionate about building and innovating with technology</p>
              </div>
            </div>
          </div>

          {/* Featured Projects Gallery */}
          <div className="mb-24 sm:mb-32">
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
              Featured Projects Gallery
            </h3>
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden">
                <div className="flex gap-4 sm:gap-6 animate-scroll">
                  {/* First set of images */}
                {/* Project 1 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/1.jpeg" 
                    alt="IoT Project 1" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Smart IoT Solution</p>
                  </div>
                </div>
                
                {/* Project 2 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/2.jpeg" 
                    alt="IoT Project 2" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Automation System</p>
                  </div>
                </div>
                
                {/* Project 3 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/3.jpeg" 
                    alt="IoT Project 3" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Monitoring Device</p>
                  </div>
                </div>
                
                {/* Project 4 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/4.jpeg" 
                    alt="IoT Project 4" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Robotics Project</p>
                  </div>
                </div>
                
                {/* Project 6 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/6.jpeg" 
                    alt="IoT Project 6" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Smart Technology</p>
                  </div>
                </div>
                
                {/* Project 8 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/8.jpeg" 
                    alt="IoT Project 8" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">IoT Innovation</p>
                  </div>
                </div>
                
                {/* Project 9 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/9.jpeg" 
                    alt="IoT Project 9" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Connected Device</p>
                  </div>
                </div>
                
                {/* Project 10 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/10.jpeg" 
                    alt="IoT Project 10" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Smart Sensor</p>
                  </div>
                </div>
                
                {/* Project 11 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/11.jpeg" 
                    alt="IoT Project 11" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Data Analytics</p>
                  </div>
                </div>
                
                {/* Project 12 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/12.jpeg" 
                    alt="IoT Project 12" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Wireless Control</p>
                  </div>
                </div>
                
                {/* Project 13 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/13.jpeg" 
                    alt="IoT Project 13" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Embedded System</p>
                  </div>
                </div>
                
                {/* Project 14 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/14.jpeg" 
                    alt="IoT Project 14" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Network Protocol</p>
                  </div>
                </div>
                
                {/* Project 15 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/15.jpeg" 
                    alt="IoT Project 15" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Cloud Integration</p>
                  </div>
                </div>
                
                {/* Project 16 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/16.jpeg" 
                    alt="IoT Project 16" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Mobile App</p>
                  </div>
                </div>
                
                {/* Project 17 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/17.jpeg" 
                    alt="IoT Project 17" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Security System</p>
                  </div>
                </div>
                
                {/* Project 18 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/18.jpeg" 
                    alt="IoT Project 18" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Machine Learning</p>
                  </div>
                </div>
                
                {/* Project 19 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/19.jpeg" 
                    alt="IoT Project 19" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">AI Integration</p>
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                {/* Project 1 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/1.jpeg" 
                    alt="IoT Project 1" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Smart IoT Solution</p>
                  </div>
                </div>
                
                {/* Project 2 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/2.jpeg" 
                    alt="IoT Project 2" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Automation System</p>
                  </div>
                </div>
                
                {/* Project 3 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/3.jpeg" 
                    alt="IoT Project 3" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Monitoring Device</p>
                  </div>
                </div>
                
                {/* Project 4 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/4.jpeg" 
                    alt="IoT Project 4" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Robotics Project</p>
                  </div>
                </div>
                
                {/* Project 6 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/6.jpeg" 
                    alt="IoT Project 6" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Smart Technology</p>
                  </div>
                </div>
                
                {/* Project 8 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/8.jpeg" 
                    alt="IoT Project 8" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">IoT Innovation</p>
                  </div>
                </div>
                
                {/* Project 9 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/9.jpeg" 
                    alt="IoT Project 9" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Connected Device</p>
                  </div>
                </div>
                
                {/* Project 10 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/10.jpeg" 
                    alt="IoT Project 10" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Smart Sensor</p>
                  </div>
                </div>
                
                {/* Project 11 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/11.jpeg" 
                    alt="IoT Project 11" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Data Analytics</p>
                  </div>
                </div>
                
                {/* Project 12 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/12.jpeg" 
                    alt="IoT Project 12" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Wireless Control</p>
                  </div>
                </div>
                
                {/* Project 13 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/13.jpeg" 
                    alt="IoT Project 13" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Embedded System</p>
                  </div>
                </div>
                
                {/* Project 14 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/14.jpeg" 
                    alt="IoT Project 14" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Network Protocol</p>
                  </div>
                </div>
                
                {/* Project 15 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/15.jpeg" 
                    alt="IoT Project 15" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Cloud Integration</p>
                  </div>
                </div>
                
                {/* Project 16 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/16.jpeg" 
                    alt="IoT Project 16" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Mobile App</p>
                  </div>
                </div>
                
                {/* Project 17 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/17.jpeg" 
                    alt="IoT Project 17" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Security System</p>
                  </div>
                </div>
                
                {/* Project 18 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/18.jpeg" 
                    alt="IoT Project 18" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Machine Learning</p>
                  </div>
                </div>
                
                {/* Project 19 */}
                <div className="relative group flex-shrink-0 w-64 sm:w-72">
                  <img 
                    src="/19.jpeg" 
                    alt="IoT Project 19" 
                    className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">AI Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <button 
              onClick={openCtaForm}
              className="px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full shadow-lg hover:from-[#7FB3D3] hover:to-[#4A90E2] transition-all duration-300 hover:scale-105 transform"
            >
              Start Your Career Journey Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section id="prerequisites" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="max-w-6xl mx-auto">
        <h4 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-8 sm:mb-12 text-blue-900">
            Prerequisites & Requirements
          </h4>

          <div className="relative overflow-hidden mb-12 sm:mb-16">
            <div className="flex animate-scroll-left space-x-6">
              {/* First set of prerequisites */}
            {prerequisites.map((req, index) => (
                <div key={`first-${index}`} className="individual-card-move flex-shrink-0 w-80 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center flex-shrink-0">
                    <req.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{req.title}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                      req.level === 'Required' ? 'bg-red-500/20 text-red-600' :
                      req.level === 'Must-Have' ? 'bg-orange-500/20 text-orange-600' :
                      'bg-green-500/20 text-green-600'
                    }`}>
                      {req.level}
                    </div>
                    <p className="text-gray-800 text-xs sm:text-sm font-medium">{req.description}</p>
                    
                    {/* Add video for Basic Programming Knowledge */}
                    {req.title === 'Basic Programming Knowledge' && (
                      <div className="mt-4">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                          <video
                            className="w-full h-full object-cover"
                            preload="auto"
                            poster="https://cdn.pixabay.com/video/2019/10/09/27706-365890968_tiny.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src="https://cdn.pixabay.com/video/2019/10/09/27706-365890968_tiny.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                  </div>
                        <p className="text-xs text-gray-600 text-center mt-2">IoT Fundamentals - Basic Programming</p>
                      </div>
                    )}
                    
                    {/* Add video for Basic Electronics Knowledge */}
                    {req.title === 'Basic Electronics Knowledge' && (
                      <div className="mt-4">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                          <video
                            className="w-full h-full object-cover"
                            preload="auto"
                            poster="https://cdn.pixabay.com/video/2020/08/14/47215-450995786_large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src="https://cdn.pixabay.com/video/2020/08/14/47215-450995786_large.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <p className="text-xs text-gray-600 text-center mt-2">Advanced IoT - Electronics Fundamentals</p>
                      </div>
                    )}
                    
                    {/* Add video for Basic Computer Literacy */}
                    {req.title === 'Basic Computer Literacy' && (
                      <div className="mt-4">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                          <video
                            className="w-full h-full object-cover"
                            preload="auto"
                            poster="https://cdn.pixabay.com/video/2017/07/23/10822-226624975_large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src="https://cdn.pixabay.com/video/2017/07/23/10822-226624975_large.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <p className="text-xs text-gray-600 text-center mt-2">IoT Projects - Computer Skills</p>
                      </div>
                    )}
                    
                    {/* Add video for Internet & Mobile Apps */}
                    {req.title === 'Internet & Mobile Apps' && (
                      <div className="mt-4">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                          <video
                            className="w-full h-full object-cover"
                            preload="auto"
                            poster="https://cdn.pixabay.com/video/2018/03/09/14900-259623335_large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src="https://cdn.pixabay.com/video/2018/03/09/14900-259623335_large.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <p className="text-xs text-gray-600 text-center mt-2">IoT Applications - Mobile & Web</p>
                      </div>
                    )}
                    </div>
                </div>
              </div>
            ))}
              
              {/* Duplicate set for seamless loop */}
              {prerequisites.map((req, index) => (
                <div key={`second-${index}`} className="individual-card-move flex-shrink-0 w-80 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center flex-shrink-0">
                      <req.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{req.title}</h3>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                        req.level === 'Required' ? 'bg-red-500/20 text-red-600' :
                        req.level === 'Must-Have' ? 'bg-orange-500/20 text-orange-600' :
                        'bg-green-500/20 text-green-600'
                      }`}>
                        {req.level}
                      </div>
                      <p className="text-gray-800 text-xs sm:text-sm font-medium">{req.description}</p>
                      
                      {/* Add video for Basic Programming Knowledge */}
                      {req.title === 'Basic Programming Knowledge' && (
                        <div className="mt-4">
                          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                            <video
                              className="w-full h-full object-cover"
                              preload="auto"
                              poster="https://cdn.pixabay.com/video/2019/10/09/27706-365890968_tiny.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src="https://cdn.pixabay.com/video/2019/10/09/27706-365890968_tiny.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <p className="text-xs text-gray-600 text-center mt-2">IoT Fundamentals - Basic Programming</p>
                        </div>
                      )}
                      
                      {/* Add video for Basic Electronics Knowledge */}
                      {req.title === 'Basic Electronics Knowledge' && (
                        <div className="mt-4">
                          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                            <video
                              className="w-full h-full object-cover"
                              preload="auto"
                              poster="https://cdn.pixabay.com/video/2017/07/23/10822-226624975_large.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src="https://cdn.pixabay.com/video/2017/07/23/10822-226624975_large.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <p className="text-xs text-gray-600 text-center mt-2">IoT Projects - Electronics Basics</p>
                        </div>
                      )}
                      
                      {/* Add video for Basic Computer Literacy */}
                      {req.title === 'Basic Computer Literacy' && (
                        <div className="mt-4">
                          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                            <video
                              className="w-full h-full object-cover"
                              preload="auto"
                              poster="https://cdn.pixabay.com/video/2017/07/23/10822-226624975_large.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src="https://cdn.pixabay.com/video/2017/07/23/10822-226624975_large.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <p className="text-xs text-gray-600 text-center mt-2">IoT Projects - Computer Skills</p>
                        </div>
                      )}
                      
                      {/* Add video for Internet & Mobile Apps */}
                      {req.title === 'Internet & Mobile Apps' && (
                        <div className="mt-4">
                          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                            <video
                              className="w-full h-full object-cover"
                              preload="auto"
                              poster="https://cdn.pixabay.com/video/2018/03/09/14900-259623335_large.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src="https://cdn.pixabay.com/video/2018/03/09/14900-259623335_large.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <p className="text-xs text-gray-600 text-center mt-2">IoT Applications - Mobile & Web</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Offer Section */}
          <h4 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-8 sm:mb-12 text-blue-900">
            What We Offer
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Hands-On IoT Training Programs */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#4A90E2]/20 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                  <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">Hands-On IoT Training Programs</h4>
                </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-300">
                Learn by doing, not just by listening. Our workshops and courses immerse you in real-world IoT projects-covering sensors, embedded systems, connectivity, and cloud integration.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
          </div>

            {/* Industry-Relevant Curriculum */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#4A90E2]/20 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">Industry-Relevant Curriculum</h4>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-300">
                We focus on practical skills that matter today. From device communication protocols to data security and edge computing, our curriculum is designed to keep you ahead in a connected world.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>

            {/* Customized Learning for Teams & Individuals */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#4A90E2]/20 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">Customized Learning for Teams & Individuals</h4>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-300">
                Whether you're a student, startup team, or enterprise workforce, our training adapts to your needs. We offer tailored modules to fit different learning goals and business objectives.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* ITC India Testing Laboratory Section */}
          <div className="mt-16 sm:mt-20 relative overflow-hidden rounded-3xl"
               style={{
                 background: 'url("/black-head-background.png"), linear-gradient(135deg, #3b82f6, #1d4ed8)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 minHeight: '600px'
               }}>
            
            <div className="relative z-10 p-4 sm:p-8 lg:p-12">
              
              <h4 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-8 sm:mb-12 text-white leading-tight">
                About ITC India - Premier Testing & Calibration Laboratory
              </h4>
            
            {/* Header Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#7FB3D3] shadow-lg mb-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-[#4A90E2] mr-3 animate-pulse" />
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 cursor-default border border-gray-200">
                    NABL Accredited • BIS Approved
                  </span>
                </div>
                
                <h4 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 hover:text-[#4A90E2] transition-colors duration-300">
                  Your Trusted Partner for 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3]"> Quality Assurance</span>
                </h4>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed hover:text-gray-800 transition-colors duration-300 max-w-4xl mx-auto">
                  Based in Mohali, Punjab, we're a premier testing and calibration laboratory 
                  delivering end-to-end solutions for electrical, electronic, photometric, and 
                  solar equipment. Internationally recognized and locally trusted.
                </p>

                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white p-4 rounded-lg text-center hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <Award className="w-6 h-6 mx-auto mb-2 group-hover:animate-bounce" />
                    <div className="text-sm font-semibold">ISO/IEC 17025</div>
                    <div className="text-xs opacity-90">Certified</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg text-center hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <Globe className="w-6 h-6 mx-auto mb-2 group-hover:animate-spin" />
                    <div className="text-sm font-semibold">European</div>
                    <div className="text-xs opacity-90">Recognized</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white rounded-full shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-lg">What We Do</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-center mb-8 text-lg">
                Comprehensive testing and calibration services across multiple domains
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 cursor-pointer border border-[#7FB3D3]">
                  <div className="relative">
                    <Zap className="w-10 h-10 text-yellow-600 mb-4 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping group-hover:animate-bounce"></div>
                  </div>
                  <h5 className="text-lg font-bold text-gray-800 mb-2">Electrical Safety</h5>
                  <p className="text-gray-600 text-sm">IEC 60335, IEC 60601, IS 13252 compliance testing</p>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 cursor-pointer border border-[#7FB3D3]">
                  <div className="relative">
                    <Eye className="w-10 h-10 text-indigo-600 mb-4 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 rounded-full animate-ping group-hover:animate-bounce"></div>
                  </div>
                  <h5 className="text-lg font-bold text-gray-800 mb-2">Photometric</h5>
                  <p className="text-gray-600 text-sm">LM-79 LED testing with goniophotometer analysis</p>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 cursor-pointer border border-[#7FB3D3]">
                  <div className="relative">
                    <Sun className="w-10 h-10 text-orange-600 mb-4 group-hover:scale-125 group-hover:animate-spin transition-all duration-300" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping group-hover:animate-bounce"></div>
                  </div>
                  <h5 className="text-lg font-bold text-gray-800 mb-2">Solar Testing</h5>
                  <p className="text-gray-600 text-sm">PV modules, inverters, and UV disinfection systems</p>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 cursor-pointer border border-[#7FB3D3]">
                  <div className="relative">
                    <Battery className="w-10 h-10 text-green-600 mb-4 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping group-hover:animate-bounce"></div>
                  </div>
                  <h5 className="text-lg font-bold text-gray-800 mb-2">Battery Testing</h5>
                  <p className="text-gray-600 text-sm">UN 38.3, IS 16046, IEC 62133 compliance</p>
                </div>
              </div>
            </div>

            {/* Calibration Services */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400"></div>
                
                <div className="text-center mb-8 relative z-10">
                  {/* NABL Badge */}
                  <div className="flex justify-center mb-6">
                    <img 
                      src="https://nablwp.qci.org.in/assets/2.5X3.5.png" 
                      alt="NABL Accredited Badge" 
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
                        onError={(e) => { e.target.src = 'https://placehold.co/96x96/7FB3D3/ffffff?text=NABL' }}
                    />
                  </div>
                  
                  <div className="relative inline-block">
                    <Microscope className="w-16 h-16 mx-auto mb-4 text-indigo-200 group-hover:animate-bounce transition-all duration-300" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                    <Star className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-spin" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">NABL-Accredited Calibration</h4>
                  <p className="text-xl text-indigo-100 group-hover:text-white transition-colors duration-300">Precision calibration services traceable to international standards</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group/card">
                      <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-300 group-hover/card:animate-bounce" />
                      <h5 className="font-bold mb-2">Electrical</h5>
                      <p className="text-sm text-indigo-100">Multimeters, oscilloscopes, power analyzers</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group/card">
                      <Sun className="w-8 h-8 mx-auto mb-3 text-orange-300 group-hover/card:animate-spin" />
                      <h5 className="font-bold mb-2">Thermal</h5>
                      <p className="text-sm text-indigo-100">Temperature sensors, thermometers, calibrators</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group/card">
                      <Eye className="w-8 h-8 mx-auto mb-3 text-purple-300 group-hover/card:animate-pulse" />
                      <h5 className="font-bold mb-2">Photometric</h5>
                      <p className="text-sm text-indigo-100">Pyranometers, UV sources, standard lamps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="text-center">
              <div className="flex justify-center mb-8 sm:mb-12">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white rounded-full shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl sm:text-2xl">Why Choose Us</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transition-all duration-500 cursor-pointer group border border-[#7FB3D3]">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce relative">
                    <Shield className="w-8 h-8 text-[#4A90E2] group-hover:animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#4A90E2] rounded-full animate-ping group-hover:animate-bounce"></div>
                  </div>
                  <h5 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">Trusted Expertise</h5>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">NABL accredited with BIS approval and European recognition</p>
                </div>
                
                  <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transition-all duration-500 cursor-pointer group border border-[#7FB3D3]">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce relative">
                    <Microscope className="w-8 h-8 text-green-600 group-hover:animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping group-hover:animate-bounce"></div>
                  </div>
                  <h5 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">Advanced Facilities</h5>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">State-of-the-art laboratories with cutting-edge equipment</p>
                </div>
                
                  <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transition-all duration-500 cursor-pointer group border border-[#7FB3D3]">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce relative">
                    <Award className="w-8 h-8 text-purple-600 group-hover:animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 rounded-full animate-ping group-hover:animate-bounce"></div>
                  </div>
                  <h5 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">Complete Solutions</h5>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">End-to-end support from testing to market compliance</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Meet Our Experts Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8" 
               style={{
                 backgroundImage: 'url(/world-map-background.jpg)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 sm:mb-8 md:mb-12 bg-gradient-to-r from-[#1A365D] to-[#4A90E2] bg-clip-text text-transparent">
              Meet Our Experts
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry veterans and academic leaders who bring decades of experience in IoT and Robotics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Expert 1 */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105">
                {/* Content */}
                <div className="relative z-10 p-8 sm:p-10">
                  <div className="flex flex-col items-center text-center">
                    {/* Expert Photo Placeholder */}
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] flex items-center justify-center mb-6 shadow-lg">
                      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white flex items-center justify-center">
                        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#1A365D] to-[#4A90E2] bg-clip-text text-transparent">
                          DR
                        </span>
                      </div>
                    </div>
                    
                    {/* Expert Info */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Dr. Rajesh Kumar
                    </h3>
                    <p className="text-lg font-semibold text-[#4A90E2] mb-4">
                      Chief Technology Officer & IoT Specialist
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      With over 15 years of experience in IoT architecture and embedded systems, Dr. Kumar has led numerous smart city projects across India. He holds a Ph.D. in Electronics Engineering and has published 50+ research papers in international journals.
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white text-xs font-semibold rounded-full">
                        IoT Architecture
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white text-xs font-semibold rounded-full">
                        Embedded Systems
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white text-xs font-semibold rounded-full">
                        Smart Cities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert 2 */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105">
                {/* Content */}
                <div className="relative z-10 p-8 sm:p-10">
                  <div className="flex flex-col items-center text-center">
                    {/* Expert Photo Placeholder */}
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] flex items-center justify-center mb-6 shadow-lg">
                      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white flex items-center justify-center">
                        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#1A365D] to-[#4A90E2] bg-clip-text text-transparent">
                          AS
                        </span>
                      </div>
                    </div>
                    
                    {/* Expert Info */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Prof. Anjali Sharma
                    </h3>
                    <p className="text-lg font-semibold text-[#4A90E2] mb-4">
                      Robotics Research Director & AI Expert
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      A pioneer in robotics and artificial intelligence with 12+ years of research experience. Prof. Sharma has developed cutting-edge robotic systems for healthcare and manufacturing industries. She holds multiple patents and has mentored 200+ students in robotics.
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white text-xs font-semibold rounded-full">
                        Robotics
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white text-xs font-semibold rounded-full">
                        AI/ML
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white text-xs font-semibold rounded-full">
                        Healthcare Tech
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 sm:mb-8 md:mb-12 text-blue-900">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our IoT training and project support have transformed businesses across India
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-6 py-4">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-80 sm:w-96 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transition-all duration-500 cursor-pointer group border border-[#7FB3D3] p-4 sm:p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Quote className="h-8 w-8 text-blue-500 transform rotate-180" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star 
                            key={starIndex} 
                            className="h-4 w-4 text-yellow-400 fill-current" 
                          />
                        ))}
                      </div>
                                              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {testimonial.text}
                      </p>
                      <div className="border-t border-gray-100 pt-4">
                        <p className="font-semibold text-gray-800 group-hover:text-[#4A90E2] transition-colors duration-300 text-sm sm:text-base">{testimonial.author}</p>
                        <p className="text-blue-600 text-xs sm:text-sm font-semibold">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
              </div>
            ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-80 sm:w-96 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transition-all duration-500 cursor-pointer group border border-[#7FB3D3] p-4 sm:p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Quote className="h-8 w-8 text-blue-500 transform rotate-180" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star 
                            key={starIndex} 
                            className="h-4 w-4 text-yellow-400 fill-current" 
                          />
                        ))}
                      </div>
                                              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {testimonial.text}
                      </p>
                      <div className="border-t border-gray-100 pt-4">
                        <p className="font-semibold text-gray-800 group-hover:text-[#4A90E2] transition-colors duration-300 text-sm sm:text-base">{testimonial.author}</p>
                        <p className="text-blue-600 text-xs sm:text-sm font-semibold">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 sm:mb-8 md:mb-12 text-blue-900">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our IoT and Robotics training programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - First 4 FAQs */}
            <div className="space-y-4">
              {faqData.slice(0, 4).map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group border border-[#7FB3D3] overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 p-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg text-[#4A90E2]">
                        {faq.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-[#4A90E2] transition-colors duration-300 pr-4">
                        {faq.question}
          </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 transition-transform duration-200" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(index) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pl-14">
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                  </div>
                </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Last 4 FAQs */}
            <div className="space-y-4">
              {faqData.slice(4, 8).map((faq, index) => (
                <div
                  key={index + 4}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group border border-[#7FB3D3] overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index + 4)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 p-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg text-[#4A90E2]">
                        {faq.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-[#4A90E2] transition-colors duration-300 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {openItems.includes(index + 4) ? (
                        <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 transition-transform duration-200" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(index + 4) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pl-14">
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Still have questions?</h3>
              <p className="text-blue-100 mb-6 text-sm sm:text-base">
                Our experts are here to help you choose the right training path for your career goals.
              </p>
              <button className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 transform hover:scale-105 text-sm sm:text-base">
                Contact Our Training Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-0">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0">
            {[
              { number: '500+', label: 'Students Trained', icon: Users },
              { number: '50+', label: 'Projects Built', icon: Wrench },
              { number: '95%', label: 'Success Rate', icon: Award },
              { number: '24/7', label: 'Support', icon: Clock },
              { number: '100%', label: 'Placement Assistant', icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-800 text-sm sm:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 sm:mb-6 md:mb-8 text-blue-900">
            Ready to Start Your IoT Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of students who have transformed their careers with our hands-on IoT and Electronics training programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button 
              onClick={openCtaForm}
              className="bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-bold py-2 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#4A90E2]/25"
            >
              Enroll Now
            </button>
            <button 
              onClick={() => {
                // Download the existing PDF file
                const link = document.createElement('a');
                link.href = '/Who We Are.pdf';
                link.download = 'Who We Are.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white font-bold py-2 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Top Border with Animation */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A90E2] via-[#7FB3D3] to-[#4A90E2] animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative group">
                  {/* Enhanced glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse scale-125"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse scale-110"></div>
                  
                  {/* Logo container with backdrop */}
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
                  <img 
                    src="/l5.png" 
                    alt="IoT Academy Logo" 
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain relative z-10"
                  />
                </div>
                  
                  {/* Enhanced animated indicator */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] bg-clip-text text-transparent">
                    Master Class in IoT & Robotics
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 italic">from ITC (India)Pvt Ltd.</p>
              </div>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Premier IoT and Robotics Testing, Certification, Training and Student-Internship hub. Offering ISO/IEC standard testing and certification, industry collaboration for product development, innovative IoT manufacturing, and flexible training programs (2-6 months) for students with placement assistance. Empowering professionals and students through practical learning and career transformation in cutting-edge technologies.
              </p>
              
              {/* Enhanced Social Media Icons */}
              <div className="flex flex-wrap gap-4">
                <a href="https://instagram.com/itcindia" className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#E4405F] transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-white/20 shadow-lg hover:shadow-xl">
                  <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a href="https://linkedin.com/company/itcindia" className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#0077B5] transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-white/20 shadow-lg hover:shadow-xl">
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a href="https://facebook.com/itcindia" className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#1877F2] transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-white/20 shadow-lg hover:shadow-xl">
                  <Facebook className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a href="https://youtube.com/@itcindia" className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#FF0000] transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-white/20 shadow-lg hover:shadow-xl">
                  <Youtube className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-8 text-xl relative group">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full group-hover:w-16 transition-all duration-300"></div>
              </h4>
              <ul className="space-y-4">
                <li><a href="#programs" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-white/5">
                  <ChevronRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium text-sm">Programs</span>
                </a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-white/5">
                  <ChevronRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium text-sm">Projects</span>
                </a></li>
                <li><a href="#syllabus" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-white/5">
                  <ChevronRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium text-sm">Syllabus</span>
                </a></li>
                <li><a href="#prerequisites" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-white/5">
                  <ChevronRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium text-sm">Prerequisites</span>
                </a></li>
                <li><button className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-white/5 w-full text-left">
                  <ChevronRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium text-sm">Contact</span>
                </button></li>
              </ul>
            </div>
            
                                    {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-8 text-xl relative group">
                Contact Info
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full group-hover:w-16 transition-all duration-300"></div>
              </h4>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
            <div>
                    <p className="text-gray-300 text-sm font-semibold">Email</p>
                    <a href="mailto:info@itcindia.org" className="text-white hover:text-[#4A90E2] transition-colors text-sm font-bold">info@itcindia.org</a>
                  </div>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-semibold">Phone</p>
                    <a href="tel:09316473033" className="text-white hover:text-[#4A90E2] transition-colors text-sm font-bold">09316473033</a>
                  </div>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-semibold">Address</p>
                    <p className="text-white text-sm font-bold leading-relaxed">Plot No. 146, JLPL Industrial Area, Sector 82, Mohali, Punjab, 160062</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Enhanced Bottom Section */}
          <div className="border-t border-gray-700 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm font-semibold mb-4">
                  Copyright © 2015 - 2025 ITC India.org All Rights Reserved.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse"></span>
                    <span className="text-gray-500 text-xs font-medium">NABL Accredited</span>
              </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#7FB3D3] rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></span>
                    <span className="text-gray-500 text-xs font-medium">BIS Approved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></span>
                    <span className="text-gray-500 text-xs font-medium">ISO Certified</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 text-sm">
                <a href="https://www.itcindia.org/privacy-policy/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform font-medium">Privacy Policy</a>
                <a href="https://www.itcindia.org/services/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform font-medium">Terms of Service</a>
                <a href="https://www.itcindia.org/terms-conditions/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform font-medium">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enrollment Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Enroll in {selectedProgramForForm === '2-month' ? 'Silver' : selectedProgramForForm === '4-month' ? 'Gold' : 'Diamond'} - Offline Form</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your city/state"
                />
              </div>

              {/* Course Plan Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Plan *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Course Plan</option>
                  <option value="silver-8-weeks">Silver (8 weeks)</option>
                  <option value="gold-16-weeks">Gold (16 weeks)</option>
                  <option value="diamond-24-weeks">Diamond (24 weeks)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Any additional information or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Submit Enrollment Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Online Enrollment Form Modal */}
      {showOnlineForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Enroll in {selectedProgramForOnlineForm === '2-month' ? 'Silver' : selectedProgramForOnlineForm === '4-month' ? 'Gold' : 'Diamond'} - Online Form</h3>
              <button 
                onClick={() => setShowOnlineForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleOnlineFormSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={onlineFormData.name}
                  onChange={handleOnlineInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={onlineFormData.phone}
                  onChange={handleOnlineInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={onlineFormData.email}
                  onChange={handleOnlineInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={onlineFormData.location}
                  onChange={handleOnlineInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your city/state"
                />
              </div>

              {/* Course Plan Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Plan *</label>
                <select
                  name="course"
                  value={onlineFormData.course}
                  onChange={handleOnlineInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Course Plan</option>
                  <option value="silver-8-weeks">Silver (8 weeks)</option>
                  <option value="gold-16-weeks">Gold (16 weeks)</option>
                  <option value="diamond-24-weeks">Diamond (24 weeks)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={onlineFormData.message}
                  onChange={handleOnlineInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Any additional information or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Submit Online Enrollment Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CTA Enrollment Form Modal */}
      {showCtaForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Enroll in IoT Training</h3>
              <button 
                onClick={() => setShowCtaForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Learning Mode Switch inside form */}
            <div className="mb-6">
              <div className="bg-gray-50 rounded-xl p-2 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-1">
                  {/* Offline Mode */}
                  <button
                    onClick={() => setCtaLearningMode('offline')}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${
                      ctaLearningMode === 'offline'
                        ? 'bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] text-white shadow-md shadow-[#4A90E2]/25'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="w-4 h-4">
                      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Offline</span>
                  </button>

                  {/* Online Mode */}
                  <button
                    onClick={() => setCtaLearningMode('online')}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${
                      ctaLearningMode === 'online'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md shadow-green-500/25'
                        : 'bg-white text-green-600 hover:bg-green-100'
                    }`}
                  >
                    <div className="w-4 h-4">
                      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <span>Online</span>
                  </button>
                </div>
              </div>
            </div>

            <form onSubmit={handleCtaFormSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={ctaFormData.name}
                  onChange={handleCtaInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    ctaLearningMode === 'offline' ? 'focus:ring-[#4A90E2]' : 'focus:ring-green-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={ctaFormData.phone}
                  onChange={handleCtaInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    ctaLearningMode === 'offline' ? 'focus:ring-[#4A90E2]' : 'focus:ring-green-500'
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={ctaFormData.email}
                  onChange={handleCtaInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    ctaLearningMode === 'offline' ? 'focus:ring-[#4A90E2]' : 'focus:ring-green-500'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={ctaFormData.location}
                  onChange={handleCtaInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    ctaLearningMode === 'offline' ? 'focus:ring-[#4A90E2]' : 'focus:ring-green-500'
                  }`}
                  placeholder="Enter your city/state"
                />
              </div>

              {/* Course Plan Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Plan *</label>
                <select
                  name="course"
                  value={ctaFormData.course}
                  onChange={handleCtaInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    ctaLearningMode === 'offline' ? 'focus:ring-[#4A90E2]' : 'focus:ring-green-500'
                  }`}
                >
                  <option value="">Select Course Plan</option>
                  <option value="silver-8-weeks">Silver (8 weeks)</option>
                  <option value="gold-16-weeks">Gold (16 weeks)</option>
                  <option value="diamond-24-weeks">Diamond (24 weeks)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={ctaFormData.message}
                  onChange={handleCtaInputChange}
                  rows={3}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
                    ctaLearningMode === 'offline' ? 'focus:ring-[#4A90E2]' : 'focus:ring-green-500'
                  }`}
                  placeholder="Any additional information or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    ctaLearningMode === 'offline'
                      ? 'bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-white'
                  }`}
                >
                  Submit {ctaLearningMode === 'offline' ? 'Offline' : 'Online'} Enrollment Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Page Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fade-in">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {thankYouMessage}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Our team will review your application</li>
                  <li>• We'll contact you within 24 hours</li>
                  <li>• Schedule your program start date</li>
                  <li>• Begin your IoT journey!</li>
                </ul>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowThankYou(false);
                    setThankYouMessage('');
                  }}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Continue Browsing
                </button>
                <button
                  onClick={() => {
                    setShowThankYou(false);
                    setThankYouMessage('');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919758079838"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-4 sm:bottom-16 sm:right-6 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
        {/* Tooltip - Hidden on mobile */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Chat on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </a>

      {/* Floating Phone Button */}
      <a
        href="tel:+919758079838"
        className="fixed bottom-32 right-4 sm:bottom-36 sm:right-6 z-50 group"
        aria-label="Call us"
      >
        <div className="bg-red-500 hover:bg-red-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>
        {/* Tooltip - Hidden on mobile */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Call Now
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </a>
      
    </div>
    </>
  );
}

export default App;