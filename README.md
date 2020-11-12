# _Dungeons & Dragons_

#### _Team Week 1 Project for Epicodus, September 17th, 2020_

#### By _**William Donovan-Seid, Brian Harvey, David McCaslin, Mike Manchee, and Drew Parker**_

#### Published at: [Dungeons and Dragons](https://mmanchee.github.io/jsDnD/)

## Description

Create a character using a D&D API. Character is then put up against random monsters and NPC's from the D&D API. Battles would have difficulty settings and that would determine the strength and number of monsters you face. Gain experience and advance your character. save characters to your machine with local storage and keep playing. Future thoughts; Story, multi-player, and database.

<!-- Brainstorming
linked at './src/assets/docs/DnD Project.pdf'
 -->
### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|  MVP (Build 1) | ... | MVP |
|  a. Create the Battle Board | start game | battle board |
|  b. MonstersList, use DnD5eapi.co API to create monster list | API call | List |
|  c. Basic Player, Create basic player to play with | start game | player |
|  d. Attack Function, Create a button and attack function | attack | damage |
|  e. Health Function, Create a tag and health function | health change | report |
|  f. Images, All Players and Monsters will have Images | start game | image |
|  g. Flee Function, Create a button and flee function | flee | explore |
|  Build 2 | ... | Build 2 |
|  a. Armor Class Functionality, Introduce AC to Battle | ... | AC |
|  b. 2nd Attack Function, Create a second button and attack function | 2nd attack | damage |
|  c. Healing Potion Functionality, Create a health button and heal function | button | heal player |
|  d. Creature Drops Functionality, Health potions and gold randomly drop from creatures | monster dead | drops |
|  Build 3 | ... | Build 3 |
|  a. Splash Page, Landing page to start the game | open website | start button |
|  b. Character Creation, Create character from scratch (name and class)| start | new player |
|  c. Stats Creation, Add stats and ability change Str, Wis, Int,... | new player| player has stats |
|  d. Leveling Functionality, Add stat point, HP, and Level | Level button | player levels|
|  Build 4 | ... | Build 4 |
|  a. Weapon Bonus Functionality, Add bonus to weapon damage and attack | attack | bonus |
|  b. Armor Bonus Functionality, Add bonus to armor | defend | less hits |
|  Build 5 | ... | Build 5 |
|  a. Town Functionality, Add an area to rest, gain health, and access the store | Town Button | Town |
|  b. Stores Functionality, Add a place to buy health potions and upgrades to armor and weapons | Store| Buy Stuff |
|  Build 6 | ... | Build 6|
|  a. Menu Functionality, Add menu to Travel, go to Town, view character sheet | menu button | menu display |
|  b. Campfire Functionality, Add a campfire to gain health but a chance of monster attack | Camp | Health or Monster |
|  Build 7 and Beyond | ... | Beyond |
|  a. Story, Add a fun story to the adventure | ... | Beyond |
|  b. Quest Board, Add a quest board to the town | ... | Beyond |
|  c. Animations, Add action animations | ... | Beyond |
|  d. Multiplayer, Add other players | ... | Beyond |
|  e. | ... | Beyond |


## Setup/Installation Requirements

* Download option
  * Download files from GitHub repository by click Code and Download Zip
  * Extract files into a single directory 
  * Run GitBASH in directory
    * Type "npm install" - to install Node Package Manager and additional files
    * Type "npm run start" - to open compiled browser and view project
  * Have fun with The Exchange!

* Cloning options
  * For cloning please use the following GitHub [tutorial](https://docs.github.com/en/enterprise/2.16/user/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
  * Place files into a single directory 
  * Run GitBASH in directory
    * Type "npm install" - to install Node Package Manager and additional files
    * Type "npm run start" - to open compiled browser and view project
  * Have fun with The Exchange!

## Known Bugs

* The minus button in the character sheet doesn't work properly.
* The images of the monsters plus the names push outside of their container.

## Technologies Used

Project Specific
* API call with error handling
  * API documentation located [Here](http://www.dnd5eapi.co/)

Main Programs
* HTML
* CSS
  * Bootstrap
* JavaScript
  * JQuery
* NPM 
  * JSON - WebPack Creation


### Other Links
GitHub's
[William Donovan-Seid](https://github.com/wdonovanseid)
[Brian Harvey](https://github.com/brianharv)
[David McCaslin](https://github.com/d-mccaslin)
[Drew Parker](https://github.com/drewjparker91)
[Mike Manchee](https://github.com/mmanchee)


### License

Copyright (c) 2020 **_{William Donovan-Seid, Brian Harvey, David McCaslin, Mike Manchee, and Drew Parker}_**
Licensed under MIT