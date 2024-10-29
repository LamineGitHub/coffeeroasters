import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer.tsx";

export function Layouts() {
  return (
    <>
      {/*<Header />*/}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
