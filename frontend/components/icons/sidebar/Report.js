function Report({ className, width, height, color }) {
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
            d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"
            style={{ fill: color || "black" }}
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default Report;