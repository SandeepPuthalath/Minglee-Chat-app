import React from "react";
import SearchComp from "../components/searchComp/SearchComp";
import UserCard from "../components/cards/UserCard";

const HomePage = () => {
  return (
    <div className="grid md:grid-cols-6 gap-2">
      <div className="md:col-span-2 grid gap-2 w-full bg-slate-100 rounded shadow p-2">
        {/* Search component */}
        <SearchComp />
        <div className="h-96 overflow-y-auto grid gap-2">
          {Array.from({ length: 10 }).map((val, index) => (
            <UserCard key={index} />
          ))}
        </div>
      </div>
      <div className="md:col-span-4"></div>
    </div>
  );
};

export default HomePage;
