import React, { useCallback } from "react";
import styles from "./FilterSearch.module.css";
import { FormControl } from "../../UI/FeaturedItems";
import button from "../../UI/Button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { DatePickerActions } from "../../store/datePickerModal";
import DateRangePicker from "../HeaderHomePage/SearchBar/DateRangePicker/DateRangePicker";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Form } from "react-router-dom";

function FilterSearch(props) {
  const { onChangeFilter } = props;
  const dispatch = useDispatch();
  const { isShowModal } = useSelector((state) => state.datePicker);
  const { dateSelected } = useSelector((state) => state.datePicker);
  const handleOpenModal = useCallback(() => {
    dispatch(DatePickerActions.onOpenModal());
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const filter = {
      city: formProps.detination,
      startDate: dateSelected?.startDate,
      endDate: dateSelected?.endDate,
      numberPeople: Number(formProps.adult) + Number(formProps.children),
      room: Number(formProps.room),
    };
    onChangeFilter(filter);
  };

  return (
    <Form onSubmit={handleSubmit} className={`${styles["form-filter"]}`}>
      <h3>Search</h3>
      <FormControl>
        <label>Destination</label>
        <input
          defaultValue={props.filterData.city}
          type="text"
          placeholder="Where are you going?"
          name="detination"
        />
      </FormControl>
      <FormControl>
        <label>Check-in Date</label>
        <DateRangePicker
          dataFilter={props.filterData}
          isShowSearchbar={true}
          isShowModal={isShowModal}
          onOpenModal={() => handleOpenModal()}
        />
      </FormControl>

      <FormControl>
        <label>Options</label>
        <div className="options-item">
          <label>Min price per night</label>
          <input name="minPrice" type="number" min={1} />
        </div>
        <div className="options-item">
          <label>Max price per night</label>
          <input name="maxPrice" type="number" min={1} />
        </div>
        <div className="options-item">
          <label>Adult</label>
          <input
            defaultValue={props.filterData.adult}
            name="adult"
            type="number"
            min={0}
          />
        </div>
        <div className="options-item">
          <label>Children</label>
          <input
            defaultValue={props.filterData.children}
            name="children"
            type="number"
            min={0}
          />
        </div>
        <div className="options-item">
          <label>Room</label>
          <input
            defaultValue={props.filterData.room}
            name="room"
            type="number"
            min={0}
          />
        </div>
      </FormControl>
      <button className={`${button["btn"]} ${button["primary-color"]}`}>
        Search
      </button>
    </Form>
  );
}

export default FilterSearch;
