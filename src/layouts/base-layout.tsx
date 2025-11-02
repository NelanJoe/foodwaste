import { Outlet } from "react-router";
import Header from "@/components/header";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <main className="max-w-md mx-auto px-4">
        <Outlet />
      </main>
    </>
  );
}
