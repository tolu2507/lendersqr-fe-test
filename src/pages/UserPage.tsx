import { Aside } from "../hooks/AsideHooks";
import { Body } from "../hooks/BodyHook";
import { Header } from "../hooks/HeaderHooks";

export const User = () => {
  return (
    <>
      <Header />
      <Aside />
      <Body />
    </>
  );
};
