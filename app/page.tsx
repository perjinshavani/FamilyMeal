"use client";

import { useState } from "react";
import MealForm from "./components/MealForm";
import Header from "./components/Header";
import WeeklyMealPlan from "./components/WeeklyMealPlan";
import Footer from "./components/Footer";

export default function Home() {
  const [meals, setMeals] = useState<Record<string, string>>({});
  const [editingDay, setEditingDay] = useState<string | null>(null);
  const [editedMeal, setEditedMeal] = useState("");

  const handleAddMeal = (day: string, meal: string) => {
    setMeals((previousMeals) => ({
      ...previousMeals,
      [day]: meal,
    }));
  };

  const handleEditMeal = (day: string) => {
    setEditingDay(day);
  };

  const handleSaveMeal = () => {
  if (!editingDay || !editedMeal.trim()) return;

  setMeals((previousMeals) => ({
    ...previousMeals,
    [editingDay]: editedMeal,
  }));

  setEditingDay(null);
  setEditedMeal("");
};

  return (
    <main>
      <Header />
    <MealForm onAddMeal={handleAddMeal} />

<WeeklyMealPlan
  meals={meals}
  onEditMeal={handleEditMeal}
  editingDay={editingDay}
  editedMeal={editedMeal}
    onEditedMealChange={setEditedMeal}
      onSaveMeal={handleSaveMeal}
    
/>

      <Footer />
    </main>
  );
}
