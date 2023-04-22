import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  console.log("🚀 ~ file: Toggle.tsx:5 ~ Toggle ~ toggle:", toggle);
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(e.target.checked);
  };
  return (
    <>
      <div>
        <input
          type="checkbox"
          id="switch"
          className="switch-input"
          onChange={handleToggle}
        />
        <label htmlFor="switch" className="switch" />
      </div>
    </>
  );
};

export default Toggle;
