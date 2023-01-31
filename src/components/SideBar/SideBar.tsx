import { tabs } from "../../constants/tabs";

import "./style.scss";

interface SideBarProps {
  className: string | undefined;
}

export const SideBar = ({ className }: SideBarProps): JSX.Element => {
  return (
    <div className={className}>
      {tabs.map((tab: { key: string; value: JSX.Element }) => (
        <button className="tabs" key={tab["key"]} value={tab["key"]}>
          {tab["value"]}
        </button>
      ))}
    </div>
  );
};
