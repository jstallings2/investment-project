//
// Created by camre on 10/3/2020.
//

#include <string>
#include <vector>
#include "Event.h"

Event::Event(std::string name, std::string description, std::vector<std::string> industries,
             std::string modifier_tag, double amount) : eventName(name), eventDescription
             (description), affectedIndustries(industries), modifier_tag(modifier_tag), amount
             (amount) {

}

bool Event::eventOccurredAlready() {
    return hasOccurred;
}

std::string Event::getName() {
    return eventName;
}

std::string Event::getEventDescription() {
    return eventDescription;
}

void Event::setUsed() {
    hasOccurred = true;
}

std::string Event::getModifierTag() {
    return modifier_tag;
}

double Event::getAmount() {
    return amount;
}

std::vector<std::string> Event::getIndustries(){
    return affectedIndustries;
}

