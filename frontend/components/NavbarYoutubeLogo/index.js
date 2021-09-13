import style from "./style.module.scss";

function NavbarYoutubeLogo({ lang }) {
  return (
    <div class={style["youtube-logo-wrapper"]}>
      <div class={style["youtube-logo"]}></div>
      <span class={style["youtube-logo-lang"]}>{lang}</span>
    </div>
  );
}

export default NavbarYoutubeLogo;
