import { Button } from "../Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./style.scss";

interface arrowsProps {
  className: string | undefined;
}

export const Arrows = ({ className }: arrowsProps): JSX.Element => {
  return (
    <div className={className}>
      <Button
        className="move-buttons undo-arrow"
        child={<ArrowBackIosNewIcon htmlColor="white" />}
      />

      <Button
        className="move-buttons redo-arrow"
        child={<ArrowForwardIosIcon htmlColor="white" />}
      />
    </div>
  );
};
