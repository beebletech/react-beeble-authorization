import React from "react";
import { AuthorizeTypes } from "./Authorize.types";
import authorize from "../../hocs/authorize";

const Authorize = (props: AuthorizeTypes.Props) => {
  const Component = () => <>{props.children}</>;
  const AuthorizedComponent = authorize(Component, { roles: props.roles });
  return <AuthorizedComponent />;
};

export default Authorize;
