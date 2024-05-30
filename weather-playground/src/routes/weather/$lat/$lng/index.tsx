/** @format */

import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeatherQuery } from "../../../../api/getWeatherQuery";

/** @format */
export const Route = createFileRoute("/weather/$lat/$lng/")({
  component: Index,
  loader: ({ context: { queryClient }, params: { lat, lng } }) =>
    queryClient.ensureQueryData(getWeatherQuery(lat, lng)),
});

function Index() {
  const { lat, lng } = Route.useParams();

  const { data } = useSuspenseQuery(getWeatherQuery(lat, lng));
  console.log(data);

  return <>{data.current.temperature_2m}</>;
}
