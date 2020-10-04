//
// Created by camre on 10/3/2020.
//

#ifndef PROJECT1_STOCK_H
#define PROJECT1_STOCK_H

#include <string>

class Stock {
public:
  Stock() = delete;
  Stock(std::string stockName, std::string sector, double baseVolatility,
        double baseGrowthRate, double value);
  std::string getName();
  std::string getSector();
  double getVolatility();
  double getGrowthRate();
  double getValue();
  void setValue(double mod);
  void setGrowthRate(double mod);
  void setVolatility(double mod);

private:
  std::string name;
  std::string sector;
  double volatility;
  double growthRate;
  double value;
};

#endif // PROJECT1_STOCK_H
