import NavbarYoutubeLogo from "../NavbarYoutubeLogo";
import {
  ApplicationsIcon,
  BarsIcon,
  CreateVideoIcon,
  NotificationIcon,
} from "../icons";

import style from "./style.module.scss";
import NavbarSearch from "../NavbarSearch";
import Image from "next/image";

function Navbar() {
  return (
    <div className={style["navbar"]}>
      <div className={`d-flex ${style["section"]}`}>
        <BarsIcon className={style["bars"]} />
        <NavbarYoutubeLogo className={style["logo"]} />
      </div>
      <NavbarSearch className={style["search"]} />
      <div className={`d-flex `}>
        <div className={`d-flex ${style["section"]}`}>
          <CreateVideoIcon className={style["right-icon"]} />
          <ApplicationsIcon className={style["right-icon"]} />
          <NotificationIcon className={style["right-icon"]} />
        </div>
        <img
          src="https://yt3.ggpht.com/yti/APfAmoGcf5Nf-PhE9He27ilw3P5u6g_sye-jL_3SdQ=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="profile"
          width="32"
          height="32"
          className={style["profile-img"]}
        />
      </div>
    </div>
  );
}

export default Navbar;
