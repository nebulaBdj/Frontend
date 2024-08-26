import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>nav 바</div>
      <Outlet />
      <div>footer</div>
    </>
  );
}
