import { SearchBar } from "../SearchBar";
import { Logo } from "../Logo";
import { Button } from "../Button";

// @ts-ignore
import logo from "../../images/logo.webp";
// @ts-ignore
import userPhoto from "../../images/userPhoto.webp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" imageSrc={logo} />

      <Button
        className="move-buttons undo-arrow"
        child={<ArrowBackIosNewIcon htmlColor="white" />}
      />

      <Button
        className="move-buttons redo-arrow"
        child={<ArrowForwardIosIcon htmlColor="white" />}
      />

      <SearchBar className="header__search" />

      <Logo className="user-logo" imageSrc={userPhoto} />
    </header>
  );
};
