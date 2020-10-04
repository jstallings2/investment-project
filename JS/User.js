  
  
// Change to make sense
STARTING_CASH_VALUE = 1000.00;
// Number of shares of each stock the user starts with
STARTING_SHARES = 5;

class User {

    constructor() {}



    // an array of ints representing shares
    _userStocks = [];

    // Total user net worth to be calculated from the stocks they hold
    // Doubles as the "score" for this game
    _netWorth = 0;
    // The cash a user has on hand to spend
    _cash = STARTING_CASH_VALUE;

    // Only used at beginning
    initStock(stock) {
        this._userStocks.push(STARTING_SHARES);
    }

    buyStock(stock, shares) {
        this._userStocks.push(Object.freeze({stock:stock, shares:shares}));
    }

    sellStock(stock, shares) {
        // How do we nab the exact stock we want out of the array?
        // Searching algorithm? Is there a more efficient way?
        // TODO
        return 0;
    }

    calculateNetWorth() {
        let total = 0;
        // sum up the prices*shares of all the stocks in hand?
        for (item in _userStocks) {
            // if we go js object route, instead of numbers we would have field names
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