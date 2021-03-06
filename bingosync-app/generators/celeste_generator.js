bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "All Berries in Awake (1)", types: ["2a_berries","earlygame"] },
  { name: "Talk to Theo in Crossing", types: ["cutscene","earlygame"] },
  { name: "Talk to Theo in Elevator Shaft", types: ["cutscene"] },
  { name: "Forsaken City Heart", types: ["hearts","earlygame"] },
  { name: "Forsaken City Cassette", types: ["1b","earlygame"] },
  { name: "All Berries in Presidential Suite (3)", types: ["3a_berries"] },
  { name: "Grabless Presidential Suite (3A Checkpoint)", types: ["grabless"] },
];
bingoList[2] = [
  { name: "2 optional Theo Cutscenes", types: ["cutscene"] },
  { name: "3 optional Theo Cutscenes", types: ["cutscene"] },
  { name: "Talk to Theo in Awake", types: ["cutscene","earlygame"] },
  { name: "Read the Poem in Awake", types: ["cutscene","earlygame"] },
  { name: "Take hidden path before Cliff Face", types: ["task"] },
  { name: "All Berries in Unraveling (1)", types: ["5a_berries"] },
  { name: "All Berries in Rescue (1)", types: ["5a_berries"] },
];
bingoList[3] = [
  { name: "Stun Oshiro 10 times", types: ["oshiro_stun","task"] },
  { name: "Stun Oshiro 15 times", types: ["oshiro_stun","task"] },
  { name: "Hit a Kevin block from all 4 sides", types: ["task"] },
  { name: "Easteregg room in Reflection", types: ["task","lategame"] },
  { name: "All Berries in Crossing (9)", types: ["1a_berries","earlygame"] },
  { name: "All Berries in Chasm (5)", types: ["1a_berries","earlygame"] },
  { name: "Grabless Huge Mess (3A Checkpoint)", types: ["grabless"] },
];
bingoList[4] = [
  { name: "Complete Awake without dashing", types: ["dashless","earlygame"] },
  { name: "Read Diary in Elevator Shaft", types: ["cutscene"] },
  { name: "Celestial Resort Cassette", types: ["3b"] },
  { name: "All Berries in Start of 4A (8)", types: ["4a_berries"] },
  { name: "All Berries in Shrine (9)", types: ["4a_berries"] },
  { name: "All Berries in Old Trail (7)", types: ["4a_berries"] },
  { name: "All Berries in Start of 1A (6)", types: ["1a_berries","earlygame"] },
];
bingoList[5] = [
  { name: "Talk to Theo in Search", types: ["cutscene"] },
  { name: "All 4 optional Theo Cutscenes", types: ["cutscene"] },
  { name: "Reflection Cutscene in Hollows", types: ["cutscene","lategame"] },
  { name: "Old Site Heart", types: ["hearts","earlygame"] },
  { name: "All Berries in Start of 3A (11)", types: ["3a_berries"] },
  { name: "10 Berries in 3A", types: ["3a_berries","amount_berries"] },
  { name: "Grabless Depths (5A Checkpoint)", types: ["grabless"] },
];
bingoList[6] = [
  { name: "Complete 1 B-Side", types: ["amount_chapters"] },
  { name: "Complete 5 A-Sides", types: ["amount_chapters"] },
  { name: "Kill a Seeker", types: ["seeker","task"] },
  { name: "Kill 2 Seekers", types: ["seeker","task"] },
  { name: "Stun 10 Seekers", types: ["seeker","task"] },
  { name: "10 Berries in 4A", types: ["4a_berries","amount_berries"] },
  { name: "20 Berries in 4A", types: ["4a_berries","amount_berries"] },
];
bingoList[7] = [
  { name: "Complete 2 B-Sides", types: ["amount_chapters"] },
  { name: "Complete Chasm without dashing", types: ["dashless","earlygame"] },
  { name: "Complete Crossing without dashing", types: ["dashless","earlygame"] },
  { name: "All Berries in 0M (4)", types: ["7a_berries","lategame"] },
  { name: "All Berries in 500M (6)", types: ["7a_berries","lategame"] },
  { name: "Grabless Elevator Shaft (3A Checkpoint)", types: ["grabless"] },
  { name: "Grabless 3A", types: ["grabless"] },
];
bingoList[8] = [
  { name: "Reach Old Site in PICO-8", types: ["pico-8"] },
  { name: "Get the Orb in PICO-8", types: ["pico-8"] },
  { name: "Stun Oshiro 25 times", types: ["task"] },
  { name: "Get 1 Key in Search", types: ["search","task"] },
  { name: "All Berries in Search (6)", types: ["5a_berries"] },
  { name: "All Berries in Cliff Face (5)", types: ["4a_berries"] },
  { name: "Only bottom route in Hollows", types: ["reflection_pathing","lategame"] },
];
bingoList[9] = [
  { name: "Use 3 Binoculars in B-Sides", types: ["binoculars"] },
  { name: "Use 4 Binoculars in B-Sides", types: ["binoculars"] },
  { name: "Stun 20 Seekers", types: ["seeker","task"] },
  { name: "Stun 30 Seekers", types: ["seeker","task"] },
  { name: "Only top route in Hollows", types: ["reflection_pathing","lategame"] },
  { name: "Find Letter and PICO-8 in Huge Mess", types: ["task"] },
  { name: "Golden Ridge Heart", types: ["hearts"] },
];
bingoList[10] = [
  { name: "Grabless 2A", types: ["grabless","earlygame"] },
  { name: "Grabless 1A", types: ["grabless","earlygame"] },
  { name: "Grabless Rock Bottom (6A Checkpoint)", types: ["grabless","lategame"] },
  { name: "Get a 1-Up", types: ["1up"] },
  { name: "All Berries in 1000M (6)", types: ["7a_berries","lategame"] },
  { name: "All Berries in 3000M (7)", types: ["7a_berries","lategame"] },
  { name: "All Berries in Huge Mess (7)", types: ["3a_berries"] },
];
bingoList[11] = [
  { name: "Huge Mess: Chest -> Books -> Towel", types: ["huge_mess_pathing"] },
  { name: "Huge Mess: Books -> Chest -> Towel", types: ["huge_mess_pathing"] },
  { name: "Huge Mess: Towel -> Chest -> Books", types: ["huge_mess_pathing"] },
  { name: "No shortcut in 5A double bubble room", types: ["task"] },
  { name: "10 Berries in 1A", types: ["1a_berries","amount_berries"] },
  { name: "Use all Binoculars in 4A (3)", types: ["task","binoculars"] },
  { name: "Use 5 Binoculars in B-Sides", types: ["binoculars"] },
];
bingoList[12] = [
  { name: "Huge Mess: Chest -> Towel -> Books", types: ["huge_mess_pathing"] },
  { name: "Huge Mess: Books -> Towel -> Chest", types: ["huge_mess_pathing"] },
  { name: "Huge Mess: Towel -> Books -> Chest", types: ["huge_mess_pathing"] },
  { name: "Destroy 8 Snowballs", types: ["snowballs","task"] },
  { name: "Celestial Resort Heart", types: ["hearts"] },
  { name: "10 Berries in 2A", types: ["2a_berries","amount_berries"] },
  { name: "Get 1 Blue and 1 Red Heart", types: ["amount_hearts"] },
];
bingoList[13] = [
  { name: "0M and 500M Gems", types: ["gems","lategame"] },
  { name: "1000M and 1500M Gems", types: ["gems","lategame"] },
  { name: "2000M and 2500M Gems", types: ["gems","lategame"] },
  { name: "Old Site B-Side", types: ["2b"] },
  { name: "Old Site Cassette", types: ["2b","earlygame"] },
  { name: "20 Berries", types: ["amount_berries"] },
  { name: "Mirror Temple Heart", types: ["hearts"] },
];
bingoList[14] = [
  { name: "2 Cassettes", types: ["amount_cassettes"] },
  { name: "3 Cassettes", types: ["amount_cassettes"] },
  { name: "Get 5 Berries in PICO-8", types: ["pico-8"] },
  { name: "Reflection Cassette", types: ["6b","lategame"] },
  { name: "Golden Ridge Cassette", types: ["4b"] },
  { name: "Use 5 Binoculars", types: ["binoculars"] },
  { name: "Use 6 Binoculars", types: ["binoculars"] },
];
bingoList[15] = [
  { name: "2 Hearts", types: ["amount_hearts"] },
  { name: "3 Hearts", types: ["amount_hearts"] },
  { name: "Mirror Temple B-Side", types: ["5b"] },
  { name: "All Berries in Depths (11)", types: ["5a_berries"] },
  { name: "Mirror Temple Cassette", types: ["5b"] },
  { name: "Get 10 Berries in PICO-8", types: ["pico-8"] },
  { name: "18 Berries in 2A", types: ["2a_berries","amount_berries"] },
];
bingoList[16] = [
  { name: "4 Hearts", types: ["amount_hearts"] },
  { name: "5 Hearts", types: ["amount_hearts"] },
  { name: "3 Gems in The Summit", types: ["gems","lategame"] },
  { name: "4 Gems in The Summit", types: ["gems","lategame"] },
  { name: "5 Gems in the Summit", types: ["gems","lategame"] },
  { name: "20 Berries in 1A", types: ["1a_berries","amount_berries"] },
  { name: "25 Berries in 3A", types: ["3a_berries","amount_berries"] },
];
bingoList[17] = [
  { name: "4 Cassettes", types: ["amount_cassettes"] },
  { name: "5 Cassettes", types: ["amount_cassettes"] },
  { name: "Complete 3 B-Sides", types: ["amount_chapters"] },
  { name: "10 Berries in 5A", types: ["5a_berries","amount_berries"] },
  { name: "20 Berries in 5A", types: ["5a_berries","amount_berries"] },
  { name: "Grabless Unraveling (5A Checkpoint)", types: ["grabless"] },
  { name: "Grabless Search (5A Checkpoint)", types: ["grabless"] },
];
bingoList[18] = [
  { name: "Winged Golden Berry", types: ["dashless","earlygame"] },
  { name: "Complete 4 B-Sides", types: ["amount_chapters"] },
  { name: "6 Hearts", types: ["amount_hearts"] },
  { name: "7 Hearts", types: ["amount_hearts"] },
  { name: "All Berries in 1500M (8)", types: ["7a_berries","lategame"] },
  { name: "All Berries in 2000M (8)", types: ["7a_berries","lategame"] },
  { name: "All Berries in 2500M (8)", types: ["7a_berries","lategame"] },
];
bingoList[19] = [
  { name: "Complete PICO-8", types: ["pico-8"] },
  { name: "Destroy 15 Snowballs", types: ["snowballs","task"] },
  { name: "Destroy 20 Snowballs", types: ["snowballs","task"] },
  { name: "Reflection Heart", types: ["hearts","lategame"] },
  { name: "25 Berries", types: ["amount_berries"] },
  { name: "30 Berries", types: ["amount_berries"] },
  { name: "Get 2 Blue and 2 Red Hearts", types: ["amount_hearts"] },
];
bingoList[20] = [
  { name: "All Flags in 3000M", types: ["task","lategame"] },
  { name: "Get 2 Keys in Search", types: ["search","task"] },
  { name: "Golden Ridge B-Side", types: ["4b"] },
  { name: "All Berries in Elevator Shaft (4)", types: ["3a_berries"] },
  { name: "Grabless 6A", types: ["grabless","lategame"] },
  { name: "All Berries in Start of 2A (9)", types: ["2a_berries","earlygame"] },
  { name: "All Berries in Intervention (8)", types: ["2a_berries","earlygame"] },
];
bingoList[21] = [
  { name: "Get two 1-Ups", types: ["1up"] },
  { name: "Get three 1-Ups", types: ["1up"] },
  { name: "35 Berries", types: ["amount_berries"] },
  { name: "40 Berries", types: ["amount_berries"] },
  { name: "Forsaken City B-Side", types: ["1b"] },
  { name: "The Summit Cassette", types: ["7b","lategame"] },
  { name: "Talk to Old Lady in Core", types: ["core"] },
];
bingoList[22] = [
  { name: "Grabless Cliff Face (4A Checkpoint)", types: ["grabless"] },
  { name: "20 Berries in 7A", types: ["7a_berries","amount_berries","lategame"] },
  { name: "35 Berries in 7A", types: ["7a_berries","amount_berries","lategame"] },
  { name: "Reflection B-Side", types: ["6b","lategame"] },
  { name: "All Berries in Start of 5A (12)", types: ["5a_berries"] },
  { name: "45 Berries", types: ["amount_berries"] },
  { name: "50 Berries", types: ["amount_berries"] },
];
bingoList[23] = [
  { name: "All Berries in Into the Core (1)", types: ["8a_berries","core","lategame"] },
  { name: "All Berries in Hot and Cold (3)", types: ["8a_berries","core","lategame"] },
  { name: "All Berries in Heart of the Mountain (1)", types: ["8a_berries","core","lategame"] },
  { name: "29 Berries in 4A", types: ["4a_berries","amount_berries"] },
  { name: "Use 7 Binoculars", types: ["binoculars"] },
  { name: "Use 8 Binoculars", types: ["binoculars"] },
  { name: "Get 3 Keys in Search", types: ["search","task"] },
];
bingoList[24] = [
  { name: "65 Berries", types: ["amount_berries"] },
  { name: "75 Berries", types: ["amount_berries"] },
  { name: "Don't skip final 4A Cutscene", types: ["task"] },
  { name: "Celestial Resort B-Side", types: ["3b"] },
  { name: "31 Berries in 5A", types: ["5a_berries","amount_berries"] },
  { name: "Use 9 Binoculars", types: ["binoculars"] },
  { name: "Use 10 Binoculars", types: ["binoculars"] },
];
bingoList[25] = [
  { name: "The Summit Heart", types: ["hearts","lategame"] },
  { name: "100 Berries", types: ["amount_berries"] },
  { name: "5 Berries in 8A", types: ["8a_berries","core","lategame"] },
  { name: "Clear Core", types: ["core","lategame"] },
  { name: "47 Berries in 7A", types: ["7a_berries","amount_berries","lategame"] },
  { name: "Complete 5 B-Sides", types: ["amount_chapters"] },
  { name: "The Summit B-Side", types: ["7b","lategame"] },
];
