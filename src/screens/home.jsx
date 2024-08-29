import { useFetchMessages } from "../service/queries";
import { Button } from "../components/button/button";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  //   const messageData = useFetchMessages();
  //   console.log(messageData);
  return (
    <div className="w-screen h-screen p-2">
      <Link to="/">
        <Button text={"Home"} />
      </Link>
      <Link to="/sendEmail">
        <Button text={"Send Email"} />
      </Link>
      <Link to="/scheduleEmail">
        <Button text={"Schedule Email"} />
      </Link>
      <Link to="/trackEmail">
        <Button text={"Track Email Messages"} />
      </Link>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
