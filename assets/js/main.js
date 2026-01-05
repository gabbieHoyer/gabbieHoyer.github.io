/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

document.querySelectorAll('.skills__dots').forEach(dotsContainer => {
    const level = parseInt(dotsContainer.getAttribute('data-level')); // Get the level (e.g., 3)
    const totalDots = 5; // Total number of dots (for 5 levels)

    // Clear any existing dots (in case the script runs multiple times)
    dotsContainer.innerHTML = '';

    // Generate the dots
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        // If the current dot index is less than the level, mark it as filled; otherwise, empty
        dot.classList.add(i < level ? 'filled' : 'empty');
        dotsContainer.appendChild(dot);
    }
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
// const modalViews = document.querySelectorAll('.services__modal'),
//       modalBtns = document.querySelectorAll('.services__button'),
//       modalCloses = document.querySelectorAll('.services__modal-close')

// let modal = function(modalClick){
//     modalViews[modalClick].classList.add('active-modal')
// }

// modalBtns.forEach((modalBtn, i) => {
//     modalBtn.addEventListener('click', () => {
//         modal(i)
//     })
// })

// modalCloses.forEach((modalClose) => {
//     modalClose.addEventListener('click', () => {
//         modalViews.forEach((modalView) => {
//             modalView.classList.remove('active-modal')
//         })
//     })
// })


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalIndex) {
    modalViews[modalIndex].classList.add('active-modal');
};

// Bind click-to-open logic (restored and debugged)
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        console.log(`Button clicked: ${modalBtn.dataset.modalName}, index: ${i}`);
        modal(i); // Open the modal
    });
});

// Bind close-all logic
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

/*================= OPEN MODAL ON HASH =================*/
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
        const modalName = hash.replace('#', '');
        const targetModal = document.getElementById(modalName);
        const targetButton = document.querySelector(`.services__button[data-modal-name="${modalName}"]`);

        if (targetModal && targetButton) {
            console.log(`Opening modal via hash: ${modalName}`);
            const modalIndex = Array.from(modalViews).findIndex(modal => modal.id === modalName);
            if (modalIndex !== -1) {
                targetButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
                modal(modalIndex);
            } else {
                console.warn(`Modal with id ${modalName} not found in modalViews`);
            }
        } else {
            console.warn(`No matching button or modal found for hash: ${modalName}`);
        }
    } else {
        console.log('No hash found in URL');
    }
});

// ==================== HIGHLIGHTS SWIPER  ====================*/
let swiperHighlights = new Swiper('.highlights__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
})

/*==================== Pulications TABS ====================*/
const tabs_pub = document.querySelectorAll('[data-pub-target]'),
      tabContents_pub = document.querySelectorAll('[data-pub-content]');

// Function to reset tab state to a default (e.g., show "Publications" tab)
function resetPublicationTabs() {
    // Remove active class from all tabs and contents
    tabContents_pub.forEach(tabContent_pub => {
        tabContent_pub.classList.remove('publication__active');
    });
    tabs_pub.forEach(tab => {
        tab.classList.remove('publication__active');
    });

    // Set default tab (e.g., "#publication") as active
    const defaultTab = document.querySelector('[data-pub-target="#publication"]');
    const defaultContent = document.querySelector('#publication');
    defaultTab.classList.add('publication__active');
    defaultContent.classList.add('publication__active');
}

// Tab click handler
tabs_pub.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.pubTarget);
        
        tabContents_pub.forEach(tabContent_pub => {
            tabContent_pub.classList.remove('publication__active');
        });
        target.classList.add('publication__active');
        
        tabs_pub.forEach(tab => {
            tab.classList.remove('publication__active');
        });
        tab.classList.add('publication__active');
    });
});

// Handle navigation to #publication_award via URL hash or nav/footer links
function handleHashNavigation() {
    const hash = window.location.hash;
    if (hash === '#publication_award') {
        resetPublicationTabs();
        // Ensure the scroll position is correct
        const section = document.querySelector('#publication_award');
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Listen for hash changes (e.g., clicking nav/footer links)
window.addEventListener('hashchange', handleHashNavigation);
// Run on page load in case the page is loaded with #publication_award
window.addEventListener('load', handleHashNavigation);

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    }
})

/* ====================== CONTACT ME ===================*/

// &entry.718175521=nammmme
// &entry.356448002=emaillll
// &entry.1516940592=projectttt
// &entry.133640554=messaggge

// Contact form submission handling
document.getElementById('submit-button').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default anchor click behavior
    var form = document.getElementById('gform');

    // Check if form fields are valid
    if (form.checkValidity()) {
        var formElements = form.elements;  // Access all form elements
        setTimeout(function() {  // Set a delay for the fade out effect
            for (let i = 0; i < formElements.length; i++) {
                formElements[i].style.transition = 'opacity 2s';
                formElements[i].style.opacity = 0;
            }
        }, 500);

        var messageDiv = document.createElement('div');  // Create a div to show the success message
        messageDiv.textContent = 'Your submission has been processed! :D';
        messageDiv.style.transition = 'opacity 2s';
        messageDiv.style.opacity = 1;
        form.insertBefore(messageDiv, form.firstChild);  // Insert the message at the top of the form

        form.submit();  // Manually submit the form
    } else {
        // Form is not valid, show an error message
        var errorMessageDiv = document.createElement('div');  // Create a div to show the error message
        errorMessageDiv.textContent = 'Please fill in all required fields.';
        errorMessageDiv.style.color = 'red';  // Make the error message stand out
        errorMessageDiv.style.transition = 'opacity 2s';
        errorMessageDiv.style.opacity = 1;
        form.insertBefore(errorMessageDiv, form.firstChild);  // Insert the message at the top of the form

        // Remove the error message after a while
        setTimeout(function() {
            errorMessageDiv.remove();
        }, 4000);
    }
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY || window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollTop(){
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})