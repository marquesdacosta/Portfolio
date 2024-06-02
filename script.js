

// DARK MODE //


document.addEventListener('DOMContentLoaded', function() {
    const btnDarkmode = document.querySelector('.btn__darkmode');
    const containerDarkmode = document.querySelector('.container__darkmode');
    const formElements = document.querySelectorAll('.form__content, .container__left, .left__name, .left__info, .container__right, h4, .dark-ok, .icone-form , input , textarea, form, .container__form');

    
    btnDarkmode.addEventListener('click', function() {
        containerDarkmode.classList.toggle('active');
        
        if (containerDarkmode.classList.contains('active')) {
            document.body.classList.add('dark-mode');
            containerDarkmode.id = "light-mode";
            formElements.forEach(element => {
                element.id = "light-mode";
            });
        } else {
            document.body.classList.remove('dark-mode');
            containerDarkmode.id = null;
            formElements.forEach(element => {
                element.id = null;
            });
        }
    });
});





// CAROUSEL //
//1//
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './assets/images/ninacarducci/screen1.png',
        './assets/images/ninacarducci/screen2.png',
        './assets/images/ninacarducci/screen3.png'
    ];
    let currentIndex = 0;

    function updateImage() {
        const carouselImage = document.getElementById('carouselImage');
        carouselImage.src = images[currentIndex];
    }

    window.prevImage = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage();
    };

    window.nextImage = function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    };
});
//2//
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './assets/images/booki/screen1.png',
        './assets/images/booki/screen2.png'
    ];
    let currentIndex = 0;

    function updateImage() {
        const carouselImage = document.getElementById('carouselImage1');
        carouselImage.src = images[currentIndex];
    }

    window.prevImage1 = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage();
    };

    window.nextImage1 = function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    };
});
//3//
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './assets/images/ohmyfood/screen1.png',
        './assets/images/ohmyfood/screen2.png',
        './assets/images/ohmyfood/screen3.png'
    ];
    let currentIndex = 0;

    function updateImage() {
        const carouselImage = document.getElementById('carouselImage2');
        carouselImage.src = images[currentIndex];
    }

    window.prevImage2 = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage();
    };

    window.nextImage2 = function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    };
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
    }
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


//  Animation competences declenchement //

// Ajoute un écouteur d'événement pour s'assurer que le script est exécuté après le chargement complet du DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // Sélectionne la section contenant les compétences
    const section = document.querySelector('.list__competences');
    
    // Sélectionne tous les éléments avec la classe 'competence-icon' dans la section
    const icons = document.querySelectorAll('.competence-icon');
    
    // Options pour configurer l'Intersection Observer
    const options = {
        root: null, // Utilise la fenêtre de visualisation (viewport) comme conteneur racine
        rootMargin: '0px', // Aucun décalage supplémentaire autour du conteneur racine
        threshold: 0.5 // La fonction de rappel se déclenchera quand 50% de la section sera visible
    };

    // Fonction de rappel appelée par l'Intersection Observer
    const callback = (entries, observer) => {
        // Pour chaque entrée observée (seulement une dans ce cas, car nous observons une seule section)
        entries.forEach(entry => {
            // Si l'entrée est visible (intersection avec la fenêtre de visualisation)
            if (entry.isIntersecting) {
                console.log('Section is intersecting');
                
                // Pour chaque icône, applique une animation avec un délai croissant
                icons.forEach((icon, index) => {
                    console.log(`Animating icon ${index + 1}`);
                    // Applique une animation de style avec un délai basé sur l'index
                    icon.style.animation = `icones 0.75s ease ${(index + 1) * 100}ms forwards`;
                });
                
                // Déconnecte l'observateur une fois l'animation déclenchée pour éviter de le refaire
                observer.disconnect();
            }
        });
    };

    // Crée une instance d'Intersection Observer avec la fonction de rappel et les options définies
    const observer = new IntersectionObserver(callback, options);
    
    // Commence à observer la section des compétences
    observer.observe(section);
});
