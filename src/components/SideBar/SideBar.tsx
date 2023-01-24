import { tabs } from "../../constants/constants";

import "./style.scss";

interface SideBarProps {
  className: string;
}

export const SideBar = ({ className }: SideBarProps): JSX.Element => {
  return (
    <div className={className}>
      {tabs.map((tab:{key:string, value:JSX.Element}) => (
        <button className="tabs" key={tab["key"]} value={tab["key"]}>
          {tab["value"]}
        </button>
      ))}
    </div>
  );
};
