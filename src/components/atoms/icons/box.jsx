import React from "react";

export default function box({height, width}) {
  return (
    <svg
      version="1.0"
      height={height}
      width={width}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" ></g>
      <g
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            fill="#231F20"
            d="M60,0H4C1.789,0,0,1.789,0,4v8c0,2.211,1.789,4,4,4v44c0,2.211,1.789,4,4,4h48c2.211,0,4-1.789,4-4V16 c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z M58,50.587L46.586,62H17.414L6,50.587V16h52V50.587z M6,60v-6.586L14.586,62H8 C6.896,62,6,61.104,6,60z M56,62h-6.586L58,53.414V60C58,61.104,57.104,62,56,62z M62,12c0,1.104-0.896,2-2,2H4 c-1.104,0-2-0.896-2-2V4c0-1.104,0.896-2,2-2h56c1.104,0,2,0.896,2,2V12z"
          ></path>{" "}
          <path
            fill="#231F20"
            d="M21,32h22c1.657,0,3-1.344,3-3s-1.343-3-3-3H21c-1.657,0-3,1.344-3,3S19.343,32,21,32z M21,28h22 c0.553,0,1,0.447,1,1s-0.447,1-1,1H21c-0.553,0-1-0.447-1-1S20.447,28,21,28z"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
