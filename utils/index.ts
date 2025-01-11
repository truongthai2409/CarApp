import { CarProps } from "@/type";

export async function fetchCar(): Promise<any> {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=camry";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c8a6c41910mshaaa84b51b84abefp17fe4cjsn6660737df5fd",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
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
}
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const {make, year, model} = car;
  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)
  console.log(url);
  return `${url}`;
}