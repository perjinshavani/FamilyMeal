type WeeklyMealPlanProps = {
  meals: Record<string, string>;
  onEditMeal: (day: string) => void;
  editingDay: string | null;
  editedMeal: string;
  onEditedMealChange: (meal: string) => void;
  onSaveMeal: () => void;
};

export default function WeeklyMealPlan({
  meals,
  onEditMeal,
  editingDay,
  editedMeal,
  onEditedMealChange,
   onSaveMeal,
}: WeeklyMealPlanProps) {
  
  
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <section className="bg-[#fff4e8] px-8 py-8">
      <h2 className="mb-6 text-3xl font-bold text-pink-500">
        Weekly Meal Plan
      </h2>

      <table className="w-full overflow-hidden rounded-xl bg-white shadow-sm">
        <thead className="bg-pink-100 text-pink-600">
          <tr>
            <th className="px-4 py-3 text-left">Day</th>
            <th className="px-4 py-3 text-left">Meal</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {days.map((day) => (
            <tr key={day} className="border-b border-pink-100">
              <td className="px-4 py-4 font-medium text-zinc-800">{day}</td>
              <td className="px-4 py-4 text-zinc-600">
                {editingDay === day ? (
                  <input
                    type="text"
                    value={editedMeal}
                    onChange={(event) => onEditedMealChange(event.target.value)}
                    className="rounded border px-2 py-1"
                  />
                ) : (
                  meals[day] || "-"
                )}
              </td>

              <td className="px-4 py-4">
                {meals[day] && (

                    editingDay === day ? (
      <button type="button" onClick={onSaveMeal}

       className="rounded-md bg-pink-500 px-3 py-1 text-sm font-semibold text-white hover:bg-pink-600"
      
      >
        Save
      </button>):(
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => onEditMeal(day)}
                      aria-label={`Edit meal for ${day}`}
                    >
                      ✏️
                    </button>

                    <button type="button" aria-label={`Delete meal for ${day}`}>
                        🗑
                    </button>
                  </div>
               ) )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
