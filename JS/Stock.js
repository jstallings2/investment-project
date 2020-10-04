class Stock {
    // Fields correspond to the json
    _brandName;
    _sector;
    _volatility;
    _growthRate;
    _price;
  
   
    
    constructor(n, s, v, gr, p) {
        this._brandName = n;
        this._sector = s;
        this._volatility = v;
        this._growthRate = gr;
        this._price = p;
    }

    // Getters
    get brandName() {
        return this._brandName;
    }

    get sector() {
        return this._sector;
    }

    get volatility() {
        return this._volatility;
    }

    get growthRate() {
        return this._growthRate
    }

    get price() {
        return this._price;
    }

    // Setters
    set price(value) {
        this._price = value;
    }

    set growthRate(value) {
        this._growthRate = value;
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