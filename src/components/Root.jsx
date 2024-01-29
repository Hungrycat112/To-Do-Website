import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Goals from "./Goals";
import NewGoals from "./NewGoals";
import CustomGoalPage from "./CustomGoalPage";
import Notes1 from "./Notes1"
import Newnotes from "./NewNotes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/goals",
    element: <Goals />,
  },
  {
    path: "/create-goal",
    element: <NewGoals />,
  },
  {
    path: "/new-goal",
    element: <CustomGoalPage />,
  },
  {
    path: "/notes1",
    element: <Notes1 />,
  },
  {
    path: "./newnotes",
    element: <Newnotes />,
  }
]);

export default function Root() {
  return (
    <main className={"page-container"}>
      <RouterProvider router={router} />
    </main>
  );
}
