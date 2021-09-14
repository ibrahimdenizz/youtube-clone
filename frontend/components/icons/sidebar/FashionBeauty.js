function FashionBeauty({ className, width, height }) {
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
          <path d="M12.5,6.44v-0.5C13.36,5.71,14,4.93,14,4c0-1.1-0.9-2-2-2s-2,0.9-2,2h1c0-0.55,0.45-1,1-1s1,0.45,1,1s-0.45,1-1,1h-0.5v1.44 L4,13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2L12.5,6.44z M6.66,12L12,7.33L17.34,12H6.66z M14,18H7v-5h7V18z M15,15v-2h2v2H15z"></path>
        </g>
      </svg>
    </div>
  );
}

export default FashionBeauty;
