// The place I saw this effect:
// https://angle2.agency/

// Red Staper made a NICE tutorial about this effect! You should check it out!
// https://www.youtube.com/watch?v=LgiadQQM6mo&t=5s

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}
var apiKey = "fe6e036a4b5d48e5b2a38bf20975670a"
//top new games referencing 
//https://api.rawg.io/api/games?ordering=-added&dates=2022-08-01,2022-08-31&key=fe6e036a4b5d48e5b2a38bf20975670a


  let newReleaseColt = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/650605?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      //console.log(name, description, background_image);
      
      document.querySelector(".COLT").innerText = "Video Game Title: " + name;
      
      document.querySelector(".colt-image").src = background_image;
    }
  }
  newReleaseColt.fetchNewGame();
  
  let newReleaseTwoPc = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/614967?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      //console.log(name, description, background_image);
      
      document.querySelector(".twoPC-title").innerText = "Video Game Title: " + name;
      
      document.querySelector(".twoPC-image").src = background_image;
    }
  }
  
  newReleaseTwoPc.fetchNewGame();
  
  let newReleaseMFE = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/499258?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      //console.log(name, description, background_image);
      
      document.querySelector(".MFE-title").innerText = "Video Game Title: " + name;
      
      document.querySelector(".MFE-image").src = background_image;
    }
  }
  
  newReleaseMFE.fetchNewGame();
  
  let newReleaseSaintsRow = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/650607?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      //console.log(name, description, background_image);
      
      document.querySelector(".SR-title").innerText = "Video Game Title: " + name;
      
      document.querySelector(".SR-image").src = background_image;
    }
  }
  
  newReleaseSaintsRow.fetchNewGame();
  
  let newReleaseImmort = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/802000?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      //console.log(name, description, background_image);
      
      document.querySelector(".imort-title").innerText = "Video Game Title: " + name;
      
      document.querySelector(".imort-image").src = background_image;
    }
  }
  
  newReleaseImmort.fetchNewGame();
  

//top games referencing..
//https://api.rawg.io/api/games?ordering=-added&dates=2022-01-01,2022-08-31&key=fe6e036a4b5d48e5b2a38bf20975670a
 


  
  let topGamesElden = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/326243?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      //console.log(name, description, background_image);
      
      document.querySelector(".elden-title").innerText = "Video Game Title: " + name;
      
      document.querySelector(".elden-image").src = background_image;
    }
  }
  
  
  
  
  
  
  topGamesElden.fetchNewGame();
  
  let topGamesUnchart = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/704634?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      //console.log(name, description, background_image);
      
      document.querySelector(".unchart-title").innerText = "Video Game Title: " + name;
      
      document.querySelector(".unchart-image").src = background_image;
    }
  }
  
  topGamesUnchart.fetchNewGame();
  
  let topGamesStray = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/452638?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      
      //console.log(name, gameDescription, background_image);
      
      document.querySelector(".stray-title").innerText = "Video Game Title: " + name;
      
      
      
      
      
      document.querySelector(".stray-image").src = background_image;
    }
  }
  
  topGamesStray.fetchNewGame();
  
  let topGamesLostArk = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/372576?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      
      //console.log(name, gameDescription, background_image);
      
      document.querySelector(".la-title").innerText = "Video Game Title: " + name;
      
      
      
      
      
      document.querySelector(".la-image").src = background_image;
    }
  }
  
  topGamesLostArk.fetchNewGame();
  
  let topGamesDLight = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/58758?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      
      //console.log(name, gameDescription, background_image);
      
      document.querySelector(".dlight-title").innerText = "Video Game Title: " + name;
      
      
      
      
      
      document.querySelector(".dlight-image").src = background_image;
    }
  }
  
  topGamesDLight.fetchNewGame();
  



  
  //referencing top games all time 
  //https://api.rawg.io/api/games?key=fe6e036a4b5d48e5b2a38bf20975670a




  
  let topGamesGTA = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/3498?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      
      //console.log(name, gameDescription, background_image);
      
      document.querySelector(".gta-title").innerText = "Video Game Title: " + name;
      
      
      
      
      
      document.querySelector(".gta-image").src = background_image;
    }
  }
  
  topGamesGTA.fetchNewGame();
  
  let topGamesWitcher = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/3328?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      
      //console.log(name, gameDescription, background_image);
      
      document.querySelector(".witcher-title").innerText = "Video Game Title: " + name;
      
      
      
      
      
      document.querySelector(".witcher-image").src = background_image;
    }
  }
  
  topGamesWitcher.fetchNewGame();
  
  let topGamesPortal = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/4200?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      
      //console.log(name, gameDescription, background_image);
      
      document.querySelector(".portal-title").innerText = "Video Game Title: " + name;
      
      
      
      
      
      document.querySelector(".portal-image").src = background_image;
    }
  }
  
  topGamesPortal.fetchNewGame();
  
  let topGamesTomb = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/5286?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      
      //console.log(name, gameDescription, background_image);
      
      document.querySelector(".tomb-title").innerText = "Video Game Title: " + name;
      
      
      
      
      
      document.querySelector(".tomb-image").src = background_image;
    }
  }
  
  topGamesTomb.fetchNewGame();
  
  let topGamesCSGO = {
    fetchNewGame: function() {
      fetch(`https://api.rawg.io/api/games/4291?key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.displayNewGame(data))
      
    },
    
    displayNewGame: function(data) {
      
      const { name } = data;
      const { description } = data;
      const { background_image } = data;
      
      
      
      
      //console.log(name, gameDescription, background_image);
      
      document.querySelector(".csgo-title").innerText = "Video Game Title: " + name;
      
      
      
      
      
      document.querySelector(".csgo-image").src = background_image;
    }
  }
  
  topGamesCSGO.fetchNewGame();
 
  

  
  /*
  $('#playstationButton').on('click', function(e) {
    $('.playstation').toggleClass('.playstation-hide');
    e.preventDefault();
})
*/


