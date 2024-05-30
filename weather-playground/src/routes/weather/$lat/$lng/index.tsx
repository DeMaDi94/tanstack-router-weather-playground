/** @format */

import { createFileRoute } from "@tanstack/react-router";
import { getWeatherQuery } from "../../../../api/getWeatherQuery";
import { useSuspenseQuery } from "@tanstack/react-query";

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
