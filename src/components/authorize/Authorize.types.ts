import { AuthorizationContextTypes } from "../../contexts/authorization/AuthorizationContex.types";

export namespace AuthorizeTypes {
  export interface Props extends AuthorizationContextTypes.Props {
    children?: any;
  }
}
