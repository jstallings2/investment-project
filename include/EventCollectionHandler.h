//
// Created by camre on 10/3/2020.
//

#ifndef PROJECT1_EVENTCOLLECTIONHANDLER_H
#define PROJECT1_EVENTCOLLECTIONHANDLER_H

#include "Event.h"

class EventCollectionHandler {
public:
  EventCollectionHandler();
  Event *getRandomEvent();

private:
  void initializeEvents();
  std::vector<Event *> eventCollection;
};
#endif // PROJECT1_EVENTCOLLECTIONHANDLER_H
