import React from "react";
import service from "../../../public/home/service.svg";
import security from "../../../public/home/security.svg";
import delivery from "../../../public/home/delivery.svg";
import ServiceCard from "../fragments/ServiceCard";
import { motion } from "framer-motion";

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
    <div className=" w-full overflow-hidden font-Poppins min-h-screen py-10 bg-base-200">
      <motion.h2
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        duration:0.5
      }}
      className="text-5xl lg:text-7xl text-center font-bold mb-5 ">Service</motion.h2>
      <div className="   w-full justify-center flex flex-wrap gap-5">
        {Service.map((item) => (
         <ServiceCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
