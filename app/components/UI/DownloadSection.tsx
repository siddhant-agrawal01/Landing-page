import React from "react";
import apple from "../../assets/apple.png";
import Image from "next/image";
import backgroundImage from "../../assets/Frame.png";
import overlayImage from "../../assets/overlayImage.png";
import star from "../../assets/whitestar.png";
import TextEffect from "./TextEffect.svg";

const DownloadSection = () => {
  return (
    <div
      className=" relative max-w-[1080px] mx-auto rounded mt-12 mb-12 bg-black z-80 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="absolute inset-0 z-0 -translate-y-40 ">
        <Image src={TextEffect} alt="Text Effect" className="absolute left-1" />
      </div> */}
      <div className=" relative flex justify-between items-center ">
        <div className="max-w-[550px] h-max flex flex-col gap-3 text-white p-16  z-10 relative ">
          <h1 className="text-4xl font-ClashDisplay-Bold">
            Ready To Get Started?
          </h1>
          <p className="font-ClashDisplay-Regular ">
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate
          </p>
          <button className="bg-white flex font-ClashDisplay-Semibold gap-3 items-center text-black text-center px-5 py-3 rounded-sm max-w-[200px]">
            Download App <Image src={apple} alt="/" />
          </button>
        </div>
      </div>
      <Image
        src={overlayImage}
        alt="Overlay"
        className="hidden md:block absolute top-1 right-0 w-[340px] h-[280px]"
        style={{ zIndex: 20 }}
      />
      <Image
        src={star}
        alt="Overlay"
        className="hidden md:block absolute top-5  right-80 w-[62px] h-[59px]"
        style={{ zIndex: 20 }}
      />
    </div>
  );
};

export default DownloadSection;
