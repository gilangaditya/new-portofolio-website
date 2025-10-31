import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.svg';
import logo_dark from './logo_dark.svg';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import icon3 from './icon3.png';
import docker from './docker.svg';
import java from './java.svg';
import python from './python.svg';
import reactjs from './reactjs.svg';
import tailwindcss from './tailwindcss.svg';
import spring from './spring.svg';
import wordpress from './wordpress.svg';
import vuejs from './vuejs.svg';
import github_dark from './github_dark.svg';
import github from './github.svg';
import postgresql from './postgresql.svg';
import linux from './linux.svg';
import php from './php.svg';
import mysql from './mysql.svg';
import nextjs2_dark from './nextjs2_dark.svg';
import nextjs2 from './nextjs2.svg';
import laravel from './laravel.svg';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    icon3,
    docker,
    github_dark,
    github,
    java,
    linux,
    mysql,
    nextjs2,
    nextjs2_dark,
    php,
    postgresql,
    python,
    spring,
    tailwindcss,
    vuejs,
    wordpress,
    reactjs,
    laravel,
};

export const workData = [
    {
        title: 'Fullstack project',
        description: 'Web Project Ticketing Bus using Laravel blade',
        bgImage: '/agen-bus.png',
        link: 'https://github.com/gilangaditya/Agen-bus'
    },
    {
        title: 'Track Delivery based App',
        description: 'Mobile App using Vue.js, Python and Ionic Framework',
        bgImage: '/work-2.png',
        link: 'https://play.google.com/store/apps/details?id=id.co.gaido.mobile&hl=id'
    },
    {
        title: 'Company Profile Site',
        description: 'CMS Website using Next.js, Vue.js and Laravel 12',
        bgImage: '/smint.png',
        link: 'https://atrs.co.id/'
    },
    {
        title: 'Top Up Diamond Web App',
        description: 'Web Project for Top Up Diamond Game using MERN Stack',
        bgImage: '/storegg.png',
        link: 'https://github.com/gilangaditya/storegg-Top-up-diamond-game'
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design using Figma',
        bgImage: '/work-4.png',
        link: ''
    },
    {
        title: 'Warehouse Management',
        description: 'Web Application for Warehouse Management System using Vue.js and Python',
        bgImage: '/warehouse-management.png',
        link: ''
    },
    {
        title: 'ERP Logistics System',
        description: 'Web Application for ERP Logistics System using Vue.js and Python',
        bgImage: '/erp-system.png',
        link: ''
    },
]

export const serviceData = [
    {
        icon: web_icon, // Icon Anda
        title: "Web Developer",
        description: "Web development is the process of building, programming...",
        link: "", // Keep for backward compatibility
        slug: "web-developer" // Tambahkan slug untuk routing
    },
    {
        icon: mobile_icon,
        title: "Mobile app",
        description: "Mobile app development involves creating software for mobile devices...",
        link: "",
        slug: "mobile-app"
    },
    {
        icon: ui_icon,
        title: "UI/UX design",
        description: "UI/UX design focuses on creating a seamless user experience...",
        link: "",
        slug: "ui-ux-design"
    },
    {
        icon: graphics_icon,
        title: "Graphics design",
        description: "Creative design solutions to enhance visual communication...",
        link: "",
        slug: "graphics-design"
    }
];

export const serviceDetails = {
    "web-developer": {
        title: "Web Developer",
        icon: "/web_icon.png",
        shortDescription: "Web development is the process of building, programming...",
        fullDescription: "As a skilled web developer, I specialize in creating robust, scalable, and user-friendly web applications that drive business growth and enhance user experience.",
        keyServices: [
            {
                title: "Frontend Development",
                description: "Building responsive and interactive user interfaces using modern frameworks like React, Next.js, and Vue.js with a focus on performance and accessibility."
            },
            {
                title: "Backend Development",
                description: "Developing robust server-side applications with Node.js, Laravel, Python and various databases including MongoDB, PostgreSQL, and MySQL."
            },
            {
                title: "Full-Stack Solutions",
                description: "End-to-end web application development from database design to user interface, ensuring seamless integration and optimal performance."
            },
            {
                title: "API Development & Integration",
                description: "Creating RESTful APIs and integrating third-party services to extend functionality and connect various systems."
            }
        ],
        technologies: [
            "React.js", "Next.js", "Node.js", "Laravel", "TypeScript", 
            "Tailwind CSS", "MySQL", "PostgreSQL", "Git", "Docker", "Python", "Flask"
        ],
        benefits: [
            "Modern, responsive design that works on all devices",
            "Fast loading times and optimized performance",
            "SEO-friendly architecture for better visibility",
            "Scalable codebase that grows with your business",
            "Clean, maintainable code with best practices",
            "Comprehensive testing and quality assurance"
        ],
        process: [
            {
                step: "Discovery & Planning",
                description: "Understanding your requirements, goals, and target audience to create a strategic development plan."
            },
            {
                step: "Design & Prototyping",
                description: "Creating wireframes and prototypes to visualize the final product before development begins."
            },
            {
                step: "Development",
                description: "Building your application using modern technologies and best practices with regular updates."
            },
            {
                step: "Testing & Deployment",
                description: "Thorough testing across devices and browsers, followed by smooth deployment to production."
            },
            {
                step: "Maintenance & Support",
                description: "Ongoing support, updates, and optimization to ensure your application runs smoothly."
            }
        ]
    },
    "mobile-app": {
        title: "Mobile App Development",
        icon: "/mobile_icon.png",
        shortDescription: "Mobile app development involves creating software for mobile devices...",
        fullDescription: "I create high-performance mobile applications for iOS and Android platforms that deliver exceptional user experiences and drive engagement.",
        keyServices: [
            {
                title: "Cross-Platform Development",
                description: "Building apps that work seamlessly on both iOS and Android using React Native and Flutter, reducing development time and costs."
            },
            {
                title: "Native App Development",
                description: "Creating platform-specific applications that leverage the full potential of iOS and Android ecosystems."
            },
            {
                title: "App UI/UX Design",
                description: "Designing intuitive and engaging mobile interfaces that follow platform guidelines and best practices."
            },
            {
                title: "App Maintenance & Updates",
                description: "Regular updates, bug fixes, and feature enhancements to keep your app competitive and secure."
            }
        ],
        technologies: [
            "React Native", "Flutter", "Kotlin", "Firebase",
            "Redux", "REST APIs", "GraphQL", "Push Notifications", "In-App Purchases"
        ],
        benefits: [
            "Single codebase for multiple platforms",
            "Native-like performance and user experience",
            "Faster time to market",
            "Cost-effective development",
            "Easy maintenance and updates",
            "Offline functionality support"
        ],
        process: [
            {
                step: "Consultation",
                description: "Understanding your app idea, target users, and business objectives."
            },
            {
                step: "Strategy & Planning",
                description: "Defining features, platform choice, and creating a development roadmap."
            },
            {
                step: "UI/UX Design",
                description: "Creating user-friendly designs that align with platform standards."
            },
            {
                step: "Development & Testing",
                description: "Building the app with regular testing on actual devices."
            },
            {
                step: "Launch & Support",
                description: "App store submission and ongoing support after launch."
            }
        ]
    },
    "ui-ux-design": {
        title: "UI/UX Design",
        icon: "/uiux_icon.png",
        shortDescription: "UI/UX design focuses on creating a seamless user experience...",
        fullDescription: "I craft beautiful, intuitive, and user-centered designs that not only look great but also solve real problems and enhance user satisfaction.",
        keyServices: [
            {
                title: "User Research & Analysis",
                description: "Conducting user research, creating personas, and mapping user journeys to understand your audience deeply."
            },
            {
                title: "UI Design",
                description: "Creating visually appealing interfaces with attention to typography, color theory, and visual hierarchy."
            },
            {
                title: "UX Design",
                description: "Designing intuitive user flows, information architecture, and interaction patterns for optimal usability."
            },
            {
                title: "Prototyping & Testing",
                description: "Building interactive prototypes and conducting usability tests to validate design decisions."
            }
        ],
        technologies: [
            "Figma", "Adobe XD"
        ],
        benefits: [
            "Increased user satisfaction and engagement",
            "Reduced development costs through early validation",
            "Better conversion rates and business outcomes",
            "Consistent brand experience across platforms",
            "Data-driven design decisions",
            "Accessible designs for all users"
        ],
        process: [
            {
                step: "Research",
                description: "Understanding users, competitors, and market trends through comprehensive research."
            },
            {
                step: "Define",
                description: "Creating user personas, journey maps, and defining design requirements."
            },
            {
                step: "Ideate",
                description: "Brainstorming solutions, sketching ideas, and exploring different approaches."
            },
            {
                step: "Design",
                description: "Creating high-fidelity mockups and interactive prototypes."
            },
            {
                step: "Test & Iterate",
                description: "Conducting usability tests and refining designs based on feedback."
            }
        ]
    },
    "graphics-design": {
        title: "Graphics Design",
        icon: "/graphics_icon.png",
        shortDescription: "Creative design solutions to enhance visual communication...",
        fullDescription: "I deliver creative and impactful graphic design solutions that help brands stand out, communicate effectively, and leave lasting impressions.",
        keyServices: [
            {
                title: "Brand Identity Design",
                description: "Creating comprehensive brand identities including logos, color palettes, typography, and brand guidelines."
            },
            {
                title: "Marketing Materials",
                description: "Designing brochures, flyers, posters, banners, and other promotional materials that capture attention."
            },
            {
                title: "Social Media Graphics",
                description: "Creating engaging social media posts, stories, covers, and ads optimized for various platforms."
            },
            {
                title: "Illustration & Icon Design",
                description: "Custom illustrations and icon sets that add personality and clarity to your products."
            }
        ],
        technologies: [
            "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma",
            "CorelDRAW", "Canva", "After Effects"
        ],
        benefits: [
            "Professional and memorable brand presence",
            "Consistent visual communication",
            "High-quality, print-ready files",
            "Quick turnaround times",
            "Unlimited revisions until satisfied",
            "Source files provided"
        ],
        process: [
            {
                step: "Brief & Discovery",
                description: "Understanding your brand, goals, and design preferences."
            },
            {
                step: "Concept Development",
                description: "Creating initial concepts and mood boards for your review."
            },
            {
                step: "Design Creation",
                description: "Developing detailed designs based on approved concepts."
            },
            {
                step: "Revision & Refinement",
                description: "Making adjustments based on your feedback to perfect the design."
            },
            {
                step: "Final Delivery",
                description: "Providing all final files in various formats for different uses."
            }
        ]
    }
};


export const experienceData = [
    { id: 1, 
        dateFrom: 'Oct 2023', 
        dateTo: 'Jan 2024', 
        location: 'Karawang, East Java',
        jobs: 'Freelance', 
        title: 'PT. Rasonac Materials Indonesia', 
        description: 'PT. Rasonac Materials Indonesai is a company enganged inthe automative sector'
    },
    { id: 2, 
        dateFrom: 'Feb 2024', 
        dateTo: 'Present',
        location: 'Depok, East Java', 
        jobs: 'Application Engineer', 
        title: 'PT. Gaido Cito Ekakurindo', 
        description: 'PT. Gaido Cito Ekakurindo has been operating in the Express Delivery & Logistics Services sector since 2003.'
    }
];

export const jobDescription = [
    { experienceId: 1, 
        description: 'Managed fingerprint attendance systems using PostgreSQL for database optimization.'},
    { experienceId: 1, 
        description:  'Configured and maintained virtual machines using Hyper-V on Windows Server.'},
    { experienceId: 1, 
        description:  'Provided networking solutions to enhance system performance.'},
    { experienceId: 1, 
        description: 'Delivered reliable IT services to support daily business operations.'
    },

    { experienceId: 2, 
        description: 'Managed and maintained company databases to ensure data accuracy and availability.'},
    { experienceId: 2, 
        description:  'Engineered and implemented application solutions to support operational efficiency.'},
    { experienceId: 2, 
        description:  'Provided technical support to troubleshoot and resolve IT issues.'},
    { experienceId: 2, 
        description: 'Developed and executed comprehensive test plans and cases to ensure product quality.'
    },
    { experienceId: 2, 
        description: 'Identified, documented, and resolved bugs through close collaboration with developers.'
    },
    { experienceId: 2, 
        description: 'Conducted both manual and automated testing using tools such as Selenium, Appium, and Cypress.'
    }
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, Java, PHP, Python' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor Of Computer Secience' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.figma, assets.git, assets.mongodb, assets.docker, assets.linux, assets.github,
];

export const techData = [
    assets.nextjs2,  assets.reactjs, assets.tailwindcss, assets.laravel, assets.java, assets.spring ,assets.python, assets.mysql, assets.postgresql
];