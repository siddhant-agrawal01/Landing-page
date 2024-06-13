import React from "react";
import Image from "next/image";
import star64 from "../../assets/star64.png";

const FAQ = () => {
  return (
    <div className="max-w-[1080px] mx-auto sm:mx-3 md:mx-auto">
      <div className="max-w-[1080px] mx-auto relative">
        <div className="w-full flex flex-col gap-2 mx-auto pt-8 px-4 mb-8">
          <h1 className="font-[ClashDisplay-Medium] tracking-wide text-lg text-red-600">
            FAQ
          </h1>
          <h1 className="text-5xl font-[ClashDisplay-Bold]">
            Frequently Asked <br></br> Questions
          </h1>
        </div>
        <Image
          src={star64}
          alt="/"
          className="absolute right-0 bottom-5 left-[600px]"
        />
      </div>
      <div className="flex flex-col  gap-4 mb-4">
        <div className="flex  flex-col sm:flex-row gap-4 mx-3">
          <div className=" w-full sm:max-w-[520px]  rounded-lg p-6 text-white bg-[#fd6257]">
            <h1 className="text-3xl pb-2 font-ClashDisplay-Semibold">
              The Best Financial Accounting <br></br> App Ever!
            </h1>
            <p className="text-lg font-ClashDisplay-Medium">
              &quot;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&quot;
            </p>
          </div>
          <div className="w-full sm:max-w-[520px] rounded-lg p-6 text-black bg-white">
            <h1 className="font-ClashDisplay-Semibold text-2xl pb-2">
              The Best Financial Accounting <br></br> App Ever!
            </h1>
            <p className="text-lg font-ClashDisplay-Medium text-[#797575]">
              &quot;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&quot;
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mx-3">
          <div className=" w-full sm:max-w-[520px]  rounded-lg p-6 text-black bg-white">
            <h1 className="font-ClashDisplay-Semibold text-2xl pb-2">
              The Best Financial Accounting <br></br> App Ever!
            </h1>
            <p className="text-lg font-ClashDisplay-Medium text-[#797575]">
              &quot;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&quot;
            </p>
          </div>
          <div className="w-full sm:max-w-[520px] rounded-lg p-6 text-white bg-[#fd6257]">
            <h1 className="font-ClashDisplay-Semibold text-2xl pb-2">
              The Best Financial Accounting <br></br> App Ever!
            </h1>
            <p className="text-lg font-ClashDisplay-Medium">
              &quot;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&quot;
            </p>
          </div>
        </div>
        <div className="flex  flex-col sm:flex-row gap-4 mx-3 ">
          <div className="w-full sm:max-w-[520px]  rounded-lg p-6 text-white bg-[#fd6257]  ">
            <h1 className="font-ClashDisplay-Semibold text-2xl pb-2">
              The Best Financial Accounting <br></br> App Ever!
            </h1>
            <p className="text-lg font-ClashDisplay-Medium">
              &quot;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&quot;
            </p>
          </div>
          <div className="w-full sm:max-w-[520px] rounded-lg p-6 text-black bg-white">
            <h1 className="font-ClashDisplay-Semibold text-2xl pb-2">
              The Best Financial Accounting <br></br> App Ever!
            </h1>
            <p className="text-lg font-ClashDisplay-Medium text-[#797575]">
              &quot;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
