"use client";
import React, { useState } from "react";
import { Search as SearchIcon, X } from "react-feather";

const Search = ({data}) => {
  const [SearchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">

      <button onClick={() => setSearchOpen(!SearchOpen)}>
        <SearchIcon className="text-[#888888]" />
      </button>

      <div
        className={`${
          SearchOpen ? "" : "hidden"
        } flex gap-1 items-center justify-center`}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 rounded-2xl border-none focus:outline-none"
        />
        <button onClick={() => setSearchOpen(false)}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default Search;
