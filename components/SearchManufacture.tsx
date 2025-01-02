"use client";
import { manufacturers } from "@/constants";
import { SearchManufactureProps } from "@/type";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";


const SearchManufacture = ({
  manufacturer,
  setManufacturer,
}: SearchManufactureProps) => {
  const [query, setQery] = useState("");
  const filterManufacturers = 
    query === "" 
      ? manufacturers 
      : manufacturers.filter((item) => (
        item.toLocaleLowerCase()
        .replace(/\s+/g, "")
        .includes(
          query.toLocaleLowerCase()
          .replace(/\s+/g, "")
        )
      ))
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car-logo"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQery(e.target.value)}
          ></ComboboxInput>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQery('')}
          >
            <ComboboxOptions>
              {filterManufacturers.length === 0 && 
                query !== "" ? (
                <ComboboxOption 
                  value={query}
                  className='search-manufacturer__option'
                >
                  Create "{query}"
                </ComboboxOption>
              ): (
                filterManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    value={item}
                    className={({ active}) => `realative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  >{item}</ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
