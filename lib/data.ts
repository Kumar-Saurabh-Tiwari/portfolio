/* ================================================
   PORTFOLIO DATA — Single source of truth
   All content extracted from the original HTML portfolio.
   ================================================ */

// ------- Types -------

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // Lucide icon name
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  videoUrl?: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  telegram: string;
  telegramUrl: string;
  location: string;
  locationUrl: string;
}

// ------- Data -------

export const siteConfig = {
  name: "Saurabh Kumar Tiwari",
  title: "Saurabh Kumar Tiwari — Full Stack Developer",
  description:
    "Passionate Full Stack Developer creating amazing digital experiences with modern technologies and innovative solutions.",
  url: "https://saurabhkumar.dev",
  ogImage: "/og-image.png",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/SaurabhKumarNiit",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saurabh-kumar-profile-linkdin-com-in-000011-present/",
    icon: "Linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/SaurabhKumar_11",
    icon: "Twitter",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/message/OOM7G7XMR3K5B1",
    icon: "MessageCircle",
  },
];

export const heroData = {
  greeting: "Hello, I'm",
  name: "Saurabh Kumar Tiwari",
  profileImage: "/images/profile/sk-image.jpg",
  roles: [
    "Full Stack Developer",
    "Web Designer",
    "Backend Developer",
    "UI/UX Designer",
  ],
  description:
    "Passionate Full Stack Developer creating amazing digital experiences with modern technologies and innovative solutions.",
};

export const aboutData = {
  paragraphs: [
    `I'm Saurabh Kumar Tiwari, a passionate and results-driven Full Stack Developer based in Rewa, Madhya Pradesh, India. I hold a Bachelor's degree in Computer Application from Makhanlal Chaturvedi National University and have several years of hands-on experience delivering robust digital solutions for clients and organizations.`,
    `My core expertise spans Java, C++, Spring Boot, Node.js, MySQL, MongoDB, and AWS for backend and cloud development, alongside HTML5, CSS3, JavaScript, Angular, and React for modern, responsive frontend applications. I am highly skilled in integrating third-party APIs (Google, LinkedIn, ChatGPT, Firebase), building Progressive Web Apps (PWAs), and implementing real-time features such as notifications and chat systems.`,
    `Currently, I am focused on architecting scalable web platforms, optimizing performance and security, and leveraging AI technologies to create intelligent, user-centric applications. My portfolio includes successful projects in fintech, health tech, e-commerce, and social platforms — including the Jukebox, Foodie-app, Influnexus, and House Health Platform.`,
    `I am committed to continuous learning and staying updated with the latest industry trends. Outside of coding, I enjoy gardening, creative design, and contributing to open-source projects. Let's connect to build something impactful together!`,
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Angular", icon: "🅰️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: "☕" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "Node.js", icon: "🟩" },
      { name: "Express", icon: "🚂" },
      { name: "C++", icon: "⚙️" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
      { name: "AWS (EC2, S3, Lambda)", icon: "☁️" },
      { name: "Redis", icon: "🔴" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "Figma", icon: "🎯" },
      { name: "Linux / cPanel", icon: "🐧" },
      { name: "PWA", icon: "📱" },
      { name: "OAuth / Auth", icon: "🔐" },
    ],
  },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern web applications using cutting-edge technologies like Angular, React, and Spring Boot.",
    icon: "Code2",
    tags: ["Angular", "React", "Spring Boot"],
  },
  {
    title: "UI/UX Design",
    description:
      "Creating beautiful and intuitive user interfaces with focus on user experience and modern design principles.",
    icon: "Paintbrush",
    tags: ["Figma", "Photoshop", "CSS3"],
  },
  {
    title: "Backend Development",
    description:
      "Developing robust server-side applications with secure APIs, database design, and cloud integration.",
    icon: "Server",
    tags: ["Java", "MySQL", "MongoDB"],
  },
  {
    title: "Firebase & Real-time",
    description:
      "Integrate real-time push notifications using Firebase Cloud Messaging for web and mobile apps.",
    icon: "Bell",
    tags: ["Firebase", "Web Push", "Mobile"],
  },
  {
    title: "AWS Cloud Solutions",
    description:
      "Leverage Amazon Web Services for hosting, storage, compute, and advanced cloud solutions.",
    icon: "Cloud",
    tags: ["EC2", "S3", "Lambda"],
  },
  {
    title: "API Integrations",
    description:
      "Integrate Google services, LinkedIn OAuth, PayPal, and more for smarter, connected apps.",
    icon: "Plug",
    tags: ["Google Auth", "Maps", "OAuth 2.0"],
  },
  {
    title: "Node.js Development",
    description:
      "Develop scalable backend services and APIs using Node.js and modern JavaScript frameworks.",
    icon: "Terminal",
    tags: ["Node.js", "Express", "API"],
  },
  {
    title: "PWA & Offline Apps",
    description:
      "Build Progressive Web Apps for offline access, installability, and native-like experience.",
    icon: "Smartphone",
    tags: ["PWA", "Service Worker", "IndexedDB"],
  },
  {
    title: "AI & Chatbot Integration",
    description:
      "Empower apps with advanced conversational AI using OpenAI ChatGPT APIs, Dialogflow, and custom bots.",
    icon: "Brain",
    tags: ["OpenAI", "ChatGPT", "Dialogflow"],
  },
  {
    title: "Real-time Chat Apps",
    description:
      "Build real-time chat applications with features like group chat, media sharing, and notifications.",
    icon: "MessagesSquare",
    tags: ["WebSocket", "Realtime", "Push"],
  },
  {
    title: "Premium Websites",
    description:
      "Design and deliver high-end, visually stunning, and feature-rich premium websites with SEO.",
    icon: "Gem",
    tags: ["Custom Design", "Branding", "SEO"],
  },
  {
    title: "Security & Performance",
    description:
      "Deliver blazing fast, secure, and optimized web solutions for all business needs.",
    icon: "ShieldCheck",
    tags: ["HTTPS", "Performance", "Security"],
  },
];

export const projects: Project[] = [
  {
    title: "AI Annotation Website",
    description: "Modern AI Annotation Making Tool for data labeling and machine learning workflows.",
    category: "Web App",
    tags: ["Angular", "Node.js", "AI"],
    image: "/images/projects/annotation.png",
  },
  {
    title: "Pan Global",
    description: "Connecting businesses and customers globally with a unified platform.",
    category: "Web App",
    tags: ["Next.js", "Node.js"],
    image: "/images/projects/pan-global.png",
  },
  {
    title: "SK Web-Hub",
    description: "Innovation and Ideas portal with integrated AI Chatbot for smart assistance.",
    category: "Web App",
    tags: ["Next.js", "Node.js", "AI Chatbot"],
    image: "/images/projects/sk-web.png",
  },
  {
    title: "Influnexus Design App",
    description:
      "A user-customizable video editing application providing comprehensive video solutions to customers with modern UI/UX.",
    category: "Web App",
    tags: ["Angular", "TypeScript", "CSS3"],
    image: "/images/projects/influnexus.png",
    videoUrl: "/videos/influnexus-demo.mp4",
    liveUrl: "https://www.influnexus.com",
  },
  {
    title: "Google Authentication System",
    description:
      "Secure and fast login system with Google OAuth integration for enhanced user experience and security.",
    category: "Web App",
    tags: ["OAuth 2.0", "Angular", "Firebase"],
    liveUrl: "https://www.influnexus.com/#/login",
    image: "/images/projects/google-auth.png",
  },
  {
    title: "PayPal Payment Integration",
    description:
      "Real-time payment processing system allowing customers to make secure transactions seamlessly.",
    category: "Web App",
    tags: ["PayPal API", "Node.js", "Express"],
    image: "/images/projects/paypal.png",
    videoUrl: "/videos/paypal-demo.mp4",
  },
  {
    title: "Real-Time Currency Converter",
    description:
      "Dynamic currency conversion application with live exchange rates using external APIs and modern React patterns.",
    category: "Web App",
    tags: ["React", "API Integration", "JavaScript"],
    image: "/images/projects/currency.png",
    videoUrl: "/videos/currency-demo.mp4",
  },
  {
    title: "House Health Platform",
    description:
      "Real-time health solution platform built with Next.js providing comprehensive healthcare services.",
    category: "Web App",
    tags: ["Next.js", "React", "MongoDB"],
    image: "/images/projects/house-health.png",
    videoUrl: "/videos/house-health-demo.mp4",
  },
  {
    title: "Attire Shopping App",
    description:
      "Modern e-commerce application with intuitive design and seamless shopping experience.",
    category: "Mobile",
    tags: ["React Native", "Redux", "Firebase"],
    image: "/images/projects/shopping.png",
    videoUrl: "/videos/attire-demo.mp4",
  },
  {
    title: "Mi Recall Event App",
    description: "Create new events and connect with people through a social platform.",
    category: "Mobile",
    tags: ["Angular", "Redux", "Firebase"],
    image: "/images/projects/mi-recall.png",
    videoUrl: "/videos/mi-recall-demo.mp4",
  },
  {
    title: "Foodie-app",
    description:
      "Online food ordering system that lets restaurants, coffee shops, or bars accept orders online.",
    category: "Mobile",
    tags: ["Angular", "Database", "Firebase"],
    image: "/images/projects/foodie.png",
    liveUrl:
      "https://github.com/Kumar-Saurabh-Tiwari/Foodie_App_Project/releases/download/v1.0.0/app-release.apk",
  },
  {
    title: "Roamifly Flight App",
    description: "Flight information and booking app for the Roamifly platform.",
    category: "Web App",
    tags: ["Angular", "Node.js"],
    image: "/images/projects/roamify.png",
  },
];

export const contactInfo: ContactInfo = {
  email: "skumar.tiwari@outlook.com",
  phone: "+91 7440805377",
  telegram: "@S_kumar_11",
  telegramUrl: "https://t.me/S_kumar_11",
  location: "Rewa, Madhya Pradesh, India",
  locationUrl:
    "https://www.google.com/maps/search/?api=1&query=Rewa,+Madhya+Pradesh,+India",
};

export const formEndpoint =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  "https://formsubmit.co/46b4f14d6b4b584beab7b38cd40107c0";
