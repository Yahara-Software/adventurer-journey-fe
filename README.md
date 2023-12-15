# Adventurer Journey - Front End
The candidate should fork the main branch. After completing their work they will compress (zip) their code and submit back to the storage bucket linked in the email.

They will follow the story instructions below to create a User interface for an adventurers journey around a map. This should take no longer than a few hours. It is not intended to perseverate over the problem but to create a common talking point.

*Please use whatever languages, references and tooling you would like to complete the story. We have included a basic React and Parcel app to jumpstart the setup process but it is not required to use. Follow the setup instructions below to set it up.*

## Setup Instructions
The following instructions are only needed if you would like to use the basic React/Parcel app. Otherwise skip to the story instructions.
- App Setup - [./docs/App Setup.md](./docs/App%20Setup.md)
- Run Application - [./docs/Run Application.md](./docs/Run%20Application.md)

## Story Instructions
Create a User Interface to track an adventurers journey through an undiscovered area. The goal is to create an interface where you can choose and adventurer and show their path around the map. 

Using the provided wireframe create a user interface to display an adventurers journey across the map. **Take as much creative license** in the design as you wish. At the minimum it should be functional, display relevant information, and be easy to use.

There are 2 main views:

### 1) Select an Adventurer
Create a button for each of the adventurers in the example below. Clicking this will select the adventurer whose path you will display in the next view.

Example Adventurer Paths & Instructions - [./docs/resources/Example Adventurer Paths.md](./docs/resources/Example%20Adventurer%20Paths.md)

![./docs/resources/adventurers_path_choose_adventurer.jpg](./docs/resources/adventurers_path_choose_adventurer.jpg)

### 2) Display a previous Adventurers path on the map
You will create a button that calls a function to “fake” an api return of a previous adventurers instructions. This will return one of the `Example Adventurer Paths` linked above in the first view. Using the instructions, display on the map the pathway the adventurer took, including starting and ending points.

Create a button and functionality to clear the map back to a fresh state (Clear Path). Additionally, create a button to return the first view to select a different adventurer (New Adventurer). Lastly a button to display the selected adventurer's path (Load Adventurer).

![./docs/resources/adventurers_path_view_path.jpg](./docs/resources/adventurers_path_view_path.jpg)

**Tech Notes:**
- Use any resources or tools you would like.
- Fake api calls do not actually need to interact with Fetch or an api. They are just functions to fake return and save functionality.
- Adventurer will start in the middle of the map
- The map must be big enough to display the entire route without looping to the other side.