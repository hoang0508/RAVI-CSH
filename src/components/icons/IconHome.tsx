import React from "react";

const IconHome = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_574_11930"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={24}
      >
        <rect x="0.5" width={24} height={24} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_574_11930)">
        <path
          d="M4.5 21V9L12.5 3L20.5 9V21H14.5V14H10.5V21H4.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default IconHome;
