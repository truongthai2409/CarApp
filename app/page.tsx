import { CarCard, CustomerFilter, Hero, SearchBar } from "@/components";
import { HomeProps } from "@/type";
import { fetchCar, parseSearchParams } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {
  const filters = parseSearchParams(searchParams);

  try {
    const carData = await fetchCar(filters);
    const isDataEmpty = !Array.isArray(carData) || carData.length === 0;

    return (
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 padding-x padding-y" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the car</p>
          </div>
          <div className="home__filters">
            <SearchBar />
          </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {carData.map((item) => (
                  <CarCard key={item.id} car={item} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops. No results</h2>
              <p>
                {carData?.message || "No cars found for the selected filters."}
              </p>
            </div>
          )}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching car data:", error);
    return (
      <main className="overflow-hidden">
        <h1>Error: Unable to load car data</h1>
      </main>
    );
  }
}