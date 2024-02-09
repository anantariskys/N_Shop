import React from 'react'

const ProfileSection = ({userData}) => {
  return (
    <>
    <h2 className="text-center text-xl font-bold mb-4">Profile</h2>
    {userData&&<div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        <div>
          <p className="font-bold text-sm md:text-base">ID:</p>
          <p className=" text-sm md:text-base">{userData.id}</p>
        </div>
        <div>
          <p className="font-bold text-sm md:text-base">Email:</p>
          <p className=" text-sm md:text-base">{userData.email}</p>
        </div>
        <div>
          <p className="font-bold text-sm md:text-base">Username:</p>
          <p className=" text-sm md:text-base">{userData.username}</p>
        </div>
        <div>
          <p className="font-bold text-sm md:text-base">City:</p>
          <p className=" text-sm md:text-base">{userData.address.city}</p>
        </div>
        <div>
          <p className="font-bold text-sm md:text-base">Street:</p>
          <p className=" text-sm md:text-base">{userData.address.street}</p>
        </div>
        <div>
          <p className="font-bold text-sm md:text-base">Number:</p>
          <p className=" text-sm md:text-base">{userData.address.number}</p>
        </div>
        <div>
          <p className="font-bold text-sm md:text-base">Zipcode:</p>
          <p className=" text-sm md:text-base">{userData.address.zipcode}</p>
        </div>
      </div>}
    </>
  )
}

export default ProfileSection