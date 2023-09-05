import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import MainLayout from "./layout/MainLayout/MainLayout";
import Login from "./pages/Login/Login";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import ErrorPage from "./pages/Error/ErrorPage";
import { loader as homepageLoader } from "./pages/home/Home";
import { loader as detailLoader } from "./pages/detail/Detail";
import { loader as transactionsLoader } from "./pages/transaction/TransactionPage";
import { loader as adminDashboardLoader } from "./pages/AdminDashboard/AdminDashboardPage";
import { loader as adminHotelsLoader } from "./pages/AdminHotels/AdminHotels";
import { loader as adminRoomsLoader } from "./pages/AdminRooms/AdminRooms";
import { loader as adminHotelSelectLoader } from "./pages/CreateRoom/CreateRoom";
import { loader as adminTransactionsLoader } from "./pages/AdminTransactions/AdminTransactions";
import { loader as adminRoomDetailLoader } from "./pages/EditRoom/EditRoom";
import { action as signupAction } from "./pages/SignUp/SignUp";
import EditHotel, {
  loader as adminHotelDetailLoader,
} from "./pages/EditHotel/EditHotel";
import TransactionPage from "./pages/transaction/TransactionPage";
import AdminDashboardPage from "./pages/AdminDashboard/AdminDashboardPage";
import AdminHotels from "./pages/AdminHotels/AdminHotels";
import CreateHotel from "./pages/CreateHotel/CreateHotel";
import AdminRooms from "./pages/AdminRooms/AdminRooms";
import CreateRoom from "./pages/CreateRoom/CreateRoom";
import AdminTransactions from "./pages/AdminTransactions/AdminTransactions";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import UnauthenticatePage from "./pages/Error/UnauthenticatePage/UnauthenticatePage";
import EditRoom from "./pages/EditRoom/EditRoom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboardPage />,
          loader: adminDashboardLoader,
        },
        {
          path: "hotels",
          element: <AdminHotels />,
          loader: adminHotelsLoader,
        },
        {
          path: "hotels/create",
          element: <CreateHotel />,
        },
        {
          path: "rooms",
          element: <AdminRooms />,
          loader: adminRoomsLoader,
        },
        {
          path: "rooms/create",
          element: <CreateRoom />,
          loader: adminHotelSelectLoader,
        },
        {
          path: "transactions",
          element: <AdminTransactions />,
          loader: adminTransactionsLoader,
        },
        {
          path: "hotels/:hotelId",
          element: <EditHotel />,
          loader: adminHotelDetailLoader,
        },
        {
          path: "rooms/:roomId",
          element: <EditRoom />,
          loader: adminRoomDetailLoader,
        },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home />, loader: homepageLoader },
        {
          path: "search",
          element: <Search />,
        },
        { path: "detail/:hotelId", element: <Detail />, loader: detailLoader },
        {
          path: "transactions",
          element: <TransactionPage />,
          loader: transactionsLoader,
        },
      ],
    },
    { path: "login", element: <Login /> },
    { path: "sign-up", element: <SignUp />, action: signupAction },
    { path: "unauthenticate", element: <UnauthenticatePage /> },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
