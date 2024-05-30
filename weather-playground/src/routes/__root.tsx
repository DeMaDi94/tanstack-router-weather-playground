/** @format */

import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  const queryClient = useQueryClient();
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/weather" className="[&.active]:font-bold">
          Wetter
        </Link>
      </div>
      <hr />
      <div className="p-4">
        <Outlet />
      </div>
      <ReactQueryDevtools initialIsOpen={false} client={queryClient} />
      <TanStackRouterDevtools />
    </>
  );
}
