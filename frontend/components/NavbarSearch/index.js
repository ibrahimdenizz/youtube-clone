import { MicIcon, SearchIcon } from "../icons";
import style from "./style.module.scss";

function NavbarSearch({ className }) {
  return (
    <div className={`d-flex ${className || ""}`}>
      <div className={style["input-wrapper"]}>
        <input
          type="text"
          placeholder="Search"
          className={`input-group ${style["input"]}`}
        />
      </div>
      <div className={style["search-icon"]}>
        <SearchIcon />
      </div>
      <div className={style["mic-icon"]}>
        <MicIcon />
      </div>
    </div>
  );
}

export default NavbarSearch;
