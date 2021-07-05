import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../pages/_app";
import Router from "next/router";
import Loader from "../../components/Loader";
const authenticatedRoute = (Component = null, options = {}) => {
  const AuthenticatedRoute = () => {
    const { user } = useContext(userContext);
    const [state, setState] = useState({
      loading: true,
    });

    useEffect(() => {
      if (user.isLoggedIn === null) {
        return Router.push(options.pathAfterFailure || "/auth/login");
      }

      if (user.isLoggedIn) {
        setState({ loading: false });
      }
    }, [user]);

    if (state.loading) {
      return <Loader />;
    }

    return <Component />;
  };

  return AuthenticatedRoute;
};

export default authenticatedRoute;
