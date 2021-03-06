//
// Created by camre on 10/3/2020.
//

#ifndef PROJECT1_EVENT_H
#define PROJECT1_EVENT_H

#include "User.h"
#include <string>
#include <vector>

class Event {
public:
  Event() = delete;
  Event(std::string name, std::string description,
        std::vector<std::string> affectedCompanies, std::string modifier_tag,
        double amount);
  bool eventOccurredAlready();
  void setUsed();
  std::string getName();
  std::string getEventDescription();
  std::string getModifierTag();
  std::vector<std::string> getIndustries();
  double getAmount();

private:
  std::string eventName;
  std::string eventDescription;
  std::vector<std::string> affectedCompanies;
  // MODIFIER_TAGS = {INCREMENT_PERCENT, DECREMENT_PERCENT, INCREMENT,
  // DECREMENT};
  std::string modifier_tag;
  double amount;

  bool hasOccurred = false;
};

#endif // PROJECT1_EVENT_H
