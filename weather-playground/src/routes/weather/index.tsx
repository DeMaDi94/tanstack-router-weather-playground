/** @format */

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/weather/")({
  component: () => <div>Gibt Daten ein!</div>,
});
