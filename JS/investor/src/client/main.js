"use strict";

import startTemplate from "./views/start.ejs";
import profileTemplate from "./views/profile.ejs";
import instructionsTemplate from "./views/Instructions.ejs";
import marketTemplate from "./views/market.ejs";
import "./base.css";

/*************************************************************************/

class MyApp {
  /*
   * Initialize everything and set the initial page
   */
  constructor() {
    // Just some data we want to play with
    this.data = { header: "Lets invest!" };
    // This will be called when use presses back button in browser
    window.onpopstate = () => {
      console.log('Popping history');
      this.setRoute(window.location.pathname);
    };
    // Route the path when the app first loads
    this.setRoute(window.location.pathname);
  }

  /*
   * Handle setting a new route
   * @param route: string - url of page we want to display
   */
  async setRoute(route) {
    // Do we need to save a new path?
    if (route !== window.location.pathname) {
      // Push to history
      window.history.pushState({}, "", route);
    }
    let main = document.getElementById("mainDiv");
    // Figure out what view to render
    switch (route) {
      case "/index.html":
      case "/":
        // Render the landing template
        const landingContent = startTemplate(this.data);
        // Modify the DOM with the generated content
        main.innerHTML = landingContent;
        document.getElementById("instructions-But").addEventListener('click', () => {
          this.setRoute("/instructions");
        });
        document.getElementById("start-But").addEventListener('click', () => {
          this.setRoute("/game");
        });
        break;

      case "/instructions":
        //const res = await fetch("/instructionData", {method: "GET"});
        //const insts = await res.json();
        const instructions = {instructions: ["The goal of the game is to make as much money as possible",
            "You make money by trading stocks, you may buy and sell stocks",
            "There are a number of market events that will occur throughout the game, invest accordingly",
            "There is a daily news blurb that will include a risky stock, a safe play and an up and coming stock",
            "Have fun!"]};
        const instructionsContent = instructionsTemplate(instructions);
        main.innerHTML = instructionsContent;
        document.getElementById("backToMenu").addEventListener('click', () => {
          this.setRoute("/");
        });
        break;

      case "/game":
        // Render the profile template
        const myList = { data: [1, 2, 3, 4, 5] };
        const profileContent = profileTemplate(myList);
        // Modify the DOM with the generated content
        main.innerHTML = profileContent;
        document.getElementById("toMarket").addEventListener('click', () => {
          this.setRoute("/market");
        });
        break;
      case "/market":
        const sectorList = {sector: ["Auto", "Clothing", "Dining", "Entertainment", "Tech"]};
        const marketContent = marketTemplate(sectorList);
        main.innerHTML = marketContent;
        document.getElementById("backToPortfolio").addEventListener('click', () => {
          this.setRoute("/game");
        });
        const sectors = document.getElementsByClassName("sector-item");
        for (let i = 0; i < sectors.length; ++i) {
          sectors[i].addEventListener('click', () => {
            console.log(sectors[i].innerText);
            this.setRoute(`/sector/${sectors[i].innerText}`);
          });
        }
        break;
    }
  }
}

/*************************************************************************/

// Invoke the new app
new MyApp();
