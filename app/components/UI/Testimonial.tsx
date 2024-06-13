import React from "react";
import group from "../../assets/group.png";
import users from "../../assets/users.png";
import star64 from "../../assets/star64.png";
import star48 from "../../assets/star48.png";
import Image from "next/image";
import premiumleft from "../../assets/premiumleft.png";

import TextEffect from "./TextEffect.svg";

const Testimonial = () => {
  return (
    <div className="max-w-[1080px] mx-auto relative  sm:mx-3 md:mx-auto">
      <Image
        src={star64}
        alt="/"
        className="hidden sm:absolute sm:-top-16 sm:right-32"
      />
      <div className="w-full flex flex-col gap-2 mx-auto pt-8 px-4 text-center">
        <h1 className="tracking-widest font-ClashDisplay-Medium text-lg">
          TESTIMONIAL
        </h1>
        <h1 className="text-5xl font-ClashDisplay-Bold">
          What Our Users <br></br> Say About Us?
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[50%] relative">
          <Image src={group} alt="/" className=" relative z-40" />
          <Image src={star48} alt="/" className="absolute -left-32 bottom-10 " />
          <Image src={premiumleft} alt='/' className='absolute  z-0 lg:top-0 right-10 top-[100px]' />

        </div>
        <div className="flex flex-col gap-2 w-[50%] mt-12">
          <div className="flex flex-col gap-3 max-w-[505px] pb-4 items-start">
            <p className="flex gap-2 font-ClashDisplay-Semibold text-2xl sm:text-3xl">
              The Best Financial Accounting App Ever!
            </p>
            <p className="sm:text-lg text-base font-ClashDisplay-Medium text-[#797575]">
              &quot;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.&quot;
            </p>

            <Image src={users} alt="/" className="my-2 z-40" />
            {/* <div className="w-full md:w-[50%] relative ">
              <Image
                src={premiumleft}
                alt="/"
                className="absolute h-80 right-96 bottom-[80px]   z-0"
              />
              <Image src={users} alt="/" className="my-2 relative z-40" />
            </div> */}

            <p className="font-ClashDisplay-Semibold text-lg">Nick Jonas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
