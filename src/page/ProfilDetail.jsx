import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileSection from "../components/section/ProfileSection";
import Transaction from "../components/section/TransactionSection";

const ProfilDetail = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/users/${id}`);
      setUserData(response.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-neutral">
      <div
        className="w-full h-[30vw]  relative"
        style={{
          backgroundImage: 'url("https://source.unsplash.com/random/1200x280/?nature")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className={`skeleton h-[30vh] md:h-[40vh] absolute inset-0 ${isLoading ? "visible" : "invisible"}`}></div>

        {isLoading ? (
          <div className="skeleton h-[50vh] absolute -bottom-40 left-28 aspect-square rounded-full shrink-0"></div>
        ) : (
          <img draggable={false} src="https://source.unsplash.com/random/random/?avatar" className=" h-[30vw] p-1 md:p-2 aspect-square rounded-full absolute -bottom-[15vw] left-[10vw] object-cover  bg-neutral shadow-sm" alt="" />
        )}

        {userData && (
          <>
            <p className="lg:text-5xl md:text-2xl text-lg font-bold text-base-100 absolute left-[42vw] bottom-1 md:bottom-2 lg:px-5 px-2 py-1 lg:py-4 bg-neutral bg-opacity-10 backdrop-blur-sm">
              {userData.name.firstname} {userData.name.lastname}
            </p>

            <p className="text-xs md:text-lg lg:text-2xl font-bold text-base-100 absolute right-2 top-2 md:top-0  md:bottom-2 backdrop-blur-sm">+{userData.phone}</p>
          </>
        )}
      </div>

      {userData && (
        <div className="pt-5 pb-10  flex justify-center md:justify-end px-5 md:px-10 w-full ">
          <div className="w-full md:w-4/5  lg:h-[80%] bg-base-100 px-4 md:px-20 py-10 md:py-20">
            <ProfileSection userData={userData} />

            <Transaction id={userData.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilDetail;
