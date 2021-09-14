import style from "./style.module.scss";

function NavbarYoutubeLogo({ lang, className }) {
  return (
    <div className={`${style["youtube-logo-wrapper"]} ${className || ""}`}>
      <div className={style["youtube-logo"]}></div>
      <span className={style["youtube-logo-lang"]}>{lang}</span>
    </div>
  );
}

export default NavbarYoutubeLogo;
