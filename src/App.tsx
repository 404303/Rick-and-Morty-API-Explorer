import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Char from "./pages/Details.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Char />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col justify-between min-h-screen">
            <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
