import { CustomerFilter, Hero, SearchBar } from "@/components";
import { fetchCar } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const carData = await fetchCar();
  console.log(carData)
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
      </div>
    </main>
  );
}
