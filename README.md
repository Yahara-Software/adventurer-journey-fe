# Adventurer Journey - Front End
The candidate should have a branch created for them. They will follow the setup instructions and story instructions below to create a User interface for an adventurers journey around a map. This should take no longer than a few hours. It is not intended to perseverate over the problem but to create a common talking point.

*Remember - This is a basic React application setup with Parcel.js. Please use whatever references and tooling you would like to complete the story.*

## Setup Instructions
- App Setup - [./docs/App Setup.md](./docs/resources/App%20Setup.md)
- Run Application - [./docs/Run Application.md](./docs/resources/Run%20Application.md)

## Story Instructions
Create a User Interface to track an adventurers journey through an undiscovered area. The goal is to create an interface that can show a previous adventurers path around the map, as well as manually input directions to a new adventurer and save that path. There are 2 main views requested:

### 1) Display a previous Adventurers path on the map
Using the provided wireframe create a user interface to display an adventurers journey across the map. **Take as much creative liscense** in the design as you wish. At the minimum it should be functional, display relevant information, and be easy to use.

You will create a button that calls a function to “fake” an api return of a previous adventurers instructions. This will return one of the `Example Adventurer Paths` linked below.

Using the instructions, display on the map the pathway the adventurer took. including starting and ending points.

Additionally create a button and functionality to clear the map back to a fresh state.

Example Adventurer Paths & Instructions - [./docs/resources/Example Adventurer Paths.md](./docs/resources/Example%20Adventurer%20Paths.md)

![./docs/resources/adventurers_path_create_new.jpg](./docs/resources/adventurers_path_create_new.jpg)

### 2) Create a new Adventurers path through manual input
Using the previously created functionality add the ability to manually move the adventurer around the map. This should be another view from the one listed above. Create buttons to toggle between the 2 views. (see wireframes)

You will need to create buttons and functions to move the adventurer and store past moves. There is also a button to “save” the adventurers path. This will fake an api save that will instead console.log the stored instructions.

![./docs/resources/adventurers_path_load_previous.jpg](./docs/resources/adventurers_path_load_previous.jpg)

**Tech Notes:**
- Use resources or tools you would like.
- Fake api calls do not actually need to interact with Fetch or an api. They are just functions to fake return and save functionality.
- Adventurer will start in the middle of the map
- The map must be big enough to display the entire route without looping to the other side.
- The 2 views *can* share assets (like the map and clear button)