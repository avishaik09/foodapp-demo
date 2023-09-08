import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Rohan", email: "rohan@gmail.com" },
});

export default UserContext;
