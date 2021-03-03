import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, authed, isLoading, ...rest }) {
  if (isLoading) {
    return <> </>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
