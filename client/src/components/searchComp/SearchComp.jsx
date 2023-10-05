import React from "react";

const SearchComp = () => {
  return (
    <div className="flex gap-2 flex-col md:flex-row">
      <input
        className="w-full px-2 py-1 focus:outline-none border-2  border-slate-300 focus:border-slate-700 rounded focus:"
        placeholder="Enter username or email"
        type="text"
      />
      <button className="py-1 md:px-2 border-2 border-slate-800 hover:bg-white hover:text-slate-800 rounded bg-slate-800 capitalize text-slate-200">
        search
      </button>
    </div>
  );
};

export default SearchComp;
