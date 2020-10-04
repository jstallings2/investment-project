//
// Created by camre on 10/3/2020.
//

#ifndef PROJECT1_GAME_H
#define PROJECT1_GAME_H

#include "EventCollectionHandler.h"
#include "StockCollectionHandler.h"
#include "User.h"

const int NUMBER_OF_USER_STOCKS = 4;

class Game {
public:
  Game();
  User *getUser();
  void initializeGame();
  Event *getNextEvent();
  void triggerEventExecution();

private:
  User *user;
  void initializeUser();
  void initializeUserStocks();
  void executeEvent(Event *event);

  // contains all the stocks available in this game
  StockCollectionHandler stockCollection;
  EventCollectionHandler eventCollection;
};

#endif // PROJECT1_GAME_H
