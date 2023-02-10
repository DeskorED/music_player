import { tabs } from "../../constants/tabs";

import "./style.scss";

interface SideBarProps {
  className: string | undefined;
}

export const SideBar = ({ className }: SideBarProps): JSX.Element => {
  return (
    <div className={className}>
      {tabs.map((tab: { key: string; value: JSX.Element }) => (
        <div className="tabs__container" key={tab["key"]}>
          <button className="tabs__button" value={tab["key"]}>
            {tab["value"]}
          </button>
        </div>
      ))}
    </div>
  );
};
