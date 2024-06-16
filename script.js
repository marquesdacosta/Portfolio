

// DARK MODE //


document.addEventListener('DOMContentLoaded', function() {
    const btnDarkmode = document.querySelector('.btn__darkmode');
    const containerDarkmode = document.querySelector('.container__darkmode');
    const formElements = document.querySelectorAll('.form__content, .container__left, .left__name, .left__info, .container__right, h4, .dark-ok, .icone-form , input , textarea, form, .container__form');
    const borderskills = document.querySelectorAll('.div__icone');
    const borderstitle = document.querySelectorAll('.border__h3');
    const textapropos = document.querySelectorAll('.text__a-propos , .text__p');
    const burger = document.querySelectorAll('.line');
    const lienprojet = document.querySelector('.lien__projet');
    
    containerDarkmode.addEventListener('click', function() {
        containerDarkmode.classList.toggle('active');
        if (containerDarkmode.classList.contains('active')) {
            document.body.classList.add('dark-mode');
            borderskills.forEach(skill => {
                skill.classList.add('borderskill');
            });
            burger.forEach(element => {
                element.id = "light-mode";
            })
            borderstitle.forEach(element => {
                element.id = "light-mode";
            });
            textapropos.forEach(element => {
                element.id = "apropos-mode";
            });
            containerDarkmode.id = "light-mode";
            lienprojet.classList.add('borderskill')
            formElements.forEach(element => {
                element.id = "light-mode";
            });
        } else {
            document.body.classList.remove('dark-mode');
            borderskills.forEach(skill => {
                skill.classList.remove('borderskill');
            });
            burger.forEach(element => {
                element.id = null;
            })
            borderstitle.forEach(element => {
                element.id = null;
            });
            textapropos.forEach(element => {
                element.id = null;
            });
            borderstitle.id = null;
            containerDarkmode.id = null;
            lienprojet.classList.remove('borderskill')
            formElements.forEach(element => {
                element.id = null;
            });
        }
    });
});


// MODAL //

const projectDescriptions = {
    'Nina-Carducci': {
        description: `
            <h4>Description :</h4>
            <p>Le projet vise à optimiser le site web de Nina Carducci, une photographe, afin d'améliorer ses performances et son référencement SEO.
            Les tâches principales incluent l'optimisation des images pour réduire le temps de chargement, 
            la refonte du code et de sa structure pour une meilleure accessibilité, et l'implémentation du référencement local avec Schema.org.
            De plus, l'ajout des métadonnées pour les réseaux sociaux et des ajustements pour rendre le site plus accessible.</p>
        `,
        mission: `
            <h4>Mission :</h4>
            <ul>
                <li>Faire une optimisation globale du site tant sur les performances que sur le SEO.</li>
                <li>Mettre en place le référencement local en utilisant Schema.org.</li>
                <li>Ajouter les metas pour les réseaux sociaux.</li>
                <li>Faire les modifications liées à l’accessibilité du site.</li>
                <li>Produire un rapport d’optimisation présentant toutes vos actions et leur impact.</li>
            </ul>
        `,
        link: 'https://marquesdacosta.github.io/NinaCarducci/'
    },
    'Booki': {
        description: `
            <h4>Description :</h4>
            <p>Le projet consiste à développer le site web de la start-up Booki, 
            qui permet aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix
            à partir d'une base de code initiale comprenant un fichier HTML de départ, des fichiers CSS, et un dossier d'images.</p>
        `,
        mission: `
            <h4>Mission :</h4>
            <ul>
                <li>Intégration de l'interface du site en utilisant HTML et CSS.</li>
            </ul>
        `,
        link: 'https://marquesdacosta.github.io/Booki/'
    },
    'OhMyFood': {
        description: `
            <h4>Description :</h4>
            <p>Le projet consiste à développer le site web de la start-up Ohmyfood, spécialisée dans la restauration, 
            pour répertorier les menus de restaurants gastronomiques. Le projet doit respecter les directives du brief créatif 
            et inclure des animations soignées, en utilisant SASS pour le CSS.</p>
        `,
        mission: `
            <h4>Mission :</h4>
            <ul>
                <li>Création d'un site "mobile first" avec une interface responsive adaptée aux mobiles, tablettes et ordinateurs de bureau.</li>
            </ul>
        `,
        link: 'https://marquesdacosta.github.io/Ohmyfood/'
    },
    'Kaza': {
        description:`
            <h4>Description :</h4>
            <p>Le projet vise a refondre entièrement le site Kaza , une agence de location d'appartement entre particuliers en France en utilisant une stack Javascript Moderne.</p>`,
        mission: `
            <h4>Mission :</h4>
            <ul>
                <li>Création du site sous forme de composant grace a React , avec une interface responsive.</li>
            </ul>
        `,
        link : 'https://github.com/marquesdacosta/Kaza'
    },
    'Sophie-Bluel': {
        description:`
            <h4>Description :</h4>
            <p>Développeur front-end chez ArchiWebos, une agence comptant 50 salariés. Je rejoins une équipe en renfort pour développer le site portfolio d'une architecte d'intérieur. La mission est de créer une page web dynamique en utilisant JavaScript et en communiquant avec une API.</p>`,
        mission:`
            <h4>Mission: </h4>
            <ul>
                <li>Développer la page de présentation des travaux en gérant les événements utilisateurs et manipuler les éléments du DOM avec JavaScript pour une interface interactive.</li>
                <li>Créer la page de connexion de l'administrateur permettant de se connecter pour gérer le contenu du site.</li>
                <li>Conception et développement d'une modale pour uploader des médias, intégrant les fonctionnalités nécessaires pour une expérience utilisateur fluide.</li>
            </ul>
        `,
        link : 'https://github.com/marquesdacosta/Portfolio-architecte-sophie-bluel/tree/master/FrontEnd'
    },
    'Argent-Bank': {
        description:`
            <h4>Description :</h4>
            <p>Après avoir rejoins Argent Bank, une banque en ligne, en tant que développeur front-end. J'ai contribué au développement d'une application bancaire utilisant React et Redux pour offrir une expérience utilisateur dynamique et réactive . Ma mission consiste à développer l'interface utilisateur et à intégrer le front-end avec le back-end via des appels API REST. </p>`,
        mission:`
            <h4>Mission: </h4>
            <ul>
                <li>Création de l'application web avec React.</li>
                <li>Gestion de l'état avec Redux.</li>
                <li>Mise en place des fonctionnalités de connexion , déconnexion , modifications des infos du profil , restriction d'informations.</li>
                <li>Définition et rédaction des points d'accès de l'API sur swagger pour intégrer des fonctionnalités sur la gestion des transactions.</li>
            </ul>
        `,
        link : 'https://github.com/marquesdacosta/ArgentBank-app'
    },
};

document.addEventListener('DOMContentLoaded', function() {
    window.openModal = function(projectName) {
        const modal = document.getElementById('myModal');
        const modalText = document.getElementById('modalText');
        const descriptionDiv = document.querySelector('.modal_description .description');
        const missionDiv = document.querySelector('.modal_description .mission');
        const projectLink = document.getElementById('projectLink');

        modalText.innerText = `${projectName}`;
        descriptionDiv.innerHTML = projectDescriptions[projectName].description;
        missionDiv.innerHTML = projectDescriptions[projectName].mission;
        projectLink.href = projectDescriptions[projectName].link;
        projectLink.innerText = `Voir le projet ${projectName}`;
        modal.style.display = 'block';
    };

    window.closeModal = function() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        const modal = document.getElementById('myModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

// declenchement animation au scroll sur la section concerné

  document.addEventListener("DOMContentLoaded", function() {
        const icons = document.querySelectorAll('.competence-icon, .div__icone');

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        icons.forEach(icon => {
            observer.observe(icon);
        });
    });



//
    document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        header.classList.toggle('header-active');
    });
});



