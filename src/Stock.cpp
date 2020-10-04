//
// Created by camre on 10/3/2020.
//

#include "../include/Stock.h"

Stock::Stock(std::string stockName, std::string sector, double baseVolatility,
             double baseGrowthRate, double value)
    : name(stockName), sector(sector), volatility(baseVolatility),
      growthRate(baseGrowthRate), value(value) {}

std::string Stock::getName() { return name; }

std::string Stock::getSector() { return sector; }

double Stock::getVolatility() { return volatility; }

double Stock::getGrowthRate() { return growthRate; }

double Stock::getValue() { return value; }

void Stock::setValue(double mod) { value = mod; }

void Stock::setGrowthRate(double mod) { growthRate = mod; }

void Stock::setVolatility(double mod) { volatility = mod; }
