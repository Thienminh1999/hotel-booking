import React, { useCallback, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { FormControl } from "../StyledComponent/StyledComponent";
import styles from "./DateRangePicker.module.css";
import { useDispatch } from "react-redux";
import { DatePickerActions } from "../../../../store/datePickerModal";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function DateRangePicker(props) {
  const dispatch = useDispatch();
  const { dataFilter } = props;
  const [valueInput, setValueInput] = useState("");
  const [state, setState] = useState([
    {
      startDate: dataFilter
        ? new Date(props.dataFilter?.startDate || new Date())
        : new Date(),
      endDate: dataFilter
        ? new Date(props.dataFilter?.endDate || new Date())
        : null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    let newValue = getValueSelectDate(state[0]);
    setValueInput(newValue);
  }, [state]);

  const onChangeDate = useCallback((item) => {
    setState([item.selection]);
    dispatch(
      DatePickerActions.onChangeDateSelected({
        startDate: item.selection.startDate,
        endDate: item.selection.endDate,
      })
    );
  }, []);

  const getValueSelectDate = useCallback((selection) => {
    let result = "";
    if (selection.startDate) {
      result += getDateTimeString(selection.startDate) + " to ";
    }

    if (selection.endDate) {
      result += getDateTimeString(selection.endDate);
    } else {
      result += "----";
    }

    return result;
  });

  const getDateTimeString = (date) => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div
      id="range-picker-container"
      className={`${styles["range-picker-container"]}`}
    >
      <FormControl>
        <input
          type="text"
          value={valueInput}
          onClick={() => props.onOpenModal()}
          onChange={() => {}}
          placeholder={`${getDateTimeString(new Date())} to ${getDateTimeString(
            new Date()
          )}`}
        />
      </FormControl>
      {props.isShowModal && (
        <DateRange
          className={`${styles["picker-modal"]}`}
          editableDateInputs={true}
          onChange={(item) => onChangeDate(item)}
          moveRangeOnFirstSelection={false}
          ranges={state}
          minDate={new Date()}
        />
      )}
    </div>
  );
}

export default DateRangePicker;
