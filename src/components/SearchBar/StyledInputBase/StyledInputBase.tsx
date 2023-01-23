import { InputBase, styled } from "@mui/material";

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `1em`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
