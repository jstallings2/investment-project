class StockCollection {

    _stockCollection;

    constructor() {
        initializeAvailableStocks();
    }

    // Moved from Game
    initializeAvailableStocks() {
        for(item of Game.stockList) {
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


    // Test: array out of bounds exception is never thrown
    getRandomStock() {
        // There was a lot of C++ std::chrono stuff here
        // Wasn't sure how to do that in JS so leaving it out for now

        // Should we make sure to also remove this stock from the list of available stocks?
        return this._availableStocks[Math.floor(Math.random() * this._availableStocks.length)];
        // remove stock from available
    }

    getStockCollection() {
        return this._stockCollection;
    }

}