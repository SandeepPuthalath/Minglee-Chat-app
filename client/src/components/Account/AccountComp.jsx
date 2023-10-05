import React from 'react'

const AccountComp = () => {
  return (
    <button className="block w-10 h-10 cursor-pointer border-2 border-slate-300 focus:border-slate-700  rounded-full">
      <img
        src={"/imgs/blank-profile.png"}
        className=" rounded-full object-cover"
        alt=""
      />
    </button>
  );
}

export default AccountComp
