import React from 'react'

const UserCard = () => {
  return (
    <div className="relative flex gap-2 p-1 rounded bg-slate-200 border-2 border-slate-200 shadow">
      <div className="block w-10 h-10 border-2 border-slate-300  rounded-full">
        <img
          src={"/imgs/blank-profile.png"}
          className=" rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <p className="text-slate-800 font-semibold capitalize">Sandeep P D</p>
        <p className="text-xs text-slate-800">This is the last message</p>
      </div>
      <p className=" absolute right-1 top-0 text-xs">10:30 am</p>
    </div>
  );
}

export default UserCard
