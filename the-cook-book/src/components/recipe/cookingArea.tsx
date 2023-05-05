import React from 'react'

export default function cookingArea() {
  return (
<div>
    <div className=" bg-[#BCE3B2] w-full h-full p-3 rounded-lg">
        <div className="bg-slate-200 h-full p-4 rounded-lg">
            <div className="flex flex-row justify-between">
                <h1 className=' font-bold select-none text-xl'>
                    New Recipe
                </h1>
                <div className="flex flex-row">
                    <button className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer">
                        Save
                    </button >
                    <button className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer">
                        Edit
                    </button>
                </div>
            </div>
            <div>
                I would Like to make a new recipe
            </div>
        </div>
    </div>
</div>
  )
}
