import { SearchIcon, SidebarIcon } from "../icons";

function Navbar() {
  return (
    <div className="d-flex">
      <SidebarIcon />
      <SearchIcon color="white" />
    </div>
  );
}

export default Navbar;
