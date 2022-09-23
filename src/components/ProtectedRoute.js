import React from "react";
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ componet: Component, ...props }) => {
  return (
    <Route>
      {() => {
        console.log(<Component />);
        props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-up" />
        }
      }
    </Route>
  );
};

export default ProtectedRoute;
