import { Link } from "react-router-dom";
import { randomNumber } from "../utils/randomNumber";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="navbar mb-10">
      <div className="flex-1">
        <Link to={'/'} className="px-4 py-2 rounded-md hover:cursor-pointer hover:underline transition-all text-xl text-white font-bold">API-Explorer</Link>
      </div>
      <div className="flex-none">
        <Link to={`/${randomNumber(1, 300)}`}>
          <Button>Random Character</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
