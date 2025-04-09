import { useStore } from "../../hooks/useStore";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react";

export const ProtectedRoute = observer((props) => {
  const { rootStore } = useStore();

  const {
    authStore: { isAuthenticated },
  } = rootStore;

  const isAuthUser = isAuthenticated;

  if (!isAuthUser) {
    return <Navigate to="/auth" />;
  }

  return props.children;
});
