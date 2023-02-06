import { SideBar } from "../SideBar";
import { TrackList } from "../TrackList";

import "./style.scss";

export const Main = (): JSX.Element => {
  return (
    <div>
      <SideBar className="side-bar" />
      <TrackList className="track-list" />
    </div>
  );
};
