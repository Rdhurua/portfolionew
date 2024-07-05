import React from 'react'
 import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
     
  return (
    <div>
      <div className=' max-h-[60vh] max-w-full '>
              

               <video src="https://cdn.pixabay.com/video/2023/07/21/172655-847860558_large.mp4" className='w-full opacity-50' autoPlay="true" loop muted></video>
              
             
      <div  className=' flex justfiy-center items-center  absolute top-14 right-5 left-5'>

          <div className='w-1/2 h-full flex justify-center items-center '>
             <h2 className='sm:text-3xl md:text-5xl text-gray-500 mt-2'>
                 <span  className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Hello,Myself Rinku</span>
                  <br />
              <span>I am a passionate</span>
               <br />
                
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    < Typewriter 
                         words={["Web-Developer","Software-Developer","Freelancer","Ceramic Engineer"]}
                         loop={50}
                          typeSpeed={ 120}
                           deleteSpeed={30}
                    />
                    </span>
                 </h2>
          </div>
          <div className=' w-1/2 h-full py-5'>
             
            <img src="./src/assets/images/rinku2.png"  className='max-h-[100%] max-w-full' alt="" />
          </div>
      </div>
            
      </div>
    </div>
  )
}

export default Home
