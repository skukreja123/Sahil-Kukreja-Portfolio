export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},

		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/skukreja123',
		linkedin: 'https://www.linkedin.com/in/sahil-kukreja-b8b40023a/',


		whatsapp: 'https://wa.me/+923083420221',
		email: 'kukrejasahil36@gmail.com',
		phone: 'tel:+923083420221',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Software Engineer',
		company: 'Bench Matrix',
		location: 'Karāchi, Sindh, Pakistan - Hybrid',
		startDate: 'May 2025',
		endDate: 'Present',
		description: [
			'	Working as a Software Engineer on a FinTech platform delivering mobile and backend solutions for Al Salam Bank, Bahrain.',
			'Developing Flutter mobile applications, building new production features including WCAD and Personal Finance modules.',
'Implementing and consuming RESTful APIs using Spring Boot within a microservices-based backend architecture.',
'Supporting backend deployments through CI/CD pipelines and Kubernetes, enabling containerized and automated releases.',
		],
		technologies: ['Flutter', 'Spring Boot', 'MySql', 'Git', 'Docker','Kubernetes', 'CI/CD'],
	},
	{
		title: 'Backend Developer Intern',
		company: 'Doaz',
		location: 'Yeoksam-ro, Gangnam-gu, Seoul - Remote',
		startDate: 'Nov 2024',
		endDate: 'May 2025',
		description: [
			'Developed and maintained scalable backend services using Node.js and NestJS for a multi-tenant SaaS platform.',
			'Designed and implemented secure, high-performance RESTful APIs backed by PostgreSQL.',
			'Integrated external AI/ML models via APIs to extend platform intelligence and automation.',
			'Implemented payment and subscription workflows, integrating PayPal and Korean payment gateways (e.g., KakaoPay/NaverPay).',

		],
		technologies: ['NodeJs', 'NestJS', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'AI/ML APIs', 'Payment Gateway APIs'],
	},
	{
		title: 'Backend Developer Intern',
		company: 'EntraCloud',
		location: 'Islamabad, Pakistan - Remote',
		startDate: 'Jun 2024',
		endDate: 'Aug 2024',
		description: [
'			Developed scalable backend services using Node.js.',
'Designed and implemented RESTful APIs for team projects.',
'Optimized MongoDB database queries for performance and efficiency.'		
],
		technologies: ['Node.js', 'Express.js', 'MongoDB', 'Git'],
	},
	{
		title: 'Student Laboratory Assistant',
		company: 'University Lab',
		location: 'Karāchi, Sindh, Pakistan - On-site',
		startDate: 'Aug 2023',
		endDate: 'Dec 2023',
		description: [
'			Assisted fellow students in the Data Structures course by guiding lab sessions.',
'Conducted code reviews and provided detailed feedback on assignments.',
'Explained complex programming concepts to enhance understanding.',
		],
		technologies: ['C++', 'Data Structures', 'Git'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Fabric Defect Detection | FYP',
		description:
			'Developed an end‑to‑end fabric defect detection system using deep learning (YOLO, ResNet, EfficientNet, custom CNNs) and computer vision, deployed as a web platform with real‑time and upload‑based detection.',
		image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
		tags: ['Python', 'YOLO', 'CNN', 'FastAPI', 'MySQL', 'React.js', 'Computer Vision'],
		link: 'https://fyp-defect-detection.vercel.app/',
		repo: 'https://github.com/skukreja123/FYP-defect-detection-AI',
	},
	{
		title: 'FeedVisior',
		description:
			'Built a video analysis tool for real‑time emotion detection using Python, DeepFace, and Streamlit, deployed on AWS for efficient processing of uploaded and live video feeds.',
		image: '/projects/feedvisor.jpg',
		tags: ['Python', 'DeepFace', 'Streamlit', 'AWS', 'Video Analysis', 'Machine Learning'],
		link: '#',
		repo: 'https://github.com/DeRohan/FeedVisor-Sentiment-Analyser',
	},
	{
		title: 'FinTech Mobile App Features',
		description:
			'Developed production‑ready Flutter mobile application modules for a FinTech platform (Al Salam Bank – Bahrain), including WCAD and Personal Finance features, with focus on performance, responsiveness, and secure API integration.',
		image: 'https://images.pexels.com/photos/3183161/pexels-photo-3183161.jpeg',
		tags: ['Flutter', 'Dart', 'Mobile App', 'FinTech', 'REST APIs', 'Spring Boot'],
		link: '#',
		repo: '#',
	},
	{
	title: 'Fleck | Full-Stack Web Application',
	description:
		'Developed a complete web application using Node.js, React.js, and MySQL, featuring advanced relational database design, optimized queries, role-based access control, and a responsive frontend interface. Recognized as Best Database Project for practical implementation and performance.',
	image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg',
	tags: ['Node.js', 'React.js', 'MySQL', 'Full-Stack', 'Web Development', 'Database Design'],
	link: '#',
	repo: 'https://github.com/skukreja123/Fleck_Student_Portal_System',
},
{
	title: 'ListOfMovies | Flutter Movie App',
	description:
		'Developed a cross-platform movie listing application using Flutter, implementing structured state management for efficient UI updates and scalable architecture. Built reusable widgets, dynamic list rendering, and responsive layouts to ensure smooth performance across devices.',
	image: 'https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg',
	tags: ['Flutter', 'Dart', 'State Management', 'Mobile App Development', 'UI/UX'],
	link: '#',
	repo: 'https://github.com/skkukreja123/ListofMovies',
},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Computer Science',
		institution: 'FAST National University of Computer and Emerging Sciences',
		location: 'Karachi, Pakistan',
		startDate: 'June 2021',
		endDate: 'May 2025',
		gpa: '3.29/4.0',
		achievements: [
  'Best Database Project: Fleck for advanced relational schema design and query optimization',
  '7th position nationwide in IEEE Xtreme 16.0',
  'Participated in ICPC, demonstrating advanced problem-solving and teamwork',
  'Final Year Project: Fabric Defect Detection – end-to-end ML system deployed as a web platform',
],
	},
	{
		degree: 'Intermediate',
		field: 'Pre-Engineering',
		institution: 'Cambridge College',
		location: 'Ghotki, Sindh, Pakistan',
		startDate: 'June 2019',
		endDate: 'May 2021',
		gpa: '89%',
		achievements: [
  'Secured 89% in Intermediate Pre-Engineering, consistently top of the class',
  'Participated in inter-school science and mathematics competitions',
],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'IEEE Xtreme 16.0 – Certificate of Participation (Top 9 in Pakistan)',
		issuer: 'IEEE Xtreme',
		date: '2022',
		id: 'IEEE-XTREME-16',
		url: '#',
		pdf: '/certificates/ieee_xtreme_16.pdf',
	},
	{
		title: 'Competitive Programming – Certificate of Participation (Top 5 Finalist)',
		issuer: "Developers' Day - ACM NUCES",
		date: 'Apr 2023',
		id: 'ACM-DEV-DAY-2023',
		url: '#',
		pdf: '/certificates/acm_devday_2023.jpg',
	},
	{
		title: 'Speed Programming – Certificate of Participation (Top 7 Finalist)',
		issuer: 'PROCOM',
		date: 'Mar 2022',
		id: 'PROCOM-2022',
		url: '#',
		pdf: '/certificates/procom_2022.jpg',
	},
	{
		title: 'Competitive Programming',
		issuer: 'ICPC - International Collegiate Programming Contest',
		date: '2023',
		id: 'WV4A0A7GJMNZ',
		url: 'https://icpc.global/ICPCID/WV4A0A7GJMNZ',
		pdf: '/certificates/icpc_certificate.pdf',
	},
	{
		title: 'Best DB Project Certificate',
		issuer: 'National University of Computer and Emerging Sciences',
		date: 'Nov 2023',
		id: 'BEST-DB-2023',
		url: '#',
		pdf: '/certificates/best_db_project.pdf',
	},
	{
		title: 'SayabiDevs Virtual Coding Hackathon 2023',
		issuer: 'SayabiDevs',
		date: 'Feb 2023',
		id: 'SAYABI-2023',
		url: '#',
		pdf: '/certificates/sayabidevs_2023.pdf',
	},
	{
		title: 'Certificate of Participation in Codegoda 2023',
		issuer: 'Agoda',
		date: 'Apr 2023',
		id: 'CODEGODA-2023',
		url: '#',
		pdf: '/certificates/codegoda_2023.pdf',
	},
	{
		title: 'Machine Learning',
		issuer: 'Coursera',
		date: '2024',
		id: 'COURSERA-ML-2024',
		url: '#',
		pdf: '/certificates/coursera_machine_learning.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Backend & Core Development
	{ name: 'Spring Boot', level: 9, category: 'technical' },
	{ name: 'Node.js', level: 8, category: 'technical' },
	{ name: 'REST APIs', level: 9, category: 'technical' },
	{ name: 'Microservices', level: 8, category: 'technical' },

	// Frontend & Mobile
	{ name: 'React.js', level: 8, category: 'technical' },
	{ name: 'Flutter', level: 8, category: 'technical' },

	// Databases
	{ name: 'MySQL', level: 9, category: 'technical' },
	{ name: 'MongoDB', level: 8, category: 'technical' },
	{ name: 'Database Design', level: 9, category: 'technical' },

	// Machine Learning & AI
	{ name: 'Machine Learning', level: 8, category: 'technical' },
	{ name: 'Computer Vision', level: 8, category: 'technical' },
	{ name: 'YOLO / ResNet / EfficientNet', level: 7, category: 'technical' },

	// Programming Languages
	{ name: 'Java', level: 9, category: 'software' },
	{ name: 'JavaScript', level: 8, category: 'software' },
	{ name: 'C++', level: 8, category: 'software' },
	{ name: 'Python', level: 8, category: 'software' },

	// Tools & Platforms
	{ name: 'Git & GitHub', level: 9, category: 'software' },
	{ name: 'Docker (Basic)', level: 6, category: 'software' },
	{ name: 'AWS (Basic)', level: 6, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 10, category: 'soft' },
	{ name: 'Competitive Programming', level: 9, category: 'soft' },
	{ name: 'System Design Thinking', level: 8, category: 'soft' },
	{ name: 'Team Collaboration', level: 8, category: 'soft' },

	// Languages
	{ name: 'English', level: 9, category: 'language' },
	{ name: 'Urdu', level: 10, category: 'language' },
	{ name: 'Germany', level: 3, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];