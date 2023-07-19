## RecipeApp
RecipeApp is a web application that allows users to search for recipes based on ingredients. Users can enter the ingredients they have on hand, and the app will provide them with a list of recipes that can be made using those ingredients. This project is built using React and utilizes the Edamam Recipe Search API.

## Installation
To run the RecipeApp project locally, please follow these steps:

1. Clone the repository: git clone https://github.com/rahimunshaik/RecipeApp.git
2. Navigate to the project directory: cd RecipeApp
3. Install the dependencies: npm install
4. Create an account on https://developer.edamam.com and obtain your API key and ID.
5. Open the src/utils/api.js file and replace the following lines with your API key and ID: const API = {
  APP_ID: "YOUR_APP_ID",
  APP_KEY: "YOUR_APP_KEY",
  ROOT_URL: "https://api.edamam.com"
};
6. Start the development server: npm start
7. Open your browser and visit http://localhost:3000 to view the RecipeApp.

## Usage
Enter the ingredients you have in the search bar and press Enter or click on the search button.
RecipeApp will display a list of recipes that can be made using the entered ingredients.
Click on a recipe to view more details, including the ingredients and instructions.
You can also filter the recipes based on dietary preferences using the provided checkboxes.

## Contributing
If you'd like to contribute to RecipeApp, please follow these steps:

Fork the repository on GitHub.
Create a new branch with a descriptive name.
Make your changes in the codebase.
Commit your changes with an informative commit message.
Push your branch to your forked repository.
Submit a pull request detailing the changes you made and why they should be included.

## Credits
RecipeApp was created by Shaik Rahimun. It utilizes the following technologies and libraries:

React - JavaScript library for building user interfaces.
Edamam Recipe Search API - API for searching and retrieving recipe information.


## License
The RecipeApp project is licensed under the MIT License.

## Demo
You can access a live demo of the RecipeApp here: https://7y9y1h.csb.app/

## Screenshots
To view the screenshots please go throught the links
![Home Page](https://github.com/rahimunshaik/RecipeApp/assets/88622657/afe57c95-baec-4455-aacc-6b7de42dd0a0)
![Enter your food/Recepie](https://github.com/rahimunshaik/RecipeApp/assets/88622657/7b56c15b-934f-4624-98e1-66a6f4ce51ba)
![Result view](https://github.com/rahimunshaik/RecipeApp/assets/88622657/8ed4a93a-9381-477e-b879-99d17d88e3e7) 


## Feedback and Support
If you have any feedback, suggestions, or issues, please contact [esarahimun@gmail.com]. Your feedback is highly appreciated.

## Acknowledgements
I would like to acknowledge the following resources and individuals for their contributions and support during the development of this project:

### React - A JavaScript library for building user interfaces.
### Edamam Recipe Search API - API used for searching and retrieving recipe information.
### Create React App - Tool for quickly setting up a React project.
### React Router - Library for routing in React applications.
### Axios - Promise-based HTTP client for making API requests.
### Material-UI - React component library for building UI components with Material Design.
### GitHub - Version control and collaboration platform.

