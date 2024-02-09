import React from "react";

import avatar1 from "../../../public/home/avatar1.jpg";
import avatar2 from "../../../public/home/avatar2.jpg";
import avatar3 from "../../../public/home/avatar3.jpg";
import avatar4 from "../../../public/home/avatar4.jpg";

const testimonialData = [
  {
    review: "Saya sangat senang dengan produk yang saya beli di N Shop. Kualitasnya luar biasa dan pengiriman sangat cepat!",
    author: "Sarah",
    location: "New York",
    image: avatar1,
  },
  {
    review: "Pengalaman berbelanja yang menyenangkan! Layanan pelanggan mereka sangat responsif dan membantu.",
    author: "John",
    location: "Los Angeles",
    image: avatar2,
  },
  {
    review: "Produk di N Shop benar-benar memenuhi ekspektasi saya. Harganya terjangkau dan kualitasnya sangat baik!",
    author: "Emily",
    location: "Chicago",
    image: avatar3,
  },
  {
    review: "Pilihan produk yang lengkap dan layanan pengiriman yang cepat membuat saya kembali lagi untuk berbelanja di N Shop.",
    author: "Michael",
    location: "Houston",
    image: avatar4,
  },
];

const TestimonialSection = () => {
  return (
    <div className=" w-full font-Poppins  min-h-screen py-10 bg-base-200">
      <h2 className="text-5xl lg:text-7xl text-center font-bold mb-5 ">Testimonial</h2>
      <div className="   w-full justify-center flex flex-wrap gap-x-5 gap-y-20 py-10">
        {testimonialData.map((item) => (
          <div className="md:w-[30rem] hover:-translate-y-2 shadow-md group hover:bg-neutral hover:text-neutral-content duration-300 ease-in-out w-44 bg-base-100 p-5 md:p-10 relative">
            <div className="h-full w-1 group-hover:bg-base-100 duration-300 ease-in-out absolute left-0 bg-neutral top-0"></div>
            <img loading="lazy" draggable={false} src={item.image} className='md:w-1/5 w-2/5 aspect-square rounded-full object-cover absolute left-1/2 -translate-x-1/2 -top-12 md:-top-16 shadow-md' alt="" />
            <h3 className="text-center text-xl font-bold">{item.author}, {item.location}</h3>
            <p className="text-center">"{item.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
