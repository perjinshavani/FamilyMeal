

"use client";

import { useState } from "react";
import toast from "react-hot-toast";

type MealFormProps = {
  onAddMeal: (day: string, meal: string) => void;
};

export default function MealForm({ onAddMeal }: MealFormProps) {
  const [day, setDay] = useState("Monday");
  const [meal, setMeal] = useState("");

 const handleSubmit = () => {
  if (!meal.trim()) {
     toast.error("Please enter a meal", {
    id: "meal-error",
  });
    return;
  }

  onAddMeal(day, meal);
  setMeal("");
};

  return (
    <section className="px-4 sm:px-8 py-8">
<h2 className="mb-5 text-2xl font-bold text-zinc-900">
  Add Meal
</h2>

<form
  onSubmit={(event) => {
    event.preventDefault();
    handleSubmit();
  }}
  className="flex flex-col sm:flex-row sm:items-center gap-4"
>

      <select 
        value={day}
        onChange={(event) => setDay(event.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-3 text-lg"
      >
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>

      <input
        type="text"
        placeholder="Enter meal"
        aria-label="Enter meal"
        value={meal}
        maxLength={30}
        onChange={(event) => setMeal(event.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-3 text-lg"
      />

 <button
  type="submit"
  className="rounded-lg bg-pink-500 px-4 py-2 font-semibold text-white transition hover:bg-pink-600 active:scale-95"
>
  Add
</button>
</form>
    </section>
    
  );
}

