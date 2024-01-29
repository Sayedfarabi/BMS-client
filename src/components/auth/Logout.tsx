import { useAppDispatch } from "../../redux/hooks";
import { Button } from "antd";
import { logout } from "../../redux/features/auth/authSlice";

const Logout = () => {
  const dispatch = useAppDispatch();

  return <Button onClick={() => dispatch(logout())}>Log out</Button>;
};

export default Logout;
