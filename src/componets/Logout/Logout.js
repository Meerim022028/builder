import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth";

const Logout = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    history.replace("/");
  }, [dispatch, history]);

  return null;
}
 
export default Logout;