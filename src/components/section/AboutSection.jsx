import React from 'react'
import AboutImage1 from "../../../public/home/aboutimage1.jpg";
import AboutImage2 from "../../../public/home/aboutimage2.jpg";
import AboutImage3 from "../../../public/home/aboutimage3.jpg";


const backgroundStyle1 = {
    backgroundImage: `url(${AboutImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const backgroundStyle2 = {
    backgroundImage: `url(${AboutImage2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const backgroundStyle3 = {
    backgroundImage: `url(${AboutImage3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

const AboutSection = () => {
  return (
    <div className="hero  min-h-screen bg-base-200">
    <div className="hero-content w-full h-full flex-col lg:flex-row font-Poppins">
      <div className="lg:w-1/2 w-full h-[50vh] flex lg:h-full relative items-center justify-center gap-4 lg:py-5 ">
        <div className=" absolute  -z-10 top-0 left-0 w-1/2 aspect-square rounded-full bg-neutral"></div>
        <div className=" absolute  -z-10 bottom-0 right-0 w-2/5 aspect-square rounded-full bg-neutral"></div>
        <img  loading='lazy' src={AboutImage1} className="w-[25%] object-cover object-center  hover:scale-110 duration-300 ease-in-out h-3/5 bg-base-100 rounded-3xl"></img>
        <img loading='lazy' src={AboutImage3} className="w-[25%] object-cover object-center hover:scale-110 duration-300 ease-in-out h-3/4 bg-base-100 rounded-3xl"></img>
        <img loading='lazy' src={AboutImage2} className="w-[25%] object-cover object-center hover:scale-110 duration-300 ease-in-out h-3/5 bg-base-100 rounded-3xl"></img>
      </div>
      <div className="lg:w-1/2 relative px-5 ">

        <h1 className="text-5xl lg:text-7xl font-bold">About</h1>
        <div className="w-2/4 h-1 bg-neutral"></div>
        <p className="py-6 text-xl">Destinasi belanja online terpercaya untuk semua kebutuhan Anda. Kami menawarkan berbagai produk berkualitas tinggi dengan harga yang kompetitif. Dibangun dengan komitmen untuk memberikan pengalaman berbelanja yang menyenangkan dan memuaskan bagi setiap pelanggan kami.</p>
      </div>
    </div>
  </div>
  )
}

export default AboutSection