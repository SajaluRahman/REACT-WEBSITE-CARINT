import React from 'react'
import img1 from '../Images/s1.png'
import img2 from '../Images/s2.png'
import img3 from '../Images/s3.png'
import img4 from '../Images/s4.png'


function Services() {
  return (
    <div > 
      
      <div className=' min-h-[59vh] flex justify-center items-center mb-10'>
           <div className='w-[90%] lg:w-[60%] h-[90%] lg:mt-[10px]'> 
           <div className='h-[20%] lg:mt-[20px] '> 
             <span className='text-[35px] font-bold'> Our</span > <span className='text-[35px] text-[#0a97b0] font-bold'>  Services</span><br /> <p className='mt-2'>  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
            </div>
 
                <div className='h-[90%]  grid grid-cols-1 lg:grid-cols-2 pt-[20px] lg:mt-0 gap-12 '>

                    <div className=' flex '> 
                     <div className=' bg-[#f8f8f9] lg:flex pt-4 rounded-lg'>
                    <div className='h-[65px] min-w-[125px] w-[125px] flex justify-center items-start '><img src= {img1} alt="" className='w-[60%]' /></div>
                     <div > 
                      <h5 className='font-bold text-[22px]'>AIR TRANSPORT</h5>
                      <p className='text-[18px]'> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p><br />
                      <a href="" className='font-semibold'>Read More</a>
                     </div>

                     </div>

                    </div>

                    <div className=' flex '> 
                     <div className=' bg-[#f8f8f9] lg:flex pt-4 rounded-lg'>
                    <div className='h-[65px] min-w-[125px] w-[125px] flex justify-center items-start '><img src= {img2} alt="" className='w-[60%]' /></div>
                     <div > 
                      <h5 className='font-bold text-[22px]'>CARGO TRANSPORT</h5>
                      <p className='text-[18px]'> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p><br />
                      <a href="" className='font-semibold'>Read More</a>
                     </div>

                     </div>

                    </div>

                     <div className=' flex '> 
                     <div className=' bg-[#f8f8f9] lg:flex pt-4 rounded-lg'>
                    <div className='h-[65px] min-w-[125px] w-[125px] flex justify-center items-start '><img src= {img3} alt="" className='w-[60%]' /></div>
                     <div > 
                      <h5 className='font-bold text-[22px]'>TRUCKS TRANSPORT</h5>
                      <p className='text-[18px]'> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p><br />
                      <a href="" className='font-semibold'>Read More</a>
                     </div>

                     </div>

                    </div>

                    <div className=' flex '> 
                     <div className=' bg-[#f8f8f9] lg:flex  pt-4 rounded-lg'>
                    <div className='h-[65px] min-w-[125px] w-[125px] flex justify-center items-start '><img src= {img4} alt="" className='w-[30%]' /></div>
                     <div > 
                      <h5 className='font-bold text-[22px]'>TRAIN TRANSPORT</h5>
                      <p className='text-[18px]'> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p><br />
                      <a href="" className='font-semibold'>Read More</a>
                     </div>

                     </div>

                    </div>

                </div>

           </div>
            </div>    
      

    </div>
  )
}

export default Services