import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";

const ServerApp = ({ location }: { location: string }) => (
  <AppProviders>
    <StaticRouter location={location}>
      <AppRoutes />
    </StaticRouter>
  </AppProviders>
);

export default ServerApp;
