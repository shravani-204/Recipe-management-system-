# Recipe-management-system-
Overview
This Recipe Management System is a web application where users can search, view, and manage their favorite recipes. The system utilizes an API (TheMealDB) to fetch recipe data, providing features such as search, view details, and store favorite recipes. Users can also download recipe information in a text format.

Features
Recipe Search: Users can search for recipes by name. If no recipes are found, a message is displayed.

Recipe Categories: The app allows filtering recipes by categories, such as Maharashtrian, South Indian, and Italian recipes.

Recipe Details: Clicking on a recipe displays detailed information including ingredients and cooking instructions.

Favorites: Users can mark recipes as favorites, which are stored in the browser’s local storage for future reference.

Download Recipe: Users can download the recipe details (ingredients and instructions) in a .txt format.

Responsive Design: The web application is designed to be responsive, providing a great user experience on both mobile and desktop devices.

Project Structure
bash
Copy
.
├── index.html          # Main HTML structure
├── index.css           # Stylesheet for the project
├── index.js            # JavaScript functionality
└── images/             # Folder containing images like recipe images and logos
Technologies Used
HTML5: Structure and content of the webpage.

CSS3: Styling for the user interface. Includes responsive design and animations.

JavaScript: Client-side scripting for dynamic content, handling user interactions such as search, display, and favorite functionality.

API (TheMealDB): Provides recipe data (search, categories, details).

Bootstrap: For responsive layout and pre-built UI components.

Instructions to Run
Clone the repository:
Clone this project to your local machine using the following command:

bash
Copy
git clone https://github.com/your-username/recipe-management-system.git
Open the index.html file:
Navigate to the project folder and open the index.html file in a web browser.

Start searching and interacting with the system:
You can search for recipes, view details, mark favorites, and download recipes.

Features in Detail
1. Search Recipes
The search bar at the top of the page allows users to search for recipes by name.

The app will fetch data from TheMealDB API based on the search term, displaying a list of matching recipes.

If no results are found, a message will appear informing the user.

2. Recipe Cards
The app displays featured recipes in cards with an image, title, and a link to view the recipe.

Each recipe card links to the recipe's detailed view when clicked.

3. Recipe Details
Clicking on a recipe card opens a detailed view showing the ingredients, instructions, and other information about the recipe.

Users can click on a "Favorite" button to mark recipes as their favorite. This information is stored in the browser's local storage.

4. Download Recipe
After viewing the recipe details, users can download the recipe as a .txt file by clicking the "Download Recipe" button.

5. Responsive Design
The website is fully responsive and adapts to different screen sizes, ensuring that users have a seamless experience on both desktop and mobile devices.

6. Favorites Management
Users can mark recipes as favorites, which are saved in the browser's local storage. The system keeps track of favorite recipes across page reloads.

7. Error Handling
If no recipes are found based on the search term or selected category, an alert message will be displayed to the user.

API Integration
This system uses TheMealDB API to fetch recipe data:

Search: https://www.themealdb.com/api/json/v1/1/search.php?s={query}

Filter by Category: https://www.themealdb.com/api/json/v1/1/filter.php?c={category}

Recipe Details: https://www.themealdb.com/api/json/v1/1/lookup.php?i={idMeal}

Example Workflow
Search: The user types a recipe name (e.g., "Spaghetti") into the search bar.

Display Results: The system fetches relevant results from TheMealDB and displays them as recipe cards.

View Recipe Details: Clicking on a recipe card opens a detailed view of the recipe, showing ingredients and instructions.

Mark Favorite: The user can mark the recipe as a favorite by clicking the "❤️ Favorite" button. This action stores the favorite recipe in local storage.

Download Recipe: The user clicks the "Download Recipe" button to save the recipe in a .txt format.

Responsive Layout: The layout adjusts automatically based on the screen size, providing an optimal viewing experience on mobile devices.

JavaScript Functions
searchMeals(): Handles the search functionality. It fetches and displays recipes based on the user’s input.

filterCategory(): Filters recipes by category (e.g., Italian, Maharashtrian).

details(): Displays detailed information about a selected recipe.

downloadRecipe(): Allows users to download the recipe details in a .txt format.

toggleFavorite(): Adds or removes a recipe from the user’s favorites, stored in local storage.

Future Enhancements
User Authentication: Allow users to create an account and save their favorite recipes across sessions.

Comments & Ratings: Allow users to leave comments and rate recipes.

More Categories: Expand the list of categories or allow users to create their own custom categories.

Print Recipe: Add an option to print the recipe.

SEARCH THE TASTY RECIPES AND ENJOY IT ...!
