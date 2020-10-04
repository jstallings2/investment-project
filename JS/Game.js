class Game {

    // JS object for holding stocks
    stockList = [
        {
            "brandName": "Adidas",
            "sector": "clothing",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/CLOTHING_ADIDAS.png"
        },
    
        {
            "brandName": "Nike",
            "sector": "clothing",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/CLOTHING_NIKE.png"
        },
    
        {
            "brandName": "Old Navy",
            "sector": "clothing",
            "volatility": 1,
            "growthRateRate": 1,
            "price": 0.00,
            "imagePath":"../assets/CLOTHING_OLD_NAVY.png"
        },
        {
            "brandName": "Levi",
            "sector": "clothing",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/CLOTHING_LEVI.png"
        },
        {
            "brandName": "Toyota",
            "sector": "auto",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/AUTO_TOYOTA.png"
        },
        {
            "brandName": "Ford",
            "sector": "auto",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/AUTO_FORD.png"
        },
        {
            "brandName": "BMW",
            "sector": "auto",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/AUTO_BMW.png"
        },
        {
            "brandName": "Tesla",
            "sector": "auto",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/AUTO_TESLA.png"
        },
    
        {
            "brandName": "YouTube",
            "sector": "tech",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/TECH_YOUTUBE.png"
        },
    
    
        {
            "brandName": "Microsoft",
            "sector": "tech",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/TECH_MICROSOFT.png"
        },
    
        {
            "brandName": "Apple",
            "sector": "tech",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/TECH_APPLE.png"
        },
    
        {
            "brandName": "Google",
            "sector": "tech",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/TECH_GOOGLE.png"
        },
    
    
        {
            "brandName": "Pepsi",
            "sector": "dining",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/DINING_PEPSI.png"
        },
    
    
        {
            "brandName": "McDonald's",
            "sector": "dining",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/DINING_MCDONALDS.png"
        },
    
    
        {
            "brandName": "Chipotle",
            "sector": "dining",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/DINING_CHIPOTLE.png"
        },
    
    
        {
            "brandName": "Starbucks",
            "sector": "dining",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/DINING_STARBUCKS.png"
        },
    
        {
            "brandName": "Warner Bros.",
            "sector": "entertainment",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/ENTERTAINMENT_WARNER_BROS.png"
        },
    
        {
            "brandName": "NBC",
            "sector": "entertainment",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/ENTERTAINMENT_NBC.png"
        },
    
        {
            "brandName": "Blockbuster",
            "sector": "entertainment",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/ENTERTAINMENT_BLOCKBUSTER.png"
        },
    
        {
            "brandName": "Disney",
            "sector": "entertainment",
            "volatility": 1,
            "growthRate": 1,
            "price": 0.00,
            "imagePath":"../assets/ENTERTAINMENT_DISNEY.png"
        }
    ]

    NUMBER_OF_USER_STOCKS = 4;

    // FIELDS
    // public
    _user;


    // private
    // Field to hold the list of available stocks in the game
    _availableStocks = [];


    // METHODS
    // public:
    constructor() {
        intitializeGame();
    }

    intitializeGame() {
        initializeAvailableStocks();
        initializeUser();
    }

    initializeAvailableStocks() {
        for(item of stockList) {
            // Initialize a Stock object and push it to the field array
            // TODO: Write Stock constructor
            let newStock = new Stock(
                                    item.brandName, 
                                    item.sector, 
                                    item.volatility,
                                    item.growthRate, 
                                    item.price);
            this._availableStocks.push(newStock)
        }
    }

    initializeUser() {
        this._user = new User();
        initializeUserStocks();
    }

    initializeUserStocks() {
        for (let i = 0; i < this.NUMBER_OF_USER_STOCKS; i++) {
            this._user.initStock(getRandomStock())
        }
    }

    get user() {
        return this._user;
    }

    // Test: array out of bounds exception is never thrown
    getRandomStock() {
        // There was a lot of C++ std::chrono stuff here
        // Wasn't sure how to do that in JS so leaving it out for now

        // Should we make sure to also remove this stock from the list of available stocks?
        return this._availableStocks[Math.floor(Math.random() * this._availableStocks.length)];
        // remove stock from available
    }

    
}