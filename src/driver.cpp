//
// Created by camre on 10/3/2020.
//

#include "../include/EventCollectionHandler.h"
#include "../include/Game.h"

int main() {
  Game GameHandler; // also initializes game and user
  GameHandler.getUser()->printStocks();
  GameHandler.triggerEventExecution();
  GameHandler.getUser()->printStocks();
  return 0;
}