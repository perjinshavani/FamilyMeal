import { Pencil, Trash2 } from "lucide-react";


type WeeklyMealPlanProps = {
  meals: Record<string, string>;
  onEditMeal: (day: string) => void;
  editingDay: string | null;
  editedMeal: string;
  onEditedMealChange: (meal: string) => void;
  onSaveMeal: () => void;
  onDeleteMeal: (day: string) => void;
};

export default function WeeklyMealPlan({
  meals,
  onEditMeal,
  editingDay,
  editedMeal,
  onEditedMealChange,
   onSaveMeal,
   onDeleteMeal,
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
    <section className="bg-[#fff4e8] px-4 sm:px-8 py-8">
      <h2 className="mb-6 text-3xl font-bold text-pink-500">
        Weekly Meal Plan
      </h2>

   <div  className="overflow-x-auto max-w-5xl">
  <table className="w-full table-fixed rounded-xl bg-white shadow-sm">
    
  

    
        
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
           <td className="px-4 py-4 text-zinc-600 break-words">
                {editingDay === day ? (
                  <input
                    type="text"
                    value={editedMeal}
                    maxLength={30}
                    onChange={(event) => onEditedMealChange(event.target.value)}
                    onKeyDown={(event) => {
    if (event.key === "Enter") {
      onSaveMeal();
    }
  }}
                    className="w-full min-w-0 rounded border px-2 py-1"
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
                      <Pencil size={18} />
                    </button>



                  <button
    type="button"
     onClick={() => onDeleteMeal(day)}
    aria-label={`Delete meal for ${day}`}
  >
    <Trash2 size={18} />
  </button>
                  </div>
               ) )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    
    </section>
  );
}
