document.addEventListener('DOMContentLoaded', () => {
    // Animation pour les titres
    const heading = document.querySelector('h1');
    if (heading) {
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
    }

    // Animation pour les paragraphes de la page About
    const paragraphs = document.querySelectorAll('.about-text p');
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
        }, 300 + index * 200);
    });

    // Animation pour les compétences de la page Skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, 500 + index * 100);
    });

    // Animation pour les cartes de projets
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, 500 + index * 150);
    });

    // Animation pour les hobbies
    const hobbies = document.querySelectorAll('.hobby-card');
    hobbies.forEach((hobby, index) => {
        setTimeout(() => {
            hobby.style.opacity = '1';
            hobby.style.transform = 'translateY(0)';
        }, 500 + index * 150);
    });

    // Animation pour les contacts
    const contacts = document.querySelectorAll('.contact-card');
    contacts.forEach((contact, index) => {
        setTimeout(() => {
            contact.style.opacity = '1';
            contact.style.transform = 'translateY(0)';
        }, 500 + index * 150);
    });
});
