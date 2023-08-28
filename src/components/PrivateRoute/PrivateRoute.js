import { Navigate, Outlet } from "react-router-dom";
import { useGetUserInfoQuery } from "../../features/usersApiSlice";
import Spinner from "../shered/Spinner/Spinner";
import Error from "../../pages/Error/Error"
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, error } = useGetUserInfoQuery();
  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    console.log(error.status)
    if(error.status === 401){
      dispatch(logout());
      return <Navigate to="/search" replace />;
    }
    return <Error/>
  } else {
    return (
      <Outlet />
    );
  }
};

export default PrivateRoute;
