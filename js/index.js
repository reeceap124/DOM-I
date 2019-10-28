const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg"
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png');

const headerImg = document.querySelector('#cta-img');
headerImg.setAttribute('src', 'img/header-img.png');

const midImage = document.querySelector('#middle-img');
midImage.setAttribute('src', 'img/mid-page-accent.jpg');

//nav content
const nav = document.querySelectorAll('nav a');

let counter = 1
nav.forEach( curr => {
  if (counter !== nav.length) {
    curr.textContent = siteContent['nav'][`nav-item-${counter}`];
    counter += 1;
  }
})


const parent = document.querySelector('nav');

const newLink = document.createElement('a');
newLink.textContent = 'First';
parent.prepend(newLink);

const newLastLink = document.createElement('a');
newLastLink.textContent = 'Last';
parent.append(newLastLink);

nav.forEach(item => item.style.color = 'green');




//cta content

const cta = document.querySelector('h1');
cta.innerHTML = 'DOM<br/>IS<br/>AWESOME'

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;



//main content
const headers = document.querySelectorAll('.main-content h4');

headers[0].textContent = siteContent["main-content"]["features-h4"];
headers[1].textContent = siteContent["main-content"]["about-h4"];
headers[2].textContent = siteContent["main-content"]["services-h4"];
headers[3].textContent = siteContent["main-content"]["product-h4"];
headers[4].textContent = siteContent["main-content"]["vision-h4"];



const midContent = document.querySelectorAll('.main-content p');

midContent[0].textContent = siteContent["main-content"]["features-content"];
midContent[1].textContent = siteContent["main-content"]["about-content"];
midContent[2].textContent = siteContent["main-content"]["services-content"];
midContent[3].textContent = siteContent["main-content"]["product-content"];
midContent[4].textContent = siteContent["main-content"]["vision-content"];


//contact
const contact = document.querySelectorAll('.contact h4, .contact p')
console.log(contact)
contact[0].textContent = siteContent.contact["contact-h4"]
contact[1].innerHTML = "123 Way 456 Street<br/> Somewhere, USA"
contact[2].textContent = siteContent.contact.phone
contact[3].textContent = siteContent.contact.email


//footer p
const footer = document.querySelector('footer p')

footer.textContent = siteContent.footer["copyright"];

