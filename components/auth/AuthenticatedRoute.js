import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../pages/_app";
import Router from "next/router";

const authenticatedRoute = (Component = null, options = {}) => {
  const AuthenticatedRoute = () => {
    const { isLoggedIn } = useContext(userContext);
    const [state, setState] = useState({
      loading: true,
    });

    useEffect(() => {
      if (isLoggedIn) {
        setState({ loading: false });
      } else {
        Router.push(options.pathAfterFailure || "/login");
      }
    }, [isLoggedIn]);

    if (state.loading) {
      return <div />;
    }

    return <Component />;
  };

  return AuthenticatedRoute;
};

export default authenticatedRoute;
