//
// Created by camre on 10/3/2020.
//

#ifndef PROJECT1_STOCKCOLLECTIONHANDLER_H
#define PROJECT1_STOCKCOLLECTIONHANDLER_H

#include <vector>
#include "Stock.h"

class StockCollectionHandler {
public:
  StockCollectionHandler();
  void initializeAvailableStocks();
  Stock *getRandomStock();
  std::vector<Stock *> getStockCollection();

private:
  std::vector<Stock *> stockCollection;
};

#endif // PROJECT1_STOCKCOLLECTIONHANDLER_H
