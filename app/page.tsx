
"use client";

import { useState } from "react";
import MealForm from "./components/MealForm";
import Header from "./components/Header";
import WeeklyMealPlan from "./components/WeeklyMealPlan";
import Footer from "./components/Footer";




export default function Home() {
  const [meals, setMeals] = useState<Record<string, string>>({});

  const handleAddMeal = (day: string, meal: string) => {
    setMeals((previousMeals) => ({
      ...previousMeals,
      [day]: meal,
    }));
  };

  return (
    <main>
      <Header />
      <MealForm onAddMeal={handleAddMeal} />
      <WeeklyMealPlan meals={meals} />
      <Footer />
    </main>
  );
}