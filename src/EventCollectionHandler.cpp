//
// Created by camre on 10/3/2020.
//

#include "EventCollectionHandler.h"
#include "Game.h"
#include <chrono>
#include <thread>
#include <algorithm>


EventCollectionHandler::EventCollectionHandler() {
    initializeEvents();
}

Event *EventCollectionHandler::getRandomEvent() {
    //Just a really messed up way to grab a random event that hasn't been used yet
    using namespace std::chrono;
    std::this_thread::sleep_for(std::chrono::milliseconds(1));
    auto epoch =
            duration_cast<milliseconds>(system_clock::now().time_since_epoch())
                    .count();
    srand(epoch);
    int index = rand() % eventCollection.size();
    while (eventCollection[index]->eventOccurredAlready()){
        index = rand() % eventCollection.size();
    }
    return eventCollection[index];
}

void EventCollectionHandler::initializeEvents() {
    std::vector<std::string> industries = {"CLOTHING"};
    eventCollection.push_back(new Event("Government Outsourcing Tariffs", "The Senate has moved "
                                                                          "to raise tariffs on "
                                                                          "the imports of "
                                                                          "outsourced clothing "
                                                                          "manufacturing. All "
                                                                          "clothing stocks fall."
                                                                          , industries,
                                                                          "PERCENT_MODIFY", 0.9));
}
