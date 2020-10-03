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

void Game::initializeGame() {
  initializeUser();

}

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