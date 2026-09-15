# FamilyMeal

## Problem and Target Group

FamilyMeal is a weekly meal planning application that helps users organize their meals from Monday to Sunday.

## Table of Contents

- [Problem and Target Group](#problem-and-target-group)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Local Setup](#local-setup)
- [Known Limitations](#known-limitations)
- [Possible Next Steps](#possible-next-steps)
- [Author](#author)

The application is aimed at families and individuals who want a simple way to plan their weekly meals and get recipe inspiration.
## Features

- Add meals to a weekly meal plan from Monday to Sunday
- Edit existing meals
- Delete meals with confirmation
- Save meals in localStorage so they remain after page refresh
- Search for recipe inspiration using an external API
- Loading, validation and error feedback
- Responsive design for different screen sizes

## Screenshots

<img width="724" height="453" alt="image" src="https://github.com/user-attachments/assets/2a922ca0-d9d7-427a-9bc7-5e701a67c73f" />
<img width="933" height="434" alt="image" src="https://github.com/user-attachments/assets/ebcf0d24-eeab-4622-98b2-9ddc9127ecee" />

<img width="370" height="407" alt="image" src="https://github.com/user-attachments/assets/3e468902-1498-4091-9744-8edae97c7e5b" />
<img width="326" height="397" alt="image" src="https://github.com/user-attachments/assets/79d3abea-1a66-4015-91fb-2a9269640eb7" />


## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hot Toast
- Lucide React
- DummyJSON Recipes API
- localStorage
- Git and GitHub

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/perjinshavani/FamilyMeal.git
```

2. Go to the project folder:

```bash
cd FamilyMeal
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the application in your browser at `http://localhost:3000`.

## Known Limitations

- Meals are stored only in the browser using localStorage and are not synced between devices.
- The application does not have user accounts or a database.
- Recipe search uses the DummyJSON sample API, so search results can sometimes be limited or unexpected.
- Recipe search results are not saved after page refresh.
- Adding a new meal to a day that already has a meal replaces the existing meal.
## Possible Next Steps

- Add user accounts and a database so meal plans can be saved and synced across devices.
- Create a custom recipe collection with around 20 recipes instead of relying only on the external DummyJSON API.
- Allow users to add more than one meal per day.
- Improve the meal editing experience, for example by adding a Cancel option.

## Author

FamilyMeal was created by Perjin Shavani as an individual frontend project.
