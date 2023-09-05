import React, { useState } from "react";
import { DateRange } from "react-date-range";
import styles from "./BookingDatePicker.module.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function BookingDatePicker(props) {
  const { onSelectDate } = props;
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const onChangeDate = (item) => {
    setState([item.selection]);
    onSelectDate({
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    });
  };
  return (
    <div className={styles.container}>
      <h3>Dates</h3>
      <DateRange
        className={styles.picker}
        editableDateInputs={true}
        onChange={(item) => onChangeDate(item)}
        ranges={state}
        minDate={new Date()}
        moveRangeOnFirstSelection={false}
      />
    </div>
  );
}

export default BookingDatePicker;
