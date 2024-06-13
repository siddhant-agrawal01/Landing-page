import React from 'react'
import custom from '../../assets/custom.png';
import blade from '../../assets/blade.png';
import star48 from '../../assets/star48.png'
import visa from '../../assets/visa.png'
import Image from 'next/image';
import premiumleft from "../../assets/premiumleft.png";

const Premium = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="relative w-[50%]">
            <Image src={star48} alt="/" className="absolute right-0  hidden lg:block" />
            <Image src={custom} alt="/" className="relative z-40  hidden lg:block" />
            <Image src={visa} alt="/" className="hidden lg:block lg:absolute lg:top-[174px] lg:left-48 lg:w-[40%] z-40 " />
            <Image src={premiumleft} alt='/' className='absolute  z-0 lg:top-0 right-10 top-[100px]  hidden lg:block' />

        </div>
        <div className="flex flex-col   w-full gap-2 lg:w-[50%] px-5">
            <div className="flex flex-col max-w-[505px] pb-4">
                <div className="flex items-center gap-4 py-6">
                    <div className="flex items-center justify-center p-3 bg-[#fc435c] rounded-full">
                        <Image src={blade} alt='/' className='' />
                    </div>
                    <p className="flex gap-2 font-ClashDisplay-Semibold text-2xl sm:text-2xl">Fully Customizable</p>
                </div> 
                <p className="sm:text-lg text-base font-ClashDisplay-Medium text-[#797575]">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
                    In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
                    blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
                    nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
                suspendisse aliquam.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
