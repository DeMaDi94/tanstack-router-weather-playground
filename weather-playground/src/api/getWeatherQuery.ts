/** @format */

import fetchWeather from "./fetchWeather";
import { queryOptions } from "@tanstack/react-query";

export const getWeatherQuery = (lat: string, lng: string) =>
  queryOptions({
    queryKey: ["weather", lat, lng],
    queryFn: () => fetchWeather(lat, lng),
    staleTime: 30 * 1000,
  });
