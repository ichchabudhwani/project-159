AFRAME.registerComponent("comics-posters", {
  schema: {
    state: { type: "string", default: "places-list" },
    selectedCard: { type: "string", default: "#card1" },
    
  },
  
  init: function () {
    this.postersContainer = this.el;
    this.createCards()
    
  },
  tick: function () {
    const { state } = this.el.getAttribute("comics-posters");

    if (state === "view") {
      this.hideEl([this.posterContainer]);
      this.showView();
    }
  },
  hideEl: function (elList) {
    elList.map(el => {
      el.setAttribute("visible", true);
    });
  },

  showView: function () {
    const { selectedCard } = this.data;

    const skyEl = document.querySelector("#posters-container");

    skyEl.setAttribute("material", {
      src: `./assets/360-degree-imgs/${selectedCard}/-place-0.jpg`,
      color: "pink"
    });
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "superMan",
        title: "super man",
        url: "./assets/thumbnails/superman.jpeg",
      },
      {
        id: "captainAero",
        title: "captain Aero",
        url: "./assets/thumbnails/captainaero.jpeg",
      },

      {
        id: "spiderMan",
        title: "SpiderMan",
        url: "./assets/thumbnails/spiderman.jpeg",
      },
      {
        id: "outerSpace",
        title: "Outer Space",
        url: "./assets/thumbnails/outerspace.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;
      
         // Border Element
         const borderEl = this.createBorder(position, item.id);
  
         // Thumbnail Element
         const thumbNail = this.createPoster(item);
         borderEl.appendChild(thumbNail);
   
         // Title Text Element
         const titleEl = this.createTitleEl(position, item);
         borderEl.appendChild(titleEl);
        
         //const fadeBackgroundEl=("fade-background")
         //borderEl.appendChild(fadeBackgroundEl)
      this.postersContainer.appendChild(borderEl);
    
    }
  },
  
 // Border Element
 createBorder: function (position, id) {
  const entityEl = document.createElement("a-entity");
  entityEl.setAttribute("id", id);
  entityEl.setAttribute("visible", true);
  entityEl.setAttribute("geometry", {
    primitive: "plane",
    height:40,
    width: 23,
  });
  entityEl.setAttribute("position", position);
  entityEl.setAttribute("material", {
    color: "#0000FF",
    opacity: 1,
  });

  entityEl.setAttribute("cursor-listener",{})
  return entityEl;
},
// Thumbnail Element
createPoster: function (item) {
  const entityEl = document.createElement("a-entity");
  entityEl.setAttribute("visible", true);
  entityEl.setAttribute("geometry", {
    primitive: "plane",
   width: 20,
   height:28
  });
  entityEl.setAttribute("position",{x:0,y:5,z:0.1})
  entityEl.setAttribute("material", { src: item.url });

  return entityEl;
},

// Title Text Element
createTitleEl: function (position, item) {
  const entityEl = document.createElement("a-entity");
  entityEl.setAttribute("text", {
    font: "exo2bold",
    align: "center",
    width: 70,
    color: "#e65100",
    value: item.title,
  });
  const elPosition = position;
  elPosition.y = -20;
  entityEl.setAttribute("position", elPosition);
  entityEl.setAttribute("visible", true);
  
  return entityEl;
},
});
 