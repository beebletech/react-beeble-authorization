import { createContext } from "react";
import { AuthorizationContextTypes } from "./AuthorizationContex.types";

const AuthorizationContext = createContext<AuthorizationContextTypes.Props>(
  {} as AuthorizationContextTypes.Props
);

export default AuthorizationContext;
