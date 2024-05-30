/** @format */

import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormEvent } from "react";

export const Route = createFileRoute("/weather/")({
  component: Weather,
});

function Weather() {
  const navigate = useNavigate({ from: "/weather" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate({
      // @ts-ignore
      to: `/weather/${event.target.lat.value}/${event.target.lng.value}`,
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-1/2">
          <label htmlFor="lat">Latitude</label>
          <input type="number" name="lat" id="lat" className="border rounded" />
          <label htmlFor="lng">Latitude</label>
          <input type="number" name="lng" id="lng" className="border rounded" />
          <div className="flex justify-center">
            <button type="submit" className="rounded border px-2">
              Anzeigen
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
