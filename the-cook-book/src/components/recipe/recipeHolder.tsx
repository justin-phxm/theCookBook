import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

export default function recipeHolder() {
  return (
    <div className=" bg-[#BCE3B2] w-full h-full p-3 rounded-lg">
      <div className="bg-slate-200 h-full p-4 rounded-lg">
        <div className="flex flex-row justify-between">
          <h1 className=' font-bold select-none text-xl'>
            Recipes
          </h1>
          <AiOutlinePlus className="text-2xl z-10 font-semibold hover:bg-slate-300 hover:rounded-md cursor-pointer"/>
        </div>
        <div className="overflow-auto">
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
