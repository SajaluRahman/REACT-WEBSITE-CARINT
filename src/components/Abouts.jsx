import React, { useState } from 'react';
import imgs1 from '../Images/about-img.jpg';

function Abouts() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="min-h-[60vh] flex justify-center items-center mt-[80px] lg:mt-0">
        <div className="h-[70%] w-[90%] lg:w-[60%] mt-[-40px] flex flex-wrap lg:flex-nowrap">
          
          <div className="w-full lg:w-[50%] h-full flex justify-center items-center">
            <div className="h-[90%] w-[100%] lg:w-[100%]">
              <h2 className="text-[30px] font-bold">
                About <span className="text-[#0a97b0]"> Us</span>
              </h2>
              <p className="mt-[8px] w-full text-[15px] lg:text-[17px] h-[80%]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
                {showMore && (
                  <>
                    <br />
                    <br />
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the
                    first true generator on the Internet.
                  </>
                )}
              </p>
              <button
                className="bg-[#0a97b0] text-white w-[150px] h-[40px] mt-[18px]"
                onClick={toggleShowMore}
              >
                {showMore ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>

          
          <div className="flex justify-center items-center">
            <img
              src={imgs1}
              alt="About Us"
              className="w-[100%] lg:w-[83%] mt-[40px] lg:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouts;
