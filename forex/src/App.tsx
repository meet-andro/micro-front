import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Strategy from "./pages/Strategy";

const App = () => {
  return {
    path: "forex",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "strategy",
        element: <Strategy />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  };
};

export default App;
