//
// Created by camre on 10/3/2020.
//

#include "../include/Game.h"
#include <chrono>
#include <cstdint>
#include <fstream>
#include <iostream>
#include <thread>

Game::Game() { initializeGame(); }

void Game::initializeGame() { initializeUser(); }

void Game::initializeUser() {
  user = new User();
  initializeUserStocks();
}

void Game::initializeUserStocks() {
  for (int i = 0; i < NUMBER_OF_USER_STOCKS; ++i) {
    user->initStock(stockCollection.getRandomStock());
  }
}

User *Game::getUser() { return user; }

Event *Game::getNextEvent() { return eventCollection.getRandomEvent(); }

void Game::triggerEventExecution() { executeEvent(getNextEvent()); }

void Game::executeEvent(Event *event) {

  std::cout << "Name:" << event->getName() << "\n";
  std::cout << "Description: " << event->getEventDescription() << "\n";

  if (event->getModifierTag() == "PERCENT_MODIFY") {
    for (const std::string &company : event->getIndustries()) {
      for (Stock *stock : stockCollection.getStockCollection()) {
        if (stock->getName() == company) {
          stock->setValue(stock->getValue() * event->getAmount());
        }
      }
    }
  } else if (event->getModifierTag() == "INCREMENT") {
    for (const std::string &company : event->getIndustries()) {
      for (Stock *stock : stockCollection.getStockCollection()) {
        if (stock->getName() == company) {
          stock->setValue(stock->getValue() + event->getAmount());
        }
      }
    }
  } else if (event->getModifierTag() == "DECREMENT") {
    for (const std::string &company : event->getIndustries()) {
      for (Stock *stock : stockCollection.getStockCollection()) {
        if (stock->getName() == company) {
          stock->setValue(stock->getValue() - event->getAmount());
        }
      }
    }
  }
  event->setUsed();
}
