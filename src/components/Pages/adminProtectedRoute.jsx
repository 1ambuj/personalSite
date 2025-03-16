import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const AdminProtectedRoute = () => {
  const { currentUser, role, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return currentUser && role === "admin" ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminProtectedRoute;
