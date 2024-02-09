import React from "react";
import service from "../../../public/home/service.svg";
import security from "../../../public/home/security.svg";
import delivery from "../../../public/home/delivery.svg";

const Service = [
  {
    title: "Pengiriman Cepat",
    desc: "Dapatkan pesanan Anda dengan cepat di N Shop. Kami mengutamakan pengiriman yang efisien dan tepat waktu untuk memastikan Anda dapat menikmati produk Anda dengan segera.",
    image: delivery,
  },
  {
    title: "Keamanan Transaksi",
    desc: "Beli dengan aman di N Shop. Kami menggunakan enkripsi data yang kuat untuk melindungi setiap transaksi Anda, sehingga Anda dapat berbelanja dengan percaya diri.",
    image: security,
  },
  {
    title: "Layanan Pelanggan 24/7",
    desc: "Layanan pelanggan kami tersedia 24/7. Tim kami siap membantu Anda kapan pun Anda membutuhkannya, untuk memberikan dukungan terbaik bagi setiap pelanggan kami.",
    image: service,
  },
];

const ServiceSection = () => {
  return (
    <div className=" w-full font-Poppins min-h-screen py-10 bg-base-200">
      <h2 className="text-5xl lg:text-7xl text-center font-bold mb-5 ">Service</h2>
      <div className="   w-full justify-center flex flex-wrap gap-5">
        {Service.map((item) => (
          <div className="card rounded-none w-72 bg-base-100 shadow-xl relative">
            <div className="h-1 w-3/4 bg-neutral absolute top-0 left-1/2 -translate-x-1/2"></div>
            <figure className="px-10 h-2/5 pt-10">
              <img loading='lazy' draggable={false} src={item.image} alt="Shoes" className="rounded-xl h-3/4 aspect-auto" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
