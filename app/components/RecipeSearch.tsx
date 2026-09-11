"use client";
import Image from "next/image";

import { useState } from "react";

type Recipe = {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  difficulty: string;
  prepTimeMinutes: number;
};

export default function RecipeSearch() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

 const handleSearch = async () => {
  setLoading(true);
  setError("");
  setHasSearched(true);

  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );

    const data = await response.json();

    setRecipes(data.recipes);
  } catch {
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Recipe Inspiration</h2>
<form
  onSubmit={(event) => {
    event.preventDefault();
    handleSearch();
  }}

  className="flex gap-3 mb-6"
>
     <input
  type="text"
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  placeholder="Search for recipes..."
  aria-label="Search for recipes"
  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-lg text-gray-900 placeholder:text-gray-500"
/>

      <button
  type="submit"
  className="bg-pink-500 text-white px-5 py-2 rounded-lg"
>
  Search
</button>
      </form>

      {loading && <p>Loading recipes...</p>}
      {error && <p>{error}</p>}

    {hasSearched && !loading && !error && recipes.length === 0 && (
  <p>No recipes found</p>
)}

      <div className="grid grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
           <Image
  src={recipe.image}
  alt={recipe.name}
  width={500}
  height={300}
   loading="lazy"
  className="w-full h-48 object-cover rounded-lg"
/>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.name}</h3>
              <p>Cuisine: {recipe.cuisine}</p>
              <p>Difficulty: {recipe.difficulty}</p>
              <p>Prep time: {recipe.prepTimeMinutes} min</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
