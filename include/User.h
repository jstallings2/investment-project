//
// Created by camre on 10/3/2020.
//

#ifndef INC_2020_HACKATHON_USER_H
#define INC_2020_HACKATHON_USER_H

#include "Stock.h"
#include <vector>

class User {
public:
  User();
  // Used only in beginning to initialize stocks
  void initStock(Stock *stock);
  // Int return price of stock
  int buyStock(Stock *stock);
  // Int return value of stock
  int sellStock(Stock *stock);
  void printStocks();
  std::vector<Stock *> getStockContainer();

private:
  std::vector<Stock *> stockContainer;
  int score = 0;
};

#endif // INC_2020_HACKATHON_USER_H
