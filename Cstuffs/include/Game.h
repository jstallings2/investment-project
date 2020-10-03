//
// Created by camre on 10/3/2020.
//

#ifndef PROJECT1_GAME_H
#define PROJECT1_GAME_H

#include "User.h"

const int NUMBER_OF_USER_STOCKS = 4;

class Game {
public:
  Game();
  User *getUser();
  void initializeGame();
  Stock *getRandomStock();

private:
  User *user;
  void initializeAvailableStocks();
  void initializeUser();
  void initializeUserStocks();

  // contains a vector of all the stocks available in this game
  std::vector<Stock *> stockCollection;
};

#endif // PROJECT1_GAME_H
