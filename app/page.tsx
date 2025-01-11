import { CarCard, CustomerFilter, Hero, SearchBar } from "@/components";
import { fetchCar } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const carData = await fetchCar();
  console.log(carData);
  const isDataEmpty = !Array.isArray(carData) || carData.length < 1 || !carData;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explorer the car</p>
        </div>
        <div className="home__filters">
          <SearchBar /> 
          <div className="home__filter-container">
            {/* <CustomerFilter title="fuel"/> */}
            {/* <CustomerFilter title="year"/> */}
          </div>
        </div>
        {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {carData?.map((item) => <CarCard car={item}/>)}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Opps. No results</h2>
              <p>{carData?.message}</p>
            </div>
          )}  
      </div>
    </main>
  );
}
