// =====================================================
// PORTFOLIO DATA CONFIGURATION
// =====================================================
// Edit this file to update your portfolio content
// All sections are easily customizable below
// =====================================================

// Your profile image URL - replace with your own
export const PROFILE_IMAGE = "https://customer-assets.emergentagent.com/job_dipen-aiml-portfolio/artifacts/8fpoe0kb_image.jpg";

// Personal Information
export const PERSONAL_INFO = {
  name: "Dipen Thapa",
  title: "AI/ML Student",
  tagline: "Architecting Intelligence",
  subtitle: "Building practical AI solutions with clean code & steady progress",
  location: "Bhaktapur, Nepal",
  email: "tretime865@gmail.com",
  github: "https://github.com/dipenthapa7",
  linkedin: "https://www.linkedin.com/in/dipen-thapa-34073432b/",
  resumeUrl: "/resume.pdf", // Place your resume in public folder
};

// About Section
export const ABOUT_DATA = {
  description: `I'm a BIT student from Bhaktapur, Nepal with a growing interest in Python, AI/ML, and practical project-based learning. I enjoy building simple, useful projects while improving my technical skills and exploring new technologies step by step. Currently focused on strengthening my programming foundation and growing as a future tech professional.`,
  highlights: [
    "BIT student exploring Python and AI/ML",
    "Focused on practical project-based learning",
    "Building skills through consistent daily practice",
    "Open to internships and collaborative projects",
  ],
  stats: [
    { label: "Projects", value: "10+" },
    { label: "Technologies", value: "8+" },
    { label: "Certificates", value: "5+" },
  ],
};

// Skills Section
export const SKILLS_DATA = {
  categories: [
    {
      title: "Programming Languages",
      icon: "Code",
      skills: [
        { name: "Python", level: 75 },
        { name: "Java", level: 65 },
        { name: "JavaScript", level: 60 },
        { name: "C++", level: 55 },
      ],
    },
    {
      title: "AI/ML & Data Science",
      icon: "Brain",
      skills: [
        { name: "TensorFlow", level: 60 },
        { name: "PyTorch", level: 55 },
        { name: "Scikit-learn", level: 70 },
        { name: "Pandas/NumPy", level: 75 },
      ],
    },
    {
      title: "Web Development",
      icon: "Globe",
      skills: [
        { name: "HTML/CSS", level: 80 },
        { name: "React", level: 55 },
        { name: "Node.js", level: 50 },
        { name: "Tailwind CSS", level: 65 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "Wrench",
      skills: [
        { name: "Git/GitHub", level: 70 },
        { name: "VS Code", level: 85 },
        { name: "Jupyter Notebook", level: 75 },
        { name: "Linux/Bash", level: 60 },
      ],
    },
  ],
};

// Projects Section
// To add a new project, copy the template below and fill in your details
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "AI Image Classifier",
    description: "A deep learning model that classifies images into different categories using convolutional neural networks. Built with TensorFlow and trained on custom datasets.",
    image: "https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    category: "AI/ML",
    githubUrl: "https://github.com/dipenthapa7",
    liveUrl: "", // Leave empty if no live demo
    featured: true,
  },
  {
    id: 2,
    title: "Student Management System",
    description: "A comprehensive Java application for managing student records, grades, and attendance with a clean GUI interface and database integration.",
    image: "https://images.pexels.com/photos/5935785/pexels-photo-5935785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    techStack: ["Java", "MySQL", "JavaFX", "JDBC"],
    category: "Java",
    githubUrl: "https://github.com/dipenthapa7",
    liveUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive Python dashboard for visualizing and analyzing datasets with charts, graphs, and statistical insights using modern libraries.",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    techStack: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    category: "Python",
    githubUrl: "https://github.com/dipenthapa7",
    liveUrl: "",
    featured: true,
  },
  {
    id: 4,
    title: "Sentiment Analysis Tool",
    description: "NLP-based tool that analyzes text sentiment from social media posts and reviews, providing insights on public opinion and trends.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    techStack: ["Python", "NLTK", "Transformers", "Flask"],
    category: "AI/ML",
    githubUrl: "https://github.com/dipenthapa7",
    liveUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Prediction Model",
    description: "Machine learning model that predicts weather patterns using historical data and provides forecasts with high accuracy.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    category: "AI/ML",
    githubUrl: "https://github.com/dipenthapa7",
    liveUrl: "",
    featured: false,
  },
  {
    id: 6,
    title: "E-Commerce Backend API",
    description: "RESTful API for an e-commerce platform with user authentication, product management, and order processing capabilities.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    category: "Java",
    githubUrl: "https://github.com/dipenthapa7",
    liveUrl: "",
    featured: false,
  },
];

// Certificates Section
// Add your certificates here - each certificate should have these fields
export const CERTIFICATES_DATA = [
  {
    id: 1,
    name: "Machine Learning Specialization",
    issuer: "Coursera - Stanford University",
    date: "2024",
    credentialUrl: "https://coursera.org/verify/",
    image: "", // Optional: Add certificate image URL
  },
  {
    id: 2,
    name: "Python for Data Science",
    issuer: "IBM - Cognitive Class",
    date: "2024",
    credentialUrl: "https://courses.cognitiveclass.ai/",
    image: "",
  },
  {
    id: 3,
    name: "Deep Learning Fundamentals",
    issuer: "NVIDIA Deep Learning Institute",
    date: "2024",
    credentialUrl: "https://learn.nvidia.com/",
    image: "",
  },
  {
    id: 4,
    name: "Java Programming Masterclass",
    issuer: "Udemy",
    date: "2023",
    credentialUrl: "https://www.udemy.com/",
    image: "",
  },
  {
    id: 5,
    name: "Git & GitHub for Beginners",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "https://www.freecodecamp.org/",
    image: "",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: "dipen_thapa7",
  templateId: "template_uql1kx7",
  publicKey: "GYppk2-MnjNkta6AA",
};
