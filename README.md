# Adventurer Journey - Front End


## Story Instructions
Create a User Interface to track an adventurers journey through an undiscovered area. The goal is to create an interface that can show a previous adventurers path around the map, as well as manually input directions to a new adventurer and save that path. There are 2 main views requested:

### Display a previous Adventurers path on the map (2 hrs)
Using the provided wireframe create a user interface to display an adventurers journey across the map. Take as much creative liscense in the design as you wish. At the minimum it should be functional, display relevant information, and be easy to use.

You will create a button that calls a function to “fake” an api return of a previous adventurers instructions. This will return one of the attached JSON instructions.

Using the instructions display on the map the pathway the adventurer took. including starting and ending points.

Additionally create a button and functionality to clear the map back to a fresh state.

Adventurer Path Instructions - [./docs/resources/Example Adventurer Paths.md](./docs/resources/Example Adventurer Paths.md)
![./docs/resources/adventurers_path_create_new.jpg](./docs/resources/adventurers_path_create_new.jpg)

### Create a new Adventurers path through manual input (2 hrs)
Using the previously created functionality add the ability to manually move the adventurer around the map. This should be another view from the one listed above. Create buttons to toggle between the 2 views. (see wireframes)

You will need to create buttons and functions to move the adventurer and store past moves. There is also a button to “save” the adventurers path. This will “fake” the api functionality and console.log the JSON instructions to be stored.

![./docs/resources/adventurers_path_load_previous.jpg](./docs/resources/adventurers_path_load_previous.jpg)

**Tech Notes:**
- Use whichever languages and tools you would like. (For reference: Yahara’s typical stack is React / Typescript / HTML / SASS)
- Adventurer will start in the middle of the map
- The map must be big enough to display the entire route without looping to the other side.
- The 2 views can share assets (like the map and clear button)



