function Learning({ className, width, height, color }) {
  return (
    <div
      className={className}
      style={{ width: width || "24px", height: height || "24px" }}
    >
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "100%",
          height: "100%",
        }}
        class="style-scope yt-icon"
      >
        <g class="style-scope yt-icon">
          <path
            d="M16,21h-2.28c-0.35,0.6-0.98,1-1.72,1s-1.38-0.4-1.72-1H8v-1h8V21z M20,10c0,2.96-1.61,5.54-4,6.92V19H8v-2.08 C5.61,15.54,4,12.96,4,10c0-4.42,3.58-8,8-8S20,5.58,20,10z M15,18v-1.66l0.5-0.29C17.66,14.8,19,12.48,19,10c0-3.86-3.14-7-7-7 s-7,3.14-7,7c0,2.48,1.34,4.8,3.5,6.06L9,16.34V18H15z"
            style={{ fill: color || "black" }}
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default Learning;
