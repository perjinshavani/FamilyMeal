# Product Requirements Document (PRD) - FamilyMeal

## 1. Project Overview

FamilyMeal is a web application for families who want to plan their weekly meals in a simple way.

Users can plan meals from Monday to Sunday and search for recipe ideas from an external REST API for inspiration.
# Product Requirements Document (PRD) - FamilyMeal

## 1. Project Overview

FamilyMeal is a web application for families who want to plan their weekly meals in a simple way.

Users can plan meals from Monday to Sunday and search for recipe ideas from an external REST API for inspiration.

## 2. Target User

FamilyMeal is mainly for families and parents who want an easy way to plan meals for the whole week.

The family can plan their meals together, for example during the weekend, and see what they are going to eat from Monday to Sunday.

## 3. Problem

It can be difficult to decide what to cook every day.

FamilyMeal helps families plan meals in advance and get a clear overview of the week.

If they do not know what to cook, they can search for recipe ideas for inspiration.
## 4. Main User Flow

1. The user opens FamilyMeal.
2. The user can search for recipe ideas for inspiration.
3. The user chooses a day of the week.
4. The user writes a meal.
5. The user clicks Add.
6. The meal is shown in the weekly meal plan.
7. The user can edit or delete the meal.

Example:

Monday → Fish and potatoes → Add

Tuesday → Lasagna → Add

## 5. User Stories

- As a user, I want to search for recipe ideas so that I can get inspiration.
- As a user, I want to choose a day and add a meal so that I can plan my week.
- As a user, I want to see all meals from Monday to Sunday so that I have a clear overview.
- As a user, I want to edit a meal if my plans change.
- As a user, I want to delete a meal if I no longer need it.
## 6. MVP

The first version of FamilyMeal will include:

- Search for recipe ideas using an external REST API.
- Show recipe image and recipe tittle.
- Choose a day from Monday to Sunday.
- Write a meal.
- Add a meal to the weekly meal plan.
- Show the weekly meal plan from Monday to Sunday.
- Edit a meal.
- Delete a meal.
- Show the current week number.
- Show loading, error, and no results messages when searching for recipes.
- Responsive design for mobile and desktop.
## 7. Future Features

If Version 1 is finished and there is enough time, I can add:

- Filter recipes by difficulty, for example easy recipes.
- Filter recipes by diet, for example vegan recipes.
- User login and accounts.
- Database.
- Recipe details.
- Recipe ingredients.
- Cooking instructions.
- Save recipes as favorites.
## 8. Tech Stack

FamilyMeal will be built with:

- Next.js
- React
- TypeScript
- Tailwind CSS
- External REST API for recipe ideas
- localStorage for saving the weekly meal plan
- Git and GitHub for version control
## 9. Data Storage

The weekly meal plan will be saved in localStorage.

This means the meals are saved in the user's browser and can still be there after the page is refreshed.

For Version 1, FamilyMeal will not use a database or user login.
## 10. Design

The design of FamilyMeal is inspired by a school meal schedule, where it is easy to see the meal for each day of the week.

The application will have a simple one-page layout with:

- A header with the FamilyMeal name and current week number.
- A recipe search section for inspiration.
- A form to choose a day and add a meal.
- A weekly meal plan from Monday to Sunday.
- Edit and Delete buttons for each meal.

The colors will be inspired by NICK'S website, using pink, light pink, cream/beige, white, and dark text.

The design should be simple, clear, and responsive for both mobile and desktop.
## 11. Risks and Limitations

The biggest risk is making the project too large by adding too many features.

For this reason, I will focus on finishing Version 1 before adding more features.

The recipe API may also have limitations depending on what data and search options it provides.

localStorage only saves the weekly meal plan in the user's browser. The same data will not automatically be available on another device.

If Version 1 is finished and there is enough time, I can continue with the Future Features.