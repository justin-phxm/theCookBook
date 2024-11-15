import ChatGPTInput from "./ChatGPTInput";

export default function recipeDetails() {
  return (
    <div className="h-full rounded-lg bg-slate-200 p-4">
      <h1 className="select-none pb-2 text-xl font-bold">Details</h1>
      <section className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="number"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pr-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-300 sm:text-sm sm:leading-6"
            placeholder="0.00"
            step="0.10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="rounded-md border-0 bg-transparent pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-300 sm:text-sm"
            >
              <option>$ / Serving</option>
              <option>$ / Kg</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="relative">
          <input
            type="number"
            className="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-300 sm:text-sm sm:leading-6"
            step="10"
          />
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <span className="text-gray-500 sm:text-sm">Calories</span>
          </div>
        </div>
        <textarea
          className="block w-full resize-none rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-300 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder="Notes..."
          required={true}
          rows={4}
        />
        <section className="border-t border-slate-500/50">
          <p className="select-none pb-2 text-xl font-bold">Use AI 💻🧠</p>
          <ChatGPTInput />
        </section>
      </section>
    </div>
  );
}
