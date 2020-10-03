//
// Created by camre on 10/3/2020.
//

#include "../include/User.h"
#include <iostream>

User::User() {}

void User::initStock(Stock *stock) {
  // Get 4 random stocks, regardless (or maybe with regard?) to industry.
  // Possible to get 4
  // stocks of all same industry, or zero of a certain industry
  stockContainer.push_back(stock);
}

int User::buyStock(Stock *stock) {
  // todo
  (void)stock;
  return 0;
}

int User::sellStock(Stock *stock) {
  // todo
  (void)stock;
  return 0;
}

void User::printStocks() {
  for (Stock *stock : stockContainer) {
    std::cout << "| Stock Name: " << stock->getName()
              << " | Stock Sector: " << stock->getSector()
              << " | Stock Volatility: " << stock->getVolatility()
              << " | Stock Growth Rate: " << stock->getGrowthRate()
              << " | Stock Value: " << stock->getValue() << "\n";
  }
}