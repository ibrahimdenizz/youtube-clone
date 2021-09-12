function YourVideos({ className, width, height, color }) {
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
            d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"
            style={{ fill: color || "black" }}
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default YourVideos;
