import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import ErrorPage from "./pages/ErrorPage"
import SchedulePage from "./pages/SchedulePage"
import HomePage from "./pages/HomePage"
import SettingsPage from "./pages/SettingsPage"
import ListPage from "./pages/ListPage"
import AddEditPage from "./pages/AddEditPage"
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "simple-booking",
        element: <SchedulePage />,
      },
      {
        path: "simple-booking-schedule",
        element: <SchedulePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "list",
        element: <ListPage />,
      },
      {
        path: "add",
        element: <AddEditPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}
export default App
