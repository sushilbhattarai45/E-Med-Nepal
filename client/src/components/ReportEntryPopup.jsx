import React from "react";
import Popup from "./Popup";
import styles from "../css/components/ReportEntryPopup.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const ReportEntryPopup = ({ state }) => {
  const { popup, setPopup } = state;
  const [formValues, setFormValues] = React.useState([
    { medicine: "", time: "", duration: "" },
  ]);

  const close = () => {
    setPopup(!popup);
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { medicine: "", time: "", duration: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <>
      <Popup
        title={"Report entry"}
        close={close}
        style={{ width: "min(700px,90%)" }}
      >
        <div className={styles.entry_body}>
          <div className={styles.input_box}>
            <div className={styles.input_label}>Hospital Name</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Hospital Name"
            />
            <label htmlFor="upload-photo">
              {pic ? (
                <div className={styles.img_con}>
                  <img src={pic} alt="doctor_pic" className={styles.img} />
                  <span onClick={() => setPic("")}>
                    <MdCancel />
                  </span>
                </div>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  component="label"
                  startIcon={<AiFillCamera />}
                >
                  Upload Photo
                  <input
                    required
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={getImg}
                  />
                </Button>
              )}
            </label>
            <Button
              variant="contained"
              component="label"
              style={{ marginTop: 24, width: "100%" }}
              onClick={() => {
                setReports((prev) => [
                  ...prev,
                  { img: imgUrl, imgText: imgText },
                ]);
                console.log({ img: imgUrl, imgText: imgText });
              }}
            >
              Upload Report
            </Button>
          </div>
          <div className={styles.input_box}>
            <div className={styles.input_label}>Doctor Name</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Doctor Name"
            />
          </div>
          <div className={styles.input_box}>
            <div className={styles.input_label}>Priority</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Priority"
            />
          </div>
          <div className={styles.input_box}>
            <div className={styles.input_label}>Department</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Department"
            />
          </div>
          <div className={styles.input_box}>
            <div className={styles.input_label}>Symptoms</div>
            <textarea
              className={styles.input_textarea}
              placeholder="Enter Symptoms"
            />
          </div>
          <div className={styles.input_box}>
            <div className={styles.input_label}>Description</div>
            <textarea
              className={styles.input_textarea}
              placeholder="Enter Description"
            />
          </div>
          <div className={styles.input_box}>
            <div className={styles.pre_con}>
              <div className={styles.input_label}>Prescription</div>
              <AiOutlinePlus
                className={styles.pre_add}
                onClick={addFormFields}
              />
            </div>
            {formValues.map((element, index) => {
              return (
                <div className={styles.medicine_con}>
                  <div className={styles.input_box}>
                    <div className={styles.med_label}>Medicine Name</div>
                    <input
                      className={styles.med_input}
                      type="text"
                      placeholder="Medicine Name"
                      value={element.medicine || ""}
                      onChange={(e) => handleChange(index, e)}
                      name="medicine"
                    />
                  </div>
                  <div className={styles.input_box}>
                    <div className={styles.med_label}>Time Interval</div>
                    <input
                      className={styles.med_input}
                      type="text"
                      placeholder="Time"
                      value={element.time || ""}
                      onChange={(e) => handleChange(index, e)}
                      name="time"
                    />
                  </div>
                  <div className={styles.input_box}>
                    <div className={styles.med_label}>Duration</div>
                    <input
                      className={styles.med_input}
                      type="text"
                      placeholder="Duration"
                      value={element.duration || ""}
                      onChange={(e) => handleChange(index, e)}
                      name="duration"
                    />
                  </div>
                  {index ? (
                    <button
                      type="button"
                      className={styles.remove_btn}
                      onClick={() => removeFormFields(index)}
                    >
                      <RxCross2 />
                    </button>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Popup>
    </>
  );
};

export default ReportEntryPopup;
