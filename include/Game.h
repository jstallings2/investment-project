//
// Created by camre on 10/3/2020.
//

#ifndef PROJECT1_GAME_H
#define PROJECT1_GAME_H

#include "User.h"
#include "StockCollectionHandler.h"

const int NUMBER_OF_USER_STOCKS = 4;

class Game {
public:
  Game();
  User *getUser();
  void initializeGame();

private:
  User *user;
  void initializeUser();
  void initializeUserStocks();

  // contains all the stocks available in this game
  StockCollectionHandler stockCollection;
};

#endif // PROJECT1_GAME_H
