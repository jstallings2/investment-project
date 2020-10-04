//
// Created by camre on 10/3/2020.
//

#include <fstream>
#include <iostream>
#include <Stock.h>
#include "StockCollectionHandler.h"
#include <chrono>
#include <thread>

StockCollectionHandler::StockCollectionHandler() {
    initializeAvailableStocks();
}

void StockCollectionHandler::initializeAvailableStocks() {
        std::ifstream stockFile;
        stockFile.open("../txt/StockList.txt");

        if (!stockFile.is_open()) {
            std::cout << "StockList unable to be found.\n";
            exit(1);
        }

        std::string stockName;
        std::string industry;
        int volatilityValue;
        int growthValue;
        int stockValue;

        // todo a better way to do this would to be initialize the collection of
        // stocks
        //  non-dynamically to limit heap usage but i cant think of an easy way to do
        //  this right now
        while (stockFile >> stockName) {
            stockFile >> industry;
            stockFile >> volatilityValue;
            stockFile >> growthValue;
            stockFile >> stockValue;
            Stock *newStock = new Stock(stockName, industry, volatilityValue,
                                        growthValue, stockValue);
            stockCollection.push_back(newStock);
        }
        stockFile.close();
}

Stock *StockCollectionHandler::getRandomStock() {
        using namespace std::chrono;
        std::this_thread::sleep_for(std::chrono::milliseconds(1));
        auto epoch =
                duration_cast<milliseconds>(system_clock::now().time_since_epoch())
                        .count();
        srand(epoch);
        int index = rand() % stockCollection.size();
        return stockCollection[index];
}
