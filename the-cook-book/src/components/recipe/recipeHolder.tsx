import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

export default function recipeHolder() {
  return (
    <div>
        <div className=" bg-[#BCE3B2] w-full h-full p-3 rounded-lg">
          <div className="bg-slate-200 p-4 rounded-lg">
            <div className="flex flex-row justify-between">
              <h1 className=' font-bold select-none text-xl'>
                Recipes
              </h1>
              <AiOutlinePlus className="text-2xl z-10 hover:bg-slate-300 cursor-pointer"/>
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
    </div>
  )
}
