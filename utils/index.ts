
import { CarProps, FilterProps } from "@/type";
import axios from "axios";

export async function fetchCar(filters: FilterProps): Promise<any> {
  const { manufacturer, year, model, limit, fuel } = filters;

  const params = {
    // make: manufacturer,
    // year: year?.toString(),
    model: model,
    // limit: limit?.toString(),
    // fuel_type: fuel,
  };

  const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params,
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': process.env.RAPIDAPI_HOST
    }
  };

  try {
    const response = await axios.request(options)
    if (!response) {
      throw new Error(`Error: ${response}`);
    }
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Failed to fetch car data:", error);
    throw error;
  }
}

export const caculateCarRent = (city_msg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = mileageFactor * city_msg;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};
