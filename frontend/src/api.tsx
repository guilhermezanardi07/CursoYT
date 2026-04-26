import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  count: number;
  result: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://finnhub.io/api/v1/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    if (error && error.isAxiosError) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};