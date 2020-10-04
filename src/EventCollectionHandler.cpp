//
// Created by camre on 10/3/2020.
//

#include "EventCollectionHandler.h"
#include "Game.h"
#include <algorithm>
#include <chrono>
#include <thread>

EventCollectionHandler::EventCollectionHandler() { initializeEvents(); }

Event *EventCollectionHandler::getRandomEvent() {
  // Just a really messed up way to grab a random event that hasn't been used
  // yet
  using namespace std::chrono;
  std::this_thread::sleep_for(std::chrono::milliseconds(1));
  auto epoch =
      duration_cast<milliseconds>(system_clock::now().time_since_epoch())
          .count();
  srand(epoch);
  int index = rand() % eventCollection.size();
  while (eventCollection[index]->eventOccurredAlready()) {
    index = rand() % eventCollection.size();
  }
  return eventCollection[index];
}

void EventCollectionHandler::initializeEvents() {

  // PERCENT DECREMENT EVENTS --------------------------------------------------

  std::vector<std::string> industries = {"ADIDAS", "NIKE", "OLD-NAVY", "LEVI"};
  eventCollection.push_back(new Event("Government Outsourcing Tariffs",
                                      "The Senate has moved "
                                      "to raise tariffs on "
                                      "the imports of "
                                      "outsourced clothing "
                                      "manufacturing. All "
                                      "clothing stocks fall.",
                                      industries, "PERCENT_MODIFY", 0.9));

  industries = {"MCDONALDS", "CHIPOTLE"};
  eventCollection.push_back(new Event("E-Coli Outbreak",
                                      "In a large food distribution "
                                      "warehouse, an E-Coli outbreak has "
                                      "been detected. McDonalds and "
                                      "Chipotle stock dips.",
                                      industries, "PERCENT_MODIFY", 0.85));

  industries = {"FORD"};
  eventCollection.push_back(
      new Event("GM Recall",
                "GM has had multiple lawsuits filed against "
                "them in concern with the F-Model pickup "
                "airbags. Ford stock drops.",
                industries, "PERCENT_MODIFY", 0.87));

  industries = {"STARBUCKS", "PEPSI"};
  eventCollection.push_back(new Event("Environmentalist Movements",
                                      "On social media, "
                                      "influencers have "
                                      "condemned Starbucks and "
                                      "Pepsi's use of "
                                      "environmentally-damaging "
                                      "packagings. Starbucks and "
                                      "Pepsi stock dips slightly.",
                                      industries, "PERCENT_MODIFY", 0.95));

  industries = {"YOUTUBE", "MICROSOFT", "APPLE", "GOOGLE"};
  eventCollection.push_back(
      new Event("Anti-Tech Documentary Released",
                "Netflix released a "
                "documentary containing prominent executives discussing the "
                "marketing tactics used by big tech companies, received poorly "
                "by the public. Tech "
                "companies stock drops mildly.",
                industries, "PERCENT_MODIFY", 0.86));

  industries = {"BLOCKBUSTER"};
  eventCollection.push_back(
      new Event("Blockbuster announces bankruptcy",
                "With the "
                "overwhelming emergence of streaming platforms, Blockbuster "
                "finds itself slowly drowning in "
                "negative profits. Blockbuster stock drops substantially.",
                industries, "PERCENT_MODIFY", 0.27));

  industries = {"BMW", "TESLA"};
  eventCollection.push_back(
      new Event("Lithium Scarcity",
                "Leading companies in refinery "
                "firms report that production levels "
                "in Lithium for Lithium-ion batteries are diminishing. "
                "Tesla and BMW's stock drops.",
                industries, "PERCENT_MODIFY", 0.87));

  industries = {"MCDONALDS", "CHIPOTLE", "PEPSI", "STARBUCKS"};
  eventCollection.push_back(new Event(
      "Emerging Virus Concerns",
      "The CDC has announced that a "
      "prominent virus warranting limited capacity in all dining environments "
      "will mandate reduced "
      "capacity in all consumer locations. All dining stocks drop moderately.",
      industries, "PERCENT_MODIFY", 0.85));

  industries = {"TESLA"};
  eventCollection.push_back(new Event("Wrath of Elon",
                                      "Elon Musk cryptically takes to Twitter "
                                      "appraising that Tesla stock is "
                                      "\"overvalued\". Tesla stock drops. ",
                                      industries, "PERCENT_MODIFY", 0.92));

  // END PERCENT DECREMENT EVENTS ----------------------------------------------

  // PERCENT INCREMENT EVENTS --------------------------------------------------

  industries = {"OLD-NAVY", "LEVI"};
  eventCollection.push_back(
      new Event("Year-Long Discount Special",
                "Old Navy and Levi have "
                "announced a year-long special for ordering online clothes at "
                "a discount. Amongst an "
                "incredible sales boost, Old Navy and Levi stock boosts. ",
                industries, "PERCENT_MODIFY", 1.1));

  industries = {"FORD", "TOYOTA"};
  eventCollection.push_back(
      new Event("New Automotive Reveals",
                "Ford recently unveiled their "
                "new F-90,000, boasting 90,000 horsepower. Concurrently, "
                "Toyota unveiled their newest hybrid car "
                "that can drive from California to New York on one gallon of "
                "gas. Both stocks increase "
                "significantly.",
                industries, "PERCENT_MODIFY", 1.23));

  industries = {"ABC"};
  eventCollection.push_back(
      new Event("ABC Acquisition",
                "In a stunning recent announcement, "
                "ABC is being acquired by a larger unnamed company. However, "
                "the CEO of ABC promises it will "
                "be \"huge for morale\". ABC stock increases slightly. ",
                industries, "PERCENT_MODIFY", 1.05));

  industries = {"YOUTUBE", "APPLE"};
  eventCollection.push_back(new Event(
      "iPhone-YouTube Deal",
      "YouTube has finally agreed to let "
      "music play outside of the YouTube application. In addition, Apple "
      "announces to integrate a "
      "software application with YouTube's API. Both stocks increase. ",
      industries, "PERCENT_MODIFY", 1.08));

  industries = {"NIKE", "ADIDAS"};
  eventCollection.push_back(
      new Event("Olympic Games Approaching",
                "With the impending "
                "Olympics, Nike and Adidas have renewed short-term contracts "
                "for substantial athletic-wear "
                "production. Both stocks increase.",
                industries, "PERCENT_MODIFY", 1.12));

  industries = {"WARNER-BROS"};
  eventCollection.push_back(
      new Event("DC Universe",
                "In rivalry with the MCU, Warner Bro's has "
                " announced a lengthy plan of future "
                "releases featuring assorted DC universe "
                "characters. Warner Brothers stock "
                "increases.",
                industries, "PERCENT_MODIFY", 1.12));

  industries = {"MCDONALDS", "STARBUCKS"};
  eventCollection.push_back(new Event("Influencer Attraction",
                                      "With the release of the Travis "
                                      "Scott meal, McDonald's revenue "
                                      "has seen an increase. "
                                      "Similarly, coffee addition has "
                                      "increased with the adjunct "
                                      "\"Charli\" order at Dunkin. "
                                      "Both stocks increase.",
                                      industries, "PERCENT_MODIFY", 1.04));

  industries = {"MICROSOFT", "BMW"};
  eventCollection.push_back(
      new Event("Automotive Software Integration",
                "Microsoft has "
                "recently struck a deal with BMW to integrate their C language "
                "an software applications to be "
                "used for BMW's automotive computations. Both stocks increase.",
                industries, "PERCENT_MODIFY", 1.12));
}
