class Stock {
    // Fields correspond to the json
    _brandName;
    _sector;
    _volatility;
    _growthRate;
    _price;
    _quantity;
  
   
    
    constructor(n, s, v, gr, p) {
        this._brandName = n;
        this._sector = s;
        this._volatility = v;
        this._growthRate = gr;
        this._price = p;
        this._quantity = 1;
    }

    // Getters
    getName() {
        return this._brandName;
    }

    getSector() {
        return this._sector;
    }

    getVolatility() {
        return this._volatility;
    }

    getGrowthRate() {
        return this._growthRate
    }

    getPrice() {
        return this._price;
    }

    getQuantity() {
        return this._quantity;
    }

    // Setters
    setPrice(value) {
        this._price = value;
    }

    setGrowthRate(value) {
        this._growthRate = value;
    }

    setVolatility(value) {
        this._volatility = value;
    }

    setQuantity(value) {
        this._quantity;
    }

    // Other methods

    // Update the price of the stock each second using the growthRate and current price
    // growthRate can be negative
    grow() {
        price(this._growthRate * this._price);
    }

    // This method should be called to change the growthRate based on the volatility of the stock.
    updateGrowthRate() {
        // TODO
        return 0;
    }

    // Method to apply the results of the market event to set the new price/growthRate/volatility.
    applyMarketEvent(event) {
        // TODO
        return 0;
    }

    toString() {
        return  " | Stock Name: " + this._brandName
                + "\n | Stock Sector: " + this._sector
                + "\n | Stock Volatility: " + this._volatility
                + "\n | Stock Growth Rate: " + this._growthRate
                + "\n | Stock Price: " + this._price + " /share ";
    }




}