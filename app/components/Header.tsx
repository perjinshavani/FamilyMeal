export default function Header() {
  const getWeekNumber = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);

    const days = Math.floor(
      (today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
    );

    return Math.ceil((days + startOfYear.getDay() + 1) / 7);
  };

  return (
    <header className="bg-white px-8 py-6 shadow-md">
      <h1 className="text-4xl font-bold text-pink-500">Family Meal Planner</h1>
      <p className="mt-2 text-lg text-zinc-800">Plan your meals for the week!</p>
      <p className="mt-3 font-semibold text-pink-500">Week {getWeekNumber()}</p>
    </header>
  );
}