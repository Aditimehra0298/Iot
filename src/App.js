import React, { useState } from 'react';
import { ChevronDown, Cpu, Zap, Calendar, Clock, Users, BookOpen, Wrench, Monitor, Play, CheckCircle, Award, Globe, Code, Database, Wifi as WifiIcon } from 'lucide-react';

function App() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [activeWeek, setActiveWeek] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [learningModes, setLearningModes] = useState({
    '2-month': 'offline',
    '4-month': 'offline',
    '6-month': 'offline'
  });

  // Set loading to false after component mounts
  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  const programs = {
    '2-month': {
      title: '2-Month IoT Bootcamp',
      duration: '8 Weeks',
      ideal: 'Beginners, Bootcamps, Engineering Students',
      focus: 'Foundations + Intermediate + Cloud',
      color: 'from-blue-500 to-cyan-500',
      price: '$299',
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
      color: 'from-green-500 to-emerald-500',
      price: '$599',
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
      color: 'from-orange-500 to-red-500',
      price: '$999',
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

  const hardwareRequirements = [
    {
      category: 'Microcontroller Boards',
      items: ['Arduino board', 'ESP-32 Board', 'Raspberry Pi'],
      icon: Cpu
    },
    {
      category: 'Basic Electronics & Wiring',
      items: ['Breadboard', 'Jumper Wires', 'Power Supply', 'LEDs', 'Buzzer', 'Potentiometer', 'RLC components', 'Diode', 'Transistors', 'Push Button'],
      icon: Wrench
    },
    {
      category: 'Sensors (Input Devices)',
      items: ['DHT11/DHT22 Sensor', 'LDR Sensor', 'PIR Sensor', 'Ultrasonic Sensor (HC-SR04)', 'IR Sensor', 'Soil Sensor', 'Sound Sensor', 'Touch Sensor'],
      icon: Database
    },
    {
      category: 'Actuators (Output Devices)',
      items: ['DC Motors', 'Servo Motor', 'Stepper Motor', 'Relays', 'DC Fan'],
      icon: Play
    },
    {
      category: 'Communication & Display',
      items: ['LCD I2C Display', 'OLED Display', 'RTC Module', 'SD Card Module', 'RFID Reader', 'NFC', 'TFT Display', 'HC-05 Bluetooth'],
      icon: WifiIcon
    }
  ];

  const currentProgram = selectedProgram ? programs[selectedProgram] : null;



  return (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            <div className="flex items-center space-x-6">
              <div className="relative">
                {/* Enhanced logo with subtle shadow */}
                <img 
                  src="/l5.png" 
                  alt="IoT Academy Logo" 
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1A365D] to-[#4A90E2] bg-clip-text text-transparent leading-tight">
                  Institute of Testing & Certification
                </span>
                <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] bg-clip-text text-transparent leading-tight">
                  India Pvt. Ltd.
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#programs" className="text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-lg hover:scale-105 transform duration-200">Programs</a>
              <a href="#syllabus" className="text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-lg hover:scale-105 transform duration-200">Syllabus</a>
              <a href="#prerequisites" className="text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-lg hover:scale-105 transform duration-200">Prerequisites</a>
              <button className="bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
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
          <div className="px-6 py-6 space-y-4">
            <a href="#programs" className="block text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-lg py-2 hover:bg-gray-50 rounded-lg px-3">Programs</a>
            <a href="#syllabus" className="block text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-lg py-2 hover:bg-gray-50 rounded-lg px-3">Syllabus</a>
            <a href="#prerequisites" className="block text-gray-900 hover:text-[#4A90E2] transition-colors font-semibold text-lg py-2 hover:bg-gray-50 rounded-lg px-3">Prerequisites</a>
            <button className="w-full bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8">
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
                  IoT & Robotics Division of ITC India
                </div>
              </div>
              
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="relative">
                  <Cpu className="w-14 h-14 sm:w-16 sm:h-16 text-[#4A90E2]" />
                </div>
              </div>
              
                             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in leading-tight drop-shadow-2xl bg-gradient-to-r from-blue-300/20 to-blue-400/20 px-6 py-4 rounded-2xl inline-block border border-blue-300/30">
                 Master Class in IoT & Robotics
               </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-lg">
                Transform your career with hands-on IoT and Electronics training. Build real-world projects and master industry-standard technologies.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { icon: Zap, text: '20+ Projects', color: 'text-[#4A90E2]' },
                  { icon: Users, text: 'Expert Mentors', color: 'text-[#7FB3D3]' },
                  { icon: BookOpen, text: 'Industry Skills', color: 'text-[#4A90E2]' },
                  { icon: Wrench, text: 'Hands-on Learning', color: 'text-[#7FB3D3]' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/90 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/95 transition-all duration-300 hover:scale-105 shadow-lg">
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                    <span className="text-gray-900 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-bold py-3 px-6 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#4A90E2]/25"
                >
                  Explore Programs
                </button>
                <button className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white font-bold py-3 px-6 rounded-full text-base transition-all duration-300 hover:scale-105">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Side - Video Collage */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Video Collage Container */}
                <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-[#4A90E2]/30 shadow-xl overflow-hidden">
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
      <section id="programs" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-[#1A365D] via-[#2D3748] to-[#1A365D] bg-clip-text text-transparent">
            Choose Your Learning Path
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center">
            {/* 2-Month Program */}
            <div className="flex-1 max-w-sm">
              <div 
                onClick={() => setSelectedProgram('2-month')}
                className={`relative cursor-pointer group transition-all duration-500 ${
                  selectedProgram === '2-month' ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                {/* Silver Badge */}
                <div className="absolute -top-4 -left-4 z-20">
                  <div className="relative">
                    {/* Badge Background */}
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-full shadow-2xl border-4 border-slate-200 flex items-center justify-center transform rotate-12">
                      {/* Badge Inner Circle */}
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 rounded-full flex items-center justify-center border-2 border-slate-100">
                        {/* Badge Icon */}
                        <div className="text-slate-600 text-lg font-bold">🥈</div>
                      </div>
                    </div>
                    {/* Badge Label */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg border border-slate-600">
                      SILVER
                    </div>
                    {/* Badge Shine Effect */}
                    <div className="absolute top-1 left-1 w-3 h-3 bg-white/60 rounded-full blur-sm"></div>
                  </div>
                </div>

                {/* Program Container */}
                <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 p-1 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 animate-pulse"></div>
                  
                  <div className="relative bg-white rounded-2xl p-6 m-1 min-h-[280px] flex flex-col justify-between shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                        <div className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
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
                        
                        {/* Learning Mode Switch */}
                        <div className="mb-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-1.5 shadow-md border border-gray-200">
                            <div className="flex items-center space-x-1">
                              {/* Offline Mode */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLearningModes(prev => ({ ...prev, '2-month': 'offline' }));
                                }}
                                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5 ${
                                  learningModes['2-month'] === 'offline'
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/25'
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
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md shadow-green-500/25'
                                    : 'bg-green-100 text-green-600 hover:bg-green-200'
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
                      
                      <div className="text-center py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base">
                        {selectedProgram === '2-month' ? 'Selected' : 'Choose Program'}
                      </div>
                  </div>
                </div>

                {/* Selection Indicator */}
                {selectedProgram === '2-month' && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            {/* 4-Month Program */}
            <div className="flex-1 max-w-sm">
              <div 
                onClick={() => setSelectedProgram('4-month')}
                className={`relative cursor-pointer group transition-all duration-500 ${
                  selectedProgram === '4-month' ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                {/* Gold Badge */}
                <div className="absolute -top-4 -left-4 z-20">
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
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 p-1 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-20 animate-pulse"></div>
                  
                  <div className="relative bg-white rounded-2xl p-6 m-1 min-h-[280px] flex flex-col justify-between shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                        <div className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                          {programs['4-month'].duration}
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{programs['4-month'].title}</h3>
                      <p className="text-gray-800 mb-2 text-sm sm:text-base">
                        <span className="text-green-500 font-semibold">Ideal for:</span> {programs['4-month'].ideal}
                      </p>
                      <p className="text-gray-800 mb-4 text-sm sm:text-base">
                        <span className="text-emerald-500 font-semibold">Focus:</span> {programs['4-month'].focus}
                      </p>
                                              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{programs['4-month'].price}</div>
                        
                        {/* Learning Mode Switch */}
                        <div className="mb-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-1.5 shadow-md border border-gray-200">
                            <div className="flex items-center space-x-1">
                              {/* Offline Mode */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLearningModes(prev => ({ ...prev, '4-month': 'offline' }));
                                }}
                                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5 ${
                                  learningModes['4-month'] === 'offline'
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md shadow-green-500/25'
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
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md shadow-green-500/25'
                                    : 'bg-green-100 text-green-600 hover:bg-green-200'
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
                      
                      <div className="text-center py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base">
                        {selectedProgram === '4-month' ? 'Selected' : 'Choose Program'}
                      </div>
                  </div>
                </div>

                {/* Selection Indicator */}
                {selectedProgram === '4-month' && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            {/* 6-Month Program */}
            <div className="flex-1 max-w-sm">
              <div 
                onClick={() => setSelectedProgram('6-month')}
                className={`relative cursor-pointer group transition-all duration-500 ${
                  selectedProgram === '6-month' ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                {/* Diamond Badge */}
                <div className="absolute -top-4 -left-4 z-20">
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
                <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-1 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-20 animate-pulse"></div>
                  
                  <div className="relative bg-white rounded-2xl p-6 m-1 min-h-[280px] flex flex-col justify-between shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                        <div className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          {programs['6-month'].duration}
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{programs['6-month'].title}</h3>
                      <p className="text-gray-800 mb-2 text-sm sm:text-base">
                        <span className="text-orange-500 font-semibold">Ideal for:</span> {programs['6-month'].ideal}
                      </p>
                      <p className="text-gray-800 mb-4 text-sm sm:text-base">
                        <span className="text-red-500 font-semibold">Focus:</span> {programs['6-month'].focus}
                      </p>
                                              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{programs['6-month'].price}</div>
                        
                        {/* Learning Mode Switch */}
                        <div className="mb-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-1.5 shadow-md border border-gray-200">
                            <div className="flex items-center space-x-1">
                              {/* Offline Mode */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLearningModes(prev => ({ ...prev, '6-month': 'offline' }));
                                }}
                                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5 ${
                                  learningModes['6-month'] === 'offline'
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-500/25'
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
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-500/25'
                                    : 'bg-green-100 text-green-600 hover:bg-green-200'
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
                      
                      <div className="text-center py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base">
                        {selectedProgram === '6-month' ? 'Selected' : 'Choose Program'}
                      </div>
                  </div>
                </div>

                {/* Selection Indicator */}
                {selectedProgram === '6-month' && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Syllabus Details Section */}
        <div className="relative z-10 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border shadow-lg transition-all duration-300 overflow-hidden ${
            selectedProgram === '2-month' ? 'border-blue-500 shadow-blue-500/20' :
            selectedProgram === '4-month' ? 'border-green-500 shadow-green-500/20' :
            selectedProgram === '6-month' ? 'border-orange-500 shadow-orange-500/20' :
            'border-blue-500 shadow-blue-500/20'
          }`}>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <img 
                src="/Untitled design (20).png" 
                alt="Syllabus Background" 
                className="w-full h-full object-cover opacity-60"
                onLoad={() => console.log('Syllabus section background image loaded successfully')}
                onError={(e) => console.error('Syllabus section background image failed to load:', e)}
              />
              {/* Overlay to ensure content readability */}
              <div className="absolute inset-0 bg-white/30"></div>
            </div>
            
            {/* Content with relative positioning */}
            <div className="relative z-10">
            <h3 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center transition-all duration-300 ${
              selectedProgram === '2-month' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent' :
              selectedProgram === '4-month' ? 'bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent' :
              selectedProgram === '6-month' ? 'bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent' :
              'bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent'
            }`}>
              {selectedProgram ? `${currentProgram.title} - Detailed Syllabus` : `${(programs && programs['2-month']?.title) || '2-Month IoT Bootcamp'} - Detailed Syllabus`}
            </h3>

            {!isLoading && (((selectedProgram && currentProgram) || (!selectedProgram && programs && programs['2-month']))) ? (
              <div className="overflow-x-auto">
                <div className="flex gap-4 sm:gap-6 pb-4 min-w-max">
                  {((selectedProgram && currentProgram?.weeks) ? currentProgram.weeks : ((programs && programs['2-month']?.weeks) || [])).map((week, index) => (
                    <div 
                      key={index} 
                      className={`bg-white/90 rounded-2xl p-4 sm:p-6 border transition-all duration-300 hover:shadow-lg cursor-pointer shadow-md w-80 flex-shrink-0 ${
                        selectedProgram === '2-month' ? 'border-blue-500 hover:border-cyan-500 hover:shadow-cyan-500/20' :
                        selectedProgram === '4-month' ? 'border-green-500 hover:border-emerald-500 hover:shadow-green-500/20' :
                        selectedProgram === '6-month' ? 'border-orange-500 hover:border-red-500 hover:shadow-orange-500/20' :
                        'border-blue-500 hover:border-cyan-500 hover:shadow-cyan-500/20'
                      } ${
                        activeWeek === index ? 
                          (selectedProgram === '2-month' ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' :
                           selectedProgram === '4-month' ? 'border-emerald-500 shadow-lg shadow-green-500/20' :
                           selectedProgram === '6-month' ? 'border-red-500 shadow-lg shadow-orange-500/20' :
                           'border-cyan-500 shadow-lg shadow-cyan-500/20') : ''
                      }`}
                      onClick={() => setActiveWeek(activeWeek === index ? null : index)}
                    >
                      {/* Week Header */}
                      <div className="text-center mb-4">
                        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center font-bold text-2xl text-white mb-3 transition-all duration-300 ${
                          selectedProgram === '2-month' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          selectedProgram === '4-month' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          selectedProgram === '6-month' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                          'bg-gradient-to-r from-blue-500 to-cyan-500'
                        }`}>
                          {week.week}
                        </div>
                        <h4 className={`text-lg font-bold mb-2 transition-all duration-300 ${
                          selectedProgram === '2-month' ? 'text-blue-500' :
                          selectedProgram === '4-month' ? 'text-green-500' :
                          selectedProgram === '6-month' ? 'text-orange-500' :
                          'text-blue-500'
                        }`}>{week.module}</h4>
                        <div className="text-gray-600 text-sm font-medium">Week {week.week}</div>
                      </div>
                      
                      {/* Topics Section - Hidden by default, shown on click */}
                      <div className={`transition-all duration-300 overflow-hidden ${
                        activeWeek === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="mb-4">
                          <h5 className={`font-semibold mb-3 text-sm font-bold border-b pb-2 transition-all duration-300 ${
                            selectedProgram === '2-month' ? 'text-cyan-500 border-cyan-500/30' :
                            selectedProgram === '4-month' ? 'text-emerald-500 border-emerald-500/30' :
                            selectedProgram === '6-month' ? 'text-red-500 border-red-500/30' :
                            'text-cyan-500 border-cyan-500/30'
                          }`}>Topics Covered:</h5>
                          <ul className="text-gray-800 text-sm space-y-2">
                            {week.topics.map((topic, i) => (
                              <li key={i} className="flex items-start">
                                <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 transition-all duration-300 ${
                                  selectedProgram === '2-month' ? 'bg-cyan-500' :
                                  selectedProgram === '4-month' ? 'bg-emerald-500' :
                                  selectedProgram === '6-month' ? 'bg-red-500' :
                                  'bg-cyan-500'
                                }`}></div>
                                <span className="leading-relaxed">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Projects Section */}
                        <div>
                          <h5 className={`font-semibold mb-3 text-sm font-bold border-b pb-2 transition-all duration-300 ${
                            selectedProgram === '2-month' ? 'text-blue-500 border-blue-500/30' :
                            selectedProgram === '4-month' ? 'text-green-500 border-green-500/30' :
                            selectedProgram === '6-month' ? 'text-orange-500 border-orange-500/30' :
                            'text-blue-500 border-blue-500/30'
                          }`}>Projects:</h5>
                          <ul className="text-gray-800 text-sm space-y-2">
                            {week.projects.map((project, i) => (
                              <li key={i} className="flex items-start">
                                <div className={`w-4 h-4 mt-1 mr-3 flex-shrink-0 transition-all duration-300 ${
                                  selectedProgram === '2-month' ? 'text-blue-500' :
                                  selectedProgram === '4-month' ? 'text-green-500' :
                                  selectedProgram === '6-month' ? 'text-orange-500' :
                                  'text-blue-500'
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
                            <span className="text-xs text-gray-500 font-medium">
                              {activeWeek === index ? 'Hide Details' : 'Click to View Details'}
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeWeek === index ? 'rotate-180' : ''} ${
                              selectedProgram === '2-month' ? 'text-blue-500' :
                              selectedProgram === '4-month' ? 'text-green-500' :
                              selectedProgram === '6-month' ? 'text-orange-500' :
                              'text-blue-500'
                            }`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
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
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/Untitled design (20).png"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-20"
            onLoad={() => console.log('Video section background image loaded successfully')}
            onError={(e) => console.error('Video section background image failed to load:', e)}
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Watch Our IoT Academy in Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See how our comprehensive IoT training programs transform beginners into skilled professionals
            </p>
          </div>
          
          <div className="w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-2xl">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://player.vimeo.com/video/1114785542?title=0&byline=0&portrait=0"
                  title="IoT Academy Introduction Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
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

      {/* Prerequisites Section */}
      <section id="prerequisites" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] bg-clip-text text-transparent">
            Prerequisites & Requirements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {prerequisites.map((req, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 shadow-lg">
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
                            controls
                            preload="metadata"
                            poster="https://cdn.pixabay.com/video/2019/10/09/27706-365890968_tiny.mp4"
                            autoPlay
                            loop
                            muted
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
                            controls
                            preload="metadata"
                            poster="https://cdn.pixabay.com/video/2020/08/14/47215-450995786_large.mp4"
                            autoPlay
                            loop
                            muted
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
                            controls
                            preload="metadata"
                            poster="https://cdn.pixabay.com/video/2017/07/23/10822-226624975_large.mp4"
                            autoPlay
                            loop
                            muted
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
                            controls
                            preload="metadata"
                            poster="https://cdn.pixabay.com/video/2018/03/09/14900-259623335_large.mp4"
                            autoPlay
                            loop
                            muted
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

          {/* Video Grid Section */}
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] bg-clip-text text-transparent">
            Watch Our IoT Training Videos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* Video 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 shadow-lg">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="https://cdn.pixabay.com/video/2019/10/09/27706-365890968_tiny.mp4"
                >
                  <source src="https://cdn.pixabay.com/video/2019/10/09/27706-365890968_tiny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2 text-center">IoT Fundamentals</h4>
              <p className="text-xs text-gray-600 text-center">Learn the basics of IoT technology</p>
            </div>

            {/* Video 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 shadow-lg">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="https://cdn.pixabay.com/video/2020/08/14/47215-450995786_large.mp4"
                >
                  <source src="https://cdn.pixabay.com/video/2020/08/14/47215-450995786_large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2 text-center">Advanced IoT</h4>
              <p className="text-xs text-gray-600 text-center">Master advanced IoT concepts</p>
            </div>

            {/* Video 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 shadow-lg">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="https://cdn.pixabay.com/video/2017/07/23/10822-226624975_large.mp4"
                >
                  <source src="https://cdn.pixabay.com/video/2017/07/23/10822-226624975_large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2 text-center">IoT Projects</h4>
              <p className="text-xs text-gray-600 text-center">Build real-world IoT projects</p>
            </div>

            {/* Video 4 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 shadow-lg">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="https://cdn.pixabay.com/video/2018/03/09/14900-259623335_large.mp4"
                >
                  <source src="https://cdn.pixabay.com/video/2018/03/09/14900-259623335_large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2 text-center">IoT Applications</h4>
              <p className="text-xs text-gray-600 text-center">Explore IoT applications</p>
            </div>
          </div>
          {/* Hardware Requirements */}
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] bg-clip-text text-transparent">
            Hardware Requirements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {hardwareRequirements.map((category, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#7FB3D3] hover:border-[#4A90E2] transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] rounded-full flex items-center justify-center">
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">{category.category}</h4>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-gray-800 font-medium">
                      <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '500+', label: 'Students Trained', icon: Users },
              { number: '50+', label: 'Projects Built', icon: Wrench },
              { number: '95%', label: 'Success Rate', icon: Award },
              { number: '24/7', label: 'Support', icon: Clock }
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
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] bg-clip-text text-transparent">
            Ready to Start Your IoT Journey?
          </h2>
          <p className="text-lg sm:text-xl text-gray-900 mb-8 sm:mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of students who have transformed their careers with our hands-on IoT and Electronics training programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#4A90E2] to-[#7FB3D3] hover:from-[#7FB3D3] hover:to-[#4A90E2] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#4A90E2]/25">
              Enroll Now
            </button>
            <button className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/90 backdrop-blur-md border-t border-[#7FB3D3] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  {/* Clean footer logo */}
                  <img 
                    src="/l5.png" 
                    alt="IoT Academy Logo" 
                    className="w-18 h-18 object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#8B6F47] to-[#6B8FA8] bg-clip-text text-transparent">
                  IoT Academy
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Empowering the next generation of IoT and Electronics engineers through hands-on learning and real-world projects.
              </p>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#programs" className="text-gray-600 hover:text-[#8B6F47] transition-colors">Programs</a></li>
                <li><a href="#syllabus" className="text-gray-600 hover:text-[#8B6F47] transition-colors">Syllabus</a></li>
                <li><a href="#prerequisites" className="text-gray-600 hover:text-[#8B6F47] transition-colors">Prerequisites</a></li>
                                 <li><button className="text-gray-600 hover:text-[#8B6F47] transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Email: info@iotacademy.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Tech Street, Innovation City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#E8D5C4] mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 IoT Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      
    </div>
  );
}

export default App;