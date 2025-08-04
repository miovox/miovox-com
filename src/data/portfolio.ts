import { PortfolioProject } from './types';

export const portfolioProjects: PortfolioProject[] = [
  // Product Projects
  {
    slug: "smart-voice-assistant",
    title: "Smart Voice Assistant Integration",
    date: "2024-11-15",
    shortDescription: "Custom AI voice assistant for smart home automation with natural language processing",
    imageUrl: "/images/portfolio/ai-voice-assistant.jpg",
    galleryImageUrls: [
      "/images/portfolio/ai-voice-assistant-1.jpg",
      "/images/portfolio/ai-voice-assistant-2.jpg",
      "/images/portfolio/ai-voice-assistant-3.jpg"
    ],
    content: `# Smart Voice Assistant Integration
    
A comprehensive AI-powered voice assistant solution that seamlessly integrates with existing smart home systems. This project involved developing custom natural language processing capabilities, voice recognition algorithms, and intelligent automation workflows.

## Key Features
- Natural language understanding with 95% accuracy
- Multi-room audio synchronization
- Custom wake word detection
- Integration with 50+ smart home devices
- Privacy-first local processing

## Technical Implementation
The solution leverages advanced machine learning models for speech recognition and natural language understanding, deployed on edge computing devices for real-time response and enhanced privacy.`,
    category: "Product",
    isFeatured: true
  },
  {
    slug: "predictive-analytics-dashboard",
    title: "Predictive Analytics Dashboard",
    date: "2024-10-22",
    shortDescription: "Machine learning-powered analytics platform for business intelligence and forecasting",
    imageUrl: "/images/portfolio/analytics-dashboard.jpg",
    content: `# Predictive Analytics Dashboard

A sophisticated machine learning platform that provides businesses with actionable insights through predictive modeling and real-time data visualization.

## Key Features
- Real-time data processing and visualization
- Multiple ML algorithms for forecasting
- Interactive dashboards and reports
- Automated alert systems
- Custom KPI tracking

## Results
Helped clients improve decision-making accuracy by 40% and reduce operational costs by 25% through predictive maintenance and demand forecasting.`,
    category: "Product"
  },

  // Home Projects
  {
    slug: "automated-lighting-system",
    title: "Intelligent Lighting Automation",
    date: "2024-12-01",
    shortDescription: "Smart lighting system with circadian rhythm optimization and energy efficiency features",
    imageUrl: "/images/portfolio/smart-lighting.jpg",
    galleryImageUrls: [
      "/images/portfolio/smart-lighting-1.jpg",
      "/images/portfolio/smart-lighting-2.jpg"
    ],
    content: `# Intelligent Lighting Automation

A comprehensive smart lighting solution that automatically adjusts brightness, color temperature, and scheduling based on occupancy, time of day, and personal preferences.

## Key Features
- Circadian rhythm optimization
- Motion-based automation
- Energy usage monitoring
- Voice and app control
- Weather-responsive adjustments

## Impact
Reduced energy consumption by 35% while improving occupant comfort and well-being through optimized lighting conditions.`,
    category: "Home",
    isFeatured: true
  },
  {
    slug: "security-monitoring-system",
    title: "Advanced Home Security System",
    date: "2024-09-18",
    shortDescription: "Comprehensive security solution with AI-powered threat detection and mobile alerts",
    imageUrl: "/images/portfolio/security-system.jpg",
    content: `# Advanced Home Security System

A state-of-the-art security monitoring solution featuring AI-powered threat detection, facial recognition, and intelligent alert systems.

## Key Features
- AI-powered threat detection
- Facial recognition technology
- Mobile app with real-time alerts
- Cloud and local storage options
- Integration with emergency services

## Technology
Built using computer vision algorithms, IoT sensors, and cloud infrastructure for reliable 24/7 monitoring and instant response capabilities.`,
    category: "Home"
  },

  // Event Projects
  {
    slug: "interactive-conference-platform",
    title: "Interactive Conference Platform",
    date: "2024-08-30",
    shortDescription: "Digital platform for hybrid events with real-time engagement and networking features",
    imageUrl: "/images/portfolio/conference-platform.jpg",
    galleryImageUrls: [
      "/images/portfolio/conference-platform-1.jpg",
      "/images/portfolio/conference-platform-2.jpg",
      "/images/portfolio/conference-platform-3.jpg"
    ],
    content: `# Interactive Conference Platform

A comprehensive digital platform designed for hybrid events, enabling seamless interaction between in-person and virtual attendees.

## Key Features
- Real-time Q&A and polling
- Virtual networking rooms
- Interactive breakout sessions
- Live streaming with chat
- Analytics and engagement tracking

## Results
Successfully hosted 50+ events with over 10,000 participants, achieving 85% engagement rate and 95% attendee satisfaction.`,
    category: "Event",
    isFeatured: true
  },
  {
    slug: "smart-venue-management",
    title: "Smart Venue Management System",
    date: "2024-07-12",
    shortDescription: "IoT-enabled venue management solution for optimized space utilization and attendee experience",
    imageUrl: "/images/portfolio/venue-management.jpg",
    content: `# Smart Venue Management System

An IoT-enabled solution for comprehensive venue management, optimizing space utilization, crowd flow, and attendee experience through real-time monitoring and automation.

## Key Features
- Real-time occupancy monitoring
- Automated climate control
- Digital wayfinding systems
- Crowd flow optimization
- Emergency management protocols

## Technology
Integrated sensor networks, mobile applications, and cloud-based analytics to provide venue managers with actionable insights and automated control systems.`,
    category: "Event"
  }
];

export const getProjectsByCategory = (category: "Product" | "Home" | "Event"): PortfolioProject[] => {
  return portfolioProjects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): PortfolioProject[] => {
  return portfolioProjects.filter(project => project.isFeatured === true);
};

export const getProjectBySlug = (slug: string): PortfolioProject | undefined => {
  return portfolioProjects.find(project => project.slug === slug);
};

export const getSortedProjects = (category?: "Product" | "Home" | "Event"): PortfolioProject[] => {
  const projects = category ? getProjectsByCategory(category) : portfolioProjects;
  return projects.sort((a, b) => {
    // Sort by featured first, then by date (newest first)
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};