export async function fetchCar(): Promise<any> {
    const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
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
  