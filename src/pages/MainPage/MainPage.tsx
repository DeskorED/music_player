import { Main } from "../../components/Main";
import { Header } from "../../components/Header";

import { SpotifyRequestServices } from "../../services";
import React, { useState } from "react";

interface mainPageProps {
  className: string | undefined;
}

export const MainPage = ({ className }: mainPageProps): JSX.Element => {
  const [response, setResponse]: [any, any] = useState();

  const spotifyResponse = () =>
    SpotifyRequestServices.sendRequest().then((response) =>
      console.log(response)
    );
  spotifyResponse();
  return (
    <div className={className}>
      <Header />
      <Main />
    </div>
  );
};
