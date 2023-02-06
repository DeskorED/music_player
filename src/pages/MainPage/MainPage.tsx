import { Main } from "../../components/Main";
import { Header } from "../../components/Header";

import React from "react";

interface mainPageProps {
  className: string | undefined;
}

export const MainPage = ({ className }: mainPageProps): JSX.Element => {
  return (
    <div className={className}>
      <Header />
      <Main />
    </div>
  );
};
