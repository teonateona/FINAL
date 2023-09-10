const burgermenu = document.querySelector(".burgermenu");
const navbar = document.querySelector(".navbar");
function toggleBurger() {
  if (navbar.classList.contains("open")) {
    navbar.className = "navbar";
  } else {
    navbar.className = "navbar open";
  }
}
burgermenu.addEventListener("click", () => {
  toggleBurger();
});




const planetImg = document.querySelector('.planet-img');
const geologyImg = document.querySelector('.geology-img');

const planets = document.querySelectorAll(".list-link");
const planetInfo = document.querySelector('.planet-text');
const WikipediaLink = document.querySelector('.Wikipedia-link')

const overviewBtn = document.querySelector('#overview-btn');
const interanBtn = document.querySelector('#interan-btn');
const surfaceBtn = document.querySelector('#surface-btn');

const overviewtext = document.querySelector('.text');
const interantext2 = document.querySelector('.text2');
const surfacetext3 = document.querySelector('.text3');

const planetName = document.querySelector('.planet-name');

const ROTATION_TIME = document.querySelector('#ROTATION_TIME');
const REVOLUTION_TIME = document.querySelector('#REVOLUTION_TIME');
const RADIUS = document.querySelector('#RADIUS');
const AVERAGE_TEMP = document.querySelector('#AVERAGE_TEMP');


const planetsAPI = 'https://planets-api.vercel.app/api/v1/planets';


for (let i = 0; i < planets.length; i++ ) {
  planets[i].addEventListener('click', () => {
    getPlanet(planets[i].innerText);
  });

}


const getPlanet = async (planet = 'Mercury') => {
  const response = await fetch(`${planetsAPI}/${planet}`); 
  const data = await response.json();

 
  planetInfo.textContent = data.overview.content;
  planetImg.src = data.images.planet;
  planetName.innerText = data.name;
  ROTATION_TIME.textContent = data.rotation;
  REVOLUTION_TIME.textContent = data.revolution;
  RADIUS.textContent = data.radius;
  AVERAGE_TEMP.textContent = data.temperature;
  WikipediaLink.src = data.overview.source;
  

  overviewBtn.addEventListener('click', () => {
    planetInfo.textContent = data.overview.content;
    WikipediaLink.src = data.overview.source;
    planetImg.src = data.images.planet;
    geologyImg.src = null;
    
  });

  overviewtext.addEventListener('click', () => {
    planetInfo.textContent = data.overview.content;
    planetImg.src = data.images.planet;
    geologyImg.src = null;

  });

  interanBtn.addEventListener('click', () => {
    planetInfo.textContent = data.structure.content;
    WikipediaLink.src = data.structure.source;
    planetImg.src = data.images.internal;
    geologyImg.src = null;
    
  
  });

  interantext2.addEventListener('click', () => {
    planetInfo.textContent = data.structure.content;
    planetImg.src = data.images.internal;
    geologyImg.src = null;
  
  });

  surfaceBtn.addEventListener('click', () => {
    planetInfo.textContent = data.geology.content;
    WikipediaLink.src = data.geology.source;
    planetImg.src = data.images.planet;
    geologyImg.src = data.images.geology;
    
  
});

 surfacetext3.addEventListener('click', () => {
  planetInfo.textContent = data.geology.content;
  planetImg.src = data.images.planet;
  geologyImg.src = data.images.geology;
});

}

getPlanet();