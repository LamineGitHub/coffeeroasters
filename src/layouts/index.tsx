import { Outlet } from "react-router-dom";

export function Layouts() {
  return (
    <>
      {/*<Header />*/}
      <main>
        <Outlet />
      </main>
      {/*<Footer />*/}
    </>
  )
}
