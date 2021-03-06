import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../pages/_app";
import Router from "next/router";
import Loader from "../../components/Loader";

const publicRoute = (Component = null, options = {}) => {
  const PublicRoute = () => {
    const { user } = useContext(userContext);
    const [state, setState] = useState({
      loading: true,
    });

    useEffect(() => {
      if (user.isLoggedIn) {
        return Router.push(options.pathAfterFailure || "/");
      }

      if (user.isLoggedIn === null) {
        setState({ loading: false });
      }
    }, [user]);

    if (state.loading) {
      return <Loader />;
    }

    return <Component />;
  };

  return PublicRoute;
};

export default publicRoute;
