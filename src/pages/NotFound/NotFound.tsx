import { WavyWarning } from "../../assets/svg/";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <WavyWarning className="w-[100px] h-[100px]" />
      <h2 className="mt-4 text-xl font-bold">404 Oops! This Page Could Not Be Found</h2>
      <br />
      <h3 className="mt-2">
        SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, <br />
        HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE
      </h3>
      <Link to="/" className="mt-6 text-blue-500 underline">
        GO TO HOMEPAGE
      </Link>
    </div>
  );
}

