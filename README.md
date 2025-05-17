# MealCategoriesApp

A React Native application for browsing and managing a list of meal categories and their corresponding recipes. This app
utilizes React Navigation for navigation, Redux for state management, and Expo for cross-platform development.

<p align="center">
  <img src="screenshots/1%20Screenshots%20of%20the%20Home%20Screen%20-%20Android.png" alt="Home screen of the app on Android" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/1%20Screenshots%20of%20the%20Home%20Screen%20-%20iOS.png" alt="Home screen of the app on iOS" width="45%" />
</p>
<p align="center"><em>Figure 1: Home screen of the app on Android and iOS platforms.</em></p>

<p align="center">
  <img src="screenshots/2%20Screenshot%20of%20the%20Italian%20Category%20-%20Android.png" alt="Italian category screen on Android" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/2%20Screenshot%20of%20the%20Italian%20Category%20-%20iOS.png" alt="Italian category screen on iOS" width="45%" />
</p>
<p align="center"><em>Figure 2: Italian category screen displaying relevant meals on Android and iOS.</em></p>

<p align="center">
  <img src="screenshots/3%20Screenshot%20of%20MealDetails%20-%20Android.png" alt="Meal details screen on Android" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/3%20Screenshot%20of%20MealDetails%20-%20iOS.png" alt="Meal details screen on iOS" width="45%" />
</p>
<p align="center"><em>Figure 3: Meal details page showing ingredients and steps on Android and iOS.</em></p>

<p align="center">
  <img src="screenshots/4%20Screenshot%20of%20the%20Light%20&%20Lovely%20Category%20-%20Android.png" alt="Light & Lovely category screen on Android" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/4%20Screenshot%20of%20the%20Light%20&%20Lovely%20Category%20-%20iOS.png" alt="Light & Lovely category screen on iOS" width="45%" />
</p>
<p align="center"><em>Figure 4: Light & Lovely category showcasing healthy meal options on Android and iOS.</em></p>

<p align="center">
  <img src="screenshots/5%20Screenshot%20of%20the%20Drawer%20-%20Android.png" alt="Navigation drawer on Android" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/5%20Screenshot%20of%20the%20Drawer%20-%20iOS.png" alt="Navigation drawer on iOS" width="45%" />
</p>
<p align="center"><em>Figure 5: Navigation drawer with links to different app sections on Android and iOS.</em></p>

<p align="center">
  <img src="screenshots/6%20Screenshot%20of%20the%20Favourite%20Meals%20Page%20-%20Android.png" alt="Favourite meals page on Android" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/6%20Screenshot%20of%20the%20Favourite%20Meals%20Page%20-%20iOS.png" alt="Favourite meals page on iOS" width="45%" />
</p>
<p align="center"><em>Figure 6: Favourite meals page allowing users to save preferred dishes on Android and iOS.</em></p>

## Key Features

* **Category Browsing:** Browse through a list of meal categories with visually appealing tiles.
* **Meal Listing:** View a detailed list of meals within each category.
* **Meal Details:**  Access detailed information for each meal, including ingredients, preparation steps, and cooking
  time.
* **Favorites Management:** Add and remove meals from your favorites list.  (Functionality implemented using Redux)
* **Responsive Design:** Adapts to different screen sizes and orientations.

## Technologies Used

* **React Native:**  Framework for building native mobile apps using JavaScript.
* **Expo:**  A framework and a set of tools built around React Native to simplify development and deployment.
* **React Navigation:**  Library for navigation within the app.
* **Redux:**  Predictable state container for JavaScript apps.
* **Redux Toolkit:** Simplifies Redux development.
* **@expo/vector-icons:** For using Ionicons.

## Prerequisites

* **Node.js and npm (or yarn):**  Ensure you have Node.js and npm (or yarn) installed on your system. You can download
  them from [https://nodejs.org/](https://nodejs.org/).
* **Expo CLI:** Install the Expo CLI globally: `npm install -g expo-cli`
* **Android Studio (for Android development):**  If you intend to build for Android, install Android
  Studio.  [https://developer.android.com/studio](https://developer.android.com/studio)
* **Xcode (for iOS development):** If you intend to build for iOS, install
  Xcode. [https://developer.apple.com/xcode/](https://developer.apple.com/xcode/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd mealcategoriesapp
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   This will launch the Expo Go app on your connected device or emulator, or open the web interface if you choose to run
   on a web browser. Select your preferred platform (Android, iOS, or web).

## Usage Examples

* **Navigate to a meal category:**  Upon launch, the app displays a grid of meal categories. Tap on a category to see
  the list of meals in that category.
* **View meal details:**  On the meal list screen, tap on a meal to view its details.
* **Add/remove favorites:** The meal detail screen includes a star icon in the header. Tap this icon to add or remove
  the meal from your favorites. Your favorites are persisted across sessions.
* **View Favorites:** Use the drawer navigation to view your list of favorite meals.

## Project Structure

The project is structured as follows:

```
mealcategoriesapp/
├── assets/          // Images and other assets
├── components/      // Reusable UI components
│   ├── MealDetail/  // Components specifically for meal details
│   └── ...
├── data/            // Dummy data for the app
├── models/          // Data models (Category, Meal)
├── screens/         // Screens of the application
├── store/           // State management (Redux)
│   ├── context/    // (Commented out) Previous implementation using context API
│   └── redux/       // Redux store and reducers
├── App.js           // Main application component
├── app.json         // Expo configuration file
├── index.js         // Entry point of the application
├── package.json     // Project dependencies
└── .prettierrc      // Prettier configuration
```

## Scripts (package.json)

* `"start"`: Starts the Expo development server.
* `"android"`: Starts the Expo development server, targeting Android.
* `"ios"`: Starts the Expo development server, targeting iOS.
* `"web"`: Starts the Expo development server, targeting the web.

## Configuration (app.json)

The `app.json` file contains configuration for the Expo app, including the app's name, slug, version, icons, and splash
screen. You can modify these settings to customize your app's appearance.

## License

### Disclaimer

This repository contains code created while following the course  
**"React Native - The Practical Guide"** by **Academind** and **Maximilian Schwarzmüller**,  
available at: [O’Reilly Learning Platform](https://learning.oreilly.com/course/react-native-/9781789139747/)

The content is intended for educational purposes only and closely follows the structure and lessons from the original
course.

All rights to the course content and materials belong to **Academind GmbH** and **Maximilian Schwarzmüller**.  
This repository is not affiliated with or endorsed by Academind or O’Reilly.

If you are the content owner and would like this repository modified or removed, please contact me directly.

## Error Handling

This README provides a comprehensive overview of the GuessingGame application. For more details, refer to the individual
files within the codebase.
