import SearchIcon from "@mui/icons-material/Search";
import { SearchIconWrapper } from "./SearchIconWrapper";
import { Search } from "./Search";
import { StyledInputBase } from "./StyledInputBase";

import "./styles.scss";

export const SearchBar = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon htmlColor="white" />
      </SearchIconWrapper>
      <StyledInputBase
        className="search__input"
        placeholder="Type your music request"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};
