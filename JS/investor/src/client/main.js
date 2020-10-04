"use strict";

import startTemplate from "./views/start.ejs";
import profileTemplate from "./views/profile.ejs";
import instructionsTemplate from "./views/Instructions.ejs";
import marketTemplate from "./views/market.ejs";
import autoSectorTemplate from "./views/autoSector.ejs";
import clothingSectorTemplate from "./views/clothingSector.ejs";
import techSectorTemplate from "./views/techSector.ejs";
import diningSectorTemplate from "./views/diningSector.ejs";
import entertainmentSectorTemplate from "./views/entertainmentSector.ejs";
import "./base.css";

/*************************************************************************/

class MyApp {
  /*
   * Initialize everything and set the initial page
   */
  constructor() {
    const stList = {stocks: [
      {
        "brandName": "Adidas",
        "sector": "clothing",
        "volatility": 1,
        "growthRate": 1,
        "price": 4.00,
        "imagePath":"../assets/CLOTHING_ADIDAS.png",
        "quantity": 0
      },

      {
        "brandName": "Nike",
        "sector": "clothing",
        "volatility": 1,
        "growthRate": 1,
        "price": 7.00,
        "imagePath":"../assets/CLOTHING_NIKE.png",
        "quantity": 0
      },

      {
        "brandName": "Old Navy",
        "sector": "clothing",
        "volatility": 1,
        "growthRateRate": 1,
        "price": 1.50,
        "imagePath":"../assets/CLOTHING_OLD_NAVY.png",
        "quantity": 0
      },
      {
        "brandName": "Levi",
        "sector": "clothing",
        "volatility": 1,
        "growthRate": 1,
        "price": 2.00,
        "imagePath":"../assets/CLOTHING_LEVI.png",
        "quantity": 0
      },
      {
        "brandName": "Toyota",
        "sector": "auto",
        "volatility": 1,
        "growthRate": 1,
        "price": 8.00,
        "imagePath":"../assets/AUTO_TOYOTA.png",
        "quantity": 0.0
      },
      {
        "brandName": "Ford",
        "sector": "auto",
        "volatility": 1,
        "growthRate": 1,
        "price": 3.00,
        "imagePath":"../assets/AUTO_FORD.png",
        "quantity": 0
      },
      {
        "brandName": "BMW",
        "sector": "auto",
        "volatility": 1,
        "growthRate": 1,
        "price": 10.00,
        "imagePath":"../assets/AUTO_BMW.png",
        "quantity": 0
      },
      {
        "brandName": "Tesla",
        "sector": "auto",
        "volatility": 1,
        "growthRate": 1,
        "price": 13.00,
        "imagePath":"../assets/AUTO_TESLA.png",
        "quantity": 0
      },

      {
        "brandName": "YouTube",
        "sector": "tech",
        "volatility": 1,
        "growthRate": 1,
        "price": 11.00,
        "imagePath":"../assets/TECH_YOUTUBE.png",
        "quantity": 0
      },


      {
        "brandName": "Microsoft",
        "sector": "tech",
        "volatility": 1,
        "growthRate": 1,
        "price": 14.00,
        "imagePath":"../assets/TECH_MICROSOFT.png",
        "quantity": 0
      },

      {
        "brandName": "Apple",
        "sector": "tech",
        "volatility": 1,
        "growthRate": 1,
        "price": 15.00,
        "imagePath":"../assets/TECH_APPLE.png",
        "quantity": 0
      },

      {
        "brandName": "Google",
        "sector": "tech",
        "volatility": 1,
        "growthRate": 1,
        "price": 18.00,
        "imagePath":"../assets/TECH_GOOGLE.png",
        "quantity": 0
      },


      {
        "brandName": "Pepsi",
        "sector": "dining",
        "volatility": 1,
        "growthRate": 1,
        "price": 22.00,
        "imagePath":"../assets/DINING_PEPSI.png",
        "quantity": 0
      },


      {
        "brandName": "McDonald's",
        "sector": "dining",
        "volatility": 1,
        "growthRate": 1,
        "price": 15.00,
        "imagePath":"../assets/DINING_MCDONALDS.png",
        "quantity": 0
      },


      {
        "brandName": "Chipotle",
        "sector": "dining",
        "volatility": 1,
        "growthRate": 1,
        "price": 9.00,
        "imagePath":"../assets/DINING_CHIPOTLE.png",
        "quantity": 0
      },


      {
        "brandName": "Starbucks",
        "sector": "dining",
        "volatility": 1,
        "growthRate": 1,
        "price": 20.00,
        "imagePath":"../assets/DINING_STARBUCKS.png",
        "quantity": 0
      },

      {
        "brandName": "Warner Bros.",
        "sector": "entertainment",
        "volatility": 1,
        "growthRate": 1,
        "price": 20.00,
        "imagePath":"../assets/ENTERTAINMENT_WARNER_BROS.png",
        "quantity": 0
      },

      {
        "brandName": "NBC",
        "sector": "entertainment",
        "volatility": 1,
        "growthRate": 1,
        "price": 18.00,
        "imagePath":"../assets/ENTERTAINMENT_NBC.png",
        "quantity": 0
      },

      {
        "brandName": "Blockbuster",
        "sector": "entertainment",
        "volatility": 1,
        "growthRate": 1,
        "price": 27.00,
        "imagePath":"../assets/ENTERTAINMENT_BLOCKBUSTER.png",
        "quantity": 0
      },

      {
        "brandName": "Disney",
        "sector": "entertainment",
        "volatility": 1,
        "growthRate": 1,
        "price": 26.00,
        "imagePath":"../assets/ENTERTAINMENT_DISNEY.png",
        "quantity": 0
      }
    ]};
    this.mStocks = new stocks(stList);
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

  setUpStockBuyingAndSelling(start) {
    for (let i = start; i < start + 4; ++i) {
      document.getElementById(`buy${this.mStocks.stockList.stocks[i].brandName}`).addEventListener('click', (e) => {
        e.preventDefault();
        let bQty = document.getElementById(`buy${this.mStocks.stockList.stocks[i].brandName}Ammt`).value;
        if (bQty === "" || bQty < 1) {
          document.getElementsByClassName("error")[0].innerText = "Error, you must buy at least one share";
        } else if (bQty * this.mStocks.stockList.stocks[i].price > this.mStocks.cash) {
          document.getElementsByClassName("error")[0].innerText = "Error, not enough cash for this purchase";
        } else {
          this.mStocks.buy(this.mStocks.stockList.stocks[i].brandName, bQty);
          this.setRoute("/game")
        }
      });
      document.getElementById(`sell${this.mStocks.stockList.stocks[i].brandName}`).addEventListener('click', (e) => {
        e.preventDefault();
        let sQty = document.getElementById(`sell${this.mStocks.stockList.stocks[i].brandName}Ammt`).value;
        if (sQty === "" || sQty < 1) {
          document.getElementsByClassName("error")[0].innerText = "Error, you must sell at least one share";
        } else if (sQty > this.mStocks.stockList.stocks[i].quantity) {
          document.getElementsByClassName("error")[0].innerText = "Error, you don't own this many shares";
        } else {
          this.mStocks.sell(this.mStocks.stockList.stocks[i].brandName, sQty);
          this.setRoute("/game")
        }
      });
    }
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
        const profileContent = profileTemplate(this.mStocks.stockList);
        // Modify the DOM with the generated content
        main.innerHTML = profileContent;
        document.getElementById("toMarket").addEventListener('click', () => {
          this.setRoute("/market");
        });
        document.getElementById("Cash").innerText += this.mStocks.cash;
        document.getElementById("Net").innerText += this.mStocks.net;
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
            this.setRoute(`/market/${sectors[i].innerText}`);
          });
        }
        break;
      case "/market/Auto":
        const autoContent = autoSectorTemplate(this.mStocks.stockList);
        main.innerHTML = autoContent;
        document.getElementById("auto-cancel").addEventListener('click',() => {
          this.setRoute("/market");
        });
        this.setUpStockBuyingAndSelling(4);
        break;
      case "/market/Clothing":
        const clothingContent = clothingSectorTemplate(this.mStocks.stockList);
        main.innerHTML = clothingContent;
        document.getElementById("cloth-cancel").addEventListener('click',() => {
          this.setRoute("/market");
        });
        this.setUpStockBuyingAndSelling(0);
        break;
      case "/market/Tech":
        const techContent = techSectorTemplate(this.mStocks.stockList);
        main.innerHTML = techContent;
        document.getElementById("tech-cancel").addEventListener('click',() => {
          this.setRoute("/market");
        });
        this.setUpStockBuyingAndSelling(8);
        break;
      case "/market/Entertainment":
        const entertainmentContent = entertainmentSectorTemplate(this.mStocks.stockList);
        main.innerHTML = entertainmentContent;
        document.getElementById("entertainment-cancel").addEventListener('click',() => {
          this.setRoute("/market");
        });
        this.setUpStockBuyingAndSelling(16);
        break;
      case "/market/Dining":
        const diningContent = diningSectorTemplate(this.mStocks.stockList);
        main.innerHTML = diningContent;
        document.getElementById("dining-cancel").addEventListener('click',() => {
          this.setRoute("/market");
        });
        this.setUpStockBuyingAndSelling(12);
        break;
    }
  }
}

class stocks {
  constructor(list) {
    this.stockList = list;
    this.cash = 500.00;
    this.net = 500.00;
    this.holdings = 0.00;
  }

  buy(name, ammt) {
    this.stockList.stocks.forEach(stk => {
      if (stk.brandName === name) {
        stk.quantity += 1 * ammt;
        this.cash -= (stk.price * ammt);
        this.holdings += (stk.price * ammt);
      }
    });
  }

  sell(name, ammt) {
    this.stockList.stocks.forEach(stk => {
      if (stk.brandName === name) {
        stk.quantity -= 1 * ammt;
        this.cash += (stk.price * ammt);
        this.holdings -= (stk.price * ammt);
      }
    });
  }
}

/*************************************************************************/

// Invoke the new app
new MyApp();
