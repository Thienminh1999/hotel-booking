import React from "react";
import styles from "./NewRoomForm.module.css";
import { Form } from "react-router-dom";

function NewRoomForm(props) {
  const { hotelsSelect, onCreateRoom, data } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const roomNumbers = formProps.roomNumbers
      .split(",")
      .map((item) => Number(item));
    console.log({ ...formProps, roomNumbers: roomNumbers });
    onCreateRoom({ ...formProps, roomNumbers: roomNumbers });
  };
  return (
    <Form onSubmit={handleSubmit} className={styles.container}>
      <input
        name="_id"
        defaultValue={data ? data._id : ""}
        hidden
        type="text"
        readOnly
      />
      <div className={styles.form}>
        <div>
          <div className={styles.form_controller}>
            <label>
              Title<span>*</span>
            </label>
            <input
              defaultValue={data ? data.title : ""}
              type="text"
              name="title"
              placeholder="Title"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Price<span>*</span>
            </label>
            <input
              defaultValue={data ? data.price : ""}
              type="text"
              name="price"
              placeholder="500"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Room Numbers<span>*</span>
            </label>
            <textarea
              defaultValue={data ? data.roomNumbers.join(",") : ""}
              type="text"
              name="roomNumbers"
              placeholder="101,102"
              required
            />
          </div>
        </div>
        <div>
          <div className={styles.form_controller}>
            <label>
              Description<span>*</span>
            </label>
            <input
              defaultValue={data ? data.desc : ""}
              type="text"
              name="desc"
              placeholder="King size bed, 1 bad room"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Max People<span>*</span>
            </label>
            <input
              defaultValue={data ? data.maxPeople : ""}
              type="text"
              name="maxPeople"
              placeholder="2"
              required
            />
          </div>
          {!data && (
            <div className={styles.form_controller}>
              <label>Choose a hotel</label>
              <select name="hotelId">
                <option value="">Choose a hotel</option>
                {hotelsSelect?.map((item, index) => (
                  <option selected={item._id} key={index} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {data && (
            <div className={styles.form_controller}>
              <label>Hotel</label>
              <input
                defaultValue={data ? data.hotel.name : ""}
                type="text"
                readOnly
                disabled
              />
            </div>
          )}
        </div>
      </div>
      <button type="submit">Send</button>
    </Form>
  );
}

export default NewRoomForm;
