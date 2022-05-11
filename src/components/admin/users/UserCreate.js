import { CreateGuesser, InputGuesser } from "@api-platform/admin";
import { PasswordInput, /*Create, SimpleForm*/ } from "react-admin"
import RolesInput from "./RolesInput";
const UserCreate = props => {

  return (
    <CreateGuesser {...props} >
      <InputGuesser source={"username"} />
      <InputGuesser source={"email"} />
      <PasswordInput source={"password"} />
      <RolesInput source={"roles"} />
    </CreateGuesser>
  )
};

export default UserCreate; 