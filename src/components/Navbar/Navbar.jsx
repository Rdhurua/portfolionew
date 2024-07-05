import React, { useEffect, useState } from 'react'
import { AlignJustify,X } from 'lucide-react';
 
const Navbar = () => {
   const [togg,setTogg]=useState(false);
    const handletogg=()=>{
       setTogg(!togg);
    }
  return (
    <div className=' flex justify-around items-center  max-w-full h-[10vh] bg-gradient-to-r from-slate-900 to blue-700 sticky '>
         <div className='  w-[33.33%] h-[45px]  mr-[240px] min-[320px]:mr-[55px] flex justify-center items-center'>
                   <img  className="h-[55px] w-[55px] sm:w-[55px]"src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png " alt="img" />
                    <span className='text-gray-400'>Rinku Dhurua</span>
          </div>
           <div className=' w-[33.33% ] h-[45px] '>
               <ul className='flex justify-between text-gray-400 max-sm:hidden'>
                 <li className='px-3 py-2 text-2xl mx-4'><a href="#">Home</a></li>
                 <li className='px-3 py-2 text-2xl mx-4'><a href="#">About</a></li>
                 <li className='px-3 py-2 text-2xl mx-4'><a href="#">Project</a></li>
                 <li className='px-3 py-2 text-2xl mx-4 '><a href="#">Contact</a></li>
               </ul>
                 <div className='md:hidden mt-2 min-[320px]:mx-0'>
                    { togg? <AlignJustify className='text-gray-400' onClick={handletogg}/>:<X className='text-gray-400'onClick={handletogg}/>}
                 </div>
           </div>
            
    </div>
  )
}

export default Navbar
