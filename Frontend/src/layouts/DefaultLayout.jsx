import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const DefaultLayout = () => {
  return (
    <>
      <main className="max-w-6xl m-auto h-screen flex flex-col px-4">
        <Header />
        <Outlet />
      </main>
    </>
  );
};
