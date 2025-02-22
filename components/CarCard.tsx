"use client";
import { CarProps } from "@/type";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { caculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import CarDetail from "./CarDetail";
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = caculateCarRent(city_mpg, year);
  const image =  generateCarImageUrl(car);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        {/* <Image
          src={image}
          alt="hero"
          fill
          priority
          className="object-contain"
        /> */}
        <img src={image} alt="" className="object-contain w-11/12 h-4/5 mx-auto"/>
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray">
          <div className="flex flex-col group-hover:invisible justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col group-hover:invisible justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="steering" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col group-hover:invisible justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="steering" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
          <div className="car-card__btn-container">
            <CustomButton
              title="View More"
              btnType="button"
              containerStyles="w-full py-[18px] rounded-xl bg-primary-blue"
              textStyle="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <CarDetail isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
    </div>
  );
};

export default CarCard;
