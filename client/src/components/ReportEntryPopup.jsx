import React from "react";
import Popup from "./Popup";

const ReportEntryPopup = ({ state }) => {
  const { popup, setPopup } = state;
  const close = () => {
    setPopup(!popup);
  };
  return (
    <>
      <Popup
        title={"Report entry"}
        close={close}
        style={{ width: "min(700px,90%)" }}
      >
        <div className={styles.entry_body}>
          
        </div>
      </Popup>
    </>
  );
};

export default ReportEntryPopup;
