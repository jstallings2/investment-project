"use strict";

import landingTemplate from "./views/landing.ejs";
import profileTemplate from "./views/profile.ejs";
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
  setRoute(route) {
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
        const landingContent = landingTemplate(this.data);
        // Modify the DOM with the generated content
        main.innerHTML = landingContent;
        document.getElementById("change").addEventListener('click', () => {
          this.setRoute("/profile");
        });
        break;
      case "/profile":
        // Render the profile template
        const myList = { data: [1, 2, 3, 4, 5] };
        const profileContent = profileTemplate(myList);
        // Modify the DOM with the generated content
        main.innerHTML = profileContent;
        document.getElementById("backToLanding").addEventListener('click', () => {
          this.setRoute("/");
        });
        break;
    }
  }
}

/*************************************************************************/

// Invoke the new app
new MyApp();
