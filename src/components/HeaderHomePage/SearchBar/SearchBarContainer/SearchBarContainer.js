import React from "react";
import styles from "./SearchBarContainer.module.css";
import button from "../../../../UI/Button.module.css";
import { FormControl } from "../StyledComponent/StyledComponent";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import { useDispatch, useSelector } from "react-redux";
import { DatePickerActions } from "../../../../store/datePickerModal";
import { Form, useNavigate } from "react-router-dom";
import { FilterActions } from "../../../../store/filterSearch";

function SearchBarContainer(props) {
  const { dateSelected } = useSelector((state) => state.datePicker);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { isShowModal } = useSelector((state) => state.datePicker);

  const handleOpenModal = () => {
    dispatch(DatePickerActions.onOpenModal());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const filter = {
      city: formProps.detination,
      startDate: dateSelected?.startDate,
      endDate: dateSelected?.endDate,
      numberPeople: Number(formProps.adult) + Number(formProps.children),
      adult: Number(formProps.adult),
      children: Number(formProps.children),
      room: Number(formProps.room),
    };
    dispatch(FilterActions.onSaveFilter(filter));
    navigation("/search");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className={`${styles["searchbar-container"]}`}
    >
      <FormControl>
        <i className="fa fa-bed"></i>
        <input
          type="text"
          name="detination"
          placeholder="Where are you going?"
        />
      </FormControl>
      <FormControl>
        <i className="fa fa-calendar"></i>
        <DateRangePicker
          isShowSearchbar={true}
          isShowModal={isShowModal}
          onOpenModal={() => handleOpenModal()}
        />
      </FormControl>

      <FormControl>
        <i className="fa fa-female"></i>
        <input type="number" name="adult" placeholder="1 adult" />
        <span>&#x2022;</span>
        <input type="number" name="children" placeholder="0 children" />
        <span>&#x2022;</span>
        <input type="number" name="room" placeholder="1 room" />
      </FormControl>
      <button
        type="submit"
        className={`${button["btn"]} ${button["primary-color"]}`}
      >
        Search
      </button>
    </Form>
  );
}

export default SearchBarContainer;
