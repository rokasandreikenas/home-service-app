import { PropsWithChildren, createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { LoginResponse, User } from "@/components/user/types";

const UserContext = createContext<{
  user: User | null;
  isLoggedIn: boolean;
  login: (user: LoginResponse) => void;
  logout: () => void;
}>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser, removeUser] = useLocalStorage<User | null>(
    "user",
    null
  );
  const [, setToken, removeToken] = useLocalStorage<string | null>(
    "token",
    null
  );

  const isLoggedIn = !!user;

  const login = (loginResponse: LoginResponse) => {
    setUser(loginResponse.user);
    setToken(loginResponse.token);
  };

  const logout = () => {
    removeUser();
    removeToken();
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
