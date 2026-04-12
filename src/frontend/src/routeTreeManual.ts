import { Route as rootRoute } from "./routes/__root";
import { Route as AboutRoute } from "./routes/about";
import { Route as ContactRoute } from "./routes/contact";
import { Route as IndexRoute } from "./routes/index";
import { Route as ServicesRoute } from "./routes/services";

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ServicesRoute,
  AboutRoute,
  ContactRoute,
]);
