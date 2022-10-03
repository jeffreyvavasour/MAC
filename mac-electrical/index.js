// global array
const localArr = [
    {
        id: 'wiring',
        heading: "Wiring",
        paragraphone: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices. We boldly look into the future and confidently master new technologies, we always offer our customers different options and solutions. It's convenient and comfortable with us!",
        paragraphtwo: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices.",
        image: "./assets/images/image-person.jpg"
    },
    {
        id: 'lighting',
        heading: "Electrical Fitouts & Lighting",
        paragraphone: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices. We boldly look into the future and confidently master new technologies, we always offer our customers different options and solutions. It's convenient and comfortable with us!",
        paragraphtwo: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices. We boldly look into the future and confidently master new technologies, we always offer our customers different options and solutions. It's convenient and comfortable with us!",
        image: "./assets/images/image-fifteen.jpg"
    },
    {
        id: 'heating',
        heading: "Solar Panel Installation",
        paragraphone: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices. We boldly look into the future and confidently master new technologies, we always offer our customers different options and solutions. It's convenient and comfortable with us!",
        paragraphtwo: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices.",
        image: "./assets/images/image-person.jpg"
    },
    {
        id: 'safety',
        heading: "LED Upgrades & Energy Saving",
        paragraphone: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices. We boldly look into the future and confidently master new technologies, we always offer our customers different options and solutions. It's convenient and comfortable with us!",
        paragraphtwo: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices. We boldly look into the future and confidently master new technologies, we always offer our customers different options and solutions. It's convenient and comfortable with us!",
        image: "./assets/images/image-fifteen.jpg"
    },
    {
        id: 'communication',
        heading: "Data & Network Systems",
        paragraphone: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices. We boldly look into the future and confidently master new technologies, we always offer our customers different options and solutions. It's convenient and comfortable with us!",
        paragraphtwo: "Our team has been developing over the years. Today it includes only highly qualified specialists with experience and their own best practices.",
        image: "./assets/images/image-person.jpg"
    }
]

// selectors
const primaryHeader = document.querySelector('.primary-header');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

const btnSliderLeft = document.querySelector('.btn-slider-left');
const btnSliderRight = document.querySelector('.btn-slider-right');
const reviewsContentSlides = document.querySelectorAll('.reviews-content-slide');

const tabsContentHeading = document.querySelector('.tabs-content-heading');
const tabsContentImage = document.querySelector('.tabs-content-image');
const tabsContentParaOne = document.querySelector('.tabs-content-para-one');
const tabsContentParaTwo = document.querySelector('.tabs-content-para-two');
const tabs = document.querySelectorAll('.tab');

// on scroll
window.onscroll = function() {
    if (document.documentElement.scrollTop > 82) {
        primaryHeader.style.backgroundColor = "hsl( var(--clr-dark), 0.95)";
    } else {
        primaryHeader.style.backgroundColor = "transparent";
}};

// tabs
reviewsContentSlides.forEach((slide, index) => {
    slide.style.left = `${index}00%`;
})

// EVENT LISTENERS
// nav toggle
mobileNavToggle.addEventListener('click', function() {
    const dataVisible = primaryNav.getAttribute('data-visible');
    if (dataVisible === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        mobileNavToggle.style.backgroundImage = 'url(./assets/images/icon-close.svg)';
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        mobileNavToggle.style.backgroundImage = 'url(./assets/images/icon-hamburger.svg)';
    }
})

document.addEventListener('click', (e) => {
    if (e.target.id !== 'primary-nav' && e.target.id !== 'nav-toggle' && e.target.id !== 'btn-top-of-page') {
        primaryNav.setAttribute('data-visible', 'false');
        mobileNavToggle.style.backgroundImage = 'url(./assets/images/icon-hamburger.svg)';
    };
});

// more services tabs
tabs.forEach(tab => {
    createContent(tab);
    activeState(tab);
})

// reviews slider
let count = 0;

btnSliderRight.addEventListener('click', function() {
    count++;
    carousel()
})
btnSliderLeft.addEventListener('click', function() {
    count--;
    carousel()
})

// FUNCTIONS
function carousel() {
    if(count >= reviewsContentSlides.length) {
        count = 0;
    }
    if(count <= -1) {
        count = reviewsContentSlides.length - 1;
    }
    reviewsContentSlides.forEach(slide => {
        slide.style.transform = `translateX(-${count}00%)`;
    })
}
function createContent(tab) {
    tab.addEventListener('click', function() {
        localArr.map(obj => {
            if (obj.id === tab.dataset.id) {
                tabsContentHeading.textContent = obj.heading;
                tabsContentImage.src = obj.image;
                tabsContentParaOne.textContent = obj.paragraphone;
                tabsContentParaTwo.textContent = obj.paragraphtwo;
            }
        })
    })
}
function activeState(tab) {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
    })
}