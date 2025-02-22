import React from "react";

export const Cart = () => {
  return (
    <div>
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 10L11 14V28C11 28.5304 11.2107 29.0391 11.5858 29.4142C11.9609 29.7893 12.4696 30 13 30H27C27.5304 30 28.0391 29.7893 28.4142 29.4142C28.7893 29.0391 29 28.5304 29 28V14L26 10H14Z"
          stroke="#0D0D0D"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 18C24 19.0609 23.5786 20.0783 22.8284 20.8284C22.0783 21.5786 21.0609 22 20 22C18.9391 22 17.9217 21.5786 17.1716 20.8284C16.4214 20.0783 16 19.0609 16 18"
          stroke="#0D0D0D"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 14H29"
          stroke="#0D0D0D"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={20} cy={36} r={2} fill="#F91B1B" />
      </svg>
    </div>
  );
};
