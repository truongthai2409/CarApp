"use client";

import { ReactNode, useState } from "react";
import SearchManufacture from "./SearchManufacture";
import Image from "next/image";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  const SearchButton = ({ otherClass } : any) => {
    return (
      <button type="button" className={`-ml-3 z-10 ${otherClass}`}>
        <Image
          alt="magnifying"
          src="/magnifying-glass.svg"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    )
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton />
      </div>
      <div className="searchbar__item">
        <Image
          alt="search"
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
      </div>
    </form>
  );
};

export default SearchBar;
