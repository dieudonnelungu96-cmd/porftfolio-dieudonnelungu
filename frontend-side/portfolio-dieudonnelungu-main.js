document.addEventListener("DOMContentLoaded", function(){

    const html = document.documentElement;

    /* MENU TOGGLE */
    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-menu");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuBtn.classList.toggle("active");

        menuBtn.setAttribute("aria-expanded", isOpen)//accessibility
    });

    /* DARK MODE (global) */
    const themeToggle = document.getElementById("themeToggle");
    const themeSwitch = document.getElementById("themeSwitch");

    function setTheme(theme){
        html.dataset.theme = theme;
        localStorage.setItem("theme", theme);

        if (themeToggle) {
            themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
        }
        if (themeSwitch) {
            themeSwitch.checked = theme === "dark";
        }
        if (themeToggle) {
            themeToggle.setAttribute("aria-pressed", theme === "dark");
        }
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    // Desktop button
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
        });
    }

    // Mobile switch
    if (themeSwitch) {
        themeSwitch.addEventListener("change", () => {
            setTheme(themeSwitch.checked ? "dark" : "light");
        });
    }

    /* LANGUAGE TOGGLE */
    const langToggle = document.getElementById("langToggle");
    let lang = "en";

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            lang = lang === "en" ? "fr" : "en";
            langToggle.textContent = lang === "en" ? "French" : "English";
            html.lang = lang;
        });
    }

    /* PWA */
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js");
    }

});

let currentLang = "en";
let translations = {
    en:{
        hero_title: "Hi, I’m <span>Dieudonné Lungu</span>",
        hero_desc: "Frontend Web Developer — I build modern, accessible & performant web experiences.",
        contact_btn: "Contact Me",
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        french_btn: "French",
        view_projects: "View Projects",
        download_resume: "Download Resume",
        about_me_title: "About Me",
        dark_mode_btn: "Dark mode",
        about_me_desc: "I'm a passionate Frontend Developer focused on building clean, responsive, and user-friendly interfaces using HTML, CSS, JavaScript.",
        projects_title: "Projects",
        project_1_title:"First Project",
        roject_1_desc: "PAO website, is the Employee and Work Minister official website, the PAO branch program is Official website of Employee and Work Minister of the DR Congo. It's responsive website built with HTML, CSS & JS.",
        project_1_link: "PAO | Progamme National d'Appui",
        project_2_title:"Second Project",
        roject_2_desc: "Modern UI with accessibility and performance in mind.",
        project_2_link: "IT Skills & Digital Marketing",
        project_3_title: "Third Project",
        project_3_desc: "The personal Modern IU/UX design website making my skills in professional places.",
        project_4_title: "Fourth Project",
        project_4_desc: "In progress - Modern IU/UX design website",
        project_4_link: "In progres project on GitHub",

        skills_title:"Skills",
        skills_comment: "As a frontend developer and backend developer learner, I have a strong foundation in creating responsive and accessible web applications and backend technologies. Let's look at my skills:",
        skills_fronted_title: "1. Frontend development:",
        css_3: "CSS3 / Flexbox / Grid",
        js_es6: "JavaScript (ES6+)",
        skills_frontend_design: "Responsive Design UI/UX",
        skills_frontend_access: "Accessibility (a11y)",
        skills_frontend_pwa: "PWA Basics",
        frontend_typescript: "TypeScript",
        frontend_React: "React",
        frontend_ReactJS: "ReactJS",
        frontend_ReactNative: "React Native",

        skills_backend_title: "2. Backend development:",
        backend_node: "Node.js",
        backend_express: "Express",
        backend_mysql: "MySQL",
        backend_sql: "SQL",

        contact_title: "Contact",
        contact_paragraph:"Have a project, an idea or an opportunity? Let's talk and build something great together.",
        send_message: "Send me a direct message here",
        send_message_btn: "Send message",

        follow_instagram: "Follow on Instagram",
        follow_facebook: "Follow on Facebook",
        follow_linkedin: "Follow on LinkedIn",
        follow_github: "Follow on GitHub",
        follow_tiktok: "Follow on TikTok",
        call_me: "Call me",
        send_email: "Send an email",
        chat_whatsapp: "Chat on WhatsApp",
        copyright_developer: "© 2026 Dieudonné Lungu - Frontend Web Developer",
        droits_reserves: "All rights reserved",
        back_top: "Back to Top ↑"
        
    },

    fr: {
        hero_title: "Salut, Je suis <span>Dieudonné Lungu</span>",
        hero_desc: "Développeur web Frontend — Je crée des expériences web modernes, accessibles et performantes.",
        contact_btn: "Contactez-moi",
        nav_about: "À propos",
        nav_home: "Accueil",
        nav_projects: "Projets",
        nav_contact: "Contact",
        french_btn: "Français",
        view_projects: "Voir les Projets",
        download_resume: "Téléchargez le CV",
        about_me_title: "À propos de moi",
        dark_mode_btn: "Mode sombre",
        about_me_desc: "Je suis un Développeur Web Frontend passionné et centré sur la création des interfaces propres, réactives et conviviales à l'aide de langages de programmation HTML, CSS, JavaScript, et autres.",
        
        projects_title: "Projets",
        project_1_title:"Premier Projet",
        roject_1_desc: "Le PAO est un site web officiel du Ministère de l'Emploi et Travail, le PAO est une branche de programmes au sein du Ministère de l'Emploi et Travail de la DR Congo. C'est un sitet web réactif crée avec HTML, CSS & JS.",
        project_2_title:"Deuxième Projet",
        roject_2_desc: " Un site moderne mettant avant l'expérience utilisateur(UI/UX), ayant dans son sein une accessibilité fluide et une bonne performance.",
        project_2_link: "Compétences Informatiques et Markeing Digital",
        project_3_title: "Troisième Projet",
        project_3_desc: "Un site web moderne, perosnnel, qui met en avant mes compétences professionnelles.",
        project_4_title: "Quatrième Projet",
        project_4_desc: "Encours - Un site web moderne axé sur IU/UX.",
        project_4_link: "Encours, consultez le projet sur GitHub",

        skills_title: "Compétences",

        skills_comment: "Etant un développeur frontend et apprenant en développement backend, j'ai une solide base dans la création d'applications web réactives et accessibles ainsi que dans les technologies backend. Voyons mes compétences :",
        skills_fronted_title:"1. Développement Frontend:", 
        css_3: "CSS3 / Flexbox / Grid",
        js_es6: "JavaScript (ES6+)",
        skills_frontend_design: "Design Réactif UI/UX",
        skills_frontend_access: "Accessibilité (a11y)",
        skills_frontend_pwa: "Notions de PWA",
        frontend_typescript: "TypeScript",
        frontend_React: "React",
        frontend_ReactJS: "ReactJS",
        frontend_ReactNative: "React Native",

        skills_backend_title: "2. Développement Backend:",
        backend_node: "Node.js",
        backend_express: "Express",
        backend_mysql: "MySQL",
        backend_sql: "SQL",


        contact_title: "Contact",
        contact_paragraph:"Avez-vous un projet, une idée ou une opportinuité ? Discutons-en pour créer quelque chose de bon ensemble.",
        send_message: "Envoyez-moi un message direct Ici",
        follow_facebook: "Suivez-moi sur Facebook",
        follow_instagram: "Suivez-moi sur Instagram",
        follow_linkedin: "Suivez-moi sur LinkedIn",
        follow_github: "Suivez-moi sur GitHub",
        follow_tiktok: "Suivez-moi sur TikTok",
        call_me: "Appelez-moi",
        send_email: "Envoyez un email",
        chat_whatsapp: "Discutez sur WhatsApp",
        send_message_btn: "Soumettre",
        copyright_developer: "© 2026 Dieudonné Lungu - Développeur Web Frontend",
        droits_reserves: "Tous Droits reservés",
        back_top: "Retour en haut ↑"
    }
};

/* Function that apply translation in both languages FR-EN */
function applayTranslations(lang){

    //select every element with [data-i18n] attribute
    const allElements = document.querySelectorAll("[data-i18n]");
    allElements.forEach(element =>{
        const key = element.getAttribute("data-i18n");

        if (translations[lang][key]){
            element.innerHTML = translations[lang][key];
        }
    });

    //Update HMTL lang attribute
    document.documentElement.lang = lang;
}

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";//change language
    applayTranslations(currentLang);//apply translation
    langToggle.textContent = currentLang === "en" ? "FR" : "EN";// update button text
});

//Get Year automaticaly in copyright
const startYear = 2025 ;
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentYear");

if (yearElement){
    yearElement.textContent = `${startYear} - ${currentYear}`;
}

//Back to top button script
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400){
        backToTop.style.display= "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
