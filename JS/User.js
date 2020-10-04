  
  
// Change to make sense
STARTING_CASH_VALUE = 500.00;
// Number of shares of each stock the user starts with
STARTING_SHARES = 5;

class User {

    constructor() {}



    // an array of Stock objects
    _stockContainer = [];

    // Total user net worth to be calculated from the stocks they hold
    // Doubles as the "score" for this game
    _netWorth = 0;
    // The cash a user has on hand to spend
    _cash = STARTING_CASH_VALUE;

    // Only used at beginning
    initStock(stock) {
        this._stockContainer.push(stock);
    }

    buyStock(stock, shares) {
        stock.setQuantity(stock.getQuantity() + shares);
        this._stockContainer.push(stock);
        // Make sure the user has enough money
        if(this._cash >= shares * price) {
            this._cash -= shares*price;
        }
        else{
            console.log("You do not have enough cash to perform this transaction...\n")
            console.log("Max number of shares: " + Math.floor(this._cash / shares) + "\n");
        }
        this._netWorth = this.calculateNetWorth();
        
    }

    sellStock(stock, shares) {
        for(item of this._stockContainer) {
            if (item.getName() === stock) {
                shares = Math.min(shares, item.getQuantity());
                item.setQuantity(stock.getQuantity() - shares);
                if(item.getQuantity() === 0) {
                    removeStock()
                }
            }
        }
    }

    calculateNetWorth() {
        let total = 0;
        // sum up the prices*shares of all the stocks in hand?
        for (item in this._stockContainer) {
            total += (item.stock.price() * item.shares); 
       }

       return total;
    }

    printStocks() {
        for (item of this._userStocks) {
            console.log(item.stock.toString());
        }
    }
}