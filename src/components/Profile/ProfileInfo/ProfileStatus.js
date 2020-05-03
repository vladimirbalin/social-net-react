import React, { useEffect, useState } from "react";

export default function ProfileStatus({ status, setUserStatusThunk }) {
  let [editMode, setMode] = useState(false);
  let [tempStatus, setTempStatus] = useState(status);

  useEffect(() => {
    setTempStatus(status);
  }, [status]);

  const changeHandler = (e) => {
    setTempStatus((tempStatus = e.currentTarget.value));
  };

  const sendHandler = () => {
    setUserStatusThunk(tempStatus);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span className='profile__subtitles' onDoubleClick={() => setMode(true)}>status: </span>{status}
        </div>
      )}
      {editMode && (
        <div>
          <input
            onBlur={() => {
              setMode(false);
              sendHandler();
            }}
            onChange={changeHandler}
            value={tempStatus}
            autoFocus={true}
          />
        </div>
      )}
    </div>
  );
}
