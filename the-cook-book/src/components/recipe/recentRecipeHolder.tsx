import React from 'react'

export default function recentRecipeHolder() {
  return (
    <div className=" bg-[#BCE3B2] w-full h-full p-3 rounded-lg">
        <div className="bg-slate-200 h-full p-4 rounded-lg">
            <h1 className=' font-bold select-none text-xl'>
            Recipes
            </h1>
            <div className="overflow-auto flex flex-row">
                <div>Item1</div>
                <div>Item1</div>
                <div>Item1</div>
                <div>Item1</div>
                <div>Item1</div>
                <div>Item1</div>
                <div>Item1</div>
                <div>Item1</div>
                <div>Item1</div>
            </div>
        </div>
    </div>
  )
}
