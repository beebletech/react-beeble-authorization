import React from "react";
import { FC, useContext } from "react";
import AuthorizationContext from "../contexts/authorization/AuthorizationContext";
import { AuthorizationContextTypes } from "../contexts/authorization/AuthorizationContex.types";

const authorize = <TProps extends {}>(
  Component: FC<TProps>,
  authorizationProps: AuthorizationContextTypes.Props
) => {
  const AuthorizedComponent = (props: TProps) => {
    const { roles: userRoles } = useContext(AuthorizationContext);
    const componentRoles = authorizationProps.roles;

    if (userRoles.some((role) => componentRoles.includes(role))) {
      return <Component {...props} />;
    } else {
      return <></>;
    }
  };

  return AuthorizedComponent;
};

export default authorize;
