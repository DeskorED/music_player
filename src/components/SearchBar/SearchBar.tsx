import SearchIcon from "@mui/icons-material/Search";
import { SearchIconWrapper } from "./SearchIconWrapper";
import { Search } from "./Search";
import { StyledInputBase } from "./StyledInputBase";

import "./styles.scss";

interface SearchProps {
  className: string;
}

export const SearchBar = ({ className }: SearchProps): JSX.Element => {
  return (
    <div className={className}>
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
    </div>
  );
};
