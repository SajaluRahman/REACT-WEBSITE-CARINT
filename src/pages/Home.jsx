import React from 'react'

import Nav from '../components/Nav'
import Services from '../components/Services'
import Abouts from '../components/Abouts'
import client from '../Images/client-1.png'
import client2 from '../Images/client-2.png'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'









function Home() {
  return (
    <div >
      
      <Nav/>
      <div className="h-[85.7vh] w-full bg-bottom md:bg-top bg-[url('Images/slider-bg.jpg')] "  >
      <div className='h-full w-full bg-[#131313b9] '> </div>
      </div>
       
       <div><Services/></div>
       <div> <Abouts/></div>


        <div className="lg:h-[43.2vh]  min-h-0 bg-[url('Images/track-bg.jpg')] bg-cover mt-10">

          <div className=" h-full w-full bg-gradient-to-r from-[#000000ec] to-[#6160607c] flex items-center justify-center "> 
            <div className='h-[80%] w-full  flex items-center justify-center '>
              <div className=' w-[90%] h-full flex items-center'>
                 <div className='h-[70%] w-full  text-white '>
                   
                 <h2 className='lg:text-[33px] text-[30px] font-bold '>Track Your Shipment</h2>
                  <p className='lg:w-[51%] w-[91%] mt-3'>Iste reprehenderit maiores facilis saepe cumque molestias. Labore iusto excepturi, laborum aliquid pariatur veritatis autem, mollitia sint nesciunt hic error porro. Deserunt officia unde repellat beatae ipsum sed. Aperiam tempora consectetur voluptas magnam maxime asperiores quas similique repudiandae, veritatis reiciendis harum fuga atque.</p>
                 <form action=""  className='mb-3 mt-5'><input type="text" placeholder='Enter Your Tracking Number' className='w-[300px]  p-2' /> <button className='w-[200px] bg-[#0a97b0] p-2   lg:ml-[-10px]'>Track</button></form>
                    </div>
              </div>
                 </div>
                        </div>
                           </div> 

                                
                                <div className=' min-h-[60vh] lg:h-[60vh]  flex items-center justify-center mt-20 lg:mt-0 '>

                                  <div className='h-full w-[90%] lg:w-[60%] bg-white flex items-center justify-center '>

                                    <div className='h-[80%] w-full  '>  

                                      <div className='h-[20%] w-full  flex items-center justify-center '>
                                            <div className='h-full w-[76%] flex items-center   '>
                                                      <h2 className='text-[35px] font-bold'>What Says Our <span className='text-[#0a97b0]'>Client</span></h2>
                                            </div>
                                      </div>

                                      <div className='h-[80%] w-full  flex items-center justify-center '>

                                        <div className=' w-full lg:w-[80%]  h-full grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>

                                          <div >
                                            <div className='h-[75%] lg:h-[68%] border bg-white p-5'>
                                              <p>
                                                
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  
                                              </p>

                                            </div>
                                            <div className=' h-[32%] flex  items-center'>
                                              <div><img src={client} alt="" /></div>
                                              <div className='text-[20px] ml-2'> <p>Adisciping <br />magna</p></div>
                                            </div>
                                          </div>
                                          <div className=''>
                                            <div className='h-[75%] lg:h-[68%] border bg-white p-5'>
                                              <p>
                                                
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  
                                              </p>

                                            </div>
                                            <div className=' h-[32%] flex items-center'>
                                              <div><img src={client2} alt="" /></div>
                                              <div className='text-[20px] ml-2'> <p>Adisciping <br />magna</p></div>
                                            </div>
                                          </div>

                                        </div>

                                      </div>

                                    </div>
                                    
                                  </div>

                                </div>


                                  <div>
                                  <Contacts/>
                                  </div>


                                 
                                     <div>
                                      <Footer/>
                                     </div>


                            </div> 
  )
}

export default Home