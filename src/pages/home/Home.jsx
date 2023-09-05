import ListCityCard from "../../components/Cities/ListCard/ListCityCard";
import ListHotel from "../../components/Hotels/ListHotel/ListHotel";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import ListTypeHotel from "../../components/TypesOfHotel/ListTypeHotel/ListTypeHotel";
import styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { DatePickerActions } from "../../store/datePickerModal";
import { HotelAPI } from "../../apis/hotelAPI";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import LoadingPage from "../Loader/LoadingPage";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useLoaderData();
  const handleClick = (event) => {
    const clickedElement = event.target;
    if (!clickedElement.closest("#range-picker-container")) {
      dispatch(DatePickerActions.onCloseModal());
    }
  };

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={data}>
        {(data) => (
          <div onClick={(event) => handleClick(event)}>
            <div className={`${styles["home-container"]}`}>
              {data && (
                <>
                  <ListCityCard data={data.amountOfHotelByCity} />
                  <ListTypeHotel data={data.amountOfHotelbyType} />
                  <ListHotel data={data.top3Rating} />
                </>
              )}
            </div>

            <RegisterForm />
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default Home;

async function loadInfo() {
  const amountOfHotelByCity = await HotelAPI.amountByCity();
  const amountOfHotelbyType = await HotelAPI.amountOfType();
  const top3Rating = await HotelAPI.top3Rating();
  const result = {
    amountOfHotelByCity,
    amountOfHotelbyType,
    top3Rating,
  };
  return result;
}

export const loader = ({ params }) => {
  return defer({
    data: loadInfo(),
  });
};
