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
import laravel from './laravel.svg'


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
    laravel
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
];

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
        dateFrom: 'Oct 2023', 
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