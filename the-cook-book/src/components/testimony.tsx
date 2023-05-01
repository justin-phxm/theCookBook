import Image from 'next/image'
import testimony0 from '../../public/testimonyImage.png'
import { Card } from 'flowbite-react'
export default function testimony() {
  return (<>
    <div className="max-w-sm">
        <Card className="bg-[#A7E4AF] relative">
            <div className="flex flex-col items-center">
                <Image className="mb-3 h-24 w-24 rounded-full shadow-lg ring-2 ring-white
                absolute -top-1/2"
                    src={testimony0}
                    alt="Bonnie image"
                />
                <h5 className="mb-1 mt-3 text-xl font-medium text-gray-900 dark:text-white">
                    Olivia Cole
                </h5>
                <span className="text-sm text-gray-700 dark:text-gray-400 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. 
                </span>
            </div>
        </Card>
    </div>
  </>
  )
}
