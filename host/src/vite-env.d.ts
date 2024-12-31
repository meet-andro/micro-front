/// <reference types="vite/client" />

declare module "crypto/*" {
  import { RouteObject } from "react-router-dom";
  const App: () => RouteObject;
  export default App;
}

declare module "forex/*" {
  import { RouteObject } from "react-router-dom";
  const App: () => RouteObject;
  export default App;
}
