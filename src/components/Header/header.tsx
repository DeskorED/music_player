import { SearchBar } from "../SearchBar";
import { Logo } from "../Logo";
import { Arrows } from "../Arrows";

// @ts-ignore
import logo from "../../images/logo.webp";
// @ts-ignore
import userPhoto from "../../images/userPhoto.webp";

import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" imageSrc={logo} />

      <Arrows className="move-button__arrows" />

      <SearchBar className="header__search" />

      <Logo className="user-logo" imageSrc={userPhoto} />
    </header>
  );
};
