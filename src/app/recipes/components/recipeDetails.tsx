export default function recipeDetails() {
  return (
    <>
      <h1 className="select-none py-1.5 text-xl font-bold">Details</h1>
      <section className="flex flex-col gap-4 text-sm text-gray-500">
        <div className="relative flex gap-4 bg-inherit">
          <input
            type="number"
            className="w-3/5 rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryLight"
            placeholder="0.00"
            step="0.10"
          />
          <select className="w-2/5 rounded-md border-0 bg-transparent bg-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primaryLight">
            <option>$ / Serving</option>
            <option>$ / Kg</option>
            <option>Other</option>
          </select>
        </div>
        <div className="relative">
          <input
            type="number"
            className="w-full rounded-md border-0 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryLight"
            step="10"
            placeholder="0"
          />
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            Calories
          </div>
        </div>
        <textarea
          className="w-full resize-none rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryLight"
          placeholder="Notes..."
          rows={4}
        />
      </section>
    </>
  );
}
