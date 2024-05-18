/** @format */

import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 text-red-600">
      <h3>Welcome Home!</h3>
    </div>
  );
}
