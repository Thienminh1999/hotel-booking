import { useDispatch, useSelector } from "react-redux";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import SearchListContainer from "../../components/SearchList/SearchListContainer/SearchListContainer";
import styles from "./Search.module.css";
import { useCallback, useEffect, useState } from "react";
import { HotelAPI } from "../../apis/hotelAPI";
import LoadingPage from "../Loader/LoadingPage";
import { DatePickerActions } from "../../store/datePickerModal";

const Search = () => {
  const { filter } = useSelector((state) => state.filter);
  const [filterState, setFilterState] = useState(filter);
  const [hotels, setHotels] = useState();
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (event) => {
      const clickedElement = event.target;
      // check if click event is within div #range-picker-container
      if (!clickedElement.closest("#range-picker-container")) {
        dispatch(DatePickerActions.onCloseModal());
      }
    },
    [dispatch]
  );

  const onChangeFilter = useCallback((filterData) => {
    setFilterState(filterData);
  }, []);

  useEffect(() => {
    const loaderHotels = async () => {
      const res = await HotelAPI.searchHotels(filterState);
      setHotels(res);
    };

    loaderHotels();
  }, [filterState]);

  return (
    <div onClick={handleClick} className={styles.container}>
      <FilterSearch onChangeFilter={onChangeFilter} filterData={filterState} />
      {hotels && <SearchListContainer data={hotels} />}
      {!hotels && <LoadingPage />}
    </div>
  );
};

export default Search;
