import React, { useState } from "react";
import styles from "./NewHotelForm.module.css";
import { Form } from "react-router-dom";

function NewHotelForm(props) {
  const { onCreateHotel, data } = props;
  const [distance, setDistance] = useState(data ? data.distance : "");

  const handleChangeDistance = (event) => {
    if (event.target.value < 0) {
      setDistance(Number(event.target.value) * -1);
    } else {
      setDistance(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const photoArr = formProps.photos.split(",");
    const featured = formProps.featured === "on" ? true : false;
    const freeCancel = formProps.freeCancel === "on" ? true : false;

    onCreateHotel({
      ...formProps,
      photos: photoArr,
      featured: featured,
      freeCancel: freeCancel,
    });
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
              Name<span>*</span>
            </label>
            <input
              defaultValue={data ? data.name : ""}
              type="text"
              name="name"
              placeholder="My Hotel"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              City<span>*</span>
            </label>
            <input
              defaultValue={data ? data.city : ""}
              type="text"
              name="city"
              placeholder="New York"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Distance from center<span>*</span>
            </label>
            <input
              type="number"
              name="distance"
              placeholder="500"
              value={distance}
              onChange={handleChangeDistance}
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Full Description<span>*</span>
            </label>
            <input
              defaultValue={data ? data.desc : ""}
              type="text"
              name="desc"
              placeholder="description"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Short Descirtion<span>*</span>
            </label>
            <input
              defaultValue={data ? data.shortDesc : ""}
              type="text"
              name="shortDesc"
              placeholder="short description"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Photos Link<span>*</span>
            </label>
            <textarea
              defaultValue={data ? data.photos : ""}
              name="photos"
              placeholder="Photos"
              required
            />
          </div>
        </div>
        <div>
          <div className={styles.form_controller}>
            <label>
              Type<span>*</span>
            </label>
            <input
              defaultValue={data ? data.type : ""}
              type="text"
              name="type"
              placeholder="hotel"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Address<span>*</span>
            </label>
            <input
              defaultValue={data ? data.address : ""}
              type="text"
              name="address"
              placeholder="Thong Nhat, Go Vap, Ho Chi Minh city"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Title<span>*</span>
            </label>
            <input
              defaultValue={data ? data.title : ""}
              type="text"
              name="title"
              placeholder="the best hotel"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>
              Tag<span>*</span>
            </label>
            <input
              defaultValue={data ? data.tag : ""}
              type="text"
              name="tag"
              placeholder="Free breakfast"
              required
            />
          </div>
          <div className={styles.form_controller}>
            <label>Featured</label>
            <input
              defaultChecked={data ? data.featured : false}
              type="checkbox"
              name="featured"
            />
          </div>
          <div className={styles.form_controller}>
            <label>Free Cancel</label>
            <input
              defaultChecked={data ? data.freeCancel : false}
              type="checkbox"
              name="freeCancel"
            />
          </div>
        </div>
      </div>
      <button type="submit">Send</button>
    </Form>
  );
}

export default NewHotelForm;
