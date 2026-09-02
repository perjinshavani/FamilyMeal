
   export default function WeeklyMealPlan() {
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
              <td className="px-4 py-4 font-medium text-zinc-800">
                {day}
              </td>
              <td className="px-4 py-4 text-zinc-600">-</td>
              <td className="px-4 py-4 text-zinc-600">-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

    
