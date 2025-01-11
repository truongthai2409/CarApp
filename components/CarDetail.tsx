import React, { Fragment } from "react";
import { CarProps } from "@/type";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
const CarDetail = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={closeModal}
          as="div"
          className="relative z-10"
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-400"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </TransitionChild>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <DialogPanel
                  className="p-4 relative w-full max-w-lg max-h-[90vh] 
                  overflow-y-auto transform rounded-2xl bg-white 
                  text-left shadow-xl transition-all flex flex-col gap-5"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit rounded-full bg-primary-blue-100"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                  </button>
                  <div className="relative w-full h-50 bg-pattern bg-cover bg-center rounded-lg flex items-center justify-center">
                    {/* <Image
                      src=
                      alt="car-model"
                      
                      
                    /> */}
                    <img className="object-contain w-[300px] h-[200px]" src={generateCarImageUrl(car)} alt="" />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      {/* <Image
                        src="/hero.png"
                        alt="car-model"
                        fill
                        priority
                        className="object-contain"
                      /> */}
                      <img className="object-contain w-full h-full mt-2" src={generateCarImageUrl(car, '29')} alt="" />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      {/* <Image
                        src="/hero.png"
                        alt="car-model"
                        fill
                        priority
                        className="object-contain"
                      /> */}
                      <img className="object-contain w-full h-full" src={generateCarImageUrl(car, '33')} alt="" />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      {/* <Image
                        src="/hero.png"
                        alt="car-model"
                        fill
                        priority
                        className="object-contain"
                      /> */}
                      <img className="object-contain w-full h-full mt-2" src={generateCarImageUrl(car, '13')} alt="" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl font-semibold capitalize">
                      {car.make} {car.model}
                    </h2>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                      >
                        <h4 className="text-grey capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold capitalize">{value}</p>
                      </div>
                    ))}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetail;
