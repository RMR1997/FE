import React from "react";

export default function pen({ width, height, color }) {
  return (
    <svg
      viewBox="0 0 64 64"

      width={width}
      height={height}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#3333cc"
    >
      <g id="SVGRepo_bgCarrier"></g>
      <g
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>Edit</title> <desc></desc> <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          fill={color}
        >
          {" "}
          <g
            id="Pen"
            transform="translate(2.000000, 1.000000)"
            stroke="#ffffff"
          >
            {" "}
            <path
              d="M15.2,57.1 C14.4,57.9 13.2,57.9 12.4,57.1 L0,61.2 L4.1,48.8 C3.3,48 3.3,46.8 4.1,46 L14.5,38.4 C15.3,37.6 16.5,37.6 17.3,38.4 L22.8,43.9 C23.6,44.7 23.6,45.9 22.8,46.7 L15.2,57.1 L15.2,57.1 Z"
              id="Shape"
            >
              {" "}
            </path>{" "}
            <path d="M9.2,51.9 L0.7,60.5" id="Shape">
              {" "}
            </path>{" "}
            <circle
              id="Oval"
              cx="10.9"
              cy="49.9"
              r="2.9"
            >
              {" "}
            </circle>{" "}
            <path
              d="M26.2,43.2 C23.5,45.9 22.3,43.4 20,41.1 C17.7,38.8 15.3,37.6 17.9,34.9 C20.6,32.2 56.5,-3.7 60.6,0.5 C64.8,4.7 28.9,40.6 26.2,43.2 L26.2,43.2 Z"
              id="Shape"
            >
              {" "}
            </path>{" "}
            <path
              d="M20.5,33.1 L28.1,40.6"
              id="Shape"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
