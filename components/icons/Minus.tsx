import React from "react";

const Minus = ({
  height = 28,
  width = 28,
  className
}: {
  height?: number;
  width?: number;
  className?: string
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 14C21 14.2652 20.8946 14.5196 20.7071 14.7071C20.5196 14.8947 20.2652 15 20 15H6C5.73478 15 5.48043 14.8947 5.29289 14.7071C5.10536 14.5196 5 14.2652 5 14C5 13.7348 5.10536 13.4805 5.29289 13.2929C5.48043 13.1054 5.73478 13 6 13H20C20.2652 13 20.5196 13.1054 20.7071 13.2929C20.8946 13.4805 21 13.7348 21 14Z"
        fill="#CBD2D9"
      />
    </svg>
  );
};

export default Minus;
