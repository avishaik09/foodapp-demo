import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Rohan", email: "rohan@gmail.com" },
});

UserContext.displayName = "userContext";
export default UserContext;
