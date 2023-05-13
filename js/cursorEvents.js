AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId: { default: "", type: "string" },
    },
    init:function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvents();
    },
    handleClickEvents: function () {
  
      this.el.addEventListener("click", () => {
        const posterContainer = document.querySelector("#posters-container");
        const { state } = posterContainer.getAttribute("comics-posters");
  
  if (state === "posters-list") {
  const id = this.el.getAttribute("id");
  const postersId = ["superMan", "captainAero", "spiderMan", "outerSpace"
      
          ];
  if (postersId.includes(id)) {
            posterContainer.setAttribute("comics-posters", {
              state: "view",
              selectedCard: id
            });
          }
        }
      });
    },
    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            
         
        const id = this.el.getAttribute("id");
        const postersId = ["superMan", "captainAero", "spiderMan", "outerSpace"];
        if (postersId.includes(id)) {
          const posterContainer = document.querySelector("#posters-container");
          posterContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#000",
            opacity:1
          });
        }
     
    })
   
},
handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "#0000FF",
            opacity: 1,
          });
        }
      }
    });
  },
})