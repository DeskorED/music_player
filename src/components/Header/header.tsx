import { SearchBar } from "../SearchBar";

// @ts-ignore
import logo from "../../images/logo.jpg";

// @ts-ignore
import userPhoto from "../../images/userPhoto.jpg";

import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={logo} alt="" />
      </div>
      <div className="header__search">
        <SearchBar />
      </div>
      <div className="user-logo">
        <img className="user-logo__img" src={userPhoto} alt="" />
      </div>
    </header>
  );
};
