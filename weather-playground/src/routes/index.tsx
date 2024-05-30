/** @format */

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="text-red-600">
      <h3>Welcome Home!</h3>
    </div>
  );
}
