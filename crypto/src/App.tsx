import Dashboard from "./pages/Dashboard";
import Statement from "./pages/Statement";
import Wallet from "./pages/Wallet";

const App = () => {
  return {
    path: "crypto",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "statement",
        element: <Statement />,
      },
    ],
  };
};

export default App;
