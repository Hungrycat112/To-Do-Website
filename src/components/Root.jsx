import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Goals from "./Goals";
import NewGoals from "./NewGoals";
import CustomGoalPage from "./CustomGoalPage";
import Notes1 from "./Notes1"
import NewNotes from "./NewNotes"
import NotesGrid from "./NotesGrid"

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
    children: [
      {
        path: "newnotes",
        element: <NewNotes />
      },
      {
        path: "notes-grid",
        element: <NotesGrid />
      }
    ]
  },
  // {
  //   path: "/newnotes",
  //   element: <NewNotes />,
  // }
]);

export default function Root() {
  return (
    <main className={"page-container"}>
      <RouterProvider router={router} />
    </main>
  );
}
